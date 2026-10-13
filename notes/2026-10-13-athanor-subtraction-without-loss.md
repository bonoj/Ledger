# 2026-10-13 — Athanor: Subtraction Without Loss
*Hermeticon · Runtime extraction · Regression · Deployment · Instrumented witness*

## The decision

Hermeticon had become more than a single Wanderer experiment. We wanted a composable apparatus that could host worlds without recreating the observer, camera, lighting, inspection controls, and deployment mechanics for every new vessel. We chose **athanor**, the alchemical furnace, as the name for that reusable runtime.

The naming boundary matters:

- **Hermeticon is the application and world project.** Its visible name remains HERMETICON.
- **Athanor is the apparatus**: reusable rendering, camera, lighting, interface and observation machinery.
- **Hermeticon's world** supplies geometry, materials, physics and world-specific actions.
- **Crucible** is a transformation instrument, not the universal runtime.

An athanor is a substantial piece of laboratory equipment. It is not the name of the entire laboratory. The metaphor helps maintain the software boundary.

The source of truth was the *already-working* Wanderer, preserved at `examples/wanderer-separated/`. The requirement was explicit: **use the existing code and subtract without loss**. The reference specimen was not to be rewritten or broken. Both the repository root and `/athanor/` were to expose the extracted apparatus, not competing applications.

## The first wrong turn: an imitation instead of an extraction

The model was responsible for this detour; the human identified the regression and reasserted the original contract.

We initially cloned the Wanderer into `athanor/` (commit `a245047b`) and arranged the two public entrances (`fda7c2fe`). Then the implementation drifted.

A new standalone `shell.html` was invented, with substitute styling, rewritten orbit/lighting, and a generic empty ATHANOR view. It was a superficially plausible minimal viewer, but it discarded established interface decisions and changed the name of the application. Screenshots made the regression unmistakable: a generic empty screen beside the original brass-and-Georgia Hermeticon.

The human had not asked for a redesign; the model nevertheless substituted a new implementation. They had asked for *subtraction*. The difference was not cosmetic: rebuilding a known-good wheel discards tacit contracts that the original already embodied. The model's substitute shell was retired.

Commits `9cb808f4`, `931c7e43`, and `1db006b9` document this detour. Commit `5d1cf28b` returned to the original Wanderer implementation, retaining its interface stylesheet and controls, orbital drag and pinch logic, renderer and three-light arrangement while removing the Wanderer-specific simulation and action buttons. `athanor/shell.html` was deleted. The world mount was deliberately empty.

**An empty mount is a feature of the extraction test, not a missing demo.** We did not add a debug sphere merely to make the screen interesting.

## The second wrong turn: preserved appearance, broken contracts

The model preserved the visible controls but changed their behavior. The human detected the discrepancy.

The extracted app looked closer to its source, but two behaviors had been changed:

1. **The 👁 contract was lost.** In Wanderer, tapping the eye generated a fresh JSON report and copied it immediately. A selection-based legacy clipboard fallback was already implemented. Extraction instead wired 👁 to open an inspection popup, with copying hidden behind a second button. The popup existed in the original interface, but it was *not* the eye's action. Preserving a button while changing its contract is not preservation.
2. **Build provenance was missing.** The script requested `../build.json` relative to the document. From the repository root this could resolve outside the Hermeticon deployment. The app ran but displayed an unverified build marker. The correct resolution was relative to the JavaScript module URL, using `import.meta.url`.

There was a third identity regression: the visible application had been renamed ATHANOR. The human corrected the conceptual boundary explicitly: **the app is Hermeticon**.

Commit `4792f924` restored the HERMETICON title, the original direct eye-to-clipboard action and fallback, corrected build metadata resolution, and extended the minimal JSON report with camera and light measurements.

That commit deployed successfully, yet the human saw the new HERMETICON heading alongside the *old* eye behavior and missing build number. This was the third wrong turn: **the HTML was fresh but the JavaScript was cached**. The publishing workflow had not attached a deployment identity to the extracted module URL. A successful Pages job and fresh markup did not prove the running JavaScript was current.

Commit `3fc13086` fixed the publication boundary by appending the deployed SHA to the module reference at both public entrances. The lesson is precise: **source correctness, successful deployment and client-executed revision are separate facts**.

## Verification: a world with nothing to look at

The model added minimal instrumentation; the human exercised the live apparatus and returned the reports. The evidence was produced jointly, with distinct responsibilities.

The human supplied an actual eye-copied report from build:

`3fc130869c246892a942e78127b8769ccb65656b`

The first report established a zero-child world mount and exposed the original camera and light settings. The next showed approximately **59.93 FPS** after the measurement window settled.

Initial camera:
```json
{
  "azimuth": 0.6,
  "elevation": 0.27,
  "distance": 55.25534089464358,
  "targetY": 0,
  "fov": 42,
  "position": [30.069181984737984, 14.738336461559406, 43.9520014390454],
  "aspect": 0.553314121037464,
  "near": 0.1,
  "far": 150
}
```

The light configuration was inspectable without geometry: hemisphere intensity **1.5**; directional intensity **2.4** at **(-7, 13, 7)**; point intensity **95** at **(2, -2, 2)**. The renderer reported **652 × 1179** backing pixels at pixel ratio **1.7**.

Then the human orbited and zoomed, and copied another report:

```json
{
  "fps": 101.07466741240837,
  "camera": {
    "azimuth": -0.8467499999999999,
    "elevation": 1.2,
    "distance": 25.91101819105491,
    "position": [-7.0336393411499865, 24.150081711270992, 6.219512412942028]
  }
}
```

The camera's azimuth moved from **0.6 to -0.84675**; elevation reached its **1.2-radian clamp**; orbital distance contracted from **55.26 to 25.91** (roughly 53%). The position changed consistently with those values. The three lights retained their settings.

The high FPS sample is an observed frame-timing result, not a promise of a 101 Hz display or a performance target. The first `fps: null` meant the sampling window had not yet finished, not that rendering failed.

**What was proven:** the correct deployed revision ran; the eye copied JSON; the empty world rendered; camera drag, vertical orbit and zoom changed inspectable state; light configuration survived extraction.

**What was not proven:** lighting's visual effect on actual surfaces, shadow quality, or behavior of a future mounted world. We did not pretend otherwise.

The human's observation captures the value of the exercise: *“I can't see the camera effect but now I don't have to wonder.”*

## Engineering consequences

1. **Extract, do not emulate.** Copy the existing contract before removing world-specific dependencies. No invented shell, replacement interface, decorative test geometry or gratuitous new interaction.
2. **Separate names from responsibilities.** Hermeticon remains the app; Athanor is its reusable apparatus. Internal decomposition must not silently rename the product.
3. **Regression fixtures are living evidence.** Keep the working Wanderer independently accessible and untouched; it is the behavioral reference for every subtraction.
4. **Inspection is an interface contract.** 👁 means *fresh JSON copied now*, including a practical fallback. A hidden popup is not an equivalent substitute.
5. **Version the bytes the browser executes.** Stamping HTML is insufficient if a module URL remains cacheable across deployments. Build identity should be checked in the report, not inferred from a green workflow.
6. **Measure invisible systems at their seams.** A camera does not require a visible object to demonstrate orbital state transitions. Instrument the minimum sufficient values and let the human return a report.
7. **Do not conflate evidence levels.** A committed fix, a completed Pages run, a rendered screenshot, and a human-supplied inspection report answer different questions.
8. **Failures belong in the ledger.** The frustrating detours are part of the engineering record because they identify where human–model collaboration loses time: substituting for solved mechanisms, changing established affordances, and claiming success before the running artifact is witnessed.

## Current boundary and next work

At the end of this crossing, Hermeticon's public entrances expose the same extracted Athanor apparatus, the application retains its HERMETICON identity, the Wanderer reference remains intact, and the empty mount is instrumented. The camera and clipboard contracts are evidenced by human-supplied JSON; lighting configuration is evidenced but visual illumination remains untested.

Next, compose a world into the empty mount **without re-solving the observer**. Preserve the UI, camera, lighting and inspection contracts, and extend the report only when a new question demands it.

> **Athanor operates. Hermeticon contains. Crucible transforms.**
>
> The extraction succeeded when the apparatus became invisible as a source of uncertainty—not when we made the empty screen visually impressive.

### Trace

- [Hermeticon repository](https://github.com/bonoj/Hermeticon)
- [Working Wanderer fixture](https://github.com/bonoj/Hermeticon/tree/main/examples/wanderer-separated)
- [Return to source: `5d1cf28b`](https://github.com/bonoj/Hermeticon/commit/5d1cf28b562e5896bbbb6bb39ded5ce7d683f9bc)
- [Restore contracts: `4792f924`](https://github.com/bonoj/Hermeticon/commit/4792f924bcf6a7c1d5cb03b437cff630de3e409b)
- [Version the published module: `3fc13086`](https://github.com/bonoj/Hermeticon/commit/3fc130869c246892a942e78127b8769ccb65656b)
