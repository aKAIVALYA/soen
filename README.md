# 🚀 CWM.ai  [code with me]  


---

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
2. 2. Used **Middleware** for:  
- Error handling  
- Data parsing  
- Authentication  
3. Configured **CORS** to prevent unauthorized access.  
4. Created **project.model.js** for project schema.  
5. Setup **Socket.io** for chat functionality.  
- Middleware ensures only authenticated users connect.  
6. Built **AI Routes**.  
7. Implemented **Code Editor UI**.  
8. Added **WebContainers** for running server in-browser.  
- Requires specific input format.  
- Since web server runs in the same tab, used **iframe** for sandboxing.  

---

▶ Run command 
Press the ▶ RUN button in your console/browser environment.
Wait for all dependencies to finish installing.
When complete, press RUN again.
The app will launch inside an iframe.
Check your console logs for status updates.

>Click / for routing and use run button on every editor updates.
 

### 🔑 Environment Variables  

Create `.env` files in **both frontend and backend** folders.  

---

#### 📂 Frontend abd Backend  
```env
VITE_API_KEY=http://localhost:3000
PORT=3000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
REDIS_URL=redis://localhost:6379

----


## ⚙️ Installation  

### 1. Clone Repository  
```bash
cd your-repo

cd backend
npm install
npm run dev

cd frontend
npm install
npm run dev
