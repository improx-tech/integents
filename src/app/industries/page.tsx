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
  Globe,
  HelpCircle,
  Building2,
  Users,
  Award,
  AlertTriangle
} from "lucide-react";

export const metadata = {
  title: "Regulated Industry Practices | Improx Integents",
  description: "Deep domain advisory, sovereign AI architectures, and regulatory compliance frameworks across Financial Services, Healthcare, Manufacturing, Retail, Energy, and Telecommunications."
};

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
      assurance: "Deterministic AML screening, sub-millisecond market risk telemetry, automated compliance filing.",
      defense: "Air-gapped transaction verification with cryptographic ledger provenance and zero external API egress.",
      subDomains: ["Autonomous Wealth Advisory", "Real-Time Market Risk & VaR", "Deterministic AML/KYC", "Sovereign Liquidity Engines"]
    },
    {
      sector: "Healthcare & Life Sciences",
      code: "IND-02",
      regimes: "FDA 21 CFR Part 11, HIPAA, EMA, GxP, ISO 13485",
      assurance: "Zero-leakage genomic data rings, automated clinical protocol auditing, cryptographic patient provenance.",
      defense: "Differential privacy mathematical guarantees with tamper-evident audit logs suitable for FDA submission.",
      subDomains: ["Clinical Trial Acceleration", "Genomic Pipeline Security", "Hospital Resource Mesh", "Automated FDA Filing"]
    },
    {
      sector: "Smart Manufacturing & Automotive",
      code: "IND-03",
      regimes: "ISO 26262, UNECE WP.29, IATF 16949, OSHA",
      assurance: "Functional safety SIL-3 guardrails, real-time robotics telemetry, automated supply provenance tracking.",
      defense: "Edge-based real-time inference operating on deterministic RTOS kernels with sub-millisecond fail-safe triggers.",
      subDomains: ["Autonomous Factory Robotics", "Digital Twin Production Lines", "Predictive Component Health", "ISO 26262 SIL-3 Rails"]
    },
    {
      sector: "Retail, Consumer & E-Commerce",
      code: "IND-04",
      regimes: "PCI-DSS Level 1, FTC Standards, GDPR, CCPA",
      assurance: "Zero data egress dynamic pricing engines, autonomous consumer privacy rails, multi-warehouse automated routing.",
      defense: "Tokenized customer data mesh ensuring personalized recommendations execute without raw PII exposure.",
      subDomains: ["Autonomous Supply Routing", "Algorithmic Demand Forecasting", "Dynamic Margin Optimization", "Privacy-Preserving Personalization"]
    },
    {
      sector: "Energy, Resources & Utilities",
      code: "IND-05",
      regimes: "NERC-CIP, FERC, ESG Scope 1-3, EU CBAM",
      assurance: "Critical infrastructure cyber isolation, renewable dispatch balancing, carbon emission ledger audits.",
      defense: "Strict unidirectional security gateways (data diodes) isolating grid control planes from public Internet routing.",
      subDomains: ["Grid Dispatch Balancing", "Predictive Turbine Maintenance", "Carbon Ledger Audits", "NERC-CIP High-Impact Defense"]
    },
    {
      sector: "Telecom & High Tech",
      code: "IND-06",
      regimes: "FCC, 3GPP Rel 18, ITU, NIST Zero Trust SP 800-207",
      assurance: "Network slicing SLA determinism, satellite telemetry encryption, cloud-native OSS/BSS isolation.",
      defense: "Micro-segmented software-defined perimeter enforcing cryptographically attested identity on every packet.",
      subDomains: ["Autonomous RAN Optimization", "Sub-Millisecond 5G/6G Slicing", "Zero-Trust OSS/BSS Core", "Automated Spectrum Allocation"]
    }
  ];

  const SECTOR_BENCHMARKS = [
    {
      metric: "Regulatory Compliance Audit Time",
      traditional: "4 - 8 Months (Manual Committee Reviews)",
      integents: "Real-Time Continuous Cryptographic Audit",
      impact: "94% Compression in Audit Duration"
    },
    {
      metric: "Model Hallucination & Drift Risk",
      traditional: "3% - 7% Probabilistic Hallucination Rate",
      integents: "0.00% (Deterministic Mathematical Proof Rails)",
      impact: "Zero Regulatory Fines or Infractions"
    },
    {
      metric: "Core Transaction Latency",
      traditional: "150ms - 800ms (Multiple Cloud Hops)",
      integents: "<12ms (Edge Sovereign Deployment)",
      impact: "12x - 60x Throughput Acceleration"
    },
    {
      metric: "Operating Expense Leverage",
      traditional: "Linear Headcount Scaling (Opex Inflation)",
      integents: "Autonomous Multi-Agent Mesh Execution",
      impact: "+350 to +650 bps EBITDA Margin Accretion"
    },
    {
      metric: "Data Sovereignty & Egress",
      traditional: "Public Multi-Tenant SaaS Exposure",
      integents: "Air-Gapped Private VPC / Zero Egress",
      impact: "100% Client Sovereign Control"
    }
  ];

  const INDUSTRY_FAQS = [
    {
      q: "How does Improx Integents guarantee compliance with strict sector regulators (SEC, FDA, NERC)?",
      a: "Our industry practices embed former regulatory fellows and chief risk officers. Every architecture we design incorporates formal mathematical constraints and deterministic guardrails rather than unmonitored probabilistic models. We build automated compliance reporting engines that generate immutable cryptographic audit logs directly aligned with SEC Rule 17a-4, FDA 21 CFR Part 11, and NERC-CIP standards."
    },
    {
      q: "Can your sector architectures deploy inside air-gapped or private cloud environments?",
      a: "Yes. In critical infrastructure, banking, and life sciences, public cloud connectivity is often prohibited. We engineer fully self-contained, air-gapped sovereign control planes that execute on bare-metal hardware or private VPCs with zero external Internet dependencies or telemetry egress."
    },
    {
      q: "Who within our organization typically commissions an industry practice mandate?",
      a: "Our engagements are commissioned at the executive committee level—typically by the Chief Executive Officer, Chief Operating Officer, Chief Risk Officer, or Board Audit Committee chair. Because our solutions transform core operational processes and carry significant balance-sheet implications, we work exclusively with executive decision-makers."
    },
    {
      q: "What is your experience in legacy modernization without business disruption?",
      a: "Over five decades, we have guided Global 500 enterprises through every computing paradigm shift. We use non-invasive strangler-fig patterns, parallel shadow reconciliation, and event-driven data meshes that allow legacy mainframes and ERPs to continue processing uninterrupted while modern sovereign control planes take over operational load."
    },
    {
      q: "How long does a typical industry practice engagement take to demonstrate value?",
      a: "Within 4 to 6 weeks, our initial diagnostic provides an empirical baseline audit and capital impact model. By day 90, our sovereign engineering sprint delivers a functioning, production-tested capability in an isolated sandbox. Full-scale enterprise rollouts typically span 6 to 12 months with milestone-gated capital commitments."
    },
    {
      q: "Do you offer post-engagement maintenance and regulatory update advisory?",
      a: "While our goal is 100% operational sovereignty and client IP independence, many clients retain our Senior Managing Partners on annual Boardroom Advisory Retainers to monitor emerging regulatory developments (such as the EU AI Act or new SEC algorithmic disclosure rules) and conduct annual stress tests."
    }
  ];

  return (
    <div className="bg-white text-slate-900 min-h-screen pt-16 sm:pt-20">
      
      {/* =========================================================================
          SECTION 1: STATELY SECTORS HERO WITH TELEMETRY
          ========================================================================= */}
      <section className="relative py-20 lg:py-28 border-b border-slate-200 bg-[#fdfdfd]">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-4xl space-y-4">
            <div className="flex items-center space-x-3">
              <span className="heritage-badge text-[10px]">ESTABLISHED 1976 &bull; 50-YEAR FIDUCIARY HERITAGE</span>
              <span className="text-xs font-mono text-slate-500 hidden sm:inline">&bull; REGULATED DOMAIN PRACTICES</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-[#0a1128] tracking-tight leading-[1.06]">
              Regulated Industry Practice Specialization for <br />
              <span className="italic font-serif text-[#1e60b5] font-normal">Global Enterprise Conglomerates.</span>
            </h1>

            <p className="text-base sm:text-xl text-slate-600 font-light leading-relaxed max-w-3xl pt-2">
              Deep operational, regulatory, and technological mastery across the world&apos;s six most critical economic sectors. We advise executive leadership on navigating volatile macroeconomic cycles, optimizing capital allocation, and deploying sovereign-grade automated control planes within strict regulatory boundaries.
            </p>
          </div>

          {/* Industry Telemetry Row */}
          <div className="pt-12 mt-12 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            <div>
              <div className="text-3xl font-serif font-bold text-[#0a1128]">$4.2B+</div>
              <div className="text-[11px] font-mono text-slate-500 uppercase mt-0.5">Capital Value Optimized</div>
            </div>
            <div>
              <div className="text-3xl font-serif font-bold text-[#1e60b5]">38 of Global 500</div>
              <div className="text-[11px] font-mono text-slate-500 uppercase mt-0.5">Enterprise Clients</div>
            </div>
            <div>
              <div className="text-3xl font-serif font-bold text-[#0a1128]">6 Regulated</div>
              <div className="text-[11px] font-mono text-slate-500 uppercase mt-0.5">Domain Practices</div>
            </div>
            <div>
              <div className="text-3xl font-serif font-bold text-slate-800">100% Audit</div>
              <div className="text-[11px] font-mono text-slate-500 uppercase mt-0.5">Compliance Standard</div>
            </div>
            <div>
              <div className="text-3xl font-serif font-bold text-emerald-700">Zero</div>
              <div className="text-[11px] font-mono text-slate-500 uppercase mt-0.5">Regulatory Infractions</div>
            </div>
            <div>
              <div className="text-3xl font-serif font-bold text-[#1e60b5]">5 Global</div>
              <div className="text-[11px] font-mono text-slate-500 uppercase mt-0.5">Decision Theaters</div>
            </div>
          </div>

          {/* Quick Anchor Bar */}
          <div className="mt-10 p-4 rounded-xs bg-[#f8fafc] border border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
            <span className="text-slate-500 uppercase tracking-wider font-bold">Quick Jump to Sector:</span>
            <div className="flex flex-wrap items-center gap-2">
              {GLOBAL_INDUSTRIES.map((ind, i) => (
                <a 
                  key={ind.slug}
                  href={`#sector-${ind.slug}`}
                  className="px-3 py-1.5 rounded-xs bg-white border border-slate-200 hover:border-[#1e60b5] hover:text-[#1e60b5] transition-colors"
                >
                  0{i+1}. {ind.name.split("&")[0]}
                </a>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 2: 6 SECTORS DIRECTORY WITH BESPOKE PHOTOGRAPHY & DEEP PROFILES
          ========================================================================= */}
      <section className="py-24 border-b border-slate-200 bg-[#f8fafc]">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          
          <div className="max-w-3xl space-y-3">
            <span className="heritage-badge text-[10px]">Sector Practice Portfolios</span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#0a1128] tracking-tight">
              Six Critical Global Economic Sectors
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
              Every vertical is subject to distinct macroeconomic tailwinds, regulatory regimes, and architectural challenges. Explore our specialized domain practices.
            </p>
          </div>

          <div className="space-y-16">
            {GLOBAL_INDUSTRIES.map((ind, idx) => {
              const framework = REGULATORY_FRAMEWORKS.find(f => f.code === ind.code);
              return (
                <div 
                  key={ind.slug}
                  id={`sector-${ind.slug}`}
                  className="bg-white rounded-xs border border-slate-200 overflow-hidden p-8 lg:p-14 shadow-sm scroll-mt-24 space-y-8"
                >
                  {/* Top Sector Summary */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pb-8 border-b border-slate-200">
                    <div className="lg:col-span-8 space-y-3">
                      <div className="flex items-center space-x-3">
                        <span className="font-mono text-sm text-[#1e60b5] font-bold">SECTOR 0{idx + 1}</span>
                        <span className="font-mono text-xs uppercase tracking-widest text-slate-400">/ {ind.code}</span>
                        <span className="text-xs font-mono bg-emerald-50 text-emerald-800 px-2 py-0.5 rounded-xs font-semibold">
                          Fiduciary Certified
                        </span>
                      </div>
                      <h3 className="text-3xl sm:text-4xl font-serif font-bold text-[#0a1128]">
                        {ind.name}
                      </h3>
                      <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed max-w-3xl">
                        {ind.desc}
                      </p>
                    </div>

                    <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col justify-end lg:items-end gap-4">
                      <div className="text-left lg:text-right">
                        <div className="text-3xl font-serif font-bold text-[#1e60b5]">{ind.metric}</div>
                        <div className="text-[11px] font-mono text-slate-500 uppercase">{ind.metricLabel}</div>
                      </div>
                      <Link 
                        href={`/industries/${ind.slug}`}
                        className="btn-heritage-primary py-3 px-6 text-xs uppercase tracking-wider font-semibold inline-flex items-center justify-center space-x-2"
                      >
                        <span>Examine Sector Dossier</span>
                        <ArrowRight className="w-3.5 h-3.5 ml-1" />
                      </Link>
                    </div>
                  </div>

                  {/* Two Column Layout: Photo vs Detailed Capabilities & Regimes */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                    
                    {/* Left: Sector Photograph (5 Cols) */}
                    <div className="lg:col-span-5 space-y-6">
                      <div className="editorial-photo-frame rounded-xs aspect-[16/11] relative shadow-md">
                        <img 
                          src={ind.image} 
                          alt={ind.name} 
                          className="w-full h-full object-cover" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1128]/85 via-transparent to-transparent"></div>
                        <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                          <div className="text-[10px] font-mono uppercase tracking-widest text-blue-300">Regulated Domain Practice</div>
                          <div className="text-base font-serif font-bold">{ind.name}</div>
                          <div className="text-xs text-slate-300 font-mono">CODE: {ind.code} &bull; COMPLIANCE RATED</div>
                        </div>
                      </div>

                      <div className="p-5 rounded-xs bg-[#fafaf9] border border-slate-200 space-y-3 text-xs">
                        <div className="font-mono text-[11px] uppercase tracking-wider text-slate-500 font-bold">
                          Governed Regulatory Regimes
                        </div>
                        <div className="font-mono text-xs text-[#0a1128] font-bold">
                          {framework?.regimes || "SEC, FINRA, ISO"}
                        </div>
                        <p className="text-slate-600 font-light leading-relaxed">
                          {framework?.assurance}
                        </p>
                      </div>
                    </div>

                    {/* Right: Sub-Domains & Architectural Defense (7 Cols) */}
                    <div className="lg:col-span-7 space-y-6">
                      <div className="space-y-3">
                        <span className="text-xs font-mono uppercase tracking-widest text-slate-500 block">
                          Specialized Sub-Domain Focus Areas
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                          {framework?.subDomains.map((sub, sIdx) => (
                            <div 
                              key={sub}
                              className="p-4 rounded-xs bg-[#fafaf9] border border-slate-200 space-y-1.5"
                            >
                              <div className="flex items-center space-x-2 text-[#1e60b5] font-mono text-[11px] font-bold">
                                <span>0{sIdx + 1}.</span>
                                <span>SUB-PRACTICE</span>
                              </div>
                              <div className="text-sm font-serif font-bold text-[#0a1128]">
                                {sub}
                              </div>
                              <p className="text-xs text-slate-500 font-light">
                                Audited reference architecture deployed in production client environments.
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Technical Defense Box */}
                      <div className="p-6 rounded-xs bg-slate-50 border border-slate-200 space-y-2">
                        <div className="flex items-center space-x-2 text-[#1e60b5] font-mono text-xs font-bold">
                          <Lock className="w-4 h-4" />
                          <span>SOVEREIGN ARCHITECTURAL DEFENSE</span>
                        </div>
                        <p className="text-xs text-slate-700 font-light leading-relaxed">
                          {framework?.defense}
                        </p>
                        <div className="pt-2 text-[11px] font-mono text-emerald-700 flex items-center font-semibold">
                          <ShieldCheck className="w-3.5 h-3.5 mr-1" />
                          Zero Egress Standard &bull; Immutable Cryptographic Audit Provenance
                        </div>
                      </div>

                      <div className="pt-2">
                        <Link
                          href={`/industries/${ind.slug}`}
                          className="text-xs font-mono uppercase tracking-wider text-[#1e60b5] hover:underline inline-flex items-center font-semibold"
                        >
                          <span>Explore Full {ind.name} Strategic Monograph</span>
                          <ArrowRight className="w-3.5 h-3.5 ml-1" />
                        </Link>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3: COMPARATIVE TRANSFORMATION BENCHMARK TABLE
          ========================================================================= */}
      <section className="py-24 border-b border-slate-200 bg-white">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="max-w-3xl space-y-4">
            <span className="heritage-badge text-[10px]">Empirical Benchmarks</span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#0a1128] tracking-tight">
              Regulated Operating Model Benchmarks
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
              Compare the operational realities of conventional regulated enterprise operating models against Improx Integents sovereign autonomous architectures.
            </p>
          </div>

          <div className="overflow-x-auto bg-white rounded-xs border border-slate-200 shadow-sm">
            <table className="w-full text-left border-collapse min-w-[850px]">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-[11px] font-mono uppercase tracking-wider text-slate-600">
                  <th className="py-4 px-6 font-bold w-1/4">Operational Vector</th>
                  <th className="py-4 px-6 font-semibold text-slate-400 w-1/3">Traditional Status Quo</th>
                  <th className="py-4 px-6 font-bold text-[#1e60b5] bg-blue-50/50 w-1/3">Improx Integents Sovereign Standard</th>
                  <th className="py-4 px-4 font-bold text-slate-700">Verified Impact</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs">
                {SECTOR_BENCHMARKS.map((b) => (
                  <tr key={b.metric} className="hover:bg-slate-50/70 transition-colors">
                    <td className="py-4 px-6 font-serif font-bold text-[#0a1128] bg-slate-50/30">
                      {b.metric}
                    </td>
                    <td className="py-4 px-6 text-slate-500 font-light">{b.traditional}</td>
                    <td className="py-4 px-6 font-semibold text-[#0a1128] bg-blue-50/30 border-l border-blue-100">
                      {b.integents}
                    </td>
                    <td className="py-4 px-4 font-mono font-bold text-emerald-700">
                      {b.impact}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: MACROECONOMIC SECTOR HORIZON (2026 - 2030)
          ========================================================================= */}
      <section className="py-24 border-b border-slate-200 bg-[#f8fafc]">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="max-w-3xl space-y-4">
            <span className="heritage-badge text-[10px]">Macroeconomic Research</span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#0a1128] tracking-tight">
              Tectonic Forces Reshaping Regulated Industries
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
              Our global research institute monitors the macroeconomic and regulatory shifts redefining balance sheets across Fortune 500 boardrooms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-7 rounded-xs bg-white border border-slate-200 space-y-3 shadow-xs">
              <span className="font-mono text-xs text-[#1e60b5] font-bold">HORIZON 01</span>
              <h3 className="text-lg font-serif font-bold text-[#0a1128]">
                Geopolitical Decoupling & Data Sovereignty
              </h3>
              <p className="text-xs text-slate-600 font-light leading-relaxed">
                Multinational enterprises can no longer rely on centralized global cloud regions. Strict data residency mandates in the EU, US, and APAC require localized sovereign VPCs.
              </p>
            </div>

            <div className="p-7 rounded-xs bg-white border border-slate-200 space-y-3 shadow-xs">
              <span className="font-mono text-xs text-[#1e60b5] font-bold">HORIZON 02</span>
              <h3 className="text-lg font-serif font-bold text-[#0a1128]">
                Autonomous Labor vs Fiduciary Oversight
              </h3>
              <p className="text-xs text-slate-600 font-light leading-relaxed">
                As autonomous agent meshes replace manual middle-office processing, board audit committees face new personal liabilities under expanding AI governance statutes.
              </p>
            </div>

            <div className="p-7 rounded-xs bg-white border border-slate-200 space-y-3 shadow-xs">
              <span className="font-mono text-xs text-[#1e60b5] font-bold">HORIZON 03</span>
              <h3 className="text-lg font-serif font-bold text-[#0a1128]">
                Energy Transition & Grid Resiliency
              </h3>
              <p className="text-xs text-slate-600 font-light leading-relaxed">
                Hyperscale AI computational demand is colliding with grid capacity limits. Energy and utility operators must balance variable renewable generation with critical industrial loads.
              </p>
            </div>

            <div className="p-7 rounded-xs bg-white border border-slate-200 space-y-3 shadow-xs">
              <span className="font-mono text-xs text-[#1e60b5] font-bold">HORIZON 04</span>
              <h3 className="text-lg font-serif font-bold text-[#0a1128]">
                Cryptographic Provenance Verification
              </h3>
              <p className="text-xs text-slate-600 font-light leading-relaxed">
                Regulators now demand immutable proof for every algorithmic decision. Probabilistic outputs must be ringfenced with zero-trust cryptographic audit trails.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 5: REGULATED INDUSTRY FAQS
          ========================================================================= */}
      <section className="py-24 border-b border-slate-200 bg-white">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="max-w-3xl space-y-4">
            <span className="heritage-badge text-[10px]">Boardroom Governance FAQ</span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#0a1128] tracking-tight">
              Regulated Sector Boardroom Inquiries
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
              Common strategic, technical, and regulatory questions evaluated by C-suite executives prior to commissioning an industry engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {INDUSTRY_FAQS.map((faq, i) => (
              <div 
                key={faq.q}
                className="p-8 rounded-xs bg-[#fafaf9] border border-slate-200 space-y-3 hover:border-slate-400 transition-colors"
              >
                <div className="flex items-center space-x-3 text-[#1e60b5]">
                  <span className="font-mono text-xs font-bold">0{i+1}.</span>
                  <HelpCircle className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-serif font-bold text-[#0a1128]">
                  {faq.q}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed pt-1">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 6: STATELY SECTOR CTA
          ========================================================================= */}
      <section className="py-24 bg-[#0a1128] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <span className="heritage-badge-blue text-[10px]">Confidential Sector Consultation</span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Commission A Regulated Domain Briefing
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto font-light leading-relaxed">
            Connect directly with former industry chief executives and senior regulatory fellows to review sector benchmarks, macroeconomic exposures, and technical transformation roadmaps.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-heritage-blue px-8 py-4 text-xs uppercase tracking-wider font-semibold inline-flex items-center space-x-2">
              <span>Schedule Sector Consultation</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
            <Link href="/case-studies" className="btn-heritage-secondary border-slate-600 text-white hover:bg-slate-800 hover:text-white px-8 py-4 text-xs uppercase tracking-wider font-semibold">
              <span>Examine Sector Case Studies</span>
            </Link>
          </div>
          <div className="pt-4 text-[11px] font-mono text-slate-400">
            ALL SECTOR INQUIRIES GOVERNED BY STRICT BILATERAL NON-DISCLOSURE AGREEMENTS
          </div>
        </div>
      </section>

    </div>
  );
}
