import React from "react";

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  lightText?: boolean;
}

export default function Logo({ className = "", iconOnly = false, lightText = true }: LogoProps) {
  return (
    <div className={`flex items-center space-x-3 select-none ${className}`}>
      {/* Dynamic Hand-Crafted Sprout Person SVG Logo matching the uploaded design exactly */}
      <svg
        viewBox="0 0 420 180"
        className="h-10 w-auto shrink-0"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Deep Green Stem/Body Figure */}
        {/* Head */}
        <circle cx="95" cy="55" r="16" fill="#009245" />

        {/* Outer Split/Branches and Trunk */}
        <path
          d="M 95 72 
             C 86 78, 64 88, 41 94 
             C 18 100, 20 114, 40 108 
             C 65 100, 85 88, 92 84
             C 91 100, 88 120, 84 140
             C 80 155, 82 170, 95 180
             C 90 165, 88 145, 91 130
             C 94 110, 97 92, 98 84
             C 100 87, 105 92, 112 95
             C 125 101, 142 101, 160 92
             C 145 96, 128 94, 118 88
             C 107 82, 98 72, 98 72 Z"
          fill="#009245"
        />

        {/* Left Leaf (Light green, detailed with deep green vein) */}
        <path
          d="M 44 95
             C 30 75, 12 55, 20 40
             C 34 32, 54 50, 56 68
             C 57 78, 52 88, 44 95 Z"
          fill="#8cc63f"
        />
        {/* Left Leaf Vein */}
        <path
          d="M 20 40 C 35 55, 44 75, 44 95"
          stroke="#009245"
          strokeWidth="3.5"
          strokeLinecap="round"
        />

        {/* Right Leaf (Significantly larger, wide sweeping light green shape) */}
        <path
          d="M 108 82
             C 134 76, 175 60, 215 65
             C 192 90, 155 105, 115 92
             C 108 90, 104 86, 108 82 Z"
          fill="#8cc63f"
        />
        {/* Right Leaf Vein */}
        <path
          d="M 108 82 C 145 78, 185 70, 215 65"
          stroke="#009245"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
      </svg>

      {/* Styled text to match "MiFoodbank" brand style exactly */}
      {!iconOnly && (
        <div className="flex items-baseline font-sans">
          <span className="font-extrabold text-[23px] tracking-tight text-[#009245]">
            Mi
          </span>
          <span className={`font-bold text-[23px] tracking-tight ${lightText ? "text-stone-100" : "text-stone-850"}`}>
            Foodbank
          </span>
        </div>
      )}
    </div>
  );
}
