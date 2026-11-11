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
  Search,
  Globe,
  Compass, 
  BrainCircuit, 
  Cpu, 
  Layers, 
  Building2,
  Landmark,
  Activity,
  Factory,
  ShoppingBag,
  Zap,
  Radio,
  BookOpen
} from "lucide-react";
import { ENTERPRISE_PILLARS, GLOBAL_INDUSTRIES, FEATURED_INSIGHTS } from "@/lib/data";

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<"practices" | "industries" | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  
  // Mobile accordion state
  const [mobilePracticesOpen, setMobilePracticesOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);

  const headerRef = useRef<HTMLElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Close menus on route navigation
  useEffect(() => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  // Scroll listener for sticky backdrop
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Keyboard shortcut (Cmd+K / Ctrl+K) for search & ESC to close
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

  // Focus search input on open
  useEffect(() => {
    if (searchOpen) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 100);
    }
  }, [searchOpen]);

  // Filter items for search modal
  const filteredPractices = ENTERPRISE_PILLARS.filter(p => 
    p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.tagline.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredIndustries = GLOBAL_INDUSTRIES.filter(s => 
    s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.desc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredInsights = FEATURED_INSIGHTS.filter(i => 
    i.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    i.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      {/* =========================================================================
          MINIMALIST LUXURY HEADER BAR (MCKINSEY / BCG HERITAGE TIER)
          ========================================================================= */}
      <header
        ref={headerRef}
        onMouseLeave={() => setActiveDropdown(null)}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-200 ${
          isScrolled
            ? "bg-white/98 backdrop-blur-md py-3 shadow-[0_2px_16px_rgba(0,0,0,0.06)] border-b border-slate-200"
            : "bg-white py-4 border-b border-slate-200/90"
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between">
            
            {/* -------------------------------------------------------------
                1. TIMELESS BRAND LOCKUP (Uncluttered, Confident, Pure White)
                ------------------------------------------------------------- */}
            <Link 
              href="/" 
              className="flex items-center space-x-3.5 group focus:outline-none"
              onClick={() => setActiveDropdown(null)}
            >
              <img
                src="/improx-logo.png"
                alt="improX"
                className="h-7 sm:h-8 w-auto object-contain transition-opacity group-hover:opacity-90"
              />
              <div className="h-6 w-[1px] bg-slate-300 hidden sm:block" />
              <span className="text-lg sm:text-[20px] font-serif font-bold tracking-[0.16em] text-[#0a1128] group-hover:text-[#1e60b5] transition-colors">
                INTEGENTS
              </span>
            </Link>

            {/* -------------------------------------------------------------
                2. CLEAN, SPACIOUS EDITORIAL NAVIGATION
                ------------------------------------------------------------- */}
            <nav className="hidden lg:flex items-center space-x-8 xl:space-x-10">
              
              {/* Practices Dropdown Trigger */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown("practices")}
              >
                <button
                  onClick={() => setActiveDropdown(activeDropdown === "practices" ? null : "practices")}
                  className={`flex items-center space-x-1.5 text-[13px] font-semibold tracking-wide uppercase transition-colors py-2 ${
                    activeDropdown === "practices" || pathname.startsWith("/services")
                      ? "text-[#1e60b5]"
                      : "text-slate-700 hover:text-[#0a1128]"
                  }`}
                >
                  <span>Practices</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === "practices" ? "rotate-180 text-[#1e60b5]" : "text-slate-400"}`} />
                </button>
              </div>

              {/* Industries Dropdown Trigger */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown("industries")}
              >
                <button
                  onClick={() => setActiveDropdown(activeDropdown === "industries" ? null : "industries")}
                  className={`flex items-center space-x-1.5 text-[13px] font-semibold tracking-wide uppercase transition-colors py-2 ${
                    activeDropdown === "industries" || pathname.startsWith("/industries")
                      ? "text-[#1e60b5]"
                      : "text-slate-700 hover:text-[#0a1128]"
                  }`}
                >
                  <span>Industries</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === "industries" ? "rotate-180 text-[#1e60b5]" : "text-slate-400"}`} />
                </button>
              </div>

              {/* Case Studies */}
              <Link
                href="/case-studies"
                className={`text-[13px] font-semibold tracking-wide uppercase transition-colors py-2 ${
                  pathname.startsWith("/case-studies")
                    ? "text-[#1e60b5]"
                    : "text-slate-700 hover:text-[#0a1128]"
                }`}
              >
                Case Studies
              </Link>

              {/* Insights */}
              <Link
                href="/insights"
                className={`text-[13px] font-semibold tracking-wide uppercase transition-colors py-2 ${
                  pathname.startsWith("/insights")
                    ? "text-[#1e60b5]"
                    : "text-slate-700 hover:text-[#0a1128]"
                }`}
              >
                Insights
              </Link>

              {/* About The Firm */}
              <Link
                href="/about"
                className={`text-[13px] font-semibold tracking-wide uppercase transition-colors py-2 ${
                  pathname === "/about"
                    ? "text-[#1e60b5]"
                    : "text-slate-700 hover:text-[#0a1128]"
                }`}
              >
                About
              </Link>

            </nav>

            {/* -------------------------------------------------------------
                3. REFINED UTILITIES & PRESTIGE CTA (No Clutter, Pure Restraint)
                ------------------------------------------------------------- */}
            <div className="hidden lg:flex items-center space-x-6">
              
              {/* Minimal Search Button */}
              <button
                onClick={() => setSearchOpen(true)}
                className="text-slate-500 hover:text-[#0a1128] transition-colors p-1.5 focus:outline-none"
                aria-label="Search site (Cmd+K)"
                title="Search (Cmd+K)"
              >
                <Search className="w-4 h-4" />
              </button>

              {/* Primary Briefing CTA */}
              <Link
                href="/contact"
                className="bg-[#0a1128] text-white hover:bg-[#1e60b5] px-5 py-2.5 text-xs font-semibold tracking-[0.08em] uppercase rounded-xs transition-all duration-200 shadow-xs hover:shadow-md flex items-center space-x-1.5"
              >
                <span>Schedule Briefing</span>
                <ArrowRight className="w-3.5 h-3.5 ml-0.5" />
              </Link>

            </div>

            {/* -------------------------------------------------------------
                4. MOBILE CONTROLS
                ------------------------------------------------------------- */}
            <div className="flex lg:hidden items-center space-x-3">
              <button
                onClick={() => setSearchOpen(true)}
                className="p-2 text-slate-600 hover:text-slate-900 focus:outline-none"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-800 hover:text-black focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-slate-800" />}
              </button>
            </div>

          </div>
        </div>

        {/* =========================================================================
            PRACTICES DROPDOWN (EDITORIAL 2-COLUMN ARCHITECTURE)
            ========================================================================= */}
        <AnimatePresence>
          {activeDropdown === "practices" && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              transition={{ duration: 0.15 }}
              className="absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-[0_20px_50px_rgba(0,0,0,0.12)] z-40"
              onMouseEnter={() => setActiveDropdown("practices")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <div className="max-w-[1400px] mx-auto px-6 sm:px-8 py-10">
                <div className="grid grid-cols-12 gap-10 items-stretch">
                  
                  {/* Left Column: 5 Practices Directory (7 Cols) */}
                  <div className="col-span-7 pr-6 border-r border-slate-200">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-4">
                      <span className="text-[11px] font-mono uppercase tracking-widest text-slate-500 font-bold">
                        Strategic Consulting Practices
                      </span>
                      <Link
                        href="/services"
                        onClick={() => setActiveDropdown(null)}
                        className="text-xs font-semibold text-[#1e60b5] hover:underline flex items-center"
                      >
                        <span>View All Capabilities</span>
                        <ArrowRight className="w-3.5 h-3.5 ml-1" />
                      </Link>
                    </div>

                    <div className="space-y-1">
                      {ENTERPRISE_PILLARS.map((pillar, idx) => (
                        <Link
                          key={pillar.slug}
                          href={`/services/${pillar.slug}`}
                          onClick={() => setActiveDropdown(null)}
                          className="group flex items-start space-x-4 p-3 rounded-xs hover:bg-slate-50 transition-colors"
                        >
                          <span className="font-mono text-xs text-slate-400 pt-1 font-semibold">0{idx + 1}</span>
                          <div className="flex-1">
                            <div className="text-sm font-serif font-bold text-[#0a1128] group-hover:text-[#1e60b5] transition-colors flex items-center justify-between">
                              <span>{pillar.category}</span>
                              <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-[#1e60b5]" />
                            </div>
                            <p className="text-xs text-slate-600 font-light mt-0.5 line-clamp-1">
                              {pillar.tagline}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>

                    <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-mono">
                      <span>Fiduciary Standard: 100% Client IP Ownership</span>
                      <span>Zero Vendor Lock-in</span>
                    </div>
                  </div>

                  {/* Right Column: Editorial Featured Card (5 Cols) */}
                  <div className="col-span-5 flex flex-col justify-between">
                    <div>
                      <div className="text-[11px] font-mono uppercase tracking-widest text-slate-500 font-bold pb-3 border-b border-slate-200 mb-4">
                        Practice Spotlight
                      </div>

                      <div className="editorial-photo-frame aspect-[16/10] rounded-xs relative overflow-hidden mb-4 border border-slate-200">
                        <img
                          src="/practice-ai.jpg"
                          alt="Autonomous Enterprise AI Control Plane"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1128]/85 via-transparent to-transparent"></div>
                        <div className="absolute bottom-3 left-3 right-3 text-white">
                          <span className="text-[10px] font-mono uppercase text-blue-300 font-bold tracking-widest block mb-1">
                            COGNITIVE SYSTEMS
                          </span>
                          <h4 className="text-sm font-serif font-bold text-white">
                            Autonomous Enterprise Control Planes
                          </h4>
                        </div>
                      </div>

                      <p className="text-xs text-slate-600 font-light leading-relaxed">
                        How Fortune 100 enterprise boards deploy deterministic multi-agent architectures for quantifiable balance sheet compounding.
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                      <Link
                        href="/contact"
                        onClick={() => setActiveDropdown(null)}
                        className="text-xs font-semibold text-[#1e60b5] hover:underline flex items-center"
                      >
                        <span>Schedule Partner Briefing</span>
                        <ArrowRight className="w-3.5 h-3.5 ml-1" />
                      </Link>
                      <Link
                        href="/insights"
                        onClick={() => setActiveDropdown(null)}
                        className="text-xs text-slate-500 hover:text-slate-800"
                      >
                        Read 2026 Monograph &rarr;
                      </Link>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* =========================================================================
            INDUSTRIES DROPDOWN (CLEAN 6-SECTOR PORTFOLIO)
            ========================================================================= */}
        <AnimatePresence>
          {activeDropdown === "industries" && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              transition={{ duration: 0.15 }}
              className="absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-[0_20px_50px_rgba(0,0,0,0.12)] z-40"
              onMouseEnter={() => setActiveDropdown("industries")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <div className="max-w-[1400px] mx-auto px-6 sm:px-8 py-10">
                
                <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-6">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-slate-500 font-bold">
                    Regulated Industry Domains
                  </span>
                  <Link
                    href="/industries"
                    onClick={() => setActiveDropdown(null)}
                    className="text-xs font-semibold text-[#1e60b5] hover:underline flex items-center"
                  >
                    <span>View All Industry Sectors</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {GLOBAL_INDUSTRIES.map((ind) => (
                    <Link
                      key={ind.slug}
                      href={`/industries/${ind.slug}`}
                      onClick={() => setActiveDropdown(null)}
                      className="group p-3.5 rounded-xs border border-slate-200 hover:border-slate-300 hover:bg-slate-50/70 transition-all flex items-start space-x-3.5"
                    >
                      <div className="w-14 h-14 rounded-xs overflow-hidden flex-shrink-0 border border-slate-200">
                        <img
                          src={ind.image}
                          alt={ind.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="text-xs font-serif font-bold text-[#0a1128] group-hover:text-[#1e60b5] transition-colors leading-tight">
                          {ind.name}
                        </div>
                        <div className="text-[10px] font-mono text-[#1e60b5] font-semibold mt-1">
                          {ind.metric} {ind.metricLabel}
                        </div>
                        <p className="text-[11px] text-slate-500 font-light line-clamp-1 mt-0.5">
                          {ind.desc}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500 font-mono">
                  <span>Trusted counsel to multinational leadership across regulated global markets.</span>
                  <Link
                    href="/contact"
                    onClick={() => setActiveDropdown(null)}
                    className="text-[#1e60b5] font-semibold hover:underline"
                  >
                    Request Industry Specific Briefing &rarr;
                  </Link>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </header>

      {/* =========================================================================
          MINIMALIST SEARCH MODAL (CMD+K)
          ========================================================================= */}
      <AnimatePresence>
        {searchOpen && (
          <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 sm:px-6">
            
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSearchOpen(false)}
              className="fixed inset-0 bg-[#0a1128]/50 backdrop-blur-xs"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: -8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: -8 }}
              transition={{ duration: 0.15 }}
              className="relative w-full max-w-2xl bg-white rounded-xs border border-slate-300 shadow-2xl overflow-hidden z-10"
            >
              {/* Top Search Input */}
              <div className="flex items-center px-4 py-3.5 border-b border-slate-200 bg-slate-50">
                <Search className="w-4 h-4 text-slate-400 mr-3" />
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search practices, sectors, whitepapers, or case studies..."
                  className="w-full bg-transparent text-sm text-slate-900 placeholder-slate-400 focus:outline-none font-sans"
                />
                <button
                  onClick={() => setSearchOpen(false)}
                  className="text-xs font-mono text-slate-400 hover:text-slate-700 border border-slate-200 rounded-xs px-2 py-0.5 bg-white ml-2"
                >
                  ESC
                </button>
              </div>

              {/* Results Container */}
              <div className="max-h-[50vh] overflow-y-auto p-4 space-y-4">
                
                {/* Practices */}
                {filteredPractices.length > 0 && (
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold mb-2 px-2">
                      Practices
                    </div>
                    {filteredPractices.map((p) => (
                      <Link
                        key={p.slug}
                        href={`/services/${p.slug}`}
                        onClick={() => setSearchOpen(false)}
                        className="flex items-center justify-between p-2 rounded-xs hover:bg-slate-50 text-xs text-slate-900 font-semibold group"
                      >
                        <span className="group-hover:text-[#1e60b5]">{p.category}</span>
                        <span className="text-[10px] font-mono text-slate-400">{p.code} &rarr;</span>
                      </Link>
                    ))}
                  </div>
                )}

                {/* Industries */}
                {filteredIndustries.length > 0 && (
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold mb-2 px-2">
                      Industries
                    </div>
                    {filteredIndustries.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/industries/${s.slug}`}
                        onClick={() => setSearchOpen(false)}
                        className="flex items-center justify-between p-2 rounded-xs hover:bg-slate-50 text-xs text-slate-900 font-semibold group"
                      >
                        <span className="group-hover:text-[#1e60b5]">{s.name}</span>
                        <span className="text-[10px] font-mono text-[#1e60b5]">{s.metric} &rarr;</span>
                      </Link>
                    ))}
                  </div>
                )}

                {/* Insights */}
                {filteredInsights.length > 0 && (
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold mb-2 px-2">
                      Research & Insights
                    </div>
                    {filteredInsights.map((i) => (
                      <Link
                        key={i.slug}
                        href={`/insights/${i.slug}`}
                        onClick={() => setSearchOpen(false)}
                        className="flex items-center justify-between p-2 rounded-xs hover:bg-slate-50 text-xs text-slate-900 font-semibold group"
                      >
                        <span className="group-hover:text-[#1e60b5]">{i.title}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#1e60b5]" />
                      </Link>
                    ))}
                  </div>
                )}

                {filteredPractices.length === 0 && filteredIndustries.length === 0 && filteredInsights.length === 0 && (
                  <div className="text-center py-8 text-xs text-slate-500 font-light">
                    No results found for &ldquo;{searchQuery}&rdquo;. Try &ldquo;AI&rdquo;, &ldquo;Operations&rdquo;, or &ldquo;Banking&rdquo;.
                  </div>
                )}

              </div>

              {/* Modal Footer */}
              <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Improx Integents Advisory Index</span>
                <Link
                  href="/contact"
                  onClick={() => setSearchOpen(false)}
                  className="text-[#1e60b5] font-semibold hover:underline"
                >
                  Schedule Consultation &rarr;
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
            transition={{ duration: 0.2 }}
            className="fixed top-[60px] left-0 w-full bg-white border-b border-slate-200 shadow-2xl z-40 max-h-[calc(100vh-60px)] overflow-y-auto"
          >
            <div className="px-6 py-6 space-y-5">
              
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm font-semibold uppercase tracking-wider py-2 text-slate-900 border-b border-slate-100"
              >
                Overview
              </Link>

              {/* Mobile Practices Accordion */}
              <div className="border-b border-slate-100 pb-2">
                <button
                  onClick={() => setMobilePracticesOpen(!mobilePracticesOpen)}
                  className="w-full flex items-center justify-between text-sm font-semibold uppercase tracking-wider py-2 text-slate-900"
                >
                  <span>Practices</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobilePracticesOpen ? "rotate-180 text-[#1e60b5]" : ""}`} />
                </button>
                {mobilePracticesOpen && (
                  <div className="pl-3 py-2 space-y-2">
                    {ENTERPRISE_PILLARS.map((p) => (
                      <Link
                        key={p.slug}
                        href={`/services/${p.slug}`}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-xs text-slate-700 py-1 hover:text-[#1e60b5]"
                      >
                        {p.category}
                      </Link>
                    ))}
                    <Link
                      href="/services"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-xs font-semibold text-[#1e60b5] pt-1"
                    >
                      All Practices &rarr;
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile Industries Accordion */}
              <div className="border-b border-slate-100 pb-2">
                <button
                  onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)}
                  className="w-full flex items-center justify-between text-sm font-semibold uppercase tracking-wider py-2 text-slate-900"
                >
                  <span>Industries</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileIndustriesOpen ? "rotate-180 text-[#1e60b5]" : ""}`} />
                </button>
                {mobileIndustriesOpen && (
                  <div className="pl-3 py-2 space-y-2">
                    {GLOBAL_INDUSTRIES.map((ind) => (
                      <Link
                        key={ind.slug}
                        href={`/industries/${ind.slug}`}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-xs text-slate-700 py-1 hover:text-[#1e60b5]"
                      >
                        {ind.name}
                      </Link>
                    ))}
                    <Link
                      href="/industries"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-xs font-semibold text-[#1e60b5] pt-1"
                    >
                      All Industries &rarr;
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/case-studies"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm font-semibold uppercase tracking-wider py-2 text-slate-900 border-b border-slate-100"
              >
                Case Studies
              </Link>

              <Link
                href="/insights"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm font-semibold uppercase tracking-wider py-2 text-slate-900 border-b border-slate-100"
              >
                Insights
              </Link>

              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm font-semibold uppercase tracking-wider py-2 text-slate-900 border-b border-slate-100"
              >
                About
              </Link>

              <div className="pt-4">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="bg-[#0a1128] text-white w-full py-3 text-xs uppercase tracking-wider text-center block font-semibold rounded-xs"
                >
                  Schedule Briefing
                </Link>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
