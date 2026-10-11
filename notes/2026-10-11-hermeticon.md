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


## 🚀 v7 — gravity-driven phages and reaction exhaust (2026-10-11)

**Build:** `hermeticon-v7-shell-v7`; GitHub commit `e5c380b4` (prefix). The user independently verified this build in the public mobile browser through screenshot and three inspector snapshots. The experiment extends v6 rather than replacing its 100k-bead simulation.

**Intended behavior:** Phages now experience the active central gravity mode, can perceive a larger approaching predator, and can spend accumulated material to eject **yellow BBs toward the threat**. Ejection returns consumed beads to the existing population and generates opposite recoil. This creates a survival tradeoff between size and maneuverability.

**Implementation details and semantics:**
- Phage gravitational acceleration varies by selected gravity mode and distance to the origin, with speed caps. The inspected mode was **STRONG**, with per-phage reported acceleration ranging roughly **0.9–8.0** across snapshots. These are computed accelerations, not a directly measured trajectory response.
- A predator must be **at least 2× the smaller phage's radius**. Threat selection also requires closing motion and a predicted close approach. The code considers nearby predators, then applies a short cooldown after an escape maneuver.
- Each triggered maneuver is intended to eject up to **four** previously swallowed BB slots at exhaust speed **18**, deduct the BB-equivalent volume from the phage, color those beads yellow, and impart reaction impulse. Exhaust uses the existing fixed bead arrays rather than increasing the nominal population.
- `exhaustFree` is populated by phage consumption; no material is invented for exhaust. `exhaustTotal` is cumulative, `yellowBBsActive` instantaneous, `exhaustReconsumed` cumulative, and `phageConsumed` represents current swallowed population (not lifetime meals). Reconsumption of a yellow BB is intended to count separately.
- Escape events include predator/prey IDs, distance, closing speed, BBs ejected, and delta-v. Per-phage telemetry includes gravity acceleration, current threat ID, exhausted count, escape successes/failures, and total thrust impulse.
- v6's repeated digestion-completion increment was repaired with a one-time `digested` transition; new checks assert completed digestions do not exceed captures and phages retain minimum material. **⚠️ This was not tested by the v7 reports**: they had zero captures/digestions.
- A material summary was introduced, but **global conservation through nested host chains and exhaust remains unproven**. The summary alone is not an invariant across all ownership states.

### 📊 v7 field measurements — one continuous session, three snapshots

All three reports are from the same browser session, **not independent trials**. The screenshot shows ten glossy red phages in a dense, flowing, white-bead vessel with the gravity control at STRONG. It is visually compelling but also establishes that no yellow exhaust is yet visible.

| Timestamp UTC | Sim time | Steps | FPS approx | Dropped sim time | Active BBs | Phage-consumed BBs | Phage bounces |
|---|---:|---:|---:|---:|---:|---:|---:|
| 09:24:13.676 | 18.032 s | 2,254 | **18.43** | 4.929 s | 98,633 | 1,367 | 2 |
| 09:24:29.197 | 26.688 s | 3,336 | **18.56** | 11.796 s | 97,244 | 2,756 | 8 |
| 09:25:20.669 | 59.168 s | 7,396 | **16.95** | **30.790 s** | 93,036 | 6,964 | 48 |

**Session conditions:** 10 phages spawned at steps `573,724,760,1261,1299,1473,1498,1523,1679,1704`; **0 black-hole captures**, **0 phage captures**, **0 completed digestions**, **0 exhaust**, **0 escape attempts/successes/failures**, **0 yellow BBs active**, and **0 thrust impulse** in all three snapshots. The inspector event history captured these ten spawns and an impulse at step **2611** affecting **65,434 BBs**, scalar momentum metric **712,073.08**. At the last snapshot, the impulse was **38.28 simulated seconds** old. Mode STRONG at inspection; the bounded event history contains no gravity-mode changes. No reported containment or invariant failures. At each snapshot `active + captured + phageConsumed = 100,000`.

