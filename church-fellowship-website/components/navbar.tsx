"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Heart, Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/events", label: "Events" },
    { href: "/join", label: "Join" },
    { href: "/contact", label: "Contact" },
    { href: "/resources", label: "Resources" },
  ];

  const isActive = (href: string) => {
    return pathname === href;
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-lg shadow-lg border-b border-purple-100"
            : "bg-white/95 backdrop-blur-sm shadow-sm"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center space-x-3 group"
              onClick={() => setIsOpen(false)}
            >
              <Image
                src="/logo.png"
                alt="MFMCF Logo"
                width={40}
                height={40}
                className="rounded-lg shadow-lg transition-all duration-300 hover:scale-110"
              />

              <div className="flex flex-col">
                <span className="font-bold text-gray-900 text-lg">MFMCF</span>
                <span className="text-xs text-purple-600 font-medium">
                  OOU Ibogun
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 group ${
                    isActive(link.href)
                      ? "text-purple-600 bg-purple-50"
                      : "text-gray-700 hover:text-purple-600 hover:bg-purple-50/50"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {link.label}
                  {isActive(link.href) && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-purple-600 rounded-full"></div>
                  )}
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className={`md:hidden z-50 relative overflow-hidden transition-all duration-300 ${
                isOpen ? "bg-purple-100" : "hover:bg-purple-50"
              }`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation menu"
            >
              <div className="relative">
                {isOpen ? (
                  <X className="w-5 h-5 text-purple-600 animate-scale-in" />
                ) : (
                  <Menu className="w-5 h-5 text-purple-600 animate-scale-in" />
                )}
              </div>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-500 ease-out ${
            isOpen
              ? "max-h-screen opacity-100 translate-y-0"
              : "max-h-0 opacity-0 -translate-y-4 overflow-hidden"
          }`}
        >
          <div className="border-t border-purple-100 bg-white/95 backdrop-blur-lg shadow-xl">
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-4 py-3 rounded-xl font-medium transition-all duration-300 transform ${
                    isActive(link.href)
                      ? "text-purple-600 bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-600 shadow-sm"
                      : "text-gray-700 hover:text-purple-600 hover:bg-purple-50/70 hover:translate-x-2"
                  }`}
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    animation: isOpen
                      ? "slide-in-right 0.6s ease-out forwards"
                      : "none",
                  }}
                  onClick={() => setIsOpen(false)}
                >
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        isActive(link.href) ? "bg-purple-600" : "bg-gray-300"
                      }`}
                    ></div>
                    <span>{link.label}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden animate-fade-in"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
