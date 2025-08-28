import React from "react";

export default function QuoteButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-xl shadow hover:bg-blue-600 transition"
    >
      New Quote
    </button>
  );
}
