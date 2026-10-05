# Observer

A plain research ledger for the smallest useful spatial observation loop around model-authored executable 3D constructions.

This note records apparatus, hypotheses, methodology, evidence, failures, and next questions. It makes no claim of novelty. Ozymandias is provenance: the investigation began there, but the experiment no longer needs the crossing-folder format or the older name to remain legible.

## Posture

**Novelty claim: none. Significance claim: architectural.**

The ingredients are ordinary: executable geometry, bounded spatial sensing, ray intersection, surface normals, coverage sampling, continuity labels, refinement, and model interpretation. Active perception and active sensing are established research areas. The question here is narrower and practical:

> How little ordinary machinery is sufficient to let a general model inspect the spatial consequences of geometry it authors, detect when its understanding is incomplete, and eventually repair the construction?

The observer is deliberately not a second corrective agent. It is an instrument. The model remains author, interpreter, and eventual corrector.

## Lineage

Two earlier Home research candidates directly precede this experiment:

- **Confusion earns senses.** Neptunian's sensory apparatus was grown only when a demonstrated ambiguity required another faculty. Target scope and anonymous continuity were earned rather than designed up front.
- **Separate semantic construction from spatial verification.** Construct from relational/semantic intent; verify the executable consequence through independent spatial evidence.

Ozymandias carried the live investigation far enough for these ideas to become an apparatus. This ledger begins where the apparatus becomes independently testable.

---

# 2026-10-05 — Semantic Construction T1

## Research question

Can a model author a small 3D construction semantically, then receive only bounded geometric observations of the resulting executable object and recover enough spatial structure to inspect what was actually built rather than merely restating what was intended?

A stronger downstream question motivates the work:

> Can the loop become **construct → observe → diagnose → reconstruct**, without requiring pixels, a heavyweight modeling environment, or privileged semantic knowledge during observation?

T1 tests only the observation/reconstruction portion. It does not yet establish autonomous diagnosis or repair.

## Hypotheses

### H1 — Coarse structure is recoverable from bounded geometric sensing

A modest number of spatial probes carrying hit/miss, point, normal, and anonymous continuity should be sufficient for a later model to infer the major geometric organization of a small construction.

The observer does not need authored object names to distinguish a broad slab-like surface, a narrow vertical support, a long horizontal member, or a curved compact body.

### H2 — Semantic authorship and geometric observation can remain separate

The construction may be authored from semantic relationships, but the observer should report what exists spatially. Its evidence should not depend on the labels used to create the construction.

A mismatch between authored semantic inventory and observed geometric inventory is therefore evidence, not automatically an observer error.

### H3 — A refinement pass can test whether coarse coverage missed important structure

After a coarse pass establishes candidate continuities, a second coverage-refinement pass should search for geometry not captured by the first pass.

For T1, the operative completion signal was whether refinement discovered additional continuities.

### H4 — Failure is useful if it exposes the observer's actual boundary

The experiment does not require perfect reconstruction to succeed as research. A stable false-negative, false merge, occlusion failure, or premature convergence is valuable if it gives the next experiment a concrete discriminating target.

## Apparatus

### Executable world

The experiment runs inside the Betwixt / Interstice worldspace. The construction is an ordinary executable Three.js object rather than an offline mesh-analysis specimen.

The human can summon/focus the construction for inspection, but human interaction is not used to manually transport the object through the observer. The observer is responsible for positioning/orienting its sensing relationship to the target.

### Construction

Ground truth for scoring T1 contains five authored semantic things:

| id | kind | center | approximate extent |
| --- | --- | --- | --- |
| slab-A | slab | (3.0504, 16.5460, 22.4241) | 1.250 × 0.130 × 0.780 |
| post-A | post | (3.0504, 16.0410, 22.4241) | 0.170 × 0.880 × 0.170 |
| rail-A | rail | (3.6454, 16.1598, 22.4241) | 1.020 × 0.099 × 0.104 |
| ring-A | ring | (3.6454, 15.8578, 22.4241) | 0.584 × 0.584 × 0.084 |
| bead-A | bead | (3.6454, 15.5178, 22.4241) | 0.180 × 0.180 × 0.180 |

