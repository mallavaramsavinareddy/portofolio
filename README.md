# Developer Portfolio

A free, fully customizable React portfolio with resume sections: About, Skills, Experience, Education, Projects, and Contact.

## What's included

- Hero section with quick info
- About me
- Skills (languages, frontend, backend, databases, tools)
- Work experience (resume-style)
- Education
- Projects with live + GitHub links
- Contact section
- Download resume button

## 1) Customize your content

Edit one file:

`src/data/portfolio.js`

Replace placeholder values:

- name, email, phone, location
- LinkedIn and GitHub URLs
- skills list
- experience and education
- projects and links

Optional: add your PDF resume at `public/resume.pdf`.

## 2) Run locally

```bash
cd portfolio
npm install
npm run dev
```

Open: `http://localhost:5173`

## 3) Build for production

```bash
npm run build
npm run preview
```

---

## Hosting (100% free)

You can host with **Vercel** (easiest) or **GitHub Pages**.

## Option A: Vercel (recommended)

1. Push this project to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Add portfolio website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```
2. Go to [https://vercel.com](https://vercel.com)
3. Sign in with GitHub
4. Click **Add New Project** -> import `portfolio` repo
5. Keep defaults (`npm run build`, output `dist`)
6. Deploy

Your live URL will look like:

`https://portfolio-yourname.vercel.app`

## Option B: GitHub Pages

1. In `vite.config.js`, change:
   ```js
   base: "/portfolio/",
   ```
   (`portfolio` must match your repo name)

2. Push code to GitHub repo named `portfolio`.

3. GitHub repo -> **Settings** -> **Pages** -> Source: **GitHub Actions**

4. Create `.github/workflows/deploy.yml` (already included if you use this repo template workflow).

5. After workflow succeeds, site URL:

`https://YOUR_USERNAME.github.io/portfolio/`

---

## Add portfolio to LinkedIn

1. Open LinkedIn profile -> **Edit public profile**
2. Add website URL in contact info:
   - Label: `Portfolio`
   - URL: your Vercel/GitHub Pages link
3. Add to **Featured** section:
   - Title: `My Developer Portfolio`
   - Description: `Projects, skills, experience, and contact details`
4. Update headline:
   - `Aspiring Developer | React | JavaScript | Open to Opportunities`
5. Add portfolio link in **About** section.

---

## GitHub Student Developer Pack tips

- Use GitHub for code hosting (free)
- Use Vercel/Netlify free tier for hosting
- Optional: claim free domain from student pack and connect in Vercel DNS settings

---

## Project structure

```text
portfolio/
├── public/
│   ├── favicon.svg
│   └── resume.pdf          # optional
├── src/
│   ├── data/
│   │   └── portfolio.js    # edit this file
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
└── package.json
```

## Next steps

1. Replace all placeholder data in `portfolio.js`
2. Add real project links
3. Deploy to Vercel
4. Add URL to LinkedIn Featured section
