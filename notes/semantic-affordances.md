# Semantic Affordances

An exploratory note from the Betwixt d20 work.

## The problem

We do not want to maintain a mental or implementation graph of behaviors against specific geometries:

- which behaviors work on a plane,
- which work on a cube,
- which work on a d20,
- which must be rewritten for some future shape.

The twenty-face experiment suggests a better holding structure.

## Geometry exposes affordances

Geometry does not need to own behavior. Geometry can expose semantic relationships that behavior consumes.

A plane gives a small spatial vocabulary:

- above
- on / surface
- below
- across
- edge

A closed volume can retain surface relationships while adding:

- inside
- outside
- around
- through
- contain
- enter
- exit

A cube is useful here not because cube behavior is special, but because its faces provide applications of the surface vocabulary while its closure provides volume vocabulary.

The same idea should apply to other geometry. A behavior should not need to know that its host is specifically a cube, d20, tabletop, wall, planet, or hull when the relationship it needs is simply SURFACE, ABOVE, INSIDE, THROUGH, etc.

## Time comes before either

Time is orthogonal to geometry and applicable to all of it.

Without time:

> ON(surface)

is state.

With behavior and time:

> GROW ON(surface) OVER(time)

becomes something witnessed.

With volume:

> GROW FROM INSIDE(volume) THROUGH(surface) OVER(time)

describes a legible event without specifying the concrete shape that supplies the surface and volume.

Time gives vocabulary such as:

- before / during / after
- delay / duration
- sequence
- repeat / oscillate
- propagate
- persist / settle
- grow / decay

The twenty-face experiment made an important distinction visible:

**One-time interaction does not imply instantaneous consequence.**

A tap can initiate a process that unfolds, becomes legible, and then leaves persistent consequence.

## Nouns, verbs, and affordances

The useful reusable layer may be less about named assets such as tree, bee, satellite, or portal and more about cheap verbs operating against semantic affordances:

- grow
- chase / flee / seek
- orbit
- fall / bounce
- attach
- hatch / emerge
- burst / spread
- assemble / collapse
- pour / fill / spill
- tunnel / pass through
- launch / land

Primitive geometry plus legible motion can carry surprising expression.

A sphere is nearly nothing. A sphere that anticipates, swells, bursts, and throws fragments has a story.

A line is nearly nothing. A line that enters a surface, becomes occluded, and reappears elsewhere can establish hidden volume.

Time turns cheap nouns into verbs. Semantic relationships give the verbs somewhere meaningful to act.

## Accumulation rather than matrix growth

The desired structure is not:

> geometry × behavior compatibility matrix

Instead, capabilities can accumulate.

TIME is broadly available.

SURFACE introduces relationships such as ON, ABOVE, BELOW, ACROSS, EDGE.

VOLUME adds INSIDE, OUTSIDE, THROUGH, CONTAIN, ENTER, EXIT.

Future experiments may reveal other useful buckets, perhaps CONNECTION, PATH, AXIS, ARTICULATION, AGENCY, or something we have not named yet.

These should not be promoted merely because they are imaginable. Repeated executable usefulness should reveal which affordances deserve machinery.

## Implementation posture

The current d20 code is evidence, not an architecture.

Its face-local frames and adjacency code are coupled to the geometry where they were born. Their ideas are more general than their implementations. That coupling is not yet debt.

Do not extract generalized frameworks merely because generality is visible.

A useful next experiment is deliberately smaller:

1. implement semantic behavior against a surface,
2. implement semantic behavior against a volume,
3. let time participate in both,
4. compose primitive geometry into legible consequences,
5. observe which relationships recur,
6. extend only from executable pressure.

The surface and volume experiments should test whether behavior can be expressed in terms of affordances rather than concrete host geometry.

## Current hypothesis

A useful semantic construction vocabulary may emerge from three largely independent ingredients:

**time + affordances + verbs**

Concrete geometry supplies affordances.

Behaviors consume them.

Time makes their consequences legible.

Composition then becomes less about remembering which behavior belongs to which object and more about saying what should happen in relation to what is already there.

This is a holding bucket, not yet a contract or framework.
