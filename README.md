# Hasini Vangala — Personal Developer Portfolio

A modern, high-performance personal portfolio website built for **Hasini Vangala**, Computer Science Engineering student, Python Developer, and Full Stack Engineer.

Live Preview Reference: [https://portfolio-nu-opal-3wty2x5sd0.vercel.app/](https://portfolio-nu-opal-3wty2x5sd0.vercel.app/)

---

## ✨ Features & Highlights

- **Visual Architecture**: Clean, contemporary design with electric blue and violet accents, deep navy typography, and generous whitespace.
- **Theme Support**: Fully functional Light/Dark theme toggle with automatic persistence in `localStorage` (Light theme initial default).
- **Interactive Project Showcase**:
  - **Smart Diary**: Personal journaling application with mood tags, multimedia uploads, calendar events, and Firebase integration.
  - **Expense Tracker**: Real-time spending recorder, categorical budget insights, and total calculations.
  - **Password Generator**: Utility with interactive live demonstration in modal (custom length, character toggles, entropy strength meter, instant clipboard copy).
- **Interactive Modals**:
  - Full-detail project view with live interactive tool previews.
  - Quick-read resume modal with direct PDF download and one-click summary copying.
- **Accurate Academic & Work Information**:
  - B.Tech CSE at Kamala Institute of Technology & Science (KITS) with **8.2 GPA**.
  - Python Developer internship at **Decode Labs** (July 2026–Present).
  - Full Stack Engineer internship at **Thiranex** (September 2026–Present).
  - Intermediate at SR Junior College (MPC) & SR Prime School.
  - Industry certifications from Thiranex, Decode Labs, Deloitte, and TCS iON.
- **Zero-Pill Discipline & Anti-Slop**: Natural editorial typography, unboxed metadata with `·` separators, no artificial percentage bars or fake statistics.
- **Direct Recruiter Channels**: Email (`vangalahasini1@gmail.com`), Phone (`+91 9553138734`), LinkedIn, GitHub, and validated contact form with Formspree support.

---

## 🚀 1. How to Run the Project Locally

### Prerequisites
- Node.js (v18 or higher recommended)
- npm, yarn, or pnpm

### Installation
```bash
# Clone or navigate to the project directory
git clone https://github.com/vangalahasini/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start the local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) (or the URL shown in your terminal) in your browser.

### Available Scripts
- `npm run dev` — Starts Vite dev server.
- `npm run build` — Builds production-ready bundles into `dist/`.
- `npm run preview` — Previews the production build locally.
- `npm run lint` — Validates TypeScript types across the codebase.

---

## 📸 2. How to Add Your Profile Photo & Resume

### Profile Photo
1. Place your real portrait photo in the `public/images/` directory:
   ```
   public/images/hasini - profile.jpeg
   ```
   Browser URL: `/images/hasini%20-%20profile.jpeg`
2. The portfolio will automatically load this image on the hero section.
3. If no image is present or fails to load, a graceful fallback with your initials (`HV`) and academic credentials (`Computer Science Engineering · KITS`) is automatically displayed.

### Resume PDF
1. Save your latest resume PDF into `public/resume/`:
   ```
   public/resume/Hasini_Vangala_Resume.pdf
   ```
   Browser URL: `/resume/Hasini_Vangala_Resume.pdf`
2. When visitors click **"Download Resume"**, this exact file downloads with the filename `Hasini_Vangala_Resume.pdf`.
3. Visitors can also click **"View Resume"** to inspect the PDF directly in a new browser tab.

---

## 🔗 3. Where to Enter Project Repository & Live Demo URLs

All personal details, skills, experiences, and project configurations are centralized in a single file:

👉 `src/data/portfolioData.ts`

To add GitHub links or Live Demo links for your projects, update the `githubUrl` and `liveDemoUrl` properties:

```typescript
// src/data/portfolioData.ts

{
  id: 'smart-diary',
  title: 'Smart Diary',
  // ...
  githubUrl: 'https://github.com/vangalahasini/smart-diary', // Replace null with your repo URL
  liveDemoUrl: 'https://smart-diary.vercel.app',              // Replace null with your live URL
}
```

Whenever a URL is set to `null`, the card displays a clean `"Pending Publication"` status to avoid dead or fabricated links.

---

## 📦 4. How to Push the Code to GitHub

Your GitHub repository is: [https://github.com/vangalahasini/hasini-portfolio](https://github.com/vangalahasini/hasini-portfolio)

```bash
git init
git add .
git commit -m "Update: load real profile photo and resume PDF from public assets"
git branch -M main
git remote add origin https://github.com/vangalahasini/hasini-portfolio.git
git push -u origin main
```

---

## 🌐 5. How to Deploy on Vercel

Vercel provides seamless zero-config deployment for Vite + React applications:

### Method A: Deploy via Vercel Dashboard (Recommended)
1. Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
2. Click **"Add New..."** > **"Project"**.
3. Select your `vangalahasini/portfolio` repository.
4. Framework Preset will automatically detect **Vite**.
5. (Optional) In **Environment Variables**, add:
   - `VITE_FORMSPREE_ID`: your Formspree form ID if using Formspree for contact messages.
6. Click **"Deploy"**. Your website will be live in ~30 seconds with a free `.vercel.app` URL.

### Method B: Deploy via Vercel CLI
```bash
npm install -g vercel
vercel
```

---

## 🌍 6. How to Connect a Custom Domain Later

1. Purchase a domain (e.g., `hasinivangala.com` or `hasini.dev`) from Namecheap, Google Domains / Squarespace, or GoDaddy.
2. In your Vercel Project Dashboard, navigate to **Settings** > **Domains**.
3. Type your custom domain name and click **Add**.
4. Vercel will display the DNS records needed:
   - **Type**: `A` record pointing to `76.76.21.21` (or `CNAME` `cname.vercel-dns.com` for subdomains like `www`).
5. Go to your domain registrar's DNS management panel and enter these records.
6. Within a few minutes, Vercel will verify the domain and automatically generate an SSL/TLS certificate (HTTPS).

---

## 🛠️ Tech Stack

- **Framework**: React 19 + TypeScript
- **Bundler**: Vite 8
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Animations**: CSS Transitions + Tailwind smooth scroll & micro-interactions

---

## 📄 Contact & Professional Inquiries

- **Email**: [vangalahasini1@gmail.com](mailto:vangalahasini1@gmail.com)
- **Phone**: [+91 9553138734](tel:+919553138734)
- **LinkedIn**: [linkedin.com/in/hasini-vangala-b47a38414](https://www.linkedin.com/in/hasini-vangala-b47a38414/)
- **GitHub**: [github.com/vangalahasini](https://github.com/vangalahasini)
