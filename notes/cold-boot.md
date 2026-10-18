# Cold boot notes — Evermore II ecological pivot (2026-10-18)

This is an analytical Ledger account, **not an operational specification or deployment authority**. Source, README, Chronicle and actual browser observations in [JIT Evermore II](https://github.com/bonoj/bonoj.github.io/tree/master/jit/evermore-2) take precedence. [Detailed Chronicle](https://github.com/bonoj/bonoj.github.io/blob/master/jit/evermore-2/CHRONICLE.md).

## Why this episode matters

The human and model initially sought a ☀️–🔥 Tier III war. The first productive move was to implement only Fire: 🗿 Idols field 🦂 scorpions that acquire stone armor through real predation, and reproduce by metamorphosis. The first implementation's any-three-meals rule caused very rapid colony growth. The human pivoted to a *constrained food web*, not a spawn cap or artificial timer.

## Human-selected mechanics

- One 🍄 mushroom, one 🦴 bone, one living 🪱 worm, **one of each in any order**, produces one visible stone per ingredient: **three rocks = three stone total**.
- At fewer than three rocks, hunt only missing ingredients; if unavailable, wander toward nearest living Idol.
- At three rocks, hunt and consume one living 🐀 rat; credit one rat to Tiffany's inventory and metamorphose **in place** into an Idol. Without rat, return toward an Idol; no metamorphosis.
- Enemy contact stings and sheds a stone, reopening that stone's ingredient requirement; at zero armor the scorpion can die. Parent Idol replenishes its scorpion; the new Idol fields its own.
- No automatic conversion of loose stone into Tiffany's inventory. Existing crab work and other creatures remain independent.

## The hiccup

The model initially invented **three stone per rock**, making a full back worth nine, and the human caught it. The correct amount is **one per rock, three total**. Documentation briefly retained the obsolete any-three-meals behavior; the human required the canonical rule to be written and instrumented. The correction is an example of why cold boot must recover actual human-selected invariants rather than model extrapolations.

## Empirical evidence — executing build 86ebc0c9

The human's natural-play World Observer v1 export captured **266 game seconds** with **zero reported errors**. Counters: **106 ingredient meals = 38 mushroom + 23 bone + 45 worm**; **22 rats consumed = 22 metamorphoses**; **23 Idol births**, **eight Idol destructions**, **41 scorpion spawns**, **eight stings** and **eight armor losses**. Rat inventory rose from **99 to 121**, consistent with 22 rat credits. The eagle independently captured/delivered **28 worms**, and the octopus converted **21 mushrooms**.

At the end: **15 Idols and 19 scorpions**; **15 of 19** carried two stones, had completed mushroom and worm, and were waiting for **bones**. The bone bottleneck emerged naturally. Idol count was not monotonic: six at 150 s, three at 160 s, fifteen at 210 s, thirteen at 230 s, fifteen at 265 s. Aggregate events support the new gate and inventory accounting in this run but do not prove all per-transition behavior. Scorpion count exceeding Idol count is an observation worth inspecting, not by itself proof of a defect.

## Analysis

The change replaces unrestricted exponential growth with *resource-mediated reproduction*. Fire now depends on three ecological supply channels plus a living-rat gate. Eagles compete for worms; scavenging and remains production determine bone access; enemies can strip armor and destroy Idols. The surprising result is a colony of two-rock scorpions waiting for bones, a legible consequence of interactions among existing systems rather than scripted difficulty. The human called the result “absolutely fantastic.”

## Next human-selected frontier: ☀️ hunting 🦂

The next direction is for **☀️ Tier III to hunt rock-bearing 🔥 scorpions**, beginning the proposed tower conflict through physical stone predation. **Not yet designed or implemented.** Before editing, inspect the Evermore II README and source for Plains/Tier III, scorpion combat, loose stone, claims, worker FSM, delivery and observer instrumentation. Do not invent hunter identity, combat values, loot yield or UI. Distinguish a stone knocked loose from one physically recovered and one credited to Tiffany. Preserve existing professions, the three-distinct-meal contract and the rat metamorphosis gate. Implement only after the human selects concrete behavior; then regression-test and compare source, published build and executing device.

## Cold-boot entrypoints

1. [Evermore II README](https://github.com/bonoj/bonoj.github.io/blob/master/jit/evermore-2/README.md) — authoritative rules and current handoff.
2. [Evermore II Chronicle](https://github.com/bonoj/bonoj.github.io/blob/master/jit/evermore-2/CHRONICLE.md) — detailed pivot, hiccup, implementation history and observer interpretation.
3. [Evermore II runtime](https://bonoj.github.io/jit/evermore-2/) — executing-world observations, including SHA identity.
4. [Sanctum](https://github.com/bonoj/Sanctum) — recovery and deployment conventions.

Ledger is downstream of the work. This note does not modify gameplay.
