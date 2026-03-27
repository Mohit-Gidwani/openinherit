/**
 * create-estate.ts — Build a valid INHERIT English estate from scratch.
 *
 * Demonstrates:
 *   - Constructing a complete INHERIT v1 document with all 15 required entity arrays
 *   - Testator, spouse (beneficiary + executor), child (beneficiary)
 *   - Property with freehold tenure and estimated value
 *   - Specific bequest (house) and pecuniary bequest (cash)
 *   - Executor appointment
 *   - AJV validation against the INHERIT root schema (JSON Schema 2020-12)
 *
 * Run:  npx tsx create-estate.ts
 *       pnpm run create
 *
 * All monetary amounts are integer minor units (pence for GBP).
 * All IDs are valid v4 UUIDs.
 */

import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import Ajv2020 from "ajv/dist/2020.js";
import addFormats from "ajv-formats";

// ---------------------------------------------------------------------------
// 1. Stable UUIDs — makes the example reproducible and cross-referenceable
// ---------------------------------------------------------------------------

const TESTATOR_ID = "a1b2c3d4-1111-4aaa-8000-000000000001";
const SPOUSE_ID = "a1b2c3d4-2222-4aaa-8000-000000000002";
const CHILD_ID = "a1b2c3d4-3333-4aaa-8000-000000000003";
const ESTATE_ID = "a1b2c3d4-4444-4aaa-8000-000000000004";
const PROPERTY_ID = "a1b2c3d4-5555-4aaa-8000-000000000005";
const BEQUEST_HOUSE_ID = "a1b2c3d4-6666-4aaa-8000-000000000006";
const BEQUEST_CASH_ID = "a1b2c3d4-7777-4aaa-8000-000000000007";
const EXECUTOR_ID = "a1b2c3d4-8888-4aaa-8000-000000000008";

// ---------------------------------------------------------------------------
// 2. People — testator, spouse, child
// ---------------------------------------------------------------------------

const testator = {
  id: TESTATOR_ID,
  givenName: "James",
  familyName: "Ashford",
  dateOfBirth: "1965-04-12",
  roles: ["testator"] as const,
  contact: {
    address: {
      streetAddress: "42 Acacia Avenue",
      addressLocality: "Bristol",
      postalCode: "BS1 4AA",
      addressCountry: "GB",
    },
  },
};

const spouse = {
  id: SPOUSE_ID,
  givenName: "Catherine",
  familyName: "Ashford",
  roles: ["beneficiary", "executor"] as const,
  contact: {
    address: {
      streetAddress: "42 Acacia Avenue",
      addressLocality: "Bristol",
      postalCode: "BS1 4AA",
      addressCountry: "GB",
    },
  },
};

const child = {
  id: CHILD_ID,
  givenName: "Oliver",
  familyName: "Ashford",
  roles: ["beneficiary"] as const,
};

// ---------------------------------------------------------------------------
// 3. Property — the family home
// ---------------------------------------------------------------------------

const familyHome = {
  id: PROPERTY_ID,
  name: "42 Acacia Avenue",
  propertyType: "semi_detached_house",
  tenureType: "freehold",
  ownershipType: "sole",
  isPrimaryResidence: true,
  estimatedValue: {
    amount: 45000000, // GBP 450,000.00 in pence
    currency: "GBP",
  },
  address: {
    streetAddress: "42 Acacia Avenue",
    addressLocality: "Bristol",
    postalCode: "BS1 4AA",
    addressCountry: "GB",
  },
};

// ---------------------------------------------------------------------------
// 4. Bequests — house to Catherine (specific), GBP 10,000 to Oliver (pecuniary)
// ---------------------------------------------------------------------------

const houseBequest = {
  id: BEQUEST_HOUSE_ID,
  type: "specific",
  beneficiaryId: SPOUSE_ID,
  description:
    "My freehold property at 42 Acacia Avenue, Bristol, BS1 4AA, to my wife Catherine Ashford absolutely.",
};

const cashBequest = {
  id: BEQUEST_CASH_ID,
  type: "pecuniary",
  beneficiaryId: CHILD_ID,
  amount: {
    amount: 1000000, // GBP 10,000.00 in pence
    currency: "GBP",
  },
  description: "The sum of ten thousand pounds sterling to my son Oliver Ashford.",
};

// ---------------------------------------------------------------------------
// 5. Executor — Catherine as primary executor
// ---------------------------------------------------------------------------

