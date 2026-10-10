# GitHub attachment recovery crossing
*10 October 2026 — Ingest / Betwixt*

## What was demonstrated

A public GitHub repository can recover attachments from newly opened or edited Issues using a GitHub Actions workflow. The workflow discovers a GitHub attachment URL, retrieves the original bytes, writes a binary artifact and metadata manifest, and publishes Base64 text chunks that can be read through the GitHub connector. Reconstruction and SHA-256 comparison were added as a runner-side integrity check.

The tests included a Six Cities JSON survey exceeding 1 MiB and a roughly 3 MB PNG. The transport is producer-agnostic: the temporary Crossing 01 page was a test producer, not a dependency of Ingest. A former 1 MiB minimum was removed; the workflow now accepts nonempty attachments.

## Boundary still open

The proven path begins **after** an Issue containing an attachment exists. A browser-generated Workshop report still requires a person to download the file, select it for upload, and submit the Issue. We have not demonstrated one-tap browser-to-GitHub delivery. A prefilled Issue body might reduce handling for small reports but would still require submission and is not implemented.

The Workshop observer currently generates its JSON report on tap and downloads it through a browser Blob. Keep that implementation available and unchanged. Do not reroute the tap until the submission seam is genuinely solved.

## Scope

This note records a working evidence-recovery boundary and an unresolved producer-side handoff. It does not claim autonomous submission, universal file-size support beyond platform limits, or automatic interpretation of recovered evidence.
