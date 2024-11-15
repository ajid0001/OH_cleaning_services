"use client";

import React, { useState } from "react";
import emailjs from "emailjs-com";
import Header from "../components/header";
import Footer from "../components/footer";

const BookingPage = () => {
  const [formData, setFormData] = useState({
    service: "",
    date: "",
    time: "",
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (
      !formData.service ||
      !formData.name ||
      !formData.email ||
      !formData.date ||
      !formData.time
    ) {
      alert("Please fill all fields.");
      return;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(formData.email)) {
      alert("Please enter a valid email.");
      return;
    }

    emailjs
      .send(
        "service_my5l3ak",
        "template_qg0dzq8",
        formData, // Data to send
        "GwcOPLtTFL3c64m1v"
      )
      .then(
        (response) => {
          alert("Booking confirmed, we will contact you soon!");
          setFormData({
            service: "",
            date: "",
            time: "",
            name: "",
            email: "",
            phone: "",
          });
        },
        (error) => {
          alert("An error occurred. Please try again.");
        }
      );
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* <header className="bg-blue-500 text-white p-4">
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Book a Service</h1>
        </nav>
      </header> */}
      <Header navTitle="Book a Service" />

      <section className="container mx-auto py-16">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-md"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 font-semibold"
              htmlFor="service"
            >
              Select Service
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full p-2 mt-2 border rounded-md"
              required
            >
              <option value="">Select a Service</option>
              <option value="Residential Cleaning">Residential Cleaning</option>
              <option value="Office Cleaning">Office Cleaning</option>
              <option value="Move-in/Move-out Cleaning">
                Move-in/Move-out Cleaning
              </option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold" htmlFor="name">
              Your Name
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
              Your Email
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
              Your Phone
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

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold" htmlFor="date">
              Select Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full p-2 mt-2 border rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold" htmlFor="time">
              Select Time
            </label>
            <input
              type="time"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="w-full p-2 mt-2 border rounded-md"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-6 rounded"
          >
            Confirm Booking
          </button>
        </form>
      </section>
      {/* 
      <footer className="bg-blue-500 text-white py-4 text-center">
        <p>&copy; 2024 Cleaning Service. All rights reserved.</p>
      </footer> */}

      <Footer />
    </div>
  );
};

export default BookingPage;
