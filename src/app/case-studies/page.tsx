import { FEATURED_CASE_STUDIES } from "@/lib/data";
import Link from "next/link";
import { ArrowRight, TrendingUp, ShieldCheck } from "lucide-react";

export default function CaseStudiesHub() {
  return (
    <div className="bg-white text-slate-900 min-h-screen pt-28 lg:pt-36">
      
      {/* SECTION 1: STATELY CASE STUDIES HERO */}
      <section className="relative py-20 lg:py-28 border-b border-slate-200 bg-[#fdfdfd]">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-4">
            <span className="heritage-badge text-[10px]">Empirical Value Audits</span>
            <h1 className="text-4xl sm:text-6xl font-serif font-bold text-[#0a1128] tracking-tight leading-[1.08]">
              Audited Enterprise <br />
              <span className="italic font-serif text-[#1e60b5] font-normal">Transformation Case Dossiers.</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed max-w-2xl">
              Audited case studies demonstrating how Improx Integents partners with global market leaders to engineer high-margin growth, deploy autonomous agentic AI control planes, and decouple complex supply chains.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: CASE STUDIES LIST */}
      <section className="py-24 border-b border-slate-200 bg-[#f8fafc]">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FEATURED_CASE_STUDIES.map((study) => (
              <div 
                key={study.slug} 
                className="bg-white rounded-xs overflow-hidden border border-slate-200 flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-200 group"
              >
                <div>
                  <div className="editorial-photo-frame aspect-[16/10] relative">
                    <img 
                      src={study.image} 
                      alt={study.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="heritage-badge text-[9px] bg-white/95 text-[#0a1128] border-none shadow-xs">
                        {study.industry}
                      </span>
                    </div>
                  </div>

                  <div className="p-8 space-y-4">
                    <div className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest">
                      {study.client}
                    </div>

                    <h2 className="text-xl font-serif font-bold text-[#0a1128] group-hover:text-[#1e60b5] transition-colors leading-snug">
                      {study.title}
                    </h2>
                    
                    <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xs text-xs font-mono text-emerald-800 font-semibold flex items-center space-x-2">
                      <TrendingUp className="w-4 h-4 flex-shrink-0 text-emerald-600" />
                      <span>{study.impact}</span>
                    </div>

                    <p className="text-xs text-slate-600 font-light leading-relaxed">
                      {study.summary}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {study.tags.map(tag => (
                        <span key={tag} className="text-[10px] font-mono text-slate-600 bg-slate-100 px-2 py-0.5 rounded-xs border border-slate-200">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-8 pt-0 border-t border-slate-100 mt-4">
                  <Link 
                    href={`/case-studies/${study.slug}`} 
                    className="btn-heritage-primary w-full py-3 text-xs uppercase tracking-wider font-semibold text-center block"
                  >
                    Examine Case Dossier &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: STATELY CTA */}
      <section className="py-24 bg-[#0a1128] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <span className="heritage-badge-blue text-[10px]">Confidential Inquiries</span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Review Tailored Case Studies for Your Board
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto font-light leading-relaxed">
            Due to strict mutual non-disclosure agreements, select client case studies and balance sheet audit models are shared exclusively during private C-suite briefing sessions.
          </p>
          <div className="pt-2">
            <Link href="/contact" className="btn-heritage-blue px-8 py-4 text-xs uppercase tracking-wider font-semibold inline-flex items-center space-x-2">
              <span>Request Private Case Deck</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
