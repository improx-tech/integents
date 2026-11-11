"use client";

import { useState, use } from "react";
import { SUB_SERVICE_DETAILS, ENTERPRISE_PILLARS } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { 
  ArrowRight, 
  ChevronRight, 
  ShieldCheck, 
  CheckCircle2, 
  Building2, 
  FileText, 
  TrendingUp, 
  Lock, 
  HelpCircle,
  BarChart3,
  Globe,
  Award,
  ChevronDown,
  BookOpen
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface PageProps {
  params: Promise<{ slug: string; subSlug: string }>;
}

export default function SubServicePage({ params }: PageProps) {
  const { slug, subSlug } = use(params);
  const [activeIndustryTab, setActiveIndustryTab] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);
  const [expandedArticle, setExpandedArticle] = useState<number | null>(0);

  // Find pillar category
  const pillar = ENTERPRISE_PILLARS.find(p => p.slug === slug);
  const detail = SUB_SERVICE_DETAILS[subSlug];

  if (!pillar || !detail) {
    notFound();
  }

  return (
    <div className="bg-white text-slate-900 min-h-screen pt-20 lg:pt-24">
      
      {/* BREADCRUMB & HERO SECTION */}
      <section className="relative pb-20 border-b border-slate-200 bg-[#fdfdfd]">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb Navigation */}
          <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 mb-8 flex items-center space-x-2">
            <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link href="/services" className="hover:text-slate-900 transition-colors">Practices</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link href={`/services/${slug}`} className="hover:text-[#1e60b5] transition-colors">{pillar.category}</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[#0a1128] font-bold">{detail.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Hero Text (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center space-x-3">
                <span className="heritage-badge text-[10px]">{pillar.category} Practice</span>
                <span className="text-xs font-mono text-slate-500 hidden sm:inline-block">EXECUTIVE DOSSIER</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#0a1128] tracking-tight leading-[1.1]">
                {detail.title}
              </h1>

              <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed max-w-2xl">
                {detail.description}
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <Link 
                  href="/contact" 
                  className="btn-heritage-primary text-xs uppercase tracking-wider font-semibold flex items-center justify-center space-x-2"
                >
                  <span>Request Strategic Briefing</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>

                <a 
                  href="#research" 
                  className="btn-heritage-secondary text-xs uppercase tracking-wider font-semibold flex items-center justify-center"
                >
                  <span>Read Reference Benchmark</span>
                </a>
              </div>

              {/* Key Quantitative Metrics Grid */}
              <div className="pt-8 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-4">
                {detail.keyStats.map((st: any) => (
                  <div key={st.label} className="p-3.5 bg-[#fafaf9] border border-slate-200 rounded-xs">
                    <div className="text-xl sm:text-2xl font-serif font-bold text-[#0a1128] tracking-tight">{st.value}</div>
                    <div className="text-[10px] font-mono text-slate-500 uppercase mt-0.5 leading-tight">{st.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Editorial Image Frame (5 Cols) */}
            <div className="lg:col-span-5">
              <div className="editorial-photo-frame rounded-xs shadow-md aspect-[4/3] relative">
                <img 
                  src={detail.heroImage} 
                  alt={detail.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1128]/75 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-white">
                  <span>PRODUCTION ARCHITECTURE</span>
                  <span className="text-emerald-300 font-semibold">ISO 27001 AUDITED</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 2: EXECUTIVE SUMMARY & STRATEGIC CHALLENGE / SOLUTION */}
      <section className="py-24 border-b border-slate-200 bg-white">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 space-y-3">
            <span className="heritage-badge text-[10px]">Boardroom Briefing</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0a1128] tracking-tight">
              {detail.executiveSummary.headline}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Challenge Card (6 Cols) */}
            <div className="lg:col-span-6 bg-[#fafaf9] rounded-xs p-8 border border-slate-200 space-y-4">
              <span className="text-xs font-mono text-amber-700 uppercase tracking-widest font-bold">
                The Enterprise Challenge
              </span>
              <p className="text-sm text-slate-700 font-light leading-relaxed">
                {detail.executiveSummary.challenge}
              </p>
            </div>

            {/* Solution Card (6 Cols) */}
            <div className="lg:col-span-6 bg-slate-50 rounded-xs p-8 border border-slate-300 space-y-4">
              <span className="text-xs font-mono text-[#1e60b5] uppercase tracking-widest font-bold">
                The Improx Integents Solution
              </span>
              <p className="text-sm text-slate-700 font-light leading-relaxed">
                {detail.executiveSummary.solution}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: PROVEN TRACK RECORD & VALUE DELIVERED */}
      <section className="py-24 border-b border-slate-200 bg-[#f8fafc]">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl mb-16 space-y-3">
            <span className="heritage-badge text-[10px]">Empirical Outcomes</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0a1128] tracking-tight">
              Validated Execution Outcomes
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-light">
              Audited EBITDA and efficiency metrics recorded across our Global 2000 client engagements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {detail.whatWeHaveDone.map((item: any, idx: number) => (
              <div 
                key={idx}
                className="bg-white rounded-xs p-8 border border-slate-200 space-y-4 shadow-xs"
              >
                <div className="text-3xl sm:text-4xl font-serif font-bold text-[#1e60b5]">
                  {item.stat}
                </div>
                <h3 className="text-base font-serif font-bold text-[#0a1128]">
                  {item.headline}
                </h3>
                <p className="text-xs text-slate-600 font-light leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 4: 3-PHASE DELIVERY EXECUTION */}
      <section className="py-24 border-b border-slate-200 bg-white">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="heritage-badge text-[10px]">Engineering Lifecycle</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0a1128] tracking-tight">
              Phased Implementation Methodology
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-light">
              Structured deployment framework ensuring zero downtime and complete capability transfer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {detail.deliveryExecution.map((phase: any, idx: number) => (
              <div 
                key={idx}
                className="bg-[#fafaf9] rounded-xs p-8 border border-slate-200 space-y-4 relative"
              >
                <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                  <span className="font-mono text-xs text-[#1e60b5] font-bold">PHASE 0{idx + 1}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1e60b5]"></span>
                </div>
                <h3 className="text-base font-serif font-bold text-[#0a1128]">
                  {phase.phase}
                </h3>
                <p className="text-xs text-slate-600 font-light leading-relaxed">
                  {phase.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 5: INDUSTRY SOLUTIONS TABS */}
      <section className="py-24 border-b border-slate-200 bg-[#f8fafc]">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-slate-200 gap-6">
            <div>
              <span className="heritage-badge text-[10px] mb-3">Domain Vertical Applications</span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0a1128] tracking-tight">
                Sector-Tailored Architectures
              </h2>
            </div>
            
            {/* Tabs */}
            <div className="flex flex-wrap gap-2">
              {detail.industrySolutions.map((sol: any, idx: number) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndustryTab(idx)}
                  className={`px-4 py-2 rounded-xs text-xs font-mono uppercase tracking-wider transition-all ${
                    activeIndustryTab === idx
                      ? "bg-[#0a1128] text-white font-bold"
                      : "bg-white border border-slate-200 text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {sol.industry}
                </button>
              ))}
            </div>
          </div>

          {/* Active Tab Content Card */}
          <div className="bg-white rounded-xs overflow-hidden border border-slate-200 p-8 lg:p-12 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6 space-y-4">
                <span className="text-xs font-mono text-[#1e60b5] uppercase tracking-widest font-bold">
                  {detail.industrySolutions[activeIndustryTab].industry}
                </span>
                <h3 className="text-2xl font-serif font-bold text-[#0a1128]">
                  {detail.industrySolutions[activeIndustryTab].headline}
                </h3>
                <p className="text-sm text-slate-600 font-light leading-relaxed">
                  {detail.industrySolutions[activeIndustryTab].desc}
                </p>
                <div className="pt-2">
                  <Link 
                    href="/contact" 
                    className="btn-heritage-secondary px-6 py-2.5 text-xs font-mono uppercase tracking-wider inline-flex items-center space-x-2 font-semibold"
                  >
                    <span>Request Sector Case Deck</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="editorial-photo-frame rounded-xs aspect-[16/10]">
                  <img 
                    src={detail.industrySolutions[activeIndustryTab].image} 
                    alt={detail.industrySolutions[activeIndustryTab].headline}
                    className="w-full h-full object-cover" 
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 6: THREE FULL RESEARCH BENCHMARKS (EXPANDABLE) */}
      <section id="research" className="py-24 border-b border-slate-200 bg-white">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-16 space-y-3">
            <span className="heritage-badge text-[10px]">Proprietary Research</span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#0a1128] tracking-tight">
              Practice Research & Reference Blueprints
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-light">
              Comprehensive executive monographs on scalable architecture, CFO attribution, and sovereign zero-trust security.
            </p>
          </div>

          <div className="space-y-4 max-w-5xl">
            {detail.serviceResearchArticles.map((art: any, idx: number) => (
              <div 
                key={idx}
                className="bg-[#fafaf9] rounded-xs border border-slate-200 overflow-hidden"
              >
                <button
                  onClick={() => setExpandedArticle(expandedArticle === idx ? null : idx)}
                  className="w-full text-left p-6 flex items-center justify-between hover:bg-slate-100/60 transition-colors"
                >
                  <div className="space-y-1">
                    <div className="text-[10px] font-mono text-[#1e60b5] uppercase tracking-wider font-bold">
                      RESEARCH MONOGRAPH 0{idx + 1} &bull; {art.date} &bull; {art.wordCount}
                    </div>
                    <h3 className="text-lg font-serif font-bold text-[#0a1128]">
                      {art.title}
                    </h3>
                    <div className="text-xs font-mono text-slate-500">
                      Author: {art.author}
                    </div>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${expandedArticle === idx ? "rotate-180 text-[#1e60b5]" : ""}`} />
                </button>

                <AnimatePresence>
                  {expandedArticle === idx && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="px-6 pb-8 border-t border-slate-200 bg-white"
                    >
                      <div className="pt-6 text-xs sm:text-sm text-slate-700 font-light leading-relaxed whitespace-pre-line space-y-4 max-w-4xl">
                        {art.content}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 7: EXPANDABLE FAQS */}
      <section className="py-24 border-b border-slate-200 bg-[#f8fafc]">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl mb-12 space-y-3">
            <span className="heritage-badge text-[10px]">Institutional FAQs</span>
            <h2 className="text-3xl font-serif font-bold text-[#0a1128] tracking-tight">
              Enterprise Engagement Inquiries
            </h2>
          </div>

          <div className="space-y-3 max-w-4xl">
            {detail.faqs.map((faq: any, idx: number) => (
              <div 
                key={idx}
                className="bg-white rounded-xs border border-slate-200 overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full text-left p-5 flex items-center justify-between hover:bg-slate-50 transition-colors"
                >
                  <span className="text-sm font-serif font-bold text-[#0a1128] pr-4">
                    {faq.q}
                  </span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${expandedFaq === idx ? "rotate-180 text-[#1e60b5]" : ""}`} />
                </button>

                <AnimatePresence>
                  {expandedFaq === idx && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="px-5 pb-5 text-xs text-slate-600 font-light leading-relaxed border-t border-slate-100"
                    >
                      <div className="pt-3">{faq.a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 8: STATELY FINAL CTA */}
      <section className="py-24 bg-[#0a1128] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <span className="heritage-badge-blue text-[10px]">Confidential Engagement</span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Deploy {detail.title} in Production
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto font-light leading-relaxed">
            Schedule an executive briefing with our practice lead to audit your current operating maturity and formulate an industrialized target-state architecture.
          </p>
          <div className="pt-2">
            <Link href="/contact" className="btn-heritage-blue px-8 py-4 text-xs uppercase tracking-wider font-semibold inline-flex items-center space-x-2">
              <span>Schedule Strategic Briefing</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