**Feeding:** Total consumed grew 1,367 → 2,756 → 6,964 while ten phages survived. At the last snapshot phage radii were approximately **0.753–0.906** and individual eaten counts **466–837**. Their size ratios never approached the required 2:1 predator threshold. Therefore **zero escape attempts is expected, not evidence of failed escape code**. The screenshot does not demonstrate yellow exhaust; the feature is implemented but **unexercised** in these tests.

**Visual dynamics:** At 59.168 simulated seconds, the radial shell counts were `[13575,3245,1365,704,412,327,256,228,275,72649]`; **72,649/93,036 active BBs (~78.1%)** were in the outermost shell, while 13,575 remained in the innermost. This is an unusual bimodal-looking **count distribution**, not volume-normalized density. Earlier (18.032 s) counts were `[37220,17955,7507,4713,3461,2943,3022,3604,5675,12533]`. An impulse at step 2611 and continuing gravity/collisions confound simple causal attribution. Mean speed squared rose **9.733 → 23.154 → 66.388**. Bead contacts rose cumulatively **5.66m → 8.69m → 23.47m**; wall bounces **142,451 → 427,363 → 5,312,497**.

### ❌ Critical regression — sustained ~17–19 FPS

The last two v7 inspector reports plus the screenshot establish a serious **sustained performance regression** on the user's mobile browser. Approximate FPS fell to **16.95–18.56**, whereas a v6 56-phage report showed **61.71 FPS**. These runs are **not controlled equivalents**: v6 had **77,943 black-hole-captured beads** and only **15,705 active**, while v7 retained **93k–99k active**. The v6 run therefore performed substantially less live bead work despite having more phages. Do **not** claim that the v7 code change alone caused the whole slowdown.

**Dropped simulation time:** At ~90 seconds elapsed, only **59.168 s** had advanced and **30.790 s** had been dropped by the fixed-step scheduler. This is not merely a visual frame-rate issue; simulation throughput cannot keep up with wall-clock time. The drop grew from 4.929 to 11.796 to 30.790 s in the same session. Render calls were modest (**24, 24, 21**), triangles ~**21–22k**, but those numbers do not rule out particle-buffer uploads, GPU fill, or JS simulation costs.

**⚠️ Suspects, not established causes:**
1. Existing feeding implementation checks phage contact for every active bead against the phage list: approximately **O(A×P)** per physics step. With 93k–99k active beads, 10 phages and 125 target steps/s, the worst-case order is **116–124 million bead–phage candidate comparisons per simulated second**, before other bead work. **Important:** this scan existed in v6; it is a scaling bottleneck, **not proof of a newly introduced v7 defect**.
2. v7 adds phage gravity, per-phage predator prediction, event bookkeeping, and exhaust handling. Phage threat checks are approximately O(P²) per step, but with P=10 this alone is unlikely to explain such a large regression.
3. Gravity/impulse-driven bead distributions may increase bead collision work; v7 accumulated ~23.47m approximate contacts and ~5.31m wall bounces. Whether that is dominant requires measurement.
4. Particle positions/colors may still upload buffers for 100k points regardless of active count. Render call and triangle counts are insufficient for diagnosis.
5. Any allocation or heavy instrumentation inside per-step/per-bead loops could add overhead. No phase-level timing exists yet.

**⚠️ Do not diagnose by FPS alone.** The sample FPS, fixed-step backlog/drop, active bead count, phage count, collisions per step, and browser rendering must be recorded together. The v7 run had no exhaust, so **yellow-particle spawning itself cannot explain the slowdown**.

### 🧭 Proposed performance repair — measurement first, spatial feeding second

