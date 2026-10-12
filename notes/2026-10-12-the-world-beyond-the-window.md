# The World Beyond the Window
*Systems design case study · October 12, 2026*

**[Experience Hermeticon Wanderer](https://bonoj.github.io/jit/hermeticon-wanderer/?terrain=authored-v1)** · [The longer design journey](2026-10-12-hermeticon-journey.md)

**The design challenge:** Make a small, beautiful instrument through which someone can inhabit a much larger, persistent world—without allowing the instrument to define what exists.

**The result:** A phone-first, navigable geological world whose terrain, weather, and discrete material persist independently of the moving window through which they are seen. Excavated terrain becomes transported material and is deposited back into geology. The next experiment asks whether that deposited geology can be excavated again with its history intact.

## A window is not a world

Our early experiments placed entire simulations inside glass spheres. They were delightful and useful: a visible boundary made physical consequences legible. But a contained simulation becomes an awkward foundation for exploration. If the viewer moves, does the world move with it? Does weather follow? Does material disappear when it leaves the frame?

I changed the ownership model rather than trying to disguise the problem with camera tricks.

**The world owns its geology, weather, and matter. The Hermeticon owns a way of experiencing them.** Its sphere is an aperture into a persistent landscape, not the edge of that landscape.

That decision produced an interaction that feels different from orbiting a diorama. A small Wanderer walks through terrain; the viewing aperture follows only after he moves beyond its central region. A cloud stays behind when he walks away. Material outside the glass continues to exist.

The design principle is portable: **a boundary of attention must not accidentally become a boundary of reality.**

## Matter should survive a change of form

A world is not persistent merely because its scenery remains loaded. Actions need consequences that survive changes in representation.

In Wanderer, excavating a region removes samples from an authoritative signed geological field. Those samples become 96 discrete transport units. They travel to a receiver and are deposited into geology elsewhere.

This is more than a visual particle effect: the same event changes the source, creates an accountable material inventory in transit, and changes the destination.

In the player-observed V48 report, all **96 of 96 units** reached the receiver; none remained at source or in transit. The report showed **81 terrain chunks**, **97 localized rebuilds**, **no reported errors**, and **75.1 FPS at inspection** on the player's phone. These are a successful complete-transfer witness, not proof of a fully conserved geological cycle. Re-excavation and material lineage remain open tests.

The principle is again larger than this prototype: **representation may change; accountable identity should not.** A hillside, a handful of bearings, and a newly deposited hillside ought to be different presentations of material with a continuous history.

## Give every boundary one job

The same glass sphere plays several roles, and those roles should not be confused.

Its moving window controls **observation**. Its upper region controls **local weather manifestation**. Its lower bowl provides **physical contact** with material.

At one point, a containment verifier treated world-space bearings outside the moving sphere as errors. It was faithfully enforcing an obsolete premise: that the glass contained the whole simulation. The problem was not escaped material. It was a test that still believed in the old architecture.

That is a useful systems-design failure. An instrument can produce a precise measurement of the wrong concept.

We initially corrected the verifier's jurisdiction. Later, as the observer accumulated GPU witnesses, geometry scans, and routine diagnostics, we made a second decision: remove machinery that no longer earned its runtime cost. V48 retained a small, on-demand report and eliminated the expensive or dormant observers.

**The world runs. The observer reports. A deliberate experiment establishes what has actually been proved.**

This distinction matters in any interactive system whose internal truth, rendered appearance, and user experience are not identical.

## Why this matters to a studio

I am interested in building worlds that can do more than depict an idea: worlds with material consequence, persistent state, and interactions that make new situations possible.

That requires more than implementation. It requires choosing the right ownership boundaries, deciding what must remain invariant when representations change, finding the simplest interaction that communicates the system, and knowing when an instrument has become more expensive than the question it answers.

The executable Wanderer demonstrates engineering. These decisions demonstrate the systems design behind it.

The work is unfinished by design. The next question is not how to make the window prettier. It is whether a piece of geology can become material, travel, become geology again, and still carry enough identity to repeat the cycle.

That is the kind of question I want to spend my time answering.

---

*Companion reading: [Hermeticon: The World Beyond the Glass](2026-10-12-hermeticon-journey.md) follows the wider lineage through water, asteroids, emergent material, weather, and the evolving meaning of the glass. The [living Wanderer](https://bonoj.github.io/jit/hermeticon-wanderer/?terrain=authored-v1) is the primary artifact.*
