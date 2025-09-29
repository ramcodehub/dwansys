Dwansys Backend
================

Environment Variables
---------------------

Create a `.env` in `backend/` with:

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

# (CAPTCHA removed)
```

Scripts
-------

```
npm run dev
npm start
```

API
---

- POST `/api/send-email`
  - Body: `{ from?, subject?, html?, template?: "contact-form", data? }`
  - Returns: `{ success, messageId }`

- Contacts CRUD (`/api/contacts`)
  - POST `/` → `{ name, email, phone?, company?, subject, message, captchaToken }`
  - GET `/` → list
  - GET `/:id` → single
  - PATCH `/:id` → partial update
  - DELETE `/:id`

Contacts Table (Supabase)
-------------------------

```
create table if not exists public.contacts (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text,
  company text,
  subject text not null,
  message text not null,
  ip text,
  user_agent text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
```

Security
--------

- Input validation with Joi
- Global and route rate limits
- CAPTCHA verification (optional; set `CAPTCHA_SECRET`)
- Sensitive values redacted in logs

Testing
-------

Use Postman/Thunder Client to hit:

- `POST /api/send-email` with `{ template: "contact-form", data: { ... } }`
- `POST /api/contacts` with valid body and `captchaToken`


