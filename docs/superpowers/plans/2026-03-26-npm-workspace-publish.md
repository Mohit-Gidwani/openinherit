# npm Workspace & Publishing — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Convert the openinherit repo into a pnpm workspace with two publishable packages (`@openinherit/schema` and `@openinherit/sdk`) and a GitHub Actions workflow for tag-based npm publishing.

**Architecture:** pnpm workspace monorepo. Root stays `private: true`. Two packages under `packages/` contain copies of schema files and generated TypeScript. A single GitHub Action publishes both on `v*` tags with provenance.

**Tech Stack:** pnpm 10.x workspaces, TypeScript 5.x, GitHub Actions, npm provenance

---

## File Map

| Action | Path | Purpose |
|--------|------|---------|
| Create | `pnpm-workspace.yaml` | Declares workspace packages |
| Modify | `package.json` | Add workspace-level scripts |
| Create | `packages/schema/package.json` | Schema package metadata + exports |
| Create | `packages/sdk/package.json` | SDK package metadata + exports |
| Create | `packages/sdk/tsconfig.json` | TypeScript config for SDK build |
| Copy | `packages/schema/v1/` | From root `v1/` |
| Copy | `packages/schema/extensions-registry.json` | From root |
| Copy | `packages/schema/reference-data/` | From root `reference-data/` |
| Copy | `packages/sdk/src/estate/` | From `generated/typescript/` |
| Copy | `packages/sdk/src/reference/` | From `generated/typescript-api/` |
| Create | `.github/workflows/publish.yml` | Tag-triggered npm publish |
| Modify | `README.md` | Add npm install instructions |

---

### Task 1: Create pnpm workspace config

**Files:**
- Create: `pnpm-workspace.yaml`

- [ ] **Step 1: Create the workspace file**

Create `pnpm-workspace.yaml` at the repo root:

```yaml
packages:
  - "packages/*"
```

- [ ] **Step 2: Verify pnpm recognises the workspace**

Run: `pnpm ls --recursive --depth 0 2>&1 || echo "No packages yet — expected"`

Expected: Either empty workspace or a message about no packages — no errors about invalid config.

- [ ] **Step 3: Commit**

```bash
git add pnpm-workspace.yaml
git commit -m "chore: add pnpm workspace config"
```

---

### Task 2: Create @openinherit/schema package

**Files:**
- Create: `packages/schema/package.json`
- Copy: `packages/schema/v1/` (from root `v1/`)
- Copy: `packages/schema/extensions-registry.json` (from root)
- Copy: `packages/schema/reference-data/` (from root `reference-data/`)

- [ ] **Step 1: Create the package directory and copy schema files**

```bash
mkdir -p packages/schema
cp -r v1 packages/schema/v1
cp extensions-registry.json packages/schema/extensions-registry.json
cp -r reference-data packages/schema/reference-data
```

- [ ] **Step 2: Create package.json**

Create `packages/schema/package.json`:

```json
{
  "name": "@openinherit/schema",
  "version": "1.0.0",
  "description": "INHERIT estate planning data standard — JSON Schema, JSON-LD context, and reference data",
  "type": "module",
  "license": "Apache-2.0",
  "repository": {
    "type": "git",
    "url": "https://github.com/openinherit/openinherit.git",
    "directory": "packages/schema"
  },
  "homepage": "https://github.com/openinherit/openinherit",
  "exports": {
    "./v1/*": "./v1/*",
    "./extensions-registry.json": "./extensions-registry.json",
    "./reference-data/*": "./reference-data/*"
  },
  "files": [
    "v1",
    "extensions-registry.json",
    "reference-data"
  ],
  "publishConfig": {
    "access": "public"
  },
  "keywords": [
    "inherit",
    "estate-planning",
    "json-schema",
    "probate",
    "wills",
    "trusts",
    "open-data"
  ]
}
```

- [ ] **Step 3: Verify the package is visible in the workspace**

Run: `pnpm ls --recursive --depth 0`

Expected: Shows `@openinherit/schema 1.0.0` in the list.

- [ ] **Step 4: Dry-run pack to check included files**

Run: `cd packages/schema && pnpm pack --dry-run 2>&1 | head -30 && cd ../..`

