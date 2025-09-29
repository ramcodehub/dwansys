Testing Dwansys Backend
=======================

Prerequisites
-------------
- `.env` configured (SMTP + Supabase)
- Dependencies installed: `npm install`

Run
---

```
npm run dev
# or
npm start
```

Health
------

GET `http://localhost:5000/health` → `{ ok: true }`

Send Email
----------

POST `http://localhost:5000/api/send-email`

```
{
  "template": "contact-form",
  "data": {
    "name": "Jane Doe",
    "email": "jane@example.com",
    "subject": "Hello",
    "message": "Testing contact email."
  }
}
```

Expected: `{ "success": true, "messageId": "..." }`

Contacts
--------

- POST `/api/contacts`

```
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "subject": "Need info",
  "message": "Please reach out",
  "captchaToken": "test-or-real"
}
```

- GET `/api/contacts`
- GET `/api/contacts/:id`
- PATCH `/api/contacts/:id` with partial body
- DELETE `/api/contacts/:id`

Invalid Cases
-------------
- Missing required fields → `400 INVALID_BODY`
- CAPTCHA fail (if configured) → `400 CAPTCHA_FAILED`
- SMTP misconfig → `502` on send


