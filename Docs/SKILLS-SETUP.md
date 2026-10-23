# IndieOS — Skills.sh Setup Plan

**Status:** Recommendations only; not installed  
**Date:** 23 October 2026

This plan is intentionally small. Skills are reusable instructions, not plugins that guarantee correct code. Verify and review each skill before installation; the shadcn skill in particular may contain shell-command directives. The skills CLI documentation describes `npx skills add` as the standard installation flow. The project’s package/agent environment should be inspected first. See skills.sh docs: https://www.skills.sh/docs.

## Install for design/spec work

### 1. `frontend-design`
Purpose: create a distinctive, context-specific interface with deliberate typography, layout and motion rather than a generic AI template.

Official listing: https://www.skills.sh/anthropics/skills/frontend-design  
Command:
```bash
npx skills add https://github.com/anthropics/skills --skill frontend-design
```

### 2. `magic-ui`
Purpose: apply Magic UI components only when a component/effect has a clear visual purpose and does not harm readability.

Official listing: https://www.skills.sh/magicuidesign/magicui/magic-ui  
Command:
```bash
npx skills add https://github.com/magicuidesign/magicui --skill magic-ui
```

## Install before implementing the component foundation

### 3. `shadcn`
Purpose: follow the current shadcn/ui component/CLI workflow and project conventions.

Official listing: https://www.skills.sh/shadcn-ui/ui/shadcn  
Command:
```bash
npx skills add https://github.com/shadcn-ui/ui --skill shadcn
```

**Security/review note:** the listed skill contains shell-command directives. Inspect its `SKILL.md` before trusting it. When running shadcn CLI commands, use the package runner that matches the repository's declared package manager.

### 4. `next-best-practices`
Purpose: help the agent follow Next.js App Router and version-specific conventions. Especially important to check against the actual Next.js version in the repository.

Official listing: https://www.skills.sh/vercel-labs/openreview/next-best-practices  
Command:
```bash
npx skills add https://github.com/vercel-labs/openreview --skill next-best-practices
```

### 5. `web-design-guidelines`
Purpose: run an independent UI/accessibility review after visual slices; the skill listing says it fetches the latest Web Interface Guidelines during review.

Official listing: https://www.skills.sh/vercel-labs/agent-skills/web-design-guidelines  
Command:
```bash
npx skills add https://github.com/vercel-labs/agent-skills --skill web-design-guidelines
```

## Add only once the application exists

### 6. `webapp-testing`
Purpose: Playwright-based browser testing for local web apps, including screenshot/DOM inspection, interactions and console capture.

Official listing: https://www.skills.sh/anthropics/skills/webapp-testing  
Command:
```bash
npx skills add https://github.com/anthropics/skills --skill webapp-testing
```

## Recommended order

1. Read-only repository reconnaissance. Confirm agent, package manager, Next.js version, installed components, and existing skill support.
2. Install/review `frontend-design` for the design phase, if not already present.
3. Install/review `magic-ui` only if a real planned section will use Magic UI.
4. Before coding, install/review `shadcn` and `next-best-practices` if useful and not redundant with the current environment.
5. Use `web-design-guidelines` after major screens have been implemented.
6. Add `webapp-testing` when the local app can be launched and tested.

Do not install skills just because they appear in a checklist. Avoid duplicates, inspect the actual skill files, and do not blindly execute installation/update directives or remote shell commands.
