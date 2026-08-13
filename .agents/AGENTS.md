# Cashora Workspace Behavioral Rules & Customizations

## 🛑 Git Remote Push Constraint (CRITICAL)
- **Do NOT execute `git push` automatically**: When the user requests to work on any task or feature, work on the codebase locally (edits, local builds, testing, and local git commits).
- **Wait for explicit user consent**: NEVER run `git push` to remote repositories (`origin`) unless the user explicitly instructs or confirms to push.
