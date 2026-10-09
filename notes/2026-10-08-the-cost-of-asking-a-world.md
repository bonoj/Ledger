# The cost of asking a world
*8 October 2026 — Six Cities / Betwixt*

## The observation

We were preparing to construct within a miniature geological world when an ambiguous visual patch prompted a simple question: **What is that?**

We could have traded screenshots, described quadrants and landmasses, guessed at strata, or reasoned about the rendering from source code. Instead, we asked the running world to report what it knew.

The resulting survey was inexpensive to build. The geological state already existed in the executable simulation; a small instrument exposed it as structured evidence through a familiar interaction. When we later needed hydrological evidence, extending that same instrument was inexpensive too. No new interaction was required.

The first report described geology. The next described water. After changing one fill parameter from +6 to +15 terrain units, the hydrological survey reported 71.7% sampled water coverage, a water surface clustered near +1.83, and approximately 23.19 units of terrain relief. The human looking at the world judged that 15 was full but not quite a water world; 20 likely would be. That last comparison is perceptual judgment, not a measured threshold.

The published phone view showed build identity `53d4e4c3` and approximately 59 fps. We could associate the visual scene and numerical evidence with an identifiable executable version.

## What did not have to happen

The human did **not** have to supply screenshots, orient the model by quadrants, narrate landmasses, identify geological layers, estimate elevations, transcribe water values, or build a shared spatial vocabulary one clarification at a time.

Nor did the human need to predict which individual measurements the model would request next. A single export carried a substantial, situated description of the world, including measurements that could support questions formulated *after* the observation.

The meaningful human input was not a lengthy explanation. It was attention, a well-aimed question, one parameter change, and a tap. Taking the established survey required **one tap and zero words**; transferring its file into the conversation remained a separate action.

This did not eliminate human cognition. It removed the need for the human to act as a lossy translator between a world and an observer who could not directly inhabit it.

## Three economies of inquiry

The striking feature was not only that the survey became cheap to reuse. **It was cheap to create, cheap to extend, and cheap to invoke.**

1. **Discovery:** a specific uncertainty revealed which sense was missing. The scarce contribution was asking the useful question, not specifying a grand instrumentation system.
2. **Construction and extension:** the executable world already possessed relevant state. A small observational boundary made it legible; later questions justified adding hydrology without rebuilding the interaction.
3. **Repeated use:** once present, the instrument delivered a rich report through the same single tap, rather than requiring repeated verbal reconstruction.

The method is recursive: **questions become instruments; instruments produce evidence; evidence makes better questions possible.**

This is not a claim that every possible instrument will be cheap. It is an account of what happened here, and of the advantage conferred by a malleable executable environment with accessible state.

## The epistemic boundary

An image reports appearance. Source code describes intended machinery. A runtime survey reports sampled state from a particular execution. None is a substitute for the others, and none is automatically infallible.

Keeping four categories distinct helps prevent confidence from outrunning evidence:

- **Observation:** what the instrument recorded, within its sampling and measurement limits.
- **Inference:** what a human or model concludes from those observations.
- **Intervention:** what was deliberately changed.
- **Verification:** which executable actually ran, and whether the intended behavior was observed.

A single hydrological snapshot does not prove long-term stability. A model's plausible explanation does not become a measurement merely because it sounds physical. A build that was committed is not necessarily the build a human saw.

**Knowing what ran is part of knowing what happened.** A traceable executable identity connects the construction side of the experiment to its observations without requiring a description of deployment machinery.

## A sense that need not be redesigned for every world

The survey's *principle* is independent of the snowglobe's size. The same observational relationship can apply to another miniature, a larger terrain, or a different executable world whose state can be sampled and expressed coherently.

That does not mean infinite scale is free. Frame rate, computation, sampling resolution, data volume, and transport impose real limits. Larger worlds may need selective, hierarchical, or streamed surveys. But these are scaling choices, not reasons to return to screenshot-by-screenshot narration or invent a wholly new human interaction for each world.

The important possibility is that **world complexity can increase without a corresponding increase in the human burden of describing that world to the model**.

## Why this is more than telemetry

Telemetry can provide numbers without establishing a useful relationship between observers and the thing observed. Here a question drove the instrument, the instrument returned situated evidence, and the evidence could be compared with human spatial judgment and model-assisted numerical reasoning.

The human supplied attention and physical intuition. The executable world supplied measurements. The model could analyze, compare, and propose explanations. Each could reveal errors in the others; none was an oracle.

One observation could support many subsequent questions, including questions neither participant had thought to ask when the file was produced.

This is the beginning of an **epistemology of executable worlds**: a way to distinguish what the world did, what we observed, and what we think those observations mean.

It is also a **methodology of inquiry**: encounter uncertainty, expose the smallest useful evidence, interpret it together, intervene deliberately, and observe again—growing new senses as questions earn them, while keeping their recurring use extraordinarily cheap.

## Limits and provenance

This account records one successful geological-to-hydrological extension, not a universal guarantee of cheap instrumentation, arbitrary-scale sampling, or automatic delivery into a conversation. The original survey events and measurements are recorded in [When the snowglobe answered back](2026-10-08-when-the-snowglobe-answered-back.md).

The public account concerns the observed capability and its epistemic implications. It does not describe private collaboration infrastructure, internal continuity mechanisms, or deployment implementation.

*The world need not be narrated into existence for another observer. It can be asked—and it can answer.*
