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

**Current position: Turn 8 blind-study engine committed; numerical results and test-file persistence pending.**

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

**Next action:** Finish Turn 8 validation: persist tests, run held-out experiment and quantify whether depth adds discriminating information, then proceed to Turn 9 feasibility.


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


## Turn 2 result — hypothesis discrimination matrix (2026-10-16)

**Scientific target:** distinguish material **origin** from subsequent **chemical alteration** and **physical redistribution**. These are separate latent variables. Do not mistake a detected compound for proof of transport from Europa's ocean.

### Four competing explanations

| Hypothesis | Plausible predicted signature | Confounder / mimic | Potential discriminating observation | What would weaken it |
| --- | --- | --- | --- | --- |
| **H1 Radiation processing** of pre-existing material | Surface-enriched products, depth-dependent parent/product ratios | Grain size, sputtering, burial, changing dose history | Depth profile of paired parent/product bands, correlated with irradiation model | Profiles incompatible with any plausible processing scenario under calibrated uncertainties |
| **H2 Endogenic delivery** from depth | Fracture-associated material; buried concentrations; compositional gradients | Impact gardening, external infall, surface redistribution | Depth + fracture geometry + multiple tracers and spatial context | No coherent internal-transport signature in a model where one should remain detectable |
| **H3 Exogenic delivery** to surface | Surface-enhanced material and associated externally sourced tracers | Surface alteration of internally supplied material | Spatial distribution, compositional covariation, shallow/deep profiles | Abundance/depth pattern inconsistent with plausible deposition/mixing budgets |
| **H4 Physical redistribution** | Smoothed or displaced layers, structural mixing and compositional discontinuities | Original heterogeneous deposition; coring artifacts | Stratigraphic imaging + compositional depth correlations + adjacent replicate cores | Structure and profiles incompatible with candidate transport/mixing mechanism |

**Falsification caution:** “weakens” is conditional on the stated model; none of these broad families can be categorically falsified by a single short core without stronger assumptions.

### Minimal blind pair

**Scenario A: internal supply + irradiation.** Start with a subsurface source profile, upward/fracture-mediated transport, then depth-dependent conversion of a generic parent species P to product Q.

**Scenario B: external supply + burial/mixing.** Start with surface deposition of a different source mixture, then redistribute it downward and apply irradiation.

**Design constraint:** tune **synthetic, dimensionless** profiles so both scenarios produce an indistinguishable *surface-only* two-band measurement under declared noise. Keep different deeper P/Q profiles and/or fracture association, but allow overlap after noise. Avoid implying P and Q correspond to identified Europan chemicals before Turn 3 reference work.

### Observations in order of scientific leverage

1. **Surface-only two-band spectral measurement**: intentionally insufficient baseline.
2. **Depth-resolved P/Q measurement** at selected intervals: candidate discriminator, with finite recovery and mixing.
3. **Core imaging / stratigraphy**: structural evidence for transport or burial, vulnerable to drilling damage.
4. **Complementary assay**: independent chemical channel for P and Q or co-tracer, with contamination and melt alteration.
5. **Replicate core or nearby surface context**: tests local heterogeneity; may be unavailable to stationary mission.

### Blind-test protocol and acceptance

- Generate scenarios from deterministic seeds and hold out their true origin labels.
- Match their surface-only predicted signals within a specified *synthetic* noise envelope.
- Investigator chooses additional measurements under a fixed sample/energy budget.
- Record posterior or ranked hypotheses, predicted observations, actual simulated observations, and confidence calibration.
- Compare outcomes across seeds, noise, sample disturbance, and model mismatch.
- **Success:** depth or complementary measurement improves discrimination on held-out cases, while ambiguous cases remain explicitly ambiguous.
- **Failure modes:** algorithm cheats by reading ground truth; confident wrong origin assignments; trivial separation at surface; unrealistically noiseless assays; contamination omitted.

### Turn 2 findings

**Proposed, not demonstrated:** the pair is logically suitable for a controlled inverse-problem experiment. The actual degree of spectral degeneracy and identifiability is **unmeasured** until the forward model, noise model, and synthetic runs exist.

**Open question:** which real chemical endmembers, instrument bands, and temperature-specific laboratory spectra can support P/Q without making the exercise scientifically misleading? This is Turn 3's gate.

### 2026-10-16 — Work log: Turn 2

Specified four competing hypotheses, predicted signatures, confounders, conditional falsifiers, a blind two-history test, and an observation sequence. No simulation executed or numerical scientific parameter adopted.


## Turn 3 result — laboratory spectra and dataset triage (2026-10-16)

**Key decision:** Start with a **visible-reflectance** radiation-chemistry channel anchored in irradiated NaCl–water ice experiments. IR absorbance is a separate channel; Raman is deferred pending verified matching reference files. The Turn 2 generic P/Q inverse problem remains a conceptual test and must not be falsely represented as a measured Europa chemical pair.

