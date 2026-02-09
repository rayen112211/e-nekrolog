# 🚀 Deploy e-Nekrolog to GitHub - Step-by-Step Guide

## 📋 Prerequisites

Before you start, make sure you have:
- ✅ A GitHub account ([sign up here](https://github.com/join))
- ✅ Git installed on your computer ([download here](https://git-scm.com/downloads))

To check if Git is installed:
```bash
git --version
```

---

## 🎯 Step 1: Prepare Your Project

### Clean Up Sensitive Data

Before pushing to GitHub, make sure you don't have any sensitive information:

1. **Check for secret keys** in your code
2. **Create a `.gitignore` file** (if it doesn't exist)

Your project already has a `.gitignore` that excludes:
- `node_modules/` - npm packages
- `.env` - environment variables
- `venv/` - Python virtual environment
- Database files
- Build files

---

## 🔧 Step 2: Initialize Git Repository

Open **Command Prompt (CMD)** and navigate to your project:

```bash
# Navigate to your project
cd c:\Users\azizi\Downloads\funrual-website-main

# Initialize git repository (if not already done)
git init

# Configure your git identity (replace with your info)
git config user.name "Your Name"
git config user.email "your.email@example.com"

# Check the status
git status
```

---

## 📦 Step 3: Make Your First Commit

```bash
# Add all files to staging
git add .

# Review what will be committed
git status

# Create your first commit
git commit -m "Initial commit: e-Nekrolog digital memorial platform

- React frontend with 4 elegant themes
- FastAPI backend
- RSVP management system
- Virtual candles and condolences
- B2B funeral home branding
- Bilingual support (PL/EN)"
```

---

## 🌐 Step 4: Create GitHub Repository

### Option A: Via GitHub Website (Recommended)

1. Go to [GitHub](https://github.com/) and **sign in**
2. Click the **+** icon in the top right corner
3. Select **"New repository"**
4. Fill in the details:
   - **Repository name:** `e-nekrolog` (or your preferred name)
   - **Description:** "Digital memorial platform with elegant themes and RSVP management"
   - **Visibility:** Choose **Public** or **Private**
   - ⚠️ **DO NOT** check "Initialize this repository with a README" (you already have one!)
5. Click **"Create repository"**

### Option B: Via GitHub CLI (Advanced)

```bash
# Install GitHub CLI first: https://cli.github.com/
gh repo create e-nekrolog --public --source=. --remote=origin
```

---

## 🔗 Step 5: Connect Local Repository to GitHub

GitHub will show you commands after creating the repository. Use these:

```bash
# Add GitHub as remote origin
git remote add origin https://github.com/YOUR_USERNAME/e-nekrolog.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

> ⚠️ **Replace `YOUR_USERNAME`** with your actual GitHub username!

### If you're prompted for credentials:

**Option 1: Use Personal Access Token (Recommended)**
1. Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Click "Generate new token"
3. Give it a name and select scopes: `repo`, `workflow`
4. Copy the token and use it as your password

**Option 2: Use GitHub CLI**
```bash
gh auth login
```

---

## 🎨 Step 6: Enhance Your Repository (Optional but Recommended)

### Add a Banner Image

1. Create a `.github` folder in your project root:
```bash
mkdir .github
```

2. Add a banner image (1200x400px recommended) to `.github/banner.png`

3. Commit and push:
```bash
git add .github/banner.png
git commit -m "Add repository banner"
git push
```

### Add Topics/Tags

On your GitHub repository page:
1. Click the ⚙️ gear icon next to "About"
2. Add topics: `react`, `fastapi`, `memorial`, `obituary`, `tailwindcss`, `mongodb`, `funeral-services`

### Create a GitHub Actions Workflow (CI/CD)

This will automatically test your code on every push:

Create `.github/workflows/ci.yml`:

```yaml
name: CI

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  test-frontend:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      - name: Install dependencies
        run: cd frontend && npm install --legacy-peer-deps
      - name: Run tests
        run: cd frontend && npm test -- --watchAll=false
```

---

## 🔄 Regular Updates

After making changes to your code:

```bash
# Check what changed
git status

# Add all changes
git add .

# Commit with a descriptive message
git commit -m "Add new feature: XYZ"

# Push to GitHub
git push
```

### Good Commit Message Examples:

✅ `feat: Add dark mode theme option`  
✅ `fix: Resolve RSVP form validation issue`  
✅ `docs: Update installation instructions`  
✅ `style: Improve mobile responsiveness`  
✅ `refactor: Optimize image loading performance`  

---

## 🌍 Step 7: Deploy Frontend (GitHub Pages - Optional)

If you want to host your frontend for free:

### Option 1: Using gh-pages package

```bash
cd frontend

# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json:
# "homepage": "https://YOUR_USERNAME.github.io/e-nekrolog",
# In scripts section:
# "predeploy": "npm run build",
# "deploy": "gh-pages -d build"

# Deploy
npm run deploy
```

### Option 2: Via GitHub Settings

1. Push your code to GitHub
2. In repository settings → Pages
3. Select branch: `main`
4. Select folder: `/docs` or `/` (depends on your build)
5. Save

---

## 📊 Step 8: Add Project Documentation

### Create Issue Templates

`.github/ISSUE_TEMPLATE/bug_report.md`
`.github/ISSUE_TEMPLATE/feature_request.md`

### Add Contributing Guidelines

`CONTRIBUTING.md` - How others can contribute

### Add License

Choose from:
- MIT License (very permissive)
- GPL-3.0 (requires open source)
- Proprietary (all rights reserved)

```bash
# Add LICENSE file, then:
git add LICENSE
git commit -m "Add license"
git push
```

---

## 🎉 You're Done!

Your repository is now live at:
```
https://github.com/YOUR_USERNAME/e-nekrolog
```

### Show it off:
- 📌 Pin it to your profile
- 📝 Share on LinkedIn
- 🐦 Tweet about it
- 💼 Add to your portfolio

---

## 🆘 Troubleshooting

### "Git is not recognized"
Install Git from [git-scm.com](https://git-scm.com/downloads) and restart CMD.

### "Permission denied (publickey)"
Set up SSH keys or use HTTPS with personal access token.

### "Large files rejected"
See files over 100MB:
```bash
find . -size +100M
```
Add them to `.gitignore` or use Git LFS.

### "Updates were rejected"
```bash
# Pull first, then push
git pull origin main --rebase
git push
```

### "Merge conflicts"
```bash
# See conflicts
git status

# Edit files to resolve conflicts
# Then:
git add .
git commit -m "Resolve merge conflicts"
git push
```

---

## 📚 Additional Resources

- [Git Handbook](https://guides.github.com/introduction/git-handbook/)
- [GitHub Docs](https://docs.github.com/)
- [Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)
- [Conventional Commits](https://www.conventionalcommits.org/)

---

**Happy coding! 🎉**
