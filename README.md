Better Auth Starter

A reusable starter template for building authenticated web applications with Next.js, TypeScript, Better Auth, Drizzle ORM, and PostgreSQL.

Tech Stack

* Framework: Next.js (App Router)
* Language: TypeScript
* Authentication: Better Auth
* Database ORM: Drizzle ORM
* Database: PostgreSQL
* Styling: Tailwind CSS
* Email: Resend
* Package Manager: Use the package manager and lockfile included in this repository

Features

* Email and password authentication
* User registration and login
* Email verification
* Password reset flow
* Session-based authentication
* Protected dashboard pages
* PostgreSQL database schema
* Drizzle ORM integration
* Email templates for authentication workflows

Features and configuration should be verified against the current source code before using this template in production.

Getting Started

1. Clone the repository

git clone YOUR_REPOSITORY_URL
cd YOUR_PROJECT_DIRECTORY

Replace the placeholders with your repository URL and project directory.

2. Install dependencies

Use the package manager matching the lockfile in the repository.

For example, if the project uses npm:

npm install

3. Configure environment variables

Create a local .env file using the variables required by the project.

Check the source code and existing environment example files for the exact variable names, which may include:

* Database connection URL
* Better Auth secret
* Application base URL
* Resend API key

Never commit real secrets, API keys, or production database credentials to GitHub.

4. Configure the database

Set up a PostgreSQL database and provide its connection URL.

Review the Drizzle configuration and database scripts in package.json. Generate and apply migrations using the commands configured for this project.

5. Run the development server

For an npm-based project, the command may be:

npm run dev

Open the local development URL shown in the terminal.

Before Production

Before deploying an application built from this template:

* Verify registration, login, logout, email verification, and password reset.
* Confirm sessions and protected routes behave correctly.
* Enforce authorization on server-side actions and data access.
* Review database migrations and connection settings.
* Configure email delivery and production environment variables.
* Run linting, type checking, and a production build.
* Review dependency versions and security advisories.

A successful login does not automatically mean a user has administrator permissions. Add and enforce an explicit role or permission system for applications that require admin-only features.

Project Documentation

Update this README whenever the template’s dependencies, scripts, authentication flows, or setup requirements change.

Keep project-specific business information in the README of each application created from this template.