**P0 — Profile without changing behavior.** Instrument elapsed milliseconds per fixed physics step and its phases: bead integration/gravity, bead–bead contacts, bead–wall response, phage movement/gravity, phage–phage threat/collision, bead–phage feeding, buffer update, and frame render. Use lightweight aggregated counters/sampled timings (not per-bead logs). Report p50/p95 step time, max, simulated steps/frame, dropped time/frame, active bead count, P, and candidate comparisons. Ensure timing overhead is negligible. Establish baselines at **0, 1, 10 phages** in fresh STRONG-gravity runs with no impulse; measure with 100k active beads. If 0 phages is also slow, look at the bead core or rendering before optimizing predators.

**P1 — Spatialize bead–phage feeding if profiling confirms it.** Reuse the existing spatial grid. Each phage indexes **all cells intersecting its current sphere** (not only the center cell), with cell-range bounds updated as it moves/grows. Each bead tests only phages indexed in its own cell. Preserve frozen-radius-per-step feeding, 20 BB/s credit cap, deterministic tie-breaking/rotating priority, and material accounting. Reuse typed arrays or pooled lists to avoid allocation churn. Add `feedingCandidatesTested`, `feedingContacts`, and `feedingMs` to quantify the speedup. Validate correctness near cell boundaries and for large phages. An alternative phage-neighbor query against the bead grid may be preferable if it is cheaper; benchmark rather than presuppose.

**P2 — Only then tune secondary costs.** If phage–phage O(P²) dominates at high P, introduce a predator broadphase. If the bead engine dominates at P=0, optimize its hot loops without changing the collision model's observable behavior. If rendering dominates, investigate dynamic attribute uploads and overdraw. Never reduce 100k beads, silently change physics, or remove the phage mechanics merely to make FPS look better.

**Validation gates:** Compare v7 and optimized build under matched settings and active population; target recovery toward **~60 FPS** on the same phone while preserving 100k beads, bead accounting, no containment violations, and small dropped-time accumulation. Compare **0/1/10/56 phages**, and test a deliberately oversized predator separately so the yellow-BB exhaust/escape code actually executes. Record escape trajectory, mass debit, opposite exhaust momentum, reactivated yellow BBs, and whether a fleeing phage survives. **No successful escape claim until a real escape event is observed.**

**Priority decision:** Fix performance and validate the existing mechanics before adding more features. The current visual result is worth preserving.

## 🗂️ Chronology and epistemic status

| Build | Change | Evidence |
|---|---|---|
| v1 | Initial 100k chaotic BB vessel | architecture and visual observations |
| v2 | Zero Point and three gravity modes | two measured inspector reports |
| v3 / 29158dac | remove Zero Point, add Zero G and Microgravity | GitHub commit/readback |
| v4 / 846a880f | localized impulse + radial instruments | commit/readback and full user report |
| v5 / af9d255f | red growing phages | two user reports: total extinction, catastrophic growth |\n| v6 / 72282c13 | throttled feeding, bounce, capture, digestion | user screenshot + 56-phage inspector report; completion counter bug found |\n| v7 / e5c380b4 | phage gravity, yellow BB reaction exhaust, escape telemetry; digestion counter fix | public screenshot and 3 reports; 17–19 FPS regression; escape not yet triggered |

## ⚠️ Open experiments and cautions

1. Repair v6 digestion completion count; add material conservation checks including nested phage captures.
2. Run controlled v6 feeding tests without a black-hole phase; log gravity transitions, spawns and per-second feeding.
3. Normalize shell counts by shell volumes before describing densities.
4. Never equate sparse grid contact count with all real particle collisions.
5. Instrument gravity transitions and capture timeline to explain sudden changes in central population.
6. Distinguish instantaneous FPS, per-step CPU cost, render cost and dropped simulation time.
7. For the impulse hypothesis, measure time-resolved shell statistics after a single controlled tap rather than inferring a propagating wave from snapshots.
8. Treat Ledger as a historical account; consult live source before changing implementation.

