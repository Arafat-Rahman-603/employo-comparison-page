import React from "react";

interface LogoProps {
  className?: string;
  showBeta?: boolean;
}

export function Logo({ className = "h-8", showBeta = false }: LogoProps) {
  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      {/* Official Employo Logo */}
      <img
        src="/logo.png"
        alt="Employo"
        className="h-8 w-auto object-contain block"
      />

      {/* Optional Beta Badge matching live website */}
      {showBeta && (
        <span className="ml-1 px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider text-white bg-[#3182ce] rounded">
          Beta
        </span>
      )}
    </div>
  );
}
