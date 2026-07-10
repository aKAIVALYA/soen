<div align="center">

<img src="./hero_banner.png" alt="CWM.ai Hero" width="100%" />

# ⚡️ CWM.ai
> **Code With Me: Where developers and AI build together, in real-time, right in your browser.**

<br/>

[![Node.js](https://img.shields.io/badge/Runtime-Node.js_18+-339933?style=flat-square&logo=nodedotjs&logoColor=white)](https://nodejs.org)
[![React](https://img.shields.io/badge/Frontend-React_Vite-20232A?style=flat-square&logo=react&logoColor=61DAFB)](https://react.dev)
[![WebContainers](https://img.shields.io/badge/Execution-WebContainers-000000?style=flat-square&logo=stackblitz&logoColor=white)](https://webcontainers.io)
[![Socket.io](https://img.shields.io/badge/Sync-Socket.io-010101?style=flat-square&logo=socketdotio&logoColor=white)](https://socket.io)

---

</div>

## 🌌 The Vision

We built **CWM.ai** because pair programming shouldn't require complex local setups, and AI shouldn't be trapped in a separate tab. 

Imagine a workspace where you and your team can instantly drop into a collaborative session, chat in real-time, and summon an AI assistant that understands your context—all while running your Node.js code securely in a browser sandbox.

### 🎯 Core Pillars

1. **Synchronicity** ⏱️ 
   - Every keystroke, chat message, and file update is synced instantly via `Socket.io`.
2. **Intelligence** 🧠
   - Your built-in LLM assistant renders rich markdown, helping you debug, refactor, and write code on the fly.
3. **Frictionless Execution** 🚀
   - No Docker. No VPS. **WebContainers** run your backend directly inside the browser's sandbox.

---

## 📸 Screenshots

### 📈 Live Portfolio Dashboard
![Portfolio Screenshot](./performance_chart.png)
> *Real‑time chart of project metrics.*

### 🔁 Recent Activity Feed
![Activity Feed](./invocations_feed.png)
> *Live feed of chat messages, AI responses, and code updates.*

---

## ✨ Features

| Feature | Description |
|:--------|:------------|
| **🔐 Authentication** | JWT‑based login & registration with protected routes. |
| **📂 Project Management** | Create projects, invite collaborators, and view all workspaces. |
| **💬 Real‑time Chat** | Socket.io powered messaging for all connected users. |
| **🤖 AI Assistant** | Sends prompts to an LLM, renders responses in Markdown (code blocks, tables, etc.). |
| **🖥️ In‑Browser Code Execution** | WebContainers run Node.js code in an iFrame – zero local setup. |
| **⚡ Fast Development** | React + Vite with hot‑module replacement for instant UI updates. |

---

## 🏗️ Architecture

```text
Client (React + Vite)
│   ├─ UI Components (Pages, Auth, Project, Editor)
│   ├─ Axios (REST) & Socket.io (WebSocket) → Server
│   └─ Markdown‑to‑JSX to render AI output
│
Server (Express)
│   ├─ Middleware: CORS, JSON parser, JWT auth, error handler
│   ├─ Routes: /auth, /projects, /ai, /socket
│   ├─ Controllers → Services → Mongoose (MongoDB) & Redis cache
│   └─ WebContainers API → iFrame for code execution
```

---

## 📁 Project Structure

```
cwm-ai/
├─ backend/               # Express server
│   ├─ server.js
│   ├─ middleware/
│   ├─ models/
│   ├─ routes/
│   └─ services/
├─ frontend/              # React app
│   ├─ src/
│   │   ├─ App.jsx
│   │   ├─ pages/ (Login, Register, Home, Project)
│   │   ├─ context/ (UserContext)
│   │   └─ config/ (socket.js)
│   └─ vite.config.js
├─ .env.example           # Example env files for both sides
├─ README.md              # <‑‑ You are reading this!
└─ assets/                # hero_banner.png, performance_chart.png, invocations_feed.png
```

---

## 🚀 Getting Started

### Prerequisites

| Tool | Version |
|:-----|:--------|
| **Node.js** | v18+ |
| **MongoDB** | 5+ |
| **Redis** | 6+ |
| **npm** or **yarn** | latest |

### 1️⃣ Clone the repo

```bash
git clone https://github.com/your-username/cwm-ai.git
cd cwm-ai
```

### 2️⃣ Install dependencies

```bash
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
```

### 3️⃣ Configure environment variables

Create `.env` in both `backend/` and `frontend/` (see [Environment Variables](#-environment-variables) below).

### 4️⃣ Run the application

```bash
# Terminal 1 – Backend
cd backend
npm run dev   # runs on http://localhost:3000

# Terminal 2 – Frontend
cd ../frontend
npm run dev   # runs on http://localhost:5173
```

Open the frontend URL, register a user, and start collaborating!

---

## 🔑 Environment Variables

### Backend (`backend/.env`)

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
REDIS_URL=redis://localhost:6379
```

### Frontend (`frontend/.env`)

```env
VITE_API_KEY=http://localhost:3000
```

> **⚠️ Important:** Replace placeholders with real values before starting the servers.

---

## 📡 API Endpoints

### Auth

| Method | Endpoint | Description |
|:------:|:--------|:------------|
| `POST` | `/auth/register` | Create a new account |
| `POST` | `/auth/login` | Authenticate & receive JWT |
| `GET`  | `/auth/me` | Get current user (requires JWT) |

### Projects

| Method | Endpoint | Description |
|:------:|:--------|:------------|
| `POST` | `/projects` | Create a new project |
| `GET`  | `/projects` | List all projects for the logged‑in user |
| `PUT`  | `/projects/:id/collaborators` | Add a collaborator by email |

### AI

| Method | Endpoint | Description |
|:------:|:--------|:------------|
| `POST` | `/ai/query` | Send a prompt, receive Markdown‑formatted AI response |

---

## 🔌 Socket.io Events

| Event | Direction | Payload |
|:------|:----------|:--------|
| `connect` | Client → Server | JWT token for auth |
| `message` | Bidirectional | `{room, author, content, timestamp}` |
| `code-update` | Bidirectional | `{room, filePath, code}` |
| `disconnect` | Client → Server | — |

> **NOTE:** Socket middleware validates JWT; unauthenticated connections are rejected.

---

## 🤝 Contributing

1. Fork the repository.
2. Create a feature branch (`git checkout -b feat/awesome-feature`).
3. Make your changes and ensure all tests pass (`npm test`).
4. Submit a pull request with a clear description of the change.

---

## 📄 License

Distributed under the **MIT License**. See `LICENSE` for more information.

---

<div align="center">

[![Star on GitHub](https://img.shields.io/badge/⭐_Star_on_GitHub-171515?style=for-the-badge&logo=github&logoColor=white)](https://github.com/your-username/cwm-ai)

</div>
