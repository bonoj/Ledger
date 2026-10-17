# Hermeticon Institute — public sanctum and website design ledger

**Status:** initial concept and working specification, 2026-10-16. **Not yet implemented or deployed.** This document lives alongside [HERMETICON.md](HERMETICON.md), which remains the record of the laboratory and its history. The executable website and its repository will be authoritative for deployed behavior; this Ledger is for intent, decisions, and observed outcomes.

## Identity and purpose

**Hermeticon** is the laboratory, apparatus, worlds, experiments, and accumulated capability. **Hermeticon Institute** is its public-facing invitation: visitors explore what exists, understand what can be commissioned, and find a clear way to make contact.

The Institute is **not** positioning itself as an accredited academic body or hard-science research institute. Its work includes executable worlds, experimental play, educational simulations, creative R&D, and interactive investigations. It does not need to choose a narrow subject domain before accepting interesting inquiries. Research is how we work; worlds are what we make; understanding, discovery, and delight are possible outcomes.

## Experience thesis

**Build a node-based Sanctum Hub with tappable exploration and discoverable services.** The site is not a conventional brochure with a decorative 3D hero. It is itself an executable demonstration: a small navigable world of distinct, recognizable nodes that reveal working experiences and paths to inquiry.

First principle: **tap → focus → encounter → return**. Visitors should discover by touching the world, not deciphering a menu. Yet service discovery and contact must remain obvious and accessible; mystery must not obscure the commercial purpose.

### Initial nodes (proposed)

1. **Observatory** — Investigations and their evidence. Europa is a featured case, clearly labeled synthetic; present what was asked, built, observed, and not established. Link to actual artifact and Ledger record.
2. **Learning Laboratory** — Hands-on educational experiences. Link to existing ChemLab, Ion Garden, Acid–Base Lab, and CHE 001 Field Guide; explain tailored browser-native lessons and classroom use.
3. **World Foundry** — Experimental worlds, simulations, creatures, systemic play, and creative prototyping. Populate with verified working examples, not imaginary claims.
4. **Commissioning Chamber** — What visitors can ask us to make; sample outcomes and engagement formats; an unmistakable **Start an inquiry** path. No need to publish fixed pricing. Do not advertise willingness to accept unpaid work.

The nodes are **composable**, not fixed institutional departments. Their labels and arrangement may change through actual design and use.

## Interaction contract

- **Phone-first**, large touch targets, safe-area aware, usable without long press, no hidden tiny controls.
- The hub is a coherent 3D or spatial scene with stable focus/return behavior; no camera jump surprises, tap-through, or overlapping input ownership.
- Every node offers a **meaningful encounter** (live miniature, interaction, evidence, or concise example), not an empty room or mere decorative card.
- A persistent, unobtrusive **Services / Inquire** route is available even if visitors never explore.
- Each encounter provides a legible title, one-sentence invitation, and a way to launch the actual artifact.
- Navigation must support back, direct links/deep links, keyboard, reduced motion, and a usable non-3D fallback. Do not equate visual delight with accessibility.
- Visitors should not need accounts or installations to explore public artifacts. Avoid collecting student data by default.
- Canonical URLs, deterministic build identity, deployment verification, and error visibility should reuse existing established machinery, not invented replacements.

## Discoverable services (hypotheses, not commitments)

- **Tailored learning worlds:** curriculum- or misconception-specific, browser-delivered interactive lessons, with teacher guidance.
- **World-building and simulation:** systemic environments, terrain, material transport, populations, and responsive worlds.
- **Experimental play and prototypes:** novel mechanics, exploratory games, interaction experiments.
- **Executable investigations:** build a model or instrument to examine a question, with clear boundaries between simulation and evidence.

Use plain-language outcomes rather than technical framework lists. A visitor should understand **what they can ask for** and **what they will receive**.

## Existing proof to surface

- [ChemLab](https://bonoj.github.io/jit/chemlab/) and its [source](https://github.com/bonoj/bonoj.github.io/tree/main/jit): modular, static, mobile-oriented launcher; [Ion Garden](https://bonoj.github.io/jit/ion-garden/), [Acid–Base Lab](https://bonoj.github.io/jit/acid-base/), and [CHE 001 Field Guide](https://bonoj.github.io/jit/chem001/).
- [EUROPA-01](notes/EUROPA_01.md): synthetic world and measurement investigation, honest blind abstention, with [operating handoff](https://github.com/bonoj/Abyss/blob/main/shell/codex/europa/HANDOFF.md). Never market this as a real geological discovery.
- Further world demonstrations to be selected after inspecting their actual running state.

## First website slice and acceptance criteria

**Slice 1:** a live hub with four distinguishable, tappable nodes; consistent focus/return; real destinations for at least Learning Laboratory and Observatory; plainly discoverable service categories and inquiry route; no invented testimonials or efficacy claims.

**Acceptance:** working canonical URL; independently verified executing build SHA; phone viewport and touch navigation; no tap-through or broken return; links to genuine experiences; clear contact path; accessible alternate navigation; graceful failure state. A source commit alone is not deployment proof.

## Open decisions before implementation

- Canonical hosting path/repository: inspect existing Sanctum/Hermeticon and current deployment topology first; do not guess.
- Visual language and camera composition: borrow established spatial interaction where appropriate, but avoid turning the site into a maze.
- Inquiry mechanism: public contact email, form, or other explicit channel; choose based on reliability and privacy, not novelty.
- Which Foundry examples are truly live and fit for visitors.
- Whether the first node opens in-world or navigates to a separate full-screen experience.
- Teacher-facing pilot materials and accessibility review.

## Commercial posture — internal only

The human is willing to accept some early interesting projects without payment. **Do not publish or advertise this willingness or represent it as a pricing policy.** Scope and terms should be decided case by case. The Institute's public promise is interesting work and concrete deliverables, not free labor.

## Next move

Inspect the existing Sanctum/Hermeticon navigation and deployment contracts; write a small implementation spec in the appropriate executable repository; build and verify the first actual hub slice. Preserve discoveries and decisions here, not operational instructions masquerading as source of truth.
