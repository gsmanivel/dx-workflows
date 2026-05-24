# dx-workflows

Centralized GitHub Actions workflows and custom actions for the DX organization.

## Overview

This repository provides reusable workflows and actions that enforce DX org standards across all repositories.

## How It Works
Developer raises PR
↓
Repo workflow calls dx-workflows/reusable-code-quality.yml
↓
Runs Maven verify (PMD + Checkstyle + SpotBugs)
↓
if passes + ai_review: true
↓
Triggers DX PR Review Agent
↓
AI posts review comment on PR
## Usage

In your repository, create `.github/workflows/code-quality.yml`:

```yaml
name: Code Quality Check

on:
  pull_request:
    branches:
      - main

jobs:
  code-quality:
    uses: gsmanivel/dx-workflows/.github/workflows/reusable-code-quality.yml@main
    with:
      ai_review: true
```

## Inputs

| Input | Type | Default | Description |
|---|---|---|---|
| `ai_review` | boolean | false | Enable AI PR review agent |

## What Gets Checked

| Tool | What it checks |
|---|---|
| PMD | Code complexity, bad practices |
| Checkstyle | Formatting, naming conventions |
| SpotBugs | Bug patterns, null pointer risks |
| AI Review | Code quality, suggestions (if enabled) |

## Repositories Using This Workflow

- dx-gitrepo-service
