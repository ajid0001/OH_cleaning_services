import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Link from "next/link";
import Image from "next/image";

const ServicesPage = () => {
  const services = [
    {
      name: "Residential Cleaning",
      description: "Detailed cleaning for homes.",
      price: "$120",
      image: "/assets/banner.jpg",
    },
    {
      name: "Office Cleaning",
      description: "Professional cleaning for workplaces.",
      price: "$150",
      image: "/assets/banner.jpg",
    },
    {
      name: "Move-in/Move-out Cleaning",
      description: "Efficient cleaning before or after a move.",
      price: "$180",
      image: "/assets/banner.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Header navTitle="Our Services" />

      <section className="container mx-auto py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <Image
                src={service.image}
                alt={service.name}
                width={400}
                height={250}
                className="rounded-t-lg object-cover w-full h-48"
              />
              <h2 className="text-xl font-bold mt-4">{service.name}</h2>
              <p className="mt-2 text-gray-700">{service.description}</p>
              <p className="mt-4 font-semibold text-blue-500">
                {service.price}
              </p>
              <Link href="/booking">
                <button className="mt-6 bg-blue-500 text-white py-2 px-4 rounded">
                  Book Now
                </button>
              </Link>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
