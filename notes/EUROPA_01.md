# EUROPA-01 — The Ice as Evidence

**Hermeticon Institute · Active research notebook**  
**Opened:** 2026-10-16 · **Reframed:** 2026-10-16  
**State:** Research design; no Europa simulation or spacecraft built.  
**Source of truth:** This note. Superseded discussions remain in Git history.

> **Question:** What can a depth-resolved sample of Europa's ice reveal about its formation, alteration, and possible exchange with the subsurface ocean—and how would we know?

## Research posture

Investigate **the ice first**, the **measurements second**, and the **delivery hardware only as a feasibility boundary**. The project is not a lander design competition.

Use the Institute's documented cycle: **Imagine → Instantiate → Observe → Verify → Preserve → Reimagine**.

Rules:
- Organize around falsifiable questions, not components or spectacle.
- Build the **smallest useful executable world** before constructing a spacecraft.
- Distinguish **published observation**, **derived estimate**, **assumption**, **simulation ground truth**, **simulated observation**, and **demonstrated result**.
- Model uncertainty, contamination, and competing explanations. A plausible spectrum is not a validated instrument.
- Prefer reusable mechanisms and existing Hermeticon/Crucible/Ledger infrastructure.
- Record failed hypotheses and negative results. Never silently promote a proposal into a finding.
- **Automatic puts:** every substantive turn updates this note without further permission; revise in place, keep a compact progress record, and report failed writes. Git history is the archive.

## Core inquiry

### Candidate explanations to discriminate

These are *hypotheses for investigation*, not claims about a sampled site:

- **H1 — Surface processing:** radiation and sputtering modify originally deposited ice and trace constituents.
- **H2 — Endogenic exchange:** fractures or other transport processes introduce materials originating deeper within Europa.
- **H3 — Exogenic delivery:** infalling material contributes some detected compounds.
- **H4 — Physical redistribution:** freeze/thaw, sublimation, recrystallization, and mechanical mixing create apparent layers or alter signatures.

The task is not to force a single explanation. Determine which observations could distinguish them, under what assumptions, and where identifiability fails.

### Observables and instruments

| Observable | Candidate method | Major ambiguity |
| --- | --- | --- |
| Grain structure, layering, inclusions | Core imaging, microscopy | Coring damage; reworking |
| Ice phases and molecular vibrations | Raman / infrared spectroscopy | Mixtures, temperature, overlapping bands |
| Salts and ionic chemistry | Dissolution + conductivity / ion analysis | Melt-induced reactions; sample contamination |
| Oxidants and possible organics | Targeted chemical and spectral assays | Radiation chemistry; false identifications |
| Depth, hardness, thermal behavior | Corer telemetry + temperature | Fractures, geometry, instrument heating |

A **0.5–1 m** column is an *initial sandbox extent*, not a scientifically optimized sampling depth. Europa's radiation-modified chemistry and the electronics' shielding requirements are **separate** depth questions.

### Environmental constraints

Near vacuum, cryogenic ice, strong energetic-particle radiation, uncertain mechanical properties, power limits, and planetary-protection constraints affect both sampling and interpretation. Avoid assuming exposed meltwater can be poured or spun into stable ice structures; sublimation, confinement, and bonding physics must be addressed.

## First executable apparatus — Ice Column v0

A deterministic, seeded depth column with a concealed composition map and independently inspectable ground truth.

**Minimum model**
1. Stratified ice, inclusions, fracture zones, salts, and optional trace species.
2. Parameterized surface alteration profile and physical mixing.
3. Coring actions with depth provenance, sample recovery, thermal disturbance, and contamination.
4. At least two complementary simulated measurements with noise and imperfect discrimination.
5. An investigator-facing notebook recording evidence, hypotheses, uncertainty, and test choices.
6. Ground-truth comparison, replay, and explicit model provenance.

**First acceptance test:** Two different synthetic histories produce superficially similar initial measurements. A chosen additional measurement should distinguish them *in some parameter regimes*; elsewhere the apparatus must correctly report ambiguity. This tests the experiment rather than merely animating a drill.

## Ten-turn research expedition

A **turn** is one substantive model work cycle, with an automatic GitHub put. If a task cannot be completed in one turn, record its evidence and next action without fabricating completion. User can redirect at any point.

