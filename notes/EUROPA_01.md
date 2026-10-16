# EUROPA-01 — Ice Coring and Analytical Lander

**Hermeticon Institute · Working research note**  
**Opened:** 2026-10-16  
**Status:** Concept / executable research investigation; no spacecraft or simulation yet built.  
**Canonical working record:** This file. Future turns on this project are **automatic puts**: append or revise this note in Ledger during the turn without waiting for a separate instruction. Preserve decisions, experimental results, open questions, and provenance. Do not silently turn proposals into demonstrated capabilities. If a write fails, say so and retain the pending changes in the response.

## Mission premise

Design a robotic **Europa** lander to recover depth-indexed ice samples and perform **spectral and chemical analysis**. The purpose is to explore what near-surface ice can reveal about compositional stratigraphy, radiation alteration, and possible exchange between Europa's surface and subsurface environment.

**Central question:** What can near-surface ice tell us about Europa's chemistry, history, and potential exchange with its subsurface ocean?

This is both a planetary-science concept study and an opportunity to build a **working, instrumented mission simulation**. The executable experiment should contain hidden ground truth, realistic measurement limitations, and inspectable evidence—not simply a cinematic lander.

## Initial systems

1. **Ice corer:** recover sequential depth-indexed samples while tracking penetration resistance, torque, temperature, power, recovery fraction, and sample integrity.
2. **Spectral lab:** candidate Raman and infrared measurements of ice, salts, mineral phases, and potential organic signatures; simulated spectra require traceable assumptions and reference data.
3. **Chemical lab:** controlled analysis of melted aliquots for conductivity, ionic composition, acidity where meaningful, oxidants, and selected organics; explicitly model alteration during melting.
4. **Geophysics:** temperature, mechanical properties, local ice structure, and drilling response.
5. **Sample handling:** isolation, imaging, transfer, storage, contamination tracking, and depth provenance.

## Preliminary mission boundaries

- Begin with a **stationary, shallow-coring** baseline as a *working assumption*, not a settled architecture. Initial exploratory depth target: **0.5–1 m**, subject to reconsideration. The alternative is a mobile platform with shallower cores at multiple sites; **decision open**.
- Do not presume access to Europa's ocean. A deep ice-penetrating mission is a substantially different engineering program.
- Radiation is a first-order constraint for surface chemistry, instrument lifetime, and electronics.
- Drilling heat, sublimation, mechanical disturbance, contamination, and sample melting may alter the signals we wish to measure.
- Chemical and spectral identifications may be ambiguous; detection of organics is not detection of life.
- All simulated observations must be labeled as such, with model assumptions and uncertainty visible.

## Executable laboratory proposal

Create a simulated ice column with compositional layers, fractures, inclusions, buried salts, and radiation-processed surface chemistry. Conceal the actual layer composition from the operating investigator while preserving ground truth for evaluation.

**Loop:** choose coring action → observe drilling telemetry → recover sample with depth/provenance → select spectral/chemical tests → interpret uncertain measurements → compare competing hypotheses → update mission plan → inspect evidence against ground truth.

The lander should be designed around its scientific operations, mechanical constraints, thermal budget, and sample-handling workflow. Build the ice substrate and analytical instrumentation first, then integrate the spacecraft.

**Candidate outputs:** interactive lander and corer, depth log, core inventory, simulated spectra, chemical assay results, power/thermal accounting, uncertainty-aware scientific notebook, and reproducible test scenarios.

## Research questions

- Which landing-site properties maximize scientifically useful preserved stratigraphy?
- Stationary deep-ish core versus mobile shallow multi-site sampling?
- Which analytical instrument combinations best discriminate salts, radiation products, and potential organics?
- What depth and sampling resolution are worth their energy and complexity costs?
- How do drill-induced heating and handling change measured composition?
- How can instruments expose uncertainty rather than produce falsely precise answers?
- What telemetry and sample provenance are required for independent reconstruction of conclusions?

## Engineering and epistemic discipline

