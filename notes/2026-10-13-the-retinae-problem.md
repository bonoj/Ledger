# The Retinae Problem
*An engineering note from Hermeticon Wanderer · October 13, 2026*

**[Enter Hermeticon Wanderer](https://bonoj.github.io/jit/hermeticon-wanderer/?terrain=authored-v1)**

**The problem:** When a world can only be inspected through successive, lossy representations, how do we distinguish a change in the world from a change in the way it was observed?

The answer matters even when the world contains a frightened pumpkin, a shy peacock, and some exceptionally attractive reeds.

## Two ways into one world

The Hermeticon is a three-dimensional aperture onto a persistent geological world. It decides which parts of that world are admitted into its bounded simulation. The virtual camera, by contrast, selects a projection of the admitted world. These are different authorities: **the retina determines membership; the camera determines appearance from an angle.**

Beyond the camera, observation forks. One path leads to a human watching moving pixels. The other can lead to a model receiving screenshots, state reports, source code, or purpose-built measurements. Neither path carries the whole world.

```mermaid
flowchart TD
    W["Executable world<br/>geology, characters, populations, material"]
    H{"Hermeticon retina<br/>3D membership and behavior"}
    S["Bounded scene<br/>authoritative state"]
    C["Virtual camera<br/>3D to 2D"]
    P["Phone display<br/>light over time"]
    U["Human perception<br/>motion, depth, salience, intention"]
    I["JIT observation instruments<br/>screenshots, raycasts, counters, probes"]
    M["Model perception<br/>images, text, numbers, code"]
    Q["Shared semantic surface<br/>named objects, relationships, causes"]
    T["Testable claim<br/>invariant, prediction, counterexample"]
    E["Change and rerun<br/>new evidence"]
    W --> H --> S
    S --> C --> P --> U
    S --> I
    C --> I
    I --> M
    U --> Q
    M --> Q
    Q --> T --> E --> W
```

This is not a claim that humans and models perceive alike. Their sensory and representational pathways differ substantially. The human sees an animated peacock open its fan, understands its gesture, and may notice immediately that the motion feels shy rather than mechanical. The model may see isolated frames and descriptions, inspect the fan's opening variable and distance threshold, and infer the gesture's cause. A model can read a formula a human cannot see on the phone; a human can judge continuity, rhythm, and emotional legibility that the formula does not encode.

Both interpretations can refer to **the same peacock, in the same place, responding to the same approach**. That referential and causal agreement is the shared semantic surface. It is not a common internal picture, a common vocabulary alone, or a requirement that one observer imitate the other's senses. It is a world whose meaningful entities and relationships remain stable across radically different observation channels.

## Observation is an engineering interface

A screenshot is a useful measurement, but it is not a complete state description. It collapses depth, time, occlusion, and hidden state into one projection. It can show that reeds *look* absent; it cannot by itself tell whether they are outside the Hermeticon, behind terrain, outside the camera frustum, or incorrectly collapsed.

Different questions require different instruments, selected just in time rather than maintained as an extensive permanent diagnostics subsystem.

**Rendered observation.** A screenshot or short visual sequence reveals color, silhouette, occlusion, rhythm, and whether a character's action reads at human scale. It is often the best first test of a visual hypothesis. A human can report “those 50 populations are really two shapes in different colors” even when a generator enumerates 50 distinct parameter combinations. The enumeration is true; the perceptual distinction is not.

**Spatial observation.** A CPU raycast against scene geometry can answer whether a line of sight hits a wall, terrain, or a character, and at what distance. When the rendered scene itself matters, a GPU-derived depth or picking pass, or a GPU-side ray query where the rendering implementation supports it, can probe what a particular pixel or ray actually intersects. These techniques have different measurement semantics. A raycast tests geometry and a specified ray; a depth readback tests a rendered view under its depth and rendering rules. Neither automatically explains why a behavior occurred. A GPU raycast is a possible JIT instrument, not a claim that Wanderer currently uses one.

**State observation.** A tiny report can expose character coordinates, Hermeticon-relative distance, current behavior mode, growth fraction, elapsed simulation time, and whether an entity is paused. Such a report can prove that a character's clock did not advance while it was outside the boundary—something an attractive screenshot cannot establish.

**Accounting observation.** In some cases the appropriate instrument is arithmetic. If a pumpkin splats into 100 red material beads, count the beads and track their ownership. For material transport, compare quantities before and after the operation; identify transfers, spawns, losses, and conservation errors. Counting answers a question that neither pixels nor raycasts can reliably answer at scale.

**Provenance observation.** The eight-character source SHA in the HUD identifies which code the viewer is supposed to be running; the full SHA remains available for inspection. A source commit, a published mirror, a completed Pages deployment, and observed runtime behavior are distinct facts. Build identity prevents a correct diagnosis of the wrong build, but cannot substitute for an experiment.

An instrument should report the smallest sufficient evidence for the question. If the question is “Does the peacock look alive?”, numerical state is insufficient. If it is “Did the peacock's clock advance outside the rim?”, a screenshot is insufficient. If it is “Did we conserve material?”, counting is stronger than either.

## Agreement through falsifiable claims

Take a single claim: **the reeds belong to the Hermeticon, not to the camera.**

A human rotates the phone's view and expects the reedbed to remain the same population. A model inspects the growth rule, notices a camera-frustum dependency, and proposes a correction. Then the world is rerun. A screenshot sequence can reveal unwanted regrowth; a state probe can compare stem growth before and after a full orbit. If the values remain stable and the view remains coherent, both observers have evidence for the same claim, obtained differently.

That cycle matters more than which observer is “right.” Source reveals mechanisms but can mislead when runtime behavior differs. Visual judgment reveals failures but can misattribute their causes. Instruments connect the two. The shared semantic surface is therefore **executable, inspectable, and revisable**: a set of world entities and causal relationships that can be pointed to, perturbed, measured, and discussed without requiring identical perception.

## Case study: camera-dependent population state

In the Mists, bead-lattice reeds grow from geological roots as their locations enter the Hermeticon. They retreat at its inner rim. A character approaching them can cause a local collapse and subsequent regrowth.

A camera orbit should change none of those facts. Yet one implementation included the camera's projected frustum in the reeds' growth target:

```js
// Wrong ownership: a camera angle changes biological state.
target = inCameraView && insideRim && !occupied ? growth : 0;
```

Turning the camera away therefore became an ecological event. Turn back, and the reeds might grow again. The image looked plausible, but the world's continuity was false.

The correction removes camera visibility from the state transition:

```js
// World-space conditions own growth; the camera only draws.
target = insideRim && !occupied ? growth : 0;
```

The exact implementation also accounts for the gallery's transition state and a graded rim threshold. The principle is the important part: **changing the observer must not change the observed world's rules.**

The peacock and gardener expose the converse. Their behavior should pause when their world-space bodies are outside the inner Hermeticon boundary, irrespective of which way the camera points. The pumpkin exposes a third distinction: it can leave the *geological sheet* by jumping into a hole while remaining inside the *Hermeticon volume*. Geological support and containment are not synonyms.

## Evidence and verification

A person watching a phone sees a 3D world reconstructed from a 2D display. An engineer inspecting the result may receive a screenshot, a numerical report, a source diff, and a commit identifier at different moments. None is a complete copy of the running world.

A reliable workflow requires more than visually plausible output:

1. **State the invariant.** A 360° camera orbit must not alter population growth or character clocks.
2. **Identify the authority.** World coordinates and the Hermeticon's inner boundary decide membership; camera projection decides pixels.
3. **Make the observation falsifiable.** Orbit without moving the Hermeticon; compare population state before and after, not merely two attractive screenshots.
4. **Keep provenance.** Associate observations with the exact executable build. An eight-character SHA in the HUD is a handle, not a substitute for the full commit or the test.
5. **Preserve uncertainty.** A committed fix, a queued deployment, and a verified running behavior are three different claims.

This is why the small instrumentation details matter. FPS measures performance, not correctness. A build SHA anchors which code was examined. A screenshot supplies visual evidence. A state probe can answer questions pixels cannot. Together they make a partial observation actionable.

## Three-dimensional retina: definition and implications

A **three-dimensional retina** is a bounded volumetric sampling interface into a larger persistent world. In Hermeticon Wanderer, its inner spherical boundary defines which world-space entities and populations participate in the local scene and which behaviors are active. The underlying geology and entity identities are defined independently of the camera's orientation.

The term *retina* identifies the interface as a locus of observation; *three-dimensional* specifies the dimensionality of its sampling domain. A biological retina samples light across a curved receptor surface, while a conventional virtual camera projects geometry onto a two-dimensional image plane. The Hermeticon instead admits a three-dimensional portion of the world before any camera projection takes place.

This architecture separates three operations:

1. **Spatial membership:** Determine whether an entity or population lies within the Hermeticon's inner boundary.
2. **Simulation eligibility:** Apply the appropriate local update rules to admitted entities, preserving state when behavior is paused outside the boundary.
3. **Projection:** Render the admitted scene from an arbitrary camera orientation without changing its underlying state.

These operations have different mathematical and computational meanings. Membership is a world-space geometric predicate; simulation eligibility governs state transitions; projection maps three-dimensional scene data to image coordinates. In the current Hermeticon, the first two are intentionally coupled for selected behaviors, while the third remains independent.

The concept intersects several disciplines. Computer graphics concerns include visibility, clipping, occlusion, and projection. Computational geometry supplies boundary tests and spatial queries. Simulation engineering addresses persistence, activation, and conservation across a moving local domain. Perception research concerns the relationship between sampled signals and inferred objects. Epistemology concerns what conclusions can be supported by partial observations.

The same executable boundary is therefore legible through multiple technical vocabularies. **Three-dimensional retina** names their common referent without requiring any one discipline's description to replace the others.

The Mists reeds provide a practical example. Moving the Hermeticon across the landscape changes which reeds are admitted and allowed to grow; rotating the camera around a stationary Hermeticon changes only their projected appearance. This distinction can be inspected visually and verified through world-space state measurements.

## Conclusion

A shared semantic surface is not achieved by making human and model perception equivalent. It is achieved by providing an executable referent and enough complementary evidence to establish, challenge, and revise claims about it.

Visual inspection supplies perceptual judgments about continuity, form, and legibility. Spatial queries resolve geometric ambiguity. State probes establish behavioral transitions. Accounting tests quantities and conservation. Source and build provenance tie observations to a specific implementation. No single channel is authoritative for every question; the relevant invariant determines the appropriate instrument.

The Hermeticon demonstrates a particularly clear invariant: **a change in viewpoint must not become a change in reality**. A full camera orbit may change the rendered image, but not the population state of the Mists reeds. That statement can be understood visually, implemented geometrically, and tested numerically.

The broader engineering result is a repeatable method for reasoning across different perceptual interfaces: define the world-space authority, formulate a falsifiable claim, select an appropriate observation, and compare the result against the executable system.