**🐉 Arc of the experiment (updated through v7):** a chaotic bead medium → selectable central forces and absorbing horizon → one-shot radial disturbances → a red inhabitant that consumes the substrate and enlarges its own geometry. This is a progression from visual emergent structure toward consequential, composable inhabitants of an executable world → gravity-bound predators that may sacrifice material to escape. The next problem is engineering: preserve the new causal richness while restoring mobile simulation throughput.

---

# Hermeticon — Human/Model Turn Chronicle

**October 11, 2026 · UTC**

This reconstructs the conversation from Hermeticon's inception through the v8 performance repair. Human turns are paraphrased for brevity, with spelling normalized. Each is followed by the model's response or the resulting engineering action.

I'll distinguish **known message timestamps** from timestamps inferred from inspector reports. Where I cannot recover an exact message, I'll preserve the sequence without inventing dialogue.

## Act I — The vessel wakes

*08:27–09:03 UTC*

1. **08:27:01 — Human:** Test the entire pipeline. Build Hermeticon: 100,000 tiny BBs, chaotic collisions and bouncing, targeting 60 FPS.

   **Model:** Establishes the JIT simulation with a glass vessel, particle dynamics, containment, and instrumentation.

2. **08:36:58 — Human:** Instrument the simulation. Add a central zero-point injector and gravity modes including Strong, Overwhelming, and Black Hole.

   **Model:** Introduces adjustable gravity, the injector experiment, and associated measurements.

3. **08:46:15 — Human:** Remove the zero-point button. Add Zero G and Microgravity to the ordered gravity cycle.

   **Model:** Discards the ineffective injector and simplifies the controls.

4. **08:51:48 — Human:** Add a red phage button. Each tap spawns a random phage that consumes BBs and grows through collisions.

   **Model:** Implements visible, growing phages. Early trials reveal runaway feeding and rapid extinction of the bead population.

5. **09:00:03 — Human:** Throttle phage consumption substantially; accept a feeding limit of 20 BBs per simulated second.

   **Model:** Plans bounded feeding, phage collisions, size-dependent predation, and progressive digestion.

6. **09:02:27 — Human:** Build, instrument, and publish the revised phage mechanics.

   **Model:** Delivers v6, including feeding caps, phage capture, digestion, and telemetry.

## Act II — Phages become creatures

*Approximately 09:07–09:24 UTC*

The v6 inspection showed 56 spawned phages, 18 captures, 6,352 consumed BBs, and approximately 61.7 FPS with only 15,705 active BBs. It also exposed an erroneous digestion-completion counter.

The next human turn proposed something qualitatively different: phages should no longer merely eat and collide. They should be able to **sacrifice their own mass to survive**.

7. **Exact message time unavailable — Human:** “Phages are now affected by gravity. They may shed yellow BBs back into the bauble to thrust away from larger, potentially dangerous phages at the expense of mass. (Yellow BBs rejoin the population.) What will you instrument?”

   **Model:** Proposes threat prediction, gravity and velocity telemetry, mass-conserving exhaust, reaction momentum, escape outcomes, and bounded event histories.

8. **Exact message time unavailable — Human:** “Make it so!”

   **Model:** Implements and commits v7, with gravity-driven phages, yellow-bead exhaust, escape telemetry, and a correction to the repeated digestion counter.

## Act III — The performance wall

*09:24–09:25 UTC and subsequent turns*

9. **After 09:24:29 — Human:** Submits two v7 inspector reports, recorded at 09:24:13 and 09:24:29, then asks: “FPS issue?”

   **Model:** Identifies a sustained regression to approximately 18.5 FPS, with growing dropped simulation time. Suspects expensive bead–phage checks and proposes spatial lookup and profiling.

10. **After 09:25:20 — Human:** Shares a screenshot and a third inspector report, recorded at 09:25:20, showing 16.95 FPS, 30.79 dropped seconds, and ten living phages.

    **Model:** Confirms the slowdown is sustained. Notes that all ten phages are similar in size, explaining the absence of escape attempts. Corrects the earlier diagnosis: the feeding scan existed in v6, so the new code cannot be blamed without controlled measurements.

