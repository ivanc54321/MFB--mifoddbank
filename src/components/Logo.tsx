import React from "react";

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  lightText?: boolean;
}

export default function Logo({ className = "", iconOnly = false, lightText = true }: LogoProps) {
  return (
    <div className={`flex items-center space-x-3 select-none ${className}`}>
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