Distinguish **real Europa knowledge**, **engineering assumptions**, **simulated ground truth**, **simulated measurements**, and **actual test observations**. Do not imply physical feasibility from concept art. Source mission-relevant constraints when moving from conceptual to quantitative design. Reuse existing Hermeticon, Crucible, material, observation, Ledger, and deployment machinery where appropriate rather than duplicating infrastructure.

## Working protocol — automatic puts

- This note is the primary work surface for the Europa investigation.
- **Each substantive future assistant turn** on Europa should automatically persist new design decisions, hypotheses, findings, test evidence, and next steps here through a GitHub update.
- Prefer **in-place revisions** for corrected assumptions and a short dated **Work Log** for material decisions and milestones. Avoid verbose chat transcripts and speculative noise.
- Record code commits, artifact URLs, and verified running SHAs **only when actually obtained**.
- The user need not request each write; normal conversational exploration authorizes documentation, **not unrequested code deployment or physical actions**.
- When the user pivots away, leave an accurate handoff in this file.

## Work log

### 2026-10-16 — Concept opened
User proposed: “Europa lander for ice coring and spectral/chemical analysis.” Initial assistant proposal established the science goal, five instrument/handling systems, shallow coring baseline, major environmental challenges, and hidden-ground-truth executable laboratory. User directed creation of this Ledger note and automatic persistence on future turns.

**Next (superseded):** Initial ice-column-first priority was revised: payload delivery, initial radiation survival, and emplacement now precede science operations.


## Payload delivery, instrument protection, and in-situ materials engineering

**Status:** Proposed architecture; no mass, dose, thermal, or trajectory budgets validated. Added 2026-10-16 following human direction: “We need to get the thing to the surface first. And we need radiation shielding ... quickly burrow and spin an ice shell.”

### Payload delivery

- **Cruise / Jupiter-system arrival:** deliver a radiation-aware, protected Europa landing payload; determine trajectory, communications relay strategy, arrival geometry, and propulsion requirements.
- **Europa descent:** essentially airless body; do not rely on parachutes or aerodynamic braking. Study propulsive deceleration, autonomous hazard avoidance, landing-site assessment, touchdown stability, and descent plume/surface contamination.
- **Surface handoff:** verify attitude, power, communications, thermal stability, and ability to start excavation immediately. Landing legs/anchors and excavator loads must be designed together.
- **Engineering budgets to establish:** delivered mass, propellant and delta-v, peak deceleration, touchdown conditions, exposed-duration limit, power and thermal budgets, and contamination controls.

### Instrument protection

- **Survive before shelter:** provide initial shielding and protected electronics for cruise, descent, landing, and construction. An eventual ice shell cannot protect the initial deployment.
- **Radiation:** model Europa's energetic electron/ion environment, time-dependent flux, accumulated total ionizing dose, displacement damage, single-event effects, and secondary radiation generated within shielding. Evaluate ice/water and conventional materials by geometry and areal density, not an unsupported “safe thickness.”
- **Thermal and mechanical:** insulation, heaters, cryogenic compatibility, fracture loads, seals, vibration isolation, and shielding access ports. Radiation shelter must not compromise power, cooling, sample integrity, or instrument operation.
- **Operational topology:** place sensitive analytical electronics and sample handling underground; retain necessary surface communication/power interfaces. Compare relay mast, cable, and other communication architectures.
- **Verification:** integrate dose-versus-time, failure risk, shielding mass, excavation progress, and survival margin.

### In-situ materials engineering — burrow and spin an ice shell

**Human-origin hypothesis:** rapidly burrow into Europa's near-surface ice, then use local material to fabricate a protective ice shell around the instrument volume. This is an architectural proposal, not yet a validated construction method.

**Candidate sequence:** touchdown → activate protected excavator → create trench/chamber → lower or position instrument package → collect/process excavated ice → construct shielding wall/roof via rotational deposition, compaction, sintering, or melt/refreeze → verify shelter integrity and radiation attenuation → transition to protected coring and chemistry.