These labels are ground truth for post-hoc scoring. They are not the intended perceptual answer.

### Observer evidence

Each sense operation can return:

- target hit or miss;
- intersection distance;
- world-space hit point;
- surface normal;
- anonymous continuity identifier;
- occluder information when present.

The report also summarizes target bounds, continuity bounds, hit counts, mean normals, coverage passes, and the full sensing transcript.

The visible debug display is human eye candy / debugging assistance. It is not intended to carry the model-facing result.

### Coverage procedure

T1 used two passes:

1. **Coarse pass** — broad sampling intended to establish the major visible geometric continuities.
2. **Coverage-refinement pass** — additional sampling intended to discover geometry missed by the coarse pass.

The experiment produced a serialized observer report so that interpretation could occur after the runtime interaction and even across a conversation boundary.

## Result artifact

Report schema: `construction-observer-report/2`  
Mission: `semantic-construction-t1`  
Runtime build: `47653992`  
Created: `2026-10-05T16:44:02.041Z`

### Aggregate evidence

- total senses: **340**
- target hits: **159**
- misses: **181**
- occluded observations: **0**
- coarse pass: **132 senses → 4 continuities**
- refinement pass: **208 senses → 4 continuities**
- new continuities discovered during refinement: **0**

Observed target bounds:

- min: `(2.4254, 15.4278, 22.0341)`
- max: `(4.1554, 16.6110, 22.8141)`
- center: `(3.2904, 16.0194, 22.4241)`

## Observation-first interpretation

Before using the semantic inventory as an answer key, the four recovered continuities are independently interpretable from their spatial evidence.

### Continuity 1 — broad thin horizontal body

- hits: **81**
- observed min: `(2.4361, 16.4810, 22.0341)`
- observed max: `(3.6754, 16.6110, 22.8141)`
- approximate observed extent: **1.239 × 0.130 × 0.780**

The dimensions, distribution of hits, and axis-aligned normals support interpretation as a slab/platform.

Post-hoc ground truth: **slab-A**.

### Continuity 2 — narrow vertical body

- hits: **36**
- observed min: `(2.9654, 15.6582, 22.3409)`
- observed max: `(3.1354, 16.4413, 22.5073)`
- approximate observed extent: **0.170 × 0.783 × 0.166**

The narrow x/z footprint and much larger vertical extent support interpretation as a post/support.

Post-hoc ground truth: **post-A**.

### Continuity 3 — long thin horizontal member

- hits: **13**
- observed min: `(3.2904, 16.1176, 22.3807)`
- observed max: `(4.0891, 16.2093, 22.4675)`
- approximate observed extent: **0.799 × 0.092 × 0.087**

The long x extent and thin y/z dimensions support interpretation as a rail/beam.

Post-hoc ground truth: **rail-A**.

### Continuity 4 — compact curved body

- hits: **29**
- observed min: `(3.5491, 15.6766, 22.3838)`
- observed max: `(3.9367, 16.1104, 22.4645)`

The hit distribution and strongly varying normals distinguish this from the three box-like bodies. It is consistent with a curved/ring-like structure.

Post-hoc ground truth: **ring-A**.

## What T1 establishes

### 1. Major spatial organization survived the semantic-to-executable boundary

Without needing the authored labels as the perceptual representation, the report contains enough evidence to recover the major construction:

> a broad horizontal slab, a narrow vertical support, a thin projecting horizontal member, and a curved body below the projection.

This is stronger than confirming that rays intersected a mesh. The observations preserve enough structure for qualitative geometric reconstruction by the model.

### 2. The observer did not simply echo the semantic inventory

Ground truth contains **five** authored things. The observer reported **four** continuities.

That disagreement is important. The observation surface is capable of disagreeing with authorship rather than mechanically certifying it.

### 3. Refinement converged under its current criterion

The coarse pass found four continuities. Another 208 senses found no additional continuity.

Under the current completion rule, the observer had reason to regard the inventory as stable.

### 4. That convergence was wrong

The authored fifth object, **bead-A**, was not recovered as a fifth continuity.

Its authored bounds are:

- min: `(3.5554, 15.4278, 22.3341)`
- max: `(3.7354, 15.6078, 22.5141)`