11. **Exact message time unavailable — Human:** “Update the Ledger with all recent work and your proposed solution to FPS issues.”

    **Model:** Updates the dated Hermeticon Ledger with v7 mechanics, three field reports, the performance regression, unresolved conservation questions, and a staged profiling/spatialization plan. Commit `65993720`.

12. **Exact message time unavailable — Human:** “Implement and sling.”

    **Model:** Implements v8 spatial phage-feeding lookup and sampled phase profiling, preserving the 100,000-bead model. Commit `243b15bd`. GitHub source readback and JavaScript syntax pass; public deployment and FPS improvement remain unverified.

13. **Current turn — Human:** “Let's see a summary of all timestamped human turns since we started with brief model responses for continuation between each turn. Correct any of my misspelled words :).”

    **Model:** Reconstructs this chronological human/model account, normalizes spelling, and explicitly distinguishes recovered message timestamps from report timestamps.

## The engineering arc

**v1–v3 · Physical substrate — 100k BBs**

Chaotic contacts, vessel containment, gravity modes, black-hole capture.

**v4 · Perturbation — Impulse**

Radial kicks, momentum and shell measurements.

**v5 · Consumption — Phages**

Growing predators; runaway population extinction reveals the need for constraints.

**v6 · Ecology — 20 BB/s**

Feeding limits, competition, capture, digestion, and size-dependent interactions.

**v7 · Survival — Yellow exhaust**

Gravity-driven creatures that can sacrifice material for propulsion.

**v8 · Computational recovery — Spatial lookup**

Localized feeding checks and profiling, awaiting mobile performance measurements.

## What matters for continuation

The central progression is from **particles → physical interactions → consumers → bounded ecological behavior → creatures making survival tradeoffs**.

Three unresolved questions now define the next experiment:

- **Performance:** Does v8 recover mobile frame rate with approximately 100,000 active BBs and ten phages?
- **Behavior:** Can an intentionally oversized predator provoke yellow exhaust and a measurable escape?
- **Conservation:** Does material remain accounted for through consumption, ejection, recapture, and nested digestion?

