# 🐉 2026-10-11 — Hermeticon: construction and experimental record

**Ledger note, not operational authority.** Executable source: https://github.com/bonoj/bonoj.github.io/blob/master/jit/hermeticon/index.html ; public: https://bonoj.github.io/jit/hermeticon/ . Shell conventions: Home/BAUBLE.md. Delivery: Gate/README.md.

## 🧭 Intent and construction

Hermeticon is a phone-first glass vessel of 100,000 discrete colored BBs, built to explore legible emergent behavior through inexpensive, perturbable systems. The shell is inherited from the JIT bauble pattern: Three.js 0.180.0, orbit/pinch, inspect panel, invariants, fixed timestep 0.008 seconds, vessel outer radius 10.25, inner 10.07, thickness 0.18. Bead confinement uses radius 9.83.

The particle state uses three Float32Arrays of length 300,000 for positions, velocities and colors, plus a 44³ Int32Array spatial hash. Initial deterministic RNG seed 918273. Initial bead locations are rejection-sampled within radius sqrt(76); velocity components initially approximately ±4.5. One Three.js Points geometry displays all beads with dynamic positions and vertex colors; point material size 0.065. This is NOT 100,000 mesh spheres.

Each fixed step applies weak swirl/stirring, central radial acceleration (by mode), a speed cap, wall response, and approximate bead contacts. Wall response uses factor 1.96 against outward normal velocity (restitution approximately .96). The 44³ grid holds only ONE candidate bead per occupied cell; contacts are checked within distance 0.19 and resolved by a normal impulse if approaching. Consequently contact counts represent approximate sampled interactions, NOT all hard-sphere contacts. The method is roughly O(N), but is not physically exact, and dense cells miss contacts. Emergent hollow center, bands and outer-shell crowding must be interpreted in that context.

## 🧪 v1 and v2 — emergent shell, gravity and Zero Point

Initial observation: the 100k cloud formed strong radial structure, including a hollow center and a dense exterior, sometimes near 60 FPS on mobile. No physical equilibrium was established.

v2 added a button labeled ZERO POINT. It was a persistent outward radial acceleration from origin, approximately 18/(1+0.22*r²), not an actual particle emitter or quantum effect. The user judged it uninteresting and suspected FPS cost. Crucially the slow report below had Zero Point OFF; causality was NOT established. Gravity offered Strong, Overwhelming and Black Hole. Black Hole marks beads within radius .55 swallowed, zeros their state and skips them on later steps; capture persists after mode changes until refresh/reset. Zeroed vertices may remain at origin in the point buffer.

v2 report A: simulated 90.576 s, FPS 59.93, captured 87,894, active 12,106, mode Overwhelming, Zero Point off, no reported invariant failures. Active radial shell counts: [21,218,454,553,768,899,1129,1650,2385,4029].

v2 report B: simulated 28.704 s, FPS 17.01, captured 0, active 100,000, mode Strong, Zero Point off, contacts 8,159,213, wall bounces 1,050,784, no reported invariant failures. Radial counts: [303,867,1167,1609,2009,2525,3373,5579,13677,68891]. The outermost equal-width shell held 68.891% of beads, but raw counts are NOT densities: spherical shell volumes vary, requiring normalization by 4π/3 (r_outer³-r_inner³). The 17 FPS cause remains undiagnosed: render, simulation, throttling and scheduling were not isolated.

## ⚙️ v3 — gravity cleanup

User instruction: remove Zero Point entirely; insert Zero G and Microgravity into the ordered gravity cycle. Implemented build hermeticon-v3-shell-v7, commit 29158dacce1b02390b391f03d9a604f76119fab8.

The sole gravity control now cycles ZERO G → MICROGRAVITY → STRONG → OVERWHELMING → BLACK HOLE → repeat; starts Strong. Radial acceleration numerator by mode is 0, .3, 9, 105, 230; denominator is 1+r² times coefficient .12 for modes 0–2, .055 for mode 3, .025 for mode 4. Overwhelming has a repulsive core inside radius 1.7: acceleration = -125(1.7-r). Field acceleration is clamped ±500. Speed caps: 26 for modes 0–2, 42 for mode 3, 85 for mode 4. These are tuned simulation forces, not calibrated gravitation. Zero G means zero CENTRAL field, not no swirl or collisions. v3 commit and readback verified; no assistant-run public-browser validation.

## 💥 v4 — ✦ IMPULSE

Assistant proposed a new experiment: can a localized kick propagate a coherent wave through 100k chaotic BBs, or does the medium scramble it? User approved. Build hermeticon-v4-shell-v7; commit 846a880f67c0ba8ebc33d6544169d556ad3f303c.

