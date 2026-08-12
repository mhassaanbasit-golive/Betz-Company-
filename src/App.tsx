import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  MapPin,
  ArrowRight,
  Phone,
  Mail,
  ChevronDown,
  Compass,
  FileCheck,
  Briefcase,
  Layers,
  Send,
  Building,
  CheckCircle2
} from "lucide-react";

import { PageId, Project } from "./types";
import {
  PROJECTS,
  BROKERAGE_PARCELS,
  SERVICE_PILLARS,
  PREVIOUS_STATS,
  CITIES_ENTITLED,
  HISTORICAL_BIO,
  COMPANY_MISSION_BULLETS,
  CONTACT_INFO
} from "./data";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectLightbox from "./components/ProjectLightbox";
import AskAIWidget from "./components/AskAIWidget";

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>("home");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  // State for Accordion on Services page
  const [expandedPillar, setExpandedPillar] = useState<number | null>(null);

  // Contact Form State
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  // Handle inquiry from project lightbox modal
  const handleInquireProject = (projectName: string) => {
    setSelectedProject(null); // Close modal
    setFormData((prev) => ({
      ...prev,
      message: `Inquiry regarding development project: ${projectName}. I would like to receive additional site specs and zoning details.`
    }));
    setCurrentPage("contact"); // Switch to contact page
    setTimeout(() => {
      window.scrollTo({ top: 300, behavior: "smooth" });
    }, 100);
  };

  // Scroll reveal transitions
  const scrollReveal = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { ease: [0.25, 1, 0.5, 1], duration: 0.7 }
  };

  // Contact Form submit
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    // Reset form fields after submission simulation
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-white text-black flex flex-col justify-between" id="app-root">
      {/* Navigation */}
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {/* Pages Container with Page Transitions */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            id={`page-${currentPage}`}
          >
            {/* ==================== PAGE 1: HOME ==================== */}
            {currentPage === "home" && (
              <div className="space-y-12 pb-12" id="home-view">
                {/* Hero Section */}
                <section className="relative mx-4 md:mx-10 mt-6 min-h-[440px] md:min-h-[480px] py-12 px-8 md:px-16 flex items-center overflow-hidden rounded-[20px] bg-white border border-black/5" id="home-hero">
                  {/* Background Image with Opacity 0.15 Wash */}
                  <div className="absolute inset-0 z-0">
                    <img
                      src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1800&q=80"
                      alt="North Texas Landscape"
                      className="w-full h-full object-cover object-center filter grayscale opacity-[0.15]"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Content Container (Left-aligned, spacious text) */}
                  <div className="relative z-10 max-w-3xl text-left space-y-6">
                    <div className="space-y-4">
                      <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="font-serif text-3xl md:text-[48px] tracking-tight text-black leading-[1.1] font-normal"
                      >
                        Land Development & Consulting in North and Central Texas.
                      </motion.h1>
                      
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="font-sans text-sm md:text-[16px] text-black/60 max-w-xl leading-relaxed"
                      >
                        Betz Company combines real estate development expertise with strategic capital, focusing on securing entitlements, utilities, and positioning property for successful growth.
                      </motion.p>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                      className="flex flex-col sm:flex-row justify-start items-center gap-4 pt-2"
                      id="hero-cta-group"
                    >
                      <button
                        onClick={() => setCurrentPage("current-projects")}
                        className="w-full sm:w-auto bg-[#5D6F50] hover:bg-[#4A5841] text-white font-sans text-[13px] px-6 py-3.5 rounded-[14px] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:shadow"
                      >
                        <span>Explore Current Projects</span>
                        <ArrowRight size={14} />
                      </button>
                      <button
                        onClick={() => setCurrentPage("overview")}
                        className="w-full sm:w-auto bg-transparent border border-black/10 hover:border-[#5D6F50] hover:text-[#5D6F50] text-black font-sans text-[13px] px-6 py-3.5 rounded-[14px] transition-all duration-300 cursor-pointer"
                      >
                        Our Approach
                      </button>
                    </motion.div>
                  </div>
                </section>

                {/* Core Value Snippet Section */}
                <section className="max-w-7xl mx-auto px-10 py-4" id="home-values-banner">
                  <motion.div
                    {...scrollReveal}
                    className="p-8 md:p-12 bg-white rounded-[16px] shadow-[0_2px_20px_rgba(0,0,0,0.03)] border border-black/5 text-center space-y-4 max-w-4xl mx-auto"
                  >
                    <span className="font-serif text-lg md:text-xl text-[#5D6F50] italic">
                      "Strategic alignment. Decisive execution."
                    </span>
                    <p className="font-sans text-sm md:text-base text-black/70 max-w-2xl mx-auto leading-relaxed">
                      Founded in March 2007 in Dallas, Texas. We specialize in residential, commercial, and mixed-use development, preparing properties to realize their peak value in emerging Texas markets.
                    </p>
                  </motion.div>
                </section>

                {/* Homepage Previews (All Sections Preview) */}
                <div className="space-y-24 pt-8" id="home-previews-container">
                  
                  {/* 1. Company Overview Preview Section */}
                  <section className="max-w-7xl mx-auto px-10 py-8 border-t border-black/5" id="home-overview-preview">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                      {/* Left: Section Header */}
                      <div className="lg:col-span-5 space-y-4">
                        <h2 className="font-serif text-3xl md:text-4xl text-black leading-tight">
                          Strategic Vision Meets Decisive Entitlement Execution
                        </h2>
                        <p className="font-sans text-sm md:text-base text-black/60 leading-relaxed">
                          Since March 2007, Betz Company has partnered with Texas landowners to unlock the ultimate potential of high-value acreage. Under the leadership of Ryan Betz, we combine developer intelligence with deep capital integration.
                        </p>
                        <div className="pt-2">
                          <button
                            onClick={() => {
                              setCurrentPage("overview");
                              window.scrollTo({ top: 0, behavior: "smooth" });
                            }}
                            className="group inline-flex items-center gap-1.5 text-[#5D6F50] font-semibold text-[13px] hover:text-[#4A5841] transition-colors cursor-pointer"
                          >
                            <span>Read Our Full Story</span>
                            <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                          </button>
                        </div>
                      </div>

                      {/* Right: Key Tenets / Mission */}
                      <div className="lg:col-span-7 bg-neutral-50/50 p-8 rounded-[16px] border border-black/5 space-y-6">
                        <h3 className="font-serif text-xl text-black font-normal border-b border-black/5 pb-3">
                          Our Strategic Mandate
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {COMPANY_MISSION_BULLETS.slice(0, 4).map((bullet, idx) => (
                            <div key={idx} className="flex gap-3 items-start text-sm">
                              <CheckCircle2 size={16} className="text-[#5D6F50] shrink-0 mt-0.5" />
                              <span className="font-sans text-black/70 leading-relaxed">{bullet}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* 2. Capabilities & Services Preview Section */}
                  <section className="max-w-7xl mx-auto px-10 py-8 border-t border-black/5" id="home-services-preview">
                    <div className="space-y-12">
                      <div className="text-center md:text-left space-y-1">
                        <h2 className="font-serif text-3xl md:text-4xl text-black">
                          Expertise Across the Land Lifecycle
                        </h2>
                        <p className="font-sans text-xs md:text-sm text-black/50">
                          We guide stakeholders through complex regulatory barriers and structure high-yield exits.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6" id="home-services-grid">
                        {SERVICE_PILLARS.map((pillar, idx) => (
                          <div
                            key={idx}
                            onClick={() => {
                              setExpandedPillar(idx);
                              setCurrentPage("services");
                              window.scrollTo({ top: 150, behavior: "smooth" });
                            }}
                            className="bg-white rounded-[16px] p-6 shadow-[0_2px_20px_rgba(0,0,0,0.03)] border border-black/5 flex flex-col justify-between group cursor-pointer hover:shadow-md transition-all duration-300"
                          >
                            <div className="space-y-4">
                              <div className="w-10 h-10 rounded-lg bg-[#5D6F50]/10 flex items-center justify-center text-[#5D6F50]">
                                {idx === 0 ? <Compass size={20} /> : idx === 1 ? <Layers size={20} /> : <Briefcase size={20} />}
                              </div>
                              <h3 className="font-serif text-[20px] font-normal text-black leading-snug">
                                {pillar.title}
                              </h3>
                              <p className="font-sans text-[13px] text-black/60 leading-relaxed line-clamp-3">
                                {pillar.description}
                              </p>
                            </div>
                            <div className="pt-6 border-t border-black/5 mt-4 flex justify-between items-center">
                              <span className="text-[12px] text-black/40 font-mono">0{idx + 1}</span>
                              <span className="text-[#5D6F50] text-[13px] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1 font-semibold">
                                Explore Focuses &rarr;
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="text-center pt-2">
                        <button
                          onClick={() => {
                            setCurrentPage("services");
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                          className="w-full sm:w-auto bg-transparent border border-black/10 hover:border-[#5D6F50] hover:text-[#5D6F50] text-black font-sans text-[13px] px-6 py-3.5 rounded-[14px] transition-all duration-300 cursor-pointer"
                        >
                          View Full Capabilities Outline
                        </button>
                      </div>
                    </div>
                  </section>

                  {/* 3. Active Projects Pipeline Preview Section */}
                  <section className="max-w-7xl mx-auto px-10 py-8 border-t border-black/5" id="home-projects-preview">
                    <div className="space-y-12">
                      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-black/5 pb-4">
                        <div className="space-y-1 text-left">
                          <h2 className="font-serif text-3xl md:text-4xl text-black">
                            Strategic Tracts & Representations
                          </h2>
                          <p className="font-sans text-xs md:text-sm text-black/50">
                            Explore active land designs under development or representation in high-growth corridors.
                          </p>
                        </div>
                        <button
                          onClick={() => {
                            setCurrentPage("current-projects");
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                          className="group inline-flex items-center gap-1.5 text-[#5D6F50] font-semibold text-[13px] hover:text-[#4A5841] transition-colors cursor-pointer shrink-0"
                        >
                          <span>View All Current Developments</span>
                          <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                        </button>
                      </div>

                      {/* Featured Project Cards */}
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {PROJECTS.map((project, idx) => (
                          <div
                            key={project.id}
                            onClick={() => setSelectedProject(project)}
                            className="group bg-white rounded-[16px] overflow-hidden shadow-[0_2px_20px_rgba(0,0,0,0.03)] border border-black/5 cursor-pointer hover:shadow-md transition-all duration-300 flex flex-col text-left"
                          >
                            <div className="h-44 overflow-hidden relative">
                              <img
                                src={project.imageUrl}
                                alt={project.title}
                                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105 filter grayscale"
                                referrerPolicy="no-referrer"
                              />
                              <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-black font-sans font-bold text-[10px] tracking-wider uppercase px-2.5 py-1 rounded-full shadow-sm">
                                {project.acres} Acres
                              </div>
                            </div>
                            <div className="p-4 space-y-2 flex-1 flex flex-col justify-between">
                              <div>
                                <span className="font-sans text-[10px] text-[#5D6F50] font-semibold uppercase tracking-wider block">
                                  {project.location} • {project.type}
                                </span>
                                <h3 className="font-serif text-lg text-black font-normal transition-colors group-hover:text-[#5D6F50] mt-1 line-clamp-1">
                                  {project.title}
                                </h3>
                              </div>
                              <span className="text-[12px] text-black/40 font-sans flex items-center gap-1 group-hover:text-[#5D6F50] transition-colors pt-2 border-t border-black/5">
                                Inspect Specs &rarr;
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Mini Brokerage Tracker snippet */}
                      <div className="bg-neutral-50/50 p-6 rounded-[16px] border border-black/5">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
                          <p className="font-serif text-lg text-black">Active Seller Representations</p>
                          <span className="text-[11px] bg-[#5D6F50]/10 text-[#5D6F50] px-3 py-1 rounded-full font-sans font-semibold tracking-wider uppercase">
                            Direct Landowner Brokerage
                          </span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                          {BROKERAGE_PARCELS.slice(0, 3).map((parcel, idx) => (
                            <div key={idx} className="p-3 bg-white rounded-[12px] border border-black/5 text-left flex items-center justify-between">
                              <div>
                                <p className="font-sans font-semibold text-xs text-black">{parcel.title}</p>
                                <p className="font-sans text-[11px] text-black/50">{parcel.location}</p>
                              </div>
                              <span className="w-2 h-2 rounded-full bg-[#5D6F50]" />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* 4. Track Record & Stats Preview Section */}
                  <section className="max-w-7xl mx-auto px-10 py-8 border-t border-black/5" id="home-record-preview">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                      
                      {/* Left Side: Stats */}
                      <div className="lg:col-span-7 space-y-6 text-left">
                        <h2 className="font-serif text-3xl md:text-4xl text-black">
                          Proven Operational Milestones
                        </h2>
                        <p className="font-sans text-sm md:text-base text-black/60 leading-relaxed">
                          With over two decades in Texas land architecture, we negotiate and finalize entitlement coordinates that ensure structural readiness for builders and enterprise partners alike.
                        </p>
                        
                        <div className="grid grid-cols-3 gap-4 pt-2">
                          <div className="p-4 bg-white rounded-[12px] border border-black/5 text-center">
                            <span className="block font-serif text-2xl md:text-3xl text-[#5D6F50] font-normal">
                              {PREVIOUS_STATS.acresZoned}
                            </span>
                            <span className="block font-sans text-[9px] md:text-[10px] tracking-wider uppercase text-black/40 mt-1">
                              Acres Zoned
                            </span>
                          </div>
                          <div className="p-4 bg-white rounded-[12px] border border-black/5 text-center">
                            <span className="block font-serif text-2xl md:text-3xl text-[#5D6F50] font-normal">
                              {PREVIOUS_STATS.lotsSingleFamily}
                            </span>
                            <span className="block font-sans text-[9px] md:text-[10px] tracking-wider uppercase text-black/40 mt-1">
                              SF Lots
                            </span>
                          </div>
                          <div className="p-4 bg-white rounded-[12px] border border-black/5 text-center">
                            <span className="block font-serif text-2xl md:text-3xl text-[#5D6F50] font-normal">
                              {PREVIOUS_STATS.lotsDeveloped}
                            </span>
                            <span className="block font-sans text-[9px] md:text-[10px] tracking-wider uppercase text-black/40 mt-1">
                              Lots Developed
                            </span>
                          </div>
                        </div>

                        <div className="pt-2">
                          <button
                            onClick={() => {
                              setCurrentPage("previous-projects");
                              window.scrollTo({ top: 0, behavior: "smooth" });
                            }}
                            className="group inline-flex items-center gap-1.5 text-[#5D6F50] font-semibold text-[13px] hover:text-[#4A5841] transition-colors cursor-pointer"
                          >
                            <span>Inspect Our Complete Track Record</span>
                            <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                          </button>
                        </div>
                      </div>

                      {/* Right Side: Entitled Cities tag block */}
                      <div className="lg:col-span-5 bg-neutral-50/50 p-6 rounded-[16px] border border-black/5 text-left space-y-4">
                        <h3 className="font-serif text-base text-black">
                          Approved Municipal Jurisdictions
                        </h3>
                        <p className="font-sans text-xs text-black/50 leading-relaxed">
                          We secure land coordinates directly within top municipal jurisdictions in Collin, Denton, Williamson, and Guadalupe counties:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {CITIES_ENTITLED.map((city, idx) => (
                            <span
                              key={idx}
                              className="bg-white border border-black/5 px-2.5 py-1 rounded-[10px] font-sans text-xs text-black/75 shadow-sm"
                            >
                              {city}, TX
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* 5. Inquire & Contact Preview Section */}
                  <section className="max-w-7xl mx-auto px-10 py-8 border-t border-black/5 pb-16" id="home-contact-preview">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                      {/* Left: Office details */}
                      <div className="lg:col-span-5 space-y-6 text-left">
                        <div className="space-y-2">
                          <h2 className="font-serif text-3xl md:text-4xl text-black">
                            Unlock Your Asset's True Potential
                          </h2>
                          <p className="font-sans text-sm text-black/60 leading-relaxed">
                            Have land with high-growth utility or entitlement potential? Get a confidential consultation directly with Ryan Betz.
                          </p>
                        </div>

                        <div className="space-y-3 pt-2 font-sans text-xs">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-[#5D6F50]/10 flex items-center justify-center text-[#5D6F50]">
                              <MapPin size={14} />
                            </div>
                            <span className="text-black/70">{CONTACT_INFO.address}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-[#5D6F50]/10 flex items-center justify-center text-[#5D6F50]">
                              <Phone size={14} />
                            </div>
                            <a href={`tel:${CONTACT_INFO.phone}`} className="text-black/70 hover:text-[#5D6F50] transition-colors">{CONTACT_INFO.phone}</a>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-[#5D6F50]/10 flex items-center justify-center text-[#5D6F50]">
                              <Mail size={14} />
                            </div>
                            <a href={`mailto:${CONTACT_INFO.email}`} className="text-black/70 hover:text-[#5D6F50] transition-colors underline">{CONTACT_INFO.email}</a>
                          </div>
                        </div>
                      </div>

                      {/* Right: Embedded Interactive Contact Form */}
                      <div className="lg:col-span-7 bg-white rounded-[16px] p-6 shadow-[0_2px_25px_rgba(0,0,0,0.03)] border border-black/5 text-left">
                        <AnimatePresence mode="wait">
                          {!formSubmitted ? (
                            <form onSubmit={handleFormSubmit} className="space-y-4" id="home-mini-contact-form">
                              <h3 className="font-serif text-lg text-black pb-2 border-b border-black/5">
                                Send a Message
                              </h3>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-1">
                                  <label className="block text-[10px] uppercase tracking-wider text-black/40 font-semibold font-sans">
                                    Name
                                  </label>
                                  <input
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    placeholder="John Doe"
                                    className="w-full bg-neutral-50 border border-neutral-200 focus:border-[#5D6F50] rounded-[10px] px-3.5 py-2.5 text-xs text-black font-sans focus:outline-none transition-colors"
                                  />
                                </div>
                                <div className="space-y-1">
                                  <label className="block text-[10px] uppercase tracking-wider text-black/40 font-semibold font-sans">
                                    Email
                                  </label>
                                  <input
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    placeholder="john@example.com"
                                    className="w-full bg-neutral-50 border border-neutral-200 focus:border-[#5D6F50] rounded-[10px] px-3.5 py-2.5 text-xs text-black font-sans focus:outline-none transition-colors"
                                  />
                                </div>
                              </div>
                              <div className="space-y-1">
                                <label className="block text-[10px] uppercase tracking-wider text-black/40 font-semibold font-sans">
                                  Message
                                </label>
                                <textarea
                                  required
                                  rows={3}
                                  value={formData.message}
                                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                  placeholder="Describe your land consulting, utility, or entitlement request..."
                                  className="w-full bg-neutral-50 border border-neutral-200 focus:border-[#5D6F50] rounded-[10px] px-3.5 py-2.5 text-xs text-black font-sans focus:outline-none transition-colors resize-none"
                                />
                              </div>
                              <button
                                type="submit"
                                className="w-full bg-[#5D6F50] hover:bg-[#4A5841] text-white font-sans text-xs uppercase tracking-widest py-3 rounded-[12px] font-semibold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:shadow"
                              >
                                <span>Submit Inquiry</span>
                                <ArrowRight size={13} />
                              </button>
                            </form>
                          ) : (
                            <motion.div
                              initial={{ opacity: 0, scale: 0.98 }}
                              animate={{ opacity: 1, scale: 1 }}
                              className="text-center py-6 space-y-3"
                              id="home-contact-success"
                            >
                              <div className="w-12 h-12 rounded-full bg-neutral-50 border border-black/5 flex items-center justify-center text-[#5D6F50] mx-auto">
                                <CheckCircle2 size={24} />
                              </div>
                              <p className="font-serif text-lg text-black">Inquiry Logged Successfully</p>
                              <p className="font-sans text-xs text-black/50 max-w-xs mx-auto leading-relaxed">
                                We appreciate your message. Ryan Betz will investigate the specs and follow up with you.
                              </p>
                              <button
                                type="button"
                                onClick={() => setFormSubmitted(false)}
                                className="text-xs text-[#5D6F50] font-sans font-semibold underline hover:text-[#4A5841] transition-colors"
                              >
                                Send another inquiry
                              </button>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </section>

                </div>
              </div>
            )}

            {/* ==================== PAGE 2: COMPANY OVERVIEW ==================== */}
            {currentPage === "overview" && (
              <section className="max-w-7xl mx-auto px-10 py-16 space-y-16" id="overview-view">
                <div className="text-center md:text-left border-b border-black/5 pb-4">
                  <span className="font-sans text-xs tracking-widest text-[#5D6F50] uppercase font-semibold">
                    The Firm
                  </span>
                  <h1 className="font-serif text-3xl md:text-5xl text-black mt-1">
                    Company Overview
                  </h1>
                </div>

                {/* Clean 50/50 Asymmetrical Split Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start" id="overview-split-layout">
                  {/* Left column: H1 and Core Text */}
                  <motion.div
                    initial={{ opacity: 0, x: -25 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-6 text-left"
                    id="overview-col-left"
                  >
                    <span className="font-serif text-xl text-black/50 italic block">
                      Operative in North and Central Texas since 2007.
                    </span>
                    <p className="font-sans text-base md:text-lg text-black leading-relaxed">
                      Betz Company began operations in March 2007 in Dallas, Texas. Ryan Betz is active in the North and Central Texas markets searching for development and investment opportunities for residential, commercial, and mixed-use property.
                    </p>
                    <p className="font-sans text-sm md:text-base text-black/60 leading-relaxed">
                      Mr. Betz is primarily focused on securing entitlements, utilities, and positioning property for development in anticipation of improving real estate markets.
                    </p>
                  </motion.div>

                  {/* Right column: Styled white card with a bullet-point breakdown */}
                  <motion.div
                    initial={{ opacity: 0, x: 25 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    className="bg-white rounded-[16px] p-8 md:p-10 shadow-[0_2px_20px_rgba(0,0,0,0.03)] border border-black/5 text-left space-y-6"
                    id="overview-col-right"
                  >
                    <h3 className="font-serif text-xl md:text-2xl text-black font-normal border-b border-black/5 pb-3">
                      Our Strategic Tenets
                    </h3>
                    <ul className="space-y-4" id="overview-tenet-list">
                      {COMPANY_MISSION_BULLETS.map((bullet, index) => (
                        <li key={index} className="flex gap-3 items-start text-sm md:text-base">
                          <CheckCircle2 size={18} className="text-[#5D6F50] shrink-0 mt-0.5" />
                          <span className="font-sans text-black/70 leading-relaxed">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                {/* Founder Bio Anchor Box */}
                <div className="bg-neutral-50/50 p-8 rounded-[16px] border border-black/5 flex flex-col md:flex-row gap-6 md:gap-8 items-center" id="founder-anchor-box">
                  <div className="w-16 h-16 rounded-full bg-[#5D6F50]/10 flex items-center justify-center text-[#5D6F50] shrink-0">
                    <Building size={28} />
                  </div>
                  <div className="text-left space-y-1">
                    <span className="font-sans text-[11px] uppercase tracking-wider text-black/40 font-semibold">Leadership</span>
                    <h4 className="font-serif text-lg text-black">Ryan Betz, President</h4>
                    <p className="font-sans text-xs text-black/55 leading-relaxed">
                      A high-integrity practitioner who steers the growth strategy and entitlement pipeline for every tract of land we secure.
                    </p>
                  </div>
                </div>
              </section>
            )}

            {/* ==================== PAGE 3: CURRENT PROJECTS ==================== */}
            {currentPage === "current-projects" && (
              <section className="max-w-7xl mx-auto px-10 py-16 space-y-16" id="projects-view">
                <div className="text-center md:text-left border-b border-black/5 pb-4">
                  <span className="font-sans text-xs tracking-widest text-[#5D6F50] uppercase font-semibold">
                    The Pipeline
                  </span>
                  <h1 className="font-serif text-3xl md:text-5xl text-black mt-1">
                    Active Land Development Projects
                  </h1>
                  <p className="font-serif text-sm md:text-base text-black/50 italic mt-2">
                    Currently under design across North and Central Texas.
                  </p>
                </div>

                {/* Project Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="projects-grid">
                  {PROJECTS.map((project, index) => (
                    <motion.div
                      {...scrollReveal}
                      transition={{ ...scrollReveal.transition, delay: index * 0.1 }}
                      key={project.id}
                      onClick={() => setSelectedProject(project)}
                      className="group bg-white rounded-[16px] overflow-hidden shadow-[0_2px_20px_rgba(0,0,0,0.03)] border border-black/5 cursor-pointer hover:shadow-[0_4px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 flex flex-col text-left"
                    >
                      {/* Image Area with scale hover */}
                      <div className="h-56 overflow-hidden relative">
                        <img
                          src={project.imageUrl}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-sans font-semibold tracking-wider text-black uppercase shadow-sm">
                          {project.status}
                        </div>
                      </div>

                      {/* Info Area */}
                      <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                        <div className="space-y-1.5">
                          <span className="font-sans text-xs text-[#5D6F50] font-semibold uppercase tracking-wider">
                            {project.acres} Acres • {project.location}
                          </span>
                          <h3 className="font-serif text-xl md:text-2xl text-black font-normal transition-colors duration-300 group-hover:text-[#5D6F50]">
                            {project.title}
                          </h3>
                          <p className="font-sans text-sm text-black/60 leading-relaxed">
                            {project.description}
                          </p>
                        </div>
                        
                        <div className="pt-4 border-t border-black/5 flex items-center justify-between">
                          <span className="font-sans text-xs text-black/40 font-semibold uppercase tracking-wider">
                            School District: {project.isd}
                          </span>
                          <span className="group-hover:text-[#5D6F50] inline-flex items-center gap-1 font-sans text-xs font-semibold tracking-widest text-black uppercase transition-colors">
                            <span>Inspect</span>
                            <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Brokerage Parcels Section */}
                <div className="pt-12 border-t border-black/5 space-y-8" id="brokerage-section">
                  <div className="text-center md:text-left space-y-1">
                    <span className="font-sans text-xs tracking-widest text-[#5D6F50] uppercase font-semibold">
                      Seller's Representation
                    </span>
                    <h2 className="font-serif text-2xl md:text-3xl text-black">
                      Brokerage Parcels
                    </h2>
                    <p className="font-sans text-xs md:text-sm text-black/50">
                      Ryan Betz proudly serves as the Seller's Broker for the following high-potential strategic tracts:
                    </p>
                  </div>

                  {/* Clean Editorial Table / list */}
                  <div className="bg-white rounded-[16px] shadow-[0_2px_20px_rgba(0,0,0,0.03)] border border-black/5 overflow-hidden" id="brokerage-table">
                    <div className="grid grid-cols-1 divide-y divide-black/5 font-sans text-sm">
                      {BROKERAGE_PARCELS.map((parcel, index) => (
                        <div
                          key={index}
                          className="p-4 md:px-6 md:py-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 hover:bg-neutral-50/50 transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#5D6F50] shrink-0" />
                            <span className="font-semibold text-black">{parcel.title}</span>
                          </div>
                          <div className="flex items-center gap-4 text-xs text-black/50 w-full sm:w-auto justify-between sm:justify-end">
                            <span className="flex items-center gap-1">
                              <MapPin size={12} className="text-[#5D6F50]" /> {parcel.location}
                            </span>
                            {parcel.status && (
                              <span className="bg-[#5D6F50]/10 text-[#5D6F50] px-2.5 py-0.5 rounded-full font-sans font-semibold text-[10px] uppercase tracking-wider">
                                {parcel.status}
                              </span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* ==================== PAGE 4: PREVIOUS PROJECTS ==================== */}
            {currentPage === "previous-projects" && (
              <section className="max-w-7xl mx-auto px-10 py-16 space-y-16" id="previous-projects-view">
                <div className="text-center md:text-left border-b border-black/5 pb-4">
                  <span className="font-sans text-xs tracking-widest text-[#5D6F50] uppercase font-semibold">
                    The Track Record
                  </span>
                  <h1 className="font-serif text-3xl md:text-5xl text-black mt-1">
                    A Legacy of Strategic Land Entitlement
                  </h1>
                </div>

                {/* 50/50 Split layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start" id="previous-split-layout">
                  {/* Left Column (The Track Record Stats) */}
                  <div className="space-y-8" id="previous-col-left">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6" id="stats-grid">
                      {/* Stat 1 */}
                      <motion.div
                        {...scrollReveal}
                        className="p-6 bg-white rounded-[16px] shadow-[0_2px_20px_rgba(0,0,0,0.03)] border border-black/5 text-center"
                      >
                        <span className="block font-serif text-3xl md:text-4xl text-[#5D6F50] font-normal">
                          {PREVIOUS_STATS.acresZoned}
                        </span>
                        <span className="block font-sans text-[11px] tracking-wider uppercase text-black/40 mt-2">
                          Acres Zoned
                        </span>
                      </motion.div>

                      {/* Stat 2 */}
                      <motion.div
                        {...scrollReveal}
                        transition={{ ...scrollReveal.transition, delay: 0.15 }}
                        className="p-6 bg-white rounded-[16px] shadow-[0_2px_20px_rgba(0,0,0,0.03)] border border-black/5 text-center"
                      >
                        <span className="block font-serif text-3xl md:text-4xl text-[#5D6F50] font-normal">
                          {PREVIOUS_STATS.lotsSingleFamily}
                        </span>
                        <span className="block font-sans text-[11px] tracking-wider uppercase text-black/40 mt-2">
                          Single-Family Lots
                        </span>
                      </motion.div>

                      {/* Stat 3 */}
                      <motion.div
                        {...scrollReveal}
                        transition={{ ...scrollReveal.transition, delay: 0.3 }}
                        className="p-6 bg-white rounded-[16px] shadow-[0_2px_20px_rgba(0,0,0,0.03)] border border-black/5 text-center"
                      >
                        <span className="block font-serif text-3xl md:text-4xl text-[#5D6F50] font-normal">
                          {PREVIOUS_STATS.lotsDeveloped}
                        </span>
                        <span className="block font-sans text-[11px] tracking-wider uppercase text-black/40 mt-2">
                          Lots Developed
                        </span>
                      </motion.div>
                    </div>

                    {/* Historical Bio block */}
                    <motion.div
                      {...scrollReveal}
                      className="bg-white p-8 rounded-[16px] shadow-[0_2px_20px_rgba(0,0,0,0.03)] border border-black/5 text-left space-y-4"
                      id="historical-bio-card"
                    >
                      <h3 className="font-serif text-xl md:text-2xl text-black font-normal">
                        Firm Foundations
                      </h3>
                      <p className="font-sans text-sm md:text-base text-black/60 leading-relaxed whitespace-pre-line">
                        {HISTORICAL_BIO}
                      </p>
                    </motion.div>
                  </div>

                  {/* Right Column (The Cities & History) */}
                  <motion.div
                    initial={{ opacity: 0, x: 25 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="bg-white rounded-[16px] p-8 md:p-10 shadow-[0_2px_20px_rgba(0,0,0,0.03)] border border-black/5 text-left space-y-6"
                    id="previous-col-right"
                  >
                    <div className="space-y-1">
                      <span className="font-sans text-xs text-[#5D6F50] uppercase tracking-widest font-semibold block">
                        Municipal Approvals
                      </span>
                      <h3 className="font-serif text-xl md:text-2xl text-black font-normal border-b border-black/5 pb-3">
                        Cities We Entitled
                      </h3>
                    </div>
                    <p className="font-sans text-sm text-black/50 leading-relaxed">
                      We have worked hand-in-hand with municipal leaders and planning departments across key growth cities in North Texas to coordinate zoning overlays and infrastructure extensions:
                    </p>
                    <div className="grid grid-cols-2 gap-4" id="cities-grid">
                      {CITIES_ENTITLED.map((city, index) => (
                        <div
                          key={index}
                          className="p-3.5 bg-neutral-50/50 rounded-[12px] flex items-center gap-2 border border-black/5"
                        >
                          <div className="w-2 h-2 rounded-full bg-[#5D6F50]" />
                          <span className="font-sans text-sm font-semibold text-black">{city}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </section>
            )}

            {/* ==================== PAGE 5: OUR SERVICES ==================== */}
            {currentPage === "services" && (
              <section className="max-w-7xl mx-auto px-10 py-16 space-y-16" id="services-view">
                <div className="text-center md:text-left border-b border-black/5 pb-4">
                  <span className="font-sans text-xs tracking-widest text-[#5D6F50] uppercase font-semibold">
                    Capabilities
                  </span>
                  <h1 className="font-serif text-3xl md:text-5xl text-black mt-1">
                    Land Development & Consulting Services
                  </h1>
                </div>

                {/* 3 Pillar Service Accordion Component (Section 1.4: Smooth Accordions) */}
                <div className="space-y-6 max-w-4xl mx-auto" id="services-accordion-list">
                  {SERVICE_PILLARS.map((pillar, index) => {
                    const isExpanded = expandedPillar === index;
                    return (
                      <motion.div
                        {...scrollReveal}
                        transition={{ ...scrollReveal.transition, delay: index * 0.1 }}
                        key={index}
                        className="bg-white rounded-[16px] shadow-[0_2px_20px_rgba(0,0,0,0.03)] border border-black/5 overflow-hidden"
                      >
                        {/* Header trigger */}
                        <button
                          onClick={() => setExpandedPillar(isExpanded ? null : index)}
                          className="w-full p-6 flex justify-between items-center text-left cursor-pointer transition-colors hover:bg-neutral-50/50"
                          aria-expanded={isExpanded}
                          id={`accordion-trigger-${index}`}
                        >
                          <div className="flex items-center gap-4">
                            <span className="font-serif text-xl md:text-2xl text-[#5D6F50] font-normal leading-none">
                              0{index + 1}
                            </span>
                            <h3 className="font-serif text-lg md:text-xl text-black font-normal leading-tight">
                              {pillar.title}
                            </h3>
                          </div>
                          
                          {/* Rotating arrow */}
                          <motion.div
                            animate={{ rotate: isExpanded ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            className="text-[#5D6F50] shrink-0"
                          >
                            <ChevronDown size={20} />
                          </motion.div>
                        </button>

                        {/* Expandable Panel */}
                        <AnimatePresence initial={false}>
                          {isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            >
                              <div className="p-6 pt-0 border-t border-black/5 space-y-4">
                                <p className="font-sans text-sm md:text-base text-black/70 leading-relaxed pt-4">
                                  {pillar.description}
                                </p>
                                
                                <div className="space-y-2">
                                  <span className="block font-sans text-xs tracking-wider uppercase text-black/40 font-semibold">
                                    Strategic Focuses:
                                  </span>
                                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-black font-sans">
                                    {pillar.bulletPoints.map((bp, bpIdx) => (
                                      <div key={bpIdx} className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-[#5D6F50] rounded-full" />
                                        <span>{bp}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Direct inquiry CTA block */}
                <div className="max-w-4xl mx-auto text-center py-8" id="services-cta-banner">
                  <motion.div
                    {...scrollReveal}
                    className="p-8 bg-[#000000] rounded-[16px] text-white space-y-6"
                  >
                    <h3 className="font-serif text-2xl text-white">Have a property with development potential?</h3>
                    <p className="font-sans text-xs md:text-sm text-neutral-400 max-w-lg mx-auto leading-relaxed">
                      We offer preliminary consulting assessments to determine zoning hurdles, utility integration, and entitlement pathways for landowners across Texas.
                    </p>
                    <button
                      onClick={() => setCurrentPage("contact")}
                      className="bg-[#5D6F50] hover:bg-[#4A5841] text-white font-sans text-xs uppercase tracking-widest py-3 px-6 rounded-[14px] font-semibold transition-colors cursor-pointer"
                    >
                      Consult With Ryan
                    </button>
                  </motion.div>
                </div>
              </section>
            )}

            {/* ==================== PAGE 6: CONTACT ==================== */}
            {currentPage === "contact" && (
              <section className="max-w-7xl mx-auto px-10 py-16 space-y-16" id="contact-view">
                <div className="text-center border-b border-black/5 pb-4">
                  <span className="font-sans text-xs tracking-widest text-[#5D6F50] uppercase font-semibold">
                    Inquire
                  </span>
                  <h1 className="font-serif text-3xl md:text-5xl text-black mt-1">
                    Contact Betz Company
                  </h1>
                  <h2 className="font-serif text-sm md:text-base text-black/50 italic mt-2">
                    For inquiries regarding development opportunities, land acquisitions, or consulting services.
                  </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start" id="contact-split-layout">
                  {/* Left Column: Direct Contacts */}
                  <motion.div
                    initial={{ opacity: 0, x: -25 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8 text-left"
                    id="contact-col-left"
                  >
                    <div className="space-y-4">
                      <h3 className="font-serif text-xl md:text-2xl text-black font-normal border-b border-black/5 pb-3">
                        Direct Offices
                      </h3>
                      <p className="font-sans text-sm text-black/70 leading-relaxed">
                        Betz Company's operational headquarters is positioned in Dallas, enabling our teams to deploy rapidly into both the North and Central Texas growth corridors.
                      </p>
                    </div>

                    <div className="space-y-4" id="contact-details-cards">
                      {/* Address */}
                      <div className="flex gap-4 items-start font-sans text-sm">
                        <div className="w-10 h-10 rounded-xl bg-[#5D6F50]/10 flex items-center justify-center text-[#5D6F50] shrink-0">
                          <MapPin size={18} />
                        </div>
                        <div>
                          <span className="block font-semibold text-black uppercase tracking-wider text-[11px] text-black/40">
                            Headquarters
                          </span>
                          <span className="text-black/70 mt-1 block">
                            {CONTACT_INFO.address}
                          </span>
                        </div>
                      </div>

                      {/* Phone */}
                      <div className="flex gap-4 items-start font-sans text-sm">
                        <div className="w-10 h-10 rounded-xl bg-[#5D6F50]/10 flex items-center justify-center text-[#5D6F50] shrink-0">
                          <Phone size={18} />
                        </div>
                        <div>
                          <span className="block font-semibold text-black uppercase tracking-wider text-[11px] text-black/40">
                            Telephone
                          </span>
                          <a href={`tel:${CONTACT_INFO.phone}`} className="text-black/70 hover:text-[#5D6F50] block mt-1 transition-colors">
                            {CONTACT_INFO.phone}
                          </a>
                        </div>
                      </div>

                      {/* Fax */}
                      <div className="flex gap-4 items-start font-sans text-sm">
                        <div className="w-10 h-10 rounded-xl bg-[#5D6F50]/10 flex items-center justify-center text-[#5D6F50] shrink-0">
                          <FileCheck size={18} />
                        </div>
                        <div>
                          <span className="block font-semibold text-black uppercase tracking-wider text-[11px] text-black/40">
                            Facsimile
                          </span>
                          <span className="text-black/70 block mt-1">
                            {CONTACT_INFO.fax}
                          </span>
                        </div>
                      </div>

                      {/* Email */}
                      <div className="flex gap-4 items-start font-sans text-sm">
                        <div className="w-10 h-10 rounded-xl bg-[#5D6F50]/10 flex items-center justify-center text-[#5D6F50] shrink-0">
                          <Mail size={18} />
                        </div>
                        <div>
                          <span className="block font-semibold text-black uppercase tracking-wider text-[11px] text-black/40">
                            Email
                          </span>
                          <a href={`mailto:${CONTACT_INFO.email}`} className="text-black/70 hover:text-[#5D6F50] block mt-1 transition-colors underline">
                            {CONTACT_INFO.email}
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Right Column: Clean Contact Form */}
                  <motion.div
                    initial={{ opacity: 0, x: 25 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="bg-white rounded-[16px] p-8 md:p-10 shadow-[0_2px_20px_rgba(0,0,0,0.03)] border border-black/5 text-left"
                    id="contact-col-right"
                  >
                    <AnimatePresence mode="wait">
                      {!formSubmitted ? (
                        <motion.form
                           key="contact-form"
                           onSubmit={handleFormSubmit}
                           className="space-y-5"
                           id="contact-form-element"
                        >
                          <h3 className="font-serif text-xl md:text-2xl text-black font-normal border-b border-black/5 pb-3">
                            Direct Inquiry Form
                          </h3>

                          {/* Name */}
                          <div className="space-y-1">
                            <label className="block text-xs uppercase tracking-wider text-black/40 font-semibold font-sans">
                              Your Name
                            </label>
                            <input
                              type="text"
                              required
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              placeholder="John Doe"
                              className="w-full bg-neutral-50 border border-neutral-200 focus:border-[#5D6F50] rounded-xl px-4 py-3 text-sm text-black font-sans focus:outline-none transition-colors"
                            />
                          </div>

                          {/* Email */}
                          <div className="space-y-1">
                            <label className="block text-xs uppercase tracking-wider text-black/40 font-semibold font-sans">
                              Email Address
                            </label>
                            <input
                              type="email"
                              required
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              placeholder="john@example.com"
                              className="w-full bg-neutral-50 border border-neutral-200 focus:border-[#5D6F50] rounded-xl px-4 py-3 text-sm text-black font-sans focus:outline-none transition-colors"
                            />
                          </div>

                          {/* Phone */}
                          <div className="space-y-1">
                            <label className="block text-xs uppercase tracking-wider text-black/40 font-semibold font-sans">
                              Phone Number
                            </label>
                            <input
                              type="tel"
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              placeholder="469-682-2212"
                              className="w-full bg-neutral-50 border border-neutral-200 focus:border-[#5D6F50] rounded-xl px-4 py-3 text-sm text-black font-sans focus:outline-none transition-colors"
                            />
                          </div>

                          {/* Message */}
                          <div className="space-y-1">
                            <label className="block text-xs uppercase tracking-wider text-black/40 font-semibold font-sans">
                              Your Message
                            </label>
                            <textarea
                              rows={4}
                              required
                              value={formData.message}
                              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                              placeholder="How can we assist you with land consulting or acquisition?"
                              className="w-full bg-neutral-50 border border-neutral-200 focus:border-[#5D6F50] rounded-xl px-4 py-3 text-sm text-black font-sans focus:outline-none transition-colors resize-none"
                            />
                          </div>

                          {/* Submit CTA */}
                          <button
                            type="submit"
                            className="w-full bg-[#5D6F50] hover:bg-[#4A5841] text-white font-sans text-sm uppercase tracking-widest py-3.5 rounded-[14px] font-semibold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:shadow"
                            id="contact-form-submit-btn"
                          >
                            <span>Send Message</span>
                            <Send size={14} />
                          </button>
                        </motion.form>
                      ) : (
                        <motion.div
                          key="success-card"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          className="text-center py-12 space-y-4"
                          id="contact-success-state"
                        >
                          <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center mx-auto shadow-sm">
                            <CheckCircle2 size={32} />
                          </div>
                          <h3 className="font-serif text-2xl text-black">Inquiry Submitted</h3>
                          <p className="font-sans text-sm text-black/50 max-w-xs mx-auto leading-relaxed">
                            Thank you for reaching out to Betz Company. Ryan Betz will review your inquiry details and get in touch with you shortly.
                          </p>
                          <button
                            onClick={() => setFormSubmitted(false)}
                            className="bg-neutral-100 hover:bg-neutral-200 text-black font-sans text-xs uppercase tracking-widest py-2 px-6 rounded-lg transition-colors cursor-pointer"
                          >
                            Submit Another Inquiry
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>
              </section>
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer setCurrentPage={setCurrentPage} />

      {/* Interactive Lightbox Modal for Current Projects */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectLightbox
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
            onInquire={handleInquireProject}
          />
        )}
      </AnimatePresence>

      {/* Dedicated Monogram AI Pill widget */}
      <AskAIWidget />
    </div>
  );
}
