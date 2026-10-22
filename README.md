Better Auth Starter

A reusable authentication starter for modern web applications, built with Next.js, TypeScript, Better Auth, Drizzle ORM, PostgreSQL, Resend, and Tailwind CSS.

This repository is intended to be a starting point for new projects. Review the configuration, test the authentication flows, and complete the security checklist before using it in production.

Tech Stack

* Framework: Next.js 16 App Router
* Language: TypeScript
* Authentication: Better Auth
* Database: PostgreSQL
* Database ORM: Drizzle ORM
* Email delivery: Resend
* Email templates: React Email
* Styling: Tailwind CSS
* UI components: shadcn/ui components
* Package manager: Bun
* Code quality: Ultracite and Biome

Features

* Email and password registration
* Email and password sign-in
* Email verification
* Password reset flow
* Server-side session checks for the dashboard
* Authentication API route
* PostgreSQL authentication schema
* Drizzle ORM integration
* React Email templates for verification and password reset
* Login, registration, verification, and reset-password pages

Requirements

Before getting started, make sure you have:

* Bun installed
* A PostgreSQL database
* A Resend account and API key for email delivery
* A Better Auth secret

Getting Started

1. Create your project

You can clone this repository or use GitHub’s Use this template feature to create a separate repository for your application.

To clone it:

git clone YOUR_REPOSITORY_URL
cd YOUR_PROJECT_DIRECTORY

Replace the placeholders with your repository URL and project directory.

2. Install dependencies

bun install

3. Configure environment variables

Create a .env.local file in the project root, using .env.example as a reference.

The required variables are:

BETTER_AUTH_SECRET=YOUR_LONG_RANDOM_SECRET
BETTER_AUTH_URL=http://localhost:3000
DATABASE_URL=YOUR_POSTGRESQL_CONNECTION_URL
RESEND_API_KEY=YOUR_RESEND_API_KEY

Use real credentials only in your private environment configuration. Never commit .env.local, production secrets, or database credentials to GitHub.

Generate a strong, random secret for BETTER_AUTH_SECRET. Keep your production secret private and separate from development credentials.

For local development, the application URL is normally http://localhost:3000. Use your actual deployed HTTPS URL in production.

4. Configure PostgreSQL

Create a PostgreSQL database and set DATABASE_URL to its connection string.

The project uses Drizzle ORM and stores its authentication schema in:

src/lib/auth-schema.ts

The Drizzle configuration reads .env.local and uses the database URL from that file.

To apply the current schema to your database:

bunx drizzle-kit push

Review the schema and database target before running database commands. Use a development database while learning and testing.

For production, establish a reviewed migration workflow and take appropriate backups before making schema changes.

5. Start the development server

bun dev

Open the local URL shown by the development server, normally:

http://localhost:3000

Available Scripts

Command	Purpose
bun dev	Start the development server
bun run build	Build the application for production
bun run start	Start the production server
bun run check	Run the configured code-quality checks
bun run fix	Run the configured automatic fixes

Run scripts from the project root.

Environment Variables

Variable	Purpose
BETTER_AUTH_SECRET	Secret used by Better Auth
BETTER_AUTH_URL	Base URL of the application
DATABASE_URL	PostgreSQL connection string
RESEND_API_KEY	API key used to send authentication emails

Do not place secrets in client-side code or expose them through public environment variables.

Project Structure

src/
├── app/
│   ├── api/
│   │   └── auth/
│   │       └── [...all]/
│   ├── dashboard/
│   ├── forgot-password/
│   ├── login/
│   ├── register/
│   ├── reset-password/
│   ├── verify/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   └── ui/
├── emails/
│   ├── reset-password.tsx
│   └── verify-email.tsx
├── lib/
│   ├── auth.ts
│   ├── auth-client.ts
│   ├── auth-schema.ts
│   ├── db.ts
│   ├── send-password-reset-email.tsx
│   ├── send-verification-email.tsx
│   └── utils.ts
└── proxy.ts
drizzle/
├── 0000_superb_strong_guy.sql
└── meta/

Authentication Flow

1. A user registers with an email address and password.
2. The application sends an email verification message.
3. The user verifies their email address.
4. The user can sign in and access protected pages.
5. A user who forgets their password can request a reset email.

Email delivery requires valid Resend configuration and appropriate sender-domain setup.

Security Checklist

Before deploying an application created from this template:

* [ ]	Test registration, login, logout, and session expiration.
* [ ]	Test email verification and password reset end to end.
* [ ]	Confirm invalid and expired verification links are handled correctly.
* [ ]	Verify that protected pages and server-side data operations require authentication.
* [ ]	Add explicit authorization rules for administrator-only actions.
* [ ]	Confirm ordinary users cannot grant themselves elevated permissions.
* [ ]	Review environment variables and secret handling.
* [ ]	Review database access, migrations, and backups.
* [ ]	Run the code-quality checks and production build.
* [ ]	Review dependencies and deployment configuration.
* [ ]	Configure production email delivery and the production application URL.

Important: Authentication and authorization are different. A signed-in user is not automatically an administrator. Any privileged server action must verify the user’s permissions on the server.

Current Status

This is a development starter, not a guarantee of production readiness. Features, scripts, email delivery, database setup, and security behavior must be tested against the actual application before release.

Update this README whenever the template’s setup, dependencies, or supported features change.

License

No license has been specified yet. Add a license before distributing the template if you intend to define how others may use it.