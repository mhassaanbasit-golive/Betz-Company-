import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { PageId } from "../types";

interface NavbarProps {
  currentPage: PageId;
  setCurrentPage: (page: PageId) => void;
}

export default function Navbar({ currentPage, setCurrentPage }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems: { label: string; id: PageId }[] = [
    { label: "Home", id: "home" },
    { label: "Company Overview", id: "overview" },
    { label: "Current Projects", id: "current-projects" },
    { label: "Previous Projects", id: "previous-projects" },
    { label: "Our Services", id: "services" },
    { label: "Contact", id: "contact" }
  ];

  const handleNavClick = (id: PageId) => {
    setCurrentPage(id);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-black/5 py-6 px-10">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo Left */}
        <div className="flex items-center gap-12">
          <button
            onClick={() => handleNavClick("home")}
            className="flex items-center cursor-pointer text-left"
            id="nav-logo"
          >
            <span className="font-serif text-2xl tracking-tighter text-black font-normal hover:text-[#5D6F50] transition-colors">
              Betz Company
            </span>
          </button>

          {/* Desktop Nav Middle/Right */}
          <nav className="hidden md:flex items-center gap-8" id="desktop-nav">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`font-sans text-[13px] tracking-wide transition-all duration-300 cursor-pointer ${
                    isActive ? "text-[#5D6F50]" : "text-black/60 hover:text-[#5D6F50]"
                  }`}
                  id={`nav-item-${item.id}`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>

        {/* CTA Button Right */}
        <div className="hidden md:flex items-center">
          <button
            onClick={() => handleNavClick("contact")}
            className="bg-[#5D6F50] hover:bg-[#4A5841] text-white font-sans text-[13px] px-6 py-3 rounded-[14px] transition-all duration-300 cursor-pointer shadow-sm hover:shadow"
            id="nav-inquire-btn"
          >
            Inquire Now
          </button>
        </div>

        {/* Mobile Hamburger Right */}
        <div className="md:hidden flex items-center" id="mobile-nav-toggle">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black p-1 hover:text-[#5D6F50] transition-colors cursor-pointer"
            aria-label="Toggle Menu"
            id="hamburger-btn"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Full-Screen Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 top-[73px] z-50 bg-white flex flex-col justify-start pt-12 px-8 md:hidden"
            id="mobile-nav-menu"
          >
            <nav className="flex flex-col gap-6" id="mobile-nav-links">
              {navItems.map((item, index) => {
                const isActive = currentPage === item.id;
                return (
                  <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08, duration: 0.4 }}
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`text-left font-serif text-[18px] tracking-wide py-2 border-b border-neutral-100 w-full flex justify-between items-center cursor-pointer ${
                      isActive ? "text-[#5D6F50] font-medium" : "text-black"
                    }`}
                    id={`mobile-nav-item-${item.id}`}
                  >
                    <span>{item.label}</span>
                    {isActive && <span className="text-[#5D6F50]">●</span>}
                  </motion.button>
                );
              })}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-auto mb-16 text-xs text-neutral-500 space-y-2 border-t border-neutral-100 pt-6"
              id="mobile-nav-footer"
            >
              <p className="font-sans">Betz Company, Dallas, TX</p>
              <p className="font-sans">Phone: 469-682-2212</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
