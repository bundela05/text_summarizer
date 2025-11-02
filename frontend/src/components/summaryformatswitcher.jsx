import React, { useState } from "react";

const SummaryFormatSwitcher = () => {
  const [format, setFormat] = useState("bullet");

  return (
    <div className="flex flex-col items-center p-8 bg-gray-50 ">
      <h2 className="text-lg font-medium mb-3 text-gray-700">
        Choose Summary Format:
      </h2>

      {/* Slider toggle */}
      <div className="relative inline-flex bg-gray-300 rounded-lg p-1 w-[300px] shadow-md select-none">
        {/* Slider background */}
        <div
          className={`absolute top-1 bottom-1 rounded-lg bg-indigo-600 transition-all duration-300 ease-in-out ${
            format === "bullet" ? "left-1 w-[140px]" : "right-1 w-[140px]"
          }`}
        ></div>

        {/* Bullet Points button */}
        <button
          onClick={() => setFormat("bullet")}
          className={`relative z-13 p-1 pr-2 flex items-center justify-center gap-2 flex-1 rounded-lg font-bold text-lg text-black transition-colors duration-300 ${
            format === "bullet" ? "text-white" : "text-gray-700"
          }`}
          aria-pressed={format === "bullet"}
        >
         Bullet Points
        </button>

        {/* Paragraph button */}
        <button
          onClick={() => setFormat("paragraph")}
          className={`relative z-10 p-1 flex items-center justify-center gap-2 flex-1 rounded-lg text-lg font-bold transition-colors duration-300 ${
            format === "paragraph" ? "text-white" : "text-gray-700"
          }`}
          aria-pressed={format === "paragraph"}
        >
         Paragraph
        </button>
      </div>
    </div>
  );
};

export default SummaryFormatSwitcher;
