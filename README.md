# Sante (EvoGym Landing Page)

A modern, animated fitness & gym landing page built with **React + TypeScript**, focused on smooth user experience, clean UI, and responsive design. This project showcases a multi‑section single‑page application with scroll‑based navigation, animations, and a fully functional contact form.

---

## ✨ Project Overview

**Sante** (also referred to as *EvoGym* in UI content) is a single‑page fitness website that includes:

* Sticky, scroll‑aware navigation bar
* Smooth anchor‑based page navigation
* Animated hero and content sections
* Responsive layout for desktop & mobile
* Interactive benefits section
* Animated image shuffle grid
* Contact form with validation
* Clean, reusable component structure

The app tracks the currently visible section and updates navigation state automatically based on scroll position.

---

## 🧩 Main Sections

* **Home** – Hero section, CTA buttons, sponsors banner
* **Benefits** – Key gym features with animations
* **Shuffle Hero** – Animated image grid using Framer Motion
* **Contact Us** – Validated form with external submission
* **Footer** – Branding, links, and contact details

---

## 🛠️ Tech Stack

### Core Technologies

* **React 19** – Component‑based UI
* **TypeScript** – Type safety and scalability
* **Vite** – Fast dev server & build tool

### Styling & UI

* **Tailwind CSS v4** – Utility‑first styling
* **Heroicons** – Icon set
* **Custom assets** – PNG graphics & branding

### Animation & UX

* **Framer Motion** – Page & component animations
* **react-anchor-link-smooth-scroll** – Smooth scrolling navigation

### Forms & Validation

* **React Hook Form** – Lightweight form handling
* **FormSubmit** – External form submission endpoint

### Tooling

* **ESLint** – Code quality
* **Prettier + Tailwind Plugin** – Consistent formatting

---

## 📁 Project Structure

```
src/
├── Pages/
│   ├── Navbar/
│   ├── Home/
│   ├── Benefits/
│   ├── ContactUs/
│   └── Footer/
├── shared/
│   ├── type.ts
│   ├── ActionsButtons.tsx
│   └── HText.tsx
├── hooks/
│   └── mediaQuery.ts
├── assets/
├── App.tsx
└── main.tsx
```

---

## 🧠 Key Concepts Used

* Scroll position tracking with `useEffect`
* Responsive rendering via custom `useMediaQuery` hook
* Enum‑based page state (`SelectedPage`)
* Motion variants for staggered animations
* Reusable UI components
* Mobile‑first responsive design

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd sante
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

The app will be available at:

```
http://localhost:5173
```

---

## 🏗️ Build for Production

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

---

## 📦 Scripts

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Start dev server         |
| `npm run build`   | Type‑check & build       |
| `npm run preview` | Preview production build |
| `npm run lint`    | Run ESLint               |

---

## 🧪 Future Improvements

* Add backend integration
* Add dark mode
* Convert to CMS‑driven content
* Improve accessibility (ARIA)
* SEO optimizations

---

## 👤 Author

Built by **Berry Gold** — Frontend Developer

---

## 📄 License

This project is private and intended for portfolio or client demonstration purposes.