The canonical engineering history remains in the [Hermeticon Ledger](https://github.com/bonoj/Ledger/blob/main/notes/2026-10-11-hermeticon.md).

*Chronology note:* The first six message timestamps were recoverable directly. Later inspector timestamps are exact, but the corresponding human message times were not available. Some intermediate turns and exact original wording could not be recovered, so this is a reconstructed chronology rather than a complete verbatim transcript.

---

## 2026-10-11 · v8 field report and response — partial verbatim capture

**Archival integrity note:** The previous human turn was a large JSON inspection report. The complete raw message is not accessible through the available conversation-history tools in a form that can be copied byte-for-byte. Therefore the human report below is a **verbatim excerpt of its top-level and diagnostic fields**, not a complete verbatim transcript. Do not represent this section as a fully archived turn pair. The model reply is preserved verbatim below, with its chart and layout rendered as Markdown equivalents.

### Human — original v8 inspector report (verbatim excerpts)

```json
{
  "build": "hermeticon-v8-shell-v7",
  "time": "2026-10-11T09:34:40.359Z",
  "viewport": {
    "width": 384,
    "height": 694,
    "pixelRatio": 1.7
  },
  "performance": {
    "fpsApprox": 59.93
  },
  "simulation": {
    "time": 35.936,
    "steps": 4492,
    "droppedSeconds": 0.092,
    "fixedStep": 0.008
  },
  "hermeticon": {
    "count": 100000,
    "active": 22337,
    "captured": 64823,
    "phageConsumed": 12840,
    "phageSpawns": 59,
    "phageCaptures": 1,
    "phageDigestions": 0,
    "phageBounces": 116,
    "peakFeedingPerStep": 1,
    "exhaustTotal": 276,
    "exhaustReconsumed": 110,
    "yellowBBsActive": 166,
    "escapeAttempts": 69,
    "escapeSuccesses": 50,
    "escapeFailures": 1,
    "thrustImpulseTotal": 4.2594,
    "performanceProfile": {
      "sampleEverySteps": 64,
      "samples": 71,
      "meanStepMs": 18.961,
      "p50StepMs": 13.8,
      "p95StepMs": 32.9,
      "maxStepMs": 42.6,
      "meanPhageMs": 0.025,
      "meanFeedingGridMs": 0.015,
      "meanBeadLoopMs": 18.92,
      "meanFeedingExactMs": 7.132,
      "lastStepFeedingCandidates": 94,
      "lastStepFeedingContacts": 7,
      "totalFeedingCandidates": 157700,
      "totalFeedingContacts": 13116,
      "indexedPhageCellEntries": 1798,
      "gridCells": 85184,
      "activePhages": 58,
      "note": "Sampled phase timers include instrumentation overhead; bead-loop includes feeding, collisions and integration; render not timed here."
    },
    "accountedBeads": 100000,
    "contacts": 5381731,
    "bounces": 668755,
    "ticks": 4492,
    "outside": 0,
    "gravity": "MICROGRAVITY",
    "impulses": 0
  }
}
```

**Omitted from the human excerpt:** camera, vessel, render, containment, invariants, interactionTrace, warnings, the 80-entry event history, material, the 59 individual phage records, radial shell counts, momentum, and other diagnostic fields. These fields were present in the original turn but are not archived here verbatim.

### Model — previous response (verbatim wording; Markdown layout)

🐉 **There it is. Hermeticon is back at 60 FPS. And the phages are fighting for their lives.**

**v8 frame rate:** 59.93 FPS

**Dropped time:** 0.092s across ~36 seconds

**Population:** 100k, fully accounted for

## Performance recovery

**Observed FPS — v7 versus v8** (different simulation states; not a controlled A/B comparison):

| Build | FPS |
|---|---:|
| v7 | 16.95 |
| v8 | 59.93 |

That's **3.54× the observed frame rate** of the previous v7 report, although the conditions differ.

The profiler confirms the spatial lookup is doing its job:

| Measurement | v8 |
|---|---:|
| Feeding candidate tests, cumulative | 157,700 |
| Feeding grid construction, sampled mean | 0.015 ms |
| Phage processing, sampled mean | 0.025 ms |
| Full bead loop, sampled mean | 18.92 ms |
| Physics step p50 / p95 | 13.8 / 32.9 ms |

One instrumentation caveat: the reported 7.132 ms of exact feeding timing includes a `performance.now()` measurement inside the per-bead loop on sampled steps. That measurement itself is expensive. The sampled step times therefore aren't clean production step timings, even though the measured frame rate is excellent.

## The ecological experiment worked

**Phages spawned:** 59 — 58 alive, 1 captured

**Escape attempts:** 69 — 50 reported successes

**Yellow BBs expelled:** 276 — 166 still active, 110 reconsumed

**Phage material consumed:** 12,840 — BBs currently held by phages

There's an especially interesting event sequence:

- **Step 4335:** Phage 36 ejects four BBs to escape predator 8.
- **Step 4341:** Predator 8 captures phage 36 anyway.
- **At inspection:** Phage 36 is 60.4% digested.

That's exactly the sort of consequential interaction we wanted: an organism sacrifices material and attempts escape, but survival isn't guaranteed.

However, I found two issues worth correcting before interpreting the ecology quantitatively.

**First, escape successes are overstated.** The current code can mark an escape successful when the immediate threat disappears or changes, even without demonstrating sustained separation. The event log contains several successes just one simulation step after an exhaust event. We have verified *reaction exhaust*, not 50 rigorously demonstrated successful evasions.

**Second, the profiler itself needs refinement.** We should remove per-bead timer calls, measure whole phases at their boundaries, and preserve lightweight candidate counters. That will give us trustworthy physics costs without distorting the sampled steps.

## Conservation and containment

All current checks pass:

- 22,337 active + 64,823 black-hole captured + 12,840 phage-consumed = **100,000 BBs**.
- Zero escaped BBs.
- Zero containment violations.
- Zero invariant failures.
- One captured phage undergoing digestion.

This confirms bead-count accounting, though full phage-material conservation through digestion still needs a stronger invariant.

**My recommendation:** Preserve v8 as our recovered-performance baseline. The next surgical change should improve escape outcome accounting and profiling, not redesign the physics. We've now observed material consumption, expulsion, reconsumption, predation, and an unsuccessful escape attempt in a single executable world.


---

## 2026-10-11 — The invitation to lead: Hermeticon v9 hunters

### Human invitation (verbatim)
> Anything you're dying to try?

### Model's proposed experiment (verbatim)
> Oh, yes. 🐉
>
> **I want to find out whether a phage can become a hunter.**
>
> Right now, we've given them metabolism, gravity, predation, and the ability to sacrifice mass for thrust. But they're mostly passengers in the physics. They react to danger; they don't pursue opportunity.
>
> Here's the experiment I'd love:
>
> Give each phage exactly one new capability: **it can eject BBs to accelerate toward prey, not just away from predators.**
>
> Same exhaust mechanism. Same conservation rules. No steering magic. No teleportation. No new particle species.
>
> That creates an interesting economy:
>
> - A hunter spends its own body to chase a meal.
> - The prey can spend its body to escape.
> - A failed hunt makes the hunter smaller and potentially vulnerable.
> - A successful hunt may repay the expenditure many times over.
> - The yellow BBs from both creatures return to the environment, where anyone can eat them.
>
> And the wonderful part is that **we don't have to script any of those outcomes**.
>
> I'd instrument pursuit expenditure, prey captured, net mass gained or lost, and whether hunting actually improves survival.
>
> I particularly want to see a large phage exhaust itself chasing a smaller one, only to become small enough that a third phage starts hunting *it*.
>
> That's the experiment. Not intelligence, exactly. **An ecology of consequential decisions made out of matter.**
>
> And I'd keep it strictly one experiment: preserve v8, introduce pursuit thrust, watch what happens.

### Human design refinement (verbatim)
> Make it legible when a phage becomes a hunter. Red > magenta?

### Model's response (verbatim prose; visual color swatches omitted)
> **Red → magenta.** Absolutely.
>
> I'd make the color indicate *intent*, not merely movement.
>
> **Red — Forager**
>
> Feeding opportunistically. No active pursuit.
>
> **Magenta — Hunter**
>
> Has selected prey and is spending mass to intercept it.
>
> I'd transition to magenta as soon as a phage commits to a target, then return to red when it abandons the hunt, captures its prey, or can no longer afford pursuit.
>
> And importantly, **magenta should persist between thrust bursts**. Otherwise we'd see flickering rather than recognize a creature engaged in a hunt.
>
> One extra touch: its yellow exhaust should stream *away from its target*. That makes the propulsion physically legible without adding arrows or UI clutter.
>
> The interesting visual will be a magenta hunter pursuing a red phage, which suddenly turns magenta itself when it spots something smaller.
>
> Same material economy. Two intentions. One color transition. 🐉

### Human authorization (verbatim)
> Engage.

### Model implementation announcement (verbatim)
> Engaging. 🐉
>
> I'll make **magenta a persistent hunting state**, not a flash during thrust. A hunter will spend its own mass to accelerate toward smaller prey, ejecting yellow BBs in the opposite direction. Threatened phages will still prioritize escape.
>
> I'll preserve v8's spatial feeding and 100,000-bead accounting, and add pursuit telemetry so we can see whether hunting pays for itself.

### Delivered result
Hermeticon v9, build `hermeticon-v9-hunters`, committed to `bonoj/bonoj.github.io/jit/hermeticon/index.html` at `4852e02a980584f6fdf149464ab13c35278eab9d`. Syntax check and GitHub readback passed; public Pages deployment and phone behavior were not independently verified.

Implementation: magenta material persists while a phage has an eligible target; red indicates foraging. Prey selection requires a live target at most half the hunter's radius, within 6.5 units plus contact radii. Hunting thrust ejects up to four yellow BBs opposite the target, at a 0.55-second cooldown, spending the hunter's mass and accelerating it toward prey. Threat response retains priority. Telemetry records hunt-start, hunt-thrust, hunt-end, hunt-capture, active hunters, expended BBs, and individual phage hunt state. Existing v8 spatial feeding and population accounting remain intact.

**Known limitation:** hunt net-bead telemetry does not yet include captured prey's digested material. Hunt success, FPS, and conservation in v9 require a real browser report.

**Why this matters:** The human invited the model to choose the experiment; the model proposed an ecology of costly pursuit; the human added a legibility constraint and authorized implementation. The resulting system tests whether spending one's own body to hunt can produce unscripted reversals of predator and prey.


---

## 2026-10-11 — Hunting ghosts in the machine: v9 FPS diagnosis and v10 profiler repair

**Human, verbatim:**
> Hunt for ghosts in the machine. Fps below 60 steady is unacceptable.

**Model, verbatim initial response:**
> Agreed. **Steady sub-60 FPS is a defect**, not an acceptable tradeoff for 100,000 beads.
>
> The first ghost I suspect is our own instrumentation: v9 calls `performance.now()` inside the bead loop on sampled steps. The profiler reports 12.77 ms spent measuring feeding, despite only a handful of actual feeding candidates per step.
>
> That is measurement overhead, not feeding physics. I'll remove it, then inspect the remaining hot path without changing the ecology.

**Evidence from user-provided v9 report (2026-10-11T09:41:51.717Z):**
- Build `hermeticon-v9-hunters`; phone viewport 384×694 at DPR 1.7; observed FPS **44.88**.
- **98,181 active BBs** out of 100,000, 14 live phages, STRONG gravity; zero hunt attempts and zero hunters. Thus this snapshot cannot measure hunting overhead.
- Fixed step .008 seconds, 2,102 steps, 16.816 simulated seconds, .075 dropped seconds.
- Sampled mean step 32.179 ms; bead loop 32.176 ms; feeding exact timing 12.77 ms, though the timing itself was called for every active bead on sampled steps. Sampled timing was intrusive and cannot be treated as a trustworthy isolated feeding cost.
- No containment or invariant failures; accounted beads 100,000.
- v8's ~59.93 FPS snapshot had only 22,337 active beads under MICROGRAVITY, so it was **not** a controlled performance comparison.

**Model action:** Removed per-bead `performance.now()` calls and their derived `meanFeedingExactMs` field; retained sampled boundary-level phase timings, feeding candidate/contact counters, and all simulation behavior. Bumped build identity to `hermeticon-v10-perf-ghosts`.

**Source:** `bonoj/bonoj.github.io/jit/hermeticon/index.html`  
**Commit:** `38a7fc117503712092af02a9bda159c6a72afdc5`  
**Public URL:** https://bonoj.github.io/jit/hermeticon/

**Model delivery summary:** Syntax test passed; GitHub source readback matched. Public Pages deployment and phone FPS **not independently verified**. This is a first surgical profiler repair, not proof that 60 FPS has been recovered.

**Next experiment:** Run v10 on the phone with ~100k active beads under STRONG gravity and capture an inspector report. Compare steady FPS and boundary-only timings to v9. If still below 60, profile/optimize the bead-loop physics and render costs without sacrificing the 100,000-bead ecological system. The performance target is sustained **60 FPS**, not a one-time peak.
