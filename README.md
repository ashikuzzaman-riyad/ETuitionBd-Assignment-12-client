# eTuitionBd – Tuition Management System

## 📌 Project Overview
**eTuitionBd** is a full-featured Tuition Management System that connects **students**, **tutors**, and **administrators** on a single platform.  
The system enables students to post tuition requirements, tutors to apply for suitable tuition jobs, and admins to manage users, tuitions, and platform activities securely and efficiently.

This project was developed as part of a technical assessment to demonstrate real-world problem solving, clean architecture, role-based access control, and modern MERN stack practices.

---

## 🎯 Purpose of the Project
- Solve the real-world problem of finding **verified tutors** and **authentic tuition posts**
- Reduce friction between students and tutors using **automated workflows**
- Enable **transparent payments**, class tracking, and structured communication
- Provide admins with full control to **monitor, approve, and regulate** platform activities

---

## 🌐 Live Website
🔗 **Live URL:** https://etuitionbd-7b3ea.web.app/  
🔗 **Client Repository:** https://github.com/ashikuzzaman-riyad/ETuitionBd-Assignment-12-client  
🔗 **Server Repository:** https://github.com/ashikuzzaman-riyad/ETuitionBd-Assignment-12-server  

---

## 🧑‍🤝‍🧑 User Roles
- **Student**
- **Tutor**
- **Admin**

Each role has a dedicated dashboard and permissions.

---

## ✨ Key Features

### 🔐 Authentication & Authorization
- Email & Password authentication using **Firebase**
- Google Social Login (default role: Student)
- JWT-based secure API access
- Role-based routing (Student / Tutor / Admin)
- Protected private routes (no redirect after reload)

---

### 🏠 Home Page
- Hero section
- Dynamic **Latest Tuition Posts** (from backend)
- Dynamic **Latest Tutors**
- Framer Motion animations (minimum 2)
- Extra sections:
  - How the Platform Works
  - Why Choose Us

---

## 🎓 Student Features
- Create, update, and delete tuition posts
- Tuition post status: **Pending → Approved / Rejected**
- View applied tutors for their tuition posts
- Approve or reject tutor applications
- Stripe payment required to approve a tutor
- View payment history
- Update profile information

---

## 🧑‍🏫 Tutor Features
- Browse all approved tuition posts
- Apply to tuition posts
- Track application status (Pending / Approved / Rejected)
- Update or delete applications before approval
- View ongoing tuitions
- Revenue and transaction history

---

## 🛠️ Admin Features
### User Management
- View all users
- Update user information
- Change user roles (Student / Tutor / Admin)
- Delete user accounts

### Tuition Management
- Review tuition posts
- Approve or reject tuition posts
- Control tuition visibility

### Reports & Analytics
- View total platform earnings
- View all successful transactions
- Financial reports with charts & graphs

---

## 🔍 Search, Filter & Pagination (Challenges)
- Search tuitions by **subject** and **location**
- Sort tuitions by **budget** and **date**
- Filter by **class**, **subject**, and **location**
- Pagination implemented on tuition listing page
- JWT verification (role, access level, token expiration)

---

## 🎨 UI & UX Highlights
- Unique and modern UI (not copied from modules)
- Fully responsive (mobile, tablet, desktop)
- Sticky navbar with DaisyUI
- Consistent color theme & button styles
- Clean spacing and alignment
- Dashboard with sidebar layout
- Custom 404 error page
- Full-screen loading spinner during data fetch

---

## 🧩 Tech Stack

### Frontend
- React.js
- React Router
- Tailwind CSS
- DaisyUI
- Framer Motion
- Axios
- React Hook Form
- Firebase Authentication

### Backend
- Node.js
- Express.js
- MongoDB
- JWT Authentication
- Stripe Payment Gateway

---

## 🔐 Environment Variables
All sensitive credentials are secured using environment variables.


