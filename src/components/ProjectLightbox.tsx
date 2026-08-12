import React from "react";
import { motion } from "motion/react";
import { X, MapPin, Landmark, Calendar, GraduationCap, ChevronRight } from "lucide-react";
import { Project } from "../types";

interface ProjectLightboxProps {
  project: Project | null;
  onClose: () => void;
  onInquire: (projectName: string) => void;
}

export default function ProjectLightbox({ project, onClose, onInquire }: ProjectLightboxProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop with Blur */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/40 backdrop-blur-[4px] cursor-pointer"
        id="lightbox-backdrop"
      />

      {/* Modal Box */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-3xl bg-white rounded-[16px] overflow-hidden shadow-2xl z-10 flex flex-col md:max-h-[90vh] overflow-y-auto border border-black/5"
        id="lightbox-modal-content"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-white/80 backdrop-blur-md text-black hover:text-[#5D6F50] p-2 rounded-full shadow-md transition-colors cursor-pointer"
          id="lightbox-close-btn"
          aria-label="Close Modal"
        >
          <X size={20} />
        </button>

        {/* Large Visual of Property */}
        <div className="relative h-64 md:h-80 w-full overflow-hidden" id="lightbox-image-container">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          {/* Subtle gradient wash */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        </div>

        {/* Content Info */}
        <div className="p-6 md:p-8 space-y-6 flex-1 flex flex-col justify-between" id="lightbox-body">
          <div className="space-y-4">
            {/* Header: Project Title & Location */}
            <div className="space-y-1">
              <span className="font-sans text-xs tracking-widest text-[#5D6F50] uppercase font-semibold">
                Project Showcase
              </span>
              <h2 className="font-serif text-2xl md:text-3xl text-black font-normal">
                {project.title}
              </h2>
              <div className="flex items-center gap-1.5 text-black/60 font-sans text-sm">
                <MapPin size={14} className="text-[#5D6F50]" />
                <span>{project.location}</span>
              </div>
            </div>

            {/* Description */}
            <p className="font-sans text-black/70 text-sm md:text-base leading-relaxed">
              {project.description} This premier site is strategically positioned for growth, backed by comprehensive entitlement coordination and robust infrastructure access planning.
            </p>

            {/* Specs Grid: 2-Columns */}
            <div className="pt-4 border-t border-black/5">
              <h3 className="font-serif text-base text-black mb-3 font-normal">
                Property Specifications
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" id="lightbox-specs-grid">
                {/* Total Acres */}
                <div className="bg-neutral-50/50 p-3.5 rounded-[12px] border border-black/5 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center text-[#5D6F50]">
                    <Landmark size={18} />
                  </div>
                  <div>
                    <span className="block text-[11px] uppercase tracking-wider text-black/40 font-medium">
                      Total Size
                    </span>
                    <span className="font-sans text-sm font-semibold text-black">
                      {project.acres} Acres
                    </span>
                  </div>
                </div>

                {/* Zoning / Type */}
                <div className="bg-neutral-50/50 p-3.5 rounded-[12px] border border-black/5 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center text-[#5D6F50]">
                    <Landmark size={18} />
                  </div>
                  <div>
                    <span className="block text-[11px] uppercase tracking-wider text-black/40 font-medium">
                      Zoning & Classification
                    </span>
                    <span className="font-sans text-sm font-semibold text-black">
                      {project.type}
                    </span>
                  </div>
                </div>

                {/* Status */}
                <div className="bg-neutral-50/50 p-3.5 rounded-[12px] border border-black/5 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center text-[#5D6F50]">
                    <Calendar size={18} />
                  </div>
                  <div>
                    <span className="block text-[11px] uppercase tracking-wider text-black/40 font-medium">
                      Status
                    </span>
                    <span className="font-sans text-sm font-semibold text-black flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* ISD */}
                <div className="bg-neutral-50/50 p-3.5 rounded-[12px] border border-black/5 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center text-[#5D6F50]">
                    <GraduationCap size={18} />
                  </div>
                  <div>
                    <span className="block text-[11px] uppercase tracking-wider text-black/40 font-medium">
                      School District
                    </span>
                    <span className="font-sans text-sm font-semibold text-black">
                      {project.isd}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Action at Bottom */}
          <div className="pt-6 border-t border-black/5 flex flex-col sm:flex-row justify-end">
            <button
              onClick={() => onInquire(project.title)}
              className="bg-[#5D6F50] hover:bg-[#4A5841] text-white font-sans text-sm uppercase tracking-widest py-3 px-6 rounded-[14px] font-semibold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:shadow"
              id="lightbox-inquiry-btn"
            >
              <span>Inquire About This Project</span>
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
