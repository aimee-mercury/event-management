// components/LoginForm.tsx
"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FiMail, FiLock } from "react-icons/fi";

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent form default behavior

    // Validation logic
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let valid = true;
    const newErrors = { email: "", password: "" };

    if (!email || !emailRegex.test(email)) {
      newErrors.email = "Please enter a valid email.";
      valid = false;
    }

    if (!password || password.length < 7) {
      newErrors.password = "Password must be at least 7 characters.";
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      // Navigate to home page directly upon successful login
      router.push("/home");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg space-y-6 animate-fade-in"
      >
        <h2 className="text-3xl font-extrabold text-center text-gray-800">Welcome Back</h2>
        <p className="text-center text-gray-500">Please sign in to your account</p>
        
        {/* Email Input */}
        <div className="relative">
          <label className="block text-gray-700 font-semibold mb-2">Email</label>
          <div className="relative flex items-center">
            <FiMail className="absolute left-3 text-gray-400" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 pl-10 border rounded focus:outline-none focus:border-pink-500 transition duration-200"
              placeholder="Enter your email"
              aria-invalid={!!errors.email}
              aria-describedby="email-error"
            />
          </div>
          {errors.email && <p id="email-error" className="text-sm text-red-500 mt-1">{errors.email}</p>}
        </div>

        {/* Password Input */}
        <div className="relative">
          <label className="block text-gray-700 font-semibold mb-2">Password</label>
          <div className="relative flex items-center">
            <FiLock className="absolute left-3 text-gray-400" />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 pl-10 border rounded focus:outline-none focus:border-pink-500 transition duration-200"
              placeholder="Enter your password"
              aria-invalid={!!errors.password}
              aria-describedby="password-error"
            />
          </div>
          {errors.password && <p id="password-error" className="text-sm text-red-500 mt-1">{errors.password}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 px-4 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-lg transition duration-300 transform hover:scale-105"
        >
          Login
        </button>
      </form>
    </div>
  );
}
