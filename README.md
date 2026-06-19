# Better Auth Starter

A production-ready authentication template built with Next.js, Better Auth, Drizzle ORM, Neon (PostgreSQL), and Resend.

## Stack

- **Framework** — Next.js 16 (App Router, TypeScript)
- **Auth** — Better Auth
- **Database** — Neon (PostgreSQL) via Drizzle ORM
- **Email** — Resend + React Email
- **UI** — shadcn/ui + Tailwind CSS

## Features

- Email/password authentication
- Email verification on signup
- Password reset via email
- Route protection (middleware + server-side layout)
- React Email templates

## Getting Started

1. Clone the repo
2. Install dependencies
```bash
   bun install
```
3. Copy `.env.example` to `.env.local` and fill in your keys
```bash
   cp .env.example .env.local
```
4. Push the schema to your database
```bash
   bunx drizzle-kit push
```
5. Run the dev server
```bash
   bun dev
```

## Environment Variables

```bash
BETTER_AUTH_SECRET=
BETTER_AUTH_URL=# http://localhost:3000 in dev, https://yourdomain.com in prod
DATABASE_URL=
RESEND_API_KEY=
```

## Project Structure

```
src/
├── app/
│   ├── dashboard/        # Protected route
│   ├── forgot-password/
│   ├── login/
│   ├── register/
│   ├── reset-password/
│   └── verify/
├── emails/               # React Email templates
├── lib/
│   ├── auth.ts           # Better Auth config
│   ├── auth-client.ts    # Client-side auth
│   ├── auth-schema.ts    # Drizzle schema
│   ├── db.ts             # Database client
│   ├── send-verification-email.tsx
│   └── send-password-reset-email.tsx
└── middleware.ts          # Edge route protection
```