import { ENTERPRISE_PILLARS } from "@/lib/data";
import Link from "next/link";
import { ArrowRight, ChevronRight, Compass, BrainCircuit, Cpu, Layers, Building2, ShieldCheck } from "lucide-react";

export default function ServicesHub() {
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "Compass": return <Compass className="w-5 h-5 text-[#1e60b5]" />;
      case "BrainCircuit": return <BrainCircuit className="w-5 h-5 text-[#1e60b5]" />;
      case "Cpu": return <Cpu className="w-5 h-5 text-[#1e60b5]" />;
      case "Layers": return <Layers className="w-5 h-5 text-[#1e60b5]" />;
      default: return <Building2 className="w-5 h-5 text-[#1e60b5]" />;
    }
  };

  return (
    <div className="bg-white text-slate-900 min-h-screen pt-20 lg:pt-24">
      
      {/* SECTION 1: STATELY PRACTICE CATALOG HERO */}
      <section className="relative py-20 lg:py-28 border-b border-slate-200 bg-[#fdfdfd]">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-4">
            <span className="heritage-badge text-[10px]">Global Practice Matrix</span>
            <h1 className="text-4xl sm:text-6xl font-serif font-bold text-[#0a1128] tracking-tight leading-[1.08]">
              5 Global Practices. <br />
              <span className="italic font-serif text-[#1e60b5] font-normal">25 Specialized Enterprise Capabilities.</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed max-w-2xl">
              From boardroom strategy to sovereign agentic AI execution, our consulting practices drive measurable EBITDA expansion, structural resilience, and multi-generational market leadership.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: 5 PILLARS COMPREHENSIVE ARCHITECTURAL DIRECTORY */}
      <section className="py-24 border-b border-slate-200 bg-[#f8fafc]">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {ENTERPRISE_PILLARS.map((pillar, idx) => (
            <div 
              key={pillar.slug}
              className="bg-white rounded-xs border border-slate-200 overflow-hidden p-8 lg:p-12 shadow-sm relative"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                
                {/* Left Overview & Image (5 Cols) */}
                <div className="lg:col-span-5 space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                    <div className="flex items-center space-x-3">
                      <span className="font-mono text-sm text-[#1e60b5] font-bold">0{idx + 1}</span>
                      <span className="font-mono text-xs uppercase tracking-widest text-slate-500">{pillar.code}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-serif font-bold text-[#1e60b5]">{pillar.stat}</div>
                      <div className="text-[10px] font-mono text-slate-500 uppercase">{pillar.statLabel}</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      {renderIcon(pillar.iconName)}
                      <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0a1128]">
                        {pillar.category}
                      </h2>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                      {pillar.tagline}
                    </p>
                  </div>

                  {/* High Res Practice Photography Frame */}
                  <div className="editorial-photo-frame rounded-xs aspect-[16/10] relative">
                    <img 
                      src={pillar.image} 
                      alt={pillar.category} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1128]/75 via-transparent to-transparent"></div>
                    <div className="absolute bottom-3 left-3 text-[11px] font-mono text-white">
                      Practice Lead: <span className="font-bold">{pillar.leadName}</span> &bull; {pillar.leadRole}
                    </div>
                  </div>

                  <div className="pt-2">
                    <Link 
                      href={`/services/${pillar.slug}`}
                      className="btn-heritage-primary w-full py-3 text-xs uppercase tracking-wider font-semibold flex items-center justify-center space-x-2"
                    >
                      <span>Explore Practice Portfolio</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </Link>
                  </div>
                </div>

                {/* Right Sub-Service Capabilities Grid (7 Cols) */}
                <div className="lg:col-span-7 space-y-6 lg:pl-6 lg:border-l lg:border-slate-200">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                    <span className="text-xs font-mono uppercase tracking-widest text-slate-500">
                      Practice Capabilities ({pillar.items.length})
                    </span>
                    <span className="text-[10px] font-mono text-emerald-700 flex items-center font-semibold">
                      <ShieldCheck className="w-3.5 h-3.5 mr-1 text-emerald-600" /> Senior Partner-Led
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {pillar.items.map((sub) => (
                      <Link
                        key={sub.slug}
                        href={`/services/${pillar.slug}/${sub.slug}`}
                        className="group p-4 rounded-xs bg-[#fafaf9] border border-slate-200 hover:border-slate-300 hover:bg-slate-100/70 transition-all flex flex-col justify-between"
                      >
                        <div>
                          <div className="text-xs font-bold text-slate-900 group-hover:text-[#1e60b5] flex items-center justify-between">
                            <span>{sub.title}</span>
                            <ChevronRight className="w-3.5 h-3.5 text-[#1e60b5] opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                          <p className="text-[11px] text-slate-500 font-light mt-1.5 leading-relaxed">
                            {sub.shortDesc}
                          </p>
                        </div>
                        <div className="text-[10px] font-mono text-[#1e60b5] mt-3 pt-2 border-t border-slate-200/60 font-semibold">
                          Read Practice Dossier &rarr;
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}

        </div>
      </section>

      {/* SECTION 3: STATELY CTA */}
      <section className="py-24 bg-[#0a1128] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <span className="heritage-badge-blue text-[10px]">Confidential Consultation</span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Commission A Bespoke Capability Mandate
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto font-light leading-relaxed">
            Our Senior Managing Partners collaborate directly with corporate boards to evaluate operational vectors and deploy customized enterprise frameworks.
          </p>
          <div className="pt-2">
            <Link href="/contact" className="btn-heritage-blue px-8 py-4 text-xs uppercase tracking-wider font-semibold inline-flex items-center space-x-2">
              <span>Schedule Partner Briefing</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
