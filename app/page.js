import React from "react";
import Link from "next/link";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Header from "./components/header";
import Image from "next/image";
import myImage from "./assets/banner.jpg";
import Footer from "./components/footer";
import { FaCalendarAlt, FaBroom, FaSmile } from "react-icons/fa";
import InfoCard from "./components/card";

const Homepage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="text-center py-32 bg-blue-200 relative">
        {" "}
        {/* Increased padding */}
        <Image
          src={myImage}
          alt="Description"
          layout="fill"
          // width={1000}
          // height={500}
          // className="w-full"
          objectFit="cover"
          className="absolute inset-0"
        />
        <div className="relative z-10">
          <h1 className="text-4xl font-bold text-white">
            Your Trusted Cleaning Partner
          </h1>
          <p className="mt-4 text-lg text-white">
            We provide professional and reliable cleaning services for homes and
            offices.
          </p>
          <Link href="/booking">
            <button className="mt-6 bg-blue-500 text-white py-2 px-6 rounded">
              Book a Service
            </button>
          </Link>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <h2 className="text-3xl font-bold text-center  mb-8">How it Works</h2>
        <div className="grid gap-6 md:grid-cols-3 px-6">
          <InfoCard
            icon={<FaCalendarAlt />}
            title="Book a Service"
            description="Choose a date and time for your cleaning service."
          />
          <InfoCard
            icon={<FaBroom />}
            title="Professional Cleaning"
            description="Our team will arrive and clean with the utmost professionalism."
          />
          <InfoCard
            icon={<FaSmile />}
            title="Enjoy a Fresh Space"
            description="Relax and enjoy your spotless environment."
          />
        </div>
        <p className="mt-8 text-center text-gray-700 max-w-2xl mx-auto">
          We make cleaning easy! Just book a service, let us handle the
          cleaning, and enjoy a fresh space. It’s that simple.
        </p>
      </section>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Homepage;
