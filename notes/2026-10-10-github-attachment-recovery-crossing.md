# Crossing 01 — GitHub-Native Binary Transport

**Status: Operational proof of concept | October 2026**

## What we built

Crossing 01 demonstrated a serverless transport bridge between a browser-based interactive world and an AI assistant. A user exports an artifact from a static GitHub Pages application, attaches it to a GitHub Issue, and GitHub Actions automatically recovers and publishes its bytes in a form the assistant can retrieve. **Ingest** is the producer-agnostic recovery implementation; Crossing 01 was a test producer, not a dependency.

The working path handles structured JSON and binary assets such as PNG images. Its accomplishment was to move multi-megabyte evidence across a model/tool boundary that did not reliably expose binary content directly.

## Architecture

```text
Executable world / any producer
       |
       v
Generate artifact
       |
       v
Human submits GitHub Issue + attachment
       |
       v
Ingest: GitHub Actions (issue opened / edited)
  - Find attachment URL in issue body
  - Download original bytes
  - Calculate SHA-256
  - Commit binary and manifest
  - Publish numbered Base64 text chunks
  - Reconstruct and compare on runner
       |
       v
Git repository: recovered/
  issue-N.bin
  issue-N.json
  issue-N-chunks/00000.b64 ...
       |
       v
GitHub connector → assistant retrieves evidence
```

## How it works

**Browser-side handoff.** The Crossing 01 JIT page prepared a report and opened the GitHub Issue submission flow. The user still had to attach the file using GitHub's file picker and submit the Issue. No privileged token in the browser, bespoke backend, or direct chat attachment integration was required.

**Event-driven recovery.** Ingest listens for `issues: opened` and `issues: edited` (with manual dispatch available for testing). It reads the Issue body through the API, finds a recognized GitHub user-attachment URL, and retrieves its bytes. The current implementation processes the **first matching attachment**. Ingest does not require a particular producer or submitter, provided GitHub accepts the Issue.

**Binary preservation.** The workflow commits the original bytes to `recovered/issue-N.bin` and a JSON manifest recording the Issue number, source URL, byte count, content type, SHA-256 digest, chunk size, and chunk count. Original bytes and text representation remain separate.

**Connector-compatible representation.** Direct GitHub connector reads of binary files may return no usable content. Ingest splits the binary into **49,152-byte** segments and encodes each into a numbered UTF-8 Base64 file. A full segment produces **65,536 Base64 characters**, plus a newline. The connector can retrieve these files individually without having to return the entire artifact in one response.

**Integrity.** The workflow was subsequently updated to reconstruct the shards on the runner and assert byte equality and matching SHA-256 against the downloaded original. That check's execution result was not independently confirmed when this account was written. Individual chunk retrieval is not the same as independently rebuilding the complete file inside the assistant's environment.

## The experiments and failures

**Six Cities JSON, Issue #2.** A snowglobe survey of **1,062,313 bytes** was recovered as `recovered/issue-2.bin` and successfully read and parsed through the GitHub connector. This proved retrieval of a substantial structured report.

**PNG, Issue #3.** A **3,006,275-byte** PNG initially failed retrieval with HTTP 400 when the workflow sent a GitHub authorization header to the public user-attachment asset URL. Fetching the asset without that header fixed this retrieval failure. Automatic Issue-triggered ingestion then published the binary, manifest, and **62 Base64 chunks**. All 62 text chunks were individually fetched and checked for valid Base64 shape and expected lengths; the first carried the PNG signature. The original image URL was also available for visual display.

**Verification boundary.** We did **not** independently reconstruct the complete PNG and verify its SHA-256 in the assistant's local environment. Do not confuse successful display of the original GitHub-hosted image with reconstruction from shards.

**Size threshold.** An initial workflow guard rejected files smaller than 1 MiB because the first experiment was specifically testing large-file recovery. This was a test artifact, not a transport requirement, and was removed. Ingest now accepts nonempty attachments, subject to GitHub and workflow limits.

## Boundaries crossed

The experiment removed the need to download an artifact and then re-upload it into the ChatGPT conversation. GitHub became the evidence store and dispatch mechanism; GitHub Actions provided temporary compute; the repository exposed durable binary files, manifests, and connector-readable text chunks. A large artifact could be retrieved in bounded pieces rather than a single oversized tool response. No always-on custom server, database, or worker was required for the demonstrated recovery path.

It also separated **production** (an executable world creates evidence), **transport** (GitHub preserves and exposes evidence), and **interpretation** (the assistant retrieves and examines evidence). The world need not be hosted inside the assistant, and its entire state need not fit in conversational context.

## Boundary not yet crossed

This is **not** autonomous one-tap browser-to-assistant transfer. The person still downloads or otherwise obtains the producer artifact, chooses it in GitHub's attachment picker, and submits the Issue. A prefilled Issue body was discussed as a possible route for small text reports, but not implemented; it would still require submission.

Workshop's current instrumentation tap generates a JSON observer report and invokes a browser download. **Keep that implementation intact** until a genuine producer-to-GitHub handoff has been demonstrated. The successful recovery half is not a reason to replace a working download with a merely different manual step.

GitHub attachment limits, quotas, repository permissions, storage and workflow constraints still apply. Base64 adds roughly one-third storage overhead; fetching many chunks consumes connector calls. The repository is public and should not be treated as a private evidence channel. This is not unlimited transfer or general-purpose streaming.

## What matters

The individual ingredients were familiar. The useful result was their **composition across incompatible interfaces**: Issue attachments as intake, Actions as byte-level recovery, Git commits as durable evidence, and Base64 shards as a connector-readable bridge.

**Crossing 01 proved the recovery half of a GitHub-native evidence transport.** The browser submission half remains an explicit open problem. That distinction is the most important thing to carry into the next experiment.
