import React, { useEffect, useState } from "react";
import QuoteCard from "./components/QuoteCard";
import QuoteButton from "./components/QuoteButton";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";

export default function App() {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchQuote = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch("https://zenquotes.io/api/random");
      console.log("Response status:", response.status);

      if (!response.ok) {
        throw new Error("Failed to fetch quote");
      }

      const data = await response.json();
      console.log("API sata:", data);

      setQuote({ text: data[0].q, author: data[0].a });
    } catch (err) {
      console.error("Error fetching quote:", err); 
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Fetch a quote when app loads
  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold mb-6">🌟 Random Quote Generator</h1>

      {loading && <Loader />}
      {error && <ErrorMessage message={error} onRetry={fetchQuote} />}
      {quote && !loading && !error && <QuoteCard quote={quote} />}

      <QuoteButton onClick={fetchQuote} />
    </div>
  );
}