The lowest observed y value for continuity 4 is `15.6766`. The bead's highest authored y value is `15.6078`.

Therefore there is approximately **0.0688 world units of vertical separation** between the lowest recovered ring evidence and the top of the bead's authored bounds.

This matters because it argues against the simple explanation that ring and bead were merely collapsed into one observed continuity. On the current evidence, the bead appears to have been **missed entirely**.

### 5. Occlusion does not explain the miss in the report's own terms

The report records **0 occluded observations**.

The observer therefore did not represent the missing bead as known-but-hidden. Under its evidence model, refinement completed without discovering that an additional object existed.

## Failure boundary

T1 exposes a specific false confidence:

> **Coverage convergence is not yet completeness.**

The observer can recover major topology while still failing to discover a small isolated component. More sampling alone did not fix the problem: the refinement pass added 208 senses and still discovered zero new continuities.

The problem is therefore not adequately described as “needs more rays.” The next experiment should discriminate among coverage strategy, scale sensitivity, sampling distribution, target-bound assumptions, and continuity discovery behavior.

This is a better outcome than a polished success because it gives the observer a concrete earned limitation.

## What T1 does not establish

T1 does **not** show that:

- the observer can guarantee complete geometry recovery;
- four continuities are a sufficient reconstruction of arbitrary constructions;
- the observer can identify malformed joints reliably;
- the observer can infer semantic object identity from geometry;
- the model can yet repair a defect from observer evidence alone;
- the method is novel;
- the current sensing strategy is efficient or optimal;
- Three.js is necessary to the architecture.

No such claims should be backfilled later without additional evidence.

## Architectural significance

The useful pattern so far is:

```
semantic intent
    ↓
model-authored executable construction
    ↓
independent bounded geometric observation
    ↓
compact inspectable evidence
    ↓
model interpretation
```

The intended extension is:

```
construct → observe → diagnose → reconstruct
```

The experiment is interesting because the machinery is small and ordinary. The environment is being made legible to the model rather than surrounding the model with a large corrective agent stack.

This sits comfortably inside the established territory of active perception / active sensing; the research value here is empirical and architectural, not a priority claim.

## Next hypothesis

### T2 — Small isolated geometry must be discoverable without privileged location

The bead is now the test.

Do **not** tell the observer where the bead is during the next observation pass.

Modify the observer's coverage/refinement behavior only as necessary so that an unprompted observation of the same construction discovers the small isolated body as distinct geometric evidence.

Success should not be defined merely as “five” because that would overfit the answer key. The stronger criterion is:

> the observer has a coverage rule that can justify continued search when its current model may be incomplete across scale, and the resulting evidence independently exposes the bead-sized component.

Ground truth may be used afterward for scoring.

## Open questions

- What caused the bead miss: angular sampling, spatial sampling, scale, bounds, refinement targeting, or another assumption?
- Can the observer estimate uncertainty or unresolved volume instead of treating “no new continuity” as completion?
- Can refinement allocate sensing according to unexplained space or scale rather than uniformly increasing sample count?
- What is the smallest object, gap, penetration, or disconnected fragment the current observer can reliably detect?
- When two authored semantic things are genuinely touching, should they remain one geometric continuity? Probably yes; semantic count and continuity count should not be forced to agree.
- Can a cold model diagnose a deliberately malformed construction from the report without access to semantic ground truth?
- What compact evidence can replace the 340-step transcript once we know which summaries preserve diagnostic power?
- How little human transport remains before the entire observation report can return directly to the model?

## Evidence standard for this line

For each subsequent test preserve:

1. exact runtime/build revision;
2. construction ground truth, hidden from observation but available for scoring;
3. observer configuration/procedure;
4. serialized report;
5. observation-first interpretation made before consulting ground truth;
6. post-hoc comparison;
7. failure or newly earned distinction;
8. the next falsifiable question.

Do not turn this into ceremony. Preserve these when the experiment produces expensive knowledge.

---

## Status

**T1 complete.**

Major geometry recovery: **yes**.  
Independent disagreement with semantic inventory: **yes**.  
Coverage refinement: **executed**.  
Coverage completeness: **failed**.  
Concrete next target: **small isolated bead discovery without privileged location**.

The observer has earned its next sense.
