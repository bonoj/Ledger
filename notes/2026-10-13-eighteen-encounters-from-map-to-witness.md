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

*Awaiting Report 1.*
