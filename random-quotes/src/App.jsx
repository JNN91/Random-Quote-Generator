import React, { useState, useEffect } from "react";
import QuoteCard from "./components/QuoteCard";
import QuoteButton from "./components/QuoteButton";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";

// Local fallback quotes
const fallbackQuotes = [
  { text: "Talk is cheap. Show me the code.", author: "Linus Torvalds" },
  {
    text: "Programs must be written for people to read, and only incidentally for machines to execute.",
    author: "Harold Abelson",
  },
  { text: "First, solve the problem. Then, write the code.", author: "John Johnson" },
  { text: "The best way to predict the future is to invent it.", author: "Alan Kay" },
  { text: "Simplicity is the soul of efficiency.", author: "Austin Freeman" },
  { text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.", author: "Martin Fowler" },
  { text: "Code is like humor. When you have to explain it, it’s bad.", author: "Cory House" },
  { text: "Fix the cause, not the symptom.", author: "Steve Maguire" },
  { text: "Before software can be reusable it first has to be usable.", author: "Ralph Johnson" },
  { text: "Experience is the name everyone gives to their mistakes.", author: "Oscar Wilde" },
  { text: "Make it work, make it right, make it fast.", author: "Kent Beck" },
  { text: "A user interface is like a joke. If you have to explain it, it’s not that good.", author: "Unknown" },
  { text: "In order to be irreplaceable, one must always be different.", author: "Coco Chanel" },
  { text: "Learning never exhausts the mind.", author: "Leonardo da Vinci" },
  { text: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs" },
];


export default function App() {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchQuote = async () => {
    try {
      setLoading(true);
      setError(null);

      // Proxy call for Quotable
      const response = await fetch("/api/random");
      if (!response.ok) {
        throw new Error("Failed to fetch quote from API");
      }

      const data = await response.json();
      setQuote({
        text: data.content,
        author: data.author,
      });
    } catch (err) {
      console.error("Error fetching quote:", err);

      // Fallback random quote
      const randomQuote =
        fallbackQuotes[Math.floor(Math.random() * fallbackQuotes.length)];

      setQuote(randomQuote);
      setError("Error fetching quotes.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-600 p-6">
      <div className="card max-w-xl w-full text-center shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-purple-700 dark:text-purple-300">
          Random Quote Generator
        </h1>

        {loading && <Loader />}
        {error && <ErrorMessage message={error} />}
        {quote && <QuoteCard quote={quote} />}

        <QuoteButton onClick={fetchQuote} />
      </div>
    </div>
  );
}
