# 🌟 WORK-FLOW  
A Full-Stack Employee Management System  

WORK-FLOW is a full-stack web application designed to manage employee records with secure authentication, role-based access, and CRUD operations. It helps organizations efficiently handle employees, their roles, departments, and statuses.  

---

## ✨ Features  

- 🔐 *User Authentication* – Secure signup and login with JWT.  
- 🛡 *Role-Based Access Control (RBAC)* – Supports Admin, User, and Intern roles.  
- 👥 *Employee Management (CRUD)*  
  - ➕ Create employee records (name, email, role, department, status).  
  - 📖 Read and view employee details.  
  - ✏ Update employee information.  
  - ❌ Delete employee records.  
- 🔎 *Client-Side Filtering & Search* – Quickly find employees.  
- 📱 *Responsive Design* – Seamlessly adapts to all devices.  

---

## 🚀 Tech Stack  

### *Frontend*  
![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)  
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)  
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?logo=tailwindcss&logoColor=white)  
![Axios](https://img.shields.io/badge/Axios-5A29E4?logo=axios&logoColor=white)  
![Lucide Icons](https://img.shields.io/badge/Lucide-000000?logo=lucide&logoColor=white)  

### *Backend*  
![Node.js](https://img.shields.io/badge/Node.js-43853D?logo=node.js&logoColor=white)  
![Express.js](https://img.shields.io/badge/Express.js-000000?logo=express&logoColor=white)  
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?logo=mongodb&logoColor=white)  
![Mongoose](https://img.shields.io/badge/Mongoose-880000?logo=mongoose&logoColor=white)  
![JWT](https://img.shields.io/badge/JWT-black?logo=jsonwebtokens)  
![bcrypt](https://img.shields.io/badge/bcrypt-35495E?logo=auth0&logoColor=white)  
![Zod](https://img.shields.io/badge/Zod-3066BE?logo=zod&logoColor=white)  

---

## 📦 Setup & Installation  

### ✅ Prerequisites  
- [Node.js (LTS)](https://nodejs.org/)  
- npm or yarn  
- [MongoDB](https://www.mongodb.com/) (Local or Atlas Cloud)  

---

### 🔧 Installation  

## 1. Clone the Repository  
```bash
git clone <your-repository-url>
cd work-flow
2. Backend Setup
```
## 2. Backend Setup
```bash
cd backend   # or root if backend files are in root
npm install
```
#### Create .env file in backend:
```env
MONGODB_URL="mongodb://localhost:27017/employee-db"
JWT_SECRET="your_jwt_secret_key"
```
#### Start backend server:
```bash
npm start
Runs on 👉 http://localhost:3000
```

## 3. Frontend Setup
```bash
cd frontend
npm install
```
#### Create .env file in frontend:

```env
VITE_BACKEND_URL="http://localhost:3000"
```
#### Start frontend server:

```bash
npm run dev
Runs on 👉 http://localhost:5173
```
## ✨ Now open your browser and go to:
```http://localhost:5173/signup```

## 💡 API Endpoints
#### 🔐 Auth Routes
```
POST /signup → Register a new user.

POST /signin → Authenticate and get JWT.
```
#### 👥 Employee Routes (JWT Protected)
```
POST /employee → Create employee.

GET /employee → Get all employees.

GET /employee/:id → Get employee by ID.

PUT /employee/:id → Update employee by ID.

DELETE /employee/:id → Delete employee by ID.
```

## 🤝 Contributing
Contributions are welcome! 🚀

Fork the project

Create your feature branch (git checkout -b feature/new-feature)

Commit your changes (git commit -m 'Add new feature')

Push to the branch (git push origin feature/new-feature)

Open a Pull Request 🎉

🌟 Show Your Support
If you like this project, please ⭐ the repository to help others discover it!
---
