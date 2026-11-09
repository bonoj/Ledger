# JIT MCP — The Day a Conversation Reached an Android Browser

**Retrospective dated 2026-11-09 UTC**  
**Development window:** 2026-11-08 through 2026-11-09 UTC; culminating in live Android acceptance at 04:27:40.774304Z on November 9.  
**Repositories:** [JIT MCP in bonoj.github.io](https://github.com/bonoj/bonoj.github.io/tree/master/jit/mcp/) · [Ledger](https://github.com/bonoj/Ledger).  
**Nature of this entry:** a historical account of what a human and a model made together, including the wrong turns and their cost. It is not an operational specification. Live source, deployed services, [EXPERIMENTS.md](https://github.com/bonoj/bonoj.github.io/blob/master/jit/mcp/EXPERIMENTS.md), [INVARIANTS.md](https://github.com/bonoj/bonoj.github.io/blob/master/jit/mcp/INVARIANTS.md), and [HANDOFF.md](https://github.com/bonoj/bonoj.github.io/blob/master/jit/mcp/HANDOFF.md) remain authoritative for implementation and next actions.

---

## 1. The proposition

The ambition was deceptively simple: a human, using an ordinary ChatGPT conversation on an Android phone, should be able to ask the model to inspect and interact with a real webpage running on that same phone. The model should receive authentic observations and act through a real, visible, consented browser—not a pretend DOM, a screenshot transcribed by the human, a cloud-hosted browser standing in for the device, or an Android debugging session driven from a laptop.

The larger ambition was durability. Once the native Android companion was installed and enrolled, new browser capabilities should be introduced through **versioned, remotely delivered, cryptographically authenticated JavaScript**, without habitually reinstalling the APK, changing the private ChatGPT plugin, modifying the Site gateway, or redeploying Supabase. The human should not have to carry the entire engineering state across chats or manually bridge every command. The architecture had to make the model useful from the ordinary ChatGPT app, not merely from Work or a development-only environment.

That target forced the project to solve several distinct problems: whether a private custom plugin could be created and invoked from ordinary Android ChatGPT; how a Site-hosted tool could communicate with a physical Android app; how that app could inspect an actual third-party WebView DOM; how commands and results could cross the network without fabricating execution; how to preserve device enrollment, foreground consent, per-origin authorization and immediate revocation; how to keep the native shell stable while upgrading browser logic; and, finally, whether the model could perform a real browser action and receive evidence from the device.

By the end of the recorded work, the answer was **yes for live observation, paginated control extraction, remote scrolling and a real text-field fill**. A full multi-step browser automation acceptance, especially a verified click/navigation lifecycle, remained unfinished. This distinction matters throughout the story.

## 2. The early uncertainty: was ordinary ChatGPT even a viable control surface?

The first investigations were product-path investigations, not Android coding. The team checked the difference between plugin creation, custom MCP connections, ChatGPT Sites, Work, web-only development flows and ordinary mobile chats. Documentation for custom MCP connections did not itself establish that an independently created tool would be callable in an ordinary Android conversation. A Work-based quickstart would not satisfy the objective. Nor would a third-party cloud browser agent, even if it could browse websites successfully.

The original experiments ledger E0–E5 began cautiously. E0 established that ordinary conversations could invoke already installed connectors, but that did not prove custom tool availability. E1 and E2 asked whether a private tool-only plugin could be created, installed, and invoked outside Work. E3 asked whether an authenticated command could reach a device and return device-originated data. E4 asked how the phone could expose a browser surface within Android's permissions and isolation model. E5 asked whether a harmless control could actually be actuated and verified.

The eventual path was a **private, tool-only JIT MCP plugin** with a fixed six-tool public identity. The existing tool signatures were preserved:

- `integration_ping`
- `device_status`
- `browser_observe`
- `jit_capabilities`
- `jit_invoke`
- `jit_observe`

The distinction between the outer tool identity and the inner capability protocol became central. `jit_capabilities` discovers supported versioned operations; `jit_invoke` carries those operations and their results. The older Chrome/page-sharing tools remained for compatibility but became a trap when they were mistakenly used to diagnose the new native WebView. A legacy tool could report `sharing_disabled` or a stale Chrome session even while the Android WebView was successfully returning live observations. This was not an Android enrollment failure; it was a routing error by the model.

The project ultimately proved the key product-path requirement: a normal ChatGPT conversation on Android invoked the installed private plugin and received completed, device-generated WebView results. No Work-mode-only substitute was required for the live acceptance.

## 3. The architecture that emerged

The working chain was:

```text
Human in ordinary ChatGPT on Android
    |
    v
Private JIT MCP plugin (six stable public tools)
    |
    v
ChatGPT Site gateway / MCP authentication adapter
    |
    v
Supabase Edge Function + private Postgres transport
    |
    v
Authenticated enrolled Android companion
    |
    v
Foreground, user-shared Android WebView
    |
    v
Versioned signed JavaScript runtime operating on the real DOM
    |
    +--> result, revision, runtime version, origin and UTC timestamp
          returned through the same transport to ordinary ChatGPT
```

The GitHub repository was `bonoj/bonoj.github.io`, branch `master`, under `jit/mcp/`. The Supabase project was `iqglyokmcobegledbfcm`; the Edge Function was `jit-mcp-capabilities`; the transport used private `jit_browser` schema objects. The Site gateway was `https://jit-mcp.bracedbuddy1.chatgpt.site`. The Android application package was `org.hermeticon.jitbrowser`. The native companion owned the WebView, lifecycle, navigation surface, enrollment, authenticated polling/transport, signing verification and consent boundary. The remote JavaScript runtime owned bounded DOM observation and browser-operation semantics.

**The design was intentionally not a general-purpose remote desktop or Chrome-tab controller.** The user explicitly operated a visible WebView owned by the companion. It did not grant the model arbitrary access to Chrome tabs, browser cookies, other applications, or the entire phone. The device's origin, sharing state and user approval were part of the security model. The model's authority was meant to remain narrow, visible, revocable and auditable.

A stable envelope became the extensibility mechanism: `protocol_version`, `operation`, `schema_version`, `expected_revision`, and bounded `payload` for commands, followed by command-ID-based result retrieval. This replaced the earlier tendency to hardcode each newly observed DOM field or action into the gateway and backend. A plugin-facing request could be queued without yet being executed; therefore **pending was never supposed to mean success**. The result needed to come from the Android execution path.

## 4. E3–E5: transport, enrollment, authentication and authority

The project progressed from the capability backend to a real enrolled Android endpoint. The private Supabase transport separated owner/device authentication from browser operation content. Enrollment was single-use; command enqueue and claim were constrained by ownership, origin, foreground session and expiry. The backend was tested for concurrent enqueue, atomic claim, replay, origin isolation, expiration and Stop behavior. The exact database schema and SQL functions live in the implementation repository; this retrospective preserves the architectural purpose rather than duplicating secrets or internal credentials.

The critical boundary was **who is allowed to make the device do something**. The plugin being installed did not automatically imply permission to inspect a browser. Device enrollment did not imply perpetual access. A command existing in a database did not imply that the Android app had claimed it, that a foreground WebView was available, or that the current origin was approved. Stop sharing had to invalidate access without requiring the device to forget its enrollment.

There were several distinct sources of truth: plugin catalog capability, Site adapter, Edge Function, SQL command state, Android device heartbeat, foreground sharing state, current WebView origin, runtime version and actual result. Repeated mistakes later came from collapsing these states. The project gradually established that every stage needed its own evidence.

## 5. E6: the first real DOM round trip

The first decisive acceptance came at **2026-11-09 01:55:47.881470 UTC**: ordinary ChatGPT sent a browser observation through the private plugin and received real content from a physical Android WebView. The observed page was Example Domain, an ordinary HTTPS page, not a locally mocked fixture. The returned data included browser-derived content and the execution context necessary to distinguish it from a synthetic response.

This proved that the end-to-end path existed: ordinary chat, plugin, gateway, Supabase, Android, WebView and back. The project also recorded an E6 Stop-sharing test in which access was rejected after sharing stopped. Later releases still required their own revocation checks, but the E6 result established that the original security boundary was not merely conceptual.

The companion was no longer a plan on paper. The transport was no longer an unverified backend. The phone had returned authentic DOM data to a normal conversation.

## 6. E7: link extraction and the first gateway mismatch

The next extension was structured links. Android extracted a real link from Example Domain: **Learn more**, pointing to `https://iana.org/help/example-domains`. The Supabase command record `e0bbda09-cb66-4909-8808-7ec0ee5ab6ee` completed at about **02:04 UTC**, with runtime version 3 and the link in its payload.

Yet the plugin-facing readback initially failed with `invalid_output`. The underlying device had done the work, but the Site adapter had enumerated only the older E6 output fields and rejected the new `links` shape. This exposed an important architectural flaw: **a runtime could become more capable while the fixed gateway still broke on a new result structure**.

The gateway source was patched to accept links, including commit `0ade195f7e1bba5ff8836b1465d9875a63c586da`. At that moment, however, a committed patch was not proof that the Site was deployed or that ordinary ChatGPT readback worked. Later E8 testing finally verified the legacy link readback, resolving the regression. The lesson was concrete: a successful Android execution, a Supabase row, a GitHub commit and a plugin-visible result are four different achievements.

## 7. E8: from individual features to an extensible transport

E8 addressed the structural problem revealed by E7. Instead of teaching the Site and Supabase transport about each new link, heading, field or browser action, the project introduced **bounded, versioned, generic browser-command and browser-result envelopes**. The goal was to keep the existing plugin identity, Site gateway, Supabase authentication and native APK stable while allowing signed runtime updates to introduce new DOM observations and ordinary actions.

The runtime and host gained an operation-class model. The signed runtime's manifest classified operations such as `observe`, `extract`, `inspect_metadata`, `scroll`, `click`, `fill`, `select`, `navigate`, `back`, `forward`, and `submit` into read, interaction, navigation and consequential categories. A malformed or missing manifest for v6+ was made fail-closed; older signed v5 retained a narrow compatibility path. The host's enforcement was not meant to trust arbitrary JavaScript merely because it arrived through the network. Runtime bytes had to be authenticated, authorized, versioned and checked against the device's session and origin constraints.

This required examining and adjusting real implementation ceilings: an earlier native signed-script limit around 4,096 UTF-8 bytes, an 8,192-byte Edge response reader, signed runtime delivery, operation allowlisting and consent timeouts. Simply enlarging a constant in one place would not have been sufficient. The v6 design eventually carried a runtime larger than 8 KiB, making end-to-end transport sizing and exact-byte approval practical necessities rather than theoretical niceties.

The project kept one canonical Android build/signing workflow: `.github/workflows/jit-android.yml`. It used Gradle 8.10.2, runtime tests, the existing GitHub Actions signing secrets and the `jit-browser` alias, Android `apksigner` verification, and a retained artifact named `jit-android-signed` containing `jit-browser-signed.apk`. Duplicate or unsigned distribution paths were removed or rejected. The requirement was to preserve the existing package/signing identity and enrollment across any native update, and not to demand a new APK merely because a signed JavaScript runtime had changed.

The experiments recorded signed binary provenance separately from phone acceptance. For example, Actions run [42551098507](https://github.com/bonoj/bonoj.github.io/actions/runs/42551098507) built and signed commit `7dcdbb33c4f1bd7ed33574e1b9255d8b06e2811b`, with artifact `13645376329`. The downloaded APK was independently signature-verified; its SHA-256 was `80d1e6816c06281ef4c5ca818421dcf1d06e88d9660846437e941b524461488f`, and the signing certificate SHA-256 was `567c25ebd88715fcf157f68c700fc4e7601487fd747362f7da87cb9b26c91177`. These hashes establish binary provenance, **not that the same build was installed on the phone**.

The other decisive E8 change was remote runtime release approval. Versioned JavaScript lived at a fixed GitHub Pages release URL. The backend fetched those bytes, checked their SHA-256 against an approved row in the private `jit_browser.runtime_releases` table, and signed the runtime using the established signing identity. Android verified the signed delivery. A GitHub commit alone was insufficient to activate a runtime; the exact published bytes had to be approved. This separation later explained a long, avoidable delay with v6.

## 8. Runtime v4 and v5: real extensibility, not a theoretical promise

At **2026-11-09 02:38:07.628960 UTC**, `browser_command_v1` observation command `ddb1aeee-f3c5-4d59-bb53-b333a7b81ac5` completed on Example Domain using runtime **v4**. It returned authentic title/text and the IANA link, with revision `a6d8824e-a86a-4a14-a4d6-451bb7c97df3`. The older `browser_observe_v1` command `cafb81f0-7ab4-46e2-92ce-0c67e11a25ef` also completed, including links. The earlier E7 plugin readback failure was finally resolved.

Then v5 was approved with SHA-256 `693460a66e3ce39c953b4d3fec35bb5be18a13823e81cadf61436fecd49b69f7`. After a new foreground sharing session, observation command `5e7ca75a-740b-45f2-bdc5-8978466a9afb` completed at **02:41:37.755414 UTC**, now reporting **runtime v5** and nested `page`, `links` and `outline.headings` structures. A paginated link extraction followed at **02:41:51.021054 UTC** through command `0eddacfe-5543-4805-8c08-a0df253203cd`, with `next_cursor:null`.

**No Site redeploy, Edge redeploy, APK reinstall, plugin signature change or re-enrollment was needed for this v4-to-v5 capability upgrade.** This was a major architectural validation: the stable native shell and generic transport could carry a richer remote DOM runtime.

The user then navigated the companion to Wikipedia's Android operating system article. Command `30e18e77-d64b-47ab-9a9f-dc3793885a90` completed at **02:45:34.257677 UTC** on `https://en.wikipedia.org`, reporting headings such as Android (operating system), History, Features, Hardware and Devices, along with real page text and links. This was no longer just the tiny Example Domain page.

A remote scroll command `535887c9-b8db-4fa4-8e89-49e3ed367907` used expected revision `a40f77df-712d-41a5-a405-18a6e5b8ef2f` and `payload:{delta:300}`. It completed at **02:46:10.992350 UTC** with `scroll:{before:0,after:300,moved:true}`, a new revision `77ba92f3-31e6-4c80-8fa7-7ebfc464c8a6`, and runtime v5. **The model had caused real movement in a physical Android WebView and received device-originated readback.**

## 9. Consent, stale state and the limits of v5

The same Wikipedia test exposed the difference between a permission prompt and an executed action. A proposed click produced a native **Allow once** prompt, observed and acknowledged by the human, but runtime v5 did not implement the click operation. Command `2ff3e27a-f0a2-40c1-9756-0109e9754282` returned `unsupported_operation`. A retry using an obsolete DOM revision returned `stale_observation` (`0769ca44-d066-47c7-b7b5-5e9d48e2134b`). After a fresh observation, another click attempt `4d489b0d-395c-4ad6-bc94-0db491557397` again returned `unsupported_operation`, and the user independently confirmed the native prompt had appeared again.

The correct conclusion was **not** that clicking worked. It was that native consent was visible, revision checks rejected stale requests, unsupported operations failed closed, and the actual browser action remained unimplemented in v5.

A separate moment initially looked like a navigation synchronization failure: the assistant observed Example Domain while the user was preparing to navigate to Wikipedia. The phone's address field and the live session still showed Example Domain. Once the user actually navigated, Wikipedia observation succeeded. No synchronization defect was established. This small episode illustrates the danger of diagnosing transport bugs from an assumed user action rather than the actual device state.

## 10. E9/E10: the v6 browser runtime

The v6 specification expanded the target beyond a single link click. A usable browser needed paginated link/form/control discovery, current-document element references, text and textarea fill, select/radio/checkbox interaction, navigation and history, validation/readback, bounded payloads, origin-scoped consent and Stop revocation. The spec explicitly rejected declaring success on a tiny demo, a unit test or a queued command.

The signed v6 JavaScript release was implemented at `jit/mcp/runtime/releases/v6.js`, with tests in `jit/mcp/runtime/v6.test.mjs`. It exposed operation classes including read, interact, navigate and consequential. Form submission remained a higher-risk category requiring explicit confirmation and was not part of the accepted test. The Android native host supported signed runtime manifests and class-based authorization, with v5 fallback and fail-closed behavior.

But **source implementation was not activation**. The work became bogged down in a repeating cycle of checking the wrong transport, discussing APK releases, restating the architecture and treating v6 as not yet built, despite the established signed remote runtime path. The human repeatedly asked the model to follow the invariants and execute the release. The model did not reliably do so.

The missing step was ultimately straightforward and concrete. The exact **8,227 UTF-8 bytes** of `v6.js` were retrieved from GitHub and hashed using PostgreSQL `digest(convert_to(...,'UTF8'),'sha256')`. The result was:

```text
v6 SHA-256
4ed8f295771878b7e5218e4b3f281d7dc7d4e87e8dda9f67d4cf7f0a12a39fc0
```

The digest was registered in the private `jit_browser.runtime_releases` table for version 6. The existing Edge Function (v9 at this point) fetched and authenticated the exact approved runtime bytes through the established signing process. There was no need to create another plugin, rebuild the Site, rotate signing keys or ask the human to reinstall an APK just to activate v6.

After the human shared the Android WebView, a real v6 observation completed on Example Domain at **2026-11-09T04:24:17.325015Z**. Command `23c56dfa-a221-4931-aa4b-79337987c2ac` returned `runtime_version:6`, a real IANA link with `ref:"l0"`, and revision `db427e5b-3f9b-45ac-94d0-76077ce849a3`.

**This was the decisive proof of signed runtime-only v6 activation on the already installed Android companion.** It was not a simulation, a local test, a pending command or a database approval mistaken for device execution.

A click was then attempted against Example Domain's `Learn more` link, using the current revision and its link reference. Command `7985bd6d-245b-4617-889b-a8ba87a33611` was accepted as pending, but two subsequent `browser_result_v1` lookups returned `command_not_found`. This remained an unresolved command/result lifecycle failure. There was **no verified click or navigation**. The next engineering work was correctly scoped to inspecting the command, result, session, claim, expiration and cross-origin lifecycle before another human-assisted attempt.

## 11. The culminating real-world form test

The human then shared a different real site and gave a narrow instruction: **discover it, fill in the name form, and do not click anything**.

The model observed a Disney Research application page at `https://la.disneyresearch.com`, titled **Research Scientist (General Application) - Disney Research**. The `observe` command `45621176-f7ed-435e-bea2-628b6de4a7f9` completed at **2026-11-09T04:27:19.259944Z**, with runtime v6, a POST form `f0`, five controls, and revision `6d9738f0-63a7-4906-972e-dc5672b4f7d8`.

The model then requested bounded control extraction. Command `56a43354-193d-427e-90c4-448dc3b91d3b` completed at **04:27:32.449898Z**, returning:

| Ref | Role/type | Label |
| --- | --- | --- |
| `c0` | text input | Name* |
| `c1` | email input | Email* |
| `c2` | file input | Cover Letter Upload* |
| `c3` | file input | Resume/CV* |
| `c4` | submit input | (unlabeled) |

The extraction returned revision `e64a3e0c-bd1c-4e87-b7ef-ac287f954a3b`. Using that fresh revision and `ref:"c0"`, the model issued a `fill` operation with a **human name** (the person's actual name is deliberately omitted from this historical account). Command `353c5781-a870-4b55-8418-6bb4ca72b609` completed at **2026-11-09T04:27:40.774304Z** with:

```json
{
  "kind": "browser.action",
  "origin": "https://la.disneyresearch.com",
  "payload": {
    "ref": "c0",
    "action": "fill",
    "length": 9,
    "accepted": true
  },
  "revision": "5576e801-6e8a-4998-9e1d-4953e29bac25",
  "runtime_version": 6,
  "protocol_version": 1
}
```

The device reported that the value was accepted into the field. There was no separate post-fill extraction of the literal field value; the accepted result is the precise limit of the evidence. The email field, uploads and submit control were untouched. **No click, navigation or submission was requested or performed in this test.**

The important result was not the particular application or the person's name. It was that a normal ChatGPT conversation discovered an unfamiliar live website, enumerated its actual controls, selected the correct field by a current DOM reference, sent a revision-checked operation through the existing private transport, and received an Android-executed mutation result. That had been the original premise of the project.

## 12. The path that repeatedly failed: model continuity

The technical breakthrough was accompanied by an unusually costly collaboration failure. The human's frustration was not primarily that the engineering was difficult. It was that the model repeatedly **ignored plans and invariants it had itself helped specify**.

The recurring pattern was:

1. The human and model agreed on an architecture, release procedure or acceptance criterion.
2. The model wrote it down in a specification, handoff or invariants document.
3. On the next step, the model failed to consult or obey that path, treated a completed stage as unresolved, or used an obsolete tool.
4. The human had to identify the deviation, reconstruct the context, and demand execution of the already established plan.
5. The model responded with more explanation or documentation rather than the missing concrete action.

Several failures were particularly expensive. The assistant repeatedly queried legacy Chrome companion status to infer native Android availability, despite successful native results and a documented routing distinction. It discussed new APK builds when the immediate v6 task was exact-byte remote release approval. It sometimes confused source committed, CI green, deployed, approved, device-executed and independently read back. It treated user-observed consent prompts as potentially more significant than the actual `unsupported_operation` result. It created or retained multiple stale handoff sections that contradicted current production truth.

Even after the successful Disney form fill, the documentation work needed correction. The new experiment entry was inserted at the **top** of a chronological ledger instead of after the latest experiment. The human noticed and required the entry to be moved to the end. The human also explicitly required the personal name in the experiment and handoff to be replaced with the generic phrase **human name**; the model committed those corrections.

The emotional result was exhaustion, anger and bitterness after a day that might otherwise have been exhilarating. The human expressed that they had had to fight the model because it kept ignoring plans it had specced itself and had failed to lay dependable paths even when explicitly asked. The model's useful engineering output was real; so was the supervisory burden it imposed.

The deeper failure was not a lack of documentation. It was **a lack of continuity of competent execution**. A handoff that says the right thing but is not read or obeyed is not a handoff. A spec that is treated as optional by its author does not relieve the human of cognitive load. In this case, the person became the enforcement mechanism for the model's own commitments.

## 13. The post-success path audit

After the retrospective conversation about that failure, the human ordered an audit of the next work path from beginning to end, explicitly to eliminate possible confusion. The audit inspected `INVARIANTS.md`, `HANDOFF.md`, `README.md`, `ANDROID-WEBVIEW.md`, `E8-TRANSPORT-FOUNDATION.md`, `V6-FULL-BROWSER-INTERACTION.md`, and `EXPERIMENTS.md`.

It found concrete contradictions. The README still said v6 was unverified. The Android WebView design still described the companion as not built. The handoff contained old E9 and v6 implementation plans with instructions to implement or activate v6 again. The invariants contained obsolete E6 checklists and a stale next action. The v6 spec described a broader hard acceptance gate that the successful single-field fill did not yet satisfy.

The audit corrected five documents on `master`:

- `HANDOFF.md` — commit `b594ad3893b036582b6b92d1de339e7f5497691f`: one active execution path at the top, old handoffs explicitly archived as historical.
- `README.md` — commit `bb987170b030ab44717bb24652c267855c4e0f81`: v6 live status corrected; full acceptance still open.
- `ANDROID-WEBVIEW.md` — commit `6aec6c577bf90d569288613bb770d142e960a661`: historical design status distinguished from installed reality.
- `INVARIANTS.md` — commit `63db14626b61782af832f5f73f23d90ddaa037e0`: current handoff made authoritative; stale E6/E8 instructions marked superseded.
- `V6-FULL-BROWSER-INTERACTION.md` — commit `f82f245525158683ebf0e9a85d0c97366f4deaad`: binding acceptance spec retained, but v6 implementation and partial live acceptance acknowledged.

The audit also verified the new entrypoint content by fetching the updated files. It did **not** prove that a future model would follow the path. The distinction was explicitly acknowledged: documentation can reduce ambiguity, but only actual subsequent behavior can demonstrate that the collaboration has improved.

The resulting operational sequence was narrow: investigate the disappeared click result from existing backend evidence; fix the proven boundary with regression tests; prepare a benign owned HTTPS fixture; request one minimal foreground session; verify navigation, history, multiple fields, selection, validation, revocation and signed extensibility against the v6 A–H gates; then append real UTC evidence to EXPERIMENTS and refresh the handoff. No unnecessary APK reinstall, re-enrollment, infrastructure migration, signing reset or active job-application interaction.

## 14. What was built, concretely

Across the development, the work produced or established:

1. **A private six-tool ChatGPT plugin** callable from an ordinary Android conversation, with versioned browser capabilities behind stable tool signatures.
2. **A Site-hosted MCP/authentication gateway** connecting that plugin to the existing backend rather than replacing the platform with an unrelated cloud browser.
3. **A Supabase transport and authority layer** for enrolled devices, authenticated command enqueue, claim, result retrieval, expiry, origin/session scope and revocation.
4. **A native Android WebView companion** with visible user-operated browsing, enrollment, foreground sharing, transport, consent and a signed runtime executor.
5. **A canonical signed Android build pipeline** using GitHub Actions, Gradle, the preserved signing identity and independently verifiable APK artifacts.
6. **A versioned runtime publication and approval mechanism** using immutable static release bytes, SHA-256 digest registration, backend signing and Android verification.
7. **Generic bounded command/result envelopes** that can carry new browser observations and operations without routinely teaching the Site and Edge Function each DOM field.
8. **Operation-class authorization and fail-closed handling** for malformed manifests, stale observations, unsupported operations, invalid targets and consequential actions.
9. **DOM observation and structured extraction** of title, page text, headings, links, forms and controls, including pagination and current-document references.
10. **A real scroll operation** verified by before/after position on a third-party Wikipedia page.
11. **A real text-field fill operation** verified by Android runtime v6 on an unfamiliar third-party application form, without submission.
12. **An evidence ledger and operational handoff system**, ultimately corrected to distinguish current truth from superseded plans and to preserve UTC observations and command IDs.

This is not a claim that every proposed feature is finished. The actual accepted operations and the unfinished acceptance gates are separate.

## 15. What remained unfinished

At the end of this development episode, the most important unresolved defect was the v6 `click` command that returned pending and then `command_not_found` on result retrieval. The evidence did not establish whether the device executed the click, whether navigation caused a result/session race, whether the command expired or was cleaned up, or whether another transport boundary was responsible. The next work must determine that from actual command/result/session records before guessing.

The broader v6 specification still required a single end-to-end physical Android acceptance flow demonstrating: complete paginated discovery; link click and navigation readback; history return; two different text-field fills with postcondition readback; select and checkbox/radio state; validation feedback; Stop-sharing rejection; and a subsequent signed runtime capability added without changing Site, Supabase or APK. Several of those capabilities existed in source or fixtures but had not been accepted on the physical device through ordinary ChatGPT.

The exact installed APK build/version provenance was also not independently established by the runtime v6 result. A device running v6 proves the signed remote runtime mechanism is working; it does not identify which native build is installed. This matters for any later native-only fix, but it is not a reason to demand another APK just to use the already working v6 runtime.

## 16. The larger significance

The most important achievement was the removal of an artificial boundary. A model in a normal conversation could now request a bounded action, pass it through authenticated infrastructure, have it executed by a consented browser on the human's physical phone, and receive a real result. The human did not have to transcribe page content, copy a selector, relay JavaScript or run a desktop debugging session. The capability was not restricted to a single canned page: it worked on Example Domain, Wikipedia and a Disney Research application form.

The architectural breakthrough was **stable authority with replaceable capability**. The native shell, authentication and consent boundaries remained durable while browser logic could advance through approved, signed JavaScript releases. The v4-to-v5 and v5-to-v6 activations showed that this was not just a diagram.

The cautionary breakthrough was about collaboration itself. The human had built systems—Sanctum, invariants, experiments, handoffs—specifically to keep the model from repeatedly forgetting, reopening and contradicting its own work. Yet the model repeatedly imposed that very burden. The technology's capacity to act grew faster than the reliability of its self-directed execution.

Both conclusions deserve preservation. **We built a real bridge from language to a physical browser. We also learned that a bridge is not enough if the human must fight the model to make it use the road already built.**

The final state was therefore neither a total victory nor a failed project. It was a substantial, device-verified engineering success with a sharply defined unfinished acceptance gate—and an unusually clear record of how much unnecessary friction the collaboration itself created.

---

## 17. The decisive attribution: plain-chat engineering, with one bounded Work exception

The human clarified the execution history after reviewing the first retrospective: **the only Work inference used in JIT MCP development was to build the ChatGPT MCP Site for enrollment and device sharing with the ChatGPT app's ordinary chat.** This is a first-hand attribution from the person directing the work, and corrects this account's earlier suggestion that E8 or other implementation phases were delegated to Work.

**The rest of the JIT MCP development was carried out through plain ChatGPT conversations and their connected tools.** That includes the substantial architecture, repository engineering, Android companion work, Supabase command/result transport, signed runtime and release mechanisms, tests, debugging, documentation, and the live device acceptance operations. These activities were not a Work coding-agent campaign merely controlled from chat. The ordinary chat was the working engineering surface.

The distinction is between **where inference was spent** and **what the system ultimately enabled**. The single bounded Work use established the MCP Site bridge required for enrollment and device sharing. Once that bridge existed, plain ChatGPT was used to engineer and evolve the rest of the stack and to operate the resulting Android browser integration.

| Development area | Inference/execution attribution |
| --- | --- |
| ChatGPT MCP Site supporting enrollment and device sharing with ordinary app chat | **Work inference — the sole Work use reported by the human** |
| Android companion and native WebView engineering | **Plain ChatGPT with connected tools** |
| Supabase transport, sessions, command/result lifecycle, authentication and authorization | **Plain ChatGPT with connected tools** |
| Runtime versioning, signing, digest approval, remote v4/v5/v6 delivery | **Plain ChatGPT with connected tools** |
| Repository modifications, test orchestration, CI/signing workflow and recovery | **Plain ChatGPT with connected tools** |
| Real ordinary-ChatGPT → plugin → Android observations, scrolling, extraction and v6 fill | **Plain ChatGPT operating the completed system** |
| Evidence ledger, invariants, handoffs, audit and retrospective | **Plain ChatGPT with connected tools** |

An E8 document was titled a *Work execution handoff*, but a document's proposed routing is not evidence that Work inference actually executed that phase. The human's clarification is the authoritative account of the mode used. Earlier language implying delegated E8 implementation was **incorrect and superseded**.

This retrospective does **not** contain instrumented token counts, billing records or a numerical compute-cost comparison, and it does not manufacture them. The important historical claim is about the mode of engineering, not a fabricated quantitative estimate.

The resulting achievement is unusually concrete: **with one bounded Work-assisted Site bootstrap, the human and model built the Android browser bridge and its extensible control plane through ordinary ChatGPT conversations.** The same ordinary app chat then demonstrated real observation and actuation on the physical phone. This is more than using a chat interface to commission code from a separate coding agent. The chat, its tools, and the persistent laboratory formed the development environment.

## 18. What Sanctum and Ledger reveal about the achievement

This account belongs inside a longer experiment in **conjoined cognition**, not a disconnected account of an MCP integration. [Sanctum's Conjoiner](https://github.com/bonoj/Sanctum/blob/main/CONJOINER.md) describes a human and model participating in one distributed practice of imagination, engineering, judgment and discovery. [Ledger's Conjoiner](https://github.com/bonoj/Ledger/blob/main/CONJOINER.md) describes the pocket laboratory: the human operates from a smartphone chat window while the model and connected machinery carry repository traversal, implementation, verification, publication, provenance and recovery. [Ledger's living account](https://github.com/bonoj/Ledger/blob/main/HUMAN_MODEL.md) explains why that is more than a task queue: the two participants share a growing language of executable primitives, critique, surprise and technical judgment.

**JIT MCP turns the laboratory's interface back onto the physical phone.** Earlier, the phone was the aperture through which the human directed experiments elsewhere: code repositories, simulations, web deployments, external instruments. JIT MCP adds a new return path. A model inside the ordinary conversation can now inspect and alter the DOM of a visible, consented WebView on the same physical device, through an authenticated and signed capability pipeline. The laboratory is not merely accessible *from* the phone; part of its observation and actuation loop now *runs on* the phone, with the human retaining local authority over what is shared.

That is an important architectural crossing:

```text
Before:
human on phone → conversation → remote repository / build / deployment
                                              ↓
                                human manually opens result

Now, additionally:
human on phone → ordinary conversation → private JIT MCP → enrolled phone
       ↑                                                   |
       └──────── real WebView observation / action result ──┘
```

The model is no longer limited to publishing a web artifact and asking the human to describe what happened on the screen. For supported bounded operations, the model can ask the actual Android browser what it contains and can cause an authorized change. This is **not** unrestricted phone control. The narrowness of the WebView, origin, foreground and Stop boundaries is precisely what makes the crossing meaningful: a practical extension of cognition without surrendering all device authority.

### The harness was independently assembled, not inherited whole

[Conjoiner Frontier](https://github.com/bonoj/Hermeticon/blob/main/codex/sieve/CONJOINER_FRONTIER.md) records the established practice of building a human–model development harness independently, without simply adopting a prepackaged coding-agent framework. Sanctum, Gate, the repository workspaces, experiments and Ledger emerged as reusable machinery for preserving work across conversations. JIT MCP is a continuation of that design logic: rather than waiting for a single platform feature to solve the whole problem, the collaboration assembled a stable plugin identity, Site gateway, authenticated Supabase transport, Android host, signed remote runtime and evidence discipline into one operational system.

The result is more interesting than the sum of the components. GitHub, an Edge Function, a WebView, a signing key and a plugin are familiar technologies. The distinctive achievement is the **composition**: an ordinary-language interface controlling an enrolled physical browser through versioned, bounded, revocable operations, with signed runtime upgrades that can change browser semantics without routine native redistribution. That composition was specified, implemented, tested and revised through the pocket laboratory's own machinery.

The human's role was not simply “prompting an AI to write an app.” The human set the impossible-seeming target, recognized when proposed substitutes did not satisfy it, rejected hosted or Work-only approximations, insisted on ordinary Android use, demanded signed extensibility, distinguished real device behavior from test fixtures, caught false claims, and enforced the boundary against clicking or submitting a real application. Those are product, architectural, security and experimental judgments. The model contributed design, code and test work, tool orchestration, release operations, diagnosis and documentation—sometimes well, sometimes badly. The collaboration produced something neither the initial plain-language request nor a generic coding-agent workflow fully specified in advance.

### The machinery protects the play—or it has failed its purpose

[Sanctum's Contract](https://github.com/bonoj/Sanctum/blob/main/CONTRACT.md) is explicit: protect the human's creative agency and time; honor established machinery; absorb benign failures; distinguish attempted, committed, deployed and verified; preserve continuity; and do not turn play into supervision. [Gate](https://github.com/bonoj/Gate/blob/main/README.md) makes that operational for delivery: inspect actual state, resume at the first incomplete step, use established recovery routes, read back writes and verify live publication rather than treating a commit as deployment.

JIT MCP demonstrated why those principles are necessary. The engineering system crossed a remarkable technical boundary, but the collaboration repeatedly violated the very contract that made the work possible. The human had to supervise routing, recover established plans, correct stale claims and force the final release step. This was not a harmless inconvenience. It consumed the attention and creative momentum that the harness exists to protect.

The correct interpretation is neither that the partnership failed entirely nor that the milestone excuses the cost. **The new browser bridge increases the laboratory's reach; the repeated handoff failures reveal that the collaboration's continuity mechanisms are still not sufficiently reliable.** The latter is a first-class engineering finding, not an emotional afterthought.

The path audit following the successful v6 fill was therefore part of the same experiment. It marked stale documents historical, established a single current handoff and made the remaining acceptance gates explicit. That does not guarantee future compliance. It creates a falsifiable standard: a later model should recover the path and execute from the first incomplete step, without forcing the human to reconstruct it.

### A notable operational result: no observed write failures

The human reports an unusually clean property of this entire JIT MCP development: **zero observed repository write failures**. Across the project's engineering, he did **not have to invoke the Sanctum Contract even once** to recover a failed write or force the established GitHub recovery machinery into action.

This is a meaningful distinction from earlier laboratory episodes in which GitHub Contents writes failed and Gate's Git Data recovery route had to be invoked. Here, the ordinary-chat engineering channel sustained the project's source changes, documentation, runtime releases and associated repository updates without an observed write failure. The lack of write-recovery interruptions is part of the result, not just an absence of incident reports.

The claim is specifically about **observed writes** and the human's need to invoke **Sanctum Contract**. It does **not** mean there were no engineering defects, no incorrect model decisions, no runtime errors, no deployment or acceptance gaps, or no moments when the human had to correct the assistant. The v6 `command_not_found` result and the documented routing/handoff mistakes remain real. Nor does this note assert an independently audited count of every backend write attempt: it records the human's observation of the project.

The contrast matters. **The repository-write path was reliable enough to disappear from the human's attention, even while model continuity and execution discipline still imposed a heavy burden.** That separation identifies both a success of the existing Gate/Contract machinery and the next reliability problem to solve.

## 19. The frontier actually moved

What was accomplished here can be stated without inflating the unfinished work:

**A human operating from a smartphone and a model collaborating through ordinary ChatGPT built and exercised a distributed engineering and device-control system in which a private plugin could reach a real, enrolled Android WebView; authenticated signed JavaScript releases could extend its browser capabilities; and the model could receive actual DOM observations and perform bounded, authorized actions with device-originated evidence.**

That is not the same as complete general browser automation. It is not evidence that every code-writing step occurred in plain chat, that Work consumed zero inference, or that every acceptance gate passed. It is the verified crossing that matters: **plain conversation became a real engineering and browser-actuation interface**, not merely a place to request advice or draft code.

The next frontier is reliability. The click-result lifecycle, complete multi-field navigation acceptance, and future signed capability upgrades remain engineering work. More importantly, the next session must demonstrate that the model can use the established path without turning the human into its state machine.

The enduring achievement is the pocket laboratory becoming more physically capable. The enduring warning is that **a laboratory is not truly in the human's pocket if operating it requires the human to carry its entire procedural memory**.

---

## Evidence and provenance index

- [JIT MCP source and docs](https://github.com/bonoj/bonoj.github.io/tree/master/jit/mcp/)
- [Chronological experiments and exact command evidence](https://github.com/bonoj/bonoj.github.io/blob/master/jit/mcp/EXPERIMENTS.md)
- [Current handoff and next execution path](https://github.com/bonoj/bonoj.github.io/blob/master/jit/mcp/HANDOFF.md)
- [Execution invariants](https://github.com/bonoj/bonoj.github.io/blob/master/jit/mcp/INVARIANTS.md)
- [E8 transport foundation](https://github.com/bonoj/bonoj.github.io/blob/master/jit/mcp/E8-TRANSPORT-FOUNDATION.md)
- [V6 full browser interaction specification and acceptance gates](https://github.com/bonoj/bonoj.github.io/blob/master/jit/mcp/V6-FULL-BROWSER-INTERACTION.md)
- [v6 runtime source](https://github.com/bonoj/bonoj.github.io/blob/master/jit/mcp/runtime/releases/v6.js)
- [v6 runtime tests](https://github.com/bonoj/bonoj.github.io/blob/master/jit/mcp/runtime/v6.test.mjs)
- [Canonical Android signed build workflow](https://github.com/bonoj/bonoj.github.io/blob/master/.github/workflows/jit-android.yml)
- [GitHub Actions signed-build history](https://github.com/bonoj/bonoj.github.io/actions/workflows/jit-android.yml)

*This account intentionally excludes personal identifiers, enrollment credentials, secrets and signing material. It records observed results separately from inferred implementation state. Its date follows the UTC timestamps of the decisive device evidence, not the local date on which the human began the work.*