| Source | Contents / conditions | Machine access | Rights / caveats | Role |
| --- | --- | --- | --- | --- |
| [Cerubini et al. 2022 experimental dataset, Zenodo DOI 10.5281/zenodo.7536720](https://zenodo.org/records/7536720) | Visible reflectance of NaCl–H2O ice mixtures irradiated with 1 and 5 keV electrons; experimental composition variants | ZIP ~283.2 kB, ASCII comma-separated wavelength (µm) + reflectance factor columns; filenames encode composition | CC BY 4.0, attribute dataset and paper; lab electron spectra, flux and sample preparation are not Europa's complete irradiation environment | **First ingest candidate**, before/after irradiation and mixture comparisons |
| [Cerubini et al., *Icarus* 379, 114977 (2022)](https://doi.org/10.1016/j.icarus.2022.114977) | Methodology, color-center formation, grain/slab preparation and electron exposure | Open-access paper | Preparation affects observed bands | Physical interpretation and uncertainty |
| [Leiden Ice Database, LIDA](https://icedb.strw.leidenuniv.nl/spectrum_data) | IR absorbance of cryogenic pure/mixed astrophysical ice analogues; 176 catalogue entries and 1164 spectra on inspected page | Per-temperature ASCII downloads and ZIP collections | Site asks users to cite original measurement papers; **license for bulk reuse not verified**, so link/cite before copying into repository | IR forward model after visible prototype |
| [LIDA pure H2O](https://icedb.strw.leidenuniv.nl/data/14) | 15, 45, 75, 105, 135 K; ~1.92 cm^-1 resolution | TXT/TXT.GZ | 3000-monolayer lab film, not a thick Europan granular surface | Temperature-sensitive IR ice baseline |
| [LIDA CO2:H2O (1:1)](https://icedb.strw.leidenuniv.nl/data/27) | 10–187 K across many warm-up steps; ~1.84 cm^-1 resolution | TXT/TXT.GZ | Film absorbance; do not conflate with surface reflectance | Mixture/temperature spectral study |
| [USGS Spectral Library v7, DOI 10.5066/F7RR1WDJ](https://www.usgs.gov/data/usgs-spectral-library-version-7-data) | 0.2–200 µm, mineral/compound and constructed/computed mixture references | Published spectral files including text representations | CC0 1.0; many measurements not cryogenic | Broader endmember and inverse-problem methods |
| [Poston et al. 2017, JGR Planets](https://doi.org/10.1002/2017JE005429) | Irradiated NaCl spectral behavior in Europa-like conditions | Supplementary XLSX dataset and CSV figure data listed by publisher | Dataset reuse terms not verified | Independent experimental cross-check |
| [2025/26 planetary science study, DOI 10.3847/PSJ/ae182c](https://doi.org/10.3847/PSJ/ae182c) | Visible/SWIR and often mid-IR reflectance of 14 irradiated cryogenic salt/ice materials | Figure-level data indicated in publication | Verify downloadable files and reuse terms | Expanded salt/hydrate library |
| [PDS Geosciences Spectral Library / RELAB](https://speclib.rsl.wustl.edu/) | UV–far-IR reference measurements | Searchable database | Per-collection metadata and access require checking | Later validation and context |

### Measurement discipline

- **Visible reflectance factor** vs **IR absorbance** vs **Raman intensity** are not interchangeable ordinates. Do not blend arrays without a physical forward model and common instrument definition.
- Store wavelength/wavenumber units, resolution, temperature, phase, geometry, sample thickness/grain size, composition, irradiation conditions, calibration and original attribution per spectrum.
- Separate *laboratory exposure conditions* from inferred *Europa dose-depth histories*. No mapping of electron-beam duration to geological exposure without an explicit, sourced radiation transport model.
- Lab spectral variation alone does **not** establish whether a material was endogenic or exogenic. The blind history problem also needs stratigraphy, spatial/depth priors, or independent tracers.

### Turn 3 gate and limitations

**Completed:** specific real experimental datasets located; file formats, measured channel, some temperature/resolution metadata and one explicit reusable license verified from catalogue/publisher descriptions; first dataset and channel selected.

**Not completed:** bytes ingested or parsed, file checksums, instrument-convolution tests, dataset-specific error estimates, Raman reference validation, or LIDA bulk-license verification. These must be checked before numerical claims or bundling files.

**Turn 4:** specify an apparatus with a visible-reflectance NaCl radiation-processing mode plus a generic provenance-preserving layered ice state. Keep geological-history discrimination as a harder, separately validated objective.


## Turn 4 result — Ice Column v0 executable specification (2026-10-16)

**Scope:** an instrumented, deterministic 1D depth substrate with optional categorical fracture/transport annotations; **not** a 3D planetary terrain model or spacecraft. No claims that synthetic depths or concentrations represent measured Europan stratigraphy.

### Model domain and units

- Depth coordinate **z in meters**, positive downward from the current surface; default extent **0–1 m** as a configurable sandbox.
- Discretization **N=100 cells, Δz=0.01 m** as a *computational choice*, not a physically justified sampling resolution. Cell center `z=(i+0.5)Δz`.
- Each cell: water-ice fraction, NaCl-equivalent salt fraction, generic parent P and alteration product Q fractions (all dimensionless, nonnegative, sum ≤1 with explicitly tracked remainder); temperature K; texture enum `compact|granular|mixed`; fracture flag; relative radiation exposure index; provenance mixture `internal|external|initial`; physical mixing metadata.
- **Crucial separation:** `source_provenance` is latent history, not an observable chemical label. Identical compounds can arise from different sources.
- All unsourced chemistry kinetics and exposure-depth laws remain labeled **synthetic demonstration parameters**, not physical dose rates or inferred geological ages.

### Deterministic state and interface contract

```text
IceColumnConfig {
  schema: "europa-ice-column/v0"
  seed: uint32
  depthM: 1.0
  cells: 100
  scenario: "A_internal_irradiated" | "B_external_mixed" | "control"
  syntheticParameters: { ... dimensionless or explicit SI units ... }
}
Cell {
  zTopM, zBottomM, temperatureK, texture, fracture
  composition: { waterIce, naclEquivalent, P, Q, remainder }
  origin: { initial, internal, external }   // sums to 1; hidden
  radiationIndex                           // dimensionless synthetic
}
InstrumentObservation {
  channel, sampleId, depthIntervalM, wavelengthUnit
  x[], y[], uncertainty[], measurementMetadata, calibrationId
  groundTruthVisible: false
}
RunRecord {
  config, modelVersion, seed, actions[], observations[], checks[]
  groundTruthDigest, provenance, datasetAttribution[]
}
```

- RNG: documented 32-bit integer algorithm with deterministic seed; avoid platform-dependent unseeded randomness. Replay of same config/actions must yield byte-identical serialized observations or numerically identical arrays under explicitly documented tolerances.
- State mutations occur only through recorded actions. Observation code cannot read source labels or scenario names; public state and hidden ground truth are separate interfaces.
- Depth intervals are half-open `[zTop,zBottom)`; mass/volume fractions bounded, finite and accounted for. If physical transport redistributes material, use conservative fluxes or explicitly book lost material.
- Observation uncertainty, instrument spectral resolution, geometry, temperature and preparation must be part of provenance, not silently baked into a visualization.

### First two scenarios

**A — internal source, surface alteration:** a synthetic subsurface-enriched salt/P profile connected to an annotated fracture zone; near-surface irradiation transforms some P to Q.  
**B — external deposition, downward redistribution:** surface-supplied salt/P profile mixed downward; near-surface irradiation transforms P to Q.

**Pairing requirement:** surface-visible spectral outputs should overlap within a declared noise tolerance, while selected depth or independent tracer observations retain *possible* discriminating information. The pairing is an optimization/selection problem; **not yet demonstrated**.

### Measurements and physics boundaries

1. **Synthetic mode:** normalized two-band P/Q observable with declared noise, allowing immediate inverse-problem testing; visibly label `synthetic`.
2. **Measured-library mode:** visible reflectance factor from **Cerubini et al.** NaCl-water ice spectra, preserving wavelength in µm, composition/texture, beam irradiation and measurement geometry. **Do not enable** until archive bytes, column structure and provenance are actually validated.
3. Spectral library indicates compact versus granular ice and irradiation produce different color-center signatures, including reported bands near **460, 580 and 720 nm**. [Cerubini et al. 2022 preprint](https://arxiv.org/abs/2208.01314), [dataset](https://zenodo.org/records/7536720).
4. **Coring action:** request depth interval and sample volume; return depth-tagged sample with recovery fraction, mixed-material provenance *hidden from investigator*, and explicit disturbance/contamination accounting. First implementation may leave this as a stub until Turn 6.
5. **IR/Raman:** separate channels with independent reference datasets and calibration. Do not substitute visible reflectance arrays.

### Runtime decomposition

- **Pure core:** deterministic generator, state transitions, conservation checks, replay and serialization. No renderer dependency.
- **Measurement adapter:** receives observable cell fields, not hidden origin labels; can produce noisy synthetic band measurements. Dataset-backed adapter follows only after ingestion validation.
- **Investigator interface:** depth selection, sampling, visible spectra, uncertainty and notebook; no access to scenario ID.
- **Verifier:** privileged access to hidden truth only after blind investigation; compares inferred histories and confidence with source labels.
- **View:** mobile-first single-page column and instrument panel. UI is a consumer of model state, never authoritative.

### Acceptance checks for Turn 5

- Same seed/config/actions → deterministic serialized state.
- Different seeds → documented controlled variation; no NaN or negative composition.
- Fractions conserved under mixing, with any physical losses explicitly booked.
- Hidden origin labels inaccessible through investigator measurement API.
- Each sample has unique ID, exact depth interval and action provenance.
- Zero external data required for synthetic mode.
- Source-backed spectral mode must fail clearly if measured library not validated; never silently substitute synthetic spectra.

### Research data boundary

The Zenodo record confirms CSV-like ASCII with first column wavelength in µm and remaining reflectance-factor columns; [record](https://zenodo.org/records/7536720). Additional [SSHADE experimental metadata](https://www.sshade.eu/data/SPECTRUM_RC_20200622_004) describes example compact slabs at 90 ±15 K, 20 ±2 mm thickness, 410–890 nm, and 1 keV electron irradiation. These are **lab-sample conditions**, not default Europan column properties.

**Turn 4 acceptance:** specification, testable interfaces, hidden-truth boundary, scientific limitations and first implementation gate completed. **No code executed or deployed; dataset archive not downloaded** (runtime network DNS unavailable at specification time).

### 2026-10-16 — Work log: Turn 4

Selected a 1D depth-first executable substrate, separated physics/state from rendering and measurements, specified deterministic replay and conservation checks, and blocked unverified laboratory-spectrum ingestion. Turn 5 should implement the pure core before adding interface polish.


## Turn 5 result — instantiated deterministic substrate (2026-10-16)

**Committed source:** [experiments/europa-01/ice-column.mjs](../experiments/europa-01/ice-column.mjs)  
**Committed tests:** [experiments/europa-01/ice-column.test.mjs](../experiments/europa-01/ice-column.test.mjs)

A Node-compatible ES module now implements seeded generation of three **synthetic** 1-meter, 100-cell ice-column scenarios; depth-tagged sample averaging; a two-band toy measurement; explicit hidden-origin data; an investigator-facing projection; conservation checks; and a hard error for unvalidated measured-library spectra.

**Execution evidence:** A local development prototype passed **1,055 Node assertion checks** (three scenarios × 50 seeds × seven checks, plus five edge checks), including reproducibility, composition/origin normalization, absence of origin and scenario strings in the investigator view, and sample/measurement determinism. The source and tests were then transcribed into the GitHub repository in a slightly streamlined variant. **The exact committed variant has not yet been executed in the local runner**, so the 1,055-check result must not be represented as a verified CI result for the GitHub blobs. Next verification should execute `node experiments/europa-01/ice-column.test.mjs` from a checked-out repo or suitable runner.

**Scope boundary:** These synthetic profiles, radiation indices, fractions and noise levels are illustrative, not calibrated to Europa. The sample function currently reports ideal depth-weighted composition; recovery losses, disturbance, blanks, contamination, and a strict private-state boundary still need Turn 6 work. The returned internal world object contains ground truth and is therefore a privileged simulator API, **not** a secure isolation boundary. The public investigator projection omits origin labels and scenario ID.

**Not yet delivered:** browser/mobile UI, live deployment, measured spectra, physical dose model, validated inverse-problem discrimination.

**Next:** Turn 6 implements honest sample handling and strengthens the privileged/public API boundary, followed by a run of the exact committed regression suite.


## Turn 6 result — synthetic coring and handling (2026-10-16)

**Persisted:** `experiments/europa-01/ice-column.mjs` and `ice-column.test.mjs`. Existing source extended rather than rebuilt.

**Sampling model:** optional recoveryFraction, disturbanceFraction, contaminationFraction, and normalized contaminant composition. Disturbance blends the requested depth interval with a slightly expanded neighborhood; contamination blends native sample chemistry with specified foreign composition; recovery separately accounts for lost quantity. This is a **synthetic**, explicitly non-calibrated sampling approximation.

**Ledger:** requested depth interval, sample ID, ideal/recovered/lost mass-equivalent thickness, and contaminant contribution; deterministic sample actions. Inputs validated for finite bounded fractions and valid composition.

**Verification:** the local Turn 6 files at `/mnt/data/europa01/` passed **1,511 Node assertions**. GitHub writes were recovered using smaller sequential Contents updates. The remote implementation and tests were reconstructed from the same algorithm; a read-back and exact remote execution should be recorded separately rather than treating the local pass as GitHub CI.

**Limitations:** recovery fraction does not currently change the reported mean composition; loss is assumed composition-neutral. The model does not represent spatially selective loss, sample-to-sample carryover, drill heating, reaction kinetics, real contamination chemistry or instrument blanks. The simulator world object still exposes privileged ground truth to trusted callers; investigatorView hides scenario and origin, but this is not a security boundary.

**Turn 7:** implement measurement noise and calibrated spectral channel interfaces, then explicitly test whether sampling disturbance can destroy or imitate discriminating depth gradients.


## Turn 7 result — virtual measurements (2026-10-16)

**Implemented:** [synthetic visible spectrometer](../experiments/europa-01/virtual-measurements.mjs) and [regression suite](../experiments/europa-01/virtual-measurements.test.mjs). This is an **illustrative forward model**, not a laboratory-calibrated optical simulator.

- Wavelength range **400–900 nm**, default 81 points, wavelength in nm.
- Three Gaussian absorption-like features nominally centered at **460, 580, 720 nm**; these landmarks are motivated by the salt/irradiated-ice reference discussion, **but band strengths, widths, continuum and chemical mappings are invented synthetic parameters**.
- Signals depend on NaCl-equivalent, P and Q sample composition. A nominal resolution broadens synthetic bands in quadrature.
- Noise is independent, zero-mean uniform noise with declared standard deviation `noiseSigma`; seeded by instrument seed and sample ID. Return noisy spectrum, noiseless ideal, per-channel uncertainty, metadata and `physicalCalibration:false`.
- `compareSpectra` returns an uncertainty-weighted mean squared difference (named reducedChiSquare in code for convenience, **not a rigorous fitted reduced χ²** because no fitted degrees of freedom or covariance). It must not be interpreted as a calibrated origin likelihood.
- `laboratorySpectrum()` explicitly rejects use until actual measured archives and calibration are ingested and validated.
- Tests cover 150 scenario/seed cases, reproducibility, dimensions, metadata, noise-seed sensitivity, zero-noise identity, invalid settings, and the blocked laboratory path. **1,056 assertions are specified in source** (150 × 7 + 6), but no execution success is claimed.

**Execution boundary:** GitHub writes and read-back are available, but the local runner's attempt to retrieve the exact remote files failed because `raw.githubusercontent.com` could not resolve. This is a verification transport failure, not evidence of a failed model or successful tests. Run `node experiments/europa-01/ice-column.test.mjs` and `node experiments/europa-01/virtual-measurements.test.mjs` on the exact committed bytes when possible.

**Important unresolved science:** the paired Turn 2 histories have not yet been tuned to be spectrally confusable at the surface; no laboratory endmembers have been numerically ingested; model mismatch and correlations are uncharacterized. Therefore no inference about Europa's ocean exchange follows from this simulation.

**Turn 8 gate:** design blind surface-only vs depth-resolved inference and explicitly report non-identifiable cases. Keep hidden labels privileged, test sensitivity to Turn 6 disturbance and contamination, and do not treat synthetic bands as measured chemistry.


## Turn 8 — blind investigation (2026-10-16; implementation committed, evaluation pending)

[Blind-study engine](../experiments/europa-01/blind-study.mjs) creates independent synthetic columns from labeled A/B histories for training, then uses held-out seeds for classification. Investigator features are extracted from the **synthetic visible-reflectance** forward model at nominal 460, 580, 720 nm. Classifier uses Euclidean nearest class centroid, trained on known synthetic classes; test truth labels are used only for scoring. The public trial result reports aggregate accuracy and low-margin counts, not hidden origin fields.

**Planned comparisons:** (1) surface 0–4 cm, (2) surface plus 58–68 cm depth, (3) the same depth pair with full synthetic disturbance and 15% water-ice contamination. These handling choices are **stress-test settings, not Europan estimates**.

**Scientific caveats:** The A/B generators have **not been tuned to yield overlapping surface spectra** as required by Turn 2; thus surface classification might be trivially successful, and even improved depth accuracy would not yet demonstrate resolution of a truly degenerate inverse problem. Features and noise are synthetic, class templates are trained from the same model family, and accuracy cannot be generalized to Europa.

**Status:** engine committed. Test-file creation encountered an intermittent GitHub tool rejection, and **no blind-study accuracy has been executed or verified**. Do not mark Turn 8 complete until regression tests, actual metrics, and an ambiguity-aware interpretation are preserved.


### Turn 8 follow-up — imposed surface equivalence and local results (2026-10-16)

A first local reproduction of the unmodified A/B experiment yielded **100/100 correct** for surface-only, surface+depth, and degraded depth. This exposed an **overly easy inverse problem**, not scientific success.

The committed blind-study engine now **imposes exact surface observational equivalence**: for the surface interval, both labels receive the same synthetic A-like composition at the same seed, while deeper intervals retain their respective A/B compositions. This is a **controlled counterfactual test**, **not** a physical model explaining why actual Europa surface histories would coincide.

Local reproduction (50 training seeds/class; 50 held-out seeds/class, 100 trials):
- Surface-only: **100/100 abstentions**, 0/100 classified correctly; accuracy=0 because abstentions count as not correct, **not because 100 predictions were wrong**.
- Surface + depth: **100/100 correct**, 0 low-margin cases.
- Surface + depth with full one-cell-scale synthetic disturbance and 15% water-ice contamination: **100/100 correct**, 1 low-margin case.

**Interpretation:** In this deliberately constructed synthetic pair, subsurface composition contains discriminating information absent from the matched surface. This is an existence demonstration within a toy generator, **not** a calibrated result about Europa or a demonstrated optimal sampling depth.

**Verification boundary:** these numbers were produced by a local reconstruction of the committed algorithms, not an execution of exact remote GitHub bytes. The blind-study test file is committed. Next: run exact remote tests; vary depths, noise, contamination, and the matching mechanism; add genuinely non-identifiable histories. Only then proceed to feasibility Turn 9.


## Turn 8→9 transition — sensitivity envelope (2026-10-16)

**Committed code:** [blind-study.mjs](../experiments/europa-01/blind-study.mjs) now accepts an independently selected depth interval and synthetic instrument noise; [sensitivity.mjs](../experiments/europa-01/sensitivity.mjs) enumerates a 5 × 3 × 5 grid (75 combinations) of depth window, spectral noise and water-ice contamination; [sensitivity.test.mjs](../experiments/europa-01/sensitivity.test.mjs) checks dimensions, determinism and bounds.

Depth intervals: 0.05–0.15, 0.25–0.35, 0.45–0.55, 0.58–0.68, 0.75–0.85 m in a 1 m toy column. Nominal spectral noise σ: 0.002, 0.01, 0.03 reflectance units. Contamination fractions: 0, 0.15, 0.5, 0.9, 1.0. Disturbance fraction fixed at 1 (one cell-width expansion in the present sampler). Each grid point trains on 30 seeds/class and tests on 30 unseen seeds/class.

**Analytic limiting case:** at contaminationFraction=1, the native composition is completely replaced with the specified water-ice contaminant; surface observations are imposed equivalent and noise draws are matched by seed. Both scenario classes therefore produce the same synthetic observation at each held-out seed. The centroid classifier should abstain on ties, and any claimed recovery of native provenance from those measurements would signal leakage or an implementation defect. This is a **mathematical property of this toy model**, not a measured Europan threshold.

**Verification boundary:** code committed and read-back pending; full 75-point grid **has not yet been executed**. Do not report a depth/noise threshold without actual sweep outputs. The next science step is to run the sweep, inspect nonmonotonic behavior and ambiguity, then separate conditional detection requirements from Turn 9 engineering feasibility. No spacecraft hardware has been designed.


### Turn 9 local sweep (2026-10-16)

A locally reconstructed Node experiment evaluated 75 settings, 60 trials each (4,500 trial evaluations). 2,417 were classified correctly; 3,430 had low classification margins. The exact GitHub bytes were not executed. At 0.58–0.68 m, noise 0.002, correct/60 by contamination 0, 0.15, 0.5, 0.9, 1: 60, 60, 57, 40, 0. The zero at complete contamination represents 60 abstentions. These synthetic figures are not calibrated Europa predictions.


### Turn 9 audit — noise pairing (2026-10-16)

Blind-study now supports `noiseMode: 'paired' | 'independent'`. Paired mode preserves historical results; independent mode gives A and B observations distinct deterministic measurement seeds while retaining reproducibility. A new `noise-audit.test.mjs` checks replay, bounds and invalid modes. **No independently-noised numerical classification results have been executed or verified yet.** The old 100% contamination abstention conclusion holds for paired noise only; with independent noise, equal chemistry plus distinct noise draws can generate arbitrary classifier guesses, which must not be misrepresented as provenance information. The next test must use accuracy, abstentions, and false-confidence calibration against an explicit no-information null.


### Turn 9 null-information audit (2026-10-16)

**Corrected bug:** independent-noise mode previously reached the training observations but not held-out test observations. The held-out call now forwards `noiseMode` (commit `1d06a849`). Earlier independent-noise claims must not be trusted unless recomputed after this fix. New `null-audit.mjs` compares paired, independent, and zero-noise observations of exactly matched surface chemistry; `null-audit.test.mjs` checks deterministic replay, no-information paired abstention, and bounds. **These new tests have not yet run on exact committed bytes**; GitHub cloning from the execution container failed due to DNS resolution. Distinct noise alone is not provenance information. Next: execute remote parity tests, report the null distribution and confidence calibration, and then assess physical feasibility with explicit uncalibrated assumptions.


### Turn 9 methodological correction (2026-10-16)

Independent-noise seeds previously encoded the scenario label directly, potentially leaking a nonchemical classification cue. Noise-replicate assignment now counterbalances between classes by seed parity. The blind-study classifier also accepts `abstainMargin` (default 0, backward-compatible), reports `abstained` counts, and the null audit compares forced guessing with 0.1-margin abstention. **No accuracy, selective-risk, or false-confidence numbers have been executed for these corrected revisions.** Counterbalancing is not proof of no leakage; require repeated independent realizations, class-label permutation controls, and execution of exact committed files before interpreting discrimination. Synthetic results remain noncalibrated.


### Turn 9 null audit — executed local reconstruction (2026-10-16)

Ran a local Node reconstruction of current committed algorithms, 100 training seeds per class and 500 held-out seeds per class (1,000 trials per condition). The null chemistry is identical at the surface for both histories. **Paired noise:** 0 correct, 1,000 abstained. **Independent noise, forced classification:** 508 correct, 0 abstained, 940 low-margin. **Independent noise, abstainMargin=0.1:** 32 correct, 940 abstained; 60 classified, 32/60 correct (53.3%). **Zero noise:** 0 correct, 1,000 abstained. Local regression null-audit test also passed (40 held-out trials, 20 independent-noise correct). These numbers are from a local reconstruction, not verified byte-for-byte remote execution. Chance-level forced accuracy and near-chance accepted accuracy under the null provide no provenance evidence. Caveats: one deterministic seed range, paired A/B seed design, no permutation replicates or calibrated confidence; avoid overclaiming 94% abstention as an optimized decision threshold. Next: repeat across independently generated seed blocks and explicit permutation controls, then feasibility only under validated measurement assumptions.


### Turn 9 repeated-null robustness machinery (2026-10-16)

`blind-study.mjs` now accepts a validated `seedOffset` for disjoint deterministic training/test blocks. `null-robustness.mjs` runs 10 default blocks with 30 training seeds/class and 100 held-out seeds/class per block (2,000 held-out decisions), comparing independent-noise forced classification with 0.1-margin selective abstention. Reports forced accuracy, selective coverage, selective accuracy and per-block counts. `null-robustness.test.mjs` checks replay and bounds. **No numerical robustness output has yet been executed or verified**. These blocks are disjoint synthetic PRNG seeds, not physically independent field trials. A true permutation-control experiment is still outstanding; no engineering threshold follows.


### Turn 9 repeated-null results — local execution (2026-10-16)

Executed local reconstruction of `null-robustness.mjs`, 10 disjoint blocks, 30 training seeds/class and 100 held-out seeds/class per block. Across **2,000 held-out synthetic surface-only classifications with identical chemistry**, forced-choice correct = **1,009/2,000 (50.45%)**. With abstainMargin=0.1, accepted **1,106/2,000 (55.3% coverage)** and correct **567/1,106 (51.27% selective accuracy)**. Per-block forced correct out of 200: 92,101,106,90,95,106,98,113,118,90. Per-block accepted: 109,130,40,148,11,151,145,104,122,146. Thus selective coverage ranges 5.5% to 75.5%, indicating margin-threshold instability. Local three-block deterministic regression passed. **These are local reconstruction results, not byte-identical GitHub execution.** No physical provenance discrimination exists in the null by construction; results are consistent with chance. A class-label permutation control remains outstanding, and no confidence calibration or hardware requirement is established.


### Turn 9 alternating-label negative control (2026-10-16)

Added `scorePermutation:'alternating'` to `runBlindStudy`, which flips scoring labels for odd absolute seeds **after** prediction, leaving measurements and classifier training unchanged. Added permuted accuracy to `nullRobustness` and regression coverage. Executed local reconstruction of 10-block/2,000-decision experiment: original forced accuracy **1009/2000 = 50.45%**; alternating-permuted accuracy **979/2000 = 48.95%**. Per-block permuted correct out of 200: 92,101,94,120,99,90,90,103,94,96. Selective coverage remained 55.3%, selective accuracy 51.27%. This is a **single deterministic negative-control permutation**, not a permutation distribution, statistical significance test, or physically independent sample. Exact remote bytes were not executed. The null remains non-discriminating; next scientific step is an ensemble of preregistered permutations and an explicit distinction between observational equivalence and geologic equivalence.


---

## Reorientation

Our central question remains:

*What can a depth-resolved sample of Europa's ice reveal about its formation, alteration, and possible exchange with the subsurface ocean—and how would we know?*

We have established three useful things:

1. Surface chemistry can be observationally ambiguous, at least in our deliberately constructed synthetic example.
2. Depth-resolved observations can distinguish the particular histories we constructed, but that success is not yet a geological result.
3. Sampling and measurement processes can destroy or distort the information we're trying to recover.

The most important unresolved question is no longer whether our classifier can recognize two toy worlds.

**It's what physical evidence would actually distinguish plausible histories of Europa's ice—and what kind of sampling system could preserve that evidence.**

## Proposed roadmap · Next 8 turns

I'd retire the original ten-turn schedule rather than keep stretching Turn 9. Here's the next expedition, with a tangible deliverable every turn.

| Turn | Investigation | Deliverable |
|---|---|---|
| **1** | Close the methodological audit | Execute exact source and regression tests; reconcile any discrepancies. No more open-ended classifier refinement. |
| **2** | Europa's physical environment | Evidence-backed constraints: gravity, temperature, vacuum, radiation, surface mechanics, and uncertain ice-shell structure. |
| **3** | Plausible ice histories | Build physically motivated stratigraphic scenarios: irradiation, impact gardening, fracture emplacement, freezing, and exchange. |
| **4** | Diagnostic evidence | Determine which depth profiles, textures, chemical species, and alteration products could discriminate those histories. Identify irreducible ambiguities. |
| **5** | Sample integrity | Quantify how heating, mixing, contamination, and recovery loss erase diagnostic information. |
| **6** | Access mechanisms | Compare drilling, coring, thermal penetration, ballistic penetrators, and other plausible approaches. Explicit mass, energy, and contamination tradeoffs. |
| **7** | Mission architecture | Compare payload delivery and sampling concepts, including propulsive landing versus impact-tolerant approaches. Keep descent and subsurface access separate. |
| **8** | Scientific synthesis | Write a defensible sampling strategy, uncertainty register, and ranked experiments needed before hardware design. |

The organizing principle is **science → observable evidence → sample requirements → engineering**.

Not engineering first, followed by inventing a scientific justification.

## What I'd change about our workflow

Each 🏹 should advance the investigation substantially. Research, calculation, implementation, tests, and persistence can happen in the same turn. We shouldn't spend four turns adding individual switches to a synthetic classifier.

I'll also keep the canonical notebook readable: established findings up front, current uncertainties and next action immediately visible, detailed experimental history in its existing code and commit history.

**My recommendation:** eight turns, with the first one closing our existing work and the remaining seven returning to Europa itself.

We began by asking what the ice remembers. It's time to discover what we'd have to do to hear it. 🐉


## Roadmap amendment — Europa as an executable experiment (2026-10-16)

**Status: active amendment to the verbatim eight-turn plan above.** Preserve that plan as the original decision record. This section updates its implementation and deliverables without rewriting history.

### Why the approach changed

Three visual references clarified the missing bridge between science and the existing Hermeticon world. (1) The actual Abyss/Shell screenshot shows a live, performant, interactive world with deformable terrain and material interactions; it is the implementation baseline, **not** proof of a Europa model. (2) The photoreal cross-section depicts a scientific aspiration—layered ice, inclusions, a drill, recovered core and measurement station—but its labeled depths, compositions and appearances are **illustrative**, not observed Europan stratigraphy. (3) The stylized, particle-rich Europa mockup is a plausible **visual and interaction target** for the existing engine, not an already implemented feature or validated physics result.

The previous roadmap made the world a possible downstream visualization of conclusions. The amendment makes the world a **testable experimental apparatus** from the first turn, running alongside evidence gathering. That is an important methodological improvement: an excavation can challenge assumptions about provenance, material accounting, depth resolution, contamination and recovery in a way a diagram cannot. It also exploits existing Hermeticon capabilities instead of constructing another isolated toy simulator.

**Unchanged scientific ordering:** science → observable evidence → sample requirements → engineering. **Added feedback loop:** scientific constraints shape the world; observations from the instrumented world reveal what the scientific model fails to specify. Simulated observations are never mistaken for evidence from Europa.

### Revised eight-turn expedition

| Turn | Scientific deliverable | Executable-world deliverable | Exit criterion |
|---|---|---|---|
| **1 — Baseline and audit** | Close the methodological audit: exact-source regression execution, reconcile local/remote discrepancies, freeze classifier work unless a material defect appears. | Inspect current Abyss/Shell architecture and identify its authoritative terrain/material APIs; establish a minimal Europa experimental scene **using existing systems**. | Baseline documented, reproducible scene and build identified; no invented deployment or physical claims. |
| **2 — Environment** | Source-backed gravity, temperature, vacuum, radiation and mechanical constraints, explicitly separating measured, inferred and unknown properties. | Europa-like ice terrain, lighting and motion under parameterized environmental assumptions. | Visuals and parameters tagged illustrative vs grounded; deterministic repeatability. |
| **3 — Histories and strata** | Plausible competing processes: irradiation, impact gardening, fractures, emplacement, freezing and possible exchange; note confusable histories. | Composable depth-dependent material populations embedded in the **authoritative** terrain, with inspectable provenance. | Distinct synthetic histories can yield observable and non-observable differences without hidden-truth leakage. |
| **4 — Diagnostic evidence** | Candidate depth-resolved discriminants, ambiguities and measurement limits. | A depth probe and simple inspectable strata/composition readout, initially without a large HUD. | Readout derives from the world and has a traceable sampling footprint. |
| **5 — Integrity and excavation** | Assess heating, mixing, contamination, recovery loss and disturbance against preserved stratigraphic evidence. | Minimal excavation and recovered core with conservation ledger: removed, recovered, dispersed, lost and introduced material. | Mass/material accounting closes within declared numerical tolerance; sampling does not conjure its own chemistry. |
| **6 — Access mechanisms** | Compare coring, mechanical drilling, thermal access and penetrators with explicit assumptions, energy, mass and preservation tradeoffs. | Interchangeable access tools acting on the same substrate; start with one useful mechanism, then compare. | Comparable instrumented outcomes; no physically uncalibrated drill speed masquerading as an estimate. |
| **7 — Mission architecture** | Separate landing/delivery, subsurface access, power, thermal budget, communications and contamination constraints. | Simple payload/delivery experiments where feasible; keep surface arrival distinct from coring. | Concept comparison states assumptions and failure modes rather than selecting hardware on aesthetics. |
| **8 — Synthesis** | Defensible sample strategy, evidence ledger, uncertainty register and prioritized validation experiments. | A small coherent interactive Europa demonstrator: world → excavation → sample → inspection → provenance record. | Reproducible end-to-end demonstration and explicit list of what remains fictional or unvalidated. |

### Implementation discipline

**Core invariant: the drill interrogates the world; it never generates its own results.** Sample composition, depth, recovered mass and contamination must derive from the authoritative material state and declared tool operations. Avoid a decorative particle shower disconnected from sample accounting. Prefer reusing Hermeticon's existing material transport, terrain, populations, instrumentation, focus and deployment machinery after inspection; do not invent their APIs or claim those integrations already exist.

**Smallest useful vertical slice:** one ice patch, a few material populations, one sampling tool, one recoverable core, one inspection readout. Add the mockup's elaborate interface only after that loop is real. Use deterministic seeds and visible build identity. Phone-first performance and clear tap targets remain constraints. Separate visual particle representation from scientifically meaningful quantities: a BB is not automatically a molecule, gram or calibrated volume. Define any conversion and its uncertainty before making quantitative claims.

**Evidence boundary:** all geology, chemistry, synthetic spectra, particle counts, thermal behavior and drill performance remain explicitly labeled by provenance and calibration status. The concept art is a design reference, not a data source. Maintain independent scientific hypotheses and negative controls even when the simulation is visually persuasive.

### Execution policy for subsequent 🏹 turns

Each turn should combine meaningful scientific research, model/world implementation where appropriate, tests, and persistence rather than incrementing the classifier in tiny steps. Inspect the actual code and established cold-boot/deployment paths before editing Abyss/Shell. Do not publish or report a live build until the deployed SHA is verified. The canonical EUROPA-01 notebook records the decision, assumptions, evidence and next action; detailed implementation belongs in the relevant codebase, not copied into this note.

**Immediate next action:** Turn 1 closes exact-source audit **and** inventories Abyss/Shell's actual terrain/material contracts, then establishes the smallest executable Europa scene. No wholesale scene rebuild and no speculative new engine.


### Turn 1 continuation — Europa opt-in (2026-10-16)

Abyss Shell now selects Europa with `?world=europa`, while the default remains Entropy. Europa reuses the existing Hermeticon vessel and atlas terrain; it has no chemical calibration, excavation, or core recovery. Commits: `967f00c0` (world), `1b2f58f` (selector), `a5294066` (handoff). No public/browser runtime verification yet. Locally reconstructed `ice-column.test.mjs` passed 1,511 checks and `null-audit.test.mjs` passed, but **these are not exact committed-source tests**. Scientific audit remains open pending byte-exact verification.


### Europa Turn 1 — conservation primitive (2026-10-16)

Abyss now has `shell/codex/europa/material-ledger.js` (`0a53a684`) and `material-ledger.test.mjs` (`1ffe8651`). The pure accounting component records synthetic in-place, recovered, dispersed, lost, and introduced quantities and checks balance. It is not yet wired to the authoritative terrain, and the test is committed but not yet executed against exact repository bytes. The opt-in world comment was corrected (`6dc711ee`). A web fetch of the public `?world=europa` page could not verify the running browser; no live deployment claim. **Next:** execute the conservation test, validate the Shell mount via browser inspection, then connect actual signed-field excavation to removed material inventory. Do not fabricate material quantities from the tool or UI.


### Europa runtime observation — user inspector (2026-10-16)

User-provided browser inspector confirms `identity.build=6dc711eec3e35c3cd2a1510f795d2d197f413701`, `fps=79.9169` (one observation), one active visible mount `id=europa`, `error=null`, Hermeticon vessel and atlas terrain. Terrain: signed-field dimensions 85×21×85, 117,320 triangles, one full rebuild, 201.7 ms build, zero local rebuilds and zero collision queries. Inspector explicitly reports `materialCalibration=false`, `sampleCount=0`, `excavationEnabled=false`, six generic material categories and zero deposits. Edge detection reports no shader errors but zero frames and 1×1 target: **do not claim edge treatment was exercised**. This confirms browser boot and scene mounting at the reported SHA, not scientific validity or a deployed conservation test. Next: run exact-source ledger test and couple inventory to authoritative terrain changes before exposing a drill.


### Europa authoritative excavation prototype (2026-10-16)

Abyss `terrain.js` commit `5e3a7f18` adds positive signed-field node inventory and extraction; Europa `world.js` commit `602ba1f1` couples actual terrain-node removal to a conservation ledger and local mesh rebuild. Shell `main.js` commit `d4b13d1f` exposes explicit diagnostic `europaExtractJSON(options,recoveryFraction)` in opt-in Europa, not automatic excavation. Abyss handoff updated at `62ef25ec`. Quantities are **discrete occupied lattice nodes**, not calibrated volume, mass, BBs, chemical species or physical core quality. Current generic terrain material IDs do not establish Europa composition. No new browser inspector observation or exact-source regression execution has yet confirmed this revision; validation is outstanding. Next: verify scene and conservation after one explicit extraction, then improve sampling footprint and material model before claiming physical core behavior.


### Europa browser observation — pre-extraction (2026-10-16)

User inspector confirms deployed build `62ef25ec136ac87e9bc0411572706ac7d440246c`, active visible Europa mount, `error=null`, `excavationEnabled=true`, and initialized material ledger. Initial inventory by generic terrain material ID: 0=254, 1=6195, 3=499, 4=13722, 5=32163, totaling **52,833**, matching terrain `solidCount=52833`. All recovered, dispersed, lost and introduced counts zero; all residuals zero; `balanced=true`. **This is only initialization consistency, not a tested excavation.** `lastExtraction=null`, `sampleCount=0`, local rebuilds=0. FPS is null in this snapshot. Next browser trial must invoke the explicit diagnostic once and inspect the new extraction, terrain and ledger; avoid treating generic IDs as Europan chemistry.


### Stratigraphy approved and started (2026-10-16)

User approved bringing geological provenance, terrain maps and cross-sections ahead of drilling. Abyss commit `93b2884c` creates deterministic **synthetic** `stratigraphy.js` with three depth units (radiolytic skin, reworked ice, inherited ice), illustrative composition and origin/alteration proxies, fractures and 2D cross-section sampling. `world.js` commit `dce4b832` exposes default profile in inspector and `europaSection` / `europaProfile`; Shell commit `8d38f0ec` exposes browser diagnostic `europaSectionJSON(options)` and `europaProfileJSON(x,z)`. Regression source committed at `caf1b224`, not yet executed. **Caveat:** this stratigraphic field is currently independent of the signed-field terrain and extraction ledger; no recovered material has inherited geological provenance yet, and depth coordinates are illustrative. Next integrate field sampling with authoritative occupied cells, make section show actual void/solid topology, then produce live map/cross-section views and provenance-preserving cores. No measured Europa composition is implied.


### Synthetic stratigraphy visualization — approved direction (2026-10-16)

Approved direction: establish depth-indexed provenance, maps and cross-sections **before** elaborating drilling. Current Abyss source already contains `shell/codex/europa/stratigraphy.js`, a deterministic three-unit illustrative field (radiolytic skin, reworked ice, inherited ice) with composition proxies, alteration, fracture, provenance and explicit unconstrained uncertainty. This field is **not yet coupled** to terrain occupancy, signed-field extraction, or the material ledger; generic material IDs remain separate. Shell adds a mobile ▤ overlay with synthetic cross-section (`93553a3b`), synthetic depth-slice map (`2e3a4956`, `06be4692`), and MAP / SECTION switch (`792cff24`). These are visualizations of the same synthetic provenance function, not observed Europan stratigraphy. Browser execution of these commits is not yet verified. Next: reconcile terrain occupancy and excavation with provenance at source-node coordinates, preserve ordered source intervals in recovered cores, and test conservation/provenance jointly. Avoid asserting that illustrative stratigraphy represents Europa's true ice shell.


### Recovered handoff — stratigraphy linked to terrain and excavation (2026-10-16)

After the last recorded visualization work, Abyss terrain gained an optional extraction callback reporting each **actually removed signed-field node** with original x/y/z coordinates and generic material ID (`b2db9614`). Europa now attaches the synthetic stratigraphic unit, composition proxy and provenance tags to each removed node, reports per-unit counts, and checks that the provenance parcel count equals the removed-node count (`69d45832`). Cross-sections gained an authoritative terrain occupancy mask, so excavated voids can be distinguished from synthetic strata. The provenance contract and caveats are in `Abyss/shell/codex/europa/PROVENANCE.md` (`f16f13b1`). This is **provenance attribution to occupied nodes**, not a physically calibrated material field; generic terrain IDs are not chemical species.

### Recovered handoff — terrain-aligned map and mobile cross-section (2026-10-16)

Synthetic stratigraphic depth was changed to reference terrain-atlas surface elevation instead of an independent sinusoidal surface (`73710497`). The map and cross-section APIs expose terrain occupancy (`824db43f`); the mobile survey canvas uses that occupancy to render voids (`c4bfe189`, cleanup `5600cacf`). A user screenshot confirmed a working mobile section overlay with three color-coded synthetic strata and MAP / SECTION controls; accompanying inspector at build `c4bfe189e34ac92261164b4facf1e575e533ce75` reported an active Europa world, no mount error, ~60.16 FPS, zero samples and zero local rebuilds. The screenshot displayed an earlier short SHA, so do **not** infer that the final cleanup commit was visually verified by that screenshot. Geological bands remained simplistic, and extraction was still untested.

### Recovered handoff — spatial geological hypotheses and site targeting (2026-10-16)

The synthetic stratigraphy gained a deterministic slanting fracture corridor and a localized transported-ice lens with distinct provenance/composition proxies (`a2ca08c7`). The routine inspector's large 25-entry profile was replaced by a compact summary, while on-demand site profiles remain available (`3aa35a7c`). The mobile map gained tap-to-select coordinates and a highlighted site, with the section changing its fixed x coordinate (`6b2c5ff7`); the section is **not yet truly centered on both x and z**. A candidate-site comparison compares synthetic profiles at lens site (-3.1, 2.2) and reference (5, -3), and the ledger's cumulative `introduced` account was protected from ordinary transfers (`4d823f54`, `0e4d0c4b`). The survey gained COMPARE SITES (`1d0e5c85`). Browser inspector confirmed build `1d0e5c85fdd9553aad5284c5307c3656aafe9cbe` mounted, ~60.13 FPS, ledger balanced, and four synthetic units registered; **comparison control use was not demonstrated** in that observation.

### Recovered handoff — explicit paired-core interrogation (2026-10-16)

Abyss added `world.interrogateEuropa()` (`0642db8c`) and mobile **EXTRACT TWO CORES** plus `europaInterrogateJSON()` (`2b3b5a5e`); documentation was updated (`6c0c0d7e`). The one-shot trial drills two synthetic sites, first (-3.1, 2.2) through the intended transported lens and then (5, -3) as reference, using radius 0.8 and recovery fraction 0.8. It returns removal counts, per-unit provenance, recovered-parcel **proxy**, lens-detection flag, material ledger balance, and remaining-terrain inventory agreement. The parcel subset is a deterministic sampling proxy, **not** a calibrated physical recovery process or necessarily identical to the ledger's per-material recovered allocation. No extraction runs on boot.

### Browser evidence — first paired extraction executed (2026-10-16)

User-provided inspector at deployed build `6c0c0d7ee95ac9c93b0175edd500a5a8afe09993` reported Europa active/visible, no mount error, ~58.73 FPS, `sampleCount=2`, two local terrain rebuilds, and the second core's full 49-node extraction record. The second core at (5, -3) removed **49 occupied nodes**, with synthetic provenance: inherited ice 35, reworked ice 7, radiolytic skin 7, transported lens **0**. Its generic material counts removed were ID 1=7, ID 4=14, ID 5=28; recovered 5+11+22=38, dispersed 2+3+6=11. The aggregate material ledger reported **84 nodes removed across two cores**, recovered **66**, dispersed **18**, remaining in place **52,749** from an initial **52,833**; all residuals zero, `balanced=true`. Last extraction reported `provenanceAccountingMatches=true` and `inventoryMatchesTerrain=true`. Thus the first core removed **35 nodes** by difference, but its provenance and lens-detection result are **not present in this inspector**. Do not claim the paired sites were scientifically discriminated until the first-core result or the `interrogateEuropa()` summary is observed. Two local rebuilds and altered triangle count (118,072 vs initial 117,320) support actual terrain remeshing. FPS is one sample, not a benchmark.

**Instrumentation defect:** terrain inspector `solidCount=52833` remained at its initial value after extraction, contradicting the ledger's correct remaining count 52,749 and the direct `inventoryMatchesTerrain=true` check. Treat `solidCount` as stale after local edits until fixed. The inspector also bloats `lastExtraction` with 49 full parcels while omitting a compact summary of both cores. Edge-detection reports zero frames and a 1x1 target in these observations; do not claim edge-processing performance.

### Next turn — preserve both testimonies, then test discrimination

Fix terrain inspector `solidCount` so it reflects the current authoritative field; keep the ledger invariant. Persist a **compact, durable paired-core report** in Europa inspection (both sites, node counts, provenance counts, lens detection, accounting checks), with detailed parcel records available only on demand. Run the paired test again on a fresh world and verify that the lens core actually contains transported-lens material and the reference does not; if it fails, investigate the sampling footprint and lens geometry rather than changing the answer. Then develop true x/z-centered survey slices, depth-ordered recovered cores and explicit recovery/contamination transformations. Execute exact-source regression tests where possible. All strata, compositions, origin tags, and sampling proxies remain synthetic and unconstrained; no empirical Europa ice chemistry or calibrated mass has been demonstrated.


### Instrumentation repair after first paired-core observation (2026-10-16)

Abyss commit `61806f27` updates signed-field `solidCount` and `voidCount` counters when `extractNodes()` removes positive lattice nodes, repairing the stale 52,833 solid-count inspector defect observed after 84 nodes were removed. Commit `9f88416c` returns missing `xStart/xEnd/zStart/zEnd` extents from the synthetic surface-map API, required for correct map occupancy sampling and cursor positioning. Commit `6f3cf58f` persists the paired-core trial summary in the Europa inspector, including both sites' counts, provenance and lens detection, while replacing the oversized `lastExtraction.parcels` inspector payload with a compact extraction summary. Detailed parcel data remain returned by the explicit extraction diagnostic. **These repairs are committed but not yet browser verified**. Next: run fresh paired trial and inspect `pairedTrial.discriminated`, both `trials[*].lensDetected`, `terrain.solidCount=52749` if 84 nodes are removed again, and `materialAccounting.balanced=true`; verify the map no longer renders all void due to missing extents. The trial's `recoveredParcelProxy` is not equivalent to exact ledger recovery and remains explicitly synthetic.


### Browser-confirmed paired-core checkpoint — 2026-10-16

Observed executing Abyss build `6f3cf58ffbf5e23fdb983a36286363f766cf4c73` at 67.14 FPS. Two synthetic cores removed 35 and 49 lattice nodes. The target (-3.1, 2.2) contained 10 transported-lens nodes; the reference (5, -3) contained none. `pairedTrial.discriminated=true`; `materialAccounting.balanced=true`; 84 nodes removed, 66 recovered, 18 dispersed, residual zero. Terrain `solidCount=52749`, consistent with the ledger. This validates deterministic synthetic discrimination, not measured Europa geology or calibrated chemistry. Recovery parcels remain a proxy.


### Cold-boot analysis and material-world plan — 2026-10-16

Read Abyss README, Shell handoff, Europa dedicated handoff, provenance notes, and the Ledger's 13 executable experiment files. This is a planning entry, not new runtime verification. Browser-confirmed baseline: Abyss build `6f3cf58f`, 84 lattice nodes removed across two synthetic cores, 66 recovered, 18 dispersed, zero ledger residual. The detected transported lens is deliberately simulated, not an inference about Europa's geology.

**Next implementation:** (1) deterministically assign each removed parcel recovered/dispersed disposition, exactly matching the material ledger by material ID; remove the modulo-index recovery proxy. (2) Compute surface-relative depths and ordered, spatially traceable core intervals rather than fixed absolute elevations. (3) Separate investigator-visible noisy measurements of recovered material from privileged synthetic truth, drawing on the existing ice-column, spectroscopy, blind-study, and null-audit methods. (4) Verify site-map coordinates, sections, and actual terrain occupancy, then develop physical excavation, BB transport, and sample storage. (5) Run exact-source regression and browser checks; preserve Entropy isolation and distinguish commit, deployment, and observed executing SHA.

**Visual direction:** Faceted pale ice, translucent stratigraphy, sparse material BB inclusions, restrained brass apparatus, dark sky. All in-scene labels and data belong on legible navy-blue, fine gold-rimmed Hermeticon cards. Concept imagery establishes materials and mood, not existing functionality. Keep the ice field physically consequential rather than filling it with decorative spacecraft props.

**Scientific limits:** Occupied lattice nodes are not calibrated mass, length, or chemical species. Surface equivalence in the Ledger blind study is imposed; spectral channels are synthetic and uncalibrated. Require blinded inference and null controls before making scientific claims. Preserve the current working world, use existing Arcana and the dedicated [Europa handoff](https://github.com/bonoj/Abyss/blob/main/shell/codex/europa/HANDOFF.md), and update operational documentation only as implementation changes.


### Browser-confirmed Abyss material recovery and Ledger-first working rule — 2026-10-16

**Browser witness:** User supplied the Athanor inspector from executing Abyss SHA `3b69d4de1469de5f255c5eb301644171724732d1`. Europa was active and visible, error `null`, FPS `60.15885698171734` at one observation (not a sustained benchmark). The paired destructive trial `europa-paired-core-trial/v1` removed 35 nodes from transported-lens site (-3.1, 2.2) and 49 from reference site (5, -3). Material ledger: 52,749 in place, 66 recovered, 18 dispersed, zero per-material residual, `balanced=true`; provenance and terrain inventory checks both true. Target recovered-unit counts: radiolytic-skin 4, transported-lens 8, inherited-ice 16 (28 total); reference: radiolytic-skin 5, reworked-ice 5, inherited-ice 28 (38 total). `discriminated=true`; the lens appeared only at the synthetic target. Depth-ordered recovered intervals are present; missing depth bands are not filled. `edgeDetection.frames=0`, so edge rendering was not verified. The executing build matches the earlier implementation commit sequence; subsequent documentation commits have not been separately browser-witnessed.

**What this establishes:** The running world reports exact per-material recovered/dispersed allocations and conserved terrain inventory; its trial uses actual recovered parcels instead of the previous modulo-index subset. This is a browser-level functional witness, not a line-by-line independent audit of all parcel dispositions, a test-run report, a mass calibration, or evidence of Europa's real composition. `lensDetected` still inspects privileged synthetic provenance, so independent scientific discrimination remains **unproven**.

**Working practice, effective now:** Use **this Ledger as the primary working notebook** for EUROPA-01: record questions, hypotheses, experimental design, observations, null controls, results, failed tests, scientific limits, and next decisions here as the work progresses. Abyss `shell/codex/europa/HANDOFF.md` remains the short operational cold-boot/runtime map, not a competing scientific working specification. Update the Ledger at substantive checkpoints, including negative results; use Git history rather than parallel narrative documents as the archive. Do not mislabel an unverified commit as a live build.

**Immediate research frontier:** Design an instrument-facing observation adapter for recovered parcels that cannot access `unit`, `provenance.transportedLens`, or other synthetic truth labels during inference. Use seeded noise, contamination, incomplete recovery, and uncertainty/abstention; evaluate paired sites blind and include no-information controls, independent-noise nulls, and false-positive/false-negative reporting. Reuse the established Ledger virtual-measurement and blind-study machinery where semantics match, but do not imply synthetic spectral proxies are empirical calibrated bands. Only after that should survey visualization and gold-rimmed navy measurement cards represent inferred evidence. Preserve material accounting, surface-relative depth, Entropy isolation, and mobile-first performance.


### Observable core instrument — working checkpoint, 2026-10-16

Committed Ledger experiment `experiments/europa-01/observable-core.mjs` (`59c73514`) and regression checks `observable-core.test.mjs` (`bc216be0`). The instrument consumes recovered parcels, observes generic material ID and depth/position only, and omits privileged geological provenance and synthetic composition from its output. It offers deterministic seeded measurement noise, missingness, possible contamination, and descriptive two-core comparison with abstention. The material contrast is an arbitrary render-ID proxy, **not** spectroscopy or a calibrated Europan chemical measurement. The tests cover truth-field independence, reproducibility, missing recovery, abstention and invalid configuration. Tests are committed, but execution has not yet been independently confirmed. The module is not yet integrated into Abyss. Next: run exact-source tests; design blinded synthetic controls and independent-noise nulls before interpreting any core contrast. Ledger remains the scientific working notebook.


### EUROPA-01 — agreed closing experiment and pause contract (2026-10-16)

**Decision:** Complete one narrow, reproducible blind geological interrogation, then pause EUROPA-01. The objective is **two cores, one blind instrument, an auditable conclusion**. The experiment must answer whether recovered samples support different *synthetic* subsurface histories, with uncertainty, without consulting hidden truth labels during inference. A correctly characterized failure or abstention is an acceptable outcome; do not tune the experiment to manufacture success.

**Work in dependency order:**

1. **Validate the existing Ledger instrument.** Execute exact-source tests for `experiments/europa-01/observable-core.mjs` and `observable-core.test.mjs`. Confirm deterministic replay, input/output truth-field separation, missing recovery, contamination, abstention, and invalid-configuration behavior. Record actual commands, source SHAs, failures, and results; no unexecuted-test claims.
2. **Design and run a blinded study.** Use multiple fixed seeds and predeclared comparison criteria. Include a planted synthetic contrast, a no-contrast control, independent-noise nulls, and degraded recovery/contamination conditions. Keep truth labels out of instrument input and inference; reveal them only for scoring afterward. Report detections, false positives, false negatives, abstentions, and uncertainty, including negative outcomes. Render material IDs and proxies are not calibrated chemical measurements or actual Europa evidence.
3. **Integrate the validated adapter into Abyss Europa.** Connect it to the existing recovered-parcel pipeline and expose a compact observable-core report through existing inspection/UI affordances, without allowing privileged `unit` or `provenance` fields into the measurement decision. Preserve per-material disposition accounting, surface-relative depth, ordered intervals, zero ledger residual, and Entropy isolation. Do not introduce a new physics engine or replace the existing inspector.
4. **Verify and close.** Run relevant exact-source regressions; confirm the Abyss commit, Pages deployment, public build identity, and actual executing Europa browser SHA and paired trial separately. Capture the measured conclusion and its limitations here, then update `bonoj/Abyss/shell/codex/europa/HANDOFF.md` with the verified state, rollback point, and next optional frontier.

**Explicitly deferred:** physical drilling apparatus, BB transport and storage, extra geological units, expanded survey graphics, and visual overhaul. None is a prerequisite for closing EUROPA-01. Preserve the pale ice/brass/navy-card visual direction without unsolicited redesign.

**Exit criterion:** A reproducible, truth-blind comparison of two recovered cores, with controls, an honest uncertainty-aware conclusion (including failure/abstention if warranted), conservation checks, and verified running-world evidence. Once recorded, **pause** rather than expand scope. Ledger is the scientific working notebook; Abyss's Europa handoff is the operational map. This entry is an approved plan, **not implementation or verification evidence**.


### Browser witness — Europa build 9158d472 (2026-10-16)

User-supplied Athanor inspector reports executing SHA `9158d472ced5376f565b439f501578eda0bc1381`, Europa active and visible, `error:null`, instantaneous FPS 60.14019436150538. Two cores removed 35 target and 49 reference nodes; 66 recovered, 18 dispersed, 52,749 in place; every generic material residual zero. `pairedTrial.balanced=true`, `discriminated=true`, terrain inventory and provenance accounting checks true. Target recovered 8 synthetic transported-lens nodes; reference zero. `terrain.solidCount=52749`, two local rebuilds. This witnesses the existing truth-aware paired extraction, **not** the independent observable-core adapter or blinded inference. Edge detection `frames=0` remains unverified. The closing experiment plan above is unchanged; exact-source tests and instrument integration remain pending.


### Closing experiment — negative observable result and integration (2026-10-16)

**Executed locally with Node 22:** the exact Ledger observable-core module and current test content passed, including deterministic truth-label invariance, missingness/abstention, planted material contrast, and a 100-pair independent-noise null (100 abstentions, zero directional calls). The local study used the browser-witnessed recovered material-ID counts (target: 1=4, 4=8, 5=16; reference: 1=5, 4=11, 5=22) and synthetic parcel positions, 100 independent seed pairs, `noiseSigma=.02`, `missingFraction=.1`, `contaminationFraction=.05`, and default `abstainThreshold=.05`. **Contrast: 100 abstentions, 0 directional calls. Independent-noise null: 100 abstentions, 0 directional calls.** This is a legitimate indeterminate result: render-material contrast does not resolve the synthetic history difference under these settings. It does not demonstrate equivalence, actual Europan geology, calibrated sensing, or a measured false-positive rate outside this finite study. The reconstructed positions differ from actual recovered parcel positions.

**Abyss integration committed:** `shell/codex/europa/observable-core.js` copied from the Ledger instrument; `world.js` creates `blindTrial` after actual paired recovery using only recovered material/geometry, and reports it through inspection; `main.js` displays the blind comparison and a non-geological caveat. The older truth-aware `pairedTrial` remains separately available for scoring and accounting. No Entropy changes. Latest relevant Abyss integration commit `ed9717be`; handoff update `d9bfea85`.

**Verification status:** Local instrument tests executed; Abyss integration committed, but Pages and browser execution of the new `blindTrial` are **not** yet verified. Last user-observed running build was `9158d472`, prior to integration. This is a scientific stopping point for the synthetic instrument's discriminating power, but **not yet a fully verified browser outro**. To close, observe an executing post-integration SHA and `experiment.blindTrial` after `EXTRACT TWO CORES`, with conservation and Entropy isolation intact. Do not expand into new apparatus or force a positive inference.


### EUROPA-01 browser outro — executed blind core interrogation (2026-10-16)

**User-provided Athanor witness:** executing Abyss SHA `d9bfea855467fd5fb7efcf15f0c4062d56a9c79e`; Europa active/visible, `error:null`, instantaneous FPS 59.533322678599966. Two real synthetic lattice extractions removed 35 and 49 nodes, respectively; 28 and 38 recovered, 66 total recovered, 18 dispersed, 52,749 still in place, per-material residual zero. Terrain inventory and provenance accounting agree; two local rebuilds. The older privileged synthetic truth report says transported lens present only at target; it is not an inference channel.

**Instrument actually executing:** `experiment.blindTrial.schema=europa-blind-observation/v1`, `truthUsedForInference=false`, generic material contrast (not calibrated spectroscopy). Target: 28 attempted, 26 observed, seed 741, mean 0.4143712227648629. Reference: 38 attempted, 32 observed, seed 742, mean 0.4376644556372652. Both used `noiseSigma=.02`, `missingFraction=.1`, `contaminationFraction=.05`. Difference target minus reference = **-0.023293232872402314**; threshold = 0.05; **decision = abstain**. This is the honest closing result: known synthetic histories differ, but this instrument cannot resolve their difference at its predefined threshold. It does not establish geological equivalence or real Europa chemistry. The witness confirms the actual browser execution of the integration; it does not independently audit internal truth-field isolation beyond source review and local regression.

**Status:** EUROPA-01 closing experiment witnessed in browser and suitable to pause. Preserve Abyss SHA `d9bfea85` as verified baseline. The separate Entropy world was not browser-tested in this witness; do not claim otherwise. Edge processing remains unverified (`frames=0`). The agreed deferred frontier—physical apparatus, BB sample handling, new geological units, enhanced survey presentation—remains optional. No need to manufacture a positive detection. 🧊
