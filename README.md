# Smart Queue

This repository contains a virtual queue system with a React frontend and an Express backend.

## Project structure

- `queue/` — frontend application built with Vite, React, React Router, Tailwind, and Lucide icons.
- `virtual-queue-backend/` — backend API built with Express, Mongoose, Socket.io, and JWT authentication.

## Frontend (queue)

### Features

- Login/Register portal
- User and admin role selection
- Queue booking and live status pages
- Admin dashboard and control pages

### Setup

1. Open a terminal and navigate to `queue/`:

   ```bash
   cd queue
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Build for production:

   ```bash
   npm run build
   ```

5. Preview the production build:

   ```bash
   npm run preview
   ```

### Scripts

- `npm run dev` — start Vite development server on `127.0.0.1:5173`
- `npm run build` — produce a production build
- `npm run preview` — preview the production build locally

## Backend (virtual-queue-backend)

### Features

- Express API for queue management
- User and admin routes
- Validation middleware and centralized error handling
- MongoDB integration with Mongoose
- Socket.io support for live queue updates

### Setup

1. Open a terminal and navigate to `virtual-queue-backend/`:

   ```bash
   cd virtual-queue-backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the server in development mode:

   ```bash
   npm run dev
   ```

4. Start the server in production mode:

   ```bash
   npm start
   ```

### Scripts

- `npm run dev` — start the backend with `nodemon` for auto-reloading
- `npm start` — run the backend via Node

## Notes

- Ensure your backend has the required environment variables configured (for example, MongoDB connection URI and JWT secret) before running.
- The frontend routes include:
  - `/login` — portal page
  - `/login/login` — user login
  - `/login/register` — user registration
  - `/admin/login` — admin login
  - `/admin/register` — admin registration

## License

This repository does not include a license file. Add one if you want to publish or share the code publicly.
