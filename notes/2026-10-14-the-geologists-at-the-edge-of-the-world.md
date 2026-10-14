# The Geologists at the Edge of the World
*Hermeticon · an engineering crossing · October 14, 2026*

**[Enter Hermeticon](https://bonoj.github.io/Hermeticon/)**

> “This game does not exist.”
>
> After the customary qualifications, we agreed to build it anyway.

## The boundary that would not be disguised

Hermeticon is a spherical window into a mutable signed-volume geological world. The terrain is not a sheet with decorative depth: a positive signed field describes solid material; zero crossings describe surfaces; vertical bores pierce the slab, relief changes upper and lower faces independently, and a Wanderer moves over it. A sphere of radius 10.25 encloses a glass interior radius 10.07; the terrain shader currently clips against a spherical aperture radius 9.92. Terrain geometry is extracted from an 85 × 21 × 85 field using marching tetrahedra, in 81 chunks.

The equatorial cutaway was stubborn. We tried ten treatments: geological curtain, pin toy, twin waterfalls, equifog, brass occlusion, curtain/fog and curtain/brass combinations, surface stitching, shader-only transition, and full intersection. None adequately explained the actual geology. A fog spilling over the edge sounded promising, but only if the underlying solid/void structure could be measured cheaply and honestly. The design rule emerged: **do not invent geometry to explain reality; ask the geological field where the geometry belongs.**

An early cylindrical lattice placed 3,744 beads and 7,946 links at arbitrary heights. It ran well but described a cage, not the geological boundary. We removed the links and sampled signed-field zero crossings on the spherical aperture itself. A single instanced brass-bead draw call gave a visible contour. The beads tracked hills and depressions while the Wanderer moved. The experiment succeeded because it separated a *witness* from a *visual treatment*.

## Make the world punch itself

To avoid forcing the human to walk the Wanderer around merely to gather evidence, we authored a stationary stress fixture. It contains through-bores near the aperture, top and bottom relief, and four broad mountains near the rim. All are operations on the same signed field, not visual props. The 👁 inspection report exposes operations, mesh statistics, crossings, interval counts, performance, and build identity. The Wanderer remained at [0,0] throughout the reported tests.

We extracted a pure reusable module, `arcana/boundary.js`: sample a vertical curve against any signed field, bracket and refine sign changes, and return **solid intervals**, including cases where an entire sampled column is solid. A renderer consumes the result; the extractor knows nothing about brass, fog, shaders, or Hermeticon. It is important that topology and appearance have different owners.

The early stationary report at build `8db35c34` found 354 crossings, 177 intervals, 15 wholly void columns, and a 3.6 ms boundary rebuild. Its heuristic labeled all 354 crossings “bore,” an obvious classification bug: sampling horizontally near any surface zero crossing naturally encounters void. This was a diagnostic error, not evidence that every surface was a bore. The mountain build `8281dae3` yielded 119,090 terrain triangles, 348 crossings, 177 intervals, and 3.3 ms boundary extraction; screenshots confirmed the mountains existed and that beads followed a visible dark cutaway crest. Yet a bead chain could miss the apparent localized maximum.

The visual evidence forced a distinction: **the signed-field intersection with the spherical aperture is not necessarily the same as the camera-visible silhouette of terrain farther inside the sphere.** A pale mountain crest and a dark cutaway crest can be two different curves. The rendered marching-tetrahedra approximation may also differ from the continuous interpolated field. A screenshot alone cannot identify which discrepancy is responsible.

## The adaptive probe, and its limits

Build `0fe85128` tested angular subdivision rather than simply doubling all sampling. Starting with 192 angular columns, it examined midpoint crossing topology and curvature, adding samples at suspect locations. It also replaced the misleading bore heuristic with vertical solid-entry/exit labels and corrected the interval-count invariant.

The user-provided report at `0fe85128`:

| Witness | Measurement |
|---|---:|
| Base angular columns | 192 |
| Adaptive columns | 205 |
| Added subdivisions | 13 |
| Signed-field crossings / rendered beads | 369 |
| Vertical exits from solid (“upper”) | 181 |
| Vertical entries into solid (“lower”) | 188 |
| Solid intervals | 188 |
| Entirely void columns | 17 |
| Columns with multiple solid intervals | 0 |
| Interval accounting mismatches | 0 |
| Maximum midpoint excess over endpoints | 0.0229 world units |
| Boundary rebuild | 6.4 ms |
| Added draw calls | 1 |
| Reported instantaneous FPS | 64.51 |

The zero-mismatch check is arithmetic consistency, **not** proof that narrow features or every zero crossing were found. Likewise, “upper” and “lower” are presently *probe direction* labels, not authoritative geological surface identity. There are 181 exits and 188 entries because some sampled solid intervals are truncated by the sampling window; this deserves explicit endpoint accounting. No multi-interval column has yet been exercised in this fixture. The old `edgeGeometry` report still references radius 9.72 and is a stale comparison diagnostic, not the active 9.92 aperture.

The images showed that adaptive beads followed the dark contour better, but did not prove the pale mountain silhouette should match it. Increasing angular density alone cannot answer that question. The next measurement, if needed, compares (1) continuous signed-field crossings, (2) actual triangle/aperture intersections, and (3) camera-visible silhouettes.

## The human's interjection: four arrays

Then came the more important change of representation:

> “4 arrays. Surface terrain nodes, sdf surface nodes just below, sdf undersurface nodes, undersurface terrain nodes.
>
> Surface and undersurface nodes organize by find nearest highest (sighed) point whilst maintaining spread. So max ys are always found on surface min ys on undersurface.”

Instead of asking *how many uniformly spaced probes* to use, this asks **where the geometry requires witnesses**.

1. **Surface terrain nodes:** distribute over the upper geological surface and seek local high points, while maintaining coverage and separation. A node's neighborhood or territory prevents every node from collapsing onto the tallest mountain.
2. **Upper SDF nodes:** remain paired with upper terrain witnesses and sample or project toward the corresponding signed-field boundary, potentially slightly inside the solid for stability.
3. **Lower SDF nodes:** provide the analogous signed-field witnesses near the underside.
4. **Undersurface terrain nodes:** distribute over the underside, seeking local minima while maintaining coverage and separation.

This is a *proposal*, not an implemented or verified algorithm. In particular, “nearest highest” and “maintaining spread” need a precise objective and neighborhood rule. A local extremum should not attract every node; coverage must not erase small ridges. Paired SDF nodes should not blindly bridge voids or assume a single top/bottom sheet: bores, overhangs, and disconnected intervals complicate correspondence. Signed-field intervals remain the authority for where solid material actually exists, and adjacency needs explicit topology checks.

The four populations could become a deformable sensor network, using attraction toward meaningful extrema plus repulsion/coverage constraints. Such nodes could serve not just a cutaway treatment, but ridges, basins, excavation previews, near-contact regions, and later material interfaces. A geometry-aware distribution could represent a narrow peak with fewer total witnesses than a uniform angular lattice—**if** its optimization and topology are proven.

## Separation of authorities

There are at least four truths to keep distinct:

- **Geological truth:** signed density, material membership, bores, and solid intervals.
- **Extracted geometric truth:** the marching-tetrahedra triangle approximation and its intersections with the aperture.
- **Observed visual truth:** the projected, shaded, occluded silhouette from a particular camera.
- **Sensor-network truth:** the chosen nodes, their coverage, extrema, pairings, and confidence.

None is automatically interchangeable with another. The four-array idea should connect them deliberately, rather than forcing the field or the camera to pretend they are the same object.

The design constraint remains phone-first and cheap: boundary work occurs on relevant changes, not every frame; diagnostics are just-in-time; a single instanced draw call is preferable to a decorative forest of meshes. The recorded 6.4 ms is a rebuild cost, not a per-frame cost, and must be remeasured if the algorithm changes.

## Next experiments, in order

**First:** make a deterministic node-distribution experiment over the stationary mountain-and-bore fixture. Measure territory coverage, nearest-extremum capture, minimum separation, peak/minimum recall, and stability under small field changes. Show the four node populations in distinguishable diagnostic colors.

**Second:** compare the surface-node maxima and minima with the actual rendered triangle/aperture intersections. Quantify misses instead of relying on the silhouette alone.

**Third:** pair terrain and SDF witnesses only where geological membership supports it. Exercise an authored multi-interval column and a narrow bore; explicitly report invalid pairings and coverage gaps.

**Fourth:** let the boundary network drive an inexpensive visual treatment—perhaps the original darkness flowing over the edge—only after its geometry is trustworthy. Keep the brass witness available for inspection.

The key engineering discovery is not the beads, nor the fog, nor even the four arrays individually. It is the change of question:

> **Not “Where should we sample more densely?” but “Where does the geology demand that a node exist?”**

We came to the edge of the world to disguise it. Instead, we began to learn how to listen to it.

### Commit trail

- `c0900183` — spherical-rim signed-field beads, replacing the arbitrary cage.
- `8db35c34` — stationary punches, reusable interval extractor, corrected deployment after canonical-import validation failure.
- `8281dae3` — four additional rim-facing mountain fixtures.
- `0fe85128` — adaptive angular probes, directional crossing labels, interval instrumentation.

All numbers above are taken from user-supplied runtime 👁 reports, not claimed as exhaustive proof of geometric correctness.
