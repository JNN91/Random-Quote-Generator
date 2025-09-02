import React from "react";

export default function ErrorMessage({ message, onRetry }) {
  return (
    <div className="p-4 bg-red-100 text-red-700 rounded-lg mt-4">
      <p>{message}</p>
      <button
        onClick={onRetry}
        className="mt-2 px-3 py-1 bg-red-500 text-white rounded shadow hover:bg-red-600 transition"
      >
        Retry
      </button>
    </div>
  );
}
