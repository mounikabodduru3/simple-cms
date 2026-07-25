# Simple CMS

A full-stack Content Management System (CMS) built with **Next.js**, **Express.js**, **MongoDB**, and **Redux Toolkit**. The application allows administrators to securely manage website content through an admin dashboard, while the public website displays content dynamically using backend APIs.

---

## 🚀 Features

### Authentication
- Admin Login
- JWT Authentication
- Protected Dashboard
- Logout Functionality

### Content Management
- Update Website Title
- Update Website Description
- Dynamic Content Rendering
- Content Stored in MongoDB

### Public Website
- Dynamic Home Page
- Content Loaded from Backend API
- Responsive Design

### Admin Dashboard
- Dashboard Cards
- Content Editing Form
- Success Messages
- Protected Routes

---

## 🛠 Tech Stack

### Frontend
- Next.js
- React
- Redux Toolkit
- CSS Modules
- Axios

### Backend
- Express.js
- Node.js
- JWT
- Bcrypt
- Mongoose

### Database
- MongoDB

---

## 📁 Project Structure

```
simple-cms/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── seedAdmin.js
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── app/
│   ├── components/
│   ├── redux/
│   ├── services/
│   ├── public/
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/mounikabodduru3/simple-cms.git

cd simple-cms
```

---

## Backend Setup

```bash
cd backend

npm install
```

Create a `.env` file inside the **backend** folder.

Example:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Seed the admin user:

```bash
node seedAdmin.js
```

Start the backend:

```bash
npm start
```

Backend runs on:

```
http://localhost:5000
```

---

## Frontend Setup

Open a new terminal.

```bash
cd frontend

npm install

npm run dev
```

Frontend runs on:

```
http://localhost:3000
```

---

## 🔐 Default Admin Credentials

```
Email:
admin@gmail.com

Password:
123456
```

> Replace these credentials before deploying to production.

---

## 📡 API Endpoints

### Authentication

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/auth/login` | Admin Login |

### Content

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/content` | Get Website Content |
| PUT | `/content` | Update Website Content |

---

## 🔄 Application Flow

1. Admin logs in.
2. JWT token is generated.
3. Token is stored on the client.
4. Dashboard is protected using authentication.
5. Admin updates website content.
6. Content is stored in MongoDB.
7. Public website fetches updated content from the backend.

---

## 📸 Screenshots

Add screenshots here before submission.

Example:

```
screenshots/
├── login.png
├── dashboard.png
└── homepage.png
```

---

## 🚀 Deployment

### Frontend

Deploy using **Vercel**

### Backend

Deploy using **Render**

### Database

MongoDB Atlas

---

## 👨‍💻 Author

**Mounika Bodduru**

GitHub:
https://github.com/mounikabodduru3

---

## 📄 License

This project is created for educational and assessment purposes.
