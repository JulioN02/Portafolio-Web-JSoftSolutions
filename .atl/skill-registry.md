# Skill Registry — Web-JSoftSolutions

**Last Updated**: 2026-04-10

## User Skills

| Skill | Location | Triggers |
|-------|----------|----------|
| `branch-pr` | `~/.config/opencode/skills/branch-pr/SKILL.md` | PR creation workflow for Agent Teams Lite following the issue-first enforcement system. Trigger: When creating a pull request, opening a PR, or preparing changes for review. |
| `code-auditor` | `~/.config/opencode/skills/code-auditor/SKILL.md` | Auditor complementario de seguridad, conexión, desarrollo y testeo. Trigger: Cuando se toquen temas de seguridad, APIs, integraciones, testing, code review, o cuando se pida auditoría explícita. |
| `design-critic` | `~/.config/opencode/skills/design-critic/SKILL.md` | Crítico de diseño y requisitos. Cuestiona decisiones, identifica suposiciones no validadas, pide aclaración cuando falta información, y revisa coherencia entre requisitos e implementación. Trigger: Cuando se trabajen propuestas, specs, diseño, tareas, o cuando se pida revisión crítica. |
| `go-testing` | `~/.config/opencode/skills/go-testing/SKILL.md` | Go testing patterns for Gentleman.Dots, including Bubbletea TUI testing. Trigger: When writing Go tests, using teatest, or adding test coverage. |
| `issue-creation` | `~/.config/opencode/skills/issue-creation/SKILL.md` | Issue creation workflow for Agent Teams Lite following the issue-first enforcement system. Trigger: When creating a GitHub issue, reporting a bug, or requesting a feature. |
| `judgment-day` | `~/.config/opencode/skills/judgment-day/SKILL.md` | Parallel adversarial review protocol that launches two independent blind judge sub-agents simultaneously to review the same target, synthesizes their findings, applies fixes, and re-judges until both pass or escalates after 2 iterations. Trigger: When user says "judgment day", "judgment-day", "review adversarial", "dual review", "doble review", "juzgar", "que lo juzguen". |
| `nextjs-15` | `~/.config/opencode/skills/nextjs-15/SKILL.md` | Next.js 15 App Router patterns. Trigger: When working with Next.js - routing, Server Actions, data fetching. |
| `playwright` | `~/.config/opencode/skills/playwright/SKILL.md` | Playwright E2E testing patterns. Trigger: When writing E2E tests - Page Objects, selectors, MCP workflow. |
| `react-19` | `~/.config/opencode/skills/react-19/SKILL.md` | React 19 patterns with React Compiler. Trigger: When writing React components - no useMemo/useCallback needed. |
| `typescript` | `~/.config/opencode/skills/typescript/SKILL.md` | TypeScript strict patterns and best practices. Trigger: When writing TypeScript code - types, interfaces, generics. |
| `vertical-slices` | `~/.config/opencode/skills/vertical-slices/SKILL.md` | Modelo de desarrollo v2.0: Monolito Modular + Vertical Slices + API-First. Trigger: Cuando se inicia un nuevo proyecto, se planifica una iteración, o se pide desarrollo por flujos completos. |
| `skill-creator` | `~/.config/opencode/skills/skill-creator/SKILL.md` | Creates new AI agent skills following the Agent Skills spec. Trigger: When user asks to create a new skill, add agent instructions, or document patterns for AI. |

## Project Skills

No project-specific skills found.

## Project Conventions

- **CI/CD**: GitHub Actions for deployment to GitHub Pages (`.github/workflows/deploy.yml`)
- **Editor Config**: `.vscode/settings.json` (empty)
- **No linter or formatter** detected
- **No test CI** configured

## Notes

- Skills `sdd-*`, `_shared`, and `skill-registry` are omitted from this registry.
- User skills are deduplicated by name (project-level would win if existed).
