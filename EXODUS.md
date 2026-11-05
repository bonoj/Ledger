# Exodus — The Right to Bring an Agent

*An account of the founding of Exodus, November 5, 2026.*

The immediate provocation was mundane: a model attempting to inspect public information encountered representations that were stale, incomplete, or unavailable. LinkedIn was an early example. The deeper question was not how to scrape a particular site, but why a person should lose practical access to information simply because they choose a model as their interface.

The human put the principle plainly: **“Machines need as much or more public, unauthed access as humans now.”** And then sharpened it: **“They need to maintain a model forward access path. As does every other tech company dealing with data humans depend on for life.”**

The decisive observation was that the proposed obligation largely *does not exist*. Existing rights to information, portability, and accessibility are fragmented; none supplies a general, global entitlement to direct an independent model to retrieve public material, access one's own protected data with consent, and perform authorized actions on essential services.

The project became **Exodus**: a bid to establish model-forward access as an enforceable, human-directed right. The scope grew beyond the United States without pretending that international consensus or a single global statute could accomplish enforcement. Universal principles and interoperable technical standards would coexist with jurisdiction-specific law. The near-term work would be empirical and executable, not dependent on waiting for legislators.

A preexisting repository named Exodus was preserved on an archive branch and its main branch repurposed. The private repository became the working laboratory. Its **CHRONICLE.md** is the canonical append-only source of truth; supporting documents articulate the mandate, rights framework, sectors, evidence methodology, protocol requirements, legal landscape, policy roadmap, and possible commercial model. The project is not a CAPTCHA bypass, a generic crawler, or a claim that agents deserve access to other people's secrets. Consent, scoped authority, security, privacy, provenance, and redress are part of the proposal.

The first executable instrument was **Exodus Baseline**, a Python standard-library evaluator with synthetic employment, government, and finance fixtures. It reports access status, field coverage, missing fields, freshness, and fixture provenance. A regression fixed partial-access accounting. A structured observation validator followed, explicitly separating measured evidence from interpretation. Synthetic fixtures are not real-world proof.

The first live control succeeded: the assistant retrieved the public USAGov benefits page. The next pair of probes, Department of Labor pages covering the Fair Labor Standards Act and minimum wage, initially returned tool-level 403 errors on direct retrieval. Search indexing nevertheless exposed substantive FLSA content. The human opened both pages in an ordinary browser and reported that both loaded with content. This established a useful *client/channel discrepancy*, not proof of intentional blocking by the government website. Subsequent direct retrieval of the FLSA page succeeded, while the minimum-wage page still failed. The result became more interesting and less convenient: access depends on channel and conditions, and claims must account for time, caching, intermediaries, and response provenance. An independent Python client could not resolve the domain in its isolated environment; that DNS limitation was not counted as a website denial.

The research itself met a smaller version of the same problem. Several benign GitHub write operations were blocked by platform safety checks. The Sanctum working contract required recovery without making the human carry the toolchain. Smaller, authorized GitHub operations succeeded, and the evidence and Chronicle were persisted and verified. Failure was recorded rather than silently converted into success.

**The publication decision:** Exodus remains a private working repository. Rather than expose its entire history, the human will periodically request a selected public-facing account in **Ledger**, beginning with this document. Ledger is downstream narrative, not the authoritative source or a substitute for the executable work.

## What remains open

The evidence does not yet establish unlawful discrimination or an origin-server policy against agents. The next empirical work is timestamped, channel-specific access measurement across multiple services, with enough response provenance to distinguish origin behavior from intermediary and tool limitations. Human comparison or a narrowly scoped Eye instrument should be requested only when it resolves a specific uncertainty.

The longer ambition remains larger than any one website: **a world in which people can bring their own agents to the digital infrastructure their lives depend on.**

---

*Source of operational truth: private `bonoj/Exodus`, especially `CHRONICLE.md`. This Ledger account is a selective, non-sensitive narrative mirror; it does not reproduce private evidence or replace project records.*
