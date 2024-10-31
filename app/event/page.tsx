// components/CreateEventForm.tsx
"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateEventForm() {
  const router = useRouter();
  const [eventName, setEventName] = useState("");
  const [eventImage, setEventImage] = useState<File | null>(null);
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState({ eventName: "", eventImage: "", description: "" });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validation
    let valid = true;
    const newErrors = { eventName: "", eventImage: "", description: "" };

    if (!eventName.trim()) {
      newErrors.eventName = "Event name is required.";
      valid = false;
    }

    if (!eventImage) {
      newErrors.eventImage = "Event image is required.";
      valid = false;
    }

    if (!description.trim()) {
      newErrors.description = "Description is required.";
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      // Submit event creation logic (e.g., API call)
      alert("Event created successfully!");
      // Reset form
      setEventName("");
      setEventImage(null);
      setDescription("");
      // Navigate to home page or events page
      router.push("/home");
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setEventImage(e.target.files[0]);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <main className="flex flex-grow items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg space-y-6 animate-fade-in"
        >
          <h2 className="text-2xl font-extrabold text-center text-gray-800">Create New Event</h2>

          {/* Event Name Input */}
          <div className="relative">
            <label className="block text-gray-700 font-semibold mb-2">Event Name</label>
            <input
              type="text"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
              className="w-full p-3 border rounded focus:outline-none focus:border-teal-500 transition duration-200"
              placeholder="Enter event name"
              aria-invalid={!!errors.eventName}
              aria-describedby="event-name-error"
            />
            {errors.eventName && <p id="event-name-error" className="text-sm text-red-500 mt-1">{errors.eventName}</p>}
          </div>

          {/* Event Image Input */}
          <div className="relative">
            <label className="block text-gray-700 font-semibold mb-2">Event Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full p-3 border rounded focus:outline-none focus:border-teal-500 transition duration-200"
              aria-invalid={!!errors.eventImage}
              aria-describedby="event-image-error"
            />
            {errors.eventImage && <p id="event-image-error" className="text-sm text-red-500 mt-1">{errors.eventImage}</p>}
          </div>

          {/* Description Input */}
          <div className="relative">
            <label className="block text-gray-700 font-semibold mb-2">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-3 border rounded focus:outline-none focus:border-teal-500 transition duration-200"
              placeholder="Enter event description"
              rows={4}
              aria-invalid={!!errors.description}
              aria-describedby="description-error"
            />
            {errors.description && <p id="description-error" className="text-sm text-red-500 mt-1">{errors.description}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 px-4 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-lg transition duration-300 transform hover:scale-105"
          >
            Create Event
          </button>
        </form>
      </main>

      {/* Footer */}
      <footer className="py-4 bg-gray-800 text-white text-center">
        © 2024 aimee mercury. All rights reserved.
      </footer>
    </div>
  );
}
