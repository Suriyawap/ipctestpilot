/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg overflow-hidden shadow-xl max-w-sm w-full">
        <div className="p-4">
          {children}
        </div>
        <div className="p-4 text-center">
          <button 
            onClick={onClose} 
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700 transition "
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;