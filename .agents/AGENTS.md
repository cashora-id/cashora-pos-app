# Cashora Workspace Behavioral Rules & Customizations

## 🛑 Git Remote & Branching Constraints (CRITICAL)

### 1. No Automatic Remote Push
- **Do NOT execute `git push` automatically**: When the user requests to work on any task or feature, work on the codebase locally (edits, local builds, testing, and local git commits).
- **Wait for explicit user consent**: NEVER run `git push` to remote repositories (`origin`) unless the user explicitly instructs or confirms to push.

### 2. No Direct Push to `main` Branch (Feature Branch Isolation)
- **STRICTLY PROHIBITED**: NEVER push commits or merge code directly into the `main` branch under any circumstances.
- **Always use dedicated feature branches**: All changes, fixes, and features must be committed and pushed to a separate dedicated branch (e.g. `feature/...`, `fix/...`, or `chore/...`).
- **PR Merge Workflow**: Merging into `main` must strictly be performed through GitHub Pull Requests (PRs) after review and approval.
