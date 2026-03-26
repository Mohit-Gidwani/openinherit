# Contributing to INHERIT

Thank you for your interest in contributing to the INHERIT open estate data standard. This document explains how to get involved.

## How to Report a Bug

Use the [bug report template](.github/ISSUE_TEMPLATE/bug-report.yml). Include:
- Which schema is affected
- What you expected vs. what happened
- Steps to reproduce
- Your INHERIT version

## How to Propose a Schema Change

1. **File an issue** using the [schema change request template](.github/ISSUE_TEMPLATE/schema-change-request.yml)
2. **Discuss** in the issue — gather feedback, assess backwards compatibility
3. **Write a proposal** in `proposals/` (required for candidate/stable schemas)
4. **Submit a PR** with the change, tests, and updated CHANGELOG

## How to Author a New Extension

1. Read the [Extension Guide](docs/extension-guide.md)
2. Create a subdirectory in `v1/extensions/` with your extension schema and `extension.json` manifest
3. Add test cases in `tests/v1/`
4. Update `extensions-registry.json`
5. Submit a PR

Community extensions can also live in their own repository — see the extension guide for details.

## Pull Request Requirements

All PRs must:

- [ ] Pass all CI checks (schema validation, OpenAPI lint, test suite)
- [ ] Include language-agnostic test cases for new or changed schemas
- [ ] Update `CHANGELOG.md`
- [ ] Maintain backwards compatibility for `candidate` and `stable` schemas
- [ ] For extensions: update `extension.json` manifest with new version and `lastVerified` date

## Code of Conduct

This project follows the [Contributor Covenant v2.1](https://www.contributor-covenant.org/version/2/1/code_of_conduct/). By participating, you agree to uphold this code. Report unacceptable behaviour to hello@openinherit.org.

## Questions?

Open a discussion or email hello@openinherit.org.
