# When Progress Becomes Polishing

A research ledger from an attempt to build terrain from causes rather than named landforms.

This note records a useful failure in experimental direction. The individual iterations were succeeding. That was the problem.

## Starting question

The terrain work began with a broad goal: make large, heterogeneous, executable terrain whose visible form follows from reusable rules rather than a catalog of handcrafted landform stamps.

Early functional-terrain experiments separated several jobs that are often collapsed into one noise stack: macro elevation, local terrain expression, material or biome identity, and later feature/population behavior. That separation was useful, but the resulting terrain still exposed its construction rules too readily.

The next investigation shifted from asking “which terrain function should occupy this region?” toward a more geological question:

> Can visible terrain be compiled from latent structure and history, so that recognizable landforms appear as consequences rather than requested shapes?

The working ingredients became stratigraphy, deformation, drainage, differential erosion, deposition, and representation.

A fixed seed was kept through the iterations so that changes in morphology could be attributed to changes in machinery rather than a lucky new world.

---

## T1 — Geological structure, wrong coupling

The first geological-history pass combined layered strata, broad deformation, drainage/incision, differential resistance, and a depositional sand mantle.

The result had the right *kind* of ingredients and the wrong surface.

Large vertical forms appeared, but canyon walls developed severe blades and square/ridged signatures. The immediate temptation was to tune the geology. Instead, measurement showed that representation itself was part of the failure: the terrain was under-resolved for the spatial frequencies being generated.

This established the first distinction:

**A geological model can be reasonable while its sampled representation is not.**

A terrain generator therefore needs an explicit contract between process scale and representable scale.

---

## T2 — Fix representation first

The mesh density was increased substantially and the sampled height field received a small separable band-limit pass before becoming authoritative terrain.

This was not intended as beautification. It was a representation correction: do not ask the mesh to encode frequencies it cannot resolve.

The change was decisive. Median and high-percentile neighbor discontinuities dropped sharply while broad relief survived.

More importantly, removing the representation failure exposed a deeper one. Repeated sharp structures remained, especially around stratigraphic transitions.

This was a recurring pattern in the investigation:

> Fixing one layer did not finish the terrain. It made the next causal mistake legible.

---

## T3 — A plausible hypothesis that barely mattered

The remaining blades appeared correlated with categorical stratum changes. The next hypothesis was that discrete material identity was snapping geometry across contacts.

Material identity was therefore kept categorical while resistance became continuous across contacts.

The result changed surprisingly little.

That was useful evidence. Contact snapping had looked guilty because the artifacts occurred near contacts, but it was not the dominant cause.

The experiment falsified a plausible explanation instead of rewarding it with endless parameter tuning.

---

## T4 — Bound the influence of material

Inspection revealed the stronger coupling: stratigraphic resistance was multiplying the entire erosion depth.

That meant a local material property was controlling a large-scale process it did not own. A resistant layer could amplify or suppress the full depth of canyon incision and thereby create enormous discontinuities.

The correction was architectural rather than cosmetic:

**Drainage owns large-scale incision. Material resistance may modify that process locally, but only within a bounded range.**

After that change, the terrain retained and even expanded its large vertical range while the worst local discontinuities fell dramatically. Sharp cliffs were not prohibited. The pathological coupling was.

T4 became the first strong baseline.

The lesson generalized beyond terrain:

> A local semantic property should not accidentally multiply an unrelated large-scale process.

That rule is more valuable than any particular erosion constant.

---

## Sharpness is not the enemy

At this point it became important not to confuse a diagnostic metric with an aesthetic objective.

Nature contains very sharp cliffs. A high slope, a large neighbor delta, or an outlier in curvature is not automatically an error.

The actual target is **construction signature**: repetition, periodicity, alignment, clustering, or other evidence that the implementation primitive is visible in the result.

This changed the interpretation of measurement. Statistics became evidence for investigation rather than an optimization target.

A perfectly smooth terrain could be a worse result.

---

## T5 — Disguising the ruler

T4 still exposed an obvious procedural grammar in portions of the drainage system. The watershed skeleton used straight segments and distance-based incision. A natural next hypothesis was that warping the drainage domain would hide the construction primitive while preserving the connected watershed.

The drainage coordinates were continuously warped and width/depth varied coherently.

The measured and visible result barely changed.

The failure was instructive:

**Warping the coordinates of a construction primitive is not the same as changing the process that creates the form.**

The ruler had been bent, but the canyon was still made by the same ruler.

T5 was retained as a failed hypothesis rather than tuned further.

---

## T6 — Ask for another cause of cliffs

The next experiment deliberately stopped improving the canyon.

Instead, it asked whether the same substrate could produce a second family of steep terrain from a different cause: survival and retreat beneath resistant caprock.

The target was not a named “mesa function.” The intended causal chain was closer to:

**broad elevated surface → resistant cap → differential survival/retreat → coherent wall → shoulder/talus → eroded plain**

