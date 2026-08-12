import React from "react";
import { PageId } from "../types";
import { CONTACT_INFO } from "../data";

interface FooterProps {
  setCurrentPage: (page: PageId) => void;
}

export default function Footer({ setCurrentPage }: FooterProps) {
  const handleNav = (id: PageId) => {
    setCurrentPage(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="px-10 py-12 border-t border-black/5 bg-white text-black" id="global-footer">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-20">
          <div>
            <p className="font-semibold text-[13px] mb-2 font-sans">Betz Company</p>
            <p className="text-[12px] text-black/60 leading-relaxed font-sans">
              5707 Willow Lane<br />
              Dallas, TX 75230
            </p>
          </div>
          <div>
            <p className="font-semibold text-[13px] mb-2 font-sans">Inquiries</p>
            <p className="text-[12px] text-black/60 underline font-sans mb-1">
              <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-[#5D6F50] transition-colors">
                {CONTACT_INFO.email}
              </a>
            </p>
            <p className="text-[12px] text-black/60 font-sans">
              {CONTACT_INFO.phone}
            </p>
          </div>
          <div>
            <p className="font-semibold text-[13px] mb-2 font-sans">History</p>
            <p className="text-[12px] text-black/60 leading-relaxed font-sans">
              Established in 2007. North Texas real estate development specialists.
            </p>
          </div>
          <div>
            <p className="font-semibold text-[13px] mb-2 font-sans">Navigation</p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-[12px] text-black/60 font-sans">
              <button onClick={() => handleNav("home")} className="hover:text-[#5D6F50] transition-colors cursor-pointer text-left">Home</button>
              <button onClick={() => handleNav("overview")} className="hover:text-[#5D6F50] transition-colors cursor-pointer text-left">Overview</button>
              <button onClick={() => handleNav("current-projects")} className="hover:text-[#5D6F50] transition-colors cursor-pointer text-left">Current</button>
              <button onClick={() => handleNav("previous-projects")} className="hover:text-[#5D6F50] transition-colors cursor-pointer text-left">Previous</button>
              <button onClick={() => handleNav("services")} className="hover:text-[#5D6F50] transition-colors cursor-pointer text-left">Services</button>
              <button onClick={() => handleNav("contact")} className="hover:text-[#5D6F50] transition-colors cursor-pointer text-left">Contact</button>
            </div>
          </div>
        </div>
        <div className="text-left md:text-right w-full md:w-auto shrink-0">
          <p className="text-[11px] text-black/40 font-sans">Demo Made By getGoLive.io</p>
        </div>
      </div>
    </footer>
  );
}
