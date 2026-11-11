import { FEATURED_CASE_STUDIES } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight, CheckCircle2, TrendingUp, ArrowRight, ShieldCheck, Lock } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = FEATURED_CASE_STUDIES.find(c => c.slug === slug);

  if (!study) {
    notFound();
  }

  return (
    <div className="bg-white text-slate-900 min-h-screen pt-28 lg:pt-36">
      
      {/* SECTION 1: STATELY CASE STUDY HERO */}
      <section className="relative py-20 border-b border-slate-200 bg-[#fdfdfd]">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-4">
            <Link 
              href="/case-studies" 
              className="text-xs font-mono uppercase tracking-wider text-[#1e60b5] hover:underline inline-flex items-center font-semibold"
            >
              <ChevronRight className="w-3.5 h-3.5 mr-1 rotate-180" /> Back to Case Studies Directory
            </Link>

            <div className="flex items-center space-x-3">
              <span className="heritage-badge text-[10px]">{study.industry} Sector</span>
              <span className="text-xs font-mono text-emerald-700 font-semibold">{study.impact}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#0a1128] tracking-tight leading-[1.1]">
              {study.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed max-w-3xl">
              {study.summary}
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: CASE STUDY CONTENT & SIDEBAR */}
      <section className="py-24 border-b border-slate-200 bg-[#f8fafc]">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Main Content (8 Cols) */}
            <div className="lg:col-span-8 space-y-12">
              
              {/* Engagement Photograph Frame */}
              <div className="editorial-photo-frame rounded-xs aspect-[16/9] shadow-md relative">
                <img 
                  src={study.image} 
                  alt={study.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1128]/75 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-white">
                  <span>ENTERPRISE MANDATE: {study.client}</span>
                  <span className="text-blue-300 font-semibold">AUDITED OUTCOMES</span>
                </div>
              </div>

              {/* Problem & Challenge */}
              <div className="space-y-4">
                <span className="heritage-badge text-[10px]">The Strategic Challenge</span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0a1128]">
                  Operational Latency & Capital Inefficiency
                </h2>
                <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
                  The client, a {study.client.toLowerCase()}, faced severe operational friction and escalating overhead. Disconnected ERP platforms and fragmented data pipelines inhibited rapid capital allocation, resulting in compressed operating margins and rising vulnerability to supply-chain disruption.
                </p>
              </div>

              {/* Solution & Architecture */}
              <div className="space-y-4">
                <span className="heritage-badge text-[10px]">The Advisory & Engineering Solution</span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#0a1128]">
                  Autonomous Control Plane Architecture & Phased Rollout
                </h3>
                <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
                  Improx Integents deployed an integrated squad of senior management consultants and systems architects. Within 60 days, we formulated a board-approved target operating model, decoupled monolithic core systems, and industrialized sovereign multi-agent control planes with deterministic guardrails.
                </p>
              </div>

              {/* Quantified Business Outcomes */}
              <div className="space-y-6 pt-6 border-t border-slate-200">
                <h3 className="text-xl font-serif font-bold text-[#0a1128]">
                  Audited Balance Sheet & Operating Outcomes
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-white p-5 rounded-xs border border-slate-200 space-y-1 shadow-xs">
                    <div className="text-2xl font-serif font-bold text-emerald-700">
                      {study.impact.split("|")[0] || "$240M+"}
                    </div>
                    <div className="text-[10px] font-mono text-slate-500 uppercase">Financial Impact</div>
                  </div>
                  <div className="bg-white p-5 rounded-xs border border-slate-200 space-y-1 shadow-xs">
                    <div className="text-2xl font-serif font-bold text-[#1e60b5]">
                      {study.impact.split("|")[1] || "3.5x Faster"}
                    </div>
                    <div className="text-[10px] font-mono text-slate-500 uppercase">Operational Velocity</div>
                  </div>
                  <div className="bg-white p-5 rounded-xs border border-slate-200 space-y-1 shadow-xs">
                    <div className="text-2xl font-serif font-bold text-[#0a1128]">
                      100%
                    </div>
                    <div className="text-[10px] font-mono text-slate-500 uppercase">Client IP Transferred</div>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Sticky Sidebar (4 Cols) */}
            <div className="lg:col-span-4">
              <div className="bg-white rounded-xs p-6 sm:p-8 border border-slate-200 space-y-6 sticky top-32 shadow-sm">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500">
                    CLIENT DOSSIER
                  </span>
                  <div className="text-lg font-serif font-bold text-[#0a1128] mt-1">{study.client}</div>
                  <div className="text-xs text-[#1e60b5] font-mono font-semibold">{study.industry} Practice</div>
                </div>

                <div className="pt-4 border-t border-slate-200 space-y-2 text-xs font-mono text-slate-600">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Audited Result:</span>
                    <span className="text-emerald-700 font-bold">{study.impact}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Practice Area:</span>
                    <span className="text-slate-900 font-bold">{study.tags[0]}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Delivery Velocity:</span>
                    <span className="text-[#1e60b5] font-bold">Under 90 Days</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 space-y-3">
                  <div className="text-xs text-slate-600 font-light leading-relaxed">
                    Request an executive briefing to examine technical architectures and reference blueprints from this engagement.
                  </div>
                  <Link 
                    href="/contact"
                    className="btn-heritage-primary w-full py-3 text-xs uppercase tracking-wider font-semibold text-center block"
                  >
                    Schedule Engagement Briefing &rarr;
                  </Link>
                </div>

                <div className="pt-4 border-t border-slate-200 space-y-2 text-[11px] font-mono text-slate-500">
                  <div className="flex items-center"><ShieldCheck className="w-3.5 h-3.5 mr-1.5 text-emerald-600" /> Mutual NDA Enforced</div>
                  <div className="flex items-center"><Lock className="w-3.5 h-3.5 mr-1.5 text-[#1e60b5]" /> Independent Regulatory Audit</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
