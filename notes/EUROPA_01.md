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
