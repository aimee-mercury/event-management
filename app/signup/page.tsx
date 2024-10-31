// components/SignupForm.tsx
"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FiMail, FiLock } from "react-icons/fi";
import Link from "next/link";

export default function SignupForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "", confirmPassword: "" });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validation logic
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let valid = true;
    const newErrors = { email: "", password: "", confirmPassword: "" };

    if (!email || !emailRegex.test(email)) {
      newErrors.email = "Please enter a valid email.";
      valid = false;
    }

    if (!password || password.length < 7) {
      newErrors.password = "Password must be at least 7 characters.";
      valid = false;
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      // Redirect to login page after successful signup
      router.push("/login");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg space-y-6 animate-fade-in"
      >
        <h2 className="text-3xl font-extrabold text-center text-gray-800">Create an Account</h2>
        <p className="text-center text-gray-500">Sign up to get started</p>
        
        {/* Email Input */}
        <div className="relative">
          <label className="block text-gray-700 font-semibold mb-2">Email</label>
          <div className="relative flex items-center">
            <FiMail className="absolute left-3 text-gray-400" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 pl-10 border rounded focus:outline-none focus:border-purple-500 transition duration-200"
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
              className="w-full p-3 pl-10 border rounded focus:outline-none focus:border-purple-500 transition duration-200"
              placeholder="Enter your password"
              aria-invalid={!!errors.password}
              aria-describedby="password-error"
            />
          </div>
          {errors.password && <p id="password-error" className="text-sm text-red-500 mt-1">{errors.password}</p>}
        </div>

        {/* Confirm Password Input */}
        <div className="relative">
          <label className="block text-gray-700 font-semibold mb-2">Confirm Password</label>
          <div className="relative flex items-center">
            <FiLock className="absolute left-3 text-gray-400" />
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-3 pl-10 border rounded focus:outline-none focus:border-purple-500 transition duration-200"
              placeholder="Confirm your password"
              aria-invalid={!!errors.confirmPassword}
              aria-describedby="confirm-password-error"
            />
          </div>
          {errors.confirmPassword && <p id="confirm-password-error" className="text-sm text-red-500 mt-1">{errors.confirmPassword}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 px-4 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-lg transition duration-300 transform hover:scale-105"
        >
          Sign Up
        </button>

        {/* Link to Login */}
        <p className="text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <Link href="/login" className="text-purple-600 hover:underline">Log in</Link>
        </p>
      </form>
    </div>
  );
}
