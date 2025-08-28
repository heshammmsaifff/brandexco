import React from "react";

const ElectricBorder = ({ children, color = "#5227FF", className, style }) => {
  return (
    <div className={`relative group ${className || ""}`} style={style}>
      {/* Background gradient */}
      <div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(135deg, ${color}20, ${color}10, transparent)`,
          filter: "blur(1px)",
        }}
      />

      {/* Border with subtle glow */}
      <div
        className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-opacity-30 transition-all duration-500"
        style={{
          borderColor: color,
          boxShadow: `0 0 20px ${color}30`,
        }}
      />

      {/* Inner shadow effect */}
      <div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(145deg, transparent 0%, ${color}05 50%, transparent 100%)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
};

export default ElectricBorder;
