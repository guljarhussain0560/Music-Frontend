# Music Vibes Frontend 🎧✨

The premium React client interface for **Music Vibes** — the AI-powered image-to-music recommendation system. 

It is built with **React (Vite)**, styled with modern **TailwindCSS**, and features micro-animations, glassmorphism card layouts, and custom platform badge indicators for a highly premium music exploration experience.

---

## 🎨 Key Features

* **Sleek, Responsive Dashboard**: Upload/drag-and-drop an image to search music matching its color, mood, and structural vibe.
* **Premium Branded Badging**: Displays corporate colored badges for **Spotify** (green), **YouTube** (red), **SoundCloud** (orange), and **Apple Music** (pink) directly on the song recommendation cards.
* **Interactive Previews**: Dynamic image previews with close/remove states and hover play buttons.
* **Ambient Animation**: Micro-interactive effects using React Icons, Framer Motion, and lightweight canvas particles.
* **OAuth Login & JWT Integration**: Seamless user logins with profile caching and Google OAuth authentication flows.

---

## 🛠️ Technology Stack

* **Core**: React 18, Vite
* **Styling**: TailwindCSS, CSS Variables, Glassmorphism design system
* **Routing**: React Router DOM (v7)
* **API Communication**: Axios (custom interceptors configured for JWT session headers)
* **Icons**: React Icons (FontAwesome)
* **Utility Libraries**: Moment.js, React-Toastify

---

## ⚙️ Configuration & Setup

### 1. Prerequisites
Ensure you have **Node.js** (v18+) and **npm** installed.

### 2. Environment Configuration
Create a `.env` file in the root of the frontend project:
```env
VITE_API_URL=http://localhost:5000/api
```

---

## 🏃 Run the Application

Install the dependencies:
```bash
npm install
```

Start the Vite development server:
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

Build for production:
```bash
npm run build
```

---

## 📂 Project Structure

```text
src/
├── assets/          # Static logos and assets
├── auth/            # Auth context and Google login utilities
├── components/      # Reusable and page components
│   ├── aboutPage/   # About page view
│   ├── page/        # Dashboard (HomeAfterLogin) and main landing page
│   ├── policy/      # Terms and policy views
│   ├── services/    # Custom api client configurations
│   ├── style/       # Ambient grid backgrounds and styles
│   └── footer/      # Footer component
├── App.jsx          # Router paths configuration
├── index.css        # Tailwind styling & theme tokens
└── index.jsx        # App mounting entry point
```
