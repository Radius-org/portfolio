"use client";

import InteractiveCard from "@/components/InteractiveCard";
import { Terminal } from "@/components/Terminal";

export default function TerminalPortfolio() {
  return (
    <div className="min-h-screen bg-[black]">
      <div className="w-full h-screen flex flex-col md:flex-row">
        {/* Left Side - 3D Card (Top on mobile) */}
        <div className="w-full md:w-1/2 h-64 md:h-full">
          <InteractiveCard />
        </div>

        {/* Right Side - Terminal (Bottom on mobile) */}
        <div className="w-full md:w-1/2 h-96 md:h-full">
          <Terminal />
        </div>
      </div>
    </div>
  );
}
