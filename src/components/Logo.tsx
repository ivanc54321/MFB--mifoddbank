import React from "react";

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  lightText?: boolean;
}

export default function Logo({ className = "", iconOnly = false, lightText = true }: LogoProps) {
  return (
    <div className={`flex items-center select-none ${className}`}>
      <img 
        src="https://i.ibb.co/yns4dn2N/Mi-Foodbank-2048x1152-1-copy.png" 
        alt="Mi Foodbank" 
        className="h-10 sm:h-12 w-auto object-contain" 
        referrerPolicy="no-referrer"
      />
    </div>
  );
}
