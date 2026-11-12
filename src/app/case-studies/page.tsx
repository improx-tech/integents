import { FEATURED_CASE_STUDIES } from "@/lib/data";
import Link from "next/link";
import LatestInsightsSection from "@/components/LatestInsightsSection";
import { 
  ArrowRight, 
  TrendingUp, 
  ShieldCheck, 
  CheckCircle2, 
  Lock, 
  BarChart3, 
  FileCheck,
  Building2
} from "lucide-react";

export default function CaseStudiesHub() {
  const ADDITIONAL_ENGAGEMENTS = [
    {
      code: "ENG-BIO-04",
      client: "Global Tier-1 BioPharma Leader",
      industry: "Healthcare & Life Sciences",
      title: "FDA 21 CFR Part 11 Autonomous Clinical Data Mesh & Trial Acceleration",
      impact: "$95M Cost Reduction | 4.2x Faster Patient Enrollment",
      summary: "Architected a zero-leakage clinical trial orchestration mesh integrating electronic health records with predictive patient retention models across 85 global trial sites.",
      tags: ["Genomics Mesh", "FDA Compliance", "Trial Acceleration"]
    },
    {
      code: "ENG-ENG-05",
      client: "European Renewable Energy Grid",
      industry: "Energy & Utilities",
      title: "Autonomous Grid Balancing & Renewable Dispatch Telemetry",
      impact: "12M Tons CO2 Offset | 34% Lower Peak Balancing Penalties",
      summary: "Deployed sub-second predictive dispatch algorithms across 4,200 wind turbines and coastal battery storage facilities, eliminating grid curtailment.",
      tags: ["Grid Modernization", "Digital Twin", "Carbon Accounting"]
    },
    {
      code: "ENG-SWF-06",
      client: "Sovereign Wealth Investment Group",
      industry: "Private Capital & Sovereign Advisory",
      title: "Algorithmic Capital Allocation & Multi-Asset Portfolio Stress Testing",
      impact: "$1.2B Capital Re-Allocated | 2.8x Higher Crisis TSR",
      summary: "Replaced legacy annual budgeting with real-options dynamic portfolio re-balancing software, integrating live commodity and interest rate sensitivity telemetry.",
      tags: ["CFO Advisory", "Capital Allocation", "Risk Modeling"]
    },
    {
      code: "ENG-TEL-07",
      client: "Multinational Telecom Operator",
      industry: "Telecom & High Tech",
      title: "Cloud-Native 5G Network Slicing & Autonomous Customer Care",
      impact: "99.999% SLA Attained | 65% Reduction in First-Call Resolution Time",
      summary: "Built an air-gapped network telemetry agent that dynamically provisions private 5G slices for industrial manufacturing clients with deterministic latency guarantees.",
      tags: ["5G Slicing", "Zero Trust", "Autonomous NOC"]
    }
  ];

  return (
    <div className="bg-white text-slate-900 min-h-screen pt-16 sm:pt-20">
      
      {/* =========================================================================
          SECTION 1: STATELY CASE STUDIES HERO
          ========================================================================= */}
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

          <div className="pt-10 mt-10 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl">
            <div>
              <div className="text-2xl font-serif font-bold text-[#0a1128]">$740M+</div>
              <div className="text-[11px] font-mono text-slate-500 uppercase mt-0.5">Top-3 Case EBITDA Accretion</div>
            </div>
            <div>
              <div className="text-2xl font-serif font-bold text-[#1e60b5]">100% Audited</div>
              <div className="text-[11px] font-mono text-slate-500 uppercase mt-0.5">Independent CFO Verification</div>
            </div>
            <div>
              <div className="text-2xl font-serif font-bold text-[#0a1128]">Zero Lock-in</div>
              <div className="text-[11px] font-mono text-slate-500 uppercase mt-0.5">Complete IP Handover</div>
            </div>
            <div>
              <div className="text-2xl font-serif font-bold text-slate-800">&lt; 90 Days</div>
              <div className="text-[11px] font-mono text-slate-500 uppercase mt-0.5">Initial Production Value</div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: PRIMARY AUDITED CASE DOSSIERS
          ========================================================================= */}
      <section className="py-24 border-b border-slate-200 bg-[#f8fafc]">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-16 space-y-3">
            <span className="heritage-badge text-[10px]">Featured Transformations</span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#0a1128] tracking-tight">
              Flagship Transformation Mandates
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
              In-depth empirical breakdowns of multi-year enterprise transformation mandates executed across North America and Europe.
            </p>
          </div>

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

      {/* =========================================================================
          NEW SECTION 3: ADDITIONAL INDUSTRY ENGAGEMENT BRIEFS
          ========================================================================= */}
      <section className="py-24 border-b border-slate-200 bg-white">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-16 space-y-4">
            <span className="heritage-badge text-[10px]">Select Engagement Archives</span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#0a1128] tracking-tight">
              Further Empirical Mandate Briefs
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
              Audited transformation briefs across bio-pharma, clean energy, sovereign wealth, and telecommunications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ADDITIONAL_ENGAGEMENTS.map((eng) => (
              <div 
                key={eng.code}
                className="bg-[#fafaf9] rounded-xs border border-slate-200 p-8 flex flex-col justify-between hover:border-slate-300 transition-colors shadow-xs"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                    <span className="font-mono text-xs font-bold text-[#1e60b5]">{eng.code}</span>
                    <span className="text-[10px] font-mono text-slate-500 uppercase">{eng.industry}</span>
                  </div>

                  <div className="text-[11px] font-mono text-slate-500">{eng.client}</div>

                  <h3 className="text-xl font-serif font-bold text-[#0a1128]">
                    {eng.title}
                  </h3>

                  <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xs text-xs font-mono text-emerald-800 font-semibold flex items-center space-x-2">
                    <TrendingUp className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>{eng.impact}</span>
                  </div>

                  <p className="text-xs text-slate-600 font-light leading-relaxed">
                    {eng.summary}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {eng.tags.map(t => (
                      <span key={t} className="text-[10px] font-mono text-slate-600 bg-white px-2 py-0.5 rounded-xs border border-slate-200">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-400">AUDITED OUTCOME &bull; 100% IP HANDOVER</span>
                  <Link 
                    href="/contact"
                    className="text-xs font-mono uppercase tracking-wider text-[#1e60b5] hover:underline font-semibold"
                  >
                    Request Full Technical Brief &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          NEW SECTION 4: AUDIT METHODOLOGY & GOVERNANCE ASSURANCE
          ========================================================================= */}
      <section className="py-24 border-b border-slate-200 bg-[#f8fafc]">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="heritage-badge text-[10px]">Verification Standard</span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#0a1128] tracking-tight">
              Our 3-Stage Independent Audit Protocol
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
              Every reported dollar of savings, percentage of latency reduction, and working capital release is verified through our rigorous 3-stage protocol.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xs p-8 border border-slate-200 space-y-3 shadow-xs">
              <div className="text-3xl font-serif font-bold text-[#1e60b5]">01</div>
              <h3 className="text-lg font-serif font-bold text-[#0a1128]">Pre-Engagement Baseline</h3>
              <p className="text-xs text-slate-600 font-light leading-relaxed">
                Prior to executing code or altering operational workflows, an immutable baseline of legacy labor hours, compute spend, inventory turnover, and cycle latency is established and approved by the client finance committee.
              </p>
            </div>

            <div className="bg-white rounded-xs p-8 border border-slate-200 space-y-3 shadow-xs">
              <div className="text-3xl font-serif font-bold text-[#1e60b5]">02</div>
              <h3 className="text-lg font-serif font-bold text-[#0a1128]">Sandbox Pilot Validation</h3>
              <p className="text-xs text-slate-600 font-light leading-relaxed">
                Autonomous agents operate within isolated security sandboxes on live production data samples for 60 to 90 days. Decision accuracy, transactional reliability, and API latency are continuously audited against baseline benchmarks.
              </p>
            </div>

            <div className="bg-white rounded-xs p-8 border border-slate-200 space-y-3 shadow-xs">
              <div className="text-3xl font-serif font-bold text-[#1e60b5]">03</div>
              <h3 className="text-lg font-serif font-bold text-[#0a1128]">Post-Rollout Reconciliation</h3>
              <p className="text-xs text-slate-600 font-light leading-relaxed">
                At months 6 and 12 following enterprise cutover, an independent financial reconciliation is conducted against ERP ledgers. Fiduciary performance milestones are verified before commercial completion.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 5: RESEARCH & MONOGRAPHS BEHIND OUR ENGAGEMENTS
          ========================================================================= */}
      <LatestInsightsSection 
        title="Research & Methodology Behind Our Client Transformations" 
        subtitle="Examine the quantitative models, algorithmic blueprints, and strategic monographs that power our audited enterprise engagements."
        badge="Engagement Methodologies • The Integents Review"
        limit={3}
      />

      {/* =========================================================================
          SECTION 6: STATELY PARTNER CTA
          ========================================================================= */}
      <section className="py-24 bg-[#0a1128] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <span className="heritage-badge-blue text-[10px]">Confidential Inquiries</span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Review Tailored Case Studies for Your Board
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto font-light leading-relaxed">
            Due to strict mutual non-disclosure agreements, select client case studies, code architectures, and balance sheet audit models are shared exclusively during private C-suite briefing sessions.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-heritage-blue px-8 py-4 text-xs uppercase tracking-wider font-semibold inline-flex items-center space-x-2">
              <span>Request Private Case Deck</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
            <Link href="/services" className="btn-heritage-secondary border-slate-600 text-white hover:bg-slate-800 hover:text-white px-8 py-4 text-xs uppercase tracking-wider font-semibold">
              <span>Explore Practice Portfolio</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
