# Hermeticon — laboratory charter

> **Status:** Living charter · reorganized 2026-10-17  
> **Scope:** Identity, method, principles, programs, evidence, and boundaries.  
> **History:** [Complete founding record](archive/HERMETICON_FOUNDING_RECORD_2026-10-17.md), preserved verbatim before this restructuring.

**Research is how we work. Executable worlds are what we make. Understanding, discovery, and delight are among the things they can deliver.**

Hermeticon is an open-ended laboratory for making ideas executable. Its work spans interactive worlds, educational experiences, experimental games, creative technology, and investigations. It is not limited to one discipline, technology stack, client category, or simulation fidelity. It is **not** claiming to be an accredited academic institution or an authority on real-world planetary science.

**Hermeticon Institute** is the public-facing invitation and place where people encounter the work and propose interesting problems. Its evolving website and Sanctum Hub design live in [HERMETICON_INSTITUTE.md](HERMETICON_INSTITUTE.md). The Institute's purpose is broader than the website.

## 1. The central method

**Imagine → Instantiate → Observe → Verify → Preserve → Reimagine.**

The loop is more durable than any renderer or implementation stack. The laboratory builds small, inspectable worlds and instruments; tests ideas against their behavior; preserves what happened; and uses the evidence to choose what to imagine next.

An executable world can be a toy, an artistic environment, a lesson, a prototype, or a scientific-style experiment. **Its evidentiary standard must match the claims being made.** A beautiful approximation need not be a validated physical model. An inconclusive measurement can be a successful investigation if it answers the agreed experimental question honestly.

The coupled **human–model–world** system is itself an instrument: a human provides intent, judgment, and mediation; the model helps propose hypotheses, apparatus, and interpretations; persistent executable environments return observations that may contradict those interpretations. This is an extension of practical capability, not a claim that the model independently acts in the physical world.

## 2. Working principles

1. **Executable claims.** Where useful, instantiate ideas so their consequences can be observed, manipulated, or tested.
2. **Smallest useful world.** Use the **coarsest executable representation that preserves the relationships relevant to the task**. Deliberately lossy abstractions can improve clarity, speed, and pedagogy.
3. **Purpose-fit rigor.** Separate synthetic truth, observation, inference, and real-world claims. Calibrate and validate where the intended claim demands it; acknowledge uncertainty and abstain when warranted.
4. **Composability.** Favor reusable worlds, materials, instruments, observers, and interactions over monolithic demonstrations.
5. **Conservation of evidence.** Keep observations, failures, limitations, regressions, provenance, and verified build identity—not just successes.
6. **Human–model complementarity.** Treat collaboration and its interfaces as part of the experimental system.
7. **Generative ambiguity.** Images, metaphors, play, and unusual questions can start investigations without prematurely becoming formal hypotheses.
8. **Beneficiary contact.** Let teachers, learners, creators, and commissioners shape what a useful outcome means.
9. **Operational continuity.** Reuse existing execution, deployment, observation, and recovery contracts. A source commit is not proof of a live browser build.

## 3. Research directions

These are **permeable programs, not fixed departments**.

| Direction | Question | Example apparatus |
|---|---|---|
| **World Systems** | How do local rules produce persistent, consequential environments? | Terrain, material transport, Crucible, Foundry, SixCities, orbital construction |
| **Embodiment & Agency** | What minimal mechanisms enable perception, action, memory, and adaptation? | Arcana fauna, Wanderer, bounded observers, digital familiars |
| **Executable Understanding** | When does interacting with a model teach more than reading about it? | ChemLab, Ion Garden, Acid–Base Lab, CHE 001, educational simulations |
| **Collaborative Cognition** | How do humans and models create, inspect, and sustain shared work? | Conjoiner, multimodal context investigations, development protocols |
| **Observation & Epistemology** | What can an instrument responsibly infer from a world? | Europa, provenance, deterministic replay, deployment verification |

Cross-program connections are hypotheses to explore, not discoveries already established.

## 4. Representation across worlds

Physical and simulated scenes can share **silhouettes, binary masks, edge maps, occupancy fields, depth fields, and spatial relations**. Once converted to a common representation, some analysis can be reused regardless of whether the data came from a camera or renderer.

That equivalence is **representational**, not a guarantee of equivalent physics or observation quality. Physical sensing introduces occlusion, distortion, noise, calibration, and segmentation uncertainty. Actuation in the physical world also requires separate safeguards and interfaces.

A useful cross-domain vocabulary is **observe → represent → hypothesize → intervene → compare**. The implementation stack may change while preserving these concepts, but migration cost and semantic mismatches still require examination.

## 5. Work and audiences

Hermeticon is deliberately **broad**. The aim is to become a place where people bring interesting problems and where executable experiences emerge quickly enough to support exploration.

Possible outcomes include:
- **Learning worlds:** tailored browser-native lessons, ideally designed with educators; no assumption of demonstrated classroom efficacy.
- **Living worlds and simulations:** terrain, material behavior, populations, interaction, and consequence.
- **Experimental play:** novel mechanics, systems, and creative prototypes.
- **Executable investigations:** instruments, observations, and bounded findings, including honest negative or inconclusive results.

