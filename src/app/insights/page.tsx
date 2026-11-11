import { FEATURED_INSIGHTS } from "@/lib/data";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, BookOpen } from "lucide-react";

export default function InsightsHub() {
  return (
    <div className="bg-white text-slate-900 min-h-screen pt-28 lg:pt-36">
      
      {/* SECTION 1: STATELY MONOGRAPH HERO */}
      <section className="relative py-20 lg:py-28 border-b border-slate-200 bg-[#fdfdfd]">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-4">
            <span className="heritage-badge text-[10px]">Executive Thought Leadership</span>
            <h1 className="text-4xl sm:text-6xl font-serif font-bold text-[#0a1128] tracking-tight leading-[1.08]">
              The Integents Review: <br />
              <span className="italic font-serif text-[#1e60b5] font-normal">Strategic Research & Monographs.</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed max-w-2xl">
              Proprietary research, macro-operational benchmarks, and sovereign agentic AI reference blueprints authored by senior practice leaders at Improx Integents.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: INSIGHTS LIST */}
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
                  <span>Access Report</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
