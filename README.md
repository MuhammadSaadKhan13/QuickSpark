# QuickSpark – Task Management Web Application

QuickSpark is a simple, lightweight, and user-friendly web-based task management application designed to help users create, manage, and track daily tasks efficiently. The project focuses on core task management functionality while maintaining a clean architecture and modern web development practices.

🔗 **GitHub Repository:**  
[https://github.com/MuhammadSaadKhan13/QuickSpark.git](https://github.com/MuhammadSaadKhan13/QuickSpark.git)

---

## 📌 Project Overview

Many individuals struggle with organizing daily tasks using manual or unstructured digital methods, leading to missed deadlines and reduced productivity. QuickSpark solves this problem by providing a centralized and intuitive platform where users can manage their tasks easily.

**Key Features:**

- Add new tasks
- Edit existing tasks
- Delete tasks
- Mark tasks as completed
- Organize tasks based on priority

QuickSpark is intentionally kept simple and functional, making it ideal for personal productivity use and academic demonstration purposes.

---

## 🎯 Project Objectives

- Develop a simple and intuitive task management web application  
- Enable users to create, update, delete, and complete tasks  
- Allow task organization based on priority  
- Improve personal productivity through effective task tracking  
- Demonstrate full-stack development using modern web technologies  

---
```markdown
## 📂 Project Structure

*Backend:*
backend/
├── models/
│   └── Tasks.js
├── routes/
│   └── tasks.js
├── .env
├── .env.example
├── package-lock.json
├── package.json
└── server.js

### Frontend
frontend/quickspark/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── TaskForm.jsx
│   │   ├── TaskItem.jsx
│   │   └── TaskList.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── index.jsx
│   └── main.jsx
├── index.html
├── package-lock.json
├── package.json
└── vite.config.js
```


---

## ⚙️ Technology Stack

**Frontend:**

- React.js  
- Vite  
- Plain CSS  

**Backend:**

- Node.js  
- Express.js  
- MongoDB (via Mongoose)  

**Development Tools:**

- Visual Studio Code  
- MongoDB Compass  
- Git & GitHub  
- Web Browser  

---

## ⚙️ Functional Requirements

- Users can add new tasks  
- Users can edit existing tasks  
- Users can delete tasks  
- Users can mark tasks as completed  
- Users can organize tasks based on priority  
- The system displays all tasks clearly  

---

## 🛡️ Non-Functional Requirements

- Simple and intuitive user interface  
- Fast response to user actions  
- Responsive design for multiple screen sizes  
- Reliable operation without crashes  
- Basic data security via backend separation  

---

## 🔐 Environment Configuration

Create a `.env` file inside the backend folder:



MONGO_URI=your_mongodb_connection_string_here
PORT=5000

`

- **MONGO_URI** → MongoDB connection string (MongoDB Compass or Atlas)  
- **PORT** → Port on which the backend server runs  

> ⚠️ The `.env` file is ignored by Git. A `.env.example` file is included for reference.

---

## ▶️ Running the Application

### 1️⃣ Run Backend Server
bash
cd backend
npm install
npm start
`

Backend will run at: `http://localhost:5000`

### 2️⃣ Run Frontend Application

Open a new terminal:

bash
cd frontend/quickspark
npm install
npm run dev


Frontend will run at: `http://localhost:5173`

---

## 🔗 Application Architecture

* **Frontend (React)** handles user interaction and UI rendering
* **Backend (Node.js + Express)** manages task logic and APIs
* **MongoDB** stores task data persistently
* Frontend communicates with backend via **RESTful APIs**

This separation ensures **maintainability**, **scalability**, and **clean code organization**.

---

## 🚧 Scope & Future Enhancements

**Included in Scope:**

* Core task management features
* Priority-based organization
* Simple and responsive UI

**Future Enhancements:**

* User authentication and multi-user support
* Notifications and reminders
* Advanced analytics and reporting
* Cloud-based synchronization

---

## 👨‍💻 Contributors

* Muhammad Saad Khan
* Mohsin

---

## ✅ Conclusion

QuickSpark is a clean, functional, and well-structured task management web application that demonstrates practical full-stack development skills while providing a simple tool for daily task management.



