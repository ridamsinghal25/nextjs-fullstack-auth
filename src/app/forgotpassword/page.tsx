"use client";

import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";

function ForgotPasswordPage() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState(false);
  const [error, setError] = useState(false);

  const updatePassword = async function () {
    try {
      setError(false);
      const newPassword = await axios.post("/api/users/forgotpassword", user);

      if (newPassword) {
        setMessage(true);
      }
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl mb-5">Change Password</h1>
      <input
        value={user.email}
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        type="text"
        placeholder="email"
      />
      <input
        value={user.password}
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        type="password"
        placeholder="password"
      />
      <button
        onClick={updatePassword}
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
      >
        Update Password
      </button>
      {message ? (
        <div>
          <h3>Password Changed successfully</h3>
          <br />
          <Link href="/profile">Visit Profile page</Link>
        </div>
      ) : (
        "Change password"
      )}
      {error && (
        <div>
          <h2 className="text-2xl bg-red-500 text-black">Error</h2>
        </div>
      )}
    </div>
  );
}

export default ForgotPasswordPage;

// import React from "react";

// function page() {
//   return <div>Forgot password</div>;
// }

// export default page;