Each tap instantly kicks existing active beads with 0.0001 < radius < 3.5. Velocity increment is outward along unit radius with magnitude 15(1-r/3.5). It does not create beads, persist as a field, or reset anything. Repeated taps add more kicks. Instrumentation: impulse count, last impulse step, beads affected, scalar sum of kick magnitudes, last 12 events, time since last tap and summed radial velocity per ten equal-width shells. The field called lastImpulseMomentum is a scalar sum of velocity increments assuming unit bead mass, NOT vector momentum; radialMomentumByShell is a snapshot, NOT a measured wavefront.

### User's v4 report (2026-10-11T08:53:46.747Z)

Viewport 384×694, pixel ratio 1.7. Approx FPS 60.4. Render calls 14, triangles 20,160, geometries 14, textures 0. Simulation: 7,152 steps × .008 = 57.216 simulated seconds; 24.144 dropped seconds. Invariant and containment checks 25 each, zero failures. Generic containment checkedObjects=0, so the direct Hermeticon outside=0 statistic is the meaningful per-bead containment scan.

100,000 total; 16,185 active; 83,815 captured by black-hole horizon; zero outside; final gravity ZERO G. 84 impulses; last step 6914, affected 274, scalar kick total 997.05; 1.904 simulated seconds since last impulse. Approximate contacts 11,423,898; wall bounces 966,629. Mean squared speed 228.172; angular momentum per bead [7.669,-7.767,7.679].

Final radial counts, inner to outer: [3,41,104,198,378,713,1199,2093,3823,7633]. Outermost shell held ~47.2% of surviving beads; again this is raw occupancy, not volume-normalized density. Radial momentum sums: [-3.24,-5.36,-59.43,21.88,171.94,212.51,365.55,517.59,528.77,65.47]. Most outer shells show net outward radial velocity at inspection, but one snapshot cannot demonstrate a traveling wave.

Last 12 impulses (simulation step / affected beads / summed kick):
- 6349 / 5906 / 27802.00
- 6369 / 5888 / 27585.84
- 6387 / 5804 / 26647.85
- 6408 / 5720 / 26898.05
- 6482 / 5320 / 24524.84
- 6544 / 5086 / 22835.86
- 6589 / 4949 / 22589.55
- 6665 / 167 / 529.82
- 6746 / 733 / 2782.20
- 6817 / 480 / 1599.29
- 6878 / 262 / 984.82
- 6914 / 274 / 997.05

Between steps 6589 and 6665, affected beads collapsed from 4,949 to 167 (96.6% decline) in 76 steps = .608 simulated seconds. The central region evidently lost most accessible beads. A black-hole episode followed by Zero G is a PLAUSIBLE explanation, NOT proven: the report records final mode but no mode-change history or capture timeline. Multiple impulses and redistribution may also contribute. Interaction trace contains camera gestures and inspect toggle but not gravity/impulse button event timestamps. The 84 impulses are established by the simulation counter.

A sample FPS of 60.4 does NOT imply continuous real-time simulation: 24.144 seconds of dropped fixed-step time were reported. A clean shock-wave test needs a steady population, one impulse, a time series of normalized shell density/radial velocity and perhaps energy, plus a control run. Propagation speed and attenuation were not measured. Conclusion: impulse works as a perturbation, but coherent shock-wave transport is not yet demonstrated.

## 🦠 v5 — 🦠 PHAGE

User proposed one RED growing bead-eating phage randomly injected inside the volume per tap; agreed on 🦠 icon, visible solid body, growth by consumed volume. Implemented build hermeticon-v5-shell-v7, commit af9d255f68d9478d7009eb6bec011d27afa81063. Source syntax and GitHub readback verified. NO v5 runtime report received yet.

Each tap rejection-samples a position inside sphere with margin for initial radius 0.3. Phage velocity components initialize roughly ±3.5. A shared red IcosahedronGeometry(1,2) and red MeshStandardMaterial with subtle emission create individual visible solid meshes. Phages move ballistically and bounce at wall radius 9.83 minus their own radius, with approximate restitution .9. No explicit gravity on phages, steering, phage-phage collisions or mass/momentum exchange from feeding.

Each active bead is tested against every phage after its own integration and wall response, before its approximate bead-grid contact. Contact when center distance ≤ phage radius + 0.095 bead radius. The bead is marked swallowed[i]=2, distinct from black-hole swallowed[i]=1, and its position, velocity and RGB are zeroed. Phage eaten counter increments. Radius = cbrt(0.3³ + eaten × 0.095³), conserving assumed material volume up to common factor 4π/3. Black-hole capture wins if it happens earlier in the step. The GPU Points draw count remains 100k, so zeroed beads may still produce artifacts rather than being physically removed from buffer.

