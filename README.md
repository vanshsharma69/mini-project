# 🏥 AryaCare – Smart Hospital Management System  
**Non-Jovac Mini Project**

> A modern hospital management **website + PWA web app** built with **React-Vite**, **Express**, and **MongoDB**, designed to streamline hospital operations, patient appointment booking, and admin management — all in one place.

---

## 🚀 How to Run This Project

### 🧰 Prerequisites
Make sure you have the following installed:
- Node.js (v18+)
- npm or yarn
- MongoDB (local or MongoDB Atlas account)
- Git

---

### ⚙️ Installation Steps

#### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/aryacare.git
cd aryacare
````

#### 2️⃣ Install Dependencies

For frontend:

```bash
cd client
npm install
```

For backend:

```bash
cd ../server
npm install
```

#### 3️⃣ Configure Environment Variables

Create a `.env` file inside the **server** folder and add:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

#### 4️⃣ Run the Backend

```bash
npm start
```

#### 5️⃣ Run the Frontend

Open a new terminal and run:

```bash
npm run dev
```

#### 6️⃣ Open in Browser

Go to 👉 **[http://localhost:5173/](http://localhost:5173/)** to access AryaCare.

---

## ✨ Features of This Project

### 👥 **User / Patient Panel**

* Register and login securely using JWT authentication.
* Book appointments through an interactive form.
* View and manage appointment details.
* Access responsive, mobile-friendly web app UI.

### 👨‍⚕️ **Doctor Panel**

* Manage profile, specialization, and availability.
* View upcoming appointments and patient details.

### 🧑‍💼 **Admin Panel**

* Dashboard to monitor **users**, **doctors**, and **appointments**.
* Add / Edit / Delete doctors and users.
* Review appointment analytics and system activity.

### 💻 **Technology Highlights**

* **Frontend:** React + Vite + Tailwind CSS + Lucide Icons
* **Backend:** Node.js + Express.js
* **Database:** MongoDB (Mongoose ODM)
* **Authentication:** JWT-based secure login
* **Hosting:** Vercel / Render / Railway (for deployment)
* **Progressive Web App:** Installable and offline-capable web app

---

## 🧠 System Architecture

```text
[Frontend: React-Vite + Tailwind]
          ↓
[API Layer: Express.js + Node.js]
          ↓
 [Database: MongoDB Atlas]
          ↑
[Admin Panel + User Web App]
```

---

## 🧩 Modules Overview

| Module                    | Description                                                   |
| ------------------------- | ------------------------------------------------------------- |
| **User Module**           | Handles patient registration, login, and appointment booking. |
| **Doctor Module**         | Allows doctors to manage profiles and view appointments.      |
| **Admin Module**          | Provides complete hospital data control and monitoring.       |
| **Appointment Module**    | Manages all appointment data and workflow.                    |
| **Authentication Module** | Ensures secure access via JWT tokens.                         |

---

## 🔐 Authentication Flow

* User/Doctor signs in using email & password.
* Backend verifies credentials and issues JWT token.
* Token is stored in browser localStorage for protected routes.

---

## 📱 Progressive Web App (PWA)

* Install AryaCare as a mobile-like app from your browser.
* Works offline with caching for essential assets.
* Built using **Vite PWA plugin**.

---

## 🧩 Folder Structure

```
aryacare/
│
├── client/                  # React Frontend (Vite)
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/           # Main page files
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── tailwind.config.js
│
├── server/                  # Express Backend
│   ├── models/              # Mongoose Schemas
│   ├── routes/              # API Routes
│   ├── controllers/         # Logic Handlers
│   ├── server.js            # Entry point
│   └── .env
│
└── README.md
```

---

## 📸 Screenshots (Add in PPT / Report)

1. 🏠 Home Page
2. 👨‍⚕️ Doctor Profile Page
3. 📅 Appointment Booking Page
4. 🧑‍💼 Admin Dashboard
5. 🔐 Login / Signup Page
6. 📱 PWA Installation Prompt

---

## 🌟 Future Enhancements

* 🧬 AI-based appointment scheduling
* 💳 Integrated online payment gateway
* 📹 Video consultation support
* 📱 Native mobile app (React Native)
* 📊 Real-time analytics dashboard

---

## 👨‍💻 Author

**Vansh Sharma**
📍 GLA University
💡 Passionate Full Stack Developer | System Design & Scalable Software Enthusiast
🔗 [Portfolio](https://vanshsharma69.github.io/Portfolio_Demo/)

---

## 🧾 License

This project is for educational purposes only under the **Non-Jovac Mini Project** submission at GLA University.

---

⭐ *If you like this project, give it a star on GitHub!*
