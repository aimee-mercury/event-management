// components/TicketBookingForm.tsx
"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function TicketBookingForm() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [ticketCount, setTicketCount] = useState(1);
  const [errors, setErrors] = useState({ name: "", email: "", ticketCount: "" });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let valid = true;
    const newErrors = { name: "", email: "", ticketCount: "" };

    if (!name.trim()) {
      newErrors.name = "Name is required.";
      valid = false;
    }

    if (!email || !emailRegex.test(email)) {
      newErrors.email = "Please enter a valid email.";
      valid = false;
    }

    if (ticketCount < 1) {
      newErrors.ticketCount = "Ticket count must be at least 1.";
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      // Reset form
      setName("");
      setEmail("");
      setTicketCount(1);
      // Navigate to home page
      router.push("/home");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg space-y-6 animate-fade-in"
      >
        <h2 className="text-2xl font-extrabold text-center text-gray-800">Book Your Tickets</h2>
        
        {/* Name Input */}
        <div className="relative">
          <label className="block text-gray-700 font-semibold mb-2">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border rounded focus:outline-none focus:border-teal-500 transition duration-200"
            placeholder="Enter your name"
            aria-invalid={!!errors.name}
            aria-describedby="name-error"
          />
          {errors.name && <p id="name-error" className="text-sm text-red-500 mt-1">{errors.name}</p>}
        </div>

        {/* Email Input */}
        <div className="relative">
          <label className="block text-gray-700 font-semibold mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border rounded focus:outline-none focus:border-teal-500 transition duration-200"
            placeholder="Enter your email"
            aria-invalid={!!errors.email}
            aria-describedby="email-error"
          />
          {errors.email && <p id="email-error" className="text-sm text-red-500 mt-1">{errors.email}</p>}
        </div>

        {/* Ticket Count Input */}
        <div className="relative">
          <label className="block text-gray-700 font-semibold mb-2">Number of Tickets</label>
          <input
            type="number"
            min="1"
            value={ticketCount}
            onChange={(e) => setTicketCount(parseInt(e.target.value))}
            className="w-full p-3 border rounded focus:outline-none focus:border-teal-500 transition duration-200"
            placeholder="Enter number of tickets"
            aria-invalid={!!errors.ticketCount}
            aria-describedby="ticket-count-error"
          />
          {errors.ticketCount && <p id="ticket-count-error" className="text-sm text-red-500 mt-1">{errors.ticketCount}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 px-4 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-lg transition duration-300 transform hover:scale-105"
        >
          Book Now
        </button>
      </form>
    </div>
  );
}
