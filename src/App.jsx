import React, { useState } from "react";
import QuoteCard from "./components/QuoteCard";
import QuoteButton from "./components/QuoteButton";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";


const quotes = {
  motivation:[
    { text: "The best way to predict the future is to invent it.", author: "Alan Kay" },
    { text: "Do something today that your future self will thank you for.", author: "Unknown" },
    { text: "It always seems impossible until it’s done.", author: "Nelson Mandela" },
    { text: "Don’t watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
    { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
  ],

  tech: [
    { text: "Talk is cheap. Show me the code.", author: "Linus Torvalds" },
    { text: "First, solve the problem. Then, write the code.", author: "John Johnson" },
    { text: "Programs must be written for people to read, and only incidentally for machines to execute.", author: "Harold Abelson" },
    { text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.", author: "Martin Fowler" },
    { text: "The function of good software is to make the complex appear simple.", author: "Grady Booch" },
  ],

  humor: [
    { text: "Debugging is like being the detective in a crime movie where you are also the murderer.", author: "Filipe Fortes" },
    { text: "There are 10 types of people in the world: those who understand binary and those who don’t.", author: "Anonymous" },
    { text: "To understand recursion, one must first understand recursion.", author: "Anonymous" },
    { text: "Software and cathedrals are much the same — first we build them, then we pray.", author: "Anonymous" },
    { text: "A SQL query walks into a bar, goes up to two tables and asks: 'Can I join you?'", author: "Anonymous" },
  ],
};
const App = () => {
  const [category, setCategory] = useState("motivation");
  const [quote, setQuote] = useState(quotes[category][0]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchQuote = () => {
    setLoading(true);
    setError(null);

    try {
      const categoryQuotes = quotes[category];
      const randomQuote =
        categoryQuotes[Math.floor(Math.random() * categoryQuotes.length)];
      setTimeout(() => {
        setQuote(randomQuote);
        setLoading(false);
      }, 500); // Simulate loading delay
    } catch (err) {
      setError("Could not load quote.");
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-6">
      <h1 className="text-4xl font-bold text-purple-700 mb-6">
        Random Quote Generator
      </h1>

      {/* Category Selector */}
      <select
        value={category}
        onChange={(e) => {
          setCategory(e.target.value);
          setQuote(quotes[e.target.value][0]);
        }}
        className="mb-4 p-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
      >
        <option value="motivation">Motivation</option>
        <option value="tech">Tech</option>
        <option value="humor">Humor</option>
      </select>

      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {!loading && !error && quote && (
        <QuoteCard text={quote.text} author={quote.author} />
      )}

      <QuoteButton onClick={fetchQuote} />
    </div>
  );
};

export default App;
