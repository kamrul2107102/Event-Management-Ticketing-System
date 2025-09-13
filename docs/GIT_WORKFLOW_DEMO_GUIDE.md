# Git Team Workflow Demo - Complete CLI Reference Guide

## Overview
This guide demonstrates a complete Git workflow for multiple teams working on different features, including branch creation, development, and pull request management.

## Project Setup Summary
- **Main Branch:** `main` - Contains the base project structure
- **Team Branches:** `Team-A`, `Team-B`, `Team-C` - Feature branches for each team
- **Repository:** Event Management Ticketing System

## Complete CLI Workflow

### 1. Initial Setup and Verification

```bash
# Check current Git status
git status

# View remote repository information
git remote -v

# List all branches (local and remote)
git branch -a

# Check current branch
git branch
```

### 2. Team A Workflow - Event Creation Feature

```bash
# Create and switch to Team A branch
git checkout -b "Team-A"

# Verify you're on the correct branch
git branch

# Make code changes (implement event creation feature)
# Edit src/app.js, docs/PROJECT_STATUS.md, create docs/team-a-features.md

# Check what files have changed
git status

# Stage all changes
git add .

# Commit with descriptive message
git commit -m "Team A: Implement event creation feature

- Add complete event validation logic
- Implement event object creation with auto-ID
- Add error handling for missing required fields
- Update project status documentation
- Add Team A feature documentation"

# Push branch to remote repository
git push origin Team-A
```

### 3. Team B Workflow - Ticket Booking Feature

```bash
# Switch back to main branch for clean start
git checkout main

# Create and switch to Team B branch
git checkout -b "Team-B"

# Implement ticket booking feature
# Edit src/app.js, docs/PROJECT_STATUS.md, create docs/team-b-features.md

# Stage changes
git add .

# Commit changes
git commit -m "Team B: Implement ticket booking feature

- Add complete ticket booking validation
- Implement capacity checking and management
- Add user information validation
- Create detailed ticket objects with status tracking
- Update project documentation for Team B features"

# Push to remote
git push origin Team-B
```

### 4. Team C Workflow - Reporting System

```bash
# Return to main branch
git checkout main

# Create Team C branch
git checkout -b "Team-C"

# Implement reporting system
# Edit src/app.js, docs/PROJECT_STATUS.md, create docs/team-c-features.md

# Stage and commit
git add .
git commit -m "Team C: Implement comprehensive reporting system

- Add event statistics and analytics calculations
- Implement revenue tracking and financial reporting
- Calculate occupancy rates and capacity metrics
- Create detailed per-event performance analysis
- Add comprehensive reporting dashboard functionality"

# Push to remote
git push origin Team-C
```

## Pull Request Creation Methods

### Method 1: GitHub CLI (Recommended for Automation)

First install GitHub CLI:
```bash
# Windows (using winget)
winget install --id GitHub.cli

# Windows (using Chocolatey)
choco install gh

# Windows (using Scoop)
scoop install gh
```

Then authenticate and create PRs:
```bash
# Authenticate with GitHub
gh auth login

# Create PR for Team A (from Team-A branch)
git checkout Team-A
gh pr create --title "Team A: Event Creation Feature" --body "Implements complete event creation functionality with validation and error handling"

# Create PR for Team B (from Team-B branch) 
git checkout Team-B
gh pr create --title "Team B: Ticket Booking Feature" --body "Implements ticket booking system with capacity management and user validation"

# Create PR for Team C (from Team-C branch)
git checkout Team-C  
gh pr create --title "Team C: Reporting System" --body "Implements comprehensive reporting and analytics dashboard"
```

### Method 2: Using GitHub Web Interface

When you push a branch, GitHub provides a URL in the terminal output:
```
remote: Create a pull request for 'Team-A' on GitHub by visiting:
remote:      https://github.com/Event-Management-Ticketing-System-EMTS/Event-Management-Ticketing-System/pull/new/Team-A
```

1. Copy and paste the URL into your browser
2. Fill out the PR title and description
3. Select reviewers if needed
4. Click "Create pull request"

### Method 3: Manual GitHub Navigation

1. Go to your GitHub repository
2. Click "Pull requests" tab
3. Click "New pull request"
4. Select base branch (usually `main`) and compare branch (e.g., `Team-A`)
5. Add title and description
6. Create pull request

## Branch Management Commands

```bash
# List all branches
git branch -a

# Switch between branches
git checkout branch-name

# Delete local branch (after PR is merged)
git branch -d Team-A

# Delete remote branch (if needed)
git push origin --delete Team-A

# Update local main after PRs are merged
git checkout main
git pull origin main
```

## Best Practices Demonstrated

### 1. Branch Naming Convention
- Use descriptive names: `Team-A`, `feature/event-creation`, `bugfix/ticket-validation`
- Avoid spaces (use hyphens or underscores)
- Be consistent across the team

### 2. Commit Message Format
```
Title: Brief description (50 chars or less)

- Bullet point describing change 1
- Bullet point describing change 2
- Bullet point describing change 3
```

### 3. File Organization
- Keep related changes together
- Update documentation alongside code changes
- Create feature-specific documentation files

### 4. PR Management
- Create PRs early for feedback
- Use descriptive titles and detailed descriptions
- Request appropriate reviewers
- Link to related issues or tickets

## Merge Process (For Repository Owners)

After review and approval:
```bash
# Option 1: Merge via GitHub web interface
# - Go to the PR
# - Click "Merge pull request"
# - Choose merge type (merge commit, squash, rebase)

# Option 2: Command line merge
git checkout main
git pull origin main
git merge Team-A
git push origin main
```

## Team Coordination Tips

1. **Daily Sync**: Share branch status and coordinate merge timing
2. **Code Review**: Always have teammates review PRs before merging
3. **Conflict Resolution**: Communicate when merge conflicts arise
4. **Documentation**: Update project docs with each feature addition
5. **Testing**: Test features before creating PRs

## Repository Status After Demo

- ✅ **Main Branch**: Base project structure
- ✅ **Team-A Branch**: Event creation feature (ready for PR)
- ✅ **Team-B Branch**: Ticket booking feature (ready for PR)  
- ✅ **Team-C Branch**: Reporting system feature (ready for PR)

## Next Steps for Learning

1. **Practice**: Repeat this workflow with different features
2. **Explore**: Try different merge strategies (squash, rebase)
3. **Automate**: Set up GitHub Actions for CI/CD
4. **Collaborate**: Work with real teammates on shared repositories
5. **Advanced**: Learn about Git hooks, protected branches, and required reviews

## Common Git Commands Quick Reference

```bash
# Status and Information
git status                  # Check working directory status
git log --oneline          # View commit history
git branch -a              # List all branches
git remote -v              # View remote URLs

# Branch Operations
git checkout -b new-branch # Create and switch to new branch
git checkout branch-name   # Switch to existing branch
git branch -d branch-name  # Delete local branch
git push origin branch     # Push branch to remote

# Changes and Commits
git add .                  # Stage all changes
git add filename          # Stage specific file
git commit -m "message"   # Commit with message
git push origin branch    # Push commits to remote

# Synchronization
git pull origin main      # Pull latest changes from main
git fetch --all          # Fetch all remote branches
git merge branch-name     # Merge branch into current branch
```

---

**Demo Completed Successfully!** 🎉

You now have a complete understanding of the Git team workflow including branch creation, feature development, and pull request management.