**Compare construction methods:**
1. Mechanical excavation + backfill/compaction: potentially avoids bulk latent-heat costs; requires anchoring, spoil transport, and roof stability.
2. Thermal excavation + melt/refreeze: may produce bonded structures but incurs substantial energy, heat-rejection, sublimation, and thermal-stress penalties.
3. Rotating deposition / “spin shell”: test whether a spinning nozzle, arm, or forming head can build continuous layers with reliable bonding in vacuum and extreme cold. Rotation alone does not establish material deposition or structural strength.
4. Hybrid: mechanically excavate, then sinter or refreeze only joints and a thin sealing layer.

**Unknowns:** ice porosity, grain structure, impurity content, fracture behavior, surface vacuum, vapor loss, deposition temperature, bonding, roof load path, excavator reaction forces, plume effects, and shelter access. Local radiation-processed surface material may contaminate science samples; segregate structural feedstock and analytical cores.

### First executable engineering investigation

**Question:** Can the lander construct adequate local shielding before its initial protection and energy reserves are exhausted?

Model coupled state:
- exposed time and accumulated dose by subsystem;
- excavation rate, depth, removed mass, anchoring and power;
- ice processing/deposition throughput, thermal budget, and shell geometry;
- radiation attenuation and secondary dose under partial/complete shelter;
- instrument survival and usable science volume.

Compare at least **surface-only**, **burial/backfill**, **spun/deposited ice shell**, and **hybrid** scenarios. Report Pareto tradeoffs in energy, time, risk, shielding effectiveness, and mass. Avoid unsupported numerical claims; source environmental constants before quantitative runs.

### Revised mission sequence

**Deliver → land → survive → burrow → build shelter → verify protection → core → analyze → interpret.**

### 2026-10-16 — Work log: early shelter concept

Human redirected priorities to payload delivery and radiation shielding, proposing rapid burial and an ice shell fabricated from in-situ material. Assistant proposed phased descent/emplacement, conventional initial protection, protected subsurface instrumentation, and a comparative radiation/energy/time model. No architecture or material process has yet been demonstrated.


## Research reconnaissance I — burial, radiation, cryogenic materials (2026-10-16)

**Sources investigated (primary NASA/JPL where possible):**
- NASA Europa Lander Science Definition Team report: https://europa.nasa.gov/resources/58/europa-lander-study-2016-report/
- NASA/JPL Europa Lander concept, including nominal ~10 cm scientific sampling depth: https://www.jpl.nasa.gov/missions/europa-lander/
- NASA Europa radiation depth mapping: https://europa.nasa.gov/news/17/radiation-maps-of-europa-key-to-future-missions/
- NASA/JPL Clipper radiation-monitoring study (electron-dominated radiation environment): https://europa.nasa.gov/spacecraft/instruments/radiation-monitoring-study/
- NASA NTRS Europa surface radiation assessment (directionality, secondary radiation, terrain): https://ntrs.nasa.gov/search.jsp?R=20060013117
- NASA-funded under-ice Europa study (bury sensitive components in tunnel): https://www.nasa.gov/wp-content/uploads/2017/07/niac_2012_phasei_mccue_europa_tagged.pdf
- NASA/JPL ice-world radioisotope thermal study (surface sublimation, heat flux): https://ntrs.nasa.gov/citations/20220003771
- JPL/NASA cryogenic-vacuum excavation testbed and sampling research: https://doi.org/10.3847/psj/ac4493
- NASA Europa Clipper electronics vault heritage: https://science.nasa.gov/mission/europa-clipper/mission-overview/

### Findings and corrections

