import React from "react";

export default function QuoteButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl shadow-md 
                 transition-transform transform hover:scale-105 focus:ring-2 focus:ring-blue-400"
    >
      New Quote
    </button>
  );
}
