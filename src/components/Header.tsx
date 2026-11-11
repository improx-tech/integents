"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronDown, 
  Menu, 
  X, 
  ArrowRight, 
  Globe, 
  Building2, 
  Layers, 
  Cpu, 
  Compass, 
  BrainCircuit,
  ShieldCheck,
  CheckCircle2
} from "lucide-react";
import { ENTERPRISE_PILLARS, GLOBAL_INDUSTRIES } from "@/lib/data";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [activePillarIndex, setActivePillarIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "Compass": return <Compass className="w-4 h-4 text-[#1e60b5]" />;
      case "BrainCircuit": return <BrainCircuit className="w-4 h-4 text-[#1e60b5]" />;
      case "Cpu": return <Cpu className="w-4 h-4 text-[#1e60b5]" />;
      case "Layers": return <Layers className="w-4 h-4 text-[#1e60b5]" />;
      default: return <Building2 className="w-4 h-4 text-[#1e60b5]" />;
    }
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/98 backdrop-blur-md py-3 shadow-[0_2px_12px_rgba(0,0,0,0.06)] border-b border-slate-200" 
          : "bg-white py-4 border-b border-slate-200/80"
      }`}
    >
      <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Official improX Logo & Integents Enterprise Lockup (Sitting naturally on pure white) */}
          <Link href="/" className="flex items-center space-x-3.5 group">
            <div className="flex items-center py-1">
              <img 
                src="/improx-logo.png" 
                alt="improX" 
                className="h-7 sm:h-8 w-auto object-contain transition-transform group-hover:scale-[1.02]"
              />
            </div>
            <div className="h-7 w-[1px] bg-slate-200 hidden sm:block" />
            <div className="flex flex-col justify-center">
              <div className="flex items-center space-x-2">
                <span className="text-lg sm:text-xl font-bold tracking-[0.12em] text-[#0a1128] font-serif group-hover:text-[#1e60b5] transition-colors">
                  INTEGENTS
                </span>
                <span className="text-[9px] font-mono uppercase tracking-widest text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded-xs border border-slate-200 hidden md:inline-block">
                  Global Practice
                </span>
              </div>
              <span className="text-[9px] font-mono tracking-[0.2em] text-slate-500 uppercase block -mt-0.5">
                Management Consulting & AI Systems
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            <Link 
              href="/" 
              className="px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-slate-700 hover:text-[#0a1128] transition-colors rounded-xs hover:bg-slate-50"
            >
              Overview
            </Link>

            {/* Capabilities Mega Menu Trigger */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveTab("capabilities")}
              onMouseLeave={() => setActiveTab(null)}
            >
              <button className="flex items-center space-x-1.5 px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-slate-700 hover:text-[#0a1128] transition-colors rounded-xs hover:bg-slate-50">
                <span>Practices</span>
                <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${activeTab === "capabilities" ? "rotate-180 text-[#1e60b5]" : ""}`} />
              </button>

              {/* Mega Menu Dropdown */}
              <AnimatePresence>
                {activeTab === "capabilities" && (
                  <motion.div 
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-full left-[-220px] w-[1160px] mt-2 bg-white rounded-md p-7 border border-slate-200 shadow-2xl shadow-slate-900/10 z-50 overflow-hidden"
                  >
                    <div className="grid grid-cols-12 gap-7">
                      
                      {/* Left: 5 Strategic Pillars Sidebar */}
                      <div className="col-span-4 bg-slate-50 rounded-sm p-3 border border-slate-200 space-y-1">
                        <div className="px-3 py-2 text-[10px] font-mono font-bold text-slate-600 uppercase tracking-widest border-b border-slate-200 mb-2">
                          Global Practice Matrix (05)
                        </div>
                        {ENTERPRISE_PILLARS.map((pillar, idx) => (
                          <button
                            key={pillar.slug}
                            onMouseEnter={() => setActivePillarIndex(idx)}
                            onClick={() => setActivePillarIndex(idx)}
                            className={`w-full text-left px-3.5 py-3 rounded-xs flex items-center justify-between transition-all duration-150 ${
                              activePillarIndex === idx
                                ? "bg-white border-l-2 border-[#1e60b5] text-[#0a1128] shadow-sm font-semibold"
                                : "text-slate-600 hover:bg-white/80 hover:text-slate-900"
                            }`}
                          >
                            <div className="flex items-center space-x-3">
                              <span className="font-mono text-[10px] text-slate-400 font-bold">0{idx + 1}</span>
                              {renderIcon(pillar.iconName)}
                              <span className="text-xs tracking-wide">{pillar.category}</span>
                            </div>
                            <ArrowRight className={`w-3.5 h-3.5 transition-opacity ${activePillarIndex === idx ? "opacity-100 text-[#1e60b5]" : "opacity-0"}`} />
                          </button>
                        ))}
                      </div>

                      {/* Right: Active Pillar Showcase & Subservices */}
                      <div className="col-span-8 flex flex-col justify-between pl-2">
                        <div>
                          <div className="flex items-start justify-between pb-4 border-b border-slate-200 mb-5">
                            <div>
                              <div className="flex items-center space-x-2">
                                <span className="font-mono text-[10px] text-[#1e60b5] uppercase tracking-widest font-bold">
                                  {ENTERPRISE_PILLARS[activePillarIndex].code || "PRACTICE"}
                                </span>
                                <span className="text-slate-300">&bull;</span>
                                <span className="text-xs text-slate-600 font-medium">
                                  Verified Impact: <strong className="text-slate-900 font-semibold">{ENTERPRISE_PILLARS[activePillarIndex].stat}</strong> {ENTERPRISE_PILLARS[activePillarIndex].statLabel}
                                </span>
                              </div>
                              <h3 className="text-xl font-serif font-bold text-[#0a1128] mt-1">
                                {ENTERPRISE_PILLARS[activePillarIndex].category}
                              </h3>
                              <p className="text-xs text-slate-600 mt-1 max-w-xl leading-relaxed">
                                {ENTERPRISE_PILLARS[activePillarIndex].tagline}
                              </p>
                            </div>
                            <Link 
                              href={`/services/${ENTERPRISE_PILLARS[activePillarIndex].slug}`} 
                              className="btn-heritage-secondary text-[11px] py-1.5 px-3.5 font-semibold tracking-wider whitespace-nowrap ml-4"
                            >
                              Explore Practice <ArrowRight className="w-3 h-3 ml-1.5" />
                            </Link>
                          </div>

                          {/* Sub-services Grid */}
                          <div className="grid grid-cols-2 gap-3">
                            {ENTERPRISE_PILLARS[activePillarIndex].items.map((subItem) => (
                              <Link
                                key={subItem.slug}
                                href={`/services/${ENTERPRISE_PILLARS[activePillarIndex].slug}/${subItem.slug}`}
                                className="group/sub bg-slate-50/70 hover:bg-slate-100/80 border border-slate-200/80 hover:border-slate-300 p-3 rounded-xs transition-all duration-150"
                              >
                                <div className="text-xs font-semibold text-slate-900 group-hover/sub:text-[#1e60b5] flex items-center justify-between">
                                  <span>{subItem.title}</span>
                                  <ArrowRight className="w-3 h-3 opacity-0 group-hover/sub:opacity-100 text-[#1e60b5] transition-opacity" />
                                </div>
                                <p className="text-[11px] text-slate-500 mt-1 line-clamp-1">
                                  {subItem.shortDesc}
                                </p>
                              </Link>
                            ))}
                          </div>
                        </div>

                        {/* Bottom Practice Lead Banner */}
                        <div className="pt-4 mt-5 border-t border-slate-200 flex items-center justify-between text-xs">
                          <div className="flex items-center space-x-2 text-slate-600">
                            <ShieldCheck className="w-4 h-4 text-[#1e60b5]" />
                            <span className="text-[11px]">
                              Lead Partner: <strong className="text-slate-900">{ENTERPRISE_PILLARS[activePillarIndex].leadName}</strong> ({ENTERPRISE_PILLARS[activePillarIndex].leadRole})
                            </span>
                          </div>
                          <Link href="/contact" className="text-xs font-semibold text-[#1e60b5] hover:underline flex items-center">
                            Request Partner Discussion &rarr;
                          </Link>
                        </div>
                      </div>

                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Industries Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveTab("industries")}
              onMouseLeave={() => setActiveTab(null)}
            >
              <button className="flex items-center space-x-1.5 px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-slate-700 hover:text-[#0a1128] transition-colors rounded-xs hover:bg-slate-50">
                <span>Sectors</span>
                <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${activeTab === "industries" ? "rotate-180 text-[#1e60b5]" : ""}`} />
              </button>

              <AnimatePresence>
                {activeTab === "industries" && (
                  <motion.div 
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-full left-0 w-[580px] mt-2 bg-white rounded-md p-5 border border-slate-200 shadow-2xl shadow-slate-900/10 z-50"
                  >
                    <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-3">
                      <span className="text-[10px] font-mono font-bold text-slate-600 uppercase tracking-widest">
                        Global Industry Practices
                      </span>
                      <Link href="/industries" className="text-[11px] font-sans font-semibold text-[#1e60b5] hover:underline">
                        View All Sectors &rarr;
                      </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-2.5">
                      {GLOBAL_INDUSTRIES.map((ind) => (
                        <Link 
                          key={ind.slug}
                          href={`/industries/${ind.slug}`}
                          className="group p-3 rounded-xs bg-slate-50 hover:bg-slate-100 border border-slate-200/80 hover:border-slate-300 transition-all duration-150"
                        >
                          <div className="text-xs font-semibold text-slate-900 group-hover:text-[#1e60b5] flex items-center justify-between">
                            <span>{ind.name}</span>
                            <span className="text-[10px] font-mono text-[#1e60b5] font-semibold">{ind.metric}</span>
                          </div>
                          <p className="text-[11px] text-slate-500 mt-1 line-clamp-1">{ind.desc}</p>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link 
              href="/case-studies" 
              className="px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-slate-700 hover:text-[#0a1128] transition-colors rounded-xs hover:bg-slate-50"
            >
              Case Studies
            </Link>

            <Link 
              href="/insights" 
              className="px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-slate-700 hover:text-[#0a1128] transition-colors rounded-xs hover:bg-slate-50"
            >
              Journal & Insights
            </Link>

            <Link 
              href="/about" 
              className="px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-slate-700 hover:text-[#0a1128] transition-colors rounded-xs hover:bg-slate-50"
            >
              The Firm
            </Link>
          </nav>

          {/* Right Action: Heritage Button */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link 
              href="/contact" 
              className="btn-heritage-primary text-xs py-2.5 px-5 font-semibold tracking-wider flex items-center space-x-2"
            >
              <span>Schedule Briefing</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Link>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex lg:hidden items-center space-x-2">
            <Link 
              href="/contact" 
              className="btn-heritage-primary px-3 py-1.5 text-[11px] uppercase tracking-wider font-semibold"
            >
              Briefing
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-950 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-slate-200 px-5 py-6 space-y-5 max-h-[85vh] overflow-y-auto shadow-xl"
          >
            <div className="space-y-2">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm font-semibold uppercase tracking-wider py-2 text-slate-900 border-b border-slate-100"
              >
                Overview
              </Link>
              <Link
                href="/services"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm font-semibold uppercase tracking-wider py-2 text-slate-900 border-b border-slate-100"
              >
                Practices (5 Pillars)
              </Link>
              <Link
                href="/industries"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm font-semibold uppercase tracking-wider py-2 text-slate-900 border-b border-slate-100"
              >
                Industry Sectors
              </Link>
              <Link
                href="/case-studies"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm font-semibold uppercase tracking-wider py-2 text-slate-900 border-b border-slate-100"
              >
                Case Studies & Impact
              </Link>
              <Link
                href="/insights"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm font-semibold uppercase tracking-wider py-2 text-slate-900 border-b border-slate-100"
              >
                Executive Monograph & Journal
              </Link>
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm font-semibold uppercase tracking-wider py-2 text-slate-900 border-b border-slate-100"
              >
                About The Firm (50-Year Heritage)
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm font-semibold uppercase tracking-wider py-2 text-[#1e60b5] font-bold"
              >
                Client Engagement Desk
              </Link>
            </div>

            <div className="pt-4 border-t border-slate-200 space-y-3">
              <div className="text-[11px] font-mono text-slate-500">
                GLOBAL OFFICES &bull; NYC &bull; LDN &bull; ZRH &bull; SGP &bull; PNQ
              </div>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-heritage-primary w-full py-3 text-xs uppercase tracking-wider text-center block font-semibold"
              >
                Schedule Executive Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
