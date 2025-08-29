import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Squares from "./Squares.jsx";

function Hero({ labels, isRTL }) {
  const videoRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // إضافة مستمع لحدث انتهاء الفيديو
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handleVideoEnd = () => {
        // إيقاف الفيديو على آخر إطار
        video.pause();
        // إخفاء عناصر التحكم
        video.controls = false;
        // إضافة كلاس للفيديو الثابت
        video.classList.add("video-paused");
      };

      const handleVideoLoad = () => {
        setVideoLoaded(true);
        // تحسين جودة الفيديو
        video.playbackRate = 1.0;
      };

      const handleVideoError = () => {
        setVideoError(true);
        console.warn("Video failed to load, falling back to image");
      };

      // إضافة مستمع لحدث التحميل
      const handleCanPlay = () => {
        setVideoLoaded(true);
      };

      video.addEventListener("ended", handleVideoEnd);
      video.addEventListener("loadeddata", handleVideoLoad);
      video.addEventListener("canplay", handleCanPlay);
      video.addEventListener("error", handleVideoError);

      return () => {
        video.removeEventListener("ended", handleVideoEnd);
        video.removeEventListener("loadeddata", handleVideoLoad);
        video.removeEventListener("canplay", handleCanPlay);
        video.removeEventListener("error", handleVideoError);
      };
    }
  }, []);

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
        {/* Video left */}
        <div className="order-1">
          <div className="relative">
            {!videoError ? (
              <video
                ref={videoRef}
                src="/hero.mp4"
                alt="Content Marketing Services"
                className={`w-full h-auto rounded-xl shadow-2xl transition-opacity duration-500 ${
                  videoLoaded ? "opacity-100" : "opacity-0"
                }`}
                autoPlay
                muted
                loop={false}
                playsInline
                preload="auto"
                style={{ objectFit: "cover" }}
                onLoadStart={() => setVideoLoaded(false)}
                poster="/hero.gif"
                controls={false}
                disablePictureInPicture
                disableRemotePlayback
              />
            ) : (
              <img
                src="/hero.gif"
                alt="Content Marketing Services"
                className="w-full h-auto rounded-xl shadow-2xl"
                fallback="true"
              />
            )}

            {/* Loading indicator */}
            {!videoLoaded && !videoError && (
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
          <p className="mt-4 text-base sm:text-lg text-brand-gray/80">
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