The desired deliverable is an agreed outcome or artifact, **not hours billed**. Service boundaries, demand, capacity, prices, rights, and contracting terms remain provisional. Earlier detailed rate cards and public pro-bono positioning in the [historical archive](archive/HERMETICON_FOUNDING_RECORD_2026-10-17.md) are **superseded proposals, not current publication instructions**. Any actual engagement requires a scoped agreement. Private negotiating preferences in the archive are **not for public-facing copy**.

### Education as an example, not a restriction

A teacher might request a 20–25-minute browser lesson on ionic ratios, acids and bases, erosion, or another misconception. A possible learning rhythm is **predict → manipulate → observe → explain → transfer**. Phone-native links and modular experiences can reduce friction, but accessibility, curriculum fit, scientific review, privacy, and actual learning outcomes must be assessed.

The existing [ChemLab](https://bonoj.github.io/jit/chemlab/) combines [Ion Garden](https://bonoj.github.io/jit/ion-garden/), [Acid–Base Lab](https://bonoj.github.io/jit/acid-base/), and [CHE 001 Field Guide](https://bonoj.github.io/jit/chem001/). Their source has been inspected; no classroom efficacy claim is made. The human reports extremely rapid extension of this family, but that is not a validated production benchmark.

## 6. Recorded investigation: EUROPA-01

**Status: completed and paused, 2026-10-16.** [Experiment notebook](notes/EUROPA_01.md) · [Abyss operating handoff](https://github.com/bonoj/Abyss/blob/main/shell/codex/europa/HANDOFF.md) · [Instrument](experiments/europa-01/observable-core.mjs)

EUROPA-01 instantiated synthetic stratigraphy in an executable icy world and conducted two core extractions. The apparatus preserved material accounting: **84 nodes removed, 66 recovered, 18 dispersed**, with zero reported accounting residual. A blind instrument saw only generic material observations—not the privileged synthetic geological labels.

Its measured target/reference contrast was **−0.023293**, below the **0.05** abstention threshold. **The instrument abstained.** The planted synthetic lens existed in privileged truth, but was **not established by the blind observations**. A bounded 100-pair independent-noise null check also abstained in all 100 trials; this is not proof of broad scientific validity.

The user observed the running Abyss build [`d9bfea85`](https://bonoj.github.io/Abyss/shell/?world=europa) at approximately 59.53 FPS with Europa active. This is evidence of the executable synthetic investigation, **not a discovery about the actual moon Europa**.

The lesson is not that every world needs rigorous glaciology. It is that **a model's fidelity and verification should be chosen to match its purpose**. A child exploring an ice-covered ocean needs a different world from a researcher making a geological claim.

## 7. Evidence, confidence, and open questions

Use these labels when presenting work:

| Status | Meaning |
|---|---|
| **Demonstrated** | Supported by reproducible, appropriately scoped evidence |
| **Observed** | Witnessed, but not independently established beyond that observation |
| **Proposed** | A design or mechanism not yet demonstrated |
| **Conjectured** | An ambitious possibility to investigate |
| **Imagined** | A generative idea, not yet an empirical claim |

Open questions include whether educational experiences improve learning; whether buyers commission tailored worlds; how far modular reuse reduces delivery costs; what shared simulation/physical perception pipelines can actually do; and which human–model workflows produce reliable, useful outcomes.

## 8. Document map and authority

| Document | Responsibility |
|---|---|
| **[HERMETICON.md](HERMETICON.md)** | This living charter: current identity, principles, programs, and bounded evidence |
| **[HERMETICON_INSTITUTE.md](HERMETICON_INSTITUTE.md)** | Public Institute and Sanctum Hub website design, node content, spatial interactions, service discovery |
| **[EUROPA_01.md](notes/EUROPA_01.md)** | Detailed expedition evidence and limitations |
| **[HERMETICON_VISUAL_CORPUS_II.md](HERMETICON_VISUAL_CORPUS_II.md)** | Later multimodal founding imagery and annotations |
| **[Founding archive](archive/HERMETICON_FOUNDING_RECORD_2026-10-17.md)** | Verbatim pre-restructure discussions, images-as-described, historical proposals, and superseded plans |

**Authority rule:** The Ledger is a documentary and conceptual record. Executable repositories, their actual contracts, tests, and browser-observed deployed builds govern implementation and runtime claims. Historical ideas do not silently override newer explicit decisions.

**Current website direction:** The Institute's Sanctum is a quiet, Things Betwixt–inspired circular disc or roofless gazebo with sparse pillars. Material trails lead organically to explorable nodes containing miniature or nested Hermeticons, with small scene-anchored cards and conditional iframe portals. See the Institute design ledger for the full proposal. **No Institute website deployment is claimed here.**

---

*Editorial policy: keep this charter concise. Add new principles by integrating them into the relevant section; preserve long-form conversations and experimental detail in linked records instead of appending another chronological essay.*
