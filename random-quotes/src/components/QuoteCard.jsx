import React from "react";

export default function QuoteCard({ quote }) {
  return (
    <div className="mb-6">
      <p className="text-xl italic mb-4">“{quote.text}”</p>
      <p className="text-right font-semibold text-purple-600 dark:text-purple-400">
        - {quote.author}
      </p>
    </div>
  );
}