const executor = {
  id: EXECUTOR_ID,
  personId: SPOUSE_ID,
  role: "primary",
};

// ---------------------------------------------------------------------------
// 6. Estate — ties everything together
// ---------------------------------------------------------------------------

const estate = {
  id: ESTATE_ID,
  testatorPersonId: TESTATOR_ID,
  status: "draft",
  jurisdiction: {
    country: "GB",
    subdivision: "GB-ENG",
    legalSystem: "common_law",
    name: "England & Wales",
  },
  createdAt: "2026-03-27",
  lastModifiedAt: "2026-03-27",
};

// ---------------------------------------------------------------------------
// 7. Root INHERIT document — all 15 entity arrays present
// ---------------------------------------------------------------------------

const inheritDocument = {
  inherit: "https://openinherit.org/v1/schema.json",
  version: 1,
  exportedAt: "2026-03-27",
  generator: {
    name: "INHERIT Examples",
    version: "1.0.0",
    url: "https://github.com/openinherit/openinherit",
  },

  // The estate record
  estate,

  // All 15 required entity arrays — populated where relevant, empty otherwise
  people: [testator, spouse, child],
  kinships: [],
  relationships: [],
  properties: [familyHome],
  assets: [],
  liabilities: [],
  bequests: [houseBequest, cashBequest],
  trusts: [],
  executors: [executor],
  guardians: [],
  wishes: [],
  documents: [],
  nonprobateTransfers: [],
  proxyAuthorisations: [],
  dealerInterests: [],
};

// ---------------------------------------------------------------------------
// 8. Validate against INHERIT v1 schemas using AJV (JSON Schema 2020-12)
// ---------------------------------------------------------------------------

/**
 * Recursively collect all .json files from a directory.
 */
function collectJsonFiles(dir: string): string[] {
  const results: string[] = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      results.push(...collectJsonFiles(full));
    } else if (entry.endsWith(".json")) {
      results.push(full);
    }
  }
  return results;
}

async function main(): Promise<void> {
  // Initialise AJV with 2020-12 draft support (required for unevaluatedProperties)
  const ajv = new Ajv2020({
    strict: false, // Tolerate $comment, $id in unexpected places
    allErrors: true, // Report all validation errors, not just the first
  });
  addFormats(ajv);

  // Load every schema from ../v1/ so that $ref resolution works
  const schemaDir = join(import.meta.dirname!, "..", "v1");
  const schemaFiles = collectJsonFiles(schemaDir);

  for (const file of schemaFiles) {
    const raw = readFileSync(file, "utf-8");
    let schema: Record<string, unknown>;
    try {
      schema = JSON.parse(raw);
    } catch {
      // Skip non-JSON or malformed files (e.g. context files)
      continue;
    }

    // Only register schemas that have a $id — AJV uses $id for $ref resolution
    if (typeof schema.$id === "string") {
      // Strip the custom $schema dialect URI — AJV does not need it and would
      // otherwise warn about a missing meta-schema for the INHERIT dialect.
      const { $schema: _dialect, ...schemaWithoutDialect } = schema;

      try {
        ajv.addSchema(schemaWithoutDialect);
      } catch (err) {
        // Schema already registered or other non-fatal issue — skip
        const msg = err instanceof Error ? err.message : String(err);
        if (!msg.includes("already exists")) {
          console.warn(
            `Warning: could not register ${relative(schemaDir, file)}: ${msg}`
          );
        }
      }
    }
  }

  // Validate the document against the root schema
  const rootSchemaId = "https://openinherit.org/v1/schema.json";
  const validate = ajv.getSchema(rootSchemaId);

  if (!validate) {
    console.error("ERROR: Root schema not found. Check schema loading.");
    process.exit(1);
  }

  const valid = validate(inheritDocument);

  if (valid) {
    console.log("Level 1: VALID");
  } else {
    console.log("Level 1: INVALID");
    console.log("\nValidation errors:");
    for (const err of validate.errors ?? []) {
      console.log(`  - ${err.instancePath || "/"}: ${err.message}`);
      if (err.params) {
        console.log(`    params: ${JSON.stringify(err.params)}`);
      }
    }
  }

  // Print the complete INHERIT JSON document
  console.log("\n--- INHERIT Document ---");
  console.log(JSON.stringify(inheritDocument, null, 2));
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
