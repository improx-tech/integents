import { GLOBAL_INDUSTRIES, ENTERPRISE_PILLARS } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, ChevronRight, CheckCircle2, ShieldCheck, Lock, Building2 } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function IndustryPage({ params }: PageProps) {
  const { slug } = await params;
  const industry = GLOBAL_INDUSTRIES.find(i => i.slug === slug);

  if (!industry) {
    notFound();
  }

  return (
    <div className="bg-white text-slate-900 min-h-screen pt-20 lg:pt-24">
      
      {/* SECTION 1: STATELY SECTOR HERO */}
      <section className="relative py-20 border-b border-slate-200 bg-[#fdfdfd]">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-4">
            <Link 
              href="/industries" 
              className="text-xs font-mono uppercase tracking-wider text-[#1e60b5] hover:underline inline-flex items-center font-semibold"
            >
              <ChevronRight className="w-3.5 h-3.5 mr-1 rotate-180" /> Back to Sectors Directory
            </Link>

            <div className="flex items-center space-x-3">
              <span className="heritage-badge text-[10px]">{industry.code || "SECTOR PRACTICE"}</span>
              <span className="text-xs font-mono text-[#1e60b5] font-semibold">{industry.metric} {industry.metricLabel}</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-serif font-bold text-[#0a1128] tracking-tight leading-[1.08]">
              {industry.name}
            </h1>

            <p className="text-base sm:text-xl text-slate-600 font-light leading-relaxed max-w-3xl">
              {industry.desc}
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: SECTOR REPORT & VALUE DRIVERS */}
      <section className="py-24 border-b border-slate-200 bg-[#f8fafc]">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Main Content (8 Cols) */}
            <div className="lg:col-span-8 space-y-12">
              
              <div className="space-y-4">
                <span className="heritage-badge text-[10px]">Sector Strategic Briefing</span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0a1128]">
                  Macro Trends, Capital Dynamics & Regulatory Governance
                </h2>
                <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
                  The {industry.name} sector is undergoing unprecedented structural transformation. Disruptive AI integration, regulatory compliance mandates, and volatile global supply chains require market leaders to re-engineer core operations. Improx Integents provides deep domain advisory and technical execution tailored specifically to {industry.name}.
                </p>
              </div>

              {/* Sector High Res Photograph Frame */}
              <div className="editorial-photo-frame rounded-xs aspect-[16/9] shadow-md relative">
                <img 
                  src={industry.image} 
                  alt={industry.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1128]/75 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-white">
                  <span>SECTOR BENCHMARK REPORT</span>
                  <span className="text-blue-300 font-semibold">{industry.code}</span>
                </div>
              </div>

              {/* Key Sector Value Drivers */}
              <div className="space-y-6">
                <h3 className="text-xl font-serif font-bold text-[#0a1128]">
                  Validated Value Drivers in {industry.name}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-xs border border-slate-200 space-y-2 shadow-xs">
                    <div className="text-2xl font-serif font-bold text-[#1e60b5]">{industry.metric}</div>
                    <div className="text-sm font-serif font-bold text-[#0a1128]">{industry.metricLabel}</div>
                    <p className="text-xs text-slate-500 font-light leading-relaxed">
                      Proven business-case outcomes achieved across enterprise clients in this vertical.
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xs border border-slate-200 space-y-2 shadow-xs">
                    <div className="text-2xl font-serif font-bold text-[#0a1128]">Full Compliance</div>
                    <div className="text-sm font-serif font-bold text-[#0a1128]">Zero Regulatory Infractions</div>
                    <p className="text-xs text-slate-500 font-light leading-relaxed">
                      Deterministic audit logging and automated compliance pipelines tailored to industry authorities.
                    </p>
                  </div>
                </div>
              </div>

              {/* Applied Strategic Pillars */}
              <div className="space-y-6 pt-6 border-t border-slate-200">
                <h3 className="text-xl font-serif font-bold text-[#0a1128]">
                  Strategic Capabilities Applied to {industry.name}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {ENTERPRISE_PILLARS.map((pillar) => (
                    <Link
                      key={pillar.slug}
                      href={`/services/${pillar.slug}`}
                      className="p-4 rounded-xs bg-white border border-slate-200 hover:border-slate-300 transition-colors flex items-center justify-between group shadow-xs"
                    >
                      <div>
                        <div className="text-xs font-bold text-slate-900 group-hover:text-[#1e60b5]">{pillar.category}</div>
                        <div className="text-[10px] font-mono text-slate-500 mt-0.5">{pillar.items.length} Sub-Practices</div>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-[#1e60b5] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Sticky Sidebar (4 Cols) */}
            <div className="lg:col-span-4">
              <div className="bg-white rounded-xs p-6 sm:p-8 border border-slate-200 space-y-6 sticky top-32 shadow-sm">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500">
                    PRACTICE LEADERSHIP
                  </span>
                  <div className="text-lg font-serif font-bold text-[#0a1128] mt-1">Senior Industry Partner</div>
                  <div className="text-xs text-[#1e60b5] font-mono font-semibold">{industry.name} Practice</div>
                </div>

                <div className="pt-4 border-t border-slate-200 space-y-2 text-xs font-mono text-slate-600">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Domain Code:</span>
                    <span className="text-slate-900 font-bold">{industry.code}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Primary Impact Metric:</span>
                    <span className="text-[#1e60b5] font-bold">{industry.metric}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Regulatory Assurance:</span>
                    <span className="text-emerald-700 font-semibold">100% Guaranteed</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 space-y-3">
                  <div className="text-xs text-slate-600 font-light leading-relaxed">
                    Schedule an executive briefing with our {industry.name} lead to review bespoke architecture benchmarks.
                  </div>
                  <Link 
                    href="/contact"
                    className="btn-heritage-primary w-full py-3 text-xs uppercase tracking-wider font-semibold text-center block"
                  >
                    Schedule Sector Briefing &rarr;
                  </Link>
                </div>

                <div className="pt-4 border-t border-slate-200 space-y-2 text-[11px] font-mono text-slate-500">
                  <div className="flex items-center"><ShieldCheck className="w-3.5 h-3.5 mr-1.5 text-emerald-600" /> Mutual NDA Enforced</div>
                  <div className="flex items-center"><Lock className="w-3.5 h-3.5 mr-1.5 text-[#1e60b5]" /> Dedicated Isolated Sandboxes</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