1. **Burial has explicit precedent:** a NASA-funded Europa under-ice concept proposes burying radiation-sensitive components in the tunnel left by a cryobot, with surface antennas and sacrificial elements treated separately. This validates burial as a research direction, not the feasibility of our particular deployment mechanism.
2. **Do not conflate science-sample depth and electronics shielding:** NASA radiation mapping suggests 1–20 cm depth may preserve selected chemical signatures depending on site and assumptions; that is not a radiation-hardening guarantee for electronics. Electron-driven secondary radiation and angular geometry matter.
3. **Surface ice melt/refreeze is nontrivial:** JPL thermal analysis notes that under the extremely low ambient pressure, exposed surface ice may sublimate rather than form a stable liquid melt pool. Spun shell must specify deposition/bonding physics, vapor containment, thermal control, and power.
4. **NASA already uses conventional shield vaults:** Europa Clipper employs an aluminum/titanium electronics vault. The architecture comparison must consider imported shielding plus rapid burial, not a false choice between no shielding and ice.
5. **Cryogenic cuttings are experimentally studied:** JPL's Europa Lander sampling program reports cryogenic-vacuum cutting testbeds, useful for constraints on excavation and spoil handling.

### Cross-domain research map

- **Underground mining and tunneling:** spoil handling, borehole stability, ground support, robotic excavation and anchoring in low gravity.
- **Additive manufacturing and ice sintering:** layer bonding, deposition rate, structural porosity, fracture toughness; distinguish vacuum-compatible processes from terrestrial ice printing.
- **Radiation transport and medical/space shielding:** particle spectra, secondary bremsstrahlung, shielding areal density, dose-depth curves, geometry-aware Monte Carlo models (e.g. Geant4 as candidate; no simulation yet run).
- **Cryogenic vacuum systems:** sublimation, vapor containment, phase changes, thermal management, contamination.
- **Robotics and fault-tolerant deployment:** autonomous landing, one-way transitions, sacrificial surface components, cable and tether management.
- **Planetary protection / analytical chemistry:** separation of construction feedstock from pristine analytical cores, blanks, contamination tracing.

### Working hypothesis and first experiment

**Hypothesis H1:** mechanically excavating and burying a compact instrument vault, then backfilling around it, may deliver adequate shielding faster and with less energy than spinning a bonded ice shell. **H2:** a hybrid shell may be worth its cost when structural stability, access, or instrument deployment requires a protected cavity. Both remain untested.

**Experiment E1:** build a parameterized survival-versus-emplacement model with variable ambient dose rate, radiation-hardness threshold, baseline vault shielding, excavation throughput, depth, backfill density, shell construction energy, power, and time. Run sensitivity sweeps rather than fix uncertain constants. Treat attenuation as an input family until sourced radiation transport curves are available; do not claim simple exponential attenuation is a verified Europa model.

**Data sought next:** particle energy/angular flux or dose-depth curves for candidate sites; cryogenic ice mechanical/excavation properties; available excavation test results; power/mass baselines for Europa lander studies. Public datasets first; request user help only for restricted or hard-to-extract data.

**Immediate design shift:** *bury first, manufacture elaborate shelter only if justified*. Keep spun-ice-shell option in comparison; no premature dismissal.

### 2026-10-16 — Work log: autonomous reconnaissance

User authorized active research, cross-domain connections, requests for specific datasets, and instrumented runtime when needed. Assistant performed initial public-source reconnaissance and recorded sources, findings, hypotheses, and first proposed quantitative experiment. No simulation, radiation transport calculation, or physical feasibility test has yet been executed.


## Payload delivery option — inflatable padded landing bubble (2026-10-16)

**Human proposal:** “use a balloon drop with a durable padded landing bubble.” **Status:** candidate architecture for analysis, not yet validated.

### Physics and mission interpretation

Europa has essentially no atmosphere: an ordinary balloon cannot provide buoyancy or meaningful aerodynamic descent braking. Interpret **balloon drop** as a **deployable, inflatable, impact-attenuating enclosure** around the payload, deployed after substantial propulsive deceleration. It may reduce the requirements for terminal precision landing and rigid legs, but cannot eliminate the need to shed interplanetary/orbital arrival velocity.