The resulting world produced a large, distinct retreat structure with substantial vertical relief. It looked recognizably unlike the incision-created canyon. Measurement could distinguish the retreat-associated steep structure from the larger drainage-associated system.

That was a real capability gain: two different cliff families could now arise from different histories.

It also produced a new defect. The retreat landform exposed repeated horizontal serrations. The obvious next task was to diagnose those bands and make the landform better.

And that is where the research direction itself failed.

---

# The trap: every iteration was working

The experimental loop had become:

**observe artifact → instrument artifact → identify mechanism → repair mechanism → preserve lesson → repeat**

This is a very good loop.

It had produced:
- a distinction between geology and representation;
- a scale-aware representation correction;
- a falsified hypothesis about categorical contacts;
- bounded material influence over erosion;
- a clearer definition of pathological construction signature;
- a failed but informative drainage-warp experiment;
- a second, independently generated cliff family.

Nothing in that sequence looked stalled.

But the objective had quietly changed.

We had begun by trying to discover a general terrain-generating substrate. By T6, the most natural next move was to remove the serrations from one increasingly convincing landform. If successful, the next move would likely have been another visible defect, then another.

The system could have become extremely good at producing this particular landscape while making progressively less progress toward producing fundamentally different landscapes.

The dangerous condition was not failure.

It was **productive local optimization**.

---

## Capability versus quality

The useful checkpoint that emerged is:

> **Is this experiment increasing capability, or merely increasing quality?**

Quality asks:
- Is this mesa more convincing?
- Is this canyon less procedural?
- Are the cliffs cleaner?
- Are the artifacts smaller?
- Does this seed look better?

Capability asks:
- Can the same machinery produce a landform we did not explicitly name?
- Can a different causal history produce a qualitatively different world?
- Can one process alter the consequences of another?
- Can the system surprise us without adding a new shape generator?
- Has the reachable space of outcomes actually expanded?

Both kinds of progress matter.

The mistake is allowing quality improvement to masquerade indefinitely as capability growth.

A particularly dangerous research loop is one where every iteration produces enough improvement to justify the next iteration.

---

# Change the abstraction level

The response is not to abandon the accumulated work. The earlier iterations earned several useful operators and constraints.

The response is to stop treating the current landscape as the object being perfected.

The next experiment should make **history** the object.

Instead of:

**noise → mountain → canyon → mesa → smoothing**

the next model should look more like:

**crust → deformation → fracture → displacement → exposure → erosion → transport → deposition**

The final height field becomes a compiled representation of accumulated events rather than the primary thing being sculpted.

This creates room for qualitatively different consequences:

- faulting can lift one block and drop another;
- tilted resistant beds can emerge as ridges or escarpments;
- erosion can isolate remnants of a formerly continuous layer;
- drainage can encounter uplift and incise through it;
- collapse can open amphitheaters;
- talus can accumulate beneath genuinely sharp walls;
- transported material can bury older structure;
- later incision can expose that buried history again.

The important constraint is that these should be **causes**, not disguised requests for named scenery.

A mesa, canyon, ridge, basin, scree field, or dune is interesting when it falls out of history. It is much less interesting when the generator contains a mesa, canyon, ridge, basin, scree, or dune button.

---

## Next experiment: break the world

The next terrain pass should therefore be deliberately more violent than polished.

A small deterministic history might:

1. establish layered crust;
2. fault it strongly;
3. uplift and tilt a block;
4. erode the exposed structure;
5. transport and deposit material into resulting lowlands;
6. incise through the changed landscape afterward.

The first success criterion is not beauty.

It is qualitative difference.

A useful first result may contain ugly regions. If it makes the previous world impossible to mistake for the new one, and if the difference follows from reusable geological events rather than named landform functions, it has taught us more than another round of artifact removal.

The stronger test is:

> **Can one small vocabulary of geological operations produce several radically different recognizable consequences without naming those consequences?**

If yes, terrain generation has moved from a collection of procedural shapes toward a world-history compiler.

---

# What remains worth keeping

The pivot does not invalidate the earlier terrain work. It clarifies what each result was for.

The durable lessons so far are:

- Separate latent process from sampled representation.
- Band-limit features to the scale the representation can actually carry.
- Keep one authoritative topology for rendering, sampling, physics, and later consequence.
- Material identity may remain categorical while morphology consumes continuous properties across contacts.
- Bound the influence of local material properties on larger processes they do not own.
- Do not optimize slope or curvature merely because they are measurable; sharp terrain can be legitimate.
- Look for exposed construction primitives rather than generic roughness.
- Treat failed hypotheses as evidence, not invitations to tune them indefinitely.
- Prefer reusable causes over named landform generators.
- Preserve good experimental states so later work can become destructive without becoming irreversible.
- Periodically ask whether progress is expanding the reachable behavior of the system or only polishing one reachable result.

The final item is the reason for this note.

The technical work did not announce that the research question had drifted. The experiments continued to produce good results. Recognizing that the results were becoming locally better while the investigation was becoming globally more timid required changing the question.

That is the next experiment.