| Turn | Focus | Required output / decision gate |
| --- | --- | --- |
| **1** | Scientific reconnaissance | Primary-source map: Europa ice chemistry, radiation processing, stratigraphy, known unknowns; distinguish measurements from inference |
| **2** | Hypothesis matrix | H1–H4, predicted signatures, confounders, falsifiers, and what a 1 m core can and cannot reveal |
| **3** | Spectral and chemical references | Find usable laboratory reference datasets (Raman/IR/ice/salts/radiolysis); document temperature/phase coverage and licenses |
| **4** | Ice Column v0 specification | Minimal deterministic state, depth resolution, units, compositional constraints, seeded scenarios and provenance |
| **5** | Instantiate substrate | Implement a small executable column using existing lab infrastructure where practical; verify seed replay and material accounting |
| **6** | Coring and handling | Model cuttings/core recovery, sample depth, disturbance, blanks and contamination; instrument the loss/error budget |
| **7** | Virtual measurements | Implement spectral/chemical forward models, noise and calibration assumptions; verify against selected references where feasible |
| **8** | Blind investigation | Conceal synthetic ground truth; compare hypotheses with actual simulated observations; record successes and ambiguity |
| **9** | Engineering feasibility envelope | Bound radiation, thermal, power, sample depth and delivery mass; compare rocket fuel with penetrator/bubble/soft-landing hardware only at common assumptions |
| **10** | Review and next expedition | Independent checks, limitations, reusable modules, live artifact/build verification if deployed, and the next research questions |

**Current position: Turn 1 pending.** This rewrite is expedition preparation, not a substitute for Turn 1.

## Delivery and protection — parked feasibility branch

Europa has essentially no useful atmosphere for aerodynamic braking; **propulsive deceleration is the baseline**. A padded inflatable bubble, impact penetrator/piton or literal slug shell, and conventional soft landing are *alternatives to compare*, not decisions. Earlier messages arrived out of order; do not infer a settled preference for the slug concept.

The fair comparison is **total delivered and wet mass**, including delta-v/propellant, engines/tanks, structural mass, shielding, impact absorbers, deployment hardware, and reliability. A heavy penetrator may lose to fuel; a bubble may reduce terminal braking but cannot replace major propulsion.

**Radiation protection:** compare imported vault shielding with early burial/backfill and possible in-situ ice construction. A spun ice shell is a creative hypothesis, not a demonstrated vacuum-compatible fabrication process. Burial may protect instruments but complicates communications, heat management, and sample cleanliness. Quantify these only after establishing credible environmental and hardware inputs.

Do not allow this branch to dominate Turns 1–8 unless it blocks the science.

## Cross-domain bridges to pursue

- **Glaciology and ice-core science:** stratigraphic interpretation, preservation, inclusions, sampling artifacts.
- **Radiation chemistry and space weathering:** dose-depth chemistry, radiolysis, sputtering, secondary products.
- **Spectroscopy and inverse problems:** spectral mixtures, calibration, uncertainty, identifiability.
- **Analytical chemistry / contamination control:** blanks, sample transfer, altered chemistry during melting.
- **Geophysics / transport:** fracture exchange, thermal histories, deposition and mixing.
- **Autonomous science:** choosing the next measurement to maximize discrimination rather than collecting every possible datum.
- **Systems engineering:** mass, power, dose, and thermal budgets as feasibility constraints, not the primary inquiry.

## Source register — leads to verify during Turn 1

The following are **research entry points**, not yet a fully validated bibliography or evidence for particular numerical constants:

- [NASA Europa overview](https://science.nasa.gov/jupiter/moons/europa/)
- [NASA Europa Clipper](https://science.nasa.gov/mission/europa-clipper/)
- [NASA Europa Lander study](https://europa.nasa.gov/resources/58/europa-lander-study-2016-report/)
- [NASA Europa radiation maps](https://europa.nasa.gov/news/17/radiation-maps-of-europa-key-to-future-missions/)
- [NASA NTRS technical reports](https://ntrs.nasa.gov/)
- [NASA Planetary Data System](https://pds.nasa.gov/)
- [USGS planetary mapping](https://astrogeology.usgs.gov/)

Before assigning a number to a scientific parameter, trace it to a relevant source and record applicability and uncertainty.

## Progress

**2026-10-16 — Scope and methodology reset.** The earlier note had grown into repeated landing concepts and work logs. Replaced it with a question-first science program, executable Ice Column v0, bounded delivery branch, source register, and ten-turn roadmap. Original ideas and corrections remain recoverable from Git history. **No numerical model or runtime has yet been built.**

**Next action:** **Turn 1 — scientific reconnaissance**, starting with published ice composition and radiation-processing constraints, followed by a compact source-to-model parameter table.