Inspector now reports phageSpawns, phageConsumed, and individual phage position, radius and eaten count; black-hole captured remains separate. Current feeding checks are O(active beads × phage count); many phages may cause an FPS regression. A phage-aware spatial index is a potential optimization, not yet implemented. Large phage wall constraints, overlap behavior and rendered zeroed vertices also deserve testing.


## 🧪 v5 results — extinction in two independent runs

**Run A (2026-10-11T08:57:40.564Z)**: nine phages, one impulse, gravity OVERWHELMING at inspection. In 35.160 simulated seconds (4,395 steps), **100,000/100,000 beads were eaten**, zero black-hole captures, zero active beads. **Phage #1 ate all 100,000**, growing to radius **4.410**; the other eight remained radius 0.300 with zero eaten. FPS sample **61.87**; dropped simulation time **0.025 s**. Render 23 calls/21,780 triangles. Contacts 2,276,271; wall bounces 105,191. One impulse at step 1202 affected 4,482 beads, scalar kick 17,794.65. No reported invariant or containment failures.

**Run B (2026-10-11T08:58:42.443Z)**: three phages, **zero impulses**, gravity OVERWHELMING. In 17.696 simulated seconds (2,212 steps), again **100,000 eaten**, zero black-hole captures, zero active. Phage #1 ate **98,960** (radius **4.395**), #2 ate **367** (radius **0.699**), #3 ate **673** (radius **0.845**). FPS sample **68.92**, but **42.741 seconds of dropped simulation time** across ~60.4 wall-clock seconds. Render 17 calls/20,700 triangles; contacts 2,145,488; wall bounces 81,577. No reported invariant or containment failures.

**✅ Win:** Final phage radii fit the intended cube-root material-volume law. Bead consumption accounting reached the full 100k without black-hole involvement, even with no impulse in Run B.

**❌ Failure:** Catastrophic ecological collapse. A single first phage consumed all beads in Run A and **98.96%** in Run B. These are not persistent predators; they are world-ending absorbers.

**⚠️ Mechanistic diagnosis:** In v5 the phage radius grows **immediately inside the per-bead processing loop**. One consumed bead extends the contact radius before the next bead is tested, enabling a same-step geometric feeding cascade. Phages are checked in insertion order, favoring earlier phages. These are plausible explanations for the first-mover monopoly, though no per-step consumption history was collected. High instantaneous FPS in Run B concealed a very large fixed-step throughput deficit; the exact performance cause remains undiagnosed.

## ⚙️ v6 — throttled feeding, collision, capture, digestion

User requested significant throttling and asked whether phages should eat smaller phages or rebound. We chose **both**, depending on relative size. Sustained one-second free collision was rejected because moving phages would usually separate much sooner. Instead, a large phage **captures immediately** on contact, then digests the attached smaller one over time.

**Build `hermeticon-v6-shell-v7`**, commit **`72282c1376b1dfa0095f6b89a81d29ed2341d30e`**. GitHub syntax/readback verified. User's screenshot visibly shows this exact build running at the public JIT route.

Implemented:
- **20 BB per simulated second per phage** maximum feeding. A phage earns `20*dt = 0.16` bead credit per 0.008-s step, with credit capped at **1**. A bite requires both credit ≥1 and contact. Starvation cannot accumulate a giant burst budget.
- **Radius frozen through the bead-processing pass**. Each phage grows only after that pass, eliminating the v5 same-step radius cascade.
- Feeding priority rotates by simulation step, reducing but not eliminating array-order bias.
- **Comparable phages rebound** on sphere overlap, with positional separation and relative-normal bounce impulse. A phage with radius **at least twice** another's captures the smaller.
- Captured phage is marked inactive and assigned a host; its visible mesh follows the host and shrinks while its entire existing volume transfers progressively over **2 simulated seconds**. The smaller phage's previously eaten BBs are part of its material volume. Captured phages no longer eat or move independently.
- Added counters: `phageCaptures`, `phageDigestions`, `phageBounces`, `peakFeedingPerStep`, `feedRatePerSecond`, `digestSeconds`, `accountedBeads`. Per-phage records include ID, alive, host, digestion progress, feeding credit, last-step feeding, peak per-step feeding, eaten BB count, radius and position.
- Existing bead physics, gravity cycle, impulse, approximate one-candidate grid contacts and black-hole capture were preserved.

