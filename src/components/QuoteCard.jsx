import React from "react";
import { FaTwitter, FaWhatsapp } from "react-icons/fa";

const QuoteCard = ({ text, author }) => {
  const twitterShare = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    `"${text}" — ${author}`
  )}`;
  const whatsappShare = `https://wa.me/?text=${encodeURIComponent(
    `"${text}" — ${author}`
  )}`;

  return (
    <div className="card text-center max-w-xl">
      <p className="text-xl italic text-purple-600 mb-4">"{text}"</p>
      <h3 className="text-lg font-semibold mb-6">— {author}</h3>

      {/* Share Buttons */}
      <div className="flex justify-center gap-4">
        <a
          href={twitterShare}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition"
        >
          <FaTwitter /> Share
        </a>
        <a
          href={whatsappShare}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-500 text-white hover:bg-green-600 transition"
        >
          <FaWhatsapp /> Share
        </a>
      </div>
    </div>
  );
};

export default QuoteCard;
