# Security Policy

## Reporting a Vulnerability

If you discover a security vulnerability in the INHERIT standard or its tooling, please report it responsibly.

**Do NOT open a public issue.** Instead, email **security@openinherit.org** with:

- A description of the vulnerability
- Steps to reproduce
- The potential impact
- Any suggested fix (if you have one)

## Response Time

We aim to acknowledge reports within **48 hours** and provide an initial assessment within **5 working days**.

## Scope

This policy covers:
- The INHERIT JSON Schema files
- The OpenAPI specification
- The test suite and validation tooling
- The SDK generation pipeline
- CI/CD configurations

Schema design issues that could lead to data exposure (e.g. a schema that inadvertently requires sensitive data in a field that should be optional) are in scope.

## Disclosure

We follow coordinated disclosure. We will work with you to understand and address the issue before any public disclosure.
