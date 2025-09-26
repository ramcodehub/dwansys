## Dwansys – Monorepo (Frontend + Backend)

A full-stack application consisting of a React/Vite frontend and an Express.js backend. The backend exposes APIs for sending emails and managing contacts/subscribers (with Supabase integration). The frontend is a marketing/product site with multiple pages, components, and assets.

### Key Features
- Frontend built with React 19, Vite, and React Router
- Responsive UI components and pages; themed UI with context
- Backend API built with Express, Helmet, and rate limiting
- Email sending via Nodemailer (SMTP)
- Contacts and Subscribers endpoints; SQL schema and RLS policies provided
- Supabase integration for data persistence
- Developer-friendly scripts and environment-driven configuration

---

## Tech Stack

### Frontend
- React 19, React Router
- Vite
- ESLint, Prettier
- Bootstrap, Swiper

### Backend
- Node.js, Express
- Helmet, CORS, express-rate-limit, Pino logging
- Nodemailer
- Supabase JavaScript client
- Joi for validation

---

## Repository Structure

```
root/
├─ backend/
│  ├─ server.js                # Express server entry
│  ├─ package.json             # Backend scripts and deps
│  ├─ src/
│  │  ├─ middleware/
│  │  │  └─ errorHandler.js   # 404 and error handlers
│  │  ├─ routes/
│  │  │  ├─ email.js          # POST /api/send-email
│  │  │  ├─ contacts.js       # CRUD /api/contacts
│  │  │  └─ subscribers.js    # CRUD /api/subscribers
│  │  ├─ services/
│  │  │  ├─ emailService.js   # SMTP/Nodemailer implementation
│  │  │  └─ supabase.js       # Supabase client helper
│  │  └─ utils/
│  │     └─ validator.js      # Joi schemas
│  └─ sql/
│     ├─ contacts.sql
│     ├─ subscribers.sql
│     ├─ rls_policies.sql
│     └─ subscribers_rls_policies.sql
│
├─ frontend/
│  ├─ index.html
│  ├─ package.json             # Frontend scripts and deps
│  ├─ src/
│  │  ├─ main.jsx              # App bootstrap
│  │  ├─ App.jsx, App.css
│  │  ├─ assets/               # Images and videos
│  │  ├─ components/           # Reusable UI components
│  │  ├─ contexts/             # ThemeContext
│  │  ├─ config/               # UI content data
│  │  ├─ pages/                # Route pages
│  │  └─ Styles/variables.css
│  ├─ vite.config.js
│  └─ THEME_SYSTEM.md
└─ README.md                   # This file
```

---

## Installation

### Prerequisites
- Node.js 18+ and npm 9+
- A Supabase project (for backend features that require a database)
- SMTP credentials for email sending (or a test SMTP like Mailtrap)

### Clone
```bash
git clone https://github.com/Bhaskar555/Dwansys.git
cd Dwansys
git checkout Sathish
```

### Frontend Setup
```bash
cd frontend
npm install
```

### Backend Setup
```bash
cd backend
npm install
```

Create a `backend/.env` file (see variables below).

```
PORT=5000
CORS_ORIGIN=http://localhost:5173

# SMTP / Email
SMTP_HOST=
SMTP_PORT=587
EMAIL_USER=
EMAIL_PASS=
EMAIL_TO=

# Supabase
SUPABASE_URL=
SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE=
```

Optional: apply SQL schema in your Supabase project using files in `backend/sql/`.

---

## Running the Project

### Frontend (Vite)
```bash
cd frontend
npm run dev
```
- Default dev server: http://localhost:5173
- Adjust the backend CORS origin to match if you change the port

### Backend (Express)
```bash
cd backend
npm run dev
# or
npm start
```
- Default port: 5000 (configurable via `PORT`)
- Health check: `GET /health`
- APIs are mounted under `/api`

---

## API Overview (Backend)
- `POST /api/send-email`
  - Body: `{ from?, subject?, html?, template?: "contact-form", data? }`
  - Returns: `{ success, messageId }`
- Contacts (`/api/contacts`)
  - `POST /` → `{ name, email, phone?, company?, subject, message, captchaToken }`
  - `GET /` → list
  - `GET /:id` → single
  - `PATCH /:id` → partial update
  - `DELETE /:id`
- Subscribers (`/api/subscribers`)
  - RESTful endpoints similar to contacts

---

## Scripts

### Frontend
- `npm run dev` – start Vite dev server
- `npm run build` – production build
- `npm run preview` – preview built app
- `npm run lint` – run ESLint
- `npm run format` – run Prettier

### Backend
- `npm run dev` – start in watch mode with nodemon
- `npm start` – start server

---

## Troubleshooting
- If you see CORS errors in the browser, set `CORS_ORIGIN` in `backend/.env` to match the frontend URL (comma-separated for multiple origins).
- For email failures, verify SMTP host, port, and credentials; some providers require application-specific passwords.
- For Supabase errors, confirm `SUPABASE_URL`/keys and that tables/rls policies are applied.
- Large assets should be stored with Git LFS to avoid GitHub file-size warnings.

---

## Contributing
1. Create a feature branch from `Sathish` (or `main` if preferred)
2. Commit with clear messages
3. Open a pull request and fill in the description

---

## Testing
- Use Postman/Thunder Client to exercise backend endpoints
- Add component/page-level tests for the frontend as needed

---

## License
Proprietary – All rights reserved unless otherwise stated.


