import { ENTERPRISE_PILLARS, IMPROX_DELIVERY_ENGINE } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { 
  ArrowRight, 
  CheckCircle2, 
  ChevronRight, 
  ShieldCheck, 
  Lock, 
  Building2, 
  TrendingUp,
  FileText,
  Users,
  Award,
  Clock,
  Sparkles,
  Server,
  Database,
  BarChart3,
  HelpCircle
} from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const pillar = ENTERPRISE_PILLARS.find(c => c.slug === slug);
  if (!pillar) return { title: "Practice Not Found | Improx Integents" };
  return {
    title: `${pillar.category} Practice | Improx Integents`,
    description: pillar.tagline
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const pillar = ENTERPRISE_PILLARS.find(c => c.slug === slug);

  if (!pillar) {
    notFound();
  }

  const PRACTICE_FAQS = [
    {
      q: `What is the typical engagement duration for the ${pillar.category} practice?`,
      a: `Engagements vary by corporate scope. Strategic diagnostic audits and risk diligences run for 4 to 6 weeks. 90-day sovereign sprints deliver working production systems in isolated sandboxes. Large-scale enterprise turnkey modernizations typically span 6 to 12 months with milestone-gated capital commitments.`
    },
    {
      q: `Who leads and staffs engagements within this practice?`,
      a: `Every mandate is personally led by a Senior Managing Partner (such as ${pillar.leadName}) alongside principal systems architects and veteran quantitative analysts. We intentionally do not utilize junior analyst leverage; all consultants deployed to your account have a minimum of 10-15 years of industry leadership.`
    },
    {
      q: `How do you guarantee that our enterprise data and intellectual property remain protected?`,
      a: `We engineer private, sovereign control planes that deploy strictly within your enterprise VPC (AWS GovCloud, Azure Confidential Computing, GCP Sovereign Cloud) or on-premises air-gapped infrastructure. Zero data egress is cryptographically enforced, and 100% of the developed intellectual property is perpetually assigned to your firm.`
    },
    {
      q: `Can this practice integrate with our legacy enterprise systems?`,
      a: `Yes. Our engineering squads specialize in non-disruptive integration across legacy mainframes, SAP/Oracle ERPs, core banking engines, and distributed cloud microservices using secure event-driven broker meshes without requiring risky greenfield teardowns.`
    },
    {
      q: `How is commercial success measured and validated?`,
      a: `Prior to initiating delivery, we establish an audited baseline telemetry protocol. Success is measured against contractual performance criteria: EBITDA margin accretion, latency reduction, risk mitigation, and operational hours saved, verified through parallel reconciliation reports.`
    }
  ];

  return (
    <div className="bg-white text-slate-900 min-h-screen pt-20 lg:pt-24">
      
      {/* =========================================================================
          SECTION 1: STATELY PRACTICE HERO
          ========================================================================= */}
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
              <span className="text-xs font-mono bg-blue-50 text-[#1e60b5] px-2 py-0.5 rounded-xs font-semibold">
                Senior Partner Led
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-serif font-bold text-[#0a1128] tracking-tight leading-[1.08]">
              {pillar.category}
            </h1>

            <p className="text-base sm:text-xl text-slate-600 font-light leading-relaxed max-w-3xl">
              {pillar.tagline}
            </p>

            <div className="pt-6 flex flex-wrap gap-4 text-xs font-mono">
              <div className="px-3 py-2 bg-slate-100 rounded-xs border border-slate-200">
                PRACTICE LEAD: <span className="font-bold text-slate-900">{pillar.leadName}</span> ({pillar.leadRole})
              </div>
              <div className="px-3 py-2 bg-slate-100 rounded-xs border border-slate-200">
                CAPABILITIES: <span className="font-bold text-[#1e60b5]">{pillar.items.length} Sub-Specializations</span>
              </div>
              <div className="px-3 py-2 bg-slate-100 rounded-xs border border-slate-200">
                IP OWNERSHIP: <span className="font-bold text-emerald-700">100% Perpetual Client Transfer</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: PRACTICE DETAILS, STRATEGIC SCOPE & EDITORIAL PHOTOGRAPHY
          ========================================================================= */}
      <section className="py-24 border-b border-slate-200 bg-[#f8fafc]">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Main Content (8 Cols) */}
            <div className="lg:col-span-8 space-y-14">
              
              {/* Practice Overview */}
              <div className="space-y-4">
                <span className="heritage-badge text-[10px]">Executive Scope</span>
                <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#0a1128]">
                  Strategic Scope & Technical Execution
                </h2>
                <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
                  In today&apos;s hyper-competitive global landscape, mastering {pillar.category.toLowerCase()} is vital for maintaining margin advantage, structural resilience, and operational agility. Improx Integents combines C-suite corporate strategy with hands-on systems architecture to deliver transformation with verified EBITDA accretion.
                </p>
                <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
                  Unlike traditional advisory firms that deliver high-level slide decks and depart, our practice embeds senior systems engineers and mathematical architects directly into your executive committee. We design, prototype, and harden production-grade systems within your private infrastructure.
                </p>
              </div>

              {/* High Res Practice Photography Frame */}
              <div className="editorial-photo-frame rounded-xs aspect-[16/9] shadow-md relative">
                <img 
                  src={pillar.image} 
                  alt={pillar.category} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1128]/85 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-white">
                  <span>PRACTICE LEAD: {pillar.leadName}</span>
                  <span className="text-blue-300 font-semibold">{pillar.leadRole}</span>
                </div>
              </div>

              {/* Comprehensive Sub-Capabilities Breakdown */}
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                  <h3 className="text-xl font-serif font-bold text-[#0a1128]">
                    Sub-Specialization Capabilities ({pillar.items.length})
                  </h3>
                  <span className="text-xs font-mono text-slate-400">
                    Click capability to inspect dossier
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  {pillar.items.map((sub, sIdx) => (
                    <Link
                      key={sub.slug}
                      href={`/services/${pillar.slug}/${sub.slug}`}
                      className="group p-6 rounded-xs bg-white border border-slate-200 hover:border-slate-400 hover:shadow-md transition-all flex flex-col justify-between"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-xs text-[#1e60b5] font-bold">
                            {pillar.code}.0{sIdx + 1}
                          </span>
                          <span className="text-[11px] font-mono text-[#1e60b5] font-semibold flex items-center">
                            View Full Dossier <ChevronRight className="w-3.5 h-3.5 ml-0.5 group-hover:translate-x-1 transition-transform" />
                          </span>
                        </div>

                        <h4 className="text-lg font-serif font-bold text-[#0a1128] group-hover:text-[#1e60b5] transition-colors">
                          {sub.title}
                        </h4>

                        <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                          {sub.shortDesc}
                        </p>
                      </div>

                      <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-400">
                        <span>DELIVERABLE: Executive Architectural Blueprint & Production Mesh</span>
                        <span className="text-emerald-700 font-semibold">AUDITED</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* 4-Phase Delivery Framework Specific to this Practice */}
              <div className="space-y-6 pt-6">
                <span className="heritage-badge text-[10px]">Methodology</span>
                <h3 className="text-2xl font-serif font-bold text-[#0a1128]">
                  Precision Execution Lifecycle in {pillar.category}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                  Every project within the {pillar.category} practice operates within our rigorous 4-phase governance framework to ensure empirical risk mitigation and measurable capital return.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {IMPROX_DELIVERY_ENGINE.map((phase) => (
                    <div key={phase.step} className="p-5 rounded-xs bg-white border border-slate-200 space-y-2">
                      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                        <span className="font-mono text-xs font-bold text-[#1e60b5]">PHASE {phase.step}</span>
                        <span className="text-[10px] font-mono text-slate-400">{phase.duration}</span>
                      </div>
                      <h4 className="text-sm font-serif font-bold text-[#0a1128]">{phase.phase}</h4>
                      <p className="text-xs text-slate-500 font-light leading-relaxed">{phase.desc}</p>
                      <div className="text-[10px] font-mono text-[#1e60b5] pt-1 font-semibold">
                        Formal Milestone Governance Gate &bull; Audited
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Practice FAQs */}
              <div className="space-y-6 pt-6">
                <span className="heritage-badge text-[10px]">Governance FAQ</span>
                <h3 className="text-2xl font-serif font-bold text-[#0a1128]">
                  Practice Inquiries & Boardroom Governance
                </h3>

                <div className="space-y-4">
                  {PRACTICE_FAQS.map((faq, i) => (
                    <div key={faq.q} className="p-6 rounded-xs bg-white border border-slate-200 space-y-2">
                      <div className="flex items-center space-x-2 text-[#1e60b5] font-mono text-xs font-bold">
                        <HelpCircle className="w-3.5 h-3.5" />
                        <span>QUESTION 0{i+1}</span>
                      </div>
                      <h4 className="text-base font-serif font-bold text-[#0a1128]">{faq.q}</h4>
                      <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed pt-1">
                        {faq.a}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Sidebar (4 Cols) */}
            <div className="lg:col-span-4 space-y-8">
              
              {/* Practice Lead Dossier Card */}
              <div className="bg-white p-7 rounded-xs border border-slate-200 space-y-4 shadow-sm">
                <div className="font-mono text-xs uppercase tracking-wider text-slate-400">
                  Practice Leadership
                </div>
                <div>
                  <h4 className="text-lg font-serif font-bold text-[#0a1128]">{pillar.leadName}</h4>
                  <p className="text-xs text-[#1e60b5] font-mono">{pillar.leadRole}</p>
                </div>
                <p className="text-xs text-slate-600 font-light leading-relaxed">
                  Directs strategic advisory, systems architecture, and fiduciary client relationships across the {pillar.category} portfolio globally.
                </p>
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400">OFFICE</span>
                  <span className="font-semibold text-slate-800">New York &bull; London</span>
                </div>
              </div>

              {/* Engagement Models Sidebar Card */}
              <div className="bg-[#fafaf9] p-7 rounded-xs border border-slate-200 space-y-4">
                <div className="font-mono text-xs uppercase tracking-wider text-slate-400">
                  Commercial Formats
                </div>
                <h4 className="text-base font-serif font-bold text-[#0a1128]">
                  Available Mandate Structures
                </h4>
                <div className="space-y-3 text-xs">
                  <div className="p-3 bg-white rounded-xs border border-slate-200 space-y-1">
                    <strong className="text-slate-900 block font-serif">Boardroom Advisory Retainer</strong>
                    <span className="text-slate-500 text-[11px]">Confidential quarterly strategic counsel & decision theaters.</span>
                  </div>
                  <div className="p-3 bg-white rounded-xs border border-slate-200 space-y-1">
                    <strong className="text-slate-900 block font-serif">90-Day Sovereign Sprint</strong>
                    <span className="text-slate-500 text-[11px]">Rapid production-grade sandbox engineering & verification.</span>
                  </div>
                  <div className="p-3 bg-white rounded-xs border border-slate-200 space-y-1">
                    <strong className="text-slate-900 block font-serif">Turnkey Modernization</strong>
                    <span className="text-slate-500 text-[11px]">6-12 month end-to-end transformation with full IP handover.</span>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="w-full btn-heritage-primary py-3 text-xs uppercase tracking-wider font-semibold flex items-center justify-center space-x-1"
                >
                  <span>Request Practice Terms</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Link>
              </div>

              {/* Fiduciary Guarantee */}
              <div className="p-6 rounded-xs bg-slate-50 border border-slate-200 space-y-3">
                <div className="flex items-center space-x-2 text-emerald-700 font-mono text-xs font-bold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>100% Client IP Assignment</span>
                </div>
                <p className="text-xs text-slate-600 font-light leading-relaxed">
                  All algorithms, models, system runbooks, and source code generated during our engagement become the exclusive intellectual property of your enterprise.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: STATELY PRACTICE CTA
          ========================================================================= */}
      <section className="py-24 bg-[#0a1128] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <span className="heritage-badge-blue text-[10px]">Direct Partner Briefing</span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Schedule A Consultation with {pillar.leadName}
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto font-light leading-relaxed">
            Discuss your enterprise objectives directly with our practice leadership under confidential mutual non-disclosure.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-heritage-blue px-8 py-4 text-xs uppercase tracking-wider font-semibold inline-flex items-center space-x-2">
              <span>Initiate Confidential Briefing</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
            <Link href="/services" className="btn-heritage-secondary border-slate-600 text-white hover:bg-slate-800 hover:text-white px-8 py-4 text-xs uppercase tracking-wider font-semibold">
              <span>View All 5 Practices</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
