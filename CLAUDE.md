# CLAUDE.md — feeleditorbase-workspace (RETIRED)

**This repository is retired. Do not develop here.**

## Status

- `@wemake4u/feel-editor-base` was a fork of `@bpmn-io/feel-editor` v1.10.1 (upstream stopped at commit
  `2f7eda1`), with custom fixes on branch `fix/v1.10.1-custom`.
- It was used only by `@wemake4u/feel-editor`. In October 2026 (feel-editor v2.1.0) its code was ported to
  TypeScript and merged into `C:\Repos\feeleditor-workspace` (`projects/feel-editor/src/lib/feel/`), and the fork
  was detached from upstream. All further work on the FEEL editor core happens there.
- Do not add this package back as a dependency anywhere, and do not merge upstream changes here: if an upstream
  fix of `@bpmn-io/feel-editor` is needed, port it into feeleditor-workspace.

## Remaining consumer (checked 2026-11-11)

- `@wemake4u/form-editor` 1.0.17 (`C:\Repos\formeditor-workspace\projects\form-editor`, not yet published) still
  depends on `@wemake4u/feel-editor-base` **1.0.2** (pinned). It must move off this package (to the FEEL core in
  feeleditor-workspace) before the retirement is complete; form-designer 2.0.0 waits for form-editor 1.0.17.
- Last version on npm: 1.0.3 (2026-10-12).

## Retirement steps (planned; check what is already done)

1. Archive notice at the top of `README.md` on branch `fix/v1.10.1-custom`, pointing to feeleditor-workspace.
2. Tag the final state.
3. On GitHub, set the default branch to `fix/v1.10.1-custom` (it is still `main`, which holds upstream bpmn.io
   code, not the fork).
4. Archive the GitHub repository (Settings or `gh repo archive`).
5. Local folder: rename it first, delete it later; for long-path errors on Windows use the `robocopy` empty-folder
   mirror workaround.

Before deleting anything, verify there is no unpushed work (`git status`, `git log origin/fix/v1.10.1-custom..`,
`git stash list`).
