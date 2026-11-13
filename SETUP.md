# Jeevananthan V — Portfolio Setup & Deployment Guide

Welcome to the **Jeevananthan V Personal Portfolio** setup guide. This document provides step-by-step instructions for running the Next.js 15 App Router web application, Three.js WebGL canvas shaders, GSAP animations, and production deployment.

- **GitHub Repository**: [https://github.com/JeevananthanV/portfolio](https://github.com/JeevananthanV/portfolio)
- **Author**: Jeevananthan V

---

## 📋 System Prerequisites

- **Node.js**: v18.17.0 or higher (v20+ recommended)
- **npm**: v9.0.0 or higher
- **Git**: v2.30.0 or higher

---

## 📥 1. Clone the Repository

```bash
git clone https://github.com/JeevananthanV/portfolio.git
cd portfolio
```

---

## ⚙️ 2. Environment Variables Configuration

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SITE_URL=https://jeevananthan.dev
NEXT_PUBLIC_DEV_NAME="Jeevananthan V"
NEXT_PUBLIC_DEV_ROLE="Full-Stack AI & Cloud Systems Engineer"
```

---

## 📦 3. Install Dependencies

```bash
npm install
```

---

## 🚀 4. Running Locally in Development

```bash
npm run dev
```

Open `http://localhost:3000` with your browser.

- Hot Module Replacement (HMR) is enabled.
- WebGL background automatically initializes.

---

## 🏗️ 5. Production Build & Verification

```bash
# Typecheck and compile Next.js bundle
npm run build

# Preview production build locally
npm run start
```

---

## 🌐 6. Vercel / Cloud Deployment

1. Import the repository `JeevananthanV/portfolio` into [Vercel](https://vercel.com).
2. Framework preset will automatically detect **Next.js**.
3. Deploy directly — zero extra configuration required.

---

## 🛠️ Troubleshooting

- **WebGL Canvas Shader Errors**: Ensure your browser supports WebGL2 and hardware acceleration is turned on.
- **Port 3000 in use**: Run with `npx next dev -p 3001` to use an alternate port.
