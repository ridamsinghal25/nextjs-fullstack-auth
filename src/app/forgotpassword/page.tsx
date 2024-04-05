"use client";

import axios from "axios";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

function ForgotPasswordPage() {
  const searchParams = useSearchParams();
  const [data, setData] = useState<any>({
    oldPassword: "",
    newPassword: "",
    token: "",
  });
  const [successMessage, setSuccessMessage] = useState(false);
  const [error, setError] = useState(false);

  const updatePassword = async function () {
    try {
      setError(false);
      const newPassword = await axios.post("/api/users/forgotpassword", data);

      if (newPassword) {
        setSuccessMessage(true);
      }
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  useEffect(() => {
    const token = searchParams.get("token");
    if (token) {
      setData({ ...data, token });
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl mb-5">Update Password</h1>
      <input
        value={data.newPassword}
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
        onChange={(e) => setData({ ...data, newPassword: e.target.value })}
        type="password"
        placeholder="new password"
      />
      <button
        onClick={updatePassword}
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
      >
        Update Password
      </button>
      {successMessage && (
        <div>
          <h3>Password Changed successfully</h3>
          <br />
          <Link href="/profile">Visit Profile page</Link>
        </div>
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