Expected: Lists `v1/`, `extensions-registry.json`, `reference-data/`, and `package.json`. No unexpected files.

- [ ] **Step 5: Commit**

```bash
git add packages/schema/
git commit -m "feat: add @openinherit/schema package"
```

---

### Task 3: Create @openinherit/sdk package

**Files:**
- Create: `packages/sdk/package.json`
- Create: `packages/sdk/tsconfig.json`
- Copy: `packages/sdk/src/estate/` (from `generated/typescript/`)
- Copy: `packages/sdk/src/reference/` (from `generated/typescript-api/`)

- [ ] **Step 1: Create directory structure and copy generated code**

```bash
mkdir -p packages/sdk/src
cp -r generated/typescript packages/sdk/src/estate
cp -r generated/typescript-api packages/sdk/src/reference
```

- [ ] **Step 2: Create tsconfig.json**

Create `packages/sdk/tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "declaration": true,
    "declarationMap": true,
    "sourceMap": true,
    "outDir": "dist",
    "rootDir": "src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "isolatedModules": true,
    "verbatimModuleSyntax": true
  },
  "include": ["src"]
}
```

- [ ] **Step 3: Create package.json**

Create `packages/sdk/package.json`:

```json
{
  "name": "@openinherit/sdk",
  "version": "1.0.0",
  "description": "INHERIT estate planning SDK — TypeScript types and API client stubs",
  "type": "module",
  "license": "Apache-2.0",
  "repository": {
    "type": "git",
    "url": "https://github.com/openinherit/openinherit.git",
    "directory": "packages/sdk"
  },
  "homepage": "https://github.com/openinherit/openinherit",
  "exports": {
    ".": {
      "types": "./dist/estate/index.d.ts",
      "import": "./dist/estate/index.js"
    },
    "./reference": {
      "types": "./dist/reference/index.d.ts",
      "import": "./dist/reference/index.js"
    }
  },
  "files": [
    "dist"
  ],
  "scripts": {
    "build": "tsc",
    "clean": "rm -rf dist"
  },
  "peerDependencies": {
    "@hey-api/client-fetch": ">=0.1.0"
  },
  "devDependencies": {
    "@hey-api/client-fetch": "latest",
    "typescript": "^5.7.0"
  },
  "publishConfig": {
    "access": "public"
  },
  "keywords": [
    "inherit",
    "estate-planning",
    "typescript",
    "api-client",
    "probate",
    "wills",
    "trusts",
    "open-data"
  ]
}
```

- [ ] **Step 4: Install dependencies**

Run: `pnpm install`

Expected: Installs `typescript` and `@hey-api/client-fetch` in the SDK package. No errors.

- [ ] **Step 5: Build the SDK**

Run: `pnpm --filter @openinherit/sdk run build`

Expected: TypeScript compiles successfully. `packages/sdk/dist/` is created with `estate/` and `reference/` subdirectories containing `.js`, `.d.ts`, and `.d.ts.map` files.

If there are TypeScript errors, fix them. Common issues with auto-generated code:
- The `verbatimModuleSyntax` flag may conflict with generated `import` statements that should be `import type`. If this happens, remove `"verbatimModuleSyntax": true` from tsconfig.json and retry.
- The `strict` flag may cause issues with generated code. If so, add `"noImplicitAny": false` to the compilerOptions.

- [ ] **Step 6: Verify dist output structure**

Run: `ls packages/sdk/dist/estate/ && ls packages/sdk/dist/reference/`

Expected: Both directories contain `index.js`, `index.d.ts`, `types.gen.js`, `types.gen.d.ts`, `sdk.gen.js`, `sdk.gen.d.ts`, `client.gen.js`, `client.gen.d.ts`, and a `core/` directory.

- [ ] **Step 7: Dry-run pack to check included files**

Run: `cd packages/sdk && pnpm pack --dry-run 2>&1 | head -40 && cd ../..`

Expected: Lists only `dist/` contents and `package.json`. No `src/` files.

- [ ] **Step 8: Commit**

```bash
git add packages/sdk/
git commit -m "feat: add @openinherit/sdk package"
```

---

### Task 4: Add workspace-level build scripts to root package.json

**Files:**
- Modify: `package.json` (root)

- [ ] **Step 1: Add workspace scripts**

Add these scripts to the root `package.json` `scripts` object:

