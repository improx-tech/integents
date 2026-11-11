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
  Sparkles,
  MapPin,
  HelpCircle,
  Users,
  BookOpen,
  ChevronRight,
  Server,
  Database,
  Terminal,
  Clock,
  Briefcase
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
  // Interactive ROI Calculator State
  const [calcIndustry, setCalcIndustry] = useState("Financial Services & Banking");
  const [calcScale, setCalcScale] = useState("$2B - $10B Enterprise");
  const [calcGoal, setCalcGoal] = useState("Agentic AI & Workflow Automation");

  // Active Pillar for Interactive Matrix Showcase
  const [activePillarIdx, setActivePillarIdx] = useState(0);

  // Research Article Modal Reader State
  const [activeArticleIndex, setActiveArticleIndex] = useState<number | null>(null);

  // FAQ Active State
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

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

  // 6 Managing Partners Roster
  const MANAGING_PARTNERS = [
    {
      name: "Elena Rostova",
      role: "Global Managing Partner",
      practice: "Corporate Strategy & M&A",
      hub: "London / New York",
      tenure: "26 Years Advisory",
      focus: "Capital allocation, board governance, dynamic portfolio re-balancing.",
      image: "/practice-strategy.jpg"
    },
    {
      name: "Dr. Marcus Vance",
      role: "Senior Partner & Global Practice Head",
      practice: "Data & AI Systems",
      hub: "New York / Zurich",
      tenure: "22 Years Systems Research",
      focus: "Autonomous multi-agent control planes, deterministic guardrails, semantic memory.",
      image: "/practice-ai.jpg"
    },
    {
      name: "Arthur Sterling",
      role: "Senior Partner",
      practice: "Enterprise Operations & Supply Chain",
      hub: "Singapore / London",
      tenure: "24 Years Operating Authority",
      focus: "Near-autonomous logistics, cognitive procurement, working capital liberation.",
      image: "/practice-operations.jpg"
    },
    {
      name: "Claire Zhang",
      role: "Partner",
      practice: "Digital Modernization & Cloud",
      hub: "Singapore / New York",
      tenure: "18 Years Cloud Architecture",
      focus: "Decoupling legacy mainframes, zero-trust cybersecurity, multi-cloud resilience.",
      image: "/practice-cloud.jpg"
    },
    {
      name: "Henrik Lindqvist",
      role: "Partner",
      practice: "Industry X & Smart Automation",
      hub: "Zurich / London",
      tenure: "21 Years Industrial IoT",
      focus: "Digital twins, connected factory robotics, predictive asset longevity.",
      image: "/practice-industry.jpg"
    },
    {
      name: "Dr. Alistair Finch",
      role: "Senior Partner & Chief Economist",
      practice: "Macroeconomic Advisory & Risk",
      hub: "London / Zurich",
      tenure: "28 Years Central Banking",
      focus: "Sovereign fund allocation, interest rate volatility modeling, geopolitical realignment.",
      image: "/sector-banking.jpg"
    }
  ];

  // Global Decision Theaters
  const DECISION_THEATERS = [
    {
      city: "New York",
      address: "30 Hudson Yards, Suite 7400, New York, NY 10001",
      theater: "Americas Cognitive Decision Theater",
      focus: "Boardroom AI War Rooms, Algorithmic Risk Modeling, Sovereign Capital Advisory",
      lead: "Elena Rostova & Dr. Marcus Vance",
      specs: "48-seat immersive decision theater, dual air-gapped private compute clusters"
    },
    {
      city: "London",
      address: "1 Canada Square, Canary Wharf, London E14 5AA",
      theater: "EMEA Financial Systems Decision Center",
      focus: "Capital Markets Modernization, Fiduciary ESG Governance, Sovereign Banking Rails",
      lead: "Arthur Sterling & Dr. Alistair Finch",
      specs: "Direct Tier-1 exchange fiber interconnects, real-time stress test simulator"
    },
    {
      city: "Zurich",
      address: "Paradeplatz 8, 8001 Zürich, Switzerland",
      theater: "Sovereign Wealth & Private Capital Desk",
      focus: "Cross-Border Wealth Preservation, Zero-Trust Asset Rings, Industrial Robotics",
      lead: "Henrik Lindqvist",
      specs: "Bank-grade biometric airgap, physical Faraday isolation chambers"
    },
    {
      city: "Singapore",
      address: "Marina Bay Financial Centre, Tower 2, Singapore 018983",
      theater: "APAC Supply Network Orchestration Hub",
      focus: "Near-Autonomous Logistics, Cross-Border Trade Telemetry, Maritime AI",
      lead: "Claire Zhang",
      specs: "Real-time satellite AIS container telemetry, global supply chain digital twin"
    },
    {
      city: "Pune",
      address: "World Trade Center, Tower 4, Kharadi, Pune 411014",
      theater: "Global Systems Engineering Labs",
      focus: "High-Throughput MLOps, Compiler Engineering, Zero-Egress Cloud Deployments",
      lead: "Head of Engineering Practice",
      specs: "2,000+ GPU sovereign inference cluster, automated deterministic benchmark sandbox"
    }
  ];

  // 6 Boardroom Governance FAQ
  const FAQS = [
    {
      q: "How does Improx Integents protect client intellectual property?",
      a: "Total client IP ownership is our non-negotiable institutional covenant. Upon milestone verification, 100% of engineered software, proprietary algorithms, deterministic prompt pipelines, and custom neural model weights are transferred fully to the client. We do not retain residual IP, we do not pool client data across engagements, and our air-gapped architecture ensures zero training on client proprietary datasets."
    },
    {
      q: "How does your partner staffing model differ from conventional consulting conglomerates?",
      a: "We repudiate the pyramid leverage model where junior associates and recent graduates are staffed to learn on client budgets. Every Integents mandate is staffed exclusively by senior partners, distinguished principal systems architects, and sovereign AI researchers possessing 15 to 25+ years of direct operating and boardroom authority."
    },
    {
      q: "What is the difference between conventional GenAI and Sovereign Agentic Control Planes?",
      a: "Conventional GenAI relies on passive chat interfaces that produce unverified, hallucination-prone text with significant data leakage exposure. Sovereign Agentic Control Planes are autonomous multi-agent networks operating within deterministic guardrails on your private cloud. They execute complex multi-step workflows (e.g. cross-system ERP reconciliation, automated spot commodity procurement) with strict transactional ceilings, role-based access control, and immutable audit logging."
    },
    {
      q: "How do your fee structures align with enterprise EBITDA targets?",
      a: "We offer performance-indexed commercial frameworks where up to 40% of advisory partner remuneration is tied directly to verified EBITDA expansion, capital release, or operational throughput milestones audited by your internal finance committee. We do not engage in indefinite open-ended hourly billing."
    },
    {
      q: "What is the typical timeline to initial measurable production value?",
      a: "Through our 4-phase precision delivery methodology, initial production-grade prototypes operating on live sanitized client data are deployed within our isolated security sandbox in 60 to 90 days. Full enterprise production rollout and capability transfer typically concludes within 4 to 6 months."
    },
    {
      q: "How are multi-jurisdiction regulatory compliances enforced?",
      a: "All sovereign control planes are engineered with hard-coded deterministic compliance layers conforming strictly to SEC, FINRA, HIPAA, FDA, EU AI Act (2024), and Basel IV standards. Every decision vector and automated transaction generates an immutable cryptographic audit record suitable for regulatory filing."
    }
  ];

  return (
    <div className="bg-white text-slate-900 min-h-screen pt-16 sm:pt-20">
      
      {/* =========================================================================
          SECTION 1: STATELY EDITORIAL HERO WITH SPLIT ARCHITECTURAL SPREAD
          ========================================================================= */}
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

            {/* Right Column: Prestigious Boardroom Photographic Spread (5 Cols) */}
            <div className="lg:col-span-5 relative">
              <div className="bg-white rounded-xs border border-slate-200 p-3 sm:p-4 shadow-[0_12px_40px_rgb(0,0,0,0.08)] relative">
                
                {/* Editorial Photography Frame */}
                <div className="editorial-photo-frame rounded-xs aspect-[16/11] relative overflow-hidden">
                  <img 
                    src="/hero-boardroom.jpg" 
                    alt="Improx Integents Senior Managing Partners in Executive Boardroom Advisory"
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1128]/85 via-[#0a1128]/15 to-transparent"></div>
                  
                  {/* Top Floating Badge */}
                  <div className="absolute top-3.5 left-3.5 bg-white/95 backdrop-blur-md px-3 py-1 rounded-xs border border-slate-200 shadow-sm flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1e60b5]"></span>
                    <span className="text-[10px] font-mono text-slate-900 font-bold uppercase tracking-wider">
                      SENIOR MANAGING PARTNERS &bull; NEW YORK &bull; LONDON
                    </span>
                  </div>

                  {/* Bottom Photo Caption */}
                  <div className="absolute bottom-3 left-3.5 right-3.5 flex justify-between items-end text-white">
                    <div>
                      <div className="text-xs font-serif font-bold text-white tracking-wide">
                        Fiduciary Boardroom Review &bull; Autonomous Control Plane Deployment
                      </div>
                      <div className="text-[10px] font-mono text-slate-300 mt-0.5">
                        Elena Rostova (Global Managing Partner) & Dr. Marcus Vance (Head of AI Practice)
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-300 bg-emerald-950/70 border border-emerald-500/40 px-2 py-0.5 rounded-xs font-semibold whitespace-nowrap hidden sm:inline-block">
                      AUDITED 2026
                    </span>
                  </div>
                </div>

                {/* Stately Financial Telemetry Card Beneath Image */}
                <div className="pt-3.5 space-y-2.5">
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="bg-[#fafaf9] p-2.5 rounded-xs border border-slate-200">
                      <div className="text-base font-serif font-bold text-[#0a1128]">$14.2B+</div>
                      <div className="text-[9px] font-mono text-slate-500 uppercase">Capital Value</div>
                    </div>
                    <div className="bg-[#fafaf9] p-2.5 rounded-xs border border-slate-200">
                      <div className="text-base font-serif font-bold text-[#1e60b5]">100%</div>
                      <div className="text-[9px] font-mono text-slate-500 uppercase">Client IP Ringfence</div>
                    </div>
                    <div className="bg-[#fafaf9] p-2.5 rounded-xs border border-slate-200">
                      <div className="text-base font-serif font-bold text-slate-900">Zero</div>
                      <div className="text-[9px] font-mono text-slate-500 uppercase">Speculative Overhead</div>
                    </div>
                  </div>

                  {/* Managing Partner Quote */}
                  <div className="p-3 bg-slate-50 rounded-xs border border-slate-200 text-xs">
                    <p className="text-slate-700 italic font-serif leading-relaxed">
                      &ldquo;We don&apos;t produce slide decks that stall in committee. We engineer sovereign control planes that compound enterprise balance sheet value from Day 1.&rdquo;
                    </p>
                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-200 text-[10px] font-mono text-slate-500">
                      <span>Elena Rostova &bull; Global Managing Partner</span>
                      <Link href="/about" className="text-[#1e60b5] font-semibold hover:underline">
                        Firm Leadership &rarr;
                      </Link>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: CLIENT BENCHMARK ROW (FINANCIAL TIMES EDITORIAL FORMAT)
          ========================================================================= */}
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

      {/* =========================================================================
          SECTION 3: THE 50-YEAR HERITAGE & INSTITUTIONAL CHARTER
          ========================================================================= */}
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

      {/* =========================================================================
          SECTION 4: THE 5 STRATEGIC CAPABILITY PILLARS (PRACTICE MATRIX)
          ========================================================================= */}
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

      {/* =========================================================================
          SECTION 5: DELIVERY METHODOLOGY (4-PHASE GOVERNANCE)
          ========================================================================= */}
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

      {/* =========================================================================
          SECTION 6: INTERACTIVE ENTERPRISE VALUE MODELER (ROI ESTIMATOR)
          ========================================================================= */}
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

      {/* =========================================================================
          NEW SECTION 7: SOVEREIGN CONTROL PLANE REFERENCE ARCHITECTURE
          ========================================================================= */}
      <section className="py-24 border-b border-slate-200 bg-white">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-16 space-y-4">
            <span className="heritage-badge text-[10px]">Technical Reference Blueprint</span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#0a1128] tracking-tight">
              Sovereign Multi-Agent Control Plane Architecture
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
              How Global 2000 enterprises deploy autonomous multi-agent cognitive workforces while maintaining 100% zero-trust airgap security, zero data egress, and immutable board-level audit trails.
            </p>
          </div>

          {/* 4-Layer Architecture Diagram */}
          <div className="space-y-4 max-w-5xl mx-auto">
            
            {/* Layer 1: Deterministic Guardrails */}
            <div className="p-6 rounded-xs bg-[#fafaf9] border-2 border-slate-300 hover:border-[#1e60b5] transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-200">
                <div className="flex items-center space-x-3">
                  <span className="text-xs font-mono font-bold text-white bg-[#0a1128] px-2.5 py-1 rounded-xs">LAYER 01</span>
                  <h3 className="text-base font-serif font-bold text-[#0a1128]">Deterministic Governance & Compliance Rails</h3>
                </div>
                <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-xs font-semibold">
                  Zero Hallucination Tolerance &bull; Hard Stop Triggers
                </span>
              </div>
              <p className="text-xs text-slate-600 font-light mt-3 leading-relaxed">
                Hardware-enforced transactional limits, strict role-based access control (RBAC), and automated regulatory pre-flight checks (SEC, FINRA, HIPAA, EU AI Act). Restricts autonomous agent decisions from violating corporate balance sheet boundaries or compliance statutes.
              </p>
              <div className="mt-3 flex flex-wrap gap-2 text-[10px] font-mono text-slate-500">
                <span className="bg-white px-2 py-1 rounded-xs border border-slate-200">&bull; Cryptographic Ledger Audits</span>
                <span className="bg-white px-2 py-1 rounded-xs border border-slate-200">&bull; Latency &lt; 25ms Ceiling</span>
                <span className="bg-white px-2 py-1 rounded-xs border border-slate-200">&bull; Sovereign Secret Ringfence</span>
              </div>
            </div>

            {/* Layer 2: Model-Agnostic Cognitive Orchestration */}
            <div className="p-6 rounded-xs bg-[#fafaf9] border-2 border-slate-300 hover:border-[#1e60b5] transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-200">
                <div className="flex items-center space-x-3">
                  <span className="text-xs font-mono font-bold text-white bg-[#1e60b5] px-2.5 py-1 rounded-xs">LAYER 02</span>
                  <h3 className="text-base font-serif font-bold text-[#0a1128]">Model-Agnostic Cognitive Agent Mesh</h3>
                </div>
                <span className="text-[10px] font-mono text-blue-700 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded-xs font-semibold">
                  Dynamic Router &bull; Proprietary & Open-Weights
                </span>
              </div>
              <p className="text-xs text-slate-600 font-light mt-3 leading-relaxed">
                Dynamic routing engine that assigns specialized reasoning tasks to appropriate neural architectures. Procurement negotiation agents, financial reconciliation workers, and code refactoring agents communicate via semantic protocol buffers without human intervention.
              </p>
              <div className="mt-3 flex flex-wrap gap-2 text-[10px] font-mono text-slate-500">
                <span className="bg-white px-2 py-1 rounded-xs border border-slate-200">&bull; Multi-Agent Consensus Verification</span>
                <span className="bg-white px-2 py-1 rounded-xs border border-slate-200">&bull; Tool-Calling Sandbox</span>
                <span className="bg-white px-2 py-1 rounded-xs border border-slate-200">&bull; Automated Self-Correction Loop</span>
              </div>
            </div>

            {/* Layer 3: Semantic Memory & Knowledge Graph */}
            <div className="p-6 rounded-xs bg-[#fafaf9] border-2 border-slate-300 hover:border-[#1e60b5] transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-200">
                <div className="flex items-center space-x-3">
                  <span className="text-xs font-mono font-bold text-white bg-slate-800 px-2.5 py-1 rounded-xs">LAYER 03</span>
                  <h3 className="text-base font-serif font-bold text-[#0a1128]">Enterprise Semantic Memory & Unified Knowledge Graph</h3>
                </div>
                <span className="text-[10px] font-mono text-purple-700 bg-purple-50 border border-purple-200 px-2 py-0.5 rounded-xs font-semibold">
                  Sub-Millisecond Vector Retrieval &bull; Real-Time Context
                </span>
              </div>
              <p className="text-xs text-slate-600 font-light mt-3 leading-relaxed">
                High-performance vector databases integrated with enterprise ontologies. Feeds agents precise corporate context, contract histories, and telemetry schemas while blocking data poisoning and cross-tenant leakage.
              </p>
              <div className="mt-3 flex flex-wrap gap-2 text-[10px] font-mono text-slate-500">
                <span className="bg-white px-2 py-1 rounded-xs border border-slate-200">&bull; Hybrid Dense/Sparse Search</span>
                <span className="bg-white px-2 py-1 rounded-xs border border-slate-200">&bull; Zero External API Egress</span>
                <span className="bg-white px-2 py-1 rounded-xs border border-slate-200">&bull; Epistemic Uncertainty Metrics</span>
              </div>
            </div>

            {/* Layer 4: Private Infrastructure & Legacy Integration */}
            <div className="p-6 rounded-xs bg-[#fafaf9] border-2 border-slate-300 hover:border-[#1e60b5] transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-200">
                <div className="flex items-center space-x-3">
                  <span className="text-xs font-mono font-bold text-white bg-slate-600 px-2.5 py-1 rounded-xs">LAYER 04</span>
                  <h3 className="text-base font-serif font-bold text-[#0a1128]">Private Infrastructure & Enterprise Legacy Integration</h3>
                </div>
                <span className="text-[10px] font-mono text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-xs font-semibold">
                  Airgapped On-Prem &bull; Sovereign Cloud
                </span>
              </div>
              <p className="text-xs text-slate-600 font-light mt-3 leading-relaxed">
                Connects directly into core SAP, Oracle, Workday, Salesforce, and custom mainframe ledgers through bi-directional transactional adapters. Deployed either on-premises behind client firewalls or in dedicated private cloud VPCs.
              </p>
              <div className="mt-3 flex flex-wrap gap-2 text-[10px] font-mono text-slate-500">
                <span className="bg-white px-2 py-1 rounded-xs border border-slate-200">&bull; 100% Client-Controlled Bare Metal</span>
                <span className="bg-white px-2 py-1 rounded-xs border border-slate-200">&bull; SOC2 Type II Certified</span>
                <span className="bg-white px-2 py-1 rounded-xs border border-slate-200">&bull; ISO 27001 / FIPS 140-3</span>
              </div>
            </div>

          </div>

          <div className="mt-12 text-center">
            <Link 
              href="/contact"
              className="btn-heritage-primary text-xs uppercase tracking-wider font-semibold inline-flex items-center space-x-2"
            >
              <span>Commission Technical Architecture Review</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Link>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 8: CLIENT CASE STUDIES (FINANCIAL TIMES EDITORIAL SPREAD)
          ========================================================================= */}
      <section className="py-24 border-b border-slate-200 bg-[#f8fafc]">
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
              <div className="bg-white rounded-xs overflow-hidden border border-slate-200 h-full flex flex-col justify-between group hover:border-slate-300 transition-colors shadow-xs">
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
                  className="bg-white rounded-xs border border-slate-200 p-6 flex flex-col justify-between group hover:border-slate-300 transition-colors shadow-xs"
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

      {/* =========================================================================
          SECTION 9: GLOBAL INDUSTRY DOMAINS (6 BESPOKE SECTOR SPREADS)
          ========================================================================= */}
      <section className="py-24 border-b border-slate-200 bg-white">
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
                className="bg-[#fafaf9] rounded-xs overflow-hidden border border-slate-200 hover:border-slate-300 transition-all duration-200 group flex flex-col justify-between shadow-xs hover:shadow-md"
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

                <div className="p-6 pt-0 border-t border-slate-200 mt-4 flex items-center justify-between text-xs font-mono">
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

      {/* =========================================================================
          NEW SECTION 10: COMPARATIVE TRANSFORMATION BENCHMARK TABLE
          ========================================================================= */}
      <section className="py-24 border-b border-slate-200 bg-[#f8fafc]">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-16 space-y-4">
            <span className="heritage-badge text-[10px]">Comparative Diligence</span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#0a1128] tracking-tight">
              The Sovereign Difference
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
              A direct comparison of engagement standards between conventional consulting conglomerates and the Improx Integents sovereign engineering model.
            </p>
          </div>

          <div className="bg-white rounded-xs border border-slate-200 overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 bg-[#fafaf9]">
                    <th className="p-5 text-xs font-mono uppercase tracking-wider text-slate-600 font-bold w-1/4">Evaluation Criterion</th>
                    <th className="p-5 text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold w-3/8">Conventional Advisory Conglomerate</th>
                    <th className="p-5 text-xs font-mono uppercase tracking-wider text-[#1e60b5] font-bold w-3/8 bg-blue-50/40 border-l border-blue-100">Improx Integents Sovereign Practice</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs">
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-5 font-bold text-[#0a1128] font-serif">Staffing Leverage</td>
                    <td className="p-5 text-slate-600 font-light">Pyramid leverage: 8-12 junior associates per senior partner. Client pays for analyst training.</td>
                    <td className="p-5 font-medium text-slate-900 bg-blue-50/20 border-l border-blue-100 flex items-start space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-[#1e60b5] flex-shrink-0 mt-0.5" />
                      <span>Zero junior leverage. 100% senior partner & principal architect led.</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-5 font-bold text-[#0a1128] font-serif">Deliverable Output</td>
                    <td className="p-5 text-slate-600 font-light">Static 200-page PowerPoint decks, recommendations without code or execution accountability.</td>
                    <td className="p-5 font-medium text-slate-900 bg-blue-50/20 border-l border-blue-100 flex items-start space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-[#1e60b5] flex-shrink-0 mt-0.5" />
                      <span>Working production control planes, containerized microservices, running code.</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-5 font-bold text-[#0a1128] font-serif">Intellectual Property</td>
                    <td className="p-5 text-slate-600 font-light">Vendor retains underlying IP, models, and tools. Client bound to ongoing maintenance contracts.</td>
                    <td className="p-5 font-medium text-slate-900 bg-blue-50/20 border-l border-blue-100 flex items-start space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-[#1e60b5] flex-shrink-0 mt-0.5" />
                      <span>100% Client IP Ownership transferred unconditionally at stage gates.</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-5 font-bold text-[#0a1128] font-serif">Commercial Alignment</td>
                    <td className="p-5 text-slate-600 font-light">Indefinite hourly rate cards or open-ended monthly T&M billing models.</td>
                    <td className="p-5 font-medium text-slate-900 bg-blue-50/20 border-l border-blue-100 flex items-start space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-[#1e60b5] flex-shrink-0 mt-0.5" />
                      <span>EBITDA milestone-linked fees. Partner compensation tied to audited client savings.</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-5 font-bold text-[#0a1128] font-serif">AI Architecture</td>
                    <td className="p-5 text-slate-600 font-light">Public cloud LLM wrappers with data leakage risks, prompt instability, and high hallucination rates.</td>
                    <td className="p-5 font-medium text-slate-900 bg-blue-50/20 border-l border-blue-100 flex items-start space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-[#1e60b5] flex-shrink-0 mt-0.5" />
                      <span>Deterministic multi-agent control planes with zero-egress private infrastructure.</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-5 font-bold text-[#0a1128] font-serif">Time to Production Value</td>
                    <td className="p-5 text-slate-600 font-light">18 - 36 months multi-phase transformation roadmaps frequently derailed by committee.</td>
                    <td className="p-5 font-medium text-slate-900 bg-blue-50/20 border-l border-blue-100 flex items-start space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-[#1e60b5] flex-shrink-0 mt-0.5" />
                      <span>60 - 90 days to working sandbox prototype; 4 - 6 months to enterprise scale.</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 11: EXECUTIVE JOURNAL & MONOGRAPHS (WITH IN-PAGE MODAL READER)
          ========================================================================= */}
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
                    className="text-xs font-mono uppercase tracking-wider text-[#1e60b5] hover:underline flex items-center font-semibold cursor-pointer"
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

      {/* =========================================================================
          NEW SECTION 12: GLOBAL MANAGING PARTNER BOARD & LEADERSHIP
          ========================================================================= */}
      <section className="py-24 border-b border-slate-200 bg-[#f8fafc]">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-slate-200 gap-6">
            <div>
              <span className="heritage-badge text-[10px] mb-3">Institutional Stewardship</span>
              <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#0a1128] tracking-tight">
                Global Managing Partner Board
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md font-light leading-relaxed">
              Every mandate is staffed directly by senior partners with over two decades of boardroom and operating authority.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MANAGING_PARTNERS.map((partner) => (
              <div 
                key={partner.name}
                className="bg-white rounded-xs border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-[16/10] relative overflow-hidden">
                    <img 
                      src={partner.image} 
                      alt={partner.name} 
                      className="w-full h-full object-cover" 
                    />
                    <div className="absolute top-3 left-3">
                      <span className="text-[9px] font-mono font-bold bg-[#0a1128]/90 text-white px-2 py-0.5 rounded-xs">
                        {partner.tenure}
                      </span>
                    </div>
                    <div className="absolute bottom-3 right-3">
                      <span className="text-[10px] font-mono text-white bg-[#1e60b5]/90 px-2 py-0.5 rounded-xs">
                        {partner.hub}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-2">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-[#1e60b5] font-bold">
                      {partner.practice}
                    </div>
                    <h3 className="text-xl font-serif font-bold text-[#0a1128]">
                      {partner.name}
                    </h3>
                    <div className="text-xs font-serif italic text-slate-600">
                      {partner.role}
                    </div>
                    <p className="text-xs text-slate-600 font-light leading-relaxed pt-2 border-t border-slate-100">
                      {partner.focus}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link 
                    href="/contact"
                    className="text-xs font-mono uppercase tracking-wider text-[#1e60b5] hover:underline flex items-center justify-between font-semibold border-t border-slate-100 pt-3"
                  >
                    <span>Request Confidential Briefing</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          NEW SECTION 13: GLOBAL DECISION THEATERS & BRIEFING CENTERS
          ========================================================================= */}
      <section className="py-24 border-b border-slate-200 bg-white">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="heritage-badge text-[10px]">Physical Infrastructure</span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#0a1128] tracking-tight">
              Global Sovereign Decision Theaters
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
              Our 5 state-of-the-art physical executive briefing centers provide air-gapped decision environments for Fortune 100 boards, sovereign fund sponsors, and C-suite leadership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DECISION_THEATERS.map((hub) => (
              <div 
                key={hub.city}
                className="p-7 rounded-xs bg-[#fafaf9] border border-slate-200 space-y-4 hover:border-slate-300 transition-colors"
              >
                <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-[#1e60b5]" />
                    <span className="text-base font-serif font-bold text-[#0a1128]">{hub.city} Hub</span>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                </div>

                <div>
                  <div className="text-xs font-serif font-bold text-[#0a1128] mb-1">{hub.theater}</div>
                  <p className="text-xs text-slate-600 font-light leading-relaxed">{hub.focus}</p>
                </div>

                <div className="p-3 bg-white rounded-xs border border-slate-200 text-[11px] font-mono text-slate-500 space-y-1">
                  <div><strong className="text-slate-800">Address:</strong> {hub.address}</div>
                  <div><strong className="text-slate-800">Lead:</strong> {hub.lead}</div>
                  <div><strong className="text-slate-800">Specs:</strong> {hub.specs}</div>
                </div>

                <Link 
                  href="/contact"
                  className="text-xs font-mono uppercase tracking-wider text-[#1e60b5] hover:underline flex items-center font-semibold pt-1"
                >
                  <span>Book Decision Theater Session</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Link>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          NEW SECTION 14: BOARDROOM GOVERNANCE & ADVISORY FAQ
          ========================================================================= */}
      <section className="py-24 border-b border-slate-200 bg-[#f8fafc]">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-16 space-y-4">
            <span className="heritage-badge text-[10px]">Governance Standards</span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#0a1128] tracking-tight">
              Frequently Addressed Boardroom Questions
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
              Clear institutional counsel regarding client IP ownership, partner staffing covenants, commercial fee structures, and multi-agent regulatory compliance.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {FAQS.map((faq, idx) => (
              <div 
                key={idx}
                className="bg-white border border-slate-200 rounded-xs overflow-hidden shadow-xs"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-50/70 transition-colors cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-serif font-bold text-[#0a1128] pr-4">
                    {faq.q}
                  </span>
                  <span className="text-[#1e60b5] font-mono text-lg font-bold flex-shrink-0">
                    {activeFaq === idx ? "—" : "+"}
                  </span>
                </button>

                {activeFaq === idx && (
                  <div className="p-6 pt-0 border-t border-slate-100 text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center text-xs text-slate-500 font-mono">
            Have a specific governance or conflict-of-interest query?{" "}
            <Link href="/contact" className="text-[#1e60b5] font-semibold hover:underline">
              Submit Direct Board Inquiry &rarr;
            </Link>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 15: ARTICLE READER MODAL (FOR IN-PAGE READING)
          ========================================================================= */}
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
                className="absolute top-5 right-5 p-2 rounded-xs bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
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
                    className="btn-heritage-primary px-5 py-2 text-xs uppercase tracking-wider font-semibold cursor-pointer"
                  >
                    Done Reading
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* =========================================================================
          SECTION 16: SOVEREIGN RETENTION & FIDUCIARY ENGAGEMENT DESK (FINAL CTA)
          ========================================================================= */}
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
