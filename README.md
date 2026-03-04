# 🚀 Handle API – React + Node.js

A full-stack project demonstrating **API handling in React.js using Axios** with a **Node.js + Express backend**.  
This project includes **search functionality, loading & error handling, request cancellation, and Vite proxy configuration**.

---

# 📌 Project Preview

This application fetches products from a backend API and displays them in React.  
Users can **search products dynamically**, and the UI updates automatically.

---

# 🛠 Tech Stack

### Frontend
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge)

### Backend
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)

### Tools
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github)

---

# 📂 Project Structure
handle-api
│
├── backend
│ ├── index.js
│ └── package.json
│
└── frontend
├── src
│ ├── App.jsx
│ ├── App.css
│ └── main.jsx
│
├── vite.config.js
└── package.json


---

# ⚡ Features

✅ API handling using **Axios**  
✅ **Search functionality** for products  
✅ **Loading state handling**  
✅ **Error handling**  
✅ **AbortController for request cancellation**  
✅ **Proxy configuration to avoid CORS issues**  
✅ Clean **frontend + backend project structure**

---

# 🔗 API Endpoints

### Get All Products

```
GET /api/products
```

### Search Products

```
GET /api/products?search=table
```

Example Response:

```json
[
  {
    "id": 1,
    "name": "table wooden",
    "price": 200
  }
]
🔄 Application Flow
User Input
     ↓
React State Update
     ↓
Axios API Request
     ↓
Node.js Express Backend
     ↓
Filtered Data Response
     ↓
React UI Update
⚙️ Vite Proxy Configuration

To avoid CORS issues, the Vite development server proxies API requests.

server: {
  proxy: {
    '/api': 'http://localhost:3000'
  }
}

So React calls:

/api/products

And Vite redirects it to:

http://localhost:3000/api/products
💻 Installation & Setup
1️⃣ Clone Repository
git clone https://github.com/nikhilkeshavmali/handle-api.git
2️⃣ Backend Setup
cd backend
npm install
npm run start

Backend runs on:

http://localhost:3000
3️⃣ Frontend Setup
cd frontend
npm install
npm run dev

Frontend runs on:

http://localhost:5173
📚 Concepts Covered

This project demonstrates important frontend and backend concepts:

React Hooks (useState, useEffect)

API handling with Axios

Loading & error handling

AbortController for request cancellation

Express.js API development

Vite proxy configuration

Client-server communication

👨‍💻 Author

Nikhil Mali

🎓 MCA Student
💻 Full Stack Developer

Skills

React.js • Node.js • Python • Django • MongoDB • JavaScript

🔗 GitHub
https://github.com/nikhilkeshavmali
