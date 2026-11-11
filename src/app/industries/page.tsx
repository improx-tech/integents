import { GLOBAL_INDUSTRIES } from "@/lib/data";
import Link from "next/link";
import { 
  ArrowRight, 
  ChevronRight, 
  Landmark, 
  Activity, 
  Factory, 
  ShoppingBag, 
  Zap, 
  Radio,
  ShieldCheck,
  CheckCircle2,
  Lock,
  FileCheck,
  Scale,
  TrendingUp,
  Globe
} from "lucide-react";

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

  const REGULATORY_FRAMEWORKS = [
    {
      sector: "Financial Services & Banking",
      code: "IND-01",
      regimes: "SEC, FINRA, Basel III/IV, Dodd-Frank, SOX",
      assurance: "Deterministic AML screening, sub-millisecond market risk telemetry, automated compliance filing."
    },
    {
      sector: "Healthcare & Life Sciences",
      code: "IND-02",
      regimes: "FDA 21 CFR Part 11, HIPAA, EMA, GxP, ISO 13485",
      assurance: "Zero-leakage genomic data rings, automated clinical protocol auditing, cryptographic patient provenance."
    },
    {
      sector: "Smart Manufacturing & Automotive",
      code: "IND-03",
      regimes: "ISO 26262, UNECE WP.29, IATF 16949, OSHA",
      assurance: "Functional safety SIL-3 guardrails, real-time robotics telemetry, automated supply provenance tracking."
    },
    {
      sector: "Retail, Consumer & E-Commerce",
      code: "IND-04",
      regimes: "PCI-DSS Level 1, FTC Standards, GDPR, CCPA",
      assurance: "Zero data egress dynamic pricing engines, autonomous consumer privacy rails, multi-warehouse automated routing."
    },
    {
      sector: "Energy, Resources & Utilities",
      code: "IND-05",
      regimes: "NERC-CIP, FERC, ESG Scope 1-3, EU CBAM",
      assurance: "Critical infrastructure cyber isolation, renewable dispatch balancing, carbon emission ledger audits."
    },
    {
      sector: "Telecom & High Tech",
      code: "IND-06",
      regimes: "FCC, 3GPP Rel 18, ITU, NIST Zero Trust SP 800-207",
      assurance: "Network slicing SLA determinism, satellite telemetry encryption, cloud-native OSS/BSS isolation."
    }
  ];

  return (
    <div className="bg-white text-slate-900 min-h-screen pt-16 sm:pt-20">
      
      {/* =========================================================================
          SECTION 1: STATELY SECTORS HERO
          ========================================================================= */}
      <section className="relative py-20 lg:py-28 border-b border-slate-200 bg-[#fdfdfd]">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-4">
            <span className="heritage-badge text-[10px]">Industry Domain Practices</span>
            <h1 className="text-4xl sm:text-6xl font-serif font-bold text-[#0a1128] tracking-tight leading-[1.08]">
              Regulated Industry Practice Specialization for <br />
              <span className="italic font-serif text-[#1e60b5] font-normal">Global Enterprise Conglomerates.</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed max-w-2xl">
              Deep operational, regulatory, and technical mastery across the world&apos;s most critical economic sectors. We help enterprise leadership navigate market disruption, capital allocation, and sovereign regulatory compliance.
            </p>
          </div>

          <div className="pt-10 mt-10 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl">
            <div>
              <div className="text-2xl font-serif font-bold text-[#0a1128]">$4.2B+</div>
              <div className="text-[11px] font-mono text-slate-500 uppercase mt-0.5">Capital Value Optimized</div>
            </div>
            <div>
              <div className="text-2xl font-serif font-bold text-[#1e60b5]">38 of Global 500</div>
              <div className="text-[11px] font-mono text-slate-500 uppercase mt-0.5">Enterprise Clients</div>
            </div>
            <div>
              <div className="text-2xl font-serif font-bold text-[#0a1128]">6 Regulated</div>
              <div className="text-[11px] font-mono text-slate-500 uppercase mt-0.5">Domain Practices</div>
            </div>
            <div>
              <div className="text-2xl font-serif font-bold text-slate-800">100% Audit</div>
              <div className="text-[11px] font-mono text-slate-500 uppercase mt-0.5">Compliance Standard</div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: 6 SECTORS DIRECTORY WITH BESPOKE PHOTOGRAPHY
          ========================================================================= */}
      <section className="py-24 border-b border-slate-200 bg-[#f8fafc]">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-16 space-y-3">
            <span className="heritage-badge text-[10px]">Domain Portfolios</span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#0a1128] tracking-tight">
              Six Critical Global Economic Sectors
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
              Tailored transformation roadmaps, sovereign AI control planes, and fiduciary counsel designed specifically for the unique operational constraints of regulated markets.
            </p>
          </div>

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

      {/* =========================================================================
          NEW SECTION 3: REGULATORY COMPLIANCE RAILS MATRIX
          ========================================================================= */}
      <section className="py-24 border-b border-slate-200 bg-white">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-16 space-y-4">
            <span className="heritage-badge text-[10px]">Deterministic Rails</span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#0a1128] tracking-tight">
              Regulatory Compliance & Fiduciary Assurances
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
              Operating in highly regulated industries leaves zero room for stochastic AI risk. Every sector control plane we engineer incorporates hard-coded compliance rails.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REGULATORY_FRAMEWORKS.map((reg) => (
              <div 
                key={reg.code}
                className="p-7 rounded-xs bg-[#fafaf9] border border-slate-200 space-y-3 hover:border-slate-400 transition-colors"
              >
                <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                  <span className="font-mono text-xs font-bold text-[#1e60b5]">{reg.code}</span>
                  <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-xs font-semibold">
                    REGULATORY RATED
                  </span>
                </div>

                <h3 className="text-base font-serif font-bold text-[#0a1128]">
                  {reg.sector}
                </h3>

                <div className="p-2.5 bg-white rounded-xs border border-slate-200 text-xs font-mono text-slate-700">
                  <strong className="text-slate-900 block text-[10px] uppercase text-slate-400 mb-0.5">Mandates Governed:</strong>
                  {reg.regimes}
                </div>

                <p className="text-xs text-slate-600 font-light leading-relaxed pt-1">
                  {reg.assurance}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: STATELY PARTNER CTA
          ========================================================================= */}
      <section className="py-24 bg-[#0a1128] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <span className="heritage-badge-blue text-[10px]">Sector Briefings</span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Consult With A Senior Sector Practice Lead
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto font-light leading-relaxed">
            Connect directly with former industry executives to review benchmarks, regulatory shifts, and technical transformation roadmaps.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-heritage-blue px-8 py-4 text-xs uppercase tracking-wider font-semibold inline-flex items-center space-x-2">
              <span>Schedule Sector Consultation</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
            <Link href="/case-studies" className="btn-heritage-secondary border-slate-600 text-white hover:bg-slate-800 hover:text-white px-8 py-4 text-xs uppercase tracking-wider font-semibold">
              <span>Examine Sector Case Studies</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
