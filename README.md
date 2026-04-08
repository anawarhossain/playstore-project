# HERO.IO — App Marketplace Platform

A modern, responsive app marketplace built with **React**, **Vite**, **Tailwind CSS**, and **DaisyUI**. Users can browse apps, view detailed information, install/uninstall apps, and track statistics via a visual dashboard.

---

## 📸 Project Overview

HERO.IO is a frontend web application that simulates a mobile app marketplace (similar to Google Play Store). It features app browsing, a detailed app view with rating charts, install/uninstall functionality with toast notifications, and an analytics dashboard.

---

## ⚙️ Tech Stack

| Technology | Purpose |
|---|---|
| React 18 | UI Library |
| Vite | Build Tool & Dev Server |
| React Router v7 | Client-side Routing |
| Tailwind CSS | Utility-first Styling |
| DaisyUI | UI Component Library |
| Recharts | Data Visualization (Dashboard) |
| React Toastify | Toast Notifications |
| React Spinners | Loading Indicators |
| React Icons | Icon Library |

---

## 📁 Project Structure

```
src/
├── assets/
│   └── images/
│       └── logo.png
├── components/
│   ├── homePage/
│   │   ├── Banner.jsx
│   │   ├── Stats.jsx
│   │   └── TrendingApps.jsx
│   ├── shared/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   └── ui/
│       ├── AppCard.jsx
│       └── MyNavLink.jsx
├── context/
│   ├── InstalledAppsContext.jsx
│   └── InstalledAppsProvider.jsx
├── hooks/
│   └── useApps.jsx
├── layout/
│   └── RootLayout.jsx
├── pages/
│   ├── homepage/
│   │   └── HomePage.jsx
│   ├── apps/
│   │   └── Apps.jsx
│   ├── appDetails/
│   │   └── AppDetails.jsx
│   ├── installApps/
│   │   └── InstallApps.jsx
│   ├── dasboard/
│   │   └── Dasboard.jsx
│   └── notFoundPage/
│       └── NotFoundPage.jsx
├── router/
│   └── Routes.jsx
├── main.jsx
└── index.css

public/
└── data.json
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or above)
- npm or yarn

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/anawarhossain/playstore-project.git
```

```bash
# 2. Navigate to the project directory
cd hero-io
```

```bash
# 3. Install dependencies
npm install
```

```bash
# 4. Start the development server
npm run dev
```

The app will be available at `http://localhost:5173`

---

## 📄 Data Format (`public/data.json`)

The app reads data from a local JSON file. Each app object should follow this structure:

```json
[
  {
    "id": 1,
    "title": "App Name",
    "companyName": "Company Name",
    "image": "/images/app-logo.png",
    "downloads": "1B+",
    "ratingAvg": 4.5,
    "reviews": "10M",
    "size": 25,
    "description": "App description here...",
    "ratings": [
      { "name": "5 star", "count": 140000000 },
      { "name": "4 star", "count": 35000000 },
      { "name": "3 star", "count": 12000000 },
      { "name": "2 star", "count": 5000000 },
      { "name": "1 star", "count": 3000000 }
    ]
  }
]
```

---

## 🌐 Pages & Routes

| Route | Page | Description |
|---|---|---|
| `/` | HomePage | Landing page with banner, stats, and trending apps |
| `/apps` | Apps | Browse all available apps in a grid layout |
| `/apps/:id` | AppDetails | Detailed view of a single app with install option |
| `/installedApps` | InstallApps | List of user-installed apps with uninstall option |
| `/dashboard` | Dashboard | Pie chart showing install vs. uninstall statistics |
| `*` | NotFoundPage | Custom 404 error page |

---

## 🧠 State Management

Global state is managed using **React Context API**.

- `InstalledAppsContext` — creates the context
- `InstalledAppsProvider` — provides `installedApps` state and `setInstalledApps` to the entire app
- Wrapped at the root level in `main.jsx` so all components can access installed app data

---

## 🔑 Key Features

- **App Browsing** — Grid view of all apps fetched from a local JSON file
- **App Details** — Individual app page with download count, ratings, bar chart, and description
- **Install / Uninstall** — One-click install and uninstall with live toast feedback
- **Installed Apps List** — Dedicated page to manage all installed apps
- **Analytics Dashboard** — Donut/Pie chart showing installed vs. uninstalled app ratio
- **Custom NavLink** — Active link highlighting using a reusable `MyNavLink` component
- **Loading States** — Circle spinner shown while data is being fetched
- **404 Page** — Custom not-found page with navigation back to home

---

## 🪝 Custom Hook

### `useApps()`

Located in `src/hooks/useApps.jsx`

Fetches app data from `public/data.json` and manages loading state.

```jsx
const { apps, loading } = useApps();
```

| Return Value | Type | Description |
|---|---|---|
| `apps` | `Array` | List of all app objects |
| `loading` | `Boolean` | True while data is being fetched |

---

## 📦 Build for Production

```bash
npm run build
```

Output will be generated in the `dist/` folder.

---

## 🐛 Known Issues & Planned Improvements

- [ ] `useApps()` is called in multiple components, causing redundant API fetches — move to Context
- [ ] Search input in Apps and InstallApps pages is not yet functional
- [ ] Dashboard `PieChart` needs `ResponsiveContainer` for proper responsiveness
- [ ] `AppDetails` needs null-guard for `expectedApp` when loading

---

# 👨‍💻 Author
**Md Anawar Hossain**
- **GitHub:** [@anawarhossain](https://github.com/anawarhossain)
- **Facebook:** [Anawar Hossain](https://web.facebook.com/AnawarHossain55)
- **LinkeIn:** [Anawar Hossain](https://www.linkedin.com/in/anawarhossain/)
- **X(Twitter):** [Anawar Hossain](https://x.com/MDANAWAR22)
- **WhatsApp:** [Anawar Hossain](https://wa.me/+8801701020694)
- **Role:** Junior Developer
