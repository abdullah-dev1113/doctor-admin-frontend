# 🏥 Prescripto Panel

[![React](https://img.shields.io/badge/React-18.2.0-blue?logo=react)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-20-green?logo=node.js)](https://nodejs.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.3.3-blue?logo=tailwindcss)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-4.4.0-purple?logo=vite)](https://vitejs.dev/)

**Prescripto Panel** is a comprehensive **Doctor Appointment Management System** for Admins and Doctors. Admins can manage doctors, appointments, and patients, while doctors can manage profiles, track appointments, and view earnings.

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Features](#features)
   - [Admin Panel](#admin-panel)
   - [Doctor Panel](#doctor-panel)
3. [Technologies Used](#technologies-used)
4. [Folder Structure](#folder-structure)
5. [Installation & Usage](#installation--usage)
6. [Environment Variables](#environment-variables)

---

## Project Overview

Prescripto Panel is built with **React.js + Tailwind CSS** on the frontend and **Node.js + Express** on the backend.

- Admins can manage doctors, appointments, and patients.
- Doctors can edit their profile, track appointments, and check earnings.
- Smooth communication between patients, doctors, and admins.

---

## Features

### Admin Panel

- Dashboard with statistics: doctors, appointments, patients
- Manage appointments: mark as completed, cancel
- Add new doctors to the system
- View and manage all doctors

### Doctor Panel

- Personal dashboard with earnings and appointments
- Manage profile: fees, address, availability
- Manage appointments: complete, cancel, check payment status

---

## Technologies Used

- **Frontend:** React.js, Tailwind CSS, React Router, Axios, React Toastify
- **Backend:** Node.js, Express.js, MongoDB
- **Authentication:** JWT Tokens for Admin and Doctor
- **Deployment:** Vite, Render

---

## Folder Structure

```text
/project-root
├─ /public
├─ /src
│  ├─ /assets
│  ├─ /components
│  ├─ /context
│  ├─ /pages
│  │  ├─ /Admin
│  │  │  ├─ Dashboard.jsx
│  │  │  ├─ AllAppointments.jsx
│  │  │  ├─ AddDoctors.jsx
│  │  │  └─ DoctorsList.jsx
│  │  ├─ /Doctor
│  │  │  ├─ DoctorDashboard.jsx
│  │  │  ├─ DoctorAppointments.jsx
│  │  │  └─ DoctorProfile.jsx
│  │  └─ Login.jsx
│  ├─ App.jsx
│  └─ main.jsx
├─ .env
├─ package.json
└─ README.md
Clone the repository:
git clone <your-repo-link>
Navigate to the project directory:
cd prescripto-panel
Install dependencies:
npm install
Start the development server:
npm run dev
Access the app at:
http://localhost:5173
Admin can log in to manage doctors and appointments
Doctors can log in to manage profile and track appointments
Environment Variables:
Create a .env file in the root directory and add:
# For production (live backend)
VITE_BACKEND_URL=https://doctor-backend-service.onrender.com
# For local development (backend runs on port 5000)
# VITE_BACKEND_URL=http://localhost:5000
```
