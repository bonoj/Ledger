# Twenty Faces

## Twenty addresses before twenty worlds

The d20 began as a cheap object with twenty independently tappable faces. We then asked for something deliberately underspecified and much more ambitious:

**Give the twenty faces twenty genuinely different one-tap experiences.**

"Different" did not mean twenty arrangements of small cubes or triangles. Experiences could be structurally different, use different colors and materials, extend above or into the surface, continue autonomously, escape the die, or use relationships between faces.

Observed build: `9bca1260`.

The result held 60 fps on the test phone while presenting twenty strongly colored addresses and a wide range of consequences.

## The attempted vocabulary

The twenty sketches were growth, flood, shatter, city, erosion, swarm, clock, burn, excavation, weave, weather, magnetism, hatch, crystallization, reveal, launch, collapse, mirror, signal, and door.

These were not twenty mature systems. Most were tiny bespoke sketches made from very little preexisting machinery.

That distinction matters. We were not yet composing a rich library. We were discovering what composition might become once the library exists.

## What worked

The d20 tolerated surprising heterogeneity without losing addressability. A face could acquire branches, water, buildings, moving dots, gears, clouds, field lines, crystals, apertures, or other residue and still read as a face of the same object. Tap and drag remained distinct. Strong color diversity made the addresses easier to distinguish.

### Satellite

The launch face produced the clearest success. Its consequence escaped the face and entered die-level/world space as an orbiting satellite.

This established a causal hierarchy:

**face → die → outside**

The address can initiate a consequence without permanently containing it.

### Clouds and swarm

Clouds and small autonomous dots worked without requiring a visible birth sequence. Their spatial and behavioral grammar was already strong enough:

- cloud **above this face**
- precipitation **toward this face**
- many small movers **belonging to this region**

The relationship carries much of the meaning.

### Local frames

Branches, clouds, and other protrusions demonstrated that each face can possess a meaningful local "outward" independent of world-up.

The die therefore begins to read not merely as twenty colored triangles but as twenty local frames sharing one topology.

## What did not work

The largest failure was time.

The design imagined experiences as verbs, but most implementations jumped directly to their resulting geometry:

**tap → nothing perceptible → finished state**

Growth did not visibly grow. A city did not visibly accrete. Crystallization did not visibly propagate. Excavation did not visibly descend. A door did not visibly open.

This revealed an important distinction:

**One-time interaction does not imply instantaneous consequence.**

A single tap can begin a process with a legible beginning, evolution, and settled result.

Many weaker faces may not need more geometry. They need time.

A crystal arrangement is decoration. Crystallization propagating from a nucleation point is an event.

A set of buildings is greebling. Roads connecting sites followed by buildings accumulating beside them is a tiny city process.

The implementation preserved the twenty **nouns** much better than the twenty **verbs**.

## Semantic construction versus spatial evidence

Some geometry was intentionally outside a face: clouds, launched objects, outward growth.

Other geometry merely floated because the implementation oriented it relative to a face without strongly enforcing contact.

This separates two claims:

- semantic ownership: "this object belongs to this face"
- spatial evidence: "this object is visibly supported by / attached to / inside / above this face"

A relation such as `SUPPORTED_BY(face)` has not been successfully compiled merely because an object was parented to the face and roughly positioned nearby. The observer needs contact evidence.

Likewise, the black excavation/collapse/door-like apertures largely failed. They read as black shapes painted onto surfaces rather than depth.

Darkness alone does not communicate inwardness. A hole needs evidence such as rim thickness, occlusion, interior walls, parallax, a deeper object, or another spatial consequence that cannot be explained as paint.

**Semantic intent is not spatial evidence.**

## Existing systems change the economics

The request was deliberately vague and the available system vocabulary was still sparse. Most experiences therefore had to be fabricated directly from basic geometry.

That makes the amount of successful communication encouraging.

Once reusable systems exist for fluids, granular matter, growth, combustion, erosion, weather, agents, roads, structures, fracture, excavation, fields, orbit, signals, portals, organisms, cloth, light, sound, and temporal processes, the nature of the task changes.

Instead of inventing twenty implementations, the model can compose verbs through an existing graph:

**rain ABOVE face → water ON face → erosion INTO face → runoff ACROSS edge → vegetation GROWS toward water**

The Workshop may therefore be less like an asset library and more like a growing collection of:

**verbs and materials that know how to relate.**

Composition becomes cheap when systems already know enough about their relationships.

## The accidental interior

The most surprising observation was not one of the deliberately designed experiences.

A thin pink trajectory and a partially subsurface sphere happened to produce strong evidence of the d20's interior.

The pink trajectory is visible at one surface, disappears behind the shell, and becomes visible again across distant faces. The eye naturally completes the hidden trajectory.

**entry → occlusion → reappearance**

produces the inference:

**continuity through hidden volume**

This communicated inwardness more effectively than either deliberately constructed black aperture.

The black apertures attempted to depict depth and mostly read as paint. The trajectory allowed the observer to infer depth from occlusion.

That is cheaper and stronger.

The fact that the apparent trajectory spans roughly four faces matters. A disappearance and immediate reappearance across one edge might be interpreted as something wrapped over the exterior. A trajectory separated by several faces strongly suggests passage through the object.

## The implicit volume may not need to be rendered

Earlier work proposed that each triangular face can be understood as the mouth of a triangular pyramidal volume terminating at the d20 center.

We had assumed those volumes might eventually need explicit visualization.

The accidental trajectory suggests otherwise.

The interior can remain mostly implicit while things traverse it.

A bore, root, pipe, fault, worm, aquifer, subway, vein, tunnel, or other process could enter through one face, traverse hidden interior regions, cross implied face-volumes, approach or avoid the common center, and emerge through another face.

Occlusion itself can provide enough evidence for hidden geometry to become perceptually real.

This extends the useful graph beyond the explicit shell:

- 20 faces
- 30 edges
- 12 vertices
- center
- inside/outside
- adjacency
- local outward/inward
- implied face-to-center volumes
- trajectories through hidden volume

The graph can contain relationships that are not continuously rendered.

## Consequence as memory

After many faces were activated, the die became a record of its own history.

There was no activity log, face-number display, database viewer, or visited-state UI. Different consequences remained visible on their addresses.

The current appearance answered both:

**Where has something happened?**

and often:

**What kind of thing happened there?**

The satellite extends this further. A consequence can originate at an address and later exist elsewhere while preserving causal provenance.

This suggests another useful distinction:

**state stored about the world**

versus

**state legible as consequence in the world**

The latter can sometimes function as memory without a separate explanatory surface.

## Emerging lessons

**Preexisting topology makes breadth cheap.**

**Local relational frames make heterogeneous construction cheap.**

**One tap can initiate time rather than merely toggle state.**

**A verb becomes legible when its transformation is witnessed.**

**Semantic ownership does not substitute for spatial evidence.**

**Occlusion can communicate hidden volume more cheaply than explicit depiction.**

**A consequence may leave its originating address without losing causal meaning.**

**The visible world can carry its own history.**

The quality of a semantic construction primitive may be judged by how much consequence it makes possible without requiring coordinates, labels, or explanatory machinery.

## Questions

1. Which experiences become immediately legible once time is available as a cheap compositional dimension?
2. Which relations require explicit geometric enforcement rather than semantic ownership?
3. What is the minimum spatial evidence required for inside, supported-by, attached, through, and behind to become perceptually undeniable?
4. Can hidden interior trajectories be reasoned about without rendering interior volumes?
5. Can crossings through implicit face-volumes become an executable volumetric graph?
6. What systems become dramatically more expressive when they can cross edges or enter the die?
7. How much world history can remain legible purely through persistent consequence?
8. Which experiences need bespoke machinery, and which collapse into simple compositions once a few reusable verbs exist?
9. When does an object cease to be a collection of addresses and become a substrate for causal systems?
10. What other graph-bearing primitives give us this much structure before we build anything?

## Current position

Do not turn the twenty experiments into a generalized face-experience framework yet.

The unevenness is useful evidence.

Keep the satellite. Keep the clouds. Keep the bees. Keep the failed apertures. Keep the lazy faces. Keep the accidental interior trajectory. They expose different boundaries.

Build reusable systems when repeated usefulness earns them. Let time become a first-class ingredient where verbs need to be witnessed. Let spatial relations become stricter where perception exposes floatiness. Let hidden geometry remain hidden when occlusion already tells the truth.

The surprising result is not that twenty tiny experiences can fit on a d20.

It is that a small amount of preexisting topology and relational structure can support a much larger space of consequences than the visible geometry appears to contain.
