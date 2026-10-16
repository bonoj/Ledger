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

**Current position: Turn 1 completed; Turn 2 next.** Scientific reconnaissance established candidate chemical signatures, radiation depth caveats, and an inverse-problem target. See findings below.

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

**Next action:** **Turn 2 — hypothesis matrix**: competing origin/alteration scenarios, predicted signatures, confounders, and falsifying measurements.


## Turn 1 result — scientific reconnaissance (2026-10-16)

**Result:** A depth-resolved chemical/spectral inverse problem is better motivated than a generic homogeneous ice column. Published Europa observations admit multiple chemical explanations; independent depth information may help distinguish histories, but only under testable assumptions.

### Source-to-model evidence map

| Published observation or study | Evidence / scope | Implication for Ice Column v0 | Guardrail |
| --- | --- | --- | --- |
| [Brown & Hand, *AJ* (2013)](https://doi.org/10.1088/0004-6256/145/4/110) | Galileo NIMS spectra have competing hydrated sulfate / sulfuric acid interpretations; irradiation can produce sulfuric acid hydrates | Include chemically distinct endmembers that can be spectrally degenerate | Do not label a NIMS fit a definitive species identification |
| [Selection of chemical species using Galileo/NIMS, *Icarus* (2023)](https://www.sciencedirect.com/science/article/abs/pii/S0019103522004717) | Many 4–5 component mixtures fit selected NIMS spectra; calibration and SNR strongly affect uniqueness | Implement noisy mixture spectra and explicit non-identifiability | Study is for selected lineament, not all Europa |
| [Trumbo & Brown, *Science* (2023)](https://doi.org/10.1126/science.adg4155) | JWST CO₂ enriched in Tara Regio; evidence favors internal carbon source | Include internally sourced carbon scenario and secondary radiation transformation | CO₂ formation pathway and direct ocean provenance not uniquely established |
| [Nordheim, Hand & Paranicas, *Nature Astronomy* (2018)](https://www.nature.com/articles/s41550-018-0499-8) | Spatially variable radiation processing, ~1 cm at some mid/high latitudes versus 10–20 cm in modeled radiation lenses for selected biosignatures | Depth-dependent alteration, site/scenario variable | These are not universal electron shielding depths or instrument survival depths |
| [Pavlov et al. experiment, NASA report (2024)](https://science.nasa.gov/science-research/planetary-science/astrobiology/nasa-life-signs-could-survive-near-surfaces-of-enceladus-and-europa/) | Irradiation experiments suggest ~20 cm sampling depth for certain amino acids at high-latitude trailing hemisphere under stated assumptions | Separate species-specific destruction/retention curves from generic dose | Do not merge with 2018 radiation model as one 'safe depth' |
| [Europa Clipper composition review, *Space Science Reviews* (2024)](https://link.springer.com/article/10.1007/s11214-024-01069-y) | Summarizes reported non-ice compounds and unresolved compositional interpretations | Candidate species catalog and instrument/reference search | Review synthesizes multiple evidence strengths; track each individually |
| [Electron irradiation of methanol ice, *Icarus* (2026)](https://doi.org/10.1016/j.icarus.2026.117136) | Laboratory study of irradiation-driven organic chemical diversity relevant to Europa | Explore product generation as well as destruction | Do not infer Europan abundance from analog experiments |

### Turn 1 scientific conclusions

1. **Mixture degeneracy is a primary phenomenon, not a nuisance:** different compositions can produce similar near-IR spectra. The first instrument must expose this.
2. **Depth profiles may help distinguish history:** radiation alteration is spatially and depth dependent; a surface-only measurement discards information.
3. **Origin and transformation must be separate latent variables:** a species may originate internally and be chemically transformed at the surface; origin of carbon is not necessarily the formation location of detected CO₂.
4. **Radiation preservation is species- and site-dependent:** a single generic 'safe depth' is not scientifically defensible.
5. **Science-first architecture remains justified:** no landing design choice is required to test these hypotheses.

### Data requirements for Turns 2–3

- Representative endmember spectra and optical constants at relevant temperatures/phases (water ice, sulfuric acid hydrates, hydrated sulfates, NaCl-related material, CO₂ and selected organics).
- Published radiation dose-versus-depth and spatial scenarios with stated particle spectra and chemistry-specific response.
- Documented spectral noise/resolution/calibration assumptions and laboratory mixture spectra.
- Sources and licensing for datasets before incorporating them into executable apparatus.

**Model parameter policy:** no invented concentrations, dose rates, decay constants, or detection thresholds. Use explicitly synthetic dimensionless parameters until sourced.

### Turn 1 acceptance and limitations

**Completed:** primary research papers/reviews identified; distinct observed signatures, inference, and ambiguities recorded; first falsifiable inverse-problem target established.

**Not completed:** numerical datasets retrieved, independent raw-spectra reproduction, site-specific quantitative dose curves, or simulation. Those are planned for later turns, not claimed here.

**Turn 2 gate:** construct a hypothesis-versus-observable matrix and choose the smallest pair of deliberately confusable scenarios for a blind experiment.
