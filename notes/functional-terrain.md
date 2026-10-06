# Functional Terrain

Living theory note. This is deliberately allowed to change as executable evidence changes our minds.

## Why this exists

We are trying to make large, legible worlds without paying for a giant pregenerated world description and without collapsing everything into homogeneous layered noise.

The working direction is **functional terrain**: cheap deterministic fields establish large-scale constraints and jurisdiction; heterogeneous local functions turn those constraints into matter; once matter acquires consequences, history rather than the generating function becomes authoritative.

The desired property is not merely infinite terrain. It is terrain that still has **composition** when viewed at world scale and **specificity** when approached locally.

> Infinity comes from addressability, not pregeneration.
>
> Variety comes from heterogeneous functions, not noise.
>
> Coherence comes from local jurisdiction and boundary conditions.
>
> Persistence stores history, not existence.

## Evidence we have now

### Functional d20

The first useful experiment assigned independent mutable functions to the twenty triangular faces of a d20.

The important discovery was not the polyhedron. It was the boundary condition: each function could be radically different inside its jurisdiction if its contribution attenuated to a shared neutral value at the edge.

The boundary is intentionally boring. That boring treaty lets neighboring generators remain ignorant of one another.

A useful abstraction emerged:

```
W(x,z) = sum_i A_i(x,z) F_i(x,z)
```

where `F_i` is a local world/biome function and `A_i` is its bounded jurisdiction/attenuation.

### Functional Biomes in Crucible

We then moved the idea into actual deformable terrain.

Nine functional sites were given qualitatively different terrain functions: dunes, basin, ridges, terraces, crater, knolls, canyon, radial waves, and spire. Nearest-site jurisdiction assigned space; the nearest/runner-up distance gap attenuated each contribution toward the shared neutral surface at seams.

This produced genuinely heterogeneous terrain rather than parameter variations of one noise recipe.

The first implementation repeatedly recomputed/remeshed the field and caused frame drops. The useful implementation became:

**sample once -> reveal/commit incrementally under a frame budget -> bake -> surrender constructor authority**

The final materialization pass:
- samples the target field once;
- orders scalar columns for realization;
- commits only a bounded amount of work per frame;
- rebuilds only touched chunks during realization;
- finishes late rather than hitching on a slow device;
- performs a final bake/support rebuild;
- then becomes ordinary deformable terrain.

This gave us an important lifecycle:

**function-authored virgin state -> bounded realization -> ordinary mutable field -> history**

Or more generally:

**functions describe places without histories; fields describe places that have acquired histories.**

Functional Biomes has now been promoted into Repository terrain Fundamentals and is in active use by Betwixt Crucible.

## Current hypothesis: separate the jobs

The next terrain experiment should stop asking one function/noise stack to determine elevation, geographic expression, and biome identity simultaneously.

Instead, use independent cheap 2D maps with distinct responsibilities.

### 1. Elevation-tier map

A first 2D noise field determines **macro elevation regime**.

Quantize it into tiers rather than treating it as final terrain height.

Conceptually:

```
E(x,z) = Q(N_e(x,z))
```

This answers: *what altitude regime is this place in?*

Examples might be lowland, shelf, upland, highland. The exact number and spacing of tiers are experimental.

The tier field should establish world-scale topology/composition without prescribing local morphology.

### 2. Extrusion-permission map

A second independent 2D noise field determines **where and how strongly terrain is allowed to depart from its elevation tier**.

```
M(x,z) = permission(N_x(x,z))
```

This is not itself a mountain/canyon/dune generator. It is permission for local terrain expression.

The independence of `E` and `M` creates useful combinations before biome identity exists:

- high tier + low extrusion -> plateau/tableland;
- low tier + high extrusion -> articulated basin/valley country;
- high tier + high extrusion -> severe high-relief country;
- low tier + low extrusion -> plains/quiet lowlands.

This may be a powerful anti-oatmeal mechanism because macro elevation and local relief are no longer correlated by one noise source.

### 3. Octagonal biome jurisdiction map

A third map establishes **discrete octagonal biome jurisdictions**.

Each octagonal region owns a local biome function `F_b(x,z)`. Its contribution attenuates hard to **exactly zero** at the jurisdiction boundary.

```
B(x,z) = A_oct(x,z) F_b(x,z)
```

with:

```
A_oct = 0
```

on the boundary.

The zero boundary is the treaty. Adjacent biome functions do not need to understand one another.

A mountain function can meet a dune function; a canyon can meet karst; a salt flat can be almost zero. They share the macro elevation substrate, while incompatible local generators disappear at their own edges.

Octagons are intentionally worth testing as an explicit computational jurisdiction rather than pretending the allocation itself must look natural. The local functions and attenuation may erase most of the visible geometric regularity while retaining cheap, addressable ownership.

## Candidate composition

The current sketch is:

```
H(x,z) = E(x,z) + M(x,z) * A_oct(x,z) * F_b(x,z)
```

This is a hypothesis, not an earned final equation.

Its useful separation is:

- `E`: macro altitude / topology
- `M`: permission and strength of local relief
- `A_oct`: jurisdiction and safe boundary
- `F_b`: categorical local terrain behavior

The maps establish constraints. The biome function compiles those constraints into matter.

## What we should inspect separately

For the next executable experiment, keep each layer independently visible/inspectable:

1. elevation tiers
2. extrusion permission
3. octagonal biome jurisdiction
4. composed terrain

This is diagnostic, not necessarily permanent UI. We want to know which layer created a good or bad result rather than judging an opaque final surface.

## What we are trying to learn

Questions, not commitments:

- Do elevation tiers create legible macro composition or merely visible terracing?
- What quantization/transition rule lets tiers remain meaningful without looking artificial?
- Should extrusion permission be binary, tiered, continuous, or locally thresholded?
- Do independent elevation and extrusion fields create categorical geography rather than oatmeal?
- How large should octagonal jurisdictions be relative to macro elevation features?
- How narrow should hard-to-zero biome attenuation be?
- Do octagons remain perceptually visible after local terrain realization? If so, is that bad?
- Can biome functions remain completely ignorant of neighbors?
- Does a shared zero boundary remain sufficient once water, erosion, roads, settlements, and other systems acquire history?
- At what moment should virgin functional terrain bake into ordinary mutable matter?
- Can distant terrain remain purely functional/addressable while only approached or changed regions become materialized fields?

## Longer direction

A useful world should support a causal LOD:

**world topology -> biome/region -> terrain morphology -> features -> local structure -> mutable matter -> history**

At the farthest scale, we should still be able to see that the world has a composition. As we approach, progressively more specific functions may become worth evaluating. On first persistent consequence, the affected region can stop being merely recomputable virgin mathematics and become historical state.

The target remains:

**cheap declarative geography -> heterogeneous executable terrain -> bounded materialization -> ordinary systems play -> persistent consequence**

This note should be refined by experiments rather than defended as doctrine.