**Candidate sequence:** cruise / Jupiter arrival → Europa approach → powered deceleration and hazard assessment → inflate protective bubble → low-speed controlled impact → dissipate kinetic energy / manage rebound and rolling → stabilize orientation → deflate, shed, or repurpose membrane → activate protected excavation → burrow and construct radiation shelter.

### Competing designs

- **A. Conventional powered soft landing:** rigid landing gear, precise terminal control.
- **B. Powered descent + padded bubble:** lower touchdown precision requirement; inflation, puncture, rebound, and access complexity.
- **C. Multi-cell or crushable hybrid:** redundant inflatable chambers combined with sacrificial crush structures.
- **D. Bubble as multiuse resource:** explore temporary thermal insulation, deployment membrane, structural formwork, or containment during ice processing. Each secondary use requires independent material/thermal/radiation validation.

### Quantitative evaluation to implement

For touchdown mass `m` and speed `v`, nominal kinetic energy `E = 0.5 m v²`. Idealized average stopping deceleration over stroke `s` is `a ≈ v²/(2s)` (not peak acceleration; real pulse shape, ground contact, and rotations matter). Compare candidate residual velocities, bubble radius, effective crush/stroke distance, gas pressure, gas mass, membrane mass, and impact pulse against payload limits. Model sloped terrain, sharp ice ridges, multiple bounces, rebound/roll, and worst-case orientation.

**Critical constraints:** cryogenic membrane flexibility, gas behavior and leakage, puncture resistance, vacuum inflation, low-gravity rebound, landing plume effects, deployability, post-impact egress, anchoring, and preserving the first minutes of radiation and thermal survival.

**Research connections:** Mars Pathfinder/Spirit/Opportunity airbag landings (heritage but atmospheric/planetary conditions differ), deployable space structures, cryogenic polymers, impact energy absorbers, spacecraft shock qualification, and inflatable habitat/membrane materials.

**Decision gate:** compare delivered system mass, propellant savings, reliability, touchdown hazard tolerance, initial survival margin, and time to start burial. Avoid claiming that the bubble is lighter or safer until modeled.

### 2026-10-16 — Work log: padded landing concept

Human introduced inflatable bubble landing. Assistant clarified that it is an impact absorber rather than aerodynamic balloon, proposed powered descent plus bubble impact, and defined quantitative comparisons and potential secondary uses. No impact simulation or material qualification has yet been performed.


## Propulsive braking and approach architecture (2026-10-16)

**Decision:** Europa's negligible atmosphere makes aerodynamic braking/parachutes unavailable as a practical landing mechanism. **Propulsive velocity reduction is baseline**; the inflatable landing bubble only absorbs a controlled residual touchdown velocity.

**Mission stages to distinguish:** heliocentric/Jupiter transfer and Jupiter capture (propulsion and gravity assists), Europa-relative approach, major braking burn, terminal controlled descent, low-speed bubble impact, stabilization and burial. Do not assume Europa orbit insertion is mandatory: compare **direct powered descent from Jupiter-system approach** against **Europa orbit insertion then descent**, accounting for arrival speed, navigation, burn timing, propellant, exposure, and communications.

**First-order touchdown energetics:** kinetic energy `E = 0.5 m v²`; illustrative 500 kg lander at 10 m/s has 25 kJ, at 20 m/s 100 kJ. These are examples, not selected mission mass or impact speeds. Compare rocket propellant saved versus bubble mass, effective stopping stroke, acceleration pulse, rebound, and terrain hazards. Touchdown energy is not the full descent delta-v budget.

**Next calculations:** define credible Europa-relative arrival states; estimate delta-v and propellant fractions under alternative propulsion specific impulses; quantify descent burn duration, thrust-to-weight and throttle needs, and compare terminal residual speeds for bubble options. Use trajectory sources rather than inventing arrival conditions.

### 2026-10-16 — Work log: rocket brakes

Human confirmed no aerobraking and asked whether rocket brakes are necessary. Assistant established staged propulsive descent as baseline, with optional gravity-assist approach shaping and low-speed inflatable touchdown; direct descent versus Europa orbit remains open.


