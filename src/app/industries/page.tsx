import { GLOBAL_INDUSTRIES } from "@/lib/data";
import Link from "next/link";
import { ArrowRight, ChevronRight, Landmark, Activity, Factory, ShoppingBag, Zap, Radio } from "lucide-react";

export default function IndustriesHub() {
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
      
      {/* SECTION 1: STATELY SECTORS HERO */}
      <section className="relative py-20 lg:py-28 border-b border-slate-200 bg-[#fdfdfd]">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-4">
            <span className="heritage-badge text-[10px]">Industry Domain Practices</span>
            <h1 className="text-4xl sm:text-6xl font-serif font-bold text-[#0a1128] tracking-tight leading-[1.08]">
              Sector Practice Leadership for <br />
              <span className="italic font-serif text-[#1e60b5] font-normal">Global Enterprise Conglomerates.</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed max-w-2xl">
              Deep operational, regulatory, and technical mastery across the world&apos;s most critical economic sectors. We help enterprise leadership navigate market disruption, capital allocation, and sovereign regulatory compliance.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: 6 SECTORS DIRECTORY */}
      <section className="py-24 border-b border-slate-200 bg-[#f8fafc]">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {GLOBAL_INDUSTRIES.map((ind) => (
              <Link 
                key={ind.slug} 
                href={`/industries/${ind.slug}`} 
                className="bg-white rounded-xs overflow-hidden border border-slate-200 hover:border-slate-300 transition-all duration-200 group flex flex-col justify-between shadow-xs hover:shadow-md"
              >
                <div>
                  <div className="editorial-photo-frame aspect-[16/10] relative">
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

                  <div className="p-8 space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                      <div className="flex items-center space-x-2.5">
                        {renderIndustryIcon(ind.iconName)}
                        <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500">Sector Practice</span>
                      </div>
                      <div className="text-right">
                        <div className="text-base font-serif font-bold text-[#1e60b5]">{ind.metric}</div>
                        <div className="text-[9px] font-mono text-slate-500 uppercase">{ind.metricLabel}</div>
                      </div>
                    </div>

                    <h2 className="text-xl font-serif font-bold text-[#0a1128] group-hover:text-[#1e60b5] transition-colors">
                      {ind.name}
                    </h2>

                    <p className="text-xs text-slate-600 font-light leading-relaxed">
                      {ind.desc}
                    </p>
                  </div>
                </div>

                <div className="p-8 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between text-xs font-mono text-[#1e60b5] font-semibold">
                  <span>Explore Sector Frameworks</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: STATELY CTA */}
      <section className="py-24 bg-[#0a1128] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <span className="heritage-badge-blue text-[10px]">Sector Briefings</span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Consult With A Senior Sector Practice Lead
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto font-light leading-relaxed">
            Connect directly with former industry executives to review benchmarks, regulatory shifts, and technical transformation roadmaps.
          </p>
          <div className="pt-2">
            <Link href="/contact" className="btn-heritage-blue px-8 py-4 text-xs uppercase tracking-wider font-semibold inline-flex items-center space-x-2">
              <span>Schedule Sector Consultation</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
