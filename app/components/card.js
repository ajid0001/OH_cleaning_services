import Link from "next/link";

const InfoCard = ({ title, description, icon }) => {
  return (
    <div className="p-24 bg-white shadow-lg rounded-lg text-center">
      <div className="text-blue-500 text-3xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default InfoCard;
