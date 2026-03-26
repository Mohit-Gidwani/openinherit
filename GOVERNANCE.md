# Governance

## Decision-Making

INHERIT uses a **Benevolent Dictator** governance model. Richard Davies (Testate Technologies Ltd) has final authority over the standard. Extension maintainers have authority over their jurisdiction's schema content.

Governance will formalise as major sponsors and jurisdiction partners join. No rush to formalise prematurely — premature governance is worse than no governance.

## Schema Change Rules

Changes are governed by schema maturity level:

| Maturity | Who Decides | Change Rules |
|----------|------------|-------------|
| **draft** | Maintainer discretion | Breaking changes allowed |
| **candidate** | Requires proposal + community review | Breaking changes require a proposal in `proposals/`, minimum 14-day review period, and maintainer approval |
| **stable** | Cannot be changed | No breaking changes permitted. New major version required. |

## Versioning

- **Within a major version (v1.x):** Additive only — new optional properties, new enum values, new schemas. Never remove, rename, or tighten cardinality.
- **Across major versions:** Breaking changes permitted. New version = new directory (`v2/`).
- **Schemas are immutable once published.** To change a published schema, publish a new version.

## Extension Promotion

| From | To | Requirements |
|------|----|-------------|
| Community | Pending | Maintainer submits request, schema passes CI, at least one implementation exists |
| Pending | Core | Reviewed by Richard, passes full test suite, maintainer commits to ongoing maintenance |

## Stability Requirement

No schema reaches `stable` maturity until at least **two independent implementations** pass Level 2 (Referentially Intact) conformance. This follows the W3C model.

## Steering Committee

The steering committee grows organically from commercial partnerships. Each jurisdiction partner firm gets a seat. The committee advises on schema evolution, new extensions, and breaking changes.
