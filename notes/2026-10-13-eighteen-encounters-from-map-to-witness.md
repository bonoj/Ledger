# Eighteen Encounters: From Map to Witness

*Living field ledger · opened 2026-10-13, before the first expedition report*

## Why this crossing matters

A hand-drawn world map, author-confirmed but not reducible to a procedural biome prompt, became twenty-two geographic anchors. Four already had living local behavior: Quills, Amaranthine Fields, Mists, and Downton (the last participating in the Mists encounter). The remaining eighteen were invitations to invent. The aim was not eighteen decorative animations but eighteen surprising, sometimes grim or subversive, **causal encounters** in a world with an authoritative signed geological field, material provenance, a physical Crucible, and an inner spherical aperture.

The design boundary was unusually generative: nothing should render outside the inner dome, but matter may hit its inner surface, fall into the Crucible, carve terrain, be reused as architecture, or be redistributed. Rendering, physical collision, geological ownership, and conservation are different contracts. The world should be able to *answer back*.

## From map to specification

The source of geographic interpretation is the author's map study, preserved in [WORLD_GENERATION_EXPERIMENT.md](https://github.com/bonoj/Hermeticon/blob/main/examples/wanderer-separated/WORLD_GENERATION_EXPERIMENT.md). Unknown properties stayed unknown: Ice Vale is an off-map arrow; the Bood Lakes' composition is unproven; Jade Peak's green is not evidence of jade mineral; the Rift need not be a deep fissure; Downton's geometry is not definitively floating. Authored coordinates are provisional spatial anchors, not new lore.