**⚠️ Rate nuance:** 20 BB/s is a **ceiling under continuous contact**, not a guaranteed rate. With a maximum stored credit of 1 and replenishment once per step, `peakFeedingPerStep=1` is structurally expected; it does not demonstrate sustained throughput.

**⚠️ Complexity:** BB-phage feeding checks remain roughly O(active BBs × all spawned phages) in the worst case; phage-phage pair checks are O(P²). Dead phages remain in the list. No phage spatial broadphase, swept collisions, or entity compaction has been implemented.

## 📊 v6 user experiment — 56 phages and a surviving bead shell

**Timestamp 2026-10-11T09:07:19.962Z**. The user supplied a screenshot showing red phages of varied radii within the glass sphere and a luminous thin exterior bead band. Visible build label: `hermeticon-v6-shell-v7`. Gravity control: **MICROGRAVITY**. This is **actual browser visual evidence**, beyond GitHub commit/readback.

| Instrument | Observed |
|---|---:|
| Spawned phages | **56** |
| Phage captures | **18** |
| Reported completed digestions | **25,664 — INVALID** |
| Phage-phage bounces | **50** |
| BBs active | **15,705** |
| Black-hole captures (historical) | **77,943** |
| BBs consumed by phages | **6,352** |
| Total BBs accounted | **100,000** |
| Fixed steps / simulated time | **8,380 / 67.040 s** |
| Dropped simulation time | **0.186 s** |
| Sample FPS | **61.71** |
| Render calls / triangles | **52 / 27,000** |
| Approx bead contacts / wall bounces | **8,610,990 / 2,500,173** |
| Containment checks / violations | **28 / 0** |
| Invariant checks / failures | **28 / 0** |
| Feeding ceiling / peak per step | **20 BB/s / 1 BB** |
| Impulses | **0** |

**Accounting:** 15,705 + 77,943 + 6,352 = **100,000**. This establishes bead count partitioning at inspection, **not** global conservation of phage material through capture chains.

**Distribution:** 15,695 of 15,705 survivors (**99.936%**) occupied the outermost equal-width radial shell. Full shell counts: `[0,0,0,1,1,2,1,0,5,15695]`. These are **counts**, not volume-normalized densities. Outermost shell radial momentum sum **−268.31**, a snapshot rather than a wave measurement.

**Phage examples:** #1 radius 0.857/eaten 622; #2 0.908/769; #3 0.861/645; #4 0.854/607; #5 0.878/667; #6 0.884/620; #7 0.872/587; #8 0.816/571; #9 0.454/78. Several later phages remained radius 0.300 and ate nothing. The report marks 18 of 56 as captured, leaving **38 living phages**. Captured #10 (host #6), #17/#18/#29/#34 (host #7), #22/#45 (host #4), and others all show digestion=1. This illustrates successful capture state transitions but also reveals a counter defect.

**✅ Wins:** The world remained visually legible and lively; different-sized red predators were observable. Phage consumption slowed dramatically relative to v5. Multiple phages each consumed hundreds instead of one monopolizing 100k. Bead accounting and reported invariants passed. FPS and fixed-step throughput were mutually consistent in this session: ~61.7 FPS and only 0.186 s dropped across ~67 s. No impulse was required. The screenshot verifies the v6 build is actually served and rendered.

**⚠️ Gravity interpretation:** The final mode was MICROGRAVITY, yet 77,943 BBs had been captured by the black hole earlier. Captures persist after mode changes. The interaction trace records only the inspector toggle, **not gravity-mode changes or phage spawns**; we cannot reconstruct when the black-hole phase occurred. Therefore this is not a controlled microgravity-only predation run.

### ❌ Confirmed instrumentation defect — repeated digestion completions

The report claims **25,664 digestions despite only 18 captures**. Code inspection identifies the bug: a captured phage remains in the digestion update forever; once `digest >= 1`, `phageDigestions++` fires on **every subsequent simulation step**. Its volume transfer uses `digest-before`, which becomes zero after completion, so this bug alone does not repeat the volume transfer. The **completion count is invalid** and must be repaired by a transition-only increment and an invariant `digestions <= captures`. The reported absence of invariant failures does not cover this semantic error.

### ⚠️ Other correctness and modeling risks

