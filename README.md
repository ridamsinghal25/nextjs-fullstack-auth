# NextJS FullStack Auth App

This project is a **fullstack authentication system** built with
**Next.js**. It handles essential user authentication
functionalities such as login, signup, password verification,
profile management, and more. The project uses **Next.js API
routes** for backend logic and React for building the frontend UI.

## Technologies Used

### **Frontend:**

- **Next.js**: The primary framework for building the frontend UI and API routes.
- **React**: Used for building reusable components.
- **Tailwind CSS**: For styling the application with a modern and responsive design.

### **Backend:**

- **Next.js API Routes**: Backend logic for handling authentication-related requests (signup, login, profile updates).
- **MongoDB**: NoSQL database used to store user data and authentication details securely.
- **Bcrypt.js**: For hashing and securely storing user passwords.
- **JWT (JSON Web Token)**: For managing user authentication and session persistence.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

### 1. **User Signup**

- Allows new users to create an account by providing an email, username, and password.
- Passwords are securely hashed before storing them in the database.

### 2. **User Login**

- Authenticates users with their email/username and password.
- Returns a secure JWT token (or session cookie) to maintain authentication state.

### 3. **Password Verification and Reset**

- Supports password verification during login.
- Allows users to reset their password via a verification email or secret link.

### 4. **Profile Management**

- Authenticated users can view and edit their profile information (such as username or email).
- Ensures profile updates are secured by requiring the user to be logged in.

### 5. **JWT Authentication & Session Management**

- Secure token-based authentication for managing user sessions.
- Tokens can be stored in cookies or local storage for flexibility.

### 6. **Protected Routes**

- Routes like `/profile` are only accessible by authenticated users.
- Middleware checks user authentication state before granting access to protected pages.

### 7. **Responsive UI**

- Frontend UI is responsive and user-friendly, making the app usable across different devices (desktop, mobile, tablet).
