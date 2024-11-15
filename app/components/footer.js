import Link from "next/link";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white py-4 text-center">
      <p>Contact Us:</p>
      <div className="flex flex-col items-center space-y-2">
        <div className="flex items-center space-x-2">
          <FaPhoneAlt />
          <span>+1 (555) 123-4567</span>
        </div>
        <div className="flex items-center space-x-2">
          <FaEnvelope />
          <span>info@cleaningservice.com</span>
        </div>
      </div>
      <br />
      <p>&copy; 2024 Cleaning Service. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