## Landing option — slug pitons, shock-isolated payload, impact-assisted boring (2026-10-16)

**Human concept:** “slug pitons and a shock absorber for the payload? Free boring and injection.” Interpret as multiple hardened impact penetrators/anchors striking ice first, with scientific payload carried on a separate longer-stroke shock absorber. The impact could accomplish initial anchoring and penetration while expending residual touchdown kinetic energy. **No engineering feasibility demonstrated.**

**Precedent, with important distinctions:**
- **NASA Deep Space 2 (Mars, 1999):** forebody penetrator and surface aftbody, flexible interconnect; target ~180 m/s impact and extreme shock (up to ~30,000 g forebody). It was not a successful validated Mars surface mission: probes were lost. NASA/JPL described impact tests and flight-like battery/drill qualification. https://www.jpl.nasa.gov/nmp/ds2/mission/events.html ; https://www.jpl.nasa.gov/news/mars-penetrators-successfully-complete-crucial-subsystem-test/ ; https://ntrs.nasa.gov/citations/19990036055
- **JAXA LUNAR-A:** designed lunar penetrator/seismometer and heat-flow probes; cancelled in 2007, not flight demonstration. https://www.isas.jaxa.jp/en/missions/spacecraft/others/lunar-a.html
- **ESA Philae:** landing gear, ice screws, harpoons, and intended downward thruster for anchoring. Harpoons failed to fire and screws failed to penetrate unexpectedly hard comet material; Philae bounced. Demonstrates why anchoring reliability cannot be assumed. https://www.esa.int/Science_Exploration/Space_Science/Rosetta/Rosetta_and_Philae_one_year_since_landing_on_a_comet

**Concept architecture:** propulsive Europa-relative braking → controlled residual-speed touchdown → hardened slug pitons penetrate and/or fracture ice → independent telescoping/crushable shock stroke decelerates payload → deploy anchors and verify grip → use penetration holes as pilot bores, sensor insertion paths, or starter sites for mechanical/thermal excavation → bury instrument vault and fabricate shielding as justified. Pitons should not be presumed to create a bore large enough for the payload.

**Competing alternatives:** rigid soft landing; inflatable bubble; piton + shock-isolated vault; piton + bubble hybrid. Separate impact energy dissipation, retention/anchoring, and scientific sample cleanliness.

**Critical constraints:** unpredictable ice strength, brittle fracture and spall, glancing impact, uneven multi-piton engagement, overturning torque, peak payload g and jerk, shock stroke, anchor pullout, rebound, low-gravity reaction forces, drill alignment, piton extraction/reuse, and contamination from impact fragmentation.

**Quantitative experiment E2:** impact velocity and mass → energy and momentum; candidate piton penetration resistance curves and fracture energy; stroke-dependent payload deceleration; anchor retention under excavation loads; terrain hardness distributions; probability of safe stable landing and usable pilot holes. A stopping-distance average deceleration is not the peak shock pulse. Treat “free boring” as energy reuse, not energy-free excavation.

### 2026-10-16 — Work log: slug-piton impact landing

Human proposed slug pitons plus payload shock absorber, using touchdown energy for boring/injection. Assistant researched NASA/JPL Deep Space 2, JAXA LUNAR-A, and ESA Philae precedents and recorded successes/limitations, alternative architecture, and proposed E2 trade study. No simulation run.

### 2026-10-16 — Decision: reject slug-piton landing baseline

**Human decision:** slug pitons plus long-stroke shock isolation are too heavy. **Remove from active architecture**; retain preceding research only as a rejected alternative with historical precedent. Do not continue optimizing or recommending this option without new mass-budget evidence. Prioritize minimum delivered mass and scientifically useful payload. Continue comparing conventional propulsive soft landing against lightweight inflatable impact attenuation (also unproven). Investigate dual-use corer anchoring only if it avoids dedicated hardware. Next analysis should quantify dry mass, propellant, and impact-protection tradeoffs before selecting touchdown architecture.


