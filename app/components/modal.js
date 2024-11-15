import React from "react";

const Modal = ({ message1, message2, onClose }) => (
  <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
    <div className="bg-white p-14 rounded shadow-lg text-center">
      <p>{message1}</p>
      <p>{message2}</p>
      <button
        onClick={onClose}
        className="mt-12 bg-blue-500 text-white py-2 px-4 rounded"
      >
        OK
      </button>
    </div>
  </div>
);

export default Modal;
