🚀 collab-soen [mern] 

This project is a full-stack web application with authentication, project collaboration,
AI-powered features, and real-time chat using Socket.io.
It is divided into Frontend and Backend modules.

📌 Features

🔐 Authentication (Login & Register with JWT)
📂 Project Management (Create projects, add collaborators, fetch all projects)
💬 Real-time Chat (via Socket.io)
🤖 AI Integration (AI responses rendered in Markdown format)
📝 Code Editor with WebContainers (Run code in-browser using iFrame)

🔹 3. Run the App

Click the ▶ RUN button in your console/browser environment.
Wait a few seconds while all packages download.
Once finished, click the RUN button again.
The app will now open inside an iframe.
Check your console logs to see the results.


🔑 Environment Variables
Frontend (.env)
VITE_API_KEY=http://localhost:3000
Backend (.env)
PORT=3000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
REDIS_URL=redis://localhost:6379

📡 Socket.io Setup

Frontend: config/socket.js
Backend: Auth middleware for verifying user before connection.

📸 UI Previews

🔐 Login / Register
🏠 Home Page
📂 Project Management
💬 Chat with Socket.io

⚙️ Installation
1. Clone Repository
git clone https://github.com/your-username/your-repo.git
cd your-repo

2. Setup Backend
cd backend
npm install
npm run dev

3. Setup Frontend
cd frontend
npm install
npm run dev
🤖 AI Response in Markdown
📝 Code Editor with WebContainers




