import React from "react";

export default function QuoteCard({ quote }) {
  return (
    <div className="card max-w-lg text-center space-y-4">
      <p className="text-lg italic text-gray-700 dark:text-gray-300">
        “{quote.text}”
      </p>
      <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100">
        — {quote.author}
      </h3>
    </div>
  );
}
