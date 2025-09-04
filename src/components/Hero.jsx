import React, { useState } from "react";
import { Link } from "react-router-dom";
import Squares from "./Squares.jsx";

function Hero({ labels, isRTL }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative overflow-hidden min-h-[600px]">
      <div
        className="absolute inset-0 z-0 opacity-60 animate-in pointer-events-none"
        aria-hidden="true"
      >
        <Squares
          speed={0.5}
          squareSize={40}
          direction="diagonal"
          borderColor="#ffffff33"
          hoverFillColor="#222222"
        />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 grid md:grid-cols-2 items-center gap-10">
        {/* Image left */}
        <div className="order-1">
          <div className="relative">
            {!imageError ? (
              <img
                src="/B.gif"
                alt="Content Marketing Services"
                className={`w-full h-auto rounded-xl shadow-2xl transition-opacity duration-500 ${
                  imageLoaded ? "opacity-100" : "opacity-0"
                }`}
                style={{ objectFit: "cover" }}
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="w-full h-80 bg-gradient-to-br from-brand-primary/20 via-brand-secondary/20 to-brand-green-1/20 rounded-xl shadow-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full bg-brand-primary/30 flex items-center justify-center mx-auto mb-4">
                    <span className="text-4xl font-bold text-brand-primary">
                      B
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-brand-gray">
                    {labels.companyName}
                  </h3>
                  <p className="text-brand-gray/70 text-sm mt-2">
                    {labels.subtitle}
                  </p>
                </div>
              </div>
            )}

            {/* Loading indicator */}
            {!imageLoaded && !imageError && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-200 rounded-xl">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-primary"></div>
              </div>
            )}

            <div
              className="absolute -z-10 -top-8 -left-8 h-32 w-32 rounded-lg bg-brand-primary/40 blur-2xl"
              aria-hidden="true"
            />
            <div
              className="absolute -z-10 -bottom-10 -right-10 h-32 w-32 rounded-full bg-brand-secondary/40 blur-2xl"
              aria-hidden="true"
            />
          </div>
        </div>
        {/* Text right */}
        <div className="order-2 animate-in md:text-right text-center md:max-w-none max-w-3xl md:ml-auto">
          <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight text-brand-gray">
            {labels.companyName}
          </h1>
          <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-brand-primary">
            {labels.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-brand-gray/80 leading-relaxed">
            {labels.subtitle}
          </p>
          <div
            className="mt-10 flex gap-3 md:justify-end justify-center"
            style={{ flexDirection: isRTL ? "row-reverse" : "row" }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-brand-primary text-black font-semibold hover:bg-brand-secondary transition-colors btn-shimmer"
            >
              {labels.ctaPrimary}
            </Link>
            <button
              onClick={scrollToAbout}
              className="inline-flex items-center justify-center px-5 py-3 rounded-md border border-brand-gray text-brand-gray font-semibold hover:bg-brand-black hover:text-white transition-colors hover-pulse"
            >
              {labels.ctaSecondary}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