```json
"build:sdk": "pnpm --filter @openinherit/sdk run build",
"build": "pnpm --filter @openinherit/sdk run build",
"clean": "pnpm --filter @openinherit/sdk run clean"
```

Keep all existing scripts intact.

- [ ] **Step 2: Verify existing scripts still work**

Run: `pnpm validate`

Expected: Schema validation passes (same as before).

- [ ] **Step 3: Verify new build script**

Run: `pnpm build`

Expected: SDK builds successfully.

- [ ] **Step 4: Commit**

```bash
git add package.json
git commit -m "chore: add workspace build scripts to root"
```

---

### Task 5: Create GitHub Actions publish workflow

**Files:**
- Create: `.github/workflows/publish.yml`

- [ ] **Step 1: Create the workflow file**

Create `.github/workflows/publish.yml`:

```yaml
name: Publish to npm

on:
  push:
    tags:
      - "v*"

permissions:
  contents: read
  id-token: write

jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup pnpm
        uses: pnpm/action-setup@v4
        with:
          version: 10

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: "22"
          registry-url: "https://registry.npmjs.org"

      - name: Install dependencies
        run: pnpm install --frozen-lockfile

      - name: Build SDK
        run: pnpm --filter @openinherit/sdk run build

      - name: Publish @openinherit/schema
        run: pnpm --filter @openinherit/schema publish --provenance --no-git-checks
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}

      - name: Publish @openinherit/sdk
        run: pnpm --filter @openinherit/sdk publish --provenance --no-git-checks
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```

- [ ] **Step 2: Validate the YAML syntax**

Run: `node -e "const fs=require('fs');const y=require('yaml');y.parse(fs.readFileSync('.github/workflows/publish.yml','utf8'));console.log('Valid YAML')" 2>&1 || python3 -c "import yaml; yaml.safe_load(open('.github/workflows/publish.yml')); print('Valid YAML')"`

Expected: "Valid YAML"

- [ ] **Step 3: Commit**

```bash
git add .github/workflows/publish.yml
git commit -m "ci: add npm publish workflow (tag-triggered with provenance)"
```

---

### Task 6: Update README with install instructions

**Files:**
- Modify: `README.md`

- [ ] **Step 1: Add installation section**

After the existing "Quick Start" section (after the `---` separator following "This produces TypeScript types and API client stubs in `generated/typescript/`."), add:

```markdown
### Install via npm

```bash
# Schema files (JSON Schema, JSON-LD context, reference data)
pnpm add @openinherit/schema

# TypeScript types and API client
pnpm add @openinherit/sdk
```

**Using the schema package:**

```javascript
// Import a JSON Schema file
import estate from '@openinherit/schema/v1/estate.json' with { type: 'json' };

// Import reference data
import activities from '@openinherit/schema/reference-data/practitioner-activities.json' with { type: 'json' };
```

**Using the SDK:**

```typescript
import { type Estate, type Person } from '@openinherit/sdk';
import { createEstate, listEstates } from '@openinherit/sdk/reference';
```
```

- [ ] **Step 2: Commit**

```bash
git add README.md
git commit -m "docs: add npm install instructions to README"
```

---

### Task 7: Add dist/ to .gitignore and final verification

**Files:**
- Modify: `.gitignore` (create if it doesn't exist)

- [ ] **Step 1: Add SDK dist to .gitignore**

Ensure `.gitignore` contains:

```
node_modules/
packages/sdk/dist/
```

- [ ] **Step 2: Run full workspace check**

Run: `pnpm ls --recursive --depth 0`

Expected: Shows both `@openinherit/schema 1.0.0` and `@openinherit/sdk 1.0.0`.

- [ ] **Step 3: Clean build from scratch**

Run: `pnpm --filter @openinherit/sdk run clean && pnpm --filter @openinherit/sdk run build`

Expected: Clean build succeeds.

- [ ] **Step 4: Verify root scripts still work**

Run: `pnpm validate && pnpm test`

Expected: Both pass — existing functionality is unbroken.

- [ ] **Step 5: Commit and push**

```bash
git add .gitignore
git commit -m "chore: add sdk dist to .gitignore"
git push origin main
```

Verify push: `git log --oneline origin/main -1` must match local HEAD.
