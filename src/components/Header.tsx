"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronDown, 
  Menu, 
  X, 
  ArrowRight, 
  Building2, 
  Layers, 
  Cpu, 
  Compass, 
  BrainCircuit,
  ShieldCheck,
  Search,
  ExternalLink,
  BookOpen,
  MapPin,
  Sparkles,
  TrendingUp,
  Activity,
  Landmark,
  Factory,
  ShoppingBag,
  Zap,
  Radio,
  Globe
} from "lucide-react";
import { ENTERPRISE_PILLARS, GLOBAL_INDUSTRIES, FEATURED_INSIGHTS, FEATURED_CASE_STUDIES } from "@/lib/data";

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<"practices" | "sectors" | null>(null);
  const [activePillarIndex, setActivePillarIndex] = useState(0);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  
  // Mobile accordion states
  const [mobilePracticesOpen, setMobilePracticesOpen] = useState(false);
  const [mobileSectorsOpen, setMobileSectorsOpen] = useState(false);

  const headerRef = useRef<HTMLElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Close menus on route change
  useEffect(() => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Keyboard shortcut (Cmd+K / Ctrl+K) for Dossier Search & Escape to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setActiveDropdown(null);
        setSearchOpen(false);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Focus search input when opened
  useEffect(() => {
    if (searchOpen) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 100);
    }
  }, [searchOpen]);

  const renderPillarIcon = (iconName: string) => {
    switch (iconName) {
      case "Compass": return <Compass className="w-4 h-4 text-[#1e60b5]" />;
      case "BrainCircuit": return <BrainCircuit className="w-4 h-4 text-[#1e60b5]" />;
      case "Cpu": return <Cpu className="w-4 h-4 text-[#1e60b5]" />;
      case "Layers": return <Layers className="w-4 h-4 text-[#1e60b5]" />;
      default: return <Building2 className="w-4 h-4 text-[#1e60b5]" />;
    }
  };

  const renderSectorIcon = (iconName: string) => {
    switch (iconName) {
      case "Landmark": return <Landmark className="w-4 h-4 text-[#1e60b5]" />;
      case "Activity": return <Activity className="w-4 h-4 text-[#1e60b5]" />;
      case "Factory": return <Factory className="w-4 h-4 text-[#1e60b5]" />;
      case "ShoppingBag": return <ShoppingBag className="w-4 h-4 text-[#1e60b5]" />;
      case "Zap": return <Zap className="w-4 h-4 text-[#1e60b5]" />;
      case "Radio": return <Radio className="w-4 h-4 text-[#1e60b5]" />;
      default: return <Globe className="w-4 h-4 text-[#1e60b5]" />;
    }
  };

  // Filter items for Dossier Search
  const filteredPractices = ENTERPRISE_PILLARS.filter(p => 
    p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.items.some(item => item.title.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const filteredSectors = GLOBAL_INDUSTRIES.filter(s => 
    s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.desc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredInsights = FEATURED_INSIGHTS.filter(i => 
    i.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    i.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const activePillar = ENTERPRISE_PILLARS[activePillarIndex];

  return (
    <>
      {/* =========================================================================
          MAIN EXECUTIVE HEADER BAR
          ========================================================================= */}
      <header
        ref={headerRef}
        onMouseLeave={() => setActiveDropdown(null)}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md py-2.5 sm:py-3 shadow-[0_4px_24px_rgba(10,17,40,0.06)] border-b border-slate-200/90"
            : "bg-white py-3.5 sm:py-4 border-b border-slate-200/80"
        }`}
      >
        <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* -------------------------------------------------------------
                1. BRAND IDENTITY LOCKUP (Pure White Background, Borderless Logo)
                ------------------------------------------------------------- */}
            <Link 
              href="/" 
              className="flex items-center space-x-3.5 group focus:outline-none"
              onClick={() => setActiveDropdown(null)}
            >
              <div className="flex items-center py-0.5">
                <img
                  src="/improx-logo.png"
                  alt="improX"
                  className="h-7 sm:h-8 w-auto object-contain transition-transform group-hover:scale-[1.02]"
                />
              </div>

              {/* Stately Hairline Divider */}
              <div className="h-7 w-[1px] bg-slate-200 hidden sm:block" />

              {/* INTEGENTS Fiduciary Lockup */}
              <div className="flex flex-col justify-center">
                <div className="flex items-center space-x-2">
                  <span className="text-[17px] sm:text-[19px] font-bold tracking-[0.16em] text-[#0a1128] font-serif group-hover:text-[#1e60b5] transition-colors leading-tight">
                    INTEGENTS
                  </span>
                  <span className="text-[8.5px] font-mono uppercase tracking-widest text-[#1e60b5] bg-blue-50/80 px-1.5 py-0.5 rounded-xs border border-blue-200/60 font-semibold hidden md:inline-block">
                    GLOBAL ADVISORY
                  </span>
                </div>
                <span className="text-[8.5px] font-mono tracking-[0.22em] text-slate-500 uppercase block leading-tight mt-0.5">
                  Management Consulting & AI Systems
                </span>
              </div>
            </Link>

            {/* -------------------------------------------------------------
                2. DESKTOP PRIMARY NAVIGATION
                ------------------------------------------------------------- */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              
              {/* Overview */}
              <Link
                href="/"
                className={`px-3 py-2 text-xs font-semibold uppercase tracking-wider transition-colors rounded-xs hover:text-[#0a1128] hover:bg-slate-50 ${
                  pathname === "/" ? "text-[#1e60b5] font-bold" : "text-slate-700"
                }`}
              >
                Overview
              </Link>

              {/* Practices Dropdown Trigger */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("practices")}
              >
                <button
                  onClick={() => setActiveDropdown(activeDropdown === "practices" ? null : "practices")}
                  className={`flex items-center space-x-1.5 px-3 py-2 text-xs font-semibold uppercase tracking-wider transition-colors rounded-xs hover:text-[#0a1128] hover:bg-slate-50 ${
                    activeDropdown === "practices" || pathname.startsWith("/services")
                      ? "text-[#1e60b5] font-bold bg-blue-50/50"
                      : "text-slate-700"
                  }`}
                  aria-expanded={activeDropdown === "practices"}
                >
                  <span>Practices</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${
                      activeDropdown === "practices" ? "rotate-180 text-[#1e60b5]" : ""
                    }`}
                  />
                </button>
              </div>

              {/* Sectors Dropdown Trigger */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("sectors")}
              >
                <button
                  onClick={() => setActiveDropdown(activeDropdown === "sectors" ? null : "sectors")}
                  className={`flex items-center space-x-1.5 px-3 py-2 text-xs font-semibold uppercase tracking-wider transition-colors rounded-xs hover:text-[#0a1128] hover:bg-slate-50 ${
                    activeDropdown === "sectors" || pathname.startsWith("/industries")
                      ? "text-[#1e60b5] font-bold bg-blue-50/50"
                      : "text-slate-700"
                  }`}
                  aria-expanded={activeDropdown === "sectors"}
                >
                  <span>Sectors</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${
                      activeDropdown === "sectors" ? "rotate-180 text-[#1e60b5]" : ""
                    }`}
                  />
                </button>
              </div>

              {/* Case Studies */}
              <Link
                href="/case-studies"
                className={`flex items-center space-x-1.5 px-3 py-2 text-xs font-semibold uppercase tracking-wider transition-colors rounded-xs hover:text-[#0a1128] hover:bg-slate-50 ${
                  pathname.startsWith("/case-studies") ? "text-[#1e60b5] font-bold" : "text-slate-700"
                }`}
              >
                <span>Case Studies</span>
                <span className="text-[9px] font-mono text-emerald-700 bg-emerald-50 border border-emerald-200 px-1.5 py-0.2 rounded-xs font-semibold">
                  Audited
                </span>
              </Link>

              {/* Journal & Insights */}
              <Link
                href="/insights"
                className={`px-3 py-2 text-xs font-semibold uppercase tracking-wider transition-colors rounded-xs hover:text-[#0a1128] hover:bg-slate-50 ${
                  pathname.startsWith("/insights") ? "text-[#1e60b5] font-bold" : "text-slate-700"
                }`}
              >
                Journal & Insights
              </Link>

              {/* The Firm */}
              <Link
                href="/about"
                className={`px-3 py-2 text-xs font-semibold uppercase tracking-wider transition-colors rounded-xs hover:text-[#0a1128] hover:bg-slate-50 ${
                  pathname === "/about" ? "text-[#1e60b5] font-bold" : "text-slate-700"
                }`}
              >
                The Firm
              </Link>

            </nav>

            {/* -------------------------------------------------------------
                3. RIGHT ACTION & FIDUCIARY UTILITY CLUSTER
                ------------------------------------------------------------- */}
            <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
              
              {/* Quick Dossier Search Trigger */}
              <button
                onClick={() => setSearchOpen(true)}
                className="flex items-center space-x-2 px-3 py-2 rounded-xs border border-slate-200 bg-[#fafaf9] hover:bg-white hover:border-slate-300 transition-all text-slate-600 hover:text-slate-900 group"
                title="Search Practices, Sectors & Research (Cmd+K)"
              >
                <Search className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#1e60b5] transition-colors" />
                <span className="text-xs font-medium text-slate-500 group-hover:text-slate-800">
                  Quick Dossier
                </span>
                <kbd className="text-[9px] font-mono bg-white border border-slate-200 px-1.5 py-0.5 rounded-xs text-slate-400 group-hover:text-slate-600">
                  ⌘K
                </kbd>
              </button>

              {/* Global Hubs Availability Ticker */}
              <div className="hidden xl:flex items-center space-x-2 text-[10px] font-mono text-slate-500 bg-slate-50 px-2.5 py-1.5 rounded-xs border border-slate-200">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="tracking-wider uppercase">NY &bull; LDN &bull; SGP</span>
              </div>

              {/* Primary Executive Briefing CTA */}
              <Link
                href="/contact"
                className="btn-heritage-primary text-xs py-2.5 px-5 font-semibold tracking-wider flex items-center space-x-2 shadow-xs hover:shadow-md"
              >
                <span>Schedule Briefing</span>
                <ArrowRight className="w-3.5 h-3.5 ml-0.5" />
              </Link>

            </div>

            {/* -------------------------------------------------------------
                4. MOBILE CONTROLS (Search & Drawer Toggle)
                ------------------------------------------------------------- */}
            <div className="flex lg:hidden items-center space-x-2">
              <button
                onClick={() => setSearchOpen(true)}
                className="p-2 text-slate-600 hover:text-slate-900 focus:outline-none"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              
              <Link
                href="/contact"
                className="btn-heritage-primary px-3 py-1.5 text-[11px] uppercase tracking-wider font-semibold"
              >
                Briefing
              </Link>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-700 hover:text-slate-950 focus:outline-none rounded-xs hover:bg-slate-100"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* =========================================================================
            DESKTOP MEGA MENU: PRACTICES (SPLIT 3-COLUMN ARCHITECTURAL DOSSIER)
            ========================================================================= */}
        <AnimatePresence>
          {activeDropdown === "practices" && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="absolute top-full left-0 w-full bg-white border-b border-slate-200/90 shadow-[0_25px_50px_-12px_rgba(10,17,40,0.18)] z-40 overflow-hidden"
              onMouseEnter={() => setActiveDropdown("practices")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
                
                {/* Mega Menu Top Meta Ribbon */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-6 text-xs font-mono">
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 rounded-full bg-[#1e60b5]"></span>
                    <span className="font-bold text-[#0a1128] uppercase tracking-wider">
                      CAPABILITY ARCHITECTURE // 5 STRATEGIC PRACTICES &bull; 25 SPECIALIZATIONS
                    </span>
                  </div>
                  <Link
                    href="/services"
                    className="text-[#1e60b5] hover:underline font-semibold flex items-center space-x-1 uppercase tracking-wider text-[11px]"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <span>View Complete Practice Directory</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Link>
                </div>

                {/* 3-Column Split Dossier */}
                <div className="grid grid-cols-12 gap-8 items-stretch">
                  
                  {/* Column 1: 5 Strategic Pillar Tabs (3 Cols) */}
                  <div className="col-span-3 space-y-1.5 border-r border-slate-200 pr-6">
                    <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-bold mb-3 px-3">
                      Select Practice
                    </div>
                    {ENTERPRISE_PILLARS.map((pillar, idx) => (
                      <button
                        key={pillar.slug}
                        onMouseEnter={() => setActivePillarIndex(idx)}
                        onClick={() => setActivePillarIndex(idx)}
                        className={`w-full text-left p-3.5 rounded-xs transition-all flex items-center justify-between ${
                          activePillarIndex === idx
                            ? "bg-[#fafaf9] border-l-4 border-l-[#1e60b5] border-t border-r border-b border-slate-200 shadow-xs font-semibold"
                            : "text-slate-600 hover:bg-slate-50 hover:text-slate-900 border border-transparent"
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <span className="font-mono text-[10px] text-slate-400 font-bold">0{idx + 1}</span>
                          {renderPillarIcon(pillar.iconName)}
                          <span className="text-xs text-slate-900 tracking-wide font-serif font-bold">
                            {pillar.category}
                          </span>
                        </div>
                        <ArrowRight
                          className={`w-3.5 h-3.5 transition-opacity ${
                            activePillarIndex === idx ? "opacity-100 text-[#1e60b5]" : "opacity-0"
                          }`}
                        />
                      </button>
                    ))}

                    <div className="pt-4 mt-4 border-t border-slate-200 px-3">
                      <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                        FIDUCIARY GUARANTEE
                      </div>
                      <p className="text-[11px] text-slate-600 mt-1 font-light leading-relaxed">
                        100% Client IP transfer upon milestone verification. Zero vendor lock-in.
                      </p>
                    </div>
                  </div>

                  {/* Column 2: Active Pillar Spotlight with Bespoke Editorial Photography (5 Cols) */}
                  <div className="col-span-5 border-r border-slate-200 pr-8 flex flex-col justify-between">
                    <div>
                      {/* Pillar Meta */}
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#1e60b5] bg-blue-50 px-2 py-0.5 rounded-xs border border-blue-200/60">
                          {activePillar.code || "CAP-01"} // PRACTICE SPOTLIGHT
                        </span>
                        <span className="text-xs font-mono font-semibold text-slate-900">
                          {activePillar.stat} <span className="text-slate-500 font-normal">{activePillar.statLabel}</span>
                        </span>
                      </div>

                      <h3 className="text-xl font-serif font-bold text-[#0a1128] mb-2">
                        {activePillar.category}
                      </h3>
                      <p className="text-xs text-slate-600 font-light leading-relaxed mb-4">
                        {activePillar.tagline}
                      </p>

                      {/* Editorial Photograph */}
                      <div className="editorial-photo-frame aspect-[16/9] rounded-xs relative mb-4 overflow-hidden border border-slate-200">
                        <img
                          src={activePillar.image}
                          alt={activePillar.category}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1128]/80 via-transparent to-transparent"></div>
                        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-[11px] font-mono">
                          <span>Lead: <strong className="text-white">{activePillar.leadName}</strong></span>
                          <span className="text-slate-300">{activePillar.leadRole}</span>
                        </div>
                      </div>
                    </div>

                    {/* Bottom CTA for Practice */}
                    <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
                      <Link
                        href={`/services/${activePillar.slug}`}
                        onClick={() => setActiveDropdown(null)}
                        className="btn-heritage-primary text-xs py-2 px-4 font-semibold tracking-wider flex items-center space-x-2"
                      >
                        <span>Explore Full Practice Dossier</span>
                        <ArrowRight className="w-3.5 h-3.5 ml-1" />
                      </Link>
                      <Link
                        href="/contact"
                        onClick={() => setActiveDropdown(null)}
                        className="text-xs font-semibold text-[#1e60b5] hover:underline"
                      >
                        Engage Practice Partner &rarr;
                      </Link>
                    </div>
                  </div>

                  {/* Column 3: Specialized Capabilities Grid (4 Cols) */}
                  <div className="col-span-4 flex flex-col justify-between">
                    <div>
                      <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-bold mb-3">
                        6 Specialized Capabilities
                      </div>

                      <div className="space-y-2">
                        {activePillar.items.map((item) => (
                          <Link
                            key={item.slug}
                            href={`/services/${activePillar.slug}/${item.slug}`}
                            onClick={() => setActiveDropdown(null)}
                            className="group/cap block p-2.5 rounded-xs bg-[#fafaf9] hover:bg-blue-50/50 border border-slate-200/80 hover:border-blue-200 transition-all"
                          >
                            <div className="text-xs font-semibold text-slate-900 group-hover/cap:text-[#1e60b5] flex items-center justify-between">
                              <span>{item.title}</span>
                              <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover/cap:opacity-100 text-[#1e60b5] transition-opacity" />
                            </div>
                            <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-1 font-light">
                              {item.shortDesc}
                            </p>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Accreditation */}
                    <div className="pt-3 mt-4 border-t border-slate-200 flex items-center space-x-2 text-[10px] font-mono text-slate-500">
                      <ShieldCheck className="w-4 h-4 text-[#1e60b5]" />
                      <span>SEC / FINRA / HIPAA / ISO-27001 Deterministic Rails</span>
                    </div>
                  </div>

                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* =========================================================================
            DESKTOP MEGA MENU: SECTORS (6-SECTOR ARCHITECTURAL PORTFOLIO)
            ========================================================================= */}
        <AnimatePresence>
          {activeDropdown === "sectors" && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="absolute top-full left-0 w-full bg-white border-b border-slate-200/90 shadow-[0_25px_50px_-12px_rgba(10,17,40,0.18)] z-40 overflow-hidden"
              onMouseEnter={() => setActiveDropdown("sectors")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
                
                {/* Mega Menu Top Meta Ribbon */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-6 text-xs font-mono">
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 rounded-full bg-[#1e60b5]"></span>
                    <span className="font-bold text-[#0a1128] uppercase tracking-wider">
                      REGULATED INDUSTRY PRACTICES // 6 GLOBAL ECONOMIC DOMAINS
                    </span>
                  </div>
                  <Link
                    href="/industries"
                    className="text-[#1e60b5] hover:underline font-semibold flex items-center space-x-1 uppercase tracking-wider text-[11px]"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <span>View All Industry Sectors</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Link>
                </div>

                {/* 6 Industry Cards Grid (3x2) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {GLOBAL_INDUSTRIES.map((ind) => (
                    <Link
                      key={ind.slug}
                      href={`/industries/${ind.slug}`}
                      onClick={() => setActiveDropdown(null)}
                      className="group bg-[#fafaf9] hover:bg-white border border-slate-200 hover:border-slate-300 rounded-xs overflow-hidden transition-all duration-200 shadow-xs hover:shadow-md flex flex-col justify-between"
                    >
                      <div>
                        {/* Sector Image Thumbnail */}
                        <div className="aspect-[16/9] relative overflow-hidden">
                          <img
                            src={ind.image}
                            alt={ind.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute top-2.5 left-2.5">
                            <span className="text-[9px] font-mono font-bold bg-white/95 text-[#0a1128] px-2 py-0.5 rounded-xs border border-slate-200 shadow-xs">
                              {ind.code}
                            </span>
                          </div>
                          <div className="absolute bottom-2.5 right-2.5">
                            <span className="text-[10px] font-mono text-white bg-[#0a1128]/85 backdrop-blur-xs px-2 py-0.5 rounded-xs font-semibold">
                              {ind.metric}
                            </span>
                          </div>
                        </div>

                        {/* Text Content */}
                        <div className="p-4 space-y-1.5">
                          <div className="flex items-center space-x-2">
                            {renderSectorIcon(ind.iconName)}
                            <h4 className="text-sm font-serif font-bold text-[#0a1128] group-hover:text-[#1e60b5] transition-colors">
                              {ind.name}
                            </h4>
                          </div>
                          <p className="text-[11px] text-slate-600 line-clamp-2 font-light leading-relaxed">
                            {ind.desc}
                          </p>
                        </div>
                      </div>

                      {/* Footer Link */}
                      <div className="p-4 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-[#1e60b5] font-semibold">
                        <span>Access Sector Dossier</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  ))}
                </div>

                {/* Bottom Assurance Banner */}
                <div className="pt-6 mt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-mono gap-3">
                  <span>Advising 38 of the Global Fortune 500 across complex multi-jurisdiction environments.</span>
                  <Link
                    href="/contact"
                    onClick={() => setActiveDropdown(null)}
                    className="text-[#1e60b5] font-semibold hover:underline flex items-center"
                  >
                    <span>Request Industry Specific Case Briefing</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Link>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </header>

      {/* =========================================================================
          EXECUTIVE COMMAND PALETTE / QUICK DOSSIER SEARCH OVERLAY (CMD+K)
          ========================================================================= */}
      <AnimatePresence>
        {searchOpen && (
          <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 sm:px-6">
            
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSearchOpen(false)}
              className="fixed inset-0 bg-[#0a1128]/60 backdrop-blur-sm"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: -10 }}
              transition={{ duration: 0.15 }}
              className="relative w-full max-w-3xl bg-white rounded-md border border-slate-200 shadow-2xl overflow-hidden z-10"
            >
              {/* Top Search Bar */}
              <div className="flex items-center px-4 py-3.5 border-b border-slate-200 bg-slate-50/50">
                <Search className="w-4 h-4 text-[#1e60b5] mr-3" />
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search practices, capabilities, industry sectors, case studies, or monographs..."
                  className="w-full bg-transparent text-sm text-slate-900 placeholder-slate-400 focus:outline-none"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="p-1 text-slate-400 hover:text-slate-600 text-xs font-mono"
                  >
                    Clear
                  </button>
                )}
                <button
                  onClick={() => setSearchOpen(false)}
                  className="ml-3 p-1 text-slate-400 hover:text-slate-600 text-xs font-mono border border-slate-200 rounded-xs px-1.5 py-0.5 bg-white"
                >
                  ESC
                </button>
              </div>

              {/* Search Results Area */}
              <div className="max-h-[60vh] overflow-y-auto p-4 space-y-6">
                
                {/* 1. Practices Results */}
                {filteredPractices.length > 0 && (
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold mb-2 px-2">
                      Practices & Specializations ({filteredPractices.length})
                    </div>
                    <div className="space-y-1">
                      {filteredPractices.map((p) => (
                        <Link
                          key={p.slug}
                          href={`/services/${p.slug}`}
                          onClick={() => setSearchOpen(false)}
                          className="flex items-center justify-between p-2.5 rounded-xs hover:bg-slate-50 transition-colors group"
                        >
                          <div className="flex items-center space-x-3">
                            {renderPillarIcon(p.iconName)}
                            <div>
                              <div className="text-xs font-bold text-slate-900 group-hover:text-[#1e60b5]">
                                {p.category}
                              </div>
                              <div className="text-[11px] text-slate-500 font-light">
                                {p.tagline}
                              </div>
                            </div>
                          </div>
                          <span className="text-[10px] font-mono text-[#1e60b5] font-semibold">
                            {p.code} &rarr;
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* 2. Industry Sectors Results */}
                {filteredSectors.length > 0 && (
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold mb-2 px-2">
                      Industry Sectors ({filteredSectors.length})
                    </div>
                    <div className="space-y-1">
                      {filteredSectors.map((s) => (
                        <Link
                          key={s.slug}
                          href={`/industries/${s.slug}`}
                          onClick={() => setSearchOpen(false)}
                          className="flex items-center justify-between p-2.5 rounded-xs hover:bg-slate-50 transition-colors group"
                        >
                          <div className="flex items-center space-x-3">
                            {renderSectorIcon(s.iconName)}
                            <div>
                              <div className="text-xs font-bold text-slate-900 group-hover:text-[#1e60b5]">
                                {s.name}
                              </div>
                              <div className="text-[11px] text-slate-500 font-light">
                                {s.desc}
                              </div>
                            </div>
                          </div>
                          <span className="text-[10px] font-mono text-[#1e60b5] font-semibold">
                            {s.metric} &rarr;
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* 3. Research Articles & Monographs */}
                {filteredInsights.length > 0 && (
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold mb-2 px-2">
                      Research Monograph & Whitepapers ({filteredInsights.length})
                    </div>
                    <div className="space-y-1">
                      {filteredInsights.map((i) => (
                        <Link
                          key={i.slug}
                          href={`/insights/${i.slug}`}
                          onClick={() => setSearchOpen(false)}
                          className="flex items-center justify-between p-2.5 rounded-xs hover:bg-slate-50 transition-colors group"
                        >
                          <div className="flex items-center space-x-3">
                            <BookOpen className="w-4 h-4 text-[#1e60b5]" />
                            <div>
                              <div className="text-xs font-bold text-slate-900 group-hover:text-[#1e60b5]">
                                {i.title}
                              </div>
                              <div className="text-[11px] text-slate-500 font-light">
                                {i.category} &bull; {i.readTime}
                              </div>
                            </div>
                          </div>
                          <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#1e60b5]" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Empty State */}
                {filteredPractices.length === 0 && filteredSectors.length === 0 && filteredInsights.length === 0 && (
                  <div className="text-center py-10 space-y-2">
                    <p className="text-sm text-slate-600">No dossiers found matching &ldquo;{searchQuery}&rdquo;</p>
                    <p className="text-xs text-slate-400 font-mono">Try searching &ldquo;AI&rdquo;, &ldquo;Supply Chain&rdquo;, &ldquo;Banking&rdquo;, or &ldquo;CFO&rdquo;</p>
                  </div>
                )}

              </div>

              {/* Modal Footer */}
              <div className="px-4 py-3 bg-[#fafaf9] border-t border-slate-200 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Improx Integents Executive Knowledge Index</span>
                <Link
                  href="/contact"
                  onClick={() => setSearchOpen(false)}
                  className="text-[#1e60b5] font-semibold hover:underline"
                >
                  Direct Partner Inquiry &rarr;
                </Link>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* =========================================================================
          MOBILE SLIDING DRAWER MENU
          ========================================================================= */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed top-[65px] left-0 w-full bg-white border-b border-slate-200 shadow-2xl z-40 max-h-[calc(100vh-65px)] overflow-y-auto"
          >
            <div className="px-5 py-6 space-y-6">
              
              {/* Quick Search in Mobile */}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setSearchOpen(true);
                }}
                className="w-full flex items-center space-x-3 p-3 bg-slate-50 border border-slate-200 rounded-xs text-xs text-slate-500"
              >
                <Search className="w-4 h-4 text-[#1e60b5]" />
                <span>Search practices, sectors, whitepapers...</span>
              </button>

              {/* Navigation Links */}
              <div className="space-y-1 border-t border-slate-100 pt-3">
                
                {/* Overview */}
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-sm font-semibold uppercase tracking-wider py-3 text-slate-900 border-b border-slate-100"
                >
                  Overview
                </Link>

                {/* Practices Accordion */}
                <div className="border-b border-slate-100">
                  <button
                    onClick={() => setMobilePracticesOpen(!mobilePracticesOpen)}
                    className="w-full flex items-center justify-between text-sm font-semibold uppercase tracking-wider py-3 text-slate-900 text-left"
                  >
                    <span>Practices (5 Pillars)</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobilePracticesOpen ? "rotate-180 text-[#1e60b5]" : ""}`} />
                  </button>

                  <AnimatePresence>
                    {mobilePracticesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="pl-3 pb-3 space-y-2"
                      >
                        {ENTERPRISE_PILLARS.map((pillar) => (
                          <Link
                            key={pillar.slug}
                            href={`/services/${pillar.slug}`}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block text-xs text-slate-700 py-1.5 hover:text-[#1e60b5] font-medium"
                          >
                            &bull; {pillar.category}
                          </Link>
                        ))}
                        <Link
                          href="/services"
                          onClick={() => setMobileMenuOpen(false)}
                          className="block text-xs text-[#1e60b5] font-semibold pt-1"
                        >
                          All Practices Directory &rarr;
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Sectors Accordion */}
                <div className="border-b border-slate-100">
                  <button
                    onClick={() => setMobileSectorsOpen(!mobileSectorsOpen)}
                    className="w-full flex items-center justify-between text-sm font-semibold uppercase tracking-wider py-3 text-slate-900 text-left"
                  >
                    <span>Industry Sectors</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileSectorsOpen ? "rotate-180 text-[#1e60b5]" : ""}`} />
                  </button>

                  <AnimatePresence>
                    {mobileSectorsOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="pl-3 pb-3 space-y-2"
                      >
                        {GLOBAL_INDUSTRIES.map((ind) => (
                          <Link
                            key={ind.slug}
                            href={`/industries/${ind.slug}`}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block text-xs text-slate-700 py-1.5 hover:text-[#1e60b5] font-medium"
                          >
                            &bull; {ind.name}
                          </Link>
                        ))}
                        <Link
                          href="/industries"
                          onClick={() => setMobileMenuOpen(false)}
                          className="block text-xs text-[#1e60b5] font-semibold pt-1"
                        >
                          All Sectors Directory &rarr;
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Case Studies */}
                <Link
                  href="/case-studies"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-sm font-semibold uppercase tracking-wider py-3 text-slate-900 border-b border-slate-100"
                >
                  Case Studies & Outcomes
                </Link>

                {/* Insights */}
                <Link
                  href="/insights"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-sm font-semibold uppercase tracking-wider py-3 text-slate-900 border-b border-slate-100"
                >
                  Executive Monograph & Journal
                </Link>

                {/* The Firm */}
                <Link
                  href="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-sm font-semibold uppercase tracking-wider py-3 text-slate-900 border-b border-slate-100"
                >
                  The Firm (50-Year Heritage)
                </Link>

                {/* Contact */}
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-sm font-semibold uppercase tracking-wider py-3 text-[#1e60b5] font-bold"
                >
                  Client Advisory Desk
                </Link>

              </div>

              {/* Global Offices */}
              <div className="pt-4 border-t border-slate-200 space-y-3">
                <div className="flex items-center space-x-2 text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                  <MapPin className="w-3.5 h-3.5 text-[#1e60b5]" />
                  <span>NEW YORK &bull; LONDON &bull; ZURICH &bull; SINGAPORE &bull; PUNE</span>
                </div>

                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn-heritage-primary w-full py-3.5 text-xs uppercase tracking-wider text-center block font-semibold"
                >
                  Schedule Executive Briefing &rarr;
                </Link>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
