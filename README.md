

# 🚀 Full-Stack Project  

This project is a **full-stack web application** with authentication, project collaboration, AI-powered features, and real-time chat using **Socket.io**. It is divided into **Frontend** and **Backend** modules.  



## 📌 Features  

- 🔐 **Authentication** (Login & Register with JWT)  
- 📂 **Project Management** (Create projects, add collaborators, fetch all projects)  
- 💬 **Real-time Chat** (via Socket.io)  
- 🤖 **AI Integration** (AI responses rendered in Markdown format)  
- 📝 **Code Editor with WebContainers** (Run code in-browser using iFrame)  

---

## ⚡ Frontend  

### Tech Stack  
- **React + Vite**  
- **React Router** for navigation  
- **Axios** for API calls  
- **Context API** for global state  
- **RemixIcon** for UI icons  
- **Markdown-to-JSX** for rendering AI output  
- **Socket.io Client** for real-time updates  

### Steps Implemented  

1. Created **React Router** and tested all routes.  
2. Built frontend for **Login** & **Register** pages.  
3. Integrated backend using **Axios**.  
   - Note: API requests are hardcoded with `http://localhost:3000/` (needs refactor to use `VITE_API_KEY`).  
4. Wrapped app routes with **UserContext Provider**.  
5. Developed **Home Page UI**.  
6. Implemented **Project.jsx UI** with functions:  
   - Add Collaborator  
   - Get All Projects (connected with backend)  
7. Configured **Socket.io Client** (`config/socket.js`).  
8. Installed **markdown-to-jsx** to render AI responses.  

---

## ⚡ Backend  

### Tech Stack  
- **Node.js + Express.js**  
- **MongoDB + Mongoose** for database  
- **Redis** for caching  
- **Socket.io** for real-time communication  
- **WebContainers API** for running code inside the browser  

### Steps Implemented  

1. Request flow:  


