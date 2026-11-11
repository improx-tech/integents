"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  TrendingUp, 
  ShieldCheck, 
  Building2, 
  BrainCircuit, 
  Layers, 
  Cpu, 
  Compass, 
  BarChart3, 
  CheckCircle2,
  Lock,
  Globe,
  X,
  Award,
  Activity,
  Landmark,
  Factory,
  ShoppingBag,
  Zap,
  Radio,
  FileCheck,
  Scale,
  Sparkles
} from "lucide-react";
import { 
  ENTERPRISE_PILLARS, 
  GLOBAL_INDUSTRIES, 
  CLIENT_LOGOS, 
  FEATURED_INSIGHTS, 
  FEATURED_CASE_STUDIES,
  IMPROX_DELIVERY_ENGINE
} from "@/lib/data";

export default function Home() {
  // Hero Interactive Telemetry Mode
  const [heroTab, setHeroTab] = useState<"orchestration" | "capital" | "security">("orchestration");

  // Interactive ROI Calculator State
  const [calcIndustry, setCalcIndustry] = useState("Financial Services & Banking");
  const [calcScale, setCalcScale] = useState("$2B - $10B Enterprise");
  const [calcGoal, setCalcGoal] = useState("Agentic AI & Workflow Automation");

  // Active Pillar for Interactive Matrix Showcase
  const [activePillarIdx, setActivePillarIdx] = useState(0);

  // Research Article Modal Reader State
  const [activeArticleIndex, setActiveArticleIndex] = useState<number | null>(null);

  // Calculation output generator
  const getCalculatedImpact = () => {
    if (calcGoal === "Agentic AI & Workflow Automation") {
      return { savings: "$45M - $120M", efficiency: "35% - 50%", timeline: "90 Days to Initial Production" };
    } else if (calcGoal === "Supply Chain & Operations Optimization") {
      return { savings: "$60M - $180M", efficiency: "28% - 42%", timeline: "4 - 6 Months" };
    } else {
      return { savings: "$30M - $95M", efficiency: "40% Faster Migration", timeline: "6 Months" };
    }
  };

  const calculatedResult = getCalculatedImpact();

  const renderPillarIcon = (iconName: string) => {
    switch (iconName) {
      case "Compass": return <Compass className="w-5 h-5 text-[#1e60b5]" />;
      case "BrainCircuit": return <BrainCircuit className="w-5 h-5 text-[#1e60b5]" />;
      case "Cpu": return <Cpu className="w-5 h-5 text-[#1e60b5]" />;
      case "Layers": return <Layers className="w-5 h-5 text-[#1e60b5]" />;
      default: return <Building2 className="w-5 h-5 text-[#1e60b5]" />;
    }
  };

  const renderIndustryIcon = (iconName: string) => {
    switch (iconName) {
      case "Landmark": return <Landmark className="w-5 h-5 text-[#1e60b5]" />;
      case "Activity": return <Activity className="w-5 h-5 text-[#1e60b5]" />;
      case "Factory": return <Factory className="w-5 h-5 text-[#1e60b5]" />;
      case "ShoppingBag": return <ShoppingBag className="w-5 h-5 text-[#1e60b5]" />;
      case "Zap": return <Zap className="w-5 h-5 text-[#1e60b5]" />;
      default: return <Radio className="w-5 h-5 text-[#1e60b5]" />;
    }
  };

  return (
    <div className="bg-white text-slate-900 min-h-screen pt-28 lg:pt-36">
      
      {/* SECTION 1: STATELY EDITORIAL HERO WITH SPLIT ARCHITECTURAL SPREAD */}
      <section className="relative pt-8 pb-20 lg:pt-14 lg:pb-28 border-b border-slate-200 bg-[#fdfdfd]">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
            
            {/* Left Column: Executive Narrative & Sovereign Positioning (7 Cols) */}
            <div className="lg:col-span-7 space-y-7">
              
              {/* Heritage Badge */}
              <div className="inline-flex items-center space-x-2.5 heritage-badge">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1e60b5]"></span>
                <span>ESTABLISHED 1976 &bull; 50-YEAR FIDUCIARY HERITAGE &bull; GLOBAL ADVISORY</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-[4.25rem] font-serif font-bold text-[#0a1128] tracking-tight leading-[1.08]">
                Navigating Complexity. <br />
                <span className="italic font-serif text-[#1e60b5] font-normal">Architecting Enduring Value.</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 max-w-2xl font-sans font-light leading-relaxed">
                For five decades, Improx Integents has served as trusted confidential counsel to Fortune 100 enterprise boards, sovereign funds, and market-defining institutions. Today, we bridge high-conviction corporate strategy with sovereign-grade agentic AI control planes &mdash; engineering capital resilience, operational autonomy, and multi-generational shareholder returns.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <Link 
                  href="/contact" 
                  className="btn-heritage-primary text-xs tracking-wider font-semibold flex items-center justify-center space-x-2 shadow-sm"
                >
                  <span>Schedule Executive Briefing</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>

                <Link 
                  href="/services" 
                  className="btn-heritage-secondary text-xs tracking-wider font-semibold flex items-center justify-center space-x-2"
                >
                  <span>Explore Practice Matrix</span>
                </Link>
              </div>

              {/* Verified Institutional Benchmarks Strip (Financial Times Monoline Format) */}
              <div className="pt-8 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-6">
                <div className="border-l-2 border-slate-200 pl-3">
                  <div className="text-2xl sm:text-3xl font-serif font-bold text-[#0a1128] tracking-tight">$14.2B+</div>
                  <div className="text-[11px] font-mono text-slate-500 mt-0.5 uppercase tracking-wider">Capital Value Unlocked</div>
                </div>
                <div className="border-l-2 border-slate-200 pl-3">
                  <div className="text-2xl sm:text-3xl font-serif font-bold text-[#1e60b5] tracking-tight">50 Years</div>
                  <div className="text-[11px] font-mono text-slate-500 mt-0.5 uppercase tracking-wider">Fiduciary Heritage</div>
                </div>
                <div className="border-l-2 border-slate-200 pl-3">
                  <div className="text-2xl sm:text-3xl font-serif font-bold text-[#0a1128] tracking-tight">98.6%</div>
                  <div className="text-[11px] font-mono text-slate-500 mt-0.5 uppercase tracking-wider">Multi-Year Retention</div>
                </div>
                <div className="border-l-2 border-slate-200 pl-3">
                  <div className="text-2xl sm:text-3xl font-serif font-bold text-slate-800 tracking-tight">500+</div>
                  <div className="text-[11px] font-mono text-slate-500 mt-0.5 uppercase tracking-wider">Production Deployments</div>
                </div>
              </div>

            </div>

            {/* Right Column: Architectural Photography & Live Telemetry Monograph (5 Cols) */}
            <div className="lg:col-span-5 relative">
              <div className="bg-white rounded-sm border border-slate-200 p-6 sm:p-7 shadow-[0_8px_30px_rgb(0,0,0,0.06)] relative overflow-hidden">
                
                {/* Header Matrix Tabs */}
                <div className="flex items-center justify-between pb-3.5 border-b border-slate-200 mb-5">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-[#1e60b5]"></span>
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#0a1128]">
                      Enterprise Control Plane
                    </span>
                  </div>
                  <span className="heritage-badge text-[10px] py-0.5 px-2">
                    SOVEREIGN MESH
                  </span>
                </div>

                {/* Sub Tab Switcher */}
                <div className="grid grid-cols-3 gap-1.5 mb-5 p-1 bg-slate-100 rounded-xs">
                  <button
                    onClick={() => setHeroTab("orchestration")}
                    className={`py-1.5 text-[10px] font-mono uppercase tracking-wider rounded-xs transition-all ${
                      heroTab === "orchestration" 
                        ? "bg-white text-[#0a1128] font-bold shadow-xs border border-slate-200" 
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    Orchestration
                  </button>
                  <button
                    onClick={() => setHeroTab("capital")}
                    className={`py-1.5 text-[10px] font-mono uppercase tracking-wider rounded-xs transition-all ${
                      heroTab === "capital" 
                        ? "bg-white text-[#0a1128] font-bold shadow-xs border border-slate-200" 
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    Capital Value
                  </button>
                  <button
                    onClick={() => setHeroTab("security")}
                    className={`py-1.5 text-[10px] font-mono uppercase tracking-wider rounded-xs transition-all ${
                      heroTab === "security" 
                        ? "bg-white text-[#0a1128] font-bold shadow-xs border border-slate-200" 
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    Zero-Trust
                  </button>
                </div>

                {/* Tab 1: Agentic Orchestration Mesh */}
                {heroTab === "orchestration" && (
                  <motion.div 
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-4"
                  >
                    <div className="editorial-photo-frame rounded-xs aspect-[16/10] relative">
                      <img 
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop" 
                        alt="Global Financial Centre & Architecture"
                        className="w-full h-full object-cover" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a1128]/85 via-[#0a1128]/20 to-transparent"></div>
                      <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center text-[10px] font-mono text-white">
                        <span>FIGURE 1.1 &bull; GLOBAL CONTROL PLANE ARCHITECTURE</span>
                        <span className="text-emerald-300 font-semibold">99.999% VERIFIED</span>
                      </div>
                    </div>

                    <div className="space-y-2 text-xs font-mono">
                      <div className="flex justify-between p-2.5 bg-slate-50 rounded-xs border border-slate-200">
                        <span className="text-slate-600">Enterprise ERP & Core Ledger Sync:</span>
                        <span className="text-slate-900 font-bold">&lt; 12ms Deterministic</span>
                      </div>
                      <div className="flex justify-between p-2.5 bg-slate-50 rounded-xs border border-slate-200">
                        <span className="text-slate-600">Autonomous Workflow Agents:</span>
                        <span className="text-[#1e60b5] font-bold">24 Nodes Active &bull; Zero Drift</span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Tab 2: Dynamic Capital Value */}
                {heroTab === "capital" && (
                  <motion.div 
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-4"
                  >
                    <div className="editorial-photo-frame rounded-xs aspect-[16/10] relative">
                      <img 
                        src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop" 
                        alt="Executive Boardroom Capital Allocation"
                        className="w-full h-full object-cover" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a1128]/85 via-[#0a1128]/20 to-transparent"></div>
                      <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center text-[10px] font-mono text-white">
                        <span>FIGURE 1.2 &bull; FIDUCIARY TSR ACCRETION MODEL</span>
                        <span className="text-emerald-300 font-semibold">AUDITED OUTCOMES</span>
                      </div>
                    </div>

                    <div className="space-y-2 text-xs font-mono">
                      <div className="flex justify-between p-2.5 bg-slate-50 rounded-xs border border-slate-200">
                        <span className="text-slate-600">Working Capital Released:</span>
                        <span className="text-slate-900 font-bold">$340M Audited EBITDA</span>
                      </div>
                      <div className="flex justify-between p-2.5 bg-slate-50 rounded-xs border border-slate-200">
                        <span className="text-slate-600">Payback Horizon:</span>
                        <span className="text-[#1e60b5] font-bold">Under 90 Days</span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Tab 3: Zero-Trust Security Mesh */}
                {heroTab === "security" && (
                  <motion.div 
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-4"
                  >
                    <div className="editorial-photo-frame rounded-xs aspect-[16/10] relative">
                      <img 
                        src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1600&auto=format&fit=crop" 
                        alt="Institutional Governance Security"
                        className="w-full h-full object-cover" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a1128]/85 via-[#0a1128]/20 to-transparent"></div>
                      <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center text-[10px] font-mono text-white">
                        <span>FIGURE 1.3 &bull; SOVEREIGN ZERO-TRUST ENCLAVE</span>
                        <span className="text-emerald-300 font-semibold">SOC 2 TYPE II</span>
                      </div>
                    </div>

                    <div className="space-y-2 text-xs font-mono">
                      <div className="flex justify-between p-2.5 bg-slate-50 rounded-xs border border-slate-200">
                        <span className="text-slate-600">Client IP Assignment:</span>
                        <span className="text-slate-900 font-bold">100% Exclusive Ringfence</span>
                      </div>
                      <div className="flex justify-between p-2.5 bg-slate-50 rounded-xs border border-slate-200">
                        <span className="text-slate-600">Audit Trail:</span>
                        <span className="text-[#1e60b5] font-bold">Cryptographically Immutable</span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Bottom Practice Tag */}
                <div className="pt-3.5 mt-3.5 border-t border-slate-200 flex items-center justify-between text-[11px] font-mono">
                  <span className="text-slate-500">Practice Lead: Elena Rostova</span>
                  <Link href="/services/strategy-consulting" className="text-[#1e60b5] font-semibold hover:underline">
                    View Strategy Practice &rarr;
                  </Link>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: CLIENT BENCHMARK ROW (FINANCIAL TIMES EDITORIAL FORMAT) */}
      <section className="py-6 border-b border-slate-200 bg-[#f8fafc]">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-slate-500 whitespace-nowrap">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1e60b5]"></span>
              <span>Select Enterprise Engagements:</span>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 w-full text-center">
              {CLIENT_LOGOS.map((client) => (
                <div key={client.ticker} className="border-l border-slate-300 pl-4 text-left">
                  <div className="text-xs font-bold text-slate-900 font-mono tracking-wider">{client.name}</div>
                  <div className="text-[10px] text-slate-500 font-mono mt-0.5">{client.stat}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: THE 50-YEAR HERITAGE & INSTITUTIONAL CHARTER */}
      <section className="py-24 border-b border-slate-200 bg-white">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-16 space-y-4">
            <span className="heritage-badge text-[10px]">Institutional Charter</span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#0a1128] tracking-tight">
              A Half-Century of Boardroom Trust. <br />
              <span className="italic font-serif text-[#1e60b5] font-normal">Engineered for the Cognitive Era.</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
              Why multinational chief executives, sovereign wealth funds, and private equity sponsors mandate Improx Integents over conventional consulting conglomerates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Pillar 1 */}
            <div className="border border-slate-200 p-8 rounded-xs bg-[#fafaf9] hover:border-slate-400 transition-colors">
              <div className="text-3xl font-serif font-bold text-slate-300 mb-4">01</div>
              <h3 className="text-lg font-serif font-bold text-[#0a1128] mb-2">
                Fiduciary Value Accountability
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-light">
                We do not produce speculative slide decks that languish in executive drawers. Our partner compensation models are tied directly to validated EBITDA expansion and verifiable balance sheet outcomes.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="border border-slate-200 p-8 rounded-xs bg-[#fafaf9] hover:border-slate-400 transition-colors">
              <div className="text-3xl font-serif font-bold text-slate-300 mb-4">02</div>
              <h3 className="text-lg font-serif font-bold text-[#0a1128] mb-2">
                Sovereign Control Planes
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-light">
                Enterprise AI without deterministic guardrails creates existential legal exposure. We architect air-gapped, zero-leakage multi-agent control planes operating entirely within your private infrastructure.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="border border-slate-200 p-8 rounded-xs bg-[#fafaf9] hover:border-slate-400 transition-colors">
              <div className="text-3xl font-serif font-bold text-slate-300 mb-4">03</div>
              <h3 className="text-lg font-serif font-bold text-[#0a1128] mb-2">
                Senior Partner Engagement
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-light">
                We repudiate the pyramid leverage model where junior analysts staff engagements. Every Integents mandate is personally led by senior partners possessing 20+ years of operating and boardroom authority.
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="border border-slate-200 p-8 rounded-xs bg-[#fafaf9] hover:border-slate-400 transition-colors">
              <div className="text-3xl font-serif font-bold text-slate-300 mb-4">04</div>
              <h3 className="text-lg font-serif font-bold text-[#0a1128] mb-2">
                Total Client IP Sovereignty
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-light">
                Every line of engineered code, every proprietary predictive model, and every institutional architecture becomes 100% owned by the client upon delivery. Zero lock-in, zero vendor dependency.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 4: THE 5 STRATEGIC CAPABILITY PILLARS (PRACTICE MATRIX) */}
      <section className="py-24 border-b border-slate-200 bg-[#f8fafc]">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-slate-200 gap-6">
            <div>
              <span className="heritage-badge text-[10px] mb-3">Global Practices</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0a1128] tracking-tight">
                5 Strategic Practices. <br />
                <span className="italic font-serif text-[#1e60b5] font-normal">25 Specialized Capabilities.</span>
              </h2>
            </div>
            <div className="max-w-md">
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                From high-stakes boardroom positioning to sovereign agentic systems engineering, our practices synthesize strategic counsel with industrial deployment.
              </p>
              <Link href="/services" className="text-xs font-mono uppercase tracking-wider text-[#1e60b5] font-semibold hover:underline flex items-center mt-3">
                Access Full Practice Directory <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </Link>
            </div>
          </div>

          {/* Split Matrix Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left 5 Cols: Pillar Navigation Tabs */}
            <div className="lg:col-span-5 space-y-3">
              {ENTERPRISE_PILLARS.map((pillar, idx) => (
                <div
                  key={pillar.slug}
                  onClick={() => setActivePillarIdx(idx)}
                  className={`p-5 rounded-xs border cursor-pointer transition-all duration-200 ${
                    activePillarIdx === idx
                      ? "bg-white border-l-4 border-l-[#1e60b5] border-slate-300 shadow-md"
                      : "bg-[#f1f5f9]/70 border-slate-200 hover:bg-white hover:border-slate-300"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="font-mono text-xs text-slate-400 font-bold">0{idx + 1}</span>
                      <h3 className="text-base font-serif font-bold text-[#0a1128] tracking-wide">
                        {pillar.category}
                      </h3>
                    </div>
                    {renderPillarIcon(pillar.iconName)}
                  </div>

                  <p className="text-xs text-slate-600 mt-2 font-light leading-relaxed">
                    {pillar.tagline}
                  </p>

                  <div className="flex items-center justify-between pt-3 mt-3 border-t border-slate-200 text-[11px] font-mono">
                    <span className="text-slate-500">{pillar.items.length} Sub-Service Capabilities</span>
                    <span className="text-[#1e60b5] flex items-center font-semibold">
                      Explore Dossier &rarr;
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Right 7 Cols: Active Pillar Showcase with Real Editorial Imagery */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-xs p-8 border border-slate-200 shadow-md">
                
                {/* Top Practice Meta */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-6">
                  <div>
                    <span className="font-mono text-xs text-[#1e60b5] uppercase tracking-widest font-bold">
                      {ENTERPRISE_PILLARS[activePillarIdx].code} // PRACTICE PROFILE
                    </span>
                    <h3 className="text-2xl font-serif font-bold text-[#0a1128] mt-1">
                      {ENTERPRISE_PILLARS[activePillarIdx].category}
                    </h3>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-serif font-bold text-[#1e60b5]">
                      {ENTERPRISE_PILLARS[activePillarIdx].stat}
                    </div>
                    <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                      {ENTERPRISE_PILLARS[activePillarIdx].statLabel}
                    </div>
                  </div>
                </div>

                {/* Real High-Resolution Practice Photography */}
                <div className="editorial-photo-frame rounded-xs aspect-[16/9] mb-6">
                  <img 
                    src={ENTERPRISE_PILLARS[activePillarIdx].image} 
                    alt={ENTERPRISE_PILLARS[activePillarIdx].category} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1128]/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-3 left-4 text-xs font-mono text-white">
                    Lead Partner: <span className="text-white font-bold">{ENTERPRISE_PILLARS[activePillarIdx].leadName}</span> &bull; {ENTERPRISE_PILLARS[activePillarIdx].leadRole}
                  </div>
                </div>

                {/* Sub-services Grid */}
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-widest text-slate-500 mb-3">
                    Practice Capabilities
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {ENTERPRISE_PILLARS[activePillarIdx].items.map((sub) => (
                      <Link
                        key={sub.slug}
                        href={`/services/${ENTERPRISE_PILLARS[activePillarIdx].slug}/${sub.slug}`}
                        className="group/card p-3.5 rounded-xs bg-slate-50 border border-slate-200 hover:border-slate-300 hover:bg-slate-100/70 transition-all flex flex-col justify-between"
                      >
                        <div className="text-xs font-bold text-slate-900 group-hover/card:text-[#1e60b5] flex items-center justify-between">
                          <span>{sub.title}</span>
                          <ArrowRight className="w-3.5 h-3.5 text-[#1e60b5] opacity-0 group-hover/card:opacity-100 transition-opacity" />
                        </div>
                        <p className="text-[11px] text-slate-500 mt-1 line-clamp-1">{sub.shortDesc}</p>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Action Link */}
                <div className="pt-6 mt-6 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-mono">
                    Client IP transferred 100% &bull; Zero vendor lock-in
                  </span>
                  <Link 
                    href={`/services/${ENTERPRISE_PILLARS[activePillarIdx].slug}`}
                    className="btn-heritage-primary text-xs tracking-wider flex items-center space-x-2"
                  >
                    <span>Full Practice Portfolio</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Link>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 5: DELIVERY METHODOLOGY (4-PHASE GOVERNANCE) */}
      <section className="py-24 border-b border-slate-200 bg-white">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="heritage-badge text-[10px]">Governance Framework</span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#0a1128] tracking-tight">
              The Improx Precision Delivery Framework
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
              We bridge boardroom intent with software architecture. Our 4-stage governance lifecycle ensures deterministic value realization without enterprise disruption.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {IMPROX_DELIVERY_ENGINE.map((step, idx) => (
              <div 
                key={step.step}
                className="bg-[#fafaf9] rounded-xs p-7 border border-slate-200 relative flex flex-col justify-between hover:border-slate-400 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-5">
                    <span className="font-serif text-3xl font-bold text-[#1e60b5]">
                      {step.step}
                    </span>
                    <span className="text-[10px] font-mono text-slate-600 bg-slate-100 px-2 py-0.5 rounded-xs border border-slate-200">
                      {step.duration}
                    </span>
                  </div>

                  <h3 className="text-base font-serif font-bold text-[#0a1128] mb-2.5">
                    {step.phase}
                  </h3>

                  <p className="text-xs text-slate-600 font-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-slate-200 text-[10px] font-mono text-slate-500 uppercase tracking-widest flex items-center justify-between">
                  <span>STAGE GATE {idx + 1}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1e60b5]"></span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 6: INTERACTIVE ENTERPRISE VALUE MODELER (ROI ESTIMATOR) */}
      <section className="py-24 border-b border-slate-200 bg-[#f8fafc]">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-white rounded-xs p-8 lg:p-14 border border-slate-200 shadow-md">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Controls (6 cols) */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <span className="heritage-badge text-[10px] mb-3">Enterprise Financial Simulator</span>
                  <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#0a1128] tracking-tight">
                    Model Your Enterprise Value Impact
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 font-light">
                    Select your corporate operating profile to benchmark anticipated cost reduction, throughput velocity, and capital payback periods based on verified Fortune 500 mandates.
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-widest text-slate-700 mb-2 font-semibold">
                      Industry Sector
                    </label>
                    <select 
                      value={calcIndustry}
                      onChange={(e) => setCalcIndustry(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xs px-4 py-3 text-xs text-slate-900 focus:outline-none focus:border-[#1e60b5]"
                    >
                      <option>Financial Services & Banking</option>
                      <option>Healthcare & Life Sciences</option>
                      <option>Smart Manufacturing & Automotive</option>
                      <option>Retail, Consumer & E-Commerce</option>
                      <option>Energy, Resources & Utilities</option>
                      <option>Telecom & High Tech</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-widest text-slate-700 mb-2 font-semibold">
                      Annual Revenue Scale
                    </label>
                    <select 
                      value={calcScale}
                      onChange={(e) => setCalcScale(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xs px-4 py-3 text-xs text-slate-900 focus:outline-none focus:border-[#1e60b5]"
                    >
                      <option>$500M - $2B Mid-Market Leader</option>
                      <option>$2B - $10B Enterprise</option>
                      <option>$10B+ Global Multinational</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-widest text-slate-700 mb-2 font-semibold">
                      Primary Strategic Objective
                    </label>
                    <select 
                      value={calcGoal}
                      onChange={(e) => setCalcGoal(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xs px-4 py-3 text-xs text-slate-900 focus:outline-none focus:border-[#1e60b5]"
                    >
                      <option>Agentic AI & Workflow Automation</option>
                      <option>Supply Chain & Operations Optimization</option>
                      <option>Cloud Modernization & Legacy Decoupling</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Right Output Dashboard (6 cols) */}
              <div className="lg:col-span-6">
                <div className="bg-[#0a1128] text-white rounded-xs p-8 sm:p-10 border border-slate-800 shadow-xl">
                  
                  <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-blue-300 font-bold">
                      Fiduciary Impact Projection
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">BENCHMARK 2026.3</span>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                        Projected Annual EBITDA Expansion / Savings
                      </div>
                      <div className="text-3xl sm:text-4xl font-serif font-bold text-white mt-1">
                        {calculatedResult.savings}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800">
                      <div>
                        <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                          Process Velocity Gain
                        </div>
                        <div className="text-xl font-serif font-bold text-[#1e60b5] mt-0.5">
                          {calculatedResult.efficiency}
                        </div>
                      </div>
                      <div>
                        <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                          Time to Production Value
                        </div>
                        <div className="text-xl font-serif font-bold text-white mt-0.5">
                          {calculatedResult.timeline}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-800">
                    <Link 
                      href="/contact"
                      className="btn-heritage-blue w-full py-3.5 text-xs uppercase tracking-wider font-semibold text-center block"
                    >
                      Request Board-Level Business Case &rarr;
                    </Link>
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* SECTION 7: CLIENT CASE STUDIES (FINANCIAL TIMES EDITORIAL SPREAD) */}
      <section className="py-24 border-b border-slate-200 bg-white">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-slate-200 gap-6">
            <div>
              <span className="heritage-badge text-[10px] mb-3">Empirical Audits</span>
              <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#0a1128] tracking-tight">
                Audited Enterprise Outcomes
              </h2>
            </div>
            <Link href="/case-studies" className="text-xs font-mono uppercase tracking-wider text-[#1e60b5] font-semibold hover:underline flex items-center">
              View All Audited Case Studies <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Primary Spotlight Case Study (7 Cols) */}
            <div className="lg:col-span-7">
              <div className="bg-[#fafaf9] rounded-xs overflow-hidden border border-slate-200 h-full flex flex-col justify-between group hover:border-slate-300 transition-colors">
                <div>
                  <div className="editorial-photo-frame aspect-[16/9] relative">
                    <img 
                      src={FEATURED_CASE_STUDIES[0].image} 
                      alt={FEATURED_CASE_STUDIES[0].title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="heritage-badge bg-white/95 text-[#0a1128] border-none shadow-xs">
                        {FEATURED_CASE_STUDIES[0].industry}
                      </span>
                    </div>
                  </div>

                  <div className="p-8 space-y-4">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-slate-500">
                      {FEATURED_CASE_STUDIES[0].client}
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-[#0a1128] group-hover:text-[#1e60b5] transition-colors">
                      {FEATURED_CASE_STUDIES[0].title}
                    </h3>
                    
                    <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xs text-xs font-mono text-emerald-800 font-semibold flex items-center space-x-2">
                      <TrendingUp className="w-4 h-4 text-emerald-600" />
                      <span>{FEATURED_CASE_STUDIES[0].impact}</span>
                    </div>

                    <p className="text-xs text-slate-600 font-light leading-relaxed">
                      {FEATURED_CASE_STUDIES[0].summary}
                    </p>
                  </div>
                </div>

                <div className="p-8 pt-0">
                  <Link 
                    href={`/case-studies/${FEATURED_CASE_STUDIES[0].slug}`}
                    className="btn-heritage-primary w-full py-3 text-xs uppercase tracking-wider font-semibold text-center block"
                  >
                    Examine Case Dossier &rarr;
                  </Link>
                </div>
              </div>
            </div>

            {/* Stacked Secondary Case Studies (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-6">
              {FEATURED_CASE_STUDIES.slice(1, 3).map((study) => (
                <div 
                  key={study.slug}
                  className="bg-[#fafaf9] rounded-xs border border-slate-200 p-6 flex flex-col justify-between group hover:border-slate-300 transition-colors"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-[10px] font-mono">
                      <span className="text-[#1e60b5] font-bold">{study.industry}</span>
                      <span className="text-slate-500">{study.client}</span>
                    </div>

                    <h3 className="text-lg font-serif font-bold text-[#0a1128] group-hover:text-[#1e60b5] transition-colors">
                      {study.title}
                    </h3>

                    <div className="text-xs font-mono text-emerald-800 bg-emerald-50 p-2 rounded-xs border border-emerald-200 font-semibold">
                      {study.impact}
                    </div>

                    <p className="text-xs text-slate-600 font-light line-clamp-2">
                      {study.summary}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-200">
                    <Link 
                      href={`/case-studies/${study.slug}`}
                      className="text-xs font-mono uppercase tracking-wider text-[#1e60b5] hover:underline flex items-center justify-between font-semibold"
                    >
                      <span>Read Full Dossier</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 8: GLOBAL INDUSTRY DOMAINS */}
      <section className="py-24 border-b border-slate-200 bg-[#f8fafc]">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-slate-200 gap-6">
            <div>
              <span className="heritage-badge text-[10px] mb-3">Sectors</span>
              <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#0a1128] tracking-tight">
                Sector Practice Specialization
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md font-light leading-relaxed">
              Unrivaled operational, technical, and regulatory expertise spanning the global economy&apos;s most complex industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {GLOBAL_INDUSTRIES.map((ind) => (
              <Link 
                key={ind.slug}
                href={`/industries/${ind.slug}`}
                className="bg-white rounded-xs overflow-hidden border border-slate-200 hover:border-slate-300 transition-all duration-200 group flex flex-col justify-between shadow-xs hover:shadow-md"
              >
                <div>
                  <div className="editorial-photo-frame aspect-[16/9] relative">
                    <img 
                      src={ind.image} 
                      alt={ind.name} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="heritage-badge text-[9px] bg-white/95 text-[#0a1128] border-none shadow-xs">
                        {ind.code}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-2.5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        {renderIndustryIcon(ind.iconName)}
                        <h3 className="text-base font-serif font-bold text-[#0a1128] group-hover:text-[#1e60b5] transition-colors">
                          {ind.name}
                        </h3>
                      </div>
                    </div>

                    <p className="text-xs text-slate-600 font-light leading-relaxed">
                      {ind.desc}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between text-xs font-mono">
                  <span className="text-[#1e60b5] font-semibold">{ind.metric} {ind.metricLabel}</span>
                  <span className="text-slate-400 group-hover:text-slate-900 group-hover:translate-x-1 transition-all">
                    &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 9: EXECUTIVE JOURNAL & MONOGRAPHS (WITH IN-PAGE MODAL READER) */}
      <section className="py-24 border-b border-slate-200 bg-white">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-slate-200 gap-6">
            <div>
              <span className="heritage-badge text-[10px] mb-3">Quarterly Monograph</span>
              <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#0a1128] tracking-tight">
                The Integents Review
              </h2>
            </div>
            <Link href="/insights" className="text-xs font-mono uppercase tracking-wider text-[#1e60b5] font-semibold hover:underline flex items-center">
              Access Full Monograph Archive <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FEATURED_INSIGHTS.map((insight, idx) => (
              <div 
                key={insight.slug}
                className="bg-[#fafaf9] rounded-xs overflow-hidden border border-slate-200 flex flex-col justify-between group hover:border-slate-300 transition-colors"
              >
                <div>
                  <div className="editorial-photo-frame aspect-[16/10] relative">
                    <img 
                      src={insight.image} 
                      alt={insight.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="heritage-badge text-[9px] bg-white/95 text-[#0a1128] border-none shadow-xs">
                        {insight.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center space-x-3 text-[10px] font-mono text-slate-500">
                      <span>{insight.date}</span>
                      <span>&bull;</span>
                      <span>{insight.readTime}</span>
                    </div>

                    <h3 className="text-lg font-serif font-bold text-[#0a1128] group-hover:text-[#1e60b5] transition-colors leading-snug">
                      {insight.title}
                    </h3>

                    <p className="text-xs text-slate-600 font-light leading-relaxed line-clamp-3">
                      {insight.summary}
                    </p>

                    <div className="text-[11px] font-mono text-[#1e60b5] font-medium pt-1">
                      Author: {insight.author}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-200 mt-4 flex items-center justify-between">
                  <button 
                    onClick={() => setActiveArticleIndex(idx)}
                    className="text-xs font-mono uppercase tracking-wider text-[#1e60b5] hover:underline flex items-center font-semibold"
                  >
                    <span>Read Monograph</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                  </button>
                  <Link 
                    href={`/insights/${insight.slug}`} 
                    className="text-[11px] font-mono text-slate-500 hover:text-slate-800"
                  >
                    Direct URL &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ARTICLE READER MODAL (FOR IN-PAGE READING) */}
      <AnimatePresence>
        {activeArticleIndex !== null && (
          <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.98, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 15 }}
              className="bg-white border border-slate-300 rounded-xs max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-10 shadow-2xl relative text-slate-900"
            >
              <button 
                onClick={() => setActiveArticleIndex(null)}
                className="absolute top-5 right-5 p-2 rounded-xs bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-4">
                <span className="heritage-badge text-[10px]">{FEATURED_INSIGHTS[activeArticleIndex].category}</span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#0a1128]">
                  {FEATURED_INSIGHTS[activeArticleIndex].title}
                </h3>
                <div className="flex items-center space-x-3 text-xs font-mono text-slate-500 pb-4 border-b border-slate-200">
                  <span>{FEATURED_INSIGHTS[activeArticleIndex].author}</span>
                  <span>&bull;</span>
                  <span>{FEATURED_INSIGHTS[activeArticleIndex].date}</span>
                </div>
                
                <p className="text-sm font-serif italic text-slate-700 leading-relaxed border-l-2 border-[#1e60b5] pl-4 py-1">
                  {FEATURED_INSIGHTS[activeArticleIndex].summary}
                </p>

                <div className="text-xs sm:text-sm text-slate-700 space-y-4 leading-relaxed font-light whitespace-pre-line pt-4">
                  {FEATURED_INSIGHTS[activeArticleIndex].fullContent}
                </div>

                <div className="pt-6 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-500">
                    The Integents Review &bull; Global Practice Monograph
                  </span>
                  <button 
                    onClick={() => setActiveArticleIndex(null)}
                    className="btn-heritage-primary px-5 py-2 text-xs uppercase tracking-wider font-semibold"
                  >
                    Done Reading
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* SECTION 10: SOVEREIGN RETENTION & FIDUCIARY ENGAGEMENT DESK */}
      <section className="py-24 bg-[#0a1128] text-white relative overflow-hidden">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="border border-slate-800 rounded-xs p-10 lg:p-16 text-center max-w-5xl mx-auto shadow-2xl relative bg-[#0f1938]">
            <div className="relative z-10 space-y-6">
              <span className="heritage-badge-blue text-[10px]">Confidential Boardroom Retainer</span>
              <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
                Retain The Firm &bull; Schedule Executive Briefing
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
                Connect directly with an Improx Integents Senior Managing Partner to conduct a fiduciary value audit, model enterprise ROI vectors, and commission sovereign AI control planes.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Link 
                  href="/contact" 
                  className="btn-heritage-blue px-8 py-4 text-xs uppercase tracking-wider font-semibold flex items-center space-x-2"
                >
                  <span>Engage Senior Managing Partner</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>

                <Link 
                  href="/about" 
                  className="btn-heritage-secondary border-slate-600 text-white hover:bg-slate-800 hover:text-white px-8 py-4 text-xs uppercase tracking-wider font-semibold"
                >
                  <span>The Firm & Governance Charter</span>
                </Link>
              </div>

              <div className="pt-8 border-t border-slate-800 flex flex-wrap items-center justify-center gap-6 text-[11px] font-mono text-slate-400">
                <span className="flex items-center"><ShieldCheck className="w-3.5 h-3.5 mr-1.5 text-emerald-400" /> Mutual NDA Governed</span>
                <span className="flex items-center"><Lock className="w-3.5 h-3.5 mr-1.5 text-blue-400" /> Complete Data Airgap</span>
                <span className="flex items-center"><CheckCircle2 className="w-3.5 h-3.5 mr-1.5 text-sky-400" /> 100% Client Intellectual Property</span>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
