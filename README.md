# 🪐 LearnVerse - Cosmic-Themed WebXR-Ready EdTech Platform

LearnVerse is a modern, dark-themed, space-inspired educational platform designed to visualize core Computer Science & Engineering concepts—**Computer Networks, Operating Systems, and Data Structures**—with a highly responsive, custom-built visual simulation architecture prepared for future WebXR device integration.

---

## 🌌 Core Features

1. **Futuristic Space Theme**: Sleek cosmic design featuring a custom HTML5 canvas particle stars field, glowing cyber grids, Orbitron headings, and frosted glassmorphic containers.
2. **Sequential Roadmap Tech-Trees**: Interactive curriculum map where topic nodes are locked until the preceding segment is solved, promoting gamified progress.
3. **Responsive SVG Analytics**: Concentric circle progress meters, grid-based vertical bar graphs, and multi-node study line charts built entirely in responsive, lightweight SVG coordinates (zero heavy charting packages).
4. **Virtual Viewport Cockpits**: Viewport boxes with simulated VR Headset goggles integrations, Orbit/Fly perspective selectors, and multi-point speed dials.
5. **Interactive 2.5D Concept Labs**: Bespoke interactive canvas-based packet encapsulation flows, round-robin CPU dispatching timelines, and custom LIFO memory stack simulators.
6. **Concept Verification Quizzes**: Spatial evaluation components displaying conceptual questions. Submitting correctly updates progress metrics and unlocks consecutive topics.
7. **Secure API Backend**: Express gateway using JWT authorization, bcrypt password hashes, and a custom, lightweight, configuration-free local JSON database engine.

---

## 📂 Structural Grid Map

```
LearnVerse/
│
├── client/                     # React + Vite Frontend application
│   ├── public/                 # Static asset coordinate grids
│   └── src/
│       ├── assets/             # Cosmic icons and media
│       ├── components/
│       │   ├── common/         # SpaceParticles stars background
│       │   ├── dashboard/      # Custom SVG concentric/bar/line charts
│       │   └── webxr/          # XRSceneLoader, XRContainer, XRQuizSection
│       ├── context/            # AuthContext (JWT + Progress synchronizer)
│       ├── layouts/            # DashboardLayout (Frosted Cockpit Sidebar)
│       ├── pages/              # Landing, SignIn, SignUp, Dashboard, Subjects, Roadmap, Module
│       ├── routes/             # ProtectedRoutes, AppRoutes (auth-gated guards)
│       ├── styles/             # index.css (Tailwind v4 imports + Custom Glow Keyframes)
│       ├── App.jsx             # React Orchestrator
│       └── main.jsx            # DOM Node Mount
│
├── server/                     # Node.js + Express API Backend
│   ├── data/                   # JSON local databases (Auto-generated)
│   ├── middleware/             # auth.js (JWT validation middleware)
│   ├── routes/                 # authRoutes, progressRoutes
│   ├── utils/                  # db.js (JSON file-based database ORM)
│   └── index.js                # Core API listening engine
│
├── dev.js                      # Cross-platform parallel process runner
└── package.json                # Monorepo root coordinates
```

---

## 🛠️ Calibration & Startup

Follow these steps to initialize and launch the platform:

### 1. Prerequisite Checks
- Verify you have **Node.js** installed (v18+ recommended, compatible with Node v24).
- Ensure your shell directory coordinates rest inside the `/SampleXR` workspace folder.

### 2. Environmental Initialization
Create an environmental configuration file inside `/server/.env` containing:
```env
PORT=5000
JWT_SECRET=learnverse-cosmic-secret-key-9988
```
*(If no `.env` is supplied, the server automatically boots using default port `5000` and a default fallback signature secret).*

### 3. Local Isolation Installation (Like a Virtual Environment)
To install all required packages locally (strictly inside the project directory, keeping your global system completely untouched), run:
```bash
npm run setup
```
This executes sequential, clean local installs:
- Root Monorepo
- Express API server dependencies (`express`, `cors`, `jsonwebtoken`, `bcryptjs`, `dotenv`)
- Vite React client dependencies (`react`, `react-dom`, `react-router-dom`, `lucide-react` + `@tailwindcss/vite` devDependencies)

### 4. Ignite Flight Controllers (Development Mode)
To launch the frontend client (port `3000`) and the API server (port `5000`) concurrently under one terminal window, run:
```bash
npm run dev
```
This ignites `dev.js`, starting both systems simultaneously and streaming their outputs cleanly.

---

## 🧪 Operational Checklists

To experience the complete visual-interactive curriculum cycle:
1. Open your browser and navigate to `http://localhost:3000`.
2. Click **Let's Get Started** to view the frosted registration console.
3. Sign Up a new user pilot (or Sign In if credentials exist).
4. View the active welcome console showing **0 completed topics** and **0 streak**.
5. Click **Subjects** in the sidebar cockpit.
6. Select **Computer Networks** or **Operating Systems** to view the connected constellation tech-tree.
7. Click the first unlocked node (e.g. **Introduction**).
8. Experience the spatial compile loader, then click **Enter Simulation Portal**.
9. Interact with the custom canvas concepts visualizer.
10. Answer the spatial check question on the right.
11. Submit the answer and click **Mark Node Complete & Sync Stats** to upload your solved node.
12. Check your Dashboard metrics—they immediately recalculate to show your active stats and streak!

---

## 🧬 Scalable WebXR Integration

The platform is fully structured to receive standard 3D rendering engines (such as Three.js / React Three Fiber / WebXR controllers) in the future:
- **`client/components/webxr/XRContainer.jsx`**: Hosts the interactive canvas. The canvas can easily be swapped with a `<Canvas>` component from `@react-three/fiber` or standard Three.js render loops.
- **`client/components/webxr/XRSceneLoader.jsx`**: Manages compiler and sensor loading gates, allowing you to load large asset glTF models asynchronously before revealing the scene.
- **`client/routes/AppRoutes.jsx`**: Features path queries `/subjects/:subjectId/:topicId` that link directly into spatial modules, keeping academic stats sync and route states independent.
