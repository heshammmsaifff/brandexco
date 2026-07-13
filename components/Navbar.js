"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

function Navbar({ lang, setLang, labels }) {
  const [isOpen, setIsOpen] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const pathname = usePathname();

  // غير المسارات لتتطابق مع أسماء الملفات الجديدة
  const navItems = [
    { key: "home", label: labels.home, path: "/" },
    // {
    //   key: "about",
    //   label: lang === "ar" ? "عن الشركة" : "About Us",
    //   path: "/#about",
    // },
    { key: "services", label: labels.services, path: "/servicespage" },
    { key: "portfolio", label: labels.portfolio, path: "/portfolio" },
    { key: "blog", label: lang === "ar" ? "المدونة" : "Blog", path: "/blog" },
    { key: "contact", label: labels.contact, path: "/contactpage" },
  ];

  // باقي الكود يبقى كما هو...
  const handleToggle = () => setLang(lang === "ar" ? "en" : "ar");
  const toggleMenu = () => setIsOpen((v) => !v);
  const closeMenu = () => setIsOpen(false);

  const handleNavClick = (path) => {
    if (path.includes("#")) {
      const hash = path.split("#")[1];
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
    closeMenu();
  };

  useEffect(() => {
    const handleScroll = () => {
      setAtTop(window.scrollY === 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur border-b transition-all duration-300 nav-appear ${
        atTop
          ? "bg-transparent border-transparent nav-at-top"
          : "bg-brand-dark/80 border-brand-black shadow-lg"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <div className="relative">
            <Image
              src="/logo-shape.png"
              alt="BrandExCo Logo"
              width={40}
              height={40}
              className="transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 navbar-logo"
              draggable="false"
              priority
            />
            <div className="absolute inset-0 bg-brand-primary/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 logo-glow" />
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-primary/0 via-brand-primary/10 to-brand-primary/0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
          </div>
          <span className="font-extrabold tracking-tight text-brand-gray transition-colors group-hover:text-brand-primary text-lg">
            BRANDEXCO
          </span>
        </Link>

        {/* Desktop menu */}
        <ul className="hidden md:flex items-center gap-12">
          {navItems.map((item) => (
            <li key={item.key} className="animate-in">
              <Link
                href={item.path}
                onClick={() => handleNavClick(item.path)}
                className="nav-flip"
              >
                <span className="nav-flip-inner">
                  <span className="nav-flip-front text-sm font-medium">
                    {item.label}
                  </span>
                  <span className="nav-flip-back text-sm font-semibold">
                    {item.label}
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Language toggle + Mobile menu button */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleToggle}
            className="text-xs font-semibold px-3 py-1.5 rounded-full border border-brand-gray text-brand-gray hover:bg-brand-black hover:text-white transition-colors hover-pulse"
            aria-label="Toggle language"
          >
            {lang === "ar" ? "EN" : "AR"}
          </button>
          <button
            onClick={toggleMenu}
            className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded border border-brand-gray text-brand-gray hover:bg-brand-black hover:text-white transition-colors"
            aria-label="Menu"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <span className="sr-only">Menu</span>
            {isOpen ? "×" : "≡"}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`${
          isOpen ? "flex justify-center items-center" : "hidden"
        } md:hidden border-t border-brand-black bg-brand-dark/95 backdrop-blur min-h-[100px]`}
      >
        <ul className="flex flex-wrap justify-center items-center gap-4 text-center w-full px-4 py-4">
          {navItems.map((item) => (
            <li key={item.key} className="animate-in">
              <Link
                href={item.path}
                onClick={() => handleNavClick(item.path)}
                className="nav-flip text-sm font-medium"
              >
                <span className="nav-flip-inner">
                  <span className="nav-flip-front">{item.label}</span>
                  <span className="nav-flip-back">{item.label}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