The [second-pass encounter specification](https://github.com/bonoj/Hermeticon/blob/main/examples/wanderer-separated/ENCOUNTERS_SPEC.md) replaced the initial purely theatrical sketches with material and geological consequences. Its eighteen names and intended behaviors are:

| Landmark | Intended physical or narrative consequence |
| --- | --- |
| Summerlands | Excavate sundial relief; reuse spoil as obelisk; show the wrong time |
| Winter King's Realm | Raise a crown and throne from ridge; bury the king |
| Ice Vale | Sleds carve grooves toward the off-map destination; one returns |
| Gradient | Fold continuous border into ridges; launch material into bowl |
| Heart of Darkness | Drill a shaft, construct a stair, leave impossible footprints |
| Bood Lakes | Hollow resonant columns; cracked bell throws matter into bowl |
| Jade Peak | Peel mountain skin into dragon; scatter scales |
| Silverpass and Gemgates | Self-excavate customs arches; sort and reject provenance-bearing cargo |
| Cinderglade and Fell Crater | Dig firebreak, feed crater, sprout strange seeds |
| Whisperwood | Lift soil with listening roots; delayed pursuing footsteps |
| Brambles | Courteous excavating maze; recoverable collapse, navigable exit |
| Rift | Stitch temporary traversable bridge; collapse into Crucible |
| Spill | Climbing bead waterfall cuts a channel and carries sediment |
| Redwall | Walking fortification removes and rebuilds bricks |
| Upton | Houses evacuate, leave holes, return to wrong foundations |
| Kindle Tower | Tower launches bricks against dome; deliberate ricochet |
| Violet Coast | Stitched wave lattice uses sediment weights; unravels |
| Ocean of Tears | Ship dredges, assembles, sheds planks, sinks; leaves void |

These are **design intentions**, not assertions that all mechanisms have been implemented.

## Six development turns: what actually shipped

The implementation sequence is traceable by commit, not reconstructed from impressions:

1. [5bf5dec7](https://github.com/bonoj/Hermeticon/commit/5bf5dec7160fcea9e3cab55f6528d6ebaabe004a) — deterministic encounter registry and lifecycle: dormant → primed → performing, with world-space proximity and INSPECT transitions.
2. [a1349054](https://github.com/bonoj/Hermeticon/commit/a1349054b48dbc81155c58b07b4a6f0ddfeea38d) — six animated, aperture-clipped visual prototypes: Summerlands through Bood Lakes.
3. [77e4b913](https://github.com/bonoj/Hermeticon/commit/77e4b9139d4c6511c8914251c2b8ea864c35b5b8) — six more: Jade Peak through Rift.
4. [08d518cd](https://github.com/bonoj/Hermeticon/commit/08d518cd252fd3d326b762ee00f084b2224e52ed) — final six visual prototypes: Spill through Ocean of Tears.
5. [3dad9831](https://github.com/bonoj/Hermeticon/commit/3dad98310ba3d519d7e23f6552675a0ff1ce4e36) — Summerlands' first real signed-field transaction: remove up to twelve positive grid samples from an annulus, deposit the same number into a central raised formation, remesh changed chunks, record provenance where available, and assert sample-count balance. **Grid-sample count is not continuous physical volume.**
6. [23006a9f](https://github.com/bonoj/Hermeticon/commit/23006a9ff44380690a261df40514c4e31bd8459b) — integration repair: preserve settled visual witnesses; remove Upton's cumulative vertical drift; deduplicate a geological error.

The expedition release is [05b3897a](https://github.com/bonoj/Hermeticon/commit/05b3897a2f1e29e1c67fef16fc56ff967c171159), which added per-encounter scene existence, mesh counts, visibility, aperture-distance witnesses, and aggregate geological-transaction auditing. Its Pages Actions deployment succeeded, including verification of the SHA-stamped HTML references at both public entries. **Successful publication is not evidence of visual or physical correctness.**

Public entrance: https://bonoj.github.io/Hermeticon/

### What the six turns taught before observation

The six-turn estimate was too optimistic for the complete physical design. Eighteen visual prototypes exist; the remaining seventeen do not have authoritative geological transactions, and none of the eighteen has the full specified physical story. Summerlands has a narrow first transaction, not continuous-volume conservation or new physical BB delivery. The prototype is intentionally a testable first expedition rather than a falsely declared completion.

A useful engineering distinction emerged: *a source-committed scene*, *a deployed scene*, *an activated scene*, *a witnessed scene*, and *a causally complete encounter* are five different milestones. INSPECT is the bridge between the last three.

## Field reports — append in visit order

**Baseline:** 18 prototype scene definitions; 18 encounter registry entries; four prior active locations protected; first geological transfer at Summerlands only. No user encounter reports yet.

For each incoming report, append an entry with:

- **Report number and landmark:** identify the actual visited location; retain chronological arrival order.
- **Build and circumstances:** SHA, route/position, activation phase, relevant frame rate, errors.
- **Expected vs observed:** the specified encounter, what appeared or failed to appear, and any unexpected behavior.
- **INSPECT evidence:** transitions, scene visibility, aperture status, material transactions, anomalies.
- **Interpretation:** distinguish observation, hypothesis, and code-confirmed cause.
- **Disposition:** preserve, refine, repair, or defer, with commits and re-test results if applicable.

Do not silently overwrite failed predictions. Later observations may correct earlier interpretations; record the correction as a new dated entry.

## Reports

## Report 1 — Heart of Darkness (2026-10-13)

**Witness:** User-supplied INSPECT JSON; build `05b3897a2f1e29e1c67fef16fc56ff967c171159`; observation at simulation t=45.3s. This is telemetry, not a screenshot or pixel readback.

**Operational conditions:** 72.3 fps at inspection; `identity.errors=[]`; 18 registry entries, 18 scene definitions, zero missing scenes. Crucible mode idle, owner geology; 8,306 rain particles emitted and active; no thump, terrain-hit, or micro-contact interactions recorded. These broader counters are context, not evidence of encounter geology.

**Heart of Darkness — confirmed state:** Anchor (12,2), seed 32417; walker (14.791,0.414), nearest landmark at 3.21 world units. Scene has 15 authored meshes; group visible, phase visible, aperture center distance 1.4, within aperture; no encounter errors. Lifecycle transitions: dormant→primed at 15.208s (`aperture-near`), primed→performing at 20.768s (`wanderer-near`), performing→settled at 31.776s (`visual-cycle-complete`). Visit count 1; settled for 13.52s at report. This supports lifecycle operation and retained settled scene visibility **in the deployed browser's telemetry**, not proof that every mesh was rasterized or the performance looked as intended.

**Other encounter witnesses:** Jade Peak primed at 29.016s, not performed (aperture center distance 6.38, walker farther than start radius); all other encounters dormant. Silverpass anchor is geometrically within the nominal aperture radius (7.43) but not within the tighter prime radius (7.2), hence correctly dormant. All 18 have empty material transaction lists; the only implemented geological transfer belongs to Summerlands, which was not visited.

**Instrumentation defect observed:** `visibleCount` is the number of authored scene children even when `groupVisible=false` (e.g. Summerlands shows 26 while dormant and invisible). `clippedCount=0` does not prove that all meshes were rasterized or clipped correctly. Prefer `visual.groupVisible`, `visual.withinAperture`, and phase state; consider renaming the old count `authoredMeshCount` in a later instrumentation-only repair.

**Interpretation:** The registry, approach gating, performance timer, settled persistence, and error reporting all returned coherent evidence in one real deployed session. No Heart of Darkness geological excavation is present yet; zero material transactions is consistent with implementation status. No visual judgment can be made without the explorer's account or image.

**Disposition:** Preserve current build during expedition; collect the explorer's qualitative visual impression before proposing a repair. Do not silently edit the world. Await Report 2.

## Report 2 — Silverpass and Gemgates (2026-10-13)

Build: 05b3897a2f1e29e1c67fef16fc56ff967c171159. INSPECT at simulation 60.54 seconds; 60.3 fps; no runtime errors.

Silverpass (16,-5), seed 56174, has 18 meshes, groupVisible true, aperture distance 2.52, visit count 1. Dormant to primed and primed to performing both occurred at 50.424 seconds. At inspection, performance duration was 10.12 seconds. The Wanderer was 2.91 units from its anchor.

Heart of Darkness remained settled, groupVisible true, at aperture distance 5.82. The audit listed both scenes as active. This is evidence of concurrent scene visibility state, not a rendered-pixel test.

No geological transactions occurred. The planned excavating customs arches and material-provenance sorting remain unimplemented; appearance and legibility await the explorer's qualitative account.

Observation: walker-to-anchor distance and aperture-to-anchor distance use different frames. No code changes requested. Await Report 3.

## Report 3 — Spill (2026-10-13)

**Evidence:** INSPECT telemetry on deployed build `05b3897a2f1e29e1c67fef16fc56ff967c171159` at simulation time 80.87 seconds. Frame rate 69.7 fps; no identity errors; 18 registry entries and scene definitions; no missing scenes.

**Spill:** Anchor (19,-13), seed 95769, 17 meshes. The Wanderer was at (17.694,-14.685), 2.13 horizontal units from the anchor. Both dormant→primed and primed→performing occurred at 68.952 seconds; performing→settled at 79.960 seconds. At inspection, settled for 0.91 seconds; scene group visible, within aperture, center distance 5.10; visit count 1, no errors.

**Other witnesses:** Silverpass settled at 61.424 seconds and its group was now hidden outside the aperture. Heart of Darkness remained settled and hidden outside the aperture. Rift entered primed at 68.584 seconds, but had not performed. Jade Peak remained primed from earlier. The audit showed only Spill as an active scene.

**Expected versus observed:** The intended uphill material stream and self-excavated sediment channel are not implemented. The report contains zero geological transactions, no terrain interactions, no micro impacts, and no material movement attributable to Spill. Its visual scene and lifecycle are present; its physical consequence is not.

**Interpretation:** Three encounters have completed their timed performance in one continuous browser session without reported errors. Rift's separate primed state is consistent with proximity gating, not unintended triggering. Scene visibility correctly falls away when completed encounters leave the aperture. These are telemetry claims, not judgments of visible animation quality.

**Disposition:** No Hermeticon changes during expedition. Await human visual impressions and Report 4.

## Report 4 — Rift (2026-10-13)

**Evidence:** User INSPECT telemetry, build `05b3897a2f1e29e1c67fef16fc56ff967c171159`, simulation t=116.53s; 73.5 fps, no identity errors. Eighteen scenes present; zero encounter geological transactions.

**Rift:** Anchor (8,-11), seed 87850; Wanderer at (10.232,-10.4), distance 2.31. Scene 13 meshes, visible group, aperture center distance 6.64, visit count 1. Primed at t=68.584s; began performing at t=105.136s; settled at t=116.144s. **The primed state persisted for 36.552 seconds before the Wanderer came close enough to activate it.** At inspection, settled for 0.38 seconds. No errors or material transactions.

**Concurrency:** Silverpass and Gemgates, Rift, and Spill were all settled and reported as active scene groups within the aperture. Heart of Darkness remained settled but outside the aperture. The evidence is scene-state telemetry, not pixel readback.

**Separate physical observation:** A single thump affected 8,306 rain particles, reporting 12,870.523884795428 energy added and zero fractures. No evidence links this thump to Rift; keep it separate from encounter effects. Terrain hits and micro contacts remained zero.

**Expected versus observed:** Rift's intended material bridge, traversal, and collapse into the Crucible are not implemented; no geological or encounter matter transactions. Visual legibility still requires the human witness's account.

**Interpretation:** Four distinct encounters have completed without reported runtime errors. Rift provides particularly strong evidence that priming does not automatically consume an encounter; the Wanderer's subsequent approach controls performance. No world changes made during expedition.

**Disposition:** Preserve current build. Await Report 5 and visual impressions.

## Report 5 — Violet Coast (2026-10-13)

**Evidence:** INSPECT build `05b3897a2f1e29e1c67fef16fc56ff967c171159`, t=130.92s, 60.5 fps, no errors. Violet Coast anchor (10,-20), seed 127445, 18 meshes, phase performing, visit 1. Primed and activated at 124.760s; performance time 6.16s. Scene group visible at aperture distance 6.48; Wanderer at (10.291,-18.285). Audit: Rift, Spill, Violet Coast active; no geological transactions. Thump count 1 affecting 8,306 rain particles, unrelated to encounters. No human qualitative visual report.

## Report 6 — Ocean of Tears proximity survey (2026-10-13)

**Evidence:** Same build, t=151.89s, 69.5 fps, no errors. Ocean of Tears anchor (19,-20), seed 135364; nearest landmark to Wanderer, horizontal distance 1.17 from Wanderer position (17.879,-19.666). **Remains dormant**, zero visits, zero transitions, 14 meshes but scene group hidden. Aperture-center distance 7.81, `near:false`, despite being within the 9.72 aperture and Wanderer within the 2.9 activation radius. This is consistent with the code's **aperture prime gate of 7.2** being unsatisfied, so the encounter never reaches the Wanderer activation check. It is not evidence that nearest.distance is itself wrong. Needs an intentional design decision: should Wanderer proximity independently prime an encounter? Do not change code during survey without instruction.

Violet Coast settled at t=135.760s, visit 1, scene hidden with `near:false` and aperture distance 7.21 (just outside prime radius). Rift and Spill visible and settled. Five activated encounters so far; zero geology. No human visual account.

## Report 7 — Kindle Tower (2026-10-13)

**Evidence:** Same build, t=185.41s, 71.9 fps, no errors. Kindle Tower anchor (1,-19), seed 119526, 13 meshes, visible and settled, visit 1. Primed at 171.464s, performing at 172.552s, settled at 183.552s; aperture distance 5.22, Wanderer (-0.016,-18.206), 1.29 from anchor. This is the **sixth activated encounter**; all six settled at latest sample. Zero material transactions and zero encounter-caused geological effects.

**Neighbor:** Brambles anchor (-1,-12) is primed, `near:true`, aperture distance 2.06, 14 meshes hidden, visit 0. Wanderer-to-Brambles distance approximately 6.22, above activation radius 2.9. Thus this is **expected dual-distance gating**, unlike Ocean of Tears, where the inverse condition occurs (Wanderer close, aperture beyond prime radius). No confirmed defect in Brambles. A second thump is recorded, cumulative 16,612 rain affected, 24,271.15 energy added, zero fractures; not attributable to Kindle Tower.

**Disposition:** No source changes; survey continues. Six visual performances have activated, but zero geological transactions. Human visual judgment not yet reported.

## Report 8 — Brambles (2026-10-13)

**Evidence:** User INSPECT on unchanged deployed build `05b3897a2f1e29e1c67fef16fc56ff967c171159`, simulation t=196.90s, 73.3 fps, zero runtime errors. Encounter registry and scene count 18, no missing scenes, zero geological transactions.

**Brambles:** Anchor (-1,-12), seed 79931, 14 meshes. Wanderer (-0.831,-12.744), nearest distance 0.76. Aperture distance 2.06, `near:true`, scene group visible. Primed at 171.560s, activated by Wanderer at 189.968s, **18.408 seconds after priming**. At inspection `performing` for 6.93 seconds, visit 1, no errors or material transactions. If uninterrupted, scheduled settling is approximately 200.968s; not yet observed.

**Concurrent scene:** Kindle Tower remains settled and group-visible, 13 meshes, aperture distance 5.22. Seven of eighteen encounters have activated so far, six confirmed settled and Brambles performing. No physical entanglement, terrain or BB material transactions demonstrated. Two thumps cumulatively affected 16,612 rain particles; not evidence of encounter action.

**Interpretation:** Brambles confirms the dual-distance gate inferred in Report 7: aperture proximity primes, Wanderer proximity activates. It did not activate while Wanderer was farther away, then activated on approach. This is evidence for lifecycle mechanics, not rendered-pixel quality or authored material consequence.

**Disposition:** Preserve build; await Report 9 and human visual impressions.

## Report 9 — Upton (2026-10-13)

**Evidence:** INSPECT on unchanged build `05b3897a2f1e29e1c67fef16fc56ff967c171159`, simulation t=216.46s, 82.3 fps, no runtime errors. All 18 encounter scenes exist, none missing; geological transactions remain zero.

**Upton:** Anchor (-7,-18), seed 111607, 14 meshes, Wanderer (-7.756,-18.088) at distance 0.76, aperture distance 4.42, groupVisible true, visit 1. Primed and activated at 205.400s; settled at 216.400s after its eleven-second visual cycle. Inspection occurred 0.06s after settlement. No material transactions or errors.

**Other findings:** Brambles settled at 200.968s, matching Report 8's prediction, and remains group-visible (aperture distance 4.59). Whisperwood primed at 206.664s, but not activated (visit 0, groupVisible false, aperture distance 6.32). Kindle Tower is settled but groupVisible false despite aperture distance 7.91, consistent with the separate encounter near gate. Eight encounters have now activated and settled.

**Interpretation:** Immediate Upton priming/activation contrasts with Brambles' delayed approach, consistent with the two-distance activation design. INSPECT establishes scene state, not rendered pixels or the legibility of Upton's authored architecture. No authored geological or BB consequences have been demonstrated.

**Disposition:** Preserve deployed build, no code changes. Await Report 10 and visual impressions.

## Report 10 — Redwall (2026-10-13)

**Evidence:** INSPECT on build `05b3897a2f1e29e1c67fef16fc56ff967c171159`, simulation t=262.67s, 84 fps, zero runtime errors. Registry 18, scenes 18, missing 0, geological transactions 0.

**Redwall:** Anchor (-16,-16), seed 103688, 16 meshes, groupVisible true, aperture distance 2.83. Wanderer (-16.225,-14.831), 1.19 from anchor; visits 1. Dormant to primed at 223.400s, performing at 232.952s (9.552s wait), settled at 243.952s after eleven-second cycle. No material transactions or encounter errors.

**Neighboring states:** Whisperwood remained primed for 56.01s, aperture distance 7.07 within 7.2 prime radius, without activation or visible group. Cinderglade and Fell Crater remained dormant at aperture distance 7.62, inside visual aperture but outside prime radius. Upton settled and groupVisible false at aperture distance 8.06. Nine encounters have activated and settled.

**Interpretation:** Encounter activation distinguishes priming proximity from Wanderer approach. Visual scene presence does not prove rendered appearance. Redwall's intended material fortification remains unimplemented; no physical consequence established.

**Disposition:** No Hermeticon modifications. Await Report 11 and qualitative appearance observations.

## Report 11 — Cinderglade and Fell Crater (2026-10-13)

**Evidence:** INSPECT on build `05b3897a2f1e29e1c67fef16fc56ff967c171159`, simulation t=279.99s, 84.4 fps, zero runtime errors. Registry 18, scenes 18, missing 0, geological transactions 0.

**Cinderglade and Fell Crater:** Anchor (-17,-7), seed 64093, 13 meshes, groupVisible true, aperture distance 3.00. Wanderer (-18.726,-6.093), 1.95 from anchor; visits 1. Primed at 269.000s, performing at 271.864s (2.864s wait), still performing at inspection after 8.126s. Expected eleven-second visual-cycle settlement near 282.864s is a projection, not yet witnessed. No material transactions or encounter errors.

**Neighboring states:** Whisperwood remains primed for 73.33s, aperture distance 5.36, without activation or visible group. Bood Lakes remains dormant at aperture distance 8.06 (inside visual aperture, outside priming radius). Redwall is settled and not visible, aperture distance 9.16; its scene group is hidden. Ten encounters have activated, nine are confirmed settled, one currently performing.

**Interpretation:** Moving aperture, priming, and Wanderer-triggered performance remain distinguishable. No evidence of the planned crater's physical geology; the 13 meshes and visible scene flag do not constitute pixel-level visual confirmation.

**Disposition:** No Hermeticon modifications. Await Report 12 and qualitative appearance observations.

## Report 12 — Bood Lakes (2026-10-13)

**Evidence:** User INSPECT on build `05b3897a2f1e29e1c67fef16fc56ff967c171159`, simulation t=295.93s, 70.9 fps, zero runtime errors; 18 registered and 18 scene instances, no missing scenes, zero geological transactions.

**Bood Lakes:** Anchor (-14,1), seed 40336, 18 meshes, scene group visible, aperture center distance 3.72. Wanderer (-13.010,-1.131), distance 2.35 from anchor, visit 1. Primed t=285.744s, performing t=286.472s (0.728s wait), still performing at t=295.93s after 9.458s. Settlement near t=297.472s is an expectation, not an observed transition. No material transactions or errors.

**Concurrent state:** Cinderglade and Fell Crater settled at t=282.872s (confirming Report 11's forecast to within 0.008s) and its scene group remains visible alongside performing Bood Lakes. Whisperwood remains primed and unvisited for 89.26s, now aperture distance 8.03, outside the prime radius. Jade Peak is also primed without a visit, outside the aperture.

**Interpretation:** Eleven distinct encounters activated; ten settled and one performing. The overlapping visible scene groups support scene persistence during travel, but are not pixel-level confirmation. Bood Lakes' intended liquid/material behavior remains unimplemented; no geological transactions, terrain hits, or micro contacts reported. Crucible rain count remains 8,306, unrelated to encounter material transfers.

**Disposition:** No Hermeticon changes. Await Report 13 and the human witness's visual observations.

## Report 13 — Whisperwood (2026-10-13)

**Evidence:** User INSPECT, build `05b3897a2f1e29e1c67fef16fc56ff967c171159`, simulation t=326.58s, 62.3 fps, zero runtime errors. Eighteen registered scenes, no missing scenes, zero geological transactions.

**Whisperwood:** Anchor (-9,-9), seed 72012; Wanderer (-10.656,-9.483), distance 1.73. Eighteen meshes, group visible, aperture center distance 2.84, visit count 1. Primed t=206.664s, performing t=312.416s, settled t=323.424s. The primed state waited **105.752 seconds** before the Wanderer approached, longest witnessed interval so far. Eleven-second visual cycle completed; scene remains visible after settlement. No encounter material transactions or errors.

**Report 12 follow-through:** Bood Lakes settled at t=297.480s, within 0.008s of the prior expected settlement. Bood Lakes and Cinderglade and Fell Crater are still within the aperture geometrically (center distances 8.40 and 7.24 respectively) but their groups are hidden because the encounter-near condition is false. This separates aperture inclusion from actual group visibility.

**Overall:** Twelve encounters visited and settled; Jade Peak remains primed but unvisited. Six encounters remain unvisited, including Jade Peak. Rain active 8,306; no terrain hits, micro contacts, or geological transactions. No pixel readback or human visual description provided.

**Interpretation:** The persistent primed state is supported by a long delayed activation, not a forced timeline. The visible-state gating has a narrower reach than the aperture geometry. Whisperwood's intended physical consequences remain absent in this visual prototype.

**Disposition:** No Hermeticon changes. Await Report 14 and visual observations.

## Report 14 — Summerlands (2026-10-13)

**Evidence:** User INSPECT at simulation t=364.93s, build `05b3897a2f1e29e1c67fef16fc56ff967c171159`, 85.9 fps. Global errors empty, eighteen registered and scene objects, none missing. Thump count four, unrelated to encounter geology.

**Summerlands:** Anchor (-13,12), seed 741, Wanderer (-13.692,12.575), distance 0.90; aperture center distance 2.72. Primed at t345.184, performing t350.096, settled t361.104; visit 1, 26 meshes, group visible after settlement. Geological transfer attempted but encounter-local error: `Summerlands geological sample transfer unavailable at authored terrain resolution`. Implementation remains `visual-prototype`; `materialTransactions:[]`; audit geologicalTransactions 0. The code requires paired eligible positive signed-field source samples and nonpositive destination samples, and fails without a viable pair. No terrain change or conservation transaction was recorded. Source versus destination candidate counts are not exposed, so the precise constraint cannot yet be isolated.

**Distinction:** Global `identity.errors:[]` does not imply zero encounter-local errors. This is a successfully completed visual lifecycle but failed geological test, not a completed physical encounter. Thirteen of eighteen encounters now visited and settled; five unvisited.

**Disposition:** Preserve the failure for diagnosis after expedition; instrument source/destination candidate counts, then repair at actual grid resolution while preserving balance and provenance. No world modifications during exploration.

## Report 15 — Jade Peak (2026-10-13)

**Evidence:** INSPECT build `05b3897a2f1e29e1c67fef16fc56ff967c171159`, simulation t435.22s, 78.7 fps, no global errors, registry/scene 18/18 and no missing scenes.

**Jade Peak:** Anchor (19,5), seed 48255. Wanderer (18.188,2.927,4.745), distance 0.85; aperture-center distance 5.01. Phase **performing** at inspection, visits 1, 13 meshes, group visible. Primed t29.016, performing t428.696: **399.680 seconds** (~6m40s) waiting in primed state. Performing for 6.52 seconds at inspection; **settlement not yet observed**. No material transactions or local errors.

**Revisit and gate observations:** Heart of Darkness remains settled from t31.776 and is visible again (center distance 3.82), without a second activation. Winter King's Realm is dormant at center distance 8.97: within aperture 9.72 but outside priming radius 7.2. Summerlands retains the encounter-local sample-transfer failure from Report 14; global errors still empty. Seven cumulative thumps, fractures zero, not attributed to encounters.

**Disposition:** Count fourteen of eighteen **activated**, thirteen settled and Jade Peak performing; four unvisited. Do not infer Jade Peak completion before another report. Geological transactions remain zero. No world modifications during expedition.

## Report 16 — Winter King's Realm (2026-10-13)

**Evidence:** INSPECT build `05b3897a2f1e29e1c67fef16fc56ff967c171159`, simulation t452.22s, 67.3 fps, no global errors; registry 18, scenes 18, missing 0, geological transactions 0.

**Winter King's Realm:** Anchor (12,14), seed 8660. Wanderer (12.956,2.499,12.760), distance 1.57; aperture-center distance 6.28. Phase **performing** at inspection, visits 1, 18 meshes, group visible. Dormant→primed and primed→performing both at t443.728, immediate activation on first priming step; 8.50s into performance. **Settlement not yet observed.** No encounter-local errors or material transactions.

**Follow-up on Report 15:** Jade Peak settled at t439.704 after beginning performance t428.696; remains visible at center distance 6.07, visits 1. Heart of Darkness remains settled and visible at center distance 6.19, visits 1. Three encounter groups simultaneously visible (Winter King's Realm performing, Jade Peak and Heart of Darkness settled), without evidence of repeat activation.

**Disposition:** Fifteen of eighteen encounters activated: fourteen settled, one performing. Ice Vale, Gradient, Ocean of Tears remain dormant/unvisited. Seven cumulative thumps, zero fractures, not attributed to encounters. No world modifications during expedition.

## Report 17 — Gradient (2026-10-13)

**Evidence:** INSPECT build `05b3897a2f1e29e1c67fef16fc56ff967c171159`, simulation t477.86s, 59.9 fps, no global errors; registry 18, scenes 18, missing 0, geological transactions 0.

**Gradient:** Anchor (0,12), seed 24498. Wanderer (-0.300,0.591,11.778), distance 0.37; aperture-center distance 4.60. Phase **performing**, visits 1, 11 meshes, group visible and within aperture. Dormant→primed at t467.824; primed→performing at t467.872 (0.048s later). At inspection, 9.98s into performance; **settlement not yet observed**. No encounter-local errors or material transactions.

**Follow-up on Report 16:** Winter King's Realm settled at t454.736, 11.008s after performing began. At this inspection its center distance is 7.98, within the aperture (9.72) but outside the prime radius (7.2), and its settled group is hidden. This reinforces the distinction between aperture containment and encounter-group visibility; no source change made.

**Disposition:** Sixteen of eighteen activated: fifteen settled, Gradient performing. Ice Vale and Ocean of Tears remain dormant/unvisited. Summerlands remains settled but records `Summerlands geological sample transfer unavailable at authored terrain resolution`; all material transaction arrays remain empty. Seven cumulative thumps, fractures zero, not attributed to encounters. No world modifications during expedition.

## Follow-up to Report 17 — Gradient settlement and Winter King's Realm revisit (2026-10-13)

**Evidence:** INSPECT build `05b3897a2f1e29e1c67fef16fc56ff967c171159`, simulation t497.30s, 70.1 fps, no global errors; 18 registry/18 scenes, zero geological transactions.

**Gradient:** Confirmed performing→settled at t478.880, 11.008s after performing began at t467.872. Visits remain 1, 11 meshes; group hidden at aperture-center distance 7.58 despite being inside the 9.72 aperture, because beyond 7.2 prime gate.

**Winter King's Realm revisit:** Wanderer (12.21,3.087,14.123), 0.24 from anchor (12,14); encounter settled since t454.736, visits still 1, 18 meshes, group visible at aperture-center distance 4.62. Previously hidden at 7.98, now visible again without retriggering: positive evidence of persistent settled phase and location-gated scene display.

**Disposition:** Sixteen activated and sixteen settled. Ice Vale and Ocean of Tears still dormant. Summerlands geological sample-transfer error persists; no material transactions. Seven thumps, zero fractures, unrelated to encounter activations. No world modifications.

## Report 18 — Ice Vale (2026-10-13)

**Evidence:** INSPECT build `05b3897a2f1e29e1c67fef16fc56ff967c171159`, simulation t529.41s, 72.3fps, global errors []; registry 18, scene 18, missing [], geological transactions 0.

**Observed:** Ice Vale anchor (17,20), seed 16579, walker (16.852,0.405,20.966), walker distance 0.98. Six scene meshes, groupVisible true, centerDistance 6.71 (inside 7.2 prime radius and 9.72 aperture), visits 1, settled, no encounter errors. Transitions: dormant→primed t514.344, primed→performing t516.744 (2.400s wait), performing→settled t527.744 (11.000s performance); inspected 1.66s after settlement.

**Coexistence:** Winter King's Realm remains settled and visible at centerDistance 2.00 with 18 meshes and visits 1. Both scenes simultaneously visible, with no reactivation. Gradient and the previous fourteen visited encounters remain settled but outside their display gate.

**Interpretation and limits:** Seventeen of eighteen visual encounter lifecycles have activated and settled. Ocean of Tears (19,-20) remains dormant, visits 0. No geological transactions anywhere; Summerlands still reports `Summerlands geological sample transfer unavailable at authored terrain resolution`. Ice Vale is a witnessed visual prototype, not a physically completed transformation. Seven thumps, 58,142 rain particles affected, zero fractures, not attributable to encounters. No Hermeticon source changes.

## Report 19 — Ocean of Tears: arrival without activation (2026-10-13)

**Evidence:** INSPECT build `05b3897a2f1e29e1c67fef16fc56ff967c171159`, simulation t581.26s, 65.3fps, global errors []; registry 18, scenes 18, missing 0, geological transactions 0.

**Ocean of Tears:** Anchor (19,-20), seed 135364; Wanderer (19.611,0.421,-21.189), nearest-landmark distance 1.34, inside the 2.9 walker activation radius. Aperture-center distance 7.81, inside the 9.72 aperture but outside the 7.2 prime radius. Phase dormant, visits 0, transitions [], near false, performanceSteps 0, groupVisible false; fourteen authored meshes exist, no local error. This **reproduces Report 6** at the same aperture distance and walker distance 1.17. The code's aperture-first gate explains why the walker-proximity test is not reached; it does **not** establish whether the gate should be changed.

**Other witnesses:** Rift and Spill are settled and visible concurrently (center distances 6.71 and 5.10). Violet Coast is settled but hidden at center distance 7.21, barely outside the prime gate while still inside the aperture. Silverpass is also settled but hidden within the aperture (9.22). All prior seventeen activated encounters have settled. Seven thumps affected 58,142 rain particles, fractures 0; these are not encounter geological effects. Summerlands retains its failed geological sample-transfer error; zero geological transactions overall.

**Disposition:** **Seventeen of eighteen visual lifecycles completed; Ocean of Tears unvisited in encounter state despite the Wanderer's physical arrival.** No Hermeticon source changes. Preserve the evidence and decide the spatial authority of walker versus aperture before repairing.

## Reflection — What did the world actually witness? (2026-10-13)

The expedition succeeded at one level and failed to reach the level that motivated it. Eighteen authored scenes were deployed, seventeen activated and settled, primed states persisted for minutes, completed scenes reappeared on return, and multiple scenes could coexist. That is a working **encounter theatre**, with useful inspection and durable lifecycle state. It is not yet a world of eighteen causal geological encounters. The only attempted authoritative material transfer, Summerlands, could not find a valid sample pair at the authored resolution. Zero geological transactions occurred. A settled phase remembers that a performance ended; it does not prove that the terrain or material history remembers its consequence.

Ocean of Tears sharpens rather than simply contradicts the design. The Wanderer reached its anchor while the aperture center remained outside the priming gate. We can explain the nonactivation from the code and reproduce it from Reports 6 and 19. But the aperture is a meaningful perceptual and physical boundary, not necessarily a disposable camera constraint. An unconditional walker override might make the counter increment without making the encounter visible or causally coherent. The evidence identifies a **spatial-authority question**, not yet an approved answer.

Before changing source, distinguish three decisions: **(1)** what counts as an encounter being reached, **(2)** what permits its scene to become visible, and **(3)** what authorizes irreversible physical effects. These may legitimately have different conditions. Retest Ocean of Tears only after the author weighs in. And before calling the eighteen encounters complete, make at least one authored event leave a measurable, conserved, inspectable alteration of the world. The ledger's value is precisely that it refuses to exchange theatrical success for physical proof.

*Awaiting the author's interpretation and the next deliberate experiment.*










