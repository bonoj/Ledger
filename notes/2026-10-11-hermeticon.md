# 2026-10-11 — Hermeticon: construction and experimental record

**Ledger note, not operational authority.** Executable source: https://github.com/bonoj/bonoj.github.io/blob/master/jit/hermeticon/index.html ; public: https://bonoj.github.io/jit/hermeticon/ . Shell conventions: Home/BAUBLE.md. Delivery: Gate/README.md.

## Intent and construction

Hermeticon is a phone-first glass vessel of 100,000 discrete colored BBs, built to explore legible emergent behavior through inexpensive, perturbable systems. The shell is inherited from the JIT bauble pattern: Three.js 0.180.0, orbit/pinch, inspect panel, invariants, fixed timestep 0.008 seconds, vessel outer radius 10.25, inner 10.07, thickness 0.18. Bead confinement uses radius 9.83.

The particle state uses three Float32Arrays of length 300,000 for positions, velocities and colors, plus a 44³ Int32Array spatial hash. Initial deterministic RNG seed 918273. Initial bead locations are rejection-sampled within radius sqrt(76); velocity components initially approximately ±4.5. One Three.js Points geometry displays all beads with dynamic positions and vertex colors; point material size 0.065. This is NOT 100,000 mesh spheres.

Each fixed step applies weak swirl/stirring, central radial acceleration (by mode), a speed cap, wall response, and approximate bead contacts. Wall response uses factor 1.96 against outward normal velocity (restitution approximately .96). The 44³ grid holds only ONE candidate bead per occupied cell; contacts are checked within distance 0.19 and resolved by a normal impulse if approaching. Consequently contact counts represent approximate sampled interactions, NOT all hard-sphere contacts. The method is roughly O(N), but is not physically exact, and dense cells miss contacts. Emergent hollow center, bands and outer-shell crowding must be interpreted in that context.

## v1 and v2 — emergent shell, gravity and Zero Point

Initial observation: the 100k cloud formed strong radial structure, including a hollow center and a dense exterior, sometimes near 60 FPS on mobile. No physical equilibrium was established.

v2 added a button labeled ZERO POINT. It was a persistent outward radial acceleration from origin, approximately 18/(1+0.22*r²), not an actual particle emitter or quantum effect. The user judged it uninteresting and suspected FPS cost. Crucially the slow report below had Zero Point OFF; causality was NOT established. Gravity offered Strong, Overwhelming and Black Hole. Black Hole marks beads within radius .55 swallowed, zeros their state and skips them on later steps; capture persists after mode changes until refresh/reset. Zeroed vertices may remain at origin in the point buffer.

v2 report A: simulated 90.576 s, FPS 59.93, captured 87,894, active 12,106, mode Overwhelming, Zero Point off, no reported invariant failures. Active radial shell counts: [21,218,454,553,768,899,1129,1650,2385,4029].

v2 report B: simulated 28.704 s, FPS 17.01, captured 0, active 100,000, mode Strong, Zero Point off, contacts 8,159,213, wall bounces 1,050,784, no reported invariant failures. Radial counts: [303,867,1167,1609,2009,2525,3373,5579,13677,68891]. The outermost equal-width shell held 68.891% of beads, but raw counts are NOT densities: spherical shell volumes vary, requiring normalization by 4π/3 (r_outer³-r_inner³). The 17 FPS cause remains undiagnosed: render, simulation, throttling and scheduling were not isolated.

## v3 — gravity cleanup

User instruction: remove Zero Point entirely; insert Zero G and Microgravity into the ordered gravity cycle. Implemented build hermeticon-v3-shell-v7, commit 29158dacce1b02390b391f03d9a604f76119fab8.

The sole gravity control now cycles ZERO G → MICROGRAVITY → STRONG → OVERWHELMING → BLACK HOLE → repeat; starts Strong. Radial acceleration numerator by mode is 0, .3, 9, 105, 230; denominator is 1+r² times coefficient .12 for modes 0–2, .055 for mode 3, .025 for mode 4. Overwhelming has a repulsive core inside radius 1.7: acceleration = -125(1.7-r). Field acceleration is clamped ±500. Speed caps: 26 for modes 0–2, 42 for mode 3, 85 for mode 4. These are tuned simulation forces, not calibrated gravitation. Zero G means zero CENTRAL field, not no swirl or collisions. v3 commit and readback verified; no assistant-run public-browser validation.

## v4 — ✦ IMPULSE

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

## v5 — 🦠 PHAGE

User proposed one RED growing bead-eating phage randomly injected inside the volume per tap; agreed on 🦠 icon, visible solid body, growth by consumed volume. Implemented build hermeticon-v5-shell-v7, commit af9d255f68d9478d7009eb6bec011d27afa81063. Source syntax and GitHub readback verified. NO v5 runtime report received yet.

Each tap rejection-samples a position inside sphere with margin for initial radius 0.3. Phage velocity components initialize roughly ±3.5. A shared red IcosahedronGeometry(1,2) and red MeshStandardMaterial with subtle emission create individual visible solid meshes. Phages move ballistically and bounce at wall radius 9.83 minus their own radius, with approximate restitution .9. No explicit gravity on phages, steering, phage-phage collisions or mass/momentum exchange from feeding.

Each active bead is tested against every phage after its own integration and wall response, before its approximate bead-grid contact. Contact when center distance ≤ phage radius + 0.095 bead radius. The bead is marked swallowed[i]=2, distinct from black-hole swallowed[i]=1, and its position, velocity and RGB are zeroed. Phage eaten counter increments. Radius = cbrt(0.3³ + eaten × 0.095³), conserving assumed material volume up to common factor 4π/3. Black-hole capture wins if it happens earlier in the step. The GPU Points draw count remains 100k, so zeroed beads may still produce artifacts rather than being physically removed from buffer.

Inspector now reports phageSpawns, phageConsumed, and individual phage position, radius and eaten count; black-hole captured remains separate. Current feeding checks are O(active beads × phage count); many phages may cause an FPS regression. A phage-aware spatial index is a potential optimization, not yet implemented. Large phage wall constraints, overlap behavior and rendered zeroed vertices also deserve testing.

## Chronology and epistemic status

| Build | Change | Evidence |
|---|---|---|
| v1 | Initial 100k chaotic BB vessel | architecture and visual observations |
| v2 | Zero Point and three gravity modes | two measured inspector reports |
| v3 / 29158dac | remove Zero Point, add Zero G and Microgravity | GitHub commit/readback |
| v4 / 846a880f | localized impulse + radial instruments | commit/readback and full user report |
| v5 / af9d255f | red growing phages | commit/readback; awaiting user test |

## Open experiments and cautions

1. Test one v5 phage and verify consumed count, radius cube-root law, black-hole capture separation, wall behavior, and FPS; then test several phages.
2. Watch whether predators feed mainly in the dense outer shell or wander through the hollow interior; do not assert behavior before seeing results.
3. Normalize shell counts by shell volumes before describing densities.
4. Never equate sparse grid contact count with all real particle collisions.
5. Instrument gravity transitions and capture timeline to explain sudden changes in central population.
6. Distinguish instantaneous FPS, per-step CPU cost, render cost and dropped simulation time.
7. For the impulse hypothesis, measure time-resolved shell statistics after a single controlled tap rather than inferring a propagating wave from snapshots.
8. Treat Ledger as a historical account; consult live source before changing implementation.

**Arc of the experiment:** a chaotic bead medium → selectable central forces and absorbing horizon → one-shot radial disturbances → a red inhabitant that consumes the substrate and enlarges its own geometry. This is a progression from visual emergent structure toward consequential, composable inhabitants of an executable world.
