import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

const ServicesPage = () => {
  const services = [
    {
      name: "Residential Cleaning",
      description: "Detailed cleaning for homes.",
      price: "$120",
    },
    {
      name: "Office Cleaning",
      description: "Professional cleaning for workplaces.",
      price: "$150",
    },
    {
      name: "Move-in/Move-out Cleaning",
      description: "Efficient cleaning before or after a move.",
      price: "$180",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-500 text-white p-4">
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Our Services</h1>
        </nav>
      </header>
      {/* <Header navTitle="Our Services" /> */}

      <section className="container mx-auto py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-24 rounded-lg shadow-md">
              <h2 className="text-xl font-bold">{service.name}</h2>
              <p className="mt-2 text-gray-700">{service.description}</p>
              <p className="mt-4 font-semibold text-blue-500">
                {service.price}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* <footer className="bg-blue-500 text-white py-4 text-center">
        <p>&copy; 2024 Cleaning Service. All rights reserved.</p>
      </footer> */}
      <Footer />
    </div>
  );
};

export default ServicesPage;
