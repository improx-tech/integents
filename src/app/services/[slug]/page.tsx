import { ENTERPRISE_PILLARS, IMPROX_DELIVERY_ENGINE } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ChevronRight, ShieldCheck, Lock, Building2 } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const pillar = ENTERPRISE_PILLARS.find(c => c.slug === slug);

  if (!pillar) {
    notFound();
  }

  return (
    <div className="bg-white text-slate-900 min-h-screen pt-28 lg:pt-36">
      
      {/* SECTION 1: STATELY PRACTICE HERO */}
      <section className="relative py-20 border-b border-slate-200 bg-[#fdfdfd]">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-4">
            <Link 
              href="/services" 
              className="text-xs font-mono uppercase tracking-wider text-[#1e60b5] hover:underline inline-flex items-center font-semibold"
            >
              <ChevronRight className="w-3.5 h-3.5 mr-1 rotate-180" /> Back to Practice Directory
            </Link>

            <div className="flex items-center space-x-3">
              <span className="heritage-badge text-[10px]">{pillar.code || "PRACTICE PILLAR"}</span>
              <span className="text-xs font-mono text-slate-500">{pillar.stat} {pillar.statLabel}</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-serif font-bold text-[#0a1128] tracking-tight leading-[1.08]">
              {pillar.category}
            </h1>

            <p className="text-base sm:text-xl text-slate-600 font-light leading-relaxed max-w-3xl">
              {pillar.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: PRACTICE DETAILS & CAPABILITIES GRID */}
      <section className="py-24 border-b border-slate-200 bg-[#f8fafc]">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Main Content (8 Cols) */}
            <div className="lg:col-span-8 space-y-14">
              
              {/* Practice Overview */}
              <div className="space-y-4">
                <span className="heritage-badge text-[10px]">Executive Scope</span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0a1128]">
                  Strategic Scope & Technical Execution
                </h2>
                <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
                  In today&apos;s hyper-competitive global landscape, mastering {pillar.category.toLowerCase()} is vital for maintaining margin advantage and operational agility. Our multidisciplinary consulting practice combines C-suite strategy with hands-on systems architecture to deliver enterprise transformation with verified EBITDA accretion.
                </p>
              </div>

              {/* High Res Practice Photography Frame */}
              <div className="editorial-photo-frame rounded-xs aspect-[16/9] shadow-md relative">
                <img 
                  src={pillar.image} 
                  alt={pillar.category} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1128]/75 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-white">
                  <span>PRACTICE LEAD: {pillar.leadName}</span>
                  <span className="text-blue-300 font-semibold">{pillar.leadRole}</span>
                </div>
              </div>

              {/* Sub-Service Capabilities Grid */}
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                  <h3 className="text-xl font-serif font-bold text-[#0a1128]">
                    Specialized Capabilities ({pillar.items.length})
                  </h3>
                  <span className="text-[11px] font-mono text-slate-500">EXECUTIVE DOSSIERS</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {pillar.items.map((sub, idx) => (
                    <Link
                      key={sub.slug}
                      href={`/services/${pillar.slug}/${sub.slug}`}
                      className="group p-5 rounded-xs bg-white border border-slate-200 hover:border-slate-300 hover:shadow-xs transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-mono text-[10px] text-[#1e60b5] font-bold">0{idx + 1}</span>
                          <ChevronRight className="w-3.5 h-3.5 text-[#1e60b5] opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#1e60b5] transition-colors">
                          {sub.title}
                        </h4>
                        <p className="text-xs text-slate-500 font-light mt-1.5 leading-relaxed">
                          {sub.shortDesc}
                        </p>
                      </div>

                      <div className="pt-3 mt-4 border-t border-slate-100 text-[11px] font-mono text-[#1e60b5] font-semibold">
                        Read Practice Dossier &rarr;
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Delivery Engine */}
              <div className="space-y-6 pt-6 border-t border-slate-200">
                <h3 className="text-xl font-serif font-bold text-[#0a1128]">
                  Execution Framework for {pillar.category}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {IMPROX_DELIVERY_ENGINE.map((step) => (
                    <div key={step.step} className="p-5 rounded-xs bg-white border border-slate-200 space-y-2">
                      <div className="flex justify-between font-mono text-xs text-[#1e60b5] font-bold">
                        <span>STAGE {step.step}</span>
                        <span className="text-slate-500 font-normal">{step.duration}</span>
                      </div>
                      <div className="text-xs font-bold text-slate-900">{step.phase}</div>
                      <p className="text-[11px] text-slate-500 font-light leading-relaxed">{step.desc}</p>
                    </div>
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
                  <div className="text-lg font-serif font-bold text-[#0a1128] mt-1">{pillar.leadName}</div>
                  <div className="text-xs text-[#1e60b5] font-mono font-semibold">{pillar.leadRole}</div>
                </div>

                <div className="pt-4 border-t border-slate-200 space-y-2 text-xs font-mono text-slate-600">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Practice Code:</span>
                    <span className="text-slate-900 font-bold">{pillar.code}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Verified Client Value:</span>
                    <span className="text-[#1e60b5] font-bold">{pillar.stat}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Client IP Transfer:</span>
                    <span className="text-emerald-700 font-semibold">100% Exclusive</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 space-y-3">
                  <div className="text-xs text-slate-600 font-light leading-relaxed">
                    Request an executive discussion with {pillar.leadName} to examine strategic architectures tailored to your enterprise.
                  </div>
                  <Link 
                    href="/contact"
                    className="btn-heritage-primary w-full py-3 text-xs uppercase tracking-wider font-semibold text-center block"
                  >
                    Schedule Practice Briefing &rarr;
                  </Link>
                </div>

                <div className="pt-4 border-t border-slate-200 space-y-2 text-[11px] font-mono text-slate-500">
                  <div className="flex items-center"><ShieldCheck className="w-3.5 h-3.5 mr-1.5 text-emerald-600" /> Mutual NDA Enforced</div>
                  <div className="flex items-center"><Lock className="w-3.5 h-3.5 mr-1.5 text-[#1e60b5]" /> ISO 27001 Certified Security Enclaves</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
