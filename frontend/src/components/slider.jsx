import { useState } from "react";

export default function SummaryToggle() {
  const [active, setActive] = useState("paragraph"); // default active

  return (
    <div className="flex justify-center mt-6">
      <div className="relative flex bg-gray-200 rounded-full p-1 w-fit">
        {/* Pill Slider */}
        <div
          className={`absolute top-0 bottom-0 w-1/2 bg-blue-500 rounded-full transition-all duration-300 ${
            active === "paragraph" ? "left-0" : "right-0"
          }`}
        ></div>

        {/* Buttons */}
        <button
          className={`relative z-10 w-32 py-2 text-center rounded-full font-medium ${
            active === "paragraph" ? "text-white" : "text-gray-700"
          }`}
          onClick={() => setActive("paragraph")}
        >
          Paragraph
        </button>

        <button
          className={`relative z-10 w-32 py-2 text-center rounded-full font-medium ${
            active === "bullet" ? "text-white" : "text-gray-700"
          }`}
          onClick={() => setActive("bullet")}
        >
          Bullet Points
        </button>
      </div>
    </div>
  );
}