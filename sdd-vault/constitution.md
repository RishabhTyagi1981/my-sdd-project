# SDD-001: Autonomous Multi-Agent Workspace Constitution

## 1. System Objective
To establish a zero-cost, localized, asynchronous Spec-Driven Development pipeline that transforms raw JIRA inputs into fully verified code changes, unit tests, and autonomous Git operations using local LLM inference engines.

## 2. Directory Schema & Isolation Boundaries
The solution must strictly isolate operational configurations, execution engines, source code targets, and diagnostic documentation vaults according to the following layout:

- `sdd-vault/` -> Root repository for all system specifications and design files.
  - `CONSTITUTION.md` -> This core configuration specification file.
  - `business-analyst/` -> Isolated domain folder for requirement validation.
  - `architect/` -> Isolated domain folder for mechanical breakdown operations.
  - `qa-lead/` -> Isolated domain folder for code verification.
- `.sdd/` -> Automation engine containing background web orchestration handlers.
- `src/components/` -> Target destination for production application assets.
- `tests/` -> Target destination for generated automated test verification files.

## 3. Agent Execution Rules
1. **Source of Truth Rule:** No downstream agent may look at raw user inputs. The Business Analyst output (`SPEC.md`) is the absolute source of truth for the workspace.
2. **Audit Rule:** Every agent must output its operational reasoning, internal thought chain, and verification statuses to a dedicated `AGENT_LOG.md` within its respective vault domain.

## 4. State Machine Definition
Idle -> Active Engineering -> Awaiting Human PR Approval -> Merging Changes -> Integrated Successful.
