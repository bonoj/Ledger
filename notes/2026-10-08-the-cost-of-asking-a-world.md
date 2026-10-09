# The cost of asking a world
*8 October 2026 — Six Cities / Betwixt*

## The observation

A miniature geological world was being prepared for construction. An ambiguous visual feature prompted a question about the terrain. Rather than continue to infer the world's state from rendered appearance alone, we added a survey: a familiar tap could export structured evidence from the running simulation.

The first survey described geology. A later extension reported hydrology without requiring a new interaction. After a water-level adjustment from +6 to +15 terrain units, the exported measurements showed a largely shared water surface near +1.83, 71.7% sampled water coverage, and terrain relief of roughly 23.19 units. The visual scene and numerical report became two independent ways to interrogate the same physical state.

The human's assessment was immediate: 15 was full, but not a water world; 20 likely would be. The precise threshold remains a perceptual judgment, not a measured law. Crucially, the number was now an intelligible scale reference for terrain, motion, and possible construction.

The published phone view displayed build identity `53d4e4c3` and approximately 59 fps. This anchored the observation to a particular executable version rather than a remembered or imagined state.

## The epistemic boundary

A rendered image is evidence of appearance. Source code is evidence of intended machinery. Neither alone is a complete account of the current world.

A runtime survey provides a third kind of evidence: **the executable world's own report of its state at an identifiable moment**. It does not become infallible by being machine-readable. Its sampling, coordinate conventions, approximations, and blind spots remain subject to examination.

That distinction permits disciplined claims:

- **Observation:** what the instrument actually recorded.
- **Inference:** what a human or model concludes from those observations.
- **Intervention:** what was deliberately changed.
- **Verification:** whether the intended executable version and resulting behavior were actually observed.

These categories must not silently collapse into one another. In particular, a single hydrological snapshot can support claims about measured depths and speeds, but not automatically about long-term stability.

## The methodological turn

The instrument was not specified as a universal framework. It was earned by a particular uncertainty. When a new question required liquid measurements, the existing survey was extended instead of multiplying controls or asking the human to narrate the scene.

The emerging pattern is:

**Notice uncertainty → expose the smallest sufficient evidence → inspect and interpret → change deliberately → observe again.**

The striking economy lies in the *recurring* human input. Once the capability exists, taking the survey requires **one tap and zero words**. Sharing the resulting artifact remains a separate action in the present workflow. The cognitive work is not zero: the human still decides what deserves attention and judges whether the result makes physical sense. What shrinks is the mechanical burden of translating a world into prose for a model.

The instrument can grow in response to new questions while its use remains familiar. The cost of establishing a new sense is paid once; subsequent observations reuse it.

## Why this is more than telemetry

Ordinary telemetry can be extensive and still leave the observer uncertain about what matters. Here the instrumentation is driven by a question, its evidence is situated in a known world, and interpretation is shared across two different strengths: human spatial intuition and model-assisted numerical analysis.

Neither perspective is treated as an oracle. A mismatch is an invitation to inspect the model, the instrument, or the intuition—not to declare one party authoritative by default.

This is the beginning of an epistemology for executable worlds: **how to know what a world is doing without requiring either participant to reconstruct or remember the whole world.**

It is also the beginning of a methodology: build senses when uncertainty earns them, keep the boundary between evidence and interpretation visible, and make the repeated act of asking extraordinarily cheap.

## Limits and provenance

This account describes an observed capability, not a claim that all future world state is automatically available or that survey export is already a zero-action transfer into conversation. The geological and hydrological reports were snapshots of a particular running specimen. The original observation and the later survey measurements are recorded in [When the snowglobe answered back](2026-10-08-when-the-snowglobe-answered-back.md).

The public lesson is the epistemic pattern and its observable results. This account intentionally does not document private collaboration infrastructure, internal continuity mechanisms, or deployment implementation details.

*Ledger records the crossing. The executable world and its exported observations remain the evidence.*
