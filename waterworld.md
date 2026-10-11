# Waterworld: a conserved liquid inside a glass bauble

*Ledger account · October 2026 · executable witness: [Waterworld](https://bonoj.github.io/jit/waterworld/) · frozen at `waterworld-smooth-surface-v25`.*

This is an account of an experiment built collaboratively, not an implementation contract or a claim of physically complete fluid dynamics. The executable source is authoritative: [`bonoj/Repository/src/jit/waterworld/index.html`](https://github.com/bonoj/Repository/blob/main/src/jit/waterworld/index.html). The separate [Waterworld semantic surface](https://github.com/bonoj/Repository/blob/main/src/jit/waterworld/WATERWORLD.md) is a practical cold-start handoff. Ledger records the decisions, observed behavior, mathematics, and limitations.

## 1. The object and its material budget

The vessel is a transparent sphere with outer radius **10.25**, inner radius **10.07**, and glass thickness **0.18** in scene units. It begins with a shrinking source sphere of radius **3.05**, holding **30,000** discrete material units, above a collected body containing **215,944** units. Total material inventory is **245,944** units. A unit can reside in the source, be an active ballistic droplet, belong to the collector, or be caught as skiff cargo; transfers must not silently create or destroy units.

The source emits actual discrete 3D beads (rendered radius **0.055**, active cap **2,600**), while the settled body is represented by a continuum grid and a separate visual volume. The distinction matters: **245,944 conserved units are not 245,944 simultaneously simulated particles**.

A conserved-inventory diagnostic should satisfy

```text
sourceUnits + activeBeads + settledUnits + skiffCargoUnits
    = initialUnits = 245944
```

The INSPECT report uses its own explicit inventory fields and should be consulted when testing transfers. Splash ejecta are debited from the collector; when they return, they rejoin it. A bead caught by the boat becomes cargo, not newly generated water.

The material unit is a fixed volume quantum. In the v24 observation, **218,637** settled units represented collector volume **866.1449** scene-volume units, approximately **0.0039616** per settled unit.

## 2. Two ways of representing the same water

The experiment's central design choice is hybrid representation:

1. **Ballistic discrete beads** carry individually visible matter through 3D space, under gravity, wind, glass collisions, splash and collection.
2. **A 2.5D height/depth field** carries the bulk settled water efficiently over a spherical basin.
3. **A clipped spherical visual body plus an animated radial surface mesh** make that bulk look like a continuous volume of water.

These are connected but not identical representations. The source of a recurring class of bugs was treating a field, a mesh, and a physical constraint as interchangeable without explicitly defining the mapping.

### Spherical bed and grid

The transport solver uses **64 × 64** cells. With inner radius `R=10.07`, the grid spacing is

```js
const GRID = 64;
const DX = 2 * INNER_R / GRID;
const CELL = DX * DX;
const depthField = new Float32Array(GRID * GRID);
const velX = new Float32Array(GRID * GRID);
const velZ = new Float32Array(GRID * GRID);
const bed = new Float32Array(GRID * GRID);
const wet = new Uint8Array(GRID * GRID);
```

For a cell center `(x,z)` inside the sphere's horizontal footprint, the lower spherical boundary is

\[
b(x,z)=-\sqrt{R^2-x^2-z^2}.
\]

The local free-surface height is

\[
h(x,z)=b(x,z)+d(x,z),
\]

where `d` is nonnegative water-column depth. This is a **single-valued height field**, not a full 3D volume of interacting liquid cells. It cannot directly represent overturning breakers, caves, bubbles, or two distinct water heights above the same `(x,z)`.

**Naming trap:** `wet[i]` in the implementation marks a cell *inside the valid spherical footprint*. It does **not** mean the cell currently contains water. Actual occupancy also depends on `depthField[i]`.

### Initialization and volume

The spherical-cap volume at fill height `q=y+R` is

\[
V(q)=\pi q^2\left(R-\frac{q}{3}\right),\qquad 0\le q\le 2R.
\]

`waterlineForVolume()` numerically inverts this formula to establish a nominal global waterline `waterY`. The transport field initializes by finding a level `L` whose discretized column volumes match the collector volume:

\[
d_i=\max(0,L-b_i),\qquad
\sum_i d_i\Delta x^2\approx V_{collector}.
\]

The implementation uses binary search over `L`. The continuous spherical-cap formula and the discretized columns are two different volume approximations; small differences between nominal and field volumes can arise.

## 3. How the transport moves

The solver is **an explicit, conservative donor-cell depth transport with a velocity field**, driven by free-surface slopes, moving point gravity, wind and damping. It is shallow-water-inspired, but **not a complete conservative shallow-water-equations solver**.

For the horizontal velocities, the code samples neighboring free-surface heights and applies a centered slope force, plus horizontal point-gravity acceleration and a wind term:

```js
const L = /* left neighboring surface height */;
const R = /* right neighboring surface height */;
const D = /* down neighboring surface height */;
const U = /* up neighboring surface height */;
const drag = Math.exp(-.32 * dt);

nextVX[i] = (velX[i] + dt * (
  -g * (R-L)/(2*DX) + rx*factor + speed*.055
)) * drag;

nextVZ[i] = (velZ[i] + dt * (
  -g * (U-D)/(2*DX) + rz*factor
)) * drag;

nextVX[i] = Math.max(-24, Math.min(24, nextVX[i]));
nextVZ[i] = Math.max(-24, Math.min(24, nextVZ[i]));
```

Here `rx,ry,rz` point from a surface sample toward the pendular gravity source. The point-force magnitude is softened:

\[
\mathbf a(\mathbf p)=
\frac{gR_o^2(\mathbf p_g-\mathbf p)}
{\left(\|\mathbf p_g-\mathbf p\|^2+\epsilon^2\right)^{3/2}}.
\]

`R_o=12.2` is the gravity source's orbital radius; its motion has an **18-second** period and **0.36-radian** swing amplitude. Nominal strength at the center is **13.5**. The gravitational field varies across the vessel and over time.

For each adjacent pair of valid cells, the solver averages the corresponding velocity components. Positive edge velocity selects the first cell as donor; negative selects the second. The requested transfer is proportional to velocity, time, donor depth and inverse cell width:

```js
const velocity = (vi + vj) * .5;
const donor = velocity >= 0 ? i : j;
const receiver = velocity >= 0 ? j : i;
const wanted = Math.abs(velocity) * dt * depthField[donor] / DX;
const transfer = Math.min(wanted, Math.max(0,nextDepth[donor]) * .48);
nextDepth[donor] -= transfer;
nextDepth[receiver] += transfer;
```

This transfer is **equal and opposite**. For the pair, `d_i+d_j` is unchanged, apart from floating-point rounding. The **0.48 donor cap** prevents a single edge transfer from emptying the donor in one operation; it also limits how sharply and how quickly the scheme can propagate transport.

The solver then measures the field volume and scales all depths to the current collector volume:

```js
const scale = current > 0 ? waterVolume / current : 1;
for (let i=0; i<NC; i++) depthField[i] *= scale;
```

This global renormalization keeps the bulk representation tied to the discrete collector inventory when droplets arrive or depart. It is a **global correction**, not a strictly local finite-volume source term. The code reports `transportVolume=waterVolume` after correction; that diagnostic alone does not prove zero local numerical error.

**What is conserved:** transferred depth/volume to floating-point precision, corrected to the inventory target; global material units across source, droplets, collector and cargo.

**What is not conserved by this scheme:** full vector momentum or mechanical energy. Velocity is updated from local accelerations and drag but is not itself transported with the moving mass as conservative momentum flux. No physically rigorous pressure solver, viscosity model, or full three-dimensional incompressibility constraint exists.

## 4. THUMP and the wave ring

THUMP applies a radial **horizontal momentum-like velocity impulse** to occupied cells. Its amplitude decays away from the center:

\[
I(r)=18\exp\left(-\frac{r^2}{58}\right),
\]

with directional update approximately

\[
(\Delta v_x,\Delta v_z)
=I(r)\frac{(x,z)}{\max(r,0.3)}.
\]

Representative code:

```js
if (!wet[i] || depthField[i] < .08) continue;
const r = Math.hypot(px,pz);
const impulse = 18 * Math.exp(-r*r/58);
velX[i] += impulse * px / Math.max(r,.3);
velZ[i] += impulse * pz / Math.max(r,.3);
```

This is not a pressure explosion, displaced solid object, or vertical impulse. It injects radial horizontal velocity into the field. Waves then emerge from transport of depth under the altered velocities and surface-slope forces.

Repeated THUMPs were a useful stress test. A v24 INSPECT after **seven THUMPs** reported **wavePeak 3.68**, **waveEnergy 928.64**, **2,035 occupied cells**, **60.15 FPS**, and **zero unrepresented material units**. These are diagnostic values, not SI-calibrated energy or a proof of stability for arbitrarily strong forcing.

**Known defect:** the ring can develop **spiky edges**, especially on the leading side of the moving wavefront. Possible contributors include steep actual depth gradients, donor caps, nonconservative momentum treatment, wind/pendular-gravity asymmetry, nearest-cell aliasing, and the mismatch between the Cartesian transport grid and radial display mesh. These are hypotheses, not a diagnosed root cause. v25 introduced **render-only bilinear height interpolation** to distinguish sampling artifacts from solver artifacts; that change had **not yet been visually validated** when this note was written.

## 5. Wind, ballistic beads, and splashes

The beads are ordinary moving 3D points with position and velocity. Their acceleration is directed toward the pendular gravity source. They also pass through a horizontally moving air band centered approximately **1.1 units above the local surface**, with thickness parameter **2.3**, baseline wind speed **3.1**, and lateral drag. A bead crossing the glass boundary is projected back inside and its outward normal velocity is reduced/reflected with damping.

A bead that reaches the liquid is merged into the collector. A sufficiently energetic **primary** impact can eject up to **four** splash droplets; the collector loses exactly those units. Splash droplets are marked so their return does not recursively create new splashes. This gives legible spray and splash-back without simulating a resolved liquid-air interface.

It can demonstrate: visible source depletion, curved bead trajectories, moving gravity, wind deflection, wall contact, collection, splash ejection and return, and conserved material transfers.

It cannot demonstrate: fully resolved droplet coalescence, physical surface tension, spray mist at all scales, Navier–Stokes turbulence, true volumetric air-water coupling, or a realistic wave breaking into spray.

## 6. What is actually rendered

The bulk collector is a **clipped spherical body**; its nominal fill is driven by the spherical-cap waterline. A separate **radial triangulated mesh** is displaced to witness the field's moving surface. It has **24 radial rings × 96 angular segments**, rather than the grid's 64×64 Cartesian topology.

In v25, mesh heights are sampled using a bilinear interpolation of neighboring valid grid cells:

```js
// For the four neighboring valid cells:
sum += weight * (bed[i] + depthField[i]);
weightSum += weight;
// Render-only height:
return weightSum > 1e-6 ? sum / weightSum : waterY;
```

The renderer does **not** feed interpolated values back into the transport solver. It changes how the field is witnessed, not the field's conservation law.

The distinction produced a costly failure: **v21** replaced the convincing spherical volume with a raw rectangular-grid surface. The water looked ruined and observed performance dropped to about **50 FPS**. **v22** restored the volumetric presentation and preserved the grid dynamics. The lesson was not that the grid is useless; it was that the grid and the visual water body perform different jobs.

The clipped bulk and animated sheet can still disagree locally. This is not a watertight volumetric free-surface reconstruction. It is a deliberate visual approximation whose seams must be tested, especially near the moving shoreline and steep wavefronts.

## 7. The brass skiff: from false buoyancy to a rendered-surface constraint

A small autonomous brass boat navigates horizontally using a heading, forward drive, sampled water currents, speed limits and predictive shoreline avoidance. It can intercept descending droplets, which become conserved cargo.

The early boat was permitted to fly, submerge or clip through the bauble because its vertical position was inferred from a **different surface estimate** than the rendered water. Attempts to clamp it to nominal waterline bands or drive a damped vertical spring toward sampled field heights did not solve the underlying mismatch.

The correct operational rule emerged in **v24**: **the only ordinary surface on which the boat may sit is the rendered water mesh**. The boat's horizontal movement is simulated; its vertical placement is a geometric constraint. After updating the water mesh each frame, cast a ray straight downward at the boat's X/Z coordinate and seat it on the first surface intersection:

```js
boatRay.set(new THREE.Vector3(x,20,z), new THREE.Vector3(0,-1,0));
const hits = boatRay.intersectObject(waterSurface,false);
const surfaceY = hits.length ? hits[0].point.y : null;

// After updateWindVisual() and waterSurface.updateMatrixWorld(true):
if (surfaceY !== null) boat.y = surfaceY + .03; // v25 freeboard
```

Additional front/back/left/right mesh raycasts derive pitch and roll. `verticalVelocity=0` is intentional for ordinary seating. An explicit external upward force could someday lift the boat, but that would be a separate airborne state, not unconstrained passive buoyancy.

The v24 INSPECT showed boat Y **−4.23**, rendered surface Y **−4.111409**, difference **−0.1186**, almost exactly the then-configured **−0.12** immersion. This established the raycast relationship at that observed instant. The boat looked slightly too low, so **v25 raised it by 0.15 units**, to a **+0.03** surface-relative origin. That calibration was published but still awaited a user visual pass.

**What this does not prove:** that the entire hull displaces a physically correct volume, that the hull never intersects steep wave geometry, or that a full rigid-body buoyancy model has been implemented. It is **surface-following by explicit geometric constraint**.

## 8. Performance, observations, and limitations

The intended device is a phone; **60 FPS** is the practical target. The last user-provided v24 INSPECT (about **42.22 simulation seconds**) reported:

| Observation | Value |
|---|---:|
| Initial / accounted units | 245,944 / 245,944 |
| Unrepresented units | 0 |
| Settled units | 218,637 |
| Collector volume | 866.1449 |
| Field volume reported | 866.1409 |
| Active beads | 48 |
| Wet/occupied cells | 2,035 |
| THUMPs | 7 |
| Approximate FPS | 60.15 |
| Draw calls / triangles | 24 / 44,978 |
| Reported warnings | none |

The ~**0.004** collector/field-volume discrepancy in the observation is small, but it is not literally zero. Instrumentation is a witness to selected invariants, not an oracle for visual or physical correctness. The report predates the untested v25 visual interpolation.

### Supported capabilities

- Conservation-aware exchange between shrinking source, airborne beads, bulk liquid, splash ejecta, and skiff cargo.
- Gravity that moves around the bauble and produces changing force directions.
- Wind-driven bead deflection and a horizontal wind contribution to currents.
- Deforming bulk free-surface height field with spatial currents and repeated radial THUMP forcing.
- Glass collision response for airborne beads, splash emission/return, and boat navigation.
- Mobile touch orbit/pinch, interaction controls, and an INSPECT JSON report.
- A convincing continuous **appearance** of water at useful mobile performance, while retaining a low-cost 64×64 authoritative transport model.

### Explicitly unsupported / unresolved

- Full 3D fluid dynamics, overturning waves, vortices through depth, or water above overhangs.
- Conservative fluid momentum and energy, realistic viscosity/surface tension, pressure projection, or validated wave-speed physics.
- Exact agreement between clipped volumetric water, radial rendered mesh, and Cartesian field near all shorelines.
- Physically displaced-volume buoyancy or boat wake coupling back into the water; the skiff is geometrically seated.
- Arbitrarily large THUMP stability, guaranteed smooth wavefronts, or a resolved explanation for leading-edge spikes.
- Proof of v25 visual quality or FPS after interpolation; a browser/user validation pass is still needed.
- A general-purpose fluid engine or evidence that the same tuning extrapolates to much larger worlds.

## 9. What this experiment taught

The meaningful result is not “we implemented water.” We built a **composable chain of representations** with explicit exchanges and useful observations:

```text
conserved material units
   → discrete ballistic beads
   → collector inventory / volume
   → 64×64 depth + horizontal velocity
   → radial rendered free surface + clipped visible bulk
   → skiff constrained to that *rendered* surface
```

Each arrow is a semantic boundary. The failures occurred when one side was assumed to be equivalent to another: when a scalar-field sample was mistaken for the displayed water under the hull; when a thin field mesh was substituted for an appealing volume; when numerical stability was confused with physical fidelity.

The useful capability is a **legible, perturbable, materially accountable miniature world**. Its limits are equally valuable: this water is conservative in inventory, expressive in appearance, and responsive to interventions, but it is neither a complete fluid solver nor an exact geometrical reconstruction of its own surface.

*Next observation, not a prescribed roadmap:* inspect v25 under repeated THUMPs. If the leading-edge spikes remain after render-only interpolation, isolate transport gradients and directional forcing before changing the physics. Preserve the already convincing water volume and the boat's direct rendered-surface constraint.
