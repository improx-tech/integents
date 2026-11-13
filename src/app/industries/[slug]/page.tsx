import { GLOBAL_INDUSTRIES, ENTERPRISE_PILLARS, IMPROX_DELIVERY_ENGINE } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import LatestInsightsSection from "@/components/LatestInsightsSection";
import { 
  ArrowRight, 
  ChevronRight, 
  CheckCircle2, 
  ShieldCheck, 
  Lock, 
  Building2, 
  TrendingUp,
  FileCheck,
  Scale,
  Globe,
  HelpCircle,
  Clock,
  Server,
  Database,
  BarChart3
} from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const industry = GLOBAL_INDUSTRIES.find(i => i.slug === slug);
  if (!industry) return { title: "Sector Not Found | Improx Integents" };
  return {
    title: `${industry.name} Practice | Improx Integents`,
    description: industry.desc
  };
}

export default async function IndustryPage({ params }: PageProps) {
  const { slug } = await params;
  const industry = GLOBAL_INDUSTRIES.find(i => i.slug === slug);

  if (!industry) {
    notFound();
  }

  const SECTOR_CAPABILITIES: Record<string, Array<{ title: string; desc: string; kpi: string }>> = {
    "financial-services-banking": [
      { title: "Deterministic AML / Sanctions Screening", desc: "Sub-second autonomous verification across global sanctions watchlists with 0% false-positive drift.", kpi: "98.4% Manual Workload Reduction" },
      { title: "Real-Time Market Risk & Value-at-Risk (VaR)", desc: "Monte Carlo simulation engines executing continuous portfolio stress-testing during volatile macroeconomic events.", kpi: "Sub-12ms Simulation Latency" },
      { title: "Autonomous Wealth & Portfolio Advisory", desc: "Deterministic multi-agent advisory control planes generating hyper-personalized tax-optimized allocations.", kpi: "+$1.8B AUM Managed" },
      { title: "Sovereign Liquidity & Capital Hedging Mesh", desc: "Automated treasury rebalancing across multi-currency correspondent banking ledgers under Basel III constraints.", kpi: "Zero Liquidity Failure Rate" }
    ],
    "healthcare-life-sciences": [
      { title: "Accelerated Clinical Protocol Discovery", desc: "Autonomous agentic research pipelines analyzing multi-omic biological registries under FDA 21 CFR Part 11.", kpi: "35% Faster Clinical Trial Phases" },
      { title: "Zero-Knowledge Genomic Privacy Rings", desc: "Cryptographically partitioned computing clusters processing patient phenotypic data without raw data egress.", kpi: "100% HIPAA & GDPR Compliance" },
      { title: "Hospital Resource & Surgical Orchestration", desc: "Predictive inpatient demand routing and autonomous operating theater scheduling with real-time telemetry.", kpi: "+28% Operating Room Utilization" },
      { title: "Automated Regulatory Filing & Dossier Assembly", desc: "Deterministic document generation synthesizing multi-center trial observations into audit-ready FDA dossiers.", kpi: "60% Reduction in Submission Cycles" }
    ],
    "smart-manufacturing-automotive": [
      { title: "Autonomous Factory Robotics & Control Planes", desc: "Edge-based real-time control software orchestrating multi-arm assembly robotics on deterministic RTOS kernels.", kpi: "99.98% Robotic Precision Rate" },
      { title: "Digital Twin Predictive Maintenance", desc: "Sub-millisecond vibration and thermal telemetry modeling component fatigue to eliminate unplanned downtime.", kpi: "72% Reduction in Factory Outages" },
      { title: "Supply Chain Provenance & Traceability", desc: "Cryptographic parts provenance tracking raw materials from tier-3 suppliers to final vehicle chassis.", kpi: "100% ISO 26262 Traceability" },
      { title: "Dynamic Plant Energy Optimization", desc: "Closed-loop microgrid balancing synchronizing heavy stamping and casting loads with off-peak tariffs.", kpi: "-22% Industrial Kilowatt-Hour Costs" }
    ],
    "retail-consumer-e-commerce": [
      { title: "Autonomous Omni-Channel Supply Routing", desc: "Real-time algorithmic logistics dynamically re-routing inventory across 500+ fulfillment nodes.", kpi: "38% Lower Last-Mile Shipping Costs" },
      { title: "Algorithmic Dynamic Margin Optimization", desc: "Continuous pricing elasticity modeling adjusting SKU markdowns in real-time without brand erosion.", kpi: "+420 bps Gross Margin Expansion" },
      { title: "Privacy-Preserving Personalized Customer Mesh", desc: "Edge recommendation agents predicting lifetime basket value without transmitting raw customer PII.", kpi: "+19.4% Repeat Purchase Frequency" },
      { title: "Automated Fraud & Chargeback Defense", desc: "Deterministic neural graph screening intercepting fraudulent checkout attempts prior to payment gateway submission.", kpi: "99.2% Fraud Interception Accuracy" }
    ],
    "energy-resources-utilities": [
      { title: "Renewable Generation & Dispatch Balancing", desc: "Deep reinforcement dispatch agents balancing fluctuating wind and solar assets with base-load gas turbines.", kpi: "99.999% Grid Reliability Index" },
      { title: "NERC-CIP Critical Asset Isolation Mesh", desc: "Hardware data-diode architectures insulating SCADA and substation relays from public internet exposure.", kpi: "Zero Perimeter Breaches" },
      { title: "Predictive Substation & Turbine Maintenance", desc: "Acoustic and thermal sensors predicting high-voltage transformer dielectric breakdown months in advance.", kpi: "-45% Unplanned Maintenance Capital" },
      { title: "Audited Carbon Accounting & Scope 1-3 Ledgers", desc: "Immutable cryptographic ledger tracking industrial emissions for EU CBAM and SEC climate disclosure filings.", kpi: "100% Independent Audit Certification" }
    ],
    "telecom-high-tech": [
      { title: "Autonomous RAN & Dynamic Beamforming", desc: "Distributed edge agents optimizing millimeter-wave antenna tilt and power output in response to real-time traffic.", kpi: "+34% Spectral Efficiency" },
      { title: "Sub-Millisecond 5G/6G Network Slicing", desc: "Guaranteed QoS slicing for autonomous vehicles and robotic surgical suites with deterministic latency SLAs.", kpi: "<4ms Guaranteed Packet Latency" },
      { title: "Zero-Trust Cloud-Native OSS/BSS Core", desc: "Microservices control plane decoupling billing and subscriber provisioning from legacy telecom hardware.", kpi: "85% Faster Enterprise Service Spin-Up" },
      { title: "Satellite & Terrestrial Hybrid Mesh Routing", desc: "Dynamic packet forwarding balancing LEO satellite constellation uplinks with fiber terrestrial backhauls.", kpi: "99.999% Backhaul Resiliency" }
    ]
  };

  const capabilities = SECTOR_CAPABILITIES[industry.slug] || [
    { title: "Autonomous Operations", desc: "Customized sovereign multi-agent control planes.", kpi: "Audited Production Standard" },
    { title: "Regulatory Compliance", desc: "Deterministic mathematical constraints aligned with sector authorities.", kpi: "100% Audit Compliance" },
    { title: "Capital Efficiency", desc: "Measurable EBITDA margin expansion and operational expense reduction.", kpi: "+350 bps Margin Accretion" },
    { title: "IP Sovereignty", desc: "Zero vendor lock-in with complete perpetual IP transfer.", kpi: "100% Client IP Ownership" }
  ];

  const SECTOR_FAQS = [
    {
      q: `How does Improx Integents manage regulatory approvals and compliance for ${industry.name}?`,
      a: `Our practice embeds former sector chief risk officers and regulatory fellows who have drafted or audited sector mandates. We ensure every technical solution implements formal mathematical boundaries, immutable audit logs, and pre-packaged compliance artifacts tailored to governing bodies.`
    },
    {
      q: `Can these systems be deployed on-premises or within air-gapped infrastructure?`,
      a: `Yes. Given the critical infrastructure and sovereign data security requirements in ${industry.name}, our architectures are designed to run fully self-contained on bare-metal clusters, private sovereign clouds, or air-gapped networks with zero external data egress.`
    },
    {
      q: `What is the expected return on capital for a sector modernization mandate?`,
      a: `Historically, our engagements in ${industry.name} generate between 3.5x and 7.2x return on consulting capital within 18 months, achieved through operating expenditure compression, reduced regulatory compliance overhead, and accelerated throughput.`
    },
    {
      q: `How do you handle legacy core systems (e.g. mainframes, SCADA, legacy ERPs)?`,
      a: `We never force high-risk rip-and-replace cutovers. Instead, we deploy non-invasive event-driven sidecars and strangler-mesh adapters that read directly from legacy data busses while routing processing through modern sovereign agent control planes.`
    },
    {
      q: `Who owns the models and intellectual property developed during the engagement?`,
      a: `Your enterprise owns 100% of all intellectual property, source code, model weights, and architectural documentation perpetually. We transfer all assets upon milestone completion with zero recurring licensing dependencies.`
    }
  ];

  return (
    <div className="bg-white text-slate-900 min-h-screen pt-20 lg:pt-24">
      
      {/* =========================================================================
          SECTION 1: STATELY SECTOR HERO
          ========================================================================= */}
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
              <span className="text-xs font-mono bg-emerald-50 text-emerald-800 px-2 py-0.5 rounded-xs font-semibold">
                Fiduciary Certified
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-serif font-bold text-[#0a1128] tracking-tight leading-[1.08]">
              {industry.name} Practice
            </h1>

            <p className="text-base sm:text-xl text-slate-600 font-light leading-relaxed max-w-3xl">
              {industry.desc}
            </p>

            <div className="pt-6 flex flex-wrap gap-4 text-xs font-mono">
              <div className="px-3 py-2 bg-slate-100 rounded-xs border border-slate-200">
                BENCHMARK METRIC: <span className="font-bold text-[#1e60b5]">{industry.metric}</span> {industry.metricLabel}
              </div>
              <div className="px-3 py-2 bg-slate-100 rounded-xs border border-slate-200">
                REGULATORY STANDARD: <span className="font-bold text-slate-900">100% Audit Adherence</span>
              </div>
              <div className="px-3 py-2 bg-slate-100 rounded-xs border border-slate-200">
                DATA EGRESS: <span className="font-bold text-emerald-700">Strict Zero-Egress Air-Gapped Standard</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: SECTOR REPORT, VALUE DRIVERS & PHOTOGRAPHY
          ========================================================================= */}
      <section className="py-24 border-b border-slate-200 bg-[#f8fafc]">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Main Content (8 Cols) */}
            <div className="lg:col-span-8 space-y-14">
              
              <div className="space-y-4">
                <span className="heritage-badge text-[10px]">Sector Strategic Briefing</span>
                <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#0a1128]">
                  Macroeconomic Dynamics & Structural Modernization
                </h2>
                <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
                  The {industry.name} sector is undergoing unprecedented structural transformation. Tightening regulatory scrutiny, geopolitical supply volatility, and the advent of autonomous cognitive control planes require enterprise boards to fundamentally rethink their operating models.
                </p>
                <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
                  Improx Integents delivers senior partner-led counsel backed by deterministic systems engineering. We don&apos;t build experimental prototypes; we engineer mission-critical production architectures that guarantee operational continuity, regulatory immunity, and permanent balance-sheet accretion.
                </p>
              </div>

              {/* Sector High Res Photograph Frame */}
              <div className="editorial-photo-frame rounded-xs aspect-[16/9] shadow-md relative">
                <img 
                  src={industry.image} 
                  alt={industry.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1128]/85 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-white">
                  <span>SECTOR BENCHMARK DOSSIER</span>
                  <span className="text-blue-300 font-semibold">{industry.code}</span>
                </div>
              </div>

              {/* Specialized Sub-Capabilities Grid */}
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                  <h3 className="text-xl font-serif font-bold text-[#0a1128]">
                    Specialized Sub-Domain Capabilities in {industry.name}
                  </h3>
                  <span className="text-xs font-mono text-slate-400">
                    Production Audited Architectures
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {capabilities.map((cap, cIdx) => (
                    <div 
                      key={cap.title}
                      className="p-6 rounded-xs bg-white border border-slate-200 space-y-3 shadow-xs hover:border-slate-400 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs text-[#1e60b5] font-bold">CAPABILITY 0{cIdx + 1}</span>
                        <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-xs font-semibold">
                          VERIFIED
                        </span>
                      </div>
                      <h4 className="text-base font-serif font-bold text-[#0a1128]">
                        {cap.title}
                      </h4>
                      <p className="text-xs text-slate-600 font-light leading-relaxed">
                        {cap.desc}
                      </p>
                      <div className="pt-3 border-t border-slate-100 text-xs font-mono text-slate-800">
                        <strong className="text-[#1e60b5]">Empirical KPI:</strong> {cap.kpi}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sector Delivery Framework */}
              <div className="space-y-6 pt-6">
                <span className="heritage-badge text-[10px]">Methodology</span>
                <h3 className="text-2xl font-serif font-bold text-[#0a1128]">
                  Governance & Phased Deployment in {industry.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                  Due to the high-stakes regulatory constraints in {industry.name}, every mandate enforces a strict 4-phase delivery protocol with zero single points of failure.
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

              {/* Sector FAQs */}
              <div className="space-y-6 pt-6">
                <span className="heritage-badge text-[10px]">Governance FAQ</span>
                <h3 className="text-2xl font-serif font-bold text-[#0a1128]">
                  Sector Inquiries & Boardroom Governance
                </h3>

                <div className="space-y-4">
                  {SECTOR_FAQS.map((faq, i) => (
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
              
              {/* Sector Metrics Card */}
              <div className="bg-white p-7 rounded-xs border border-slate-200 space-y-4 shadow-sm">
                <div className="font-mono text-xs uppercase tracking-wider text-slate-400">
                  Sector Benchmark
                </div>
                <div>
                  <div className="text-3xl font-serif font-bold text-[#1e60b5]">{industry.metric}</div>
                  <div className="text-sm font-serif font-bold text-[#0a1128] mt-0.5">{industry.metricLabel}</div>
                </div>
                <p className="text-xs text-slate-600 font-light leading-relaxed">
                  Empirical business-case outcomes validated across enterprise clients within the {industry.name} practice.
                </p>
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400">PRACTICE CODE</span>
                  <span className="font-semibold text-slate-800">{industry.code}</span>
                </div>
              </div>

              {/* Regulatory Assurance Card */}
              <div className="bg-[#fafaf9] p-7 rounded-xs border border-slate-200 space-y-4">
                <div className="font-mono text-xs uppercase tracking-wider text-slate-400">
                  Regulatory Immunity
                </div>
                <h4 className="text-base font-serif font-bold text-[#0a1128]">
                  Zero Regulatory Infractions
                </h4>
                <p className="text-xs text-slate-600 font-light leading-relaxed">
                  Every control plane is engineered with deterministic mathematical rails and cryptographic audit logging to meet the most demanding global statutory requirements.
                </p>
                <div className="p-3 bg-white rounded-xs border border-slate-200 space-y-2 text-xs font-mono text-slate-700">
                  <div>
                    <strong className="block text-[10px] uppercase text-slate-400">Audit Trail:</strong>
                    <span>Immutable Tamper-Evident Ledger</span>
                  </div>
                  <div>
                    <strong className="block text-[10px] uppercase text-slate-400">Data Boundary:</strong>
                    <span>Air-Gapped Private VPC</span>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="w-full btn-heritage-primary py-3 text-xs uppercase tracking-wider font-semibold flex items-center justify-center space-x-1"
                >
                  <span>Request Sector Terms</span>
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
                  All sector algorithms, models, and data pipelines become the exclusive perpetual property of your enterprise upon project handover.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: SECTOR RESEARCH & MONOGRAPHS
          ========================================================================= */}
      <LatestInsightsSection 
        title={`Strategic Research & Monographs for ${industry.name}`} 
        subtitle={`Empirical case studies, regulatory briefs, and algorithmic architecture analyses relevant to ${industry.name}.`}
        badge={`${industry.code} Sector Research • The Integents Review`}
        limit={3}
      />

      {/* =========================================================================
          SECTION 4: STATELY SECTOR CTA
          ========================================================================= */}
      <section className="py-24 bg-[#0a1128] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <span className="heritage-badge-blue text-[10px]">Confidential Consultation</span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Commission A Consultation for {industry.name}
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto font-light leading-relaxed">
            Connect directly with former industry executives to review benchmarks, regulatory shifts, and technical transformation roadmaps under mutual non-disclosure.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-heritage-blue px-8 py-4 text-xs uppercase tracking-wider font-semibold inline-flex items-center space-x-2">
              <span>Initiate Sector Briefing</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
            <Link href="/industries" className="btn-heritage-secondary border-slate-600 text-white hover:bg-slate-800 hover:text-white px-8 py-4 text-xs uppercase tracking-wider font-semibold">
              <span>View All 6 Regulated Sectors</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
