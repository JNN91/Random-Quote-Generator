import React from "react";

export default function QuoteCard({ quote }) {
  return (
    <div className="max-w-lg p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md text-center">
      <p className="text-xl italic text-gray-800 dark:text-gray-100">
        "{quote.text}"
      </p>
      <p className="mt-2 text-gray-600 dark:text-gray-300 font-semibold">
        — {quote.author}
      </p>
    </div>
  );
}
