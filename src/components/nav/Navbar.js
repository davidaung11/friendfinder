"use client";

import { useState } from "react";
import Link from "next/link";

const menuItems = ["Discover", "Locations", "Stories", "About"];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [language, setLanguage] = useState("EN");

  const selectLanguage = (lang) => {
    setLanguage(lang);
    setLanguageOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] w-full max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 to-rose-400 text-2xl text-white shadow-lg shadow-pink-500/20">
            ♡
          </span>

          <span className="text-xl font-extrabold tracking-tight text-slate-800">
            Friend<span className="text-pink-500">Finder</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {menuItems.map((item, index) => (
            <a
              key={item}
              href="#"
              className={`relative py-2 text-sm font-semibold transition-colors duration-200 ${
                index === 0
                  ? "text-slate-900"
                  : "text-slate-500 hover:text-pink-500"
              }`}
            >
              {item}

              {index === 0 && (
                <span className="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-pink-500" />
              )}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* Language Dropdown */}
          <div className="relative hidden sm:block">
            <button
              type="button"
              onClick={() => setLanguageOpen(!languageOpen)}
              className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-semibold text-slate-600 transition-colors hover:bg-slate-100"
            >
              <span>🌐</span>
              {language}

              <span
                className={`ml-0.5 text-xs transition-transform duration-200 ${
                  languageOpen ? "rotate-180" : ""
                }`}
              >
                ▾
              </span>
            </button>

            {/* Language Dropdown Menu */}
            {languageOpen && (
              <div className="absolute right-0 top-full mt-2 w-36 overflow-hidden rounded-xl border border-slate-200 bg-white py-1 shadow-xl shadow-slate-900/10">
                {/* English */}
                <button
                  type="button"
                  onClick={() => selectLanguage("EN")}
                  className={`flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm font-medium transition-colors hover:bg-slate-50 ${
                    language === "EN" ? "text-pink-500" : "text-slate-700"
                  }`}
                >
                  🇬🇧 English
                </button>

                {/* Thai */}
                <button
                  type="button"
                  onClick={() => selectLanguage("TH")}
                  className={`flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm font-medium transition-colors hover:bg-slate-50 ${
                    language === "TH" ? "text-pink-500" : "text-slate-700"
                  }`}
                >
                  🇹🇭 Thai
                </button>
              </div>
            )}
          </div>

          {/* Register */}
          <button
            type="button"
            className="hidden rounded-lg px-3 py-2 text-sm font-semibold text-slate-600 transition-colors hover:bg-slate-100 sm:block"
          >
            Register
          </button>

          {/* Get Started */}
          <button
            type="button"
            className="rounded-xl bg-gradient-to-r from-pink-500 to-rose-400 px-4 py-2.5 text-xs font-bold text-white shadow-lg shadow-pink-500/20 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-pink-500/25"
          >
            Get Started
          </button>

          {/* Mobile Menu */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-lg text-slate-700 lg:hidden"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden border-t border-slate-100 bg-white transition-all duration-300 lg:hidden ${
          mobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl flex-col px-5 py-3 sm:px-6">
          {menuItems.map((item) => (
            <a
              key={item}
              href="#"
              className="border-b border-slate-100 py-3.5 text-sm font-semibold text-slate-700 transition-colors hover:text-pink-500"
            >
              {item}
            </a>
          ))}

          <a
            href="app/components/register/page.js"
            className="border-b border-slate-100 py-3.5 text-sm font-semibold text-slate-700"
          >
            Register
          </a>

          <a href="#" className="py-3.5 text-sm font-bold text-pink-500">
            Get Started
          </a>
        </nav>
      </div>
    </header>
  );
}
