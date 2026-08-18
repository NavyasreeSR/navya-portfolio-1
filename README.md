# Navya Sree Santhapeta — Portfolio Website

Professional portfolio for Navya Sree Santhapeta, Full Stack Software Engineer.

---

## 📁 Folder Structure

```
navya-portfolio/
├── index.html
├── assets/
│   ├── css/style.css
│   ├── js/main.js
│   ├── images/
│   │   └── profile.jpg        ← Add headshot here when ready
│   └── resume/
│       └── Navya_Sree_Santhapeta_Resume.pdf  ← Add resume PDF here
└── README.md
```

---

## ✅ To complete before publishing

| Item | Action |
|---|---|
| Resume PDF | Place in `assets/resume/` named `Navya_Sree_Santhapeta_Resume.pdf` |
| Profile photo | Place in `assets/images/` named `profile.jpg` (when ready) |

---

## 🚀 Deploy to GitHub Pages

**Step 1 — Create a GitHub repository**
1. Go to https://github.com/new
2. Name it `portfolio`
3. Set to **Public**, do NOT initialize with README
4. Click **Create repository**

**Step 2 — Push files**
```bash
git config user.name "Pinky Sodhi"
git config user.email "pinky.sodhi@gmail.com"
git init
git add index.html
git commit -m "feat: add portfolio HTML — Navya Sree Santhapeta"
git add assets/css/style.css
git commit -m "feat: add CSS — terracotta editorial theme"
git add assets/js/main.js
git commit -m "feat: add JS — stack deck, scroll reveal, nav"
git add README.md
git commit -m "docs: add README with deployment instructions"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/portfolio.git
git push -u origin main
```

**Step 3 — Enable GitHub Pages**
1. Repo → **Settings** → **Pages**
2. Source: `main` branch, `/ (root)` folder → **Save**

**Step 4 — Live at:**
```
https://YOUR_GITHUB_USERNAME.github.io/portfolio/
```

**Adding resume later:**
```bash
git add assets/resume/Navya_Sree_Santhapeta_Resume.pdf
git commit -m "content: add resume PDF"
git push
```

**Adding profile photo later:**
```bash
git add assets/images/profile.jpg
git commit -m "content: add profile photo"
git push
```
