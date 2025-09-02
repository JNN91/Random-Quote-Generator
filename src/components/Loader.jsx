import React from "react";

export default function Loader() {
  return (
    <div className="flex justify-center items-center py-4">
      <div className="animate-spin rounded-full h-8 w-8 border-t-4 border-purple-600 border-solid"></div>
    </div>
  );
}

