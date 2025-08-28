import React, { useEffect, useState, useCallback } from "react";
import QuoteCard from "./components/QuoteCard";
import QuoteButton from "./components/QuoteButton";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";

export default function App() {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchQuote = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("https://api.quotable.io/random");
      if (!res.ok) throw new Error("Failed to fetch quote");
      const data = await res.json();
      setQuote({ text: data.content, author: data.author });
    } catch (err) {
      setError("Could not fetch a new quote. Please try again.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchQuote();
  }, [fetchQuote]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-gray-100 dark:bg-gray-900">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">
        Random Quote Generator
      </h1>

      {loading && <Loader />}
      {error && <ErrorMessage message={error} onRetry={fetchQuote} />}
      {quote && !loading && !error && <QuoteCard quote={quote} />}

      <QuoteButton onClick={fetchQuote} />
    </div>
  );
}