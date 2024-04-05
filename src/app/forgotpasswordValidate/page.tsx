"use client";

import React, { useState } from "react";
import axios from "axios";

function page() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const validateUser = async function () {
    try {
      setError(false);
      const res = await axios.post("/api/users/forgotpasswordValidate", {
        email,
      });
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl mb-5">Validate User</h1>
      <input
        value={email}
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
        onChange={(e) => setEmail(e.target.value)}
        type="text"
        placeholder="email"
      />
      <button
        onClick={validateUser}
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
      >
        Verify
      </button>
      {error && (
        <div>
          <h2 className="text-2xl bg-red-500 text-black">Error</h2>
        </div>
      )}
    </div>
  );
}

export default page;
