"use client";

import React, { useState } from "react";
import Footer from "../components/footer";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you could add logic to send the form data to an API or email
    alert("Form submitted");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-500 text-white p-4">
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Contact Us</h1>
        </nav>
      </header>

      <section className="container mx-auto py-16">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-md"
        >
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 mt-2 border rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 font-semibold"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 mt-2 border rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 font-semibold"
              htmlFor="phone"
            >
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 mt-2 border rounded-md"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-6 rounded"
          >
            Submit
          </button>
        </form>
      </section>

      {/* <footer className="bg-blue-500 text-white py-4 text-center">
        <p>&copy; 2024 Cleaning Service. All rights reserved.</p>
      </footer> */}
      <Footer />
    </div>
  );
};

export default ContactPage;
