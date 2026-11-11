import { FEATURED_INSIGHTS } from "@/lib/data";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, BookOpen, FileText, Sparkles, TrendingUp, ShieldCheck } from "lucide-react";

export default function InsightsHub() {
  const EXECUTIVE_WHITEPAPERS = [
    {
      code: "WP-2026-04",
      topic: "Autonomous Finance",
      title: "Eliminating the 10-Day Close: Real-Time Algorithmic Financial Consolidation",
      readTime: "7 min read",
      author: "Elena Rostova & Arthur Sterling",
      summary: "How enterprise CFOs deploy autonomous reconciliation agents across multi-currency SAP and Oracle ERP ledgers to compress monthly financial closes from 10 business days to 4 hours."
    },
    {
      code: "WP-2026-05",
      topic: "Zero-Trust Cybersecurity",
      title: "A Board Member's Guide to Multi-Agent Containment & Data Airgaps",
      readTime: "9 min read",
      author: "Dr. Marcus Vance & Claire Zhang",
      summary: "Comprehensive diligence on preventing data egress, prompt injection vectors, and unauthorized tool calls across enterprise autonomous agentic systems."
    },
    {
      code: "WP-2026-06",
      topic: "Resilient Operations",
      title: "Near-Shoring & Cognitive Logistics: Re-Architecting Global Trade Nodes",
      readTime: "8 min read",
      author: "Arthur Sterling",
      summary: "Strategic models for shifting critical component manufacturing from single-source offshore nodes to regionalized, robotics-heavy micro-fulfillment facilities."
    },
    {
      code: "WP-2026-07",
      topic: "Industrial IoT & Energy",
      title: "Decarbonizing Heavy Industry: Real-Time Digital Twins & Scope 3 Telemetry",
      readTime: "10 min read",
      author: "Henrik Lindqvist",
      summary: "Deploying high-frequency IoT sensor telemetry and digital simulation models to audit industrial carbon intensity and satisfy EU CBAM cross-border tariffs."
    }
  ];

  const RESEARCH_CALENDAR = [
    {
      quarter: "Q1 2026",
      theme: "Sovereign AI Control Planes",
      status: "Published",
      desc: "Architectures for air-gapped enterprise multi-agent cognitive workforces and deterministic security rails."
    },
    {
      quarter: "Q2 2026",
      theme: "Dynamic Capital Allocation",
      status: "In Circulation",
      desc: "Replacing annual corporate budgets with real-options scenario modeling and algorithmic liquidity deployment."
    },
    {
      quarter: "Q3 2026",
      theme: "Autonomous Supply Chains",
      status: "Forthcoming",
      desc: "Near-autonomous logistics, cognitive spot procurement, and self-balancing regional distribution grids."
    },
    {
      quarter: "Q4 2026",
      theme: "Physical Asset Digital Twins",
      status: "In Research",
      desc: "Simulation models, predictive robotics telemetry, and capital mega-project risk optimization."
    }
  ];

  return (
    <div className="bg-white text-slate-900 min-h-screen pt-16 sm:pt-20">
      
      {/* =========================================================================
          SECTION 1: STATELY MONOGRAPH HERO
          ========================================================================= */}
      <section className="relative py-20 lg:py-28 border-b border-slate-200 bg-[#fdfdfd]">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-4">
            <span className="heritage-badge text-[10px]">Executive Thought Leadership</span>
            <h1 className="text-4xl sm:text-6xl font-serif font-bold text-[#0a1128] tracking-tight leading-[1.08]">
              The Integents Review: <br />
              <span className="italic font-serif text-[#1e60b5] font-normal">Strategic Research & Quarterly Monographs.</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed max-w-2xl">
              Proprietary research, macro-operational benchmarks, and sovereign agentic AI reference blueprints authored by senior practice leaders at Improx Integents.
            </p>
          </div>

          <div className="pt-10 mt-10 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl">
            <div>
              <div className="text-2xl font-serif font-bold text-[#0a1128]">Quarterly</div>
              <div className="text-[11px] font-mono text-slate-500 uppercase mt-0.5">Monograph Cadence</div>
            </div>
            <div>
              <div className="text-2xl font-serif font-bold text-[#1e60b5]">350+ Global</div>
              <div className="text-[11px] font-mono text-slate-500 uppercase mt-0.5">C-Suite Subscribers</div>
            </div>
            <div>
              <div className="text-2xl font-serif font-bold text-[#0a1128]">Peer-Reviewed</div>
              <div className="text-[11px] font-mono text-slate-500 uppercase mt-0.5">Quantitative Research</div>
            </div>
            <div>
              <div className="text-2xl font-serif font-bold text-slate-800">Zero Commercial Bias</div>
              <div className="text-[11px] font-mono text-slate-500 uppercase mt-0.5">Fiduciary Standard</div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: PRIMARY FEATURED MONOGRAPHS
          ========================================================================= */}
      <section className="py-24 border-b border-slate-200 bg-[#f8fafc]">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Lead Article Feature */}
          <div className="bg-white rounded-xs overflow-hidden border border-slate-200 shadow-sm mb-16 group">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 editorial-photo-frame aspect-[16/10] relative">
                <img 
                  src={FEATURED_INSIGHTS[0].image} 
                  alt={FEATURED_INSIGHTS[0].title} 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute top-4 left-4">
                  <span className="heritage-badge bg-white/95 text-[#0a1128] border-none shadow-xs">
                    FEATURED MONOGRAPH
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5 p-8 lg:p-10 space-y-4">
                <div className="flex items-center space-x-3 text-xs font-mono text-slate-500">
                  <span className="text-[#1e60b5] font-bold">{FEATURED_INSIGHTS[0].category}</span>
                  <span>&bull;</span>
                  <span>{FEATURED_INSIGHTS[0].date}</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0a1128] group-hover:text-[#1e60b5] transition-colors leading-snug">
                  {FEATURED_INSIGHTS[0].title}
                </h2>

                <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                  {FEATURED_INSIGHTS[0].summary}
                </p>

                <div className="text-xs font-mono text-slate-500 pt-2 border-t border-slate-100">
                  Lead Author: <span className="text-slate-900 font-bold">{FEATURED_INSIGHTS[0].author}</span>
                </div>

                <div className="pt-4">
                  <Link 
                    href={`/insights/${FEATURED_INSIGHTS[0].slug}`}
                    className="btn-heritage-primary px-6 py-3 text-xs uppercase tracking-wider font-semibold inline-flex items-center space-x-2"
                  >
                    <span>Read Full Monograph</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Secondary Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {FEATURED_INSIGHTS.slice(1).map((insight) => (
              <Link 
                key={insight.slug} 
                href={`/insights/${insight.slug}`} 
                className="bg-white rounded-xs overflow-hidden border border-slate-200 hover:border-slate-300 transition-all duration-200 flex flex-col justify-between group shadow-xs hover:shadow-md"
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

                  <div className="p-8 space-y-3">
                    <div className="flex items-center space-x-3 text-[10px] font-mono text-slate-500">
                      <span>{insight.date}</span>
                      <span>&bull;</span>
                      <span>{insight.readTime}</span>
                    </div>

                    <h3 className="text-xl font-serif font-bold text-[#0a1128] group-hover:text-[#1e60b5] transition-colors leading-snug">
                      {insight.title}
                    </h3>

                    <p className="text-xs text-slate-600 font-light leading-relaxed line-clamp-3">
                      {insight.summary}
                    </p>

                    <div className="text-[11px] font-mono text-[#1e60b5] font-semibold pt-2">
                      Author: {insight.author}
                    </div>
                  </div>
                </div>

                <div className="p-8 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between text-xs font-mono text-[#1e60b5] font-semibold">
                  <span>Read Executive Dossier</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          NEW SECTION 3: EXECUTIVE WHITEPAPER REPOSITORY
          ========================================================================= */}
      <section className="py-24 border-b border-slate-200 bg-white">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-16 space-y-4">
            <span className="heritage-badge text-[10px]">Technical Whitepapers</span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#0a1128] tracking-tight">
              Executive Whitepaper Series
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
              Targeted architectural analysis addressing high-stakes operational questions confronting Fortune 100 technology and financial leaders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {EXECUTIVE_WHITEPAPERS.map((wp) => (
              <div 
                key={wp.code}
                className="p-8 rounded-xs bg-[#fafaf9] border border-slate-200 flex flex-col justify-between hover:border-slate-300 transition-colors shadow-xs"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                    <span className="font-mono text-xs font-bold text-[#1e60b5]">{wp.code}</span>
                    <span className="text-[10px] font-mono text-slate-500 uppercase">{wp.topic}</span>
                  </div>

                  <h3 className="text-lg font-serif font-bold text-[#0a1128] leading-snug">
                    {wp.title}
                  </h3>

                  <p className="text-xs text-slate-600 font-light leading-relaxed">
                    {wp.summary}
                  </p>

                  <div className="pt-2 text-[11px] font-mono text-slate-500">
                    Authors: <strong className="text-slate-800">{wp.author}</strong> &bull; {wp.readTime}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-slate-400">BOARD BRIEFING QUALIFIED</span>
                  <Link 
                    href="/contact"
                    className="text-xs font-mono uppercase tracking-wider text-[#1e60b5] hover:underline font-semibold"
                  >
                    Request Full Monograph PDF &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          NEW SECTION 4: 2026 EDITORIAL RESEARCH AGENDA
          ========================================================================= */}
      <section className="py-24 border-b border-slate-200 bg-[#f8fafc]">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="heritage-badge text-[10px]">Research Roadmap</span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#0a1128] tracking-tight">
              2026 Editorial Research Agenda
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
              Our research calendar focuses exclusively on topics with structural enterprise balance sheet impact.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {RESEARCH_CALENDAR.map((cal) => (
              <div 
                key={cal.quarter}
                className="bg-white rounded-xs border border-slate-200 p-7 flex flex-col justify-between shadow-xs"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <span className="font-serif text-2xl font-bold text-[#1e60b5]">{cal.quarter}</span>
                    <span className="text-[10px] font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded-xs">
                      {cal.status}
                    </span>
                  </div>
                  <h3 className="text-base font-serif font-bold text-[#0a1128]">
                    {cal.theme}
                  </h3>
                  <p className="text-xs text-slate-600 font-light leading-relaxed">
                    {cal.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 5: STATELY PARTNER CTA
          ========================================================================= */}
      <section className="py-24 bg-[#0a1128] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <span className="heritage-badge-blue text-[10px]">Private Briefings</span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Commission Custom Research for Your Board
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto font-light leading-relaxed">
            Our research directors partner with enterprise executive committees to conduct bespoke macroeconomic stress testing and sovereign AI feasibility studies.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-heritage-blue px-8 py-4 text-xs uppercase tracking-wider font-semibold inline-flex items-center space-x-2">
              <span>Commission Board Research</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
            <Link href="/services" className="btn-heritage-secondary border-slate-600 text-white hover:bg-slate-800 hover:text-white px-8 py-4 text-xs uppercase tracking-wider font-semibold">
              <span>View Practice Directory</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
