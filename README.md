# Dwansys

![Project Badge](https://img.shields.io/badge/status-active-success) ![Node.js](https://img.shields.io/badge/Node.js-v18-green) ![React](https://img.shields.io/badge/React-19-blue)

Dwansys is a full-stack application consisting of a **React/Vite frontend** and an **Express.js backend**. It serves as a marketing/product site with dynamic frontend pages and components, while the backend handles API requests for emails, contacts, and subscribers with **Supabase integration**.

---

## Table of Contents
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Repository Structure](#repository-structure)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the Project](#running-the-project)
- [API Overview](#api-overview-backend)
- [Scripts](#scripts)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [Testing](#testing)
- [License](#license)

---

## Key Features
- **Frontend:** React 19 + Vite, responsive components, global theme support (light/dark/system)
- **Backend:** Express.js with Helmet, CORS, rate limiting, Pino logging
- **Email Service:** Nodemailer SMTP integration for transactional emails
- **Data Management:** Supabase integration for contacts/subscribers with RLS policies
- Developer-friendly scripts and environment-driven configuration
- Secure, modular, and scalable architecture

---

## Tech Stack

### Frontend
- **Framework:** React 19, React Router
- **Bundler:** Vite
- **Styling:** Bootstrap, Swiper, custom CSS
- **Linting & Formatting:** ESLint, Prettier
- **Utilities:** Context API for global theme

### Backend
- **Runtime:** Node.js 18+
- **Framework:** Express.js
- **Security:** Helmet, CORS, rate-limiting
- **Logging:** Pino
- **Email:** Nodemailer
- **Database:** Supabase JS client
- **Validation:** Joi

---

## Repository Structure

