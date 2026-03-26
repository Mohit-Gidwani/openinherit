# npm Workspace & Publishing — Design Spec

**Date:** 26 Mar 2026
**Status:** Approved
**Scope:** Convert repo to pnpm workspace with two publishable packages + CI publish workflow

---

## Goal

Publish the INHERIT schema and SDK as two npm packages under the `@openinherit` scope, with automated tag-based publishing via GitHub Actions.

## Packages

### @openinherit/schema

**Purpose:** Raw JSON Schema files, JSON-LD context, extensions registry, and reference data.

**Contents (copied from repo root):**
- `v1/` — all 18 core entity schemas + common/, context/, extensions/ subdirectories
- `extensions-registry.json`
- `reference-data/` — body-activity-map.json, data-protection-rules.json, practitioner-activities.json, regulatory-bodies.json

**Exports:**
```json
{
  "exports": {
    "./v1/*": "./v1/*",
    "./extensions-registry.json": "./extensions-registry.json",
    "./reference-data/*": "./reference-data/*"
  }
}
```

**Build step:** None. Pure JSON distribution.

**package.json key fields:**
- `name`: `@openinherit/schema`
- `version`: `1.0.0`
- `type`: `module`
- `license`: `Apache-2.0`
- `files`: `["v1", "extensions-registry.json", "reference-data"]`
- `publishConfig.access`: `public`

### @openinherit/sdk

**Purpose:** Generated TypeScript types and API client stubs for both the estate document API and the reference API.

**Contents (copied from repo root):**
- `generated/typescript/` → `src/estate/` (estate document types + validate endpoint)
- `generated/typescript-api/` → `src/reference/` (reference API — 109 endpoints)

**Exports:**
```json
{
  "exports": {
    ".": {
      "types": "./dist/estate/index.d.ts",
      "import": "./dist/estate/index.js"
    },
    "./reference": {
      "types": "./dist/reference/index.d.ts",
      "import": "./dist/reference/index.js"
    }
  }
}
```

**Build step:** `tsc` — compile TypeScript to JS + declarations in `dist/`.

**Dependencies:**
- `peerDependencies`: `@hey-api/client-fetch` (the generated code imports from it)
- `devDependencies`: `typescript`, `@hey-api/client-fetch`

**package.json key fields:**
- `name`: `@openinherit/sdk`
- `version`: `1.0.0`
- `type`: `module`
- `license`: `Apache-2.0`
- `files`: `["dist"]`
- `publishConfig.access`: `public`

## Workspace Structure

```
openinherit/
├── pnpm-workspace.yaml          # NEW
├── package.json                  # existing, stays private
├── packages/
│   ├── schema/
│   │   ├── package.json          # NEW
│   │   ├── v1/                   # copied from root v1/
│   │   ├── extensions-registry.json  # copied from root
│   │   └── reference-data/       # copied from root
│   └── sdk/
│       ├── package.json          # NEW
│       ├── tsconfig.json         # NEW
│       └── src/
│           ├── estate/           # copied from generated/typescript/
│           │   ├── index.ts
│           │   ├── types.gen.ts
│           │   ├── sdk.gen.ts
│           │   ├── client.gen.ts
│           │   └── client/
│           │       └── ...
│           └── reference/        # copied from generated/typescript-api/
│               ├── index.ts
│               ├── types.gen.ts
│               ├── sdk.gen.ts
│               ├── client.gen.ts
│               └── client/
│                   └── ...
```

**Root files are NOT moved — they stay in place.** The packages directory contains copies. This avoids breaking existing scripts (`pnpm test`, `pnpm validate`, `pnpm generate`).

## GitHub Actions — publish.yml

**Trigger:** Push of tags matching `v*` (e.g., `v1.0.0`, `v1.0.1`)

**Steps:**
1. Checkout with full history
2. Setup Node 22.x
3. Setup pnpm 10.x (via `pnpm/action-setup`)
4. `pnpm install --frozen-lockfile`
5. Build SDK: `pnpm --filter @openinherit/sdk run build`
6. Publish schema: `pnpm --filter @openinherit/schema publish --provenance --no-git-checks`
7. Publish SDK: `pnpm --filter @openinherit/sdk publish --provenance --no-git-checks`

**Authentication:** Uses `NPM_TOKEN` repository secret. The `--provenance` flag requires npm's OIDC token permissions, so the workflow needs `id-token: write` and `contents: read` permissions.

## README Update

Add an "Installation" section after Quick Start:

```markdown
### Install via npm

```bash
# Schema files (JSON Schema, JSON-LD context, reference data)
pnpm add @openinherit/schema

# TypeScript types and API client
pnpm add @openinherit/sdk
```

## Decisions

1. **Copy, don't move** — existing CI workflows and scripts reference root paths. Moving files would break them. The packages contain copies.
2. **Peer dependency for client-fetch** — consumers choose their own version of `@hey-api/client-fetch`. The SDK doesn't bundle it.
3. **Single version tag** — both packages share the same version, published together from one tag. Simpler than independent versioning for a v1.0.0 launch.
4. **No build for schema** — it's pure JSON. No compilation needed.
5. **`core/` directory** — the generated code includes a `core/` directory with request/response utilities from hey-api. This gets included in the SDK build.