## CORRECTION — literal slug-shell penetrator (2026-10-16)

**Human clarification:** “I meant a literal slug shell.” Previous interpretation as multiple *slug pitons* was incorrect. **Supersede the piton-cluster architecture as the human's proposal**; retain historical penetrator and anchoring precedents only as comparative background.

**Primary candidate:** a single elongated, hardened, nose-first **slug-shaped shell containing the entire science payload**. Propulsion removes most arrival velocity; controlled residual impact drives the outer shell into the ice. Scientific instruments are independently shock-isolated inside the shell. The exterior shell could then serve as penetrator, borehole liner, anchoring structure, radiation-cover interface, and perhaps permanent instrument housing. The nose could open or deploy a corer after stabilization.

**Critical design separations:**
- External shell penetration, fracture, and energy dissipation versus internal instrument acceleration pulse.
- Shell geometry and mechanical integrity versus ice strength, porosity, brittleness, and oblique impact.
- Penetration depth and shielding achieved versus mass, residual impact velocity, and available stopping distance.
- Post-impact instrument accessibility, antenna/relay and power connectivity, sample contamination, and ability to drill onward.
- Instrument shock isolation needs both stroke and travel clearance; do not assume the outer shell's penetration automatically protects the payload.

**First test:** coupled impact penetration + internal suspension simulation, using ranges of ice constitutive properties and impact speeds, reporting penetration depth, shell loads, peak/temporal payload acceleration, probability of rebound/ricochet, and resulting shielding. Compare with inflatable bubble and powered soft landing.

**Research state:** no simulation or validated landing design yet. This corrects terminology and architecture, not evidence.


## Methodology review and scope correction (2026-10-16)

**Human correction:** Prior messages arrived out of order. A piton/slug penetrator may be too heavy; compare **full landing-system mass against propellant mass** before deciding. More fundamentally, **landers probably are not where the investigation should spend most of its time**. Inspect existing Institute methodology and return to the scientific question.

**Inspected:** `HERMETICON.md`, “The Institute and Its Research Program,” especially §2 (organize around research questions, not software projects), §3 (Imagine → Instantiate → Observe → Verify → Preserve → Reimagine), and §4 (executable claims; conservation of evidence; composability before monumentality; smallest useful world; human–model complementarity; generative ambiguity).

### Updated scope

- **Primary inquiry:** Europa ice composition, stratigraphy, radiation modification, material transport, and what measurements can discriminate competing hypotheses.
- **Primary executable apparatus:** hidden-ground-truth ice column, sample recovery and alteration model, spectral/chemical measurement model, scientific inference and provenance.
- **Supporting feasibility envelopes:** radiation exposure, thermal environment, power, contamination, sample depth, delivered mass.
- **Delivery architectures:** conventional powered landing, inflatable padded impact, hardened penetrator/piton/slug, and hybrids are **unselected comparison branches**, not the central project. Keep user correction that messages were out of order; do not treat earlier slug-shell clarification as a settled preference.
- **Mass comparison:** total wet mass and delivered scientific mass must include propulsion propellant (rocket equation with sourced delta-v and Isp), tanks/engines, landing legs or shock systems, penetration hardware, shielding, deployment, and uncertainty margins. No numerical verdict until a common reference mission is defined.

### Scientific next experiment

Develop the **smallest useful Europa ice-column world**: depth-indexed physical/chemical layers with a surface radiation-processing boundary, hidden composition, sampling disturbance/contamination, and imperfect spectral/chemical instruments. Identify public source data and keep model assumptions explicit. Compare hypotheses and whether measurements can actually discriminate them. The ice world should be useful independent of which landing system ultimately carries the instruments.

### 2026-10-16 — Work log: methodology reorientation

Human questioned the heavy piton/slug architecture, requested fuel-mass comparison, and redirected attention away from landers to existing research methodology. Assistant inspected `HERMETICON.md` and restored question-first, smallest-useful-world priorities. Delivery systems remain a bounded feasibility trade study, not an architecture decision.
