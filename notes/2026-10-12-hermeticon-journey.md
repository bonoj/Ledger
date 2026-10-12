# Hermeticon: The World Beyond the Glass

*Ledger account · October 12, 2026 · [Hermeticon Wanderer](https://bonoj.github.io/jit/hermeticon-wanderer/) · accepted V31*

We began by putting worlds inside glass.

It was a useful conceit. A sphere gave every experiment an edge, every material a place to go, and every simulation a shape we could hold in our minds. We could pour water into it, deform its terrain, fill it with thousands of tiny bearings, and watch consequences unfold inside a beautiful, bounded object.

Then we wanted to walk.

And the glass became a problem.

## A world inside glass

The baubles taught us to build legible, perturbable systems rather than merely decorate scenes. In Crucible, terrain could deform under meteors and material impacts. Elsewhere, particles rose, condensed, fell and accreted. We learned to separate material inventory from its visible representation, and a simulation from the mesh that lets us see it.

The glass made those experiments comprehensible. It also quietly trained us to assume that what was inside the sphere was the whole world.

A vessel is an excellent place to test a law. It is a poor definition of a universe.

## The instruments before the name

The photographs of our experiments make the lineage clearer than a chronology of commits could.

In Betwixt, a brass armillary hangs above a small world. In Workshop, an elaborate terrain-and-water landscape rests on an instrument of rings and supports. They are not yet the Hermeticon contract, but they establish a visual grammar: **the apparatus can be a thing in a world, while carrying a world of its own.** We were already distinguishing the instrument, its subject, and the observer.

Other baubles tested what such an interior could mean. A little boy and an old man inhabited a miniature narrative world. Subnautimation pictured a civilization of islands and swimmers, with a displayed count of five active material circuits, 1,120 delivered parcels and 130 swimmers. Pale Horse made a frozen woodland into a place where a film and an explorable environment could meet. These are not evidence that every scene shares one physics engine. They are evidence that the **kind of world** need not define the instrument: a world may be a story, a civilization, an environment, or an experiment.

We had been asking the glass to hold increasingly different things. The eventual Hermeticon could not be defined by any one of them.

## Waterworld: substance without a single appearance

Waterworld sharpened a harder question: if water is sometimes a flying bead and sometimes a continuous-looking surface, what remains the same?

Its executable v25 account describes **245,944 conserved material units** across a shrinking source, ballistic beads, a collecting basin, and a 64 × 64 transport grid. The grid owns a discrete liquid-transport state; the rendered surface and apparent water volume are presentations of it. A brass skiff must meet the *rendered* water where the eye sees it, even when that surface differs slightly from the transport grid.

This is not a complete three-dimensional liquid solver. It is an experiment in separating **substance, dynamics and appearance**. We can change how a material is represented without quietly creating or destroying it.

That matters beyond water. If a Hermeticon can be one participant in a larger system while containing innumerable internal participants, then its detail must be negotiable without its identity or accounting becoming negotiable too.

## Asteroid: the whole and its constituents

Asteroid approached the same seam from the opposite direction.

A carbonaceous rock appears to be one coherent body. Its executable v7 uses a sampled heterogeneous material field and assigns **five conserved bearings per occupied sample**. Staggered shock fronts expose its constituent bearings as the rock breaks apart; a reformation path brings the experiment back toward a whole.

The point is not that a rock is secretly made of our preferred rendering primitive. The point is that a **whole** and its **constituent material** are two descriptions of one accountable thing. Breaking the presentation apart need not break the material ledger.

In retrospect, Asteroid was rehearsing one half of Hermeticon atomicity: an object may be treated as a unit without denying the complexity inside it.

## Genesis: constituents become a whole

Hermeticon Genesis asked the complementary question.

Its executable experiment begins with **100,000 beads**, deterministic particle-mesh self-gravity, gas pressure, a conservative sink and local collision interactions. The source explicitly declines to begin with authored planets or prearranged orbits. It tries instead to let organization arise from interactions among material units.

Asteroid asks what happens when a whole becomes many. Genesis asks what happens when many begin to become a whole.

Neither experiment by itself establishes a recursive universe. Together, they make the idea of an atomic Hermeticon less mystical and more exact. **Atomic from outside** does not mean **undifferentiated inside**. It means a surrounding system may interact with a coherent unit while that unit has its own internally meaningful causal life.

## The boundary between causes

Across the experiments, we also kept approaching a question we have not yet solved.

An impulse, a meteor, a tap, or a collision acts **from outside inward**. A change in water inventory, an inhabitant's journey, an asteroid's fracture, or a forming star develops **from inside outward**. If a Hermeticon is to be a single participant in a larger world, which effects can cross its boundary? In what representation? With what conservation and provenance?

That interface is not implemented as a general recursive mechanism. But our separate experiments have furnished its vocabulary: material identity, aggregate representation, local resolution, human intent, physical contact, and persistent world state.

The Hermeticon emerged not from making our worlds smaller, but from learning **how much complexity a single thing can possess without ceasing to be one thing**.

## A world too large for glass

Hermeticon began by reversing the relationship.

Instead of fitting terrain into a sphere, we made a persistent geological field and allowed the sphere to reveal a piece of it. The geology is deterministic: seed 741, a signed field sampled on an 85 × 21 × 85 lattice, built into a resident mesh. The Hermeticon's spherical aperture reveals a portion of that mesh without remeshing the world each time the viewpoint moves.

That change sounds like a camera trick. It is actually a change in what exists.

The terrain beyond the glass is not missing terrain waiting to be invented. It is terrain we cannot currently see. The boundary has moved from *the edge of reality* to *the edge of observation*.

## Then we wanted to walk

We gave the aperture an inhabitant: a small cube called Wanderer.

This forced us to take human intent seriously. A tap means go there. A drag means orbit the camera. Two fingers mean zoom. Those gestures must remain distinct while the inhabitant walks and the simulation continues. Early attempts to consult complex terrain geometry during interaction produced missed taps and an unreliable, blinking cube. We simplified: flat-plane targets, continuous movement, no expensive per-frame terrain raycasts.

Then came the question of how a moving eye should follow its inhabitant. Locking the Wanderer rigidly to the center felt like dragging a diorama beneath him. Letting him wander entirely offscreen was no better. The accepted compromise gives him the central **25% of aperture area**—half the aperture radius—to roam before the world begins sliding. The camera stays in the human's hands.

This was the experiential turning point. We were no longer looking *at* a little world. We were moving *through* a much larger one, with a small visible neighborhood following our steps.

## The cloud that stayed behind

Weather made the new interpretation unavoidable.

In a traditional bauble, a cloud belongs to the container. Move the container, and the weather comes along. But our cloud belonged to the geological world. Walking away should leave it behind. If it was still raining everywhere we went, the sphere was secretly acting as the owner of the sky.

We placed the cloud in geological coordinates and clipped its visible mesh to the Hermeticon's upper weather dome. Rain can manifest only where the cloud overlaps that dome. Leave the cloud's reach and local emission stops. Return while inventory remains and emission can resume.

The cloud does not disappear merely because it is out of sight. Nor does its material budget refill when we look again.

The upper dome is therefore not a hard wall for falling matter. It is a boundary for **local weather manifestation and observation**. The lower hemisphere has a different job: it is a **physical bowl**, capable of contacting bearings that cross its surface.

One object, several kinds of boundary. Confusing them had caused much of our trouble.

## The bearings refused to vanish

The next question was even better: what happens to a raindrop when we walk away?

A spawned bearing must remain at its geological position. It may become invisible because it lies outside the aperture, but invisibility cannot be destruction. Likewise, a moving glass boundary should not automatically seize ownership of everything it passes.

Our first containment verifier disagreed. It reported bearings outside the sphere as violations, as though the old bauble rule still applied. The alarm was revealing: **the verifier understood the former architecture, not the world we had built.**

We corrected its jurisdiction. Geological terrain, cloud and bearings are not vessel-local objects. The verifier still checks objects that genuinely belong inside the Hermeticon, but it no longer declares world matter escaped simply because the eye moved away.

The lower bowl's current collision response is lively to the point of absurdity. It can repeatedly bounce bearings against moving glass—our affectionate “nutso ball” behavior. We enjoyed it and kept it, while recording that strictly trajectory-based contact remains unfinished. An amusing physical consequence is not the same thing as a proven physical law.

## Material has a memory

The rain began with **10,000 units**. Emission transfers a unit from cloud inventory into a persistent bearing; a bearing may be airborne or resting, but it does not become an extra unit by landing.

```text
cloudRemaining + emittedBBs = 10000
emittedBBs = airborneBBs + restingBBs
```

In the player-accepted V31 report, after 33.752 simulated seconds, all 10,000 had emitted: 848 airborne, 9,152 resting. **185 bearings remained offscreen**, still accounted for. The report showed conservation holding, no generic invariant or containment failures, and approximately **58.94 FPS** on the player's phone.

Those are useful witnesses, not proof of a complete matter engine. The cloud was already exhausted at inspection, so that report does not directly demonstrate the visual or emission behavior of a partly overlapping cloud. Some bearings were outside the lower bowl; repeated wall contacts do not yet prove correct crossing physics. Wanderer has no pooling or absorption system, nor a general mechanism for changing distant material into a cheaper aggregate representation.

But we have earned the crucial distinction: **matter persists when attention moves elsewhere**.

## The atom that contains a universe

There was another inheritance from the bauble we did **not** abandon: its unity. The armillary, the world-bearing Workshop, the conserved water, the fractured asteroid and the collapsing bead cloud had all approached this from different directions.

Seen from outside, a Hermeticon is one thing. It can have a position, move through space, and participate in a larger system alongside other things. At that scale it is an **atom** of composition—a single participant, not a demand that its observer inspect every internal bearing, cloud or hillside.

Seen from within, the same Hermeticon opens onto a world of geology, weather, matter, inhabitants and history. Its visible sphere is not the limit of that world's existence. The world can be larger than the window through which it is experienced.

These are simultaneous descriptions, not competing ones. **One particle from outside; an entire universe from inside.** Atomicity is a relationship between scales, not a claim that the interior is simple or that its material ceases to exist when unobserved.

That makes the Hermeticon more than a portable viewpoint. It is a possible unit of composition: a world-bearing thing that can itself belong to a world. We have established the conceptual boundary and a working single-Hermeticon experiment; we have **not** yet demonstrated a complete recursive system of nested, interacting Hermeticons. That is the possibility the design opens, not an accomplishment we should quietly assume.

The bauble's greatest gift was never just the glass. It was the ability to grasp something immense as **one thing**, without pretending it had become small.

## What the glass became

We started with a sphere that contained everything. We ended with a sphere that remains a single composable object while revealing a world larger than itself. It has three distinct relationships to that world:

- **Observation:** a moving aperture into persistent geology.
- **Manifestation:** a weather dome in which nearby cloud can become discrete rain.
- **Contact:** a lower bowl that physically interacts with matter.

Those roles need not share one definition of “inside.” The world continues outside our view. The Hermeticon governs what we witness, what locally manifests, and where its physical surface matters.

There is a parallel in the way we built it. Our working harness—source, diagnostics, semantic surfaces and handoffs—has changed repeatedly as our understanding changed. More like musicians tuning an instrument each time they play than engineers finishing one rigid apparatus. A good handoff preserves understanding without becoming another barrier to making things. When we described Hermeticon afresh, the existing documents were enough to recover the same meaning. **The semantics survived compression.**

The next frontier is not a bigger sphere. It is finding ways to spend detailed simulation only where detail is needed, without losing material, history or consequence elsewhere—and defining which causes and quantities may cross between a Hermeticon's inner and outer lives. We have not solved those problems yet.

**The Hermeticon does not contain the world. It contains the cost of experiencing it.**

**The Hermeticon is one thing from the outside, and a world from the inside. Neither description cancels the other.**

The glass is small.

The world need not be.

And the instrument can keep changing. 🐉