1. **Host chains:** A phage can be captured after it has already captured another. The digestion code looks up host by ID but does not require that host to be alive. Volume may transfer into an inactive intermediate host and fail to reach the final living predator. This is a code-level risk, **not a measured mass-loss incident**.
2. **Global material volume not instrumented:** Need to account for seed phage volume on spawn, live phage material, digestion-in-flight material, consumed BBs and black-hole sinks. Bead count alone cannot prove material conservation across phage predation.
3. **Collision approximations:** Pairwise discrete collision tests can tunnel at high speed; position separation can briefly push phages past the wall. Attached digestion mesh uses a simple offset rather than geometrically exact engulfment.
4. **Scaling:** With many phages, nested BB contact scans and P² pair checks may cost more, particularly when all 100k BBs remain active. This v6 run had many black-hole-captured BBs, lowering the active-bead workload.
5. **Rendering:** Consumed BB vertices remain in the 100k point buffer and are zeroed, not compacted. GPU workload is not proportional to live BB count.
6. **Metric semantics:** `peakFeedingPerStep=1` confirms the imposed ceiling, not an observed time-averaged rate. Generic containment checked 38 objects and reported no violations; BB-specific `outside=0` separately scanned active beads.
7. **Performance:** 61.71 FPS is a sampled value on one phone, not a guarantee for sustained high phage counts. Unlike v5 Run B, dropped simulated time was small in this run.

## 🧭 Model recommendations — ranked

**P0 · Surgical correctness, no feature expansion**
1. Fix the repeated `phageDigestions` increment; assert `0 <= completed <= captures <= spawns`.
2. Add a **global volume-equivalent ledger**: initial BB material, free BB material, BB mass in phages, black-hole sink, original phage seed material, attached digestion material. Explicitly verify conservation at each step or inspection. Handle host-of-host capture by transferring to ultimate living owner or making nested capture temporarily ineligible.
3. Count living, digesting, fully digested and spawned phages; assert these partition correctly. Track host ancestry and reject cycles.
4. Log per-phage rolling feeding rate and capture/digestion event timestamps. Keep **20 BB/s**, 2-s digestion, 2:1 capture threshold and existing visuals unchanged for now.

**P1 · Controlled science**
5. From fresh reloads, compare **1, 3, 9 and 56 phages** in fixed MICROGRAVITY, with no black-hole phase or impulses. Sample at 10/30/60/120 simulated seconds; compare feeding rates, survival, volume accounting and dropped time.
6. Record gravity transitions, impulse taps, phage spawns, captures and digestions in a bounded step-indexed event history; camera gesture trace is insufficient for causal reconstruction.
7. Profile physics-step CPU time, draw time and dropped time if the 56-phage configuration becomes expensive with all 100k beads still active.

**P2 · Only if experiments demand it**
8. Introduce phage spatial indexing if measured costs warrant it, rather than redesigning the proven bead core preemptively.
9. Add swept collisions or a post-contact wall correction if tunneling or escaped phages are observed.
10. Preserve the strong visual language. Do not add organism reproduction, new controls, or additional mechanics before fixing instrumentation and conservation.

**Recommendation:** Make the next code change **surgical**: correct digestion completion, instrument material transfer and event history, and repeat a clean experiment. The v6 behavior is compelling enough to study rather than immediately embellish.

## 🗂️ Chronology and epistemic status

| Build | Change | Evidence |
|---|---|---|
| v1 | Initial 100k chaotic BB vessel | architecture and visual observations |
| v2 | Zero Point and three gravity modes | two measured inspector reports |
| v3 / 29158dac | remove Zero Point, add Zero G and Microgravity | GitHub commit/readback |
| v4 / 846a880f | localized impulse + radial instruments | commit/readback and full user report |
| v5 / af9d255f | red growing phages | two user reports: total extinction, catastrophic growth |\n| v6 / 72282c13 | throttled feeding, bounce, capture, digestion | user screenshot + 56-phage inspector report; completion counter bug found |

## ⚠️ Open experiments and cautions

1. Repair v6 digestion completion count; add material conservation checks including nested phage captures.
2. Run controlled v6 feeding tests without a black-hole phase; log gravity transitions, spawns and per-second feeding.
3. Normalize shell counts by shell volumes before describing densities.
4. Never equate sparse grid contact count with all real particle collisions.
5. Instrument gravity transitions and capture timeline to explain sudden changes in central population.
6. Distinguish instantaneous FPS, per-step CPU cost, render cost and dropped simulation time.
7. For the impulse hypothesis, measure time-resolved shell statistics after a single controlled tap rather than inferring a propagating wave from snapshots.
8. Treat Ledger as a historical account; consult live source before changing implementation.

**🐉 Arc of the experiment:** a chaotic bead medium → selectable central forces and absorbing horizon → one-shot radial disturbances → a red inhabitant that consumes the substrate and enlarges its own geometry. This is a progression from visual emergent structure toward consequential, composable inhabitants of an executable world.
