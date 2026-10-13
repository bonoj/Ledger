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

*Awaiting Report 3.*
