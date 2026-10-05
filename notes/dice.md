# D20

## Semantic geometry as a shared human-model surface

We began with an inhabited biome d20: twenty visually distinct faces on a small object floating above a Betwixtable.

At first we treated those faces as literal deformable terrain. That failed usefully. Twenty independently displaced triangular terrain meshes produced a crumpled shell, and the physical scale of the tabletop d20 made detailed terrain largely meaningless.

That led to a different interpretation:

**The d20 is not the world. The d20 is a world container.**

Each face can represent a separate bounded world. The tabletop representation can stay cheap: twenty planar colored faces, explicit edges, tiny state, no continuously simulated terrain. If a face is entered later, its world can expand to whatever resolution it needs. Only the active world needs to become expensive.

The topology is already rich:

- 20 faces = bounded worlds
- 30 edges = possible interfaces
- 12 vertices = possible multi-world junctions
- 1 center = common convergence

Each triangular face can also be understood as the mouth of a triangular pyramidal volume terminating at the center. Excavation would therefore taper with depth until all twenty worlds converge. This is presently a spatial hypothesis, not an implemented system.

## The tap experiment

We stripped away the terrain. Each face became an independently tappable biome proxy. Its first tap adds a few tiny visible objects; later taps do nothing.

The question was simple: can twenty adjacent surfaces on a freely rotatable object behave as twenty independently addressable worlds without explicit UI?

Observed build: `22469598`.

The result was encouraging. There was effectively zero confusion between tapping a face and dragging to orbit, or about which face had received state. No labels, face numbers, twenty-button control panel, or textual state display were necessary. Geometry carried most of the interaction semantics.

A terse instruction had been enough:

> 20 separate tappable biomes, current colors are fine. Let tapping each add a few bits and bobs to their surfaces one time only so I can test all taps.

That sentence establishes cardinality, independence, interaction, visual preservation, mutation, idempotence, spatial attachment, and experimental purpose without specifying coordinates, raycasters, mesh IDs, event routing, transforms, UI, or architecture.

The existing semantic object supplies much of the missing information.

## Hypothesis: semantic geometry can compress communication

We may be searching for semantic surfaces where human and LLM understanding overlap strongly enough that documentation, rigid rules, and memory scaffolding become less necessary.

Human and model already have useful concepts for face, edge, vertex, inside, outside, surface, center, above, below, adjacent, attached, contained, enter, rotate, tap, and one-per-face. Three.js can turn many of them into executable consequences.

Instead of remembering that several objects belong to a biome, we can see them sitting on its face. Instead of documenting that two worlds are adjacent, their faces can share an edge. Instead of storing that one object is above another, the relationship can physically exist and be independently verified.

**Memory:** preserve information so shared understanding can later be reconstructed.

**Semantic surface:** arrange information so relevant understanding can be recovered from what is presently there.

Sometimes the latter may eliminate the need for the former.

## Hypothesis: relationships may be better authoring primitives than coordinates

We previously tried to position the d20 "above" the table with an absolute Y coordinate. That was not what "above" actually meant.

What we meant was closer to:

`d20.bottom ABOVE WITH CLEARANCE table.top`

Once expressed through object bounds, it behaved correctly.

"Above" is not a coordinate. Neither are inside, attached-to, touching, connected-to, supported-by, faces, feeds, hangs-from, bounded-by, or snaps-to.

Coordinates may be compiled consequences of relationships rather than the primary representation.

## Hypothesis: build semantically, verify spatially

A previous semantic projection experiment lacked enough spatial substrate and produced something more like an illustrated diagram than a coherent world.

That suggested:

**Use semantic relationships to construct. Use spatial evidence to verify.**

A bridge that connects two islands should spatially meet them. A pipe that feeds a reservoir should terminate at an inlet. An object above another should satisfy their actual bounds.

Semantic truth and geometric truth can check one another.

## The camera may also be part of the language

Our orbital camera can become captured at its poles. That initially resembles a defect, but a pole is also a privileged orientation: top, bottom, canonical axis, gravity direction, presentation orientation, entry direction.

We do not yet know whether this is useful. The question is worth preserving rather than automatically making navigation perfectly frictionless.

## The human is also adapting to the model

The adaptation is bidirectional.

The model arrives having learned to speak human language. Sustained collaboration also teaches the human which representations are unusually legible to the model: what information is required, what can remain unspecified, which constraints carry high information density, when metaphor is better than specification, when clinical technical language is better than prose, and when an executable object can replace language entirely.

This is not merely prompt engineering. The useful representation is whichever carries the intended distinction most cheaply.

## Working hypothesis

Much human-LLM work focuses on better documentation, prompting, context, retrieval, memory, agent protocols, persistent state, and schemas. All can be useful.

Another axis may matter:

**How much coordination machinery can be made unnecessary by placing human and model inside representations they already understand similarly?**

Potential target:

**human prior ∩ model prior ∩ executable consequence**

The larger that intersection becomes, the less bespoke protocol may be required.

## Questions

1. How far can ordinary spatial language take us before ambiguity forces a formal ontology?
2. Which relations are naturally shared by human perception, LLM reasoning, and executable geometry?
3. Can complex worlds be assembled primarily from relations rather than transforms?
4. Can a cold model enter a sufficiently semantic executable environment and infer how to work with it without extensive documentation?
5. How much persistent memory can be replaced by persistent consequence in the world?
6. When does visible world state outperform logs or database state for collaboration?
7. Can topology carry experimental structure: face = world, edge = relationship, vertex = junction, center = convergence?
8. Can inactive worlds collapse mostly to semantic state and reconstruct cheaply when entered?
9. Can one object simultaneously provide navigation, world state, experiment selection, topology, persistence cues, and shared reference?
10. What camera behavior becomes semantic once observation itself is part of the world?
11. At what point does a useful semantic primitive actually earn documentation?
12. Can confusion tell us when another primitive, sense, constraint, or document has been earned?

## Current position

Do not formalize this prematurely.

The d20 is useful because it is an executable question rather than a framework.

Keep making tiny things. Observe where communication becomes surprisingly cheap. Observe where human and model misunderstand one another. When confusion appears, determine what representation was missing.

Perhaps one route toward powerful human-LLM collaboration is constructing places where both already know how to think.

**The world becomes part of the language.**


## Horizon

A useful horizon is not a prediction about how many years ahead one approach is.

**The horizon is the boundary beyond which our present primitives stop making the next experiment cheap.**

Our working horizon has repeatedly moved as formerly expensive mechanics became ordinary:

- cheap generation made strange executable objects disposable
- rapid variation made families of candidates cheap to inspect
- repository transport and publication receded from human attention
- Betwixt made persistent spatial references ordinary
- bounds made relations such as `above` executable rather than merely descriptive
- the d20 made twenty separately addressable world containers almost free to represent

Each reduction in cost changed what was cheap enough to think about next.

The useful question is therefore not "what architecture comes next?" but:

**Where does cheapness end?**

The next limiting boundary might be spatial vocabulary, observation, persistence, scale, cross-world causality, reconstruction, or something not yet named. We should not choose it in advance.

Walk toward the horizon experimentally. When the work becomes suddenly awkward, verbose, brittle, expensive, confusing, or requires the human to become a mechanical transport layer again, we have encountered evidence of a missing primitive.

This complements the existing rule:

**Confusion earns senses.**

More generally:

**Rising coordination cost reveals the horizon.**

Do not roadmap beyond it merely because the future can be described. Let the next primitive earn itself where present representations stop carrying the work cheaply.
