# RSS Jigani

## Overview
Imported from Lovable (GitHub). A TanStack Start (React 19 + Vite 8 + Tailwind 4) app using shadcn/ui components (Radix UI primitives). Managed with Bun.

## Running on Replit
- Package manager: **Bun** (`bun install`).
- Dev server: `bun run dev` (runs `vite dev`), configured as the "Start application" workflow, serving on port 5000.
- `vite.config.ts` overrides the Lovable sandbox's default host (`::`, IPv6) and port (8080) via the `vite.server` option, since this container doesn't support IPv6 binding: uses `host: 0.0.0.0`, `port: 5000`, `allowedHosts: true` (required for Replit's proxied preview iframe).
- Build: `bun run build` → `vite build` (uses Nitro with a Cloudflare preset by default from the Lovable config; not yet adapted for Replit deployments).

## User preferences
None recorded yet.
