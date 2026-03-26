# INHERIT Primer

A narrative walkthrough of the INHERIT open estate data standard — from first principles to a working document.

## What Is INHERIT?

INHERIT is an open data standard for estate planning information. It provides a common JSON format for representing everything that makes up an estate plan: the people involved, what they own, what they owe, who gets what, and who's responsible for making it happen.

The standard supports succession law across common law, civil law, Islamic, Jewish, Hindu, Japanese, and African customary legal traditions — through a core schema set plus jurisdiction-specific extensions.

## Why Does It Exist?

Estate planning information is trapped in proprietary systems. When a client moves between advisers, or a family needs to understand what a deceased relative arranged, the information doesn't travel. INHERIT gives it a portable, machine-readable format.

More importantly: when people can see their options clearly, they make better decisions. INHERIT powers tools that present estate planning information in plain language, turning an avoided conversation into a resolved one.

## The Four-Facet Data Product

Every INHERIT document is a data product with four facets:

1. **Data** — The estate information: people, assets, bequests, trusts, executors
2. **Structure** — How it's formatted: JSON Schema 2020-12 with format assertion
3. **Meaning** — What each field means: `description` fields, `$comment` annotations, this primer
4. **Context** — Who created it and when: `exportedBy`, `generator`, `exportedAt`, extension manifests with `lastVerified` and `dataProvenance`

## Worked Example: Building an INHERIT Document

Let's build a valid INHERIT document from scratch. We'll model a simple English estate: James Ashford, aged 60, leaving his house to his wife and a cash gift to his son.

### Step 1: The envelope

Every INHERIT document starts with a root envelope:

```json
{
  "inherit": "https://openinherit.org/v1/schema.json",
  "version": 1,
  "exportedAt": "2026-03-26"
}
```

- `inherit` points to the schema version
- `version` is always `1` for INHERIT v1
- `exportedAt` is when the document was created

### Step 2: The estate

The estate links everything together:

```json
{
  "estate": {
    "id": "e1000000-0000-0000-0000-000000000001",
    "testatorPersonId": "a0000000-0000-0000-0000-000000000001",
    "status": "draft",
    "jurisdiction": { "country": "GB", "subdivision": "GB-ENG" },
    "createdAt": "2026-03-26",
    "lastModifiedAt": "2026-03-26"
  }
}
```

Key points:
- All IDs are UUIDs (enforced by the schema)
- `testatorPersonId` references a person we'll define next
- `jurisdiction` uses ISO 3166 codes

### Step 3: The people

Every person referenced anywhere must appear in the `people` array:

```json
{
  "people": [
    {
      "id": "a0000000-0000-0000-0000-000000000001",
      "givenName": "James",
      "familyName": "Ashford",
      "dateOfBirth": "1965-04-12",
      "roles": ["testator"],
      "contact": {
        "address": {
          "streetAddress": "42 Acacia Avenue",
          "addressLocality": "Bristol",
          "postalCode": "BS1 4AA",
          "addressCountry": "GB"
        }
      }
    },
    {
      "id": "a0000000-0000-0000-0000-000000000002",
      "givenName": "Catherine",
      "familyName": "Ashford",
      "roles": ["beneficiary", "executor"]
    },
    {
      "id": "a0000000-0000-0000-0000-000000000003",
      "givenName": "Oliver",
      "familyName": "Ashford",
      "roles": ["beneficiary"]
    }
  ]
}
```

A person can have multiple roles — Catherine is both a beneficiary and an executor.

### Step 4: The property

James owns a house:

```json
{
  "properties": [
    {
      "id": "p0000000-0000-0000-0000-000000000001",
      "name": "42 Acacia Avenue",
      "propertyType": "residential",
      "tenure": "freehold",
      "estimatedValue": { "amount": 45000000, "currency": "GBP" },
      "address": {
        "streetAddress": "42 Acacia Avenue",
        "addressLocality": "Bristol",
        "postalCode": "BS1 4AA",
        "addressCountry": "GB"
      }
    }
  ]
}
```

Note: monetary amounts are **integer minor units** (pennies). `45000000` = GBP 450,000.00.

### Step 5: The bequests

James leaves the house to Catherine and GBP 10,000 to Oliver:

```json
{
  "bequests": [
    {
      "id": "b0000000-0000-0000-0000-000000000001",
      "type": "specific",
      "beneficiaryId": "a0000000-0000-0000-0000-000000000002",
      "description": "My property at 42 Acacia Avenue, Bristol",
      "propertyId": "p0000000-0000-0000-0000-000000000001"
    },
    {
      "id": "b0000000-0000-0000-0000-000000000002",
      "type": "pecuniary",
      "beneficiaryId": "a0000000-0000-0000-0000-000000000003",
      "amount": { "amount": 1000000, "currency": "GBP" }
    }
  ]
}
```

Bequest types include: `specific` (named item), `pecuniary` (cash sum), `general`, `demonstrative`, `residuary`, `class`, and `contingent`.

### Step 6: The executor

Catherine is named executor:

```json
{
  "executors": [
    {
      "id": "x0000000-0000-0000-0000-000000000001",
      "personId": "a0000000-0000-0000-0000-000000000002",
      "role": "executor",
      "priority": 1
    }
  ]
}
```

### The complete document

Combine all sections, add empty arrays for unused entity types, and you have a valid Level 1 (Schema Valid) INHERIT document. For Level 2 (Referentially Intact), all cross-references must resolve — every `beneficiaryId` matches a person, every `testatorPersonId` matches a person, etc.

## Extensions

Our example is an English estate. To add England & Wales-specific fields (IHT nil-rate band, statutory legacy, IFPA eligibility), reference the UK E&W extension in the estate's jurisdiction data.

Extensions add fields — they never remove or override core fields. An INHERIT document is always valid against the core schemas, with or without extensions.

## Validating a Document

INHERIT defines three conformance levels:

1. **Schema Valid** — passes JSON Schema validation
2. **Referentially Intact** — all cross-references resolve
3. **Jurisdiction Complete** — all jurisdiction-required fields populated

Run the test suite locally:

```bash
pnpm test
```

Or use the validation endpoint (when available):

```bash
curl -X POST https://api.openinherit.org/v1/validate \
  -H "Content-Type: application/json" \
  -d @my-estate.json
```

## Generating Types

Generate TypeScript types from the OpenAPI schema bundle:

```bash
pnpm run generate
```

This produces typed interfaces and API client stubs in `generated/typescript/`.

## Contributing

See [CONTRIBUTING.md](../CONTRIBUTING.md) for how to report bugs, propose schema changes, or author extensions.
