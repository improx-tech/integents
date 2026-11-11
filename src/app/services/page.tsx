import { ENTERPRISE_PILLARS } from "@/lib/data";
import Link from "next/link";
import { 
  ArrowRight, 
  ChevronRight, 
  Compass, 
  BrainCircuit, 
  Cpu, 
  Layers, 
  Building2, 
  ShieldCheck,
  CheckCircle2,
  Lock,
  TrendingUp,
  FileText,
  Users,
  Award,
  Clock,
  Sparkles,
  Server,
  Database,
  BarChart3,
  HelpCircle,
  ExternalLink,
  BookOpen
} from "lucide-react";

export const metadata = {
  title: "Strategic Consulting Practices | Improx Integents",
  description: "Comprehensive enterprise practice matrix spanning Corporate Strategy, Cognitive AI Systems, Sovereign Cloud Infrastructure, Autonomous Operations, and Regulated Industry Modernization."
};

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

  const ENGAGEMENT_MODELS = [
    {
      code: "ENG-01",
      name: "Boardroom Fiduciary Advisory",
      duration: "Annual Retainer & Strategic Counsel",
      team: "1 Senior Managing Partner, 1 Principal Strategist, 1 Lead Quant",
      ideal: "Chief Executive Officers, Board Audit Committees, Private Equity Sponsors",
      deliverable: "Dynamic Capital Allocation Models, Quarterly M&A Portfolio Stress Tests, C-Suite Decision Theaters",
      desc: "Confidential advisory for high-stakes capital allocation, operating model restructuring, and AI governance. Senior managing partners engage directly with executive committees to evaluate strategic optionality without junior leverage.",
      sla: "Dedicated partner availability with guaranteed 2-hour SLA for confidential crisis and transaction briefings."
    },
    {
      code: "ENG-02",
      name: "Sovereign Engineering Sprints",
      duration: "90-Day Rapid Production Mandate",
      team: "1 Principal Architect, 3 Senior Staff Engineers, 1 Security Auditor",
      ideal: "Chief Technology Officers, Chief Information Officers, Heads of AI",
      deliverable: "Production-grade multi-agent control planes, deterministic guardrail layers, private cloud VPC deployment",
      desc: "High-velocity systems engineering squad led by principal architects. We transition from algorithmic design to working production software in isolated security sandboxes within 90 days.",
      sla: "Deterministic test coverage >98%, zero data egress architecture, and continuous integration pipeline handover."
    },
    {
      code: "ENG-03",
      name: "Enterprise Turnkey Modernization",
      duration: "6 - 12 Month Transformation Program",
      team: "1 Practice Lead, 2 Principal Architects, 6 Senior Engineers, 1 Change Lead",
      ideal: "Chief Operating Officers, Chief Financial Officers, Business Unit Presidents",
      deliverable: "Complete legacy decoupling, unified semantic memory mesh, near-autonomous supply chain robotics",
      desc: "End-to-end structural transformation of core operational infrastructure. Re-engineers legacy monoliths, unifies disparate enterprise ledgers, and transfers 100% intellectual property to internal teams.",
      sla: "Formal milestone sign-offs linked directly to audited EBITDA expansion and verified operating expense reduction."
    },
    {
      code: "ENG-04",
      name: "Algorithmic Risk & Audit Verification",
      duration: "4 - 6 Week Specialized Diligence",
      team: "1 Regulatory Fellow, 1 Algorithmic Risk Architect, 1 Cryptographic Engineer",
      ideal: "Chief Risk Officers, General Counsel, Compliance Directors",
      deliverable: "Deterministic hallucination stress audit, cryptographic ledger logging, regulatory compliance certification",
      desc: "Independent technical diligence auditing automated decision systems against SEC, FINRA, HIPAA, and EU AI Act (2024) mandates. Establishes immutable audit meshes across mission-critical workflows.",
      sla: "Independent audit opinion suitable for submission to regulatory agencies, board committees, and rating agencies."
    }
  ];

  const MATURITY_COMPARISON = [
    {
      dimension: "Architectural Pattern",
      l1: "Siloed departmental scripts",
      l2: "Point-to-point REST APIs",
      l3: "Centralized Lakehouse pipelines",
      l4: "Distributed micro-agents",
      l5: "Sovereign Cognitive Mesh (Integents Standard)"
    },
    {
      dimension: "Data Governance & Lineage",
      l1: "Spreadsheets & unmanaged CSVs",
      l2: "Relational DB with schema drift",
      l3: "Enterprise data catalog (manual)",
      l4: "Automated lineage tracking",
      l5: "Zero-Trust Cryptographic Ledger Audit"
    },
    {
      dimension: "Decision Determinism",
      l1: "Manual human validation",
      l2: "Heuristic rule engines",
      l3: "Probabilistic ML models (unmonitored)",
      l4: "Guardrailed LLM agents",
      l5: "Formal Mathematical Proof & Fail-Safe Rails"
    },
    {
      dimension: "Deployment Model",
      l1: "Local workstations & shadow IT",
      l2: "Public multi-tenant SaaS",
      l3: "Cloud VM clusters",
      l4: "Kubernetes microservices",
      l5: "Air-Gapped Private VPC / Sovereign Cloud"
    },
    {
      dimension: "IP Ownership & Control",
      l1: "Vendor locked-in licenses",
      l2: "Commercial off-the-shelf SaaS",
      l3: "Cloud provider lock-in",
      l4: "Hybrid open-source stack",
      l5: "100% Client-Owned Intellectual Property"
    },
    {
      dimension: "EBITDA Accretion Velocity",
      l1: "Negative (unmonitored SaaS spend)",
      l2: "Neutral (maintenance overhead)",
      l3: "Incremental (+2% to +5%)",
      l4: "Substantial (+8% to +14%)",
      l5: "Transformative (+18% to +35% Compound)"
    }
  ];

  const DELIVERY_PHASES = [
    {
      step: "01",
      name: "Strategic Discovery & Baseline Audit",
      duration: "Weeks 1 - 3",
      focus: "C-suite alignment, operational bottleneck discovery, and empirical baseline telemetry across core systems.",
      milestone: "Audit Charter & Capital ROI Projections",
      deliverables: ["Legacy Debt Inventory", "Quantitative EBITDA Model", "Security Vulnerability Surface Assessment"]
    },
    {
      step: "02",
      name: "Sovereign Architecture & Sandbox Prototyping",
      duration: "Weeks 4 - 8",
      focus: "Formulation of target-state sovereign topology in an isolated, air-gapped staging sandbox.",
      milestone: "Working Prototype with Zero Data Egress",
      deliverables: ["Formal Architecture Blueprint", "Multi-Agent Topology Spec", "Air-Gapped Sandbox Demonstration"]
    },
    {
      step: "03",
      name: "Pilot Deployment & Parallel Reconciliation",
      duration: "Weeks 9 - 16",
      focus: "Real-world traffic processing alongside legacy systems to empirically verify deterministic accuracy.",
      milestone: "100% Parity Validation with 0% Drift",
      deliverables: ["Parallel Reconciliation Report", "Fail-Safe Rollback Protocols", "Executive Governance Dashboard"]
    },
    {
      step: "04",
      name: "Production Hardening & Global Rollout",
      duration: "Weeks 17 - 32",
      focus: "Full-scale cutover with high-availability disaster recovery, dynamic autoscaling, and live telemetry.",
      milestone: "Sovereign Production Cutover",
      deliverables: ["Disaster Recovery Drills", "Sub-Millisecond SLA Guarantees", "Continuous Integration Deployment Pipeline"]
    },
    {
      step: "05",
      name: "IP Handover & Operational Autonomous Transition",
      duration: "Weeks 33 - 36",
      focus: "Full transfer of source code, models, and operational documentation with zero external vendor dependencies.",
      milestone: "100% Self-Sovereign Independence",
      deliverables: ["Complete Source & Model Weights", "Internal Engineering Training", "Executive IP Assignment Certificate"]
    }
  ];

  const PRACTICE_FAQS = [
    {
      q: "How does Improx Integents differ from traditional strategy consultancies (McKinsey, BCG, Bain)?",
      a: "Traditional management consultancies excel at high-level slide presentations and organizational re-structuring, but they routinely hand off technical execution to junior systems integrators, leading to execution drift. Improx Integents merges high-conviction corporate strategy with sovereign systems engineering. Our managing partners write architectural blueprints and our principal engineers deploy working, auditable code directly into your private infrastructure. We don't bill by junior hours; we structure our retainers around audited EBITDA expansion."
    },
    {
      q: "What is your intellectual property ownership policy?",
      a: "Our fiduciary charter guarantees 100% client intellectual property ownership. Every line of source code, algorithm, model weight, and architectural blueprint created during an engagement is fully assigned to your enterprise upon project milestone sign-off. We never retain proprietary locks, we never license your own code back to you, and we never use client data or insights to train generalized models for competitors."
    },
    {
      q: "How do you ensure zero data egress and regulatory compliance during AI deployments?",
      a: "We engineer private, sovereign control planes that deploy strictly within your enterprise VPC (AWS GovCloud, Azure Confidential Computing, GCP Sovereign Cloud) or on-premises air-gapped hardware. No prompts, customer records, or enterprise ledgers ever leave your security perimeter. Every transaction is audited via cryptographic, tamper-evident logs that meet SEC, FINRA, HIPAA, and ISO 27001 requirements."
    },
    {
      q: "What is the typical timeline and capital commitment for an initial engagement?",
      a: "We offer distinct commercial structures depending on enterprise maturity. Initial 4-to-6 week Algorithmic Risk Audits begin with discrete advisory scopes. 90-day Sovereign Engineering Sprints rapidly validate production value in isolated sandboxes. Large-scale Enterprise Turnkey Modernization programs span 6 to 12 months with milestone-gated capital commitments tied directly to verified operational ROI."
    },
    {
      q: "Can our internal IT and engineering teams maintain the systems after handover?",
      a: "Yes. Phase 5 of our delivery framework is dedicated entirely to internal capability transition. We embed your senior engineers and architects into our squads from Day 1, conduct rigorous code walkthroughs, provide automated CI/CD pipelines, and author comprehensive system runbooks. By the time our mandate concludes, your internal team exercises 100% operational sovereignty."
    },
    {
      q: "How do your practices collaborate across complex multi-disciplinary transformations?",
      a: "Enterprise challenges rarely fit into a single functional silo. A digital banking transformation, for example, draws on our Strategy practice for capital allocation, our Cognitive Systems practice for real-time fraud agents, our Cloud practice for zero-trust infrastructure, and our Regulated Industry practice for SEC and FINRA audit compliance. Our senior managing partners orchestrate unified, multidisciplinary squads tailored to your exact boardroom objectives."
    }
  ];

  return (
    <div className="bg-white text-slate-900 min-h-screen pt-16 sm:pt-20">
      
      {/* =========================================================================
          SECTION 1: STATELY PRACTICE CATALOG HERO WITH TELEMETRY
          ========================================================================= */}
      <section className="relative py-20 lg:py-28 border-b border-slate-200 bg-[#fdfdfd]">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-4xl space-y-4">
            <div className="flex items-center space-x-3">
              <span className="heritage-badge text-[10px]">ESTABLISHED 1976 &bull; 50-YEAR FIDUCIARY HERITAGE</span>
              <span className="text-xs font-mono text-slate-500 hidden sm:inline">&bull; GLOBAL ADVISORY & SYSTEMS ARCHITECTURE</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-[#0a1128] tracking-tight leading-[1.06]">
              Five Strategic Practices. <br />
              <span className="italic font-serif text-[#1e60b5] font-normal">Twenty-Five Sovereign Capabilities.</span>
            </h1>

            <p className="text-base sm:text-xl text-slate-600 font-light leading-relaxed max-w-3xl pt-2">
              From boardroom capital allocation to sovereign-grade agentic AI execution, our consulting practices advise Global 500 enterprise boards, sovereign wealth funds, and market-defining institutions on navigating macroeconomic complexity, expanding EBITDA margins, and achieving permanent operational autonomy.
            </p>
          </div>

          {/* Practice Telemetry Row */}
          <div className="pt-12 mt-12 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            <div>
              <div className="text-3xl font-serif font-bold text-[#0a1128]">$14.2B+</div>
              <div className="text-[11px] font-mono text-slate-500 uppercase mt-0.5">Capital Value Unlocked</div>
            </div>
            <div>
              <div className="text-3xl font-serif font-bold text-[#1e60b5]">5 Practices</div>
              <div className="text-[11px] font-mono text-slate-500 uppercase mt-0.5">25 Core Capabilities</div>
            </div>
            <div>
              <div className="text-3xl font-serif font-bold text-[#0a1128]">100%</div>
              <div className="text-[11px] font-mono text-slate-500 uppercase mt-0.5">Client IP Transfer</div>
            </div>
            <div>
              <div className="text-3xl font-serif font-bold text-slate-800">500+</div>
              <div className="text-[11px] font-mono text-slate-500 uppercase mt-0.5">Production Deployments</div>
            </div>
            <div>
              <div className="text-3xl font-serif font-bold text-[#1e60b5]">98.6%</div>
              <div className="text-[11px] font-mono text-slate-500 uppercase mt-0.5">Multi-Year Client Retention</div>
            </div>
            <div>
              <div className="text-3xl font-serif font-bold text-[#0a1128]">Zero</div>
              <div className="text-[11px] font-mono text-slate-500 uppercase mt-0.5">Vendor Lock-In</div>
            </div>
          </div>

          {/* Quick Anchor Directory Bar */}
          <div className="mt-10 p-4 rounded-xs bg-[#f8fafc] border border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
            <span className="text-slate-500 uppercase tracking-wider font-bold">Quick Jump to Practice:</span>
            <div className="flex flex-wrap items-center gap-2">
              {ENTERPRISE_PILLARS.map((p, i) => (
                <a 
                  key={p.slug}
                  href={`#practice-${p.slug}`}
                  className="px-3 py-1.5 rounded-xs bg-white border border-slate-200 hover:border-[#1e60b5] hover:text-[#1e60b5] transition-colors"
                >
                  0{i+1}. {p.category.split("&")[0]}
                </a>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 2: 5 PILLARS COMPREHENSIVE ARCHITECTURAL DIRECTORY (DEEP DETAILS)
          ========================================================================= */}
      <section className="py-24 border-b border-slate-200 bg-[#f8fafc]">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          
          <div className="max-w-3xl space-y-3">
            <span className="heritage-badge text-[10px]">Architectural Directory</span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#0a1128] tracking-tight">
              Five Sovereign Practice Pillars
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
              Explore our core consulting domains. Each practice is led by former industry chief executives and senior research fellows who take personal responsibility for engagement outcomes.
            </p>
          </div>

          {ENTERPRISE_PILLARS.map((pillar, idx) => (
            <div 
              key={pillar.slug}
              id={`practice-${pillar.slug}`}
              className="bg-white rounded-xs border border-slate-200 overflow-hidden p-8 lg:p-14 shadow-sm scroll-mt-24 space-y-10"
            >
              {/* Header Row */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pb-8 border-b border-slate-200">
                <div className="lg:col-span-8 space-y-3">
                  <div className="flex items-center space-x-3">
                    <span className="font-mono text-sm text-[#1e60b5] font-bold">PILLAR 0{idx + 1}</span>
                    <span className="font-mono text-xs uppercase tracking-widest text-slate-400">/ {pillar.code}</span>
                    <span className="text-xs font-mono bg-blue-50 text-[#1e60b5] px-2 py-0.5 rounded-xs font-semibold">
                      Senior Partner Led
                    </span>
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-serif font-bold text-[#0a1128]">
                    {pillar.category}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed max-w-3xl">
                    {pillar.tagline}
                  </p>
                </div>

                <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col justify-end lg:items-end gap-4">
                  <div className="text-left lg:text-right">
                    <div className="text-3xl font-serif font-bold text-[#1e60b5]">{pillar.stat}</div>
                    <div className="text-[11px] font-mono text-slate-500 uppercase">{pillar.statLabel}</div>
                  </div>
                  <Link 
                    href={`/services/${pillar.slug}`}
                    className="btn-heritage-primary py-3 px-6 text-xs uppercase tracking-wider font-semibold inline-flex items-center justify-center space-x-2"
                  >
                    <span>Practice Pillar Overview</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Link>
                </div>
              </div>

              {/* Two Column Layout: Photography & Practice Lead vs Sub-capabilities Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                
                {/* Left: Lead Dossier & High-Res Photography (4 Cols) */}
                <div className="lg:col-span-4 space-y-6">
                  <div className="editorial-photo-frame rounded-xs aspect-[16/11] relative shadow-md">
                    <img 
                      src={pillar.image} 
                      alt={pillar.category} 
                      className="w-full h-full object-cover" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1128]/85 via-[#0a1128]/20 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                      <div className="text-[10px] font-mono uppercase tracking-widest text-blue-300">Practice Leadership</div>
                      <div className="text-sm font-serif font-bold">{pillar.leadName}</div>
                      <div className="text-[11px] text-slate-300 font-light">{pillar.leadRole}</div>
                    </div>
                  </div>

                  <div className="p-5 rounded-xs bg-[#fafaf9] border border-slate-200 space-y-3 text-xs">
                    <div className="font-mono text-[11px] uppercase tracking-wider text-slate-500 font-bold">
                      Practice Mandate Focus
                    </div>
                    <p className="text-slate-600 font-light leading-relaxed">
                      Every engagement within {pillar.category} is anchored in empirical business metrics and supported by proprietary algorithmic tooling with 100% intellectual property ringfencing.
                    </p>
                    <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-[11px] font-mono text-[#1e60b5] font-semibold">
                      <span>5 Sub-Capabilities</span>
                      <span>Verified Audits &rarr;</span>
                    </div>
                  </div>
                </div>

                {/* Right: Comprehensive 5 Sub-Capabilities Breakdown (8 Cols) */}
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                    <span className="text-xs font-mono uppercase tracking-widest text-slate-500">
                      Sub-Specialization Portfolio ({pillar.items.length} Capabilities)
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      Click capability to view full dossier
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {pillar.items.map((sub, sIdx) => (
                      <Link
                        key={sub.slug}
                        href={`/services/${pillar.slug}/${sub.slug}`}
                        className="group p-5 rounded-xs bg-[#fafaf9] border border-slate-200 hover:border-slate-400 hover:bg-white hover:shadow-md transition-all flex flex-col justify-between"
                      >
                        <div className="space-y-2.5">
                          <div className="flex items-center justify-between">
                            <span className="font-mono text-[11px] text-[#1e60b5] font-bold">
                              {pillar.code}.0{sIdx + 1}
                            </span>
                            <ChevronRight className="w-3.5 h-3.5 text-[#1e60b5] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                          </div>

                          <h4 className="text-sm font-serif font-bold text-slate-900 group-hover:text-[#1e60b5] transition-colors">
                            {sub.title}
                          </h4>

                          <p className="text-xs text-slate-600 font-light leading-relaxed">
                            {sub.shortDesc}
                          </p>
                        </div>

                        <div className="pt-3 mt-4 border-t border-slate-200/70 flex items-center justify-between text-[11px] font-mono text-slate-500 group-hover:text-[#1e60b5]">
                          <span>Access Technical Dossier</span>
                          <span>&rarr;</span>
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

      {/* =========================================================================
          SECTION 3: 4 ENTERPRISE ENGAGEMENT COMMERCIAL MODELS (EXTENDED)
          ========================================================================= */}
      <section className="py-24 border-b border-slate-200 bg-white">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="max-w-3xl space-y-4">
            <span className="heritage-badge text-[10px]">Commercial Governance</span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#0a1128] tracking-tight">
              Structured Boardroom Commercial Frameworks
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
              We align our commercial compensation with empirical shareholder value creation. Unlike conventional consultancies billing open-ended hourly fees, our mandates operate on fixed milestones and verifiable performance SLAs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ENGAGEMENT_MODELS.map((model) => (
              <div 
                key={model.code}
                className="bg-[#fafaf9] rounded-xs border border-slate-200 p-7 flex flex-col justify-between hover:border-slate-400 hover:shadow-lg transition-all"
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                    <span className="font-mono text-xs font-bold text-[#1e60b5]">{model.code}</span>
                    <span className="text-[10px] font-mono text-slate-500">{model.duration}</span>
                  </div>

                  <h3 className="text-xl font-serif font-bold text-[#0a1128]">
                    {model.name}
                  </h3>

                  <p className="text-xs text-slate-600 font-light leading-relaxed">
                    {model.desc}
                  </p>

                  <div className="space-y-3 pt-3 border-t border-slate-200 text-xs">
                    <div className="p-2.5 bg-white rounded-xs border border-slate-200">
                      <strong className="text-[10px] font-mono text-slate-400 uppercase block mb-1">Squad Staffing:</strong>
                      <span className="text-slate-800 text-[11px] font-medium">{model.team}</span>
                    </div>

                    <div className="p-2.5 bg-white rounded-xs border border-slate-200">
                      <strong className="text-[10px] font-mono text-slate-400 uppercase block mb-1">Target C-Suite Buyer:</strong>
                      <span className="text-slate-700 text-[11px]">{model.ideal}</span>
                    </div>

                    <div className="p-2.5 bg-white rounded-xs border border-slate-200">
                      <strong className="text-[10px] font-mono text-slate-400 uppercase block mb-1">Core Deliverables:</strong>
                      <span className="text-slate-700 text-[11px]">{model.deliverable}</span>
                    </div>

                    <div className="p-2.5 bg-blue-50/60 rounded-xs border border-blue-100 text-[11px] text-slate-700">
                      <strong className="text-[10px] font-mono text-[#1e60b5] uppercase block mb-1">SLA Guarantee:</strong>
                      {model.sla}
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200">
                  <Link 
                    href="/contact"
                    className="w-full btn-heritage-secondary py-3 text-xs uppercase tracking-wider font-semibold flex items-center justify-center space-x-1"
                  >
                    <span>Request Retainer Terms</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: COMPREHENSIVE COGNITIVE MATURITY BENCHMARK (CMM-5 TABLE)
          ========================================================================= */}
      <section className="py-24 border-b border-slate-200 bg-[#f8fafc]">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="max-w-3xl space-y-3">
            <span className="heritage-badge text-[10px]">CMM-5 Maturity Benchmark</span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#0a1128] tracking-tight">
              The Enterprise Transformation Curve
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
              Where does your operating model sit along the cognitive capability spectrum? We audit and transition global organizations from fragmented legacy scripting to Level 5 sovereign autonomy.
            </p>
          </div>

          {/* Full Detailed Matrix Table */}
          <div className="overflow-x-auto bg-white rounded-xs border border-slate-200 shadow-sm">
            <table className="w-full text-left border-collapse min-w-[900px]">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-[11px] font-mono uppercase tracking-wider text-slate-600">
                  <th className="py-4 px-6 font-bold w-1/5">Capability Dimension</th>
                  <th className="py-4 px-4 font-semibold text-slate-400">L1: Ad-Hoc Scripts</th>
                  <th className="py-4 px-4 font-semibold text-slate-400">L2: Central APIs</th>
                  <th className="py-4 px-4 font-semibold text-slate-600">L3: Applied ML</th>
                  <th className="py-4 px-4 font-semibold text-slate-700">L4: Agent Mesh</th>
                  <th className="py-4 px-6 font-bold text-[#1e60b5] bg-blue-50/50">L5: Sovereign Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs">
                {MATURITY_COMPARISON.map((row, rIdx) => (
                  <tr key={row.dimension} className="hover:bg-slate-50/70 transition-colors">
                    <td className="py-4 px-6 font-serif font-bold text-[#0a1128] bg-slate-50/30">
                      {row.dimension}
                    </td>
                    <td className="py-4 px-4 text-slate-500 font-light">{row.l1}</td>
                    <td className="py-4 px-4 text-slate-500 font-light">{row.l2}</td>
                    <td className="py-4 px-4 text-slate-600 font-light">{row.l3}</td>
                    <td className="py-4 px-4 text-slate-700 font-medium">{row.l4}</td>
                    <td className="py-4 px-6 font-semibold text-[#0a1128] bg-blue-50/30 border-l border-blue-100">
                      {row.l5}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 5: 5-PHASE PRECISION DELIVERY FRAMEWORK
          ========================================================================= */}
      <section className="py-24 border-b border-slate-200 bg-white">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="max-w-3xl space-y-4">
            <span className="heritage-badge text-[10px]">Methodology & Execution</span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#0a1128] tracking-tight">
              Five-Phase Precision Delivery Framework
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
              Every mandate follows our institutional governance framework. From initial telemetry audit to final intellectual property handover, every milestone requires formal sign-off.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {DELIVERY_PHASES.map((phase) => (
              <div 
                key={phase.step}
                className="p-6 rounded-xs bg-[#fafaf9] border border-slate-200 hover:border-slate-400 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                    <span className="text-2xl font-serif font-bold text-[#1e60b5]">PHASE {phase.step}</span>
                    <span className="text-[10px] font-mono text-slate-400">{phase.duration}</span>
                  </div>

                  <h3 className="text-base font-serif font-bold text-[#0a1128]">
                    {phase.name}
                  </h3>

                  <p className="text-xs text-slate-600 font-light leading-relaxed">
                    {phase.focus}
                  </p>

                  <div className="p-3 bg-white rounded-xs border border-slate-200 text-xs">
                    <strong className="text-[10px] font-mono uppercase text-[#1e60b5] block mb-1">Primary Milestone:</strong>
                    <span className="text-slate-800 font-medium">{phase.milestone}</span>
                  </div>

                  <div className="space-y-1.5 pt-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">Deliverable Artifacts:</span>
                    {phase.deliverables.map((d) => (
                      <div key={d} className="flex items-start text-[11px] text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mr-1.5 shrink-0 mt-0.5" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 text-[10px] font-mono text-slate-400">
                  GOVERNANCE GATE {phase.step}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 6: FIDUCIARY IP OWNERSHIP & SECURITY GUARANTEE
          ========================================================================= */}
      <section className="py-24 border-b border-slate-200 bg-[#f8fafc]">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0a1128] text-white rounded-xs p-10 lg:p-16 relative overflow-hidden">
            
            <div className="relative z-10 max-w-4xl space-y-8">
              <span className="heritage-badge-blue text-[10px]">Institutional Charter</span>
              
              <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
                Non-Negotiable Fiduciary IP Transfer Charter
              </h2>

              <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed max-w-2xl">
                Improx Integents rejects the proprietary vendor lock-in model. Every piece of intellectual property engineered during an engagement belongs exclusively to our client.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="p-5 rounded-xs bg-white/5 border border-white/10 space-y-2">
                  <div className="flex items-center space-x-2 text-blue-400 font-serif font-bold text-base">
                    <Lock className="w-4 h-4" />
                    <span>Zero Data Egress Standard</span>
                  </div>
                  <p className="text-xs text-slate-300 font-light leading-relaxed">
                    All algorithmic processing executes within your designated private cloud VPC or on-premises security perimeter. Not a single token is transmitted to unauthorized third parties.
                  </p>
                </div>

                <div className="p-5 rounded-xs bg-white/5 border border-white/10 space-y-2">
                  <div className="flex items-center space-x-2 text-blue-400 font-serif font-bold text-base">
                    <FileText className="w-4 h-4" />
                    <span>100% Perpetual IP Assignment</span>
                  </div>
                  <p className="text-xs text-slate-300 font-light leading-relaxed">
                    Full perpetual legal assignment of source code, model weights, training pipelines, and architectural schematics upon milestone completion. No recurring licensing fees.
                  </p>
                </div>

                <div className="p-5 rounded-xs bg-white/5 border border-white/10 space-y-2">
                  <div className="flex items-center space-x-2 text-blue-400 font-serif font-bold text-base">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Cryptographic Audit Trails</span>
                  </div>
                  <p className="text-xs text-slate-300 font-light leading-relaxed">
                    Tamper-evident immutable transaction logging ensures all autonomous actions can be forensically replayed and audited for SEC, FINRA, FDA, and EU AI Act compliance.
                  </p>
                </div>

                <div className="p-5 rounded-xs bg-white/5 border border-white/10 space-y-2">
                  <div className="flex items-center space-x-2 text-blue-400 font-serif font-bold text-base">
                    <Users className="w-4 h-4" />
                    <span>Internal Team Autonomy</span>
                  </div>
                  <p className="text-xs text-slate-300 font-light leading-relaxed">
                    We embed side-by-side with your internal engineering leadership to ensure your teams possess complete mastery and operational independence before our engagement concludes.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: BOARDROOM & PRACTICE GOVERNANCE FAQS
          ========================================================================= */}
      <section className="py-24 border-b border-slate-200 bg-white">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="max-w-3xl space-y-4">
            <span className="heritage-badge text-[10px]">Executive Advisory FAQ</span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#0a1128] tracking-tight">
              Frequently Addressed Boardroom Questions
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
              Straightforward answers to the primary structural, commercial, and risk considerations evaluated by enterprise executive committees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PRACTICE_FAQS.map((faq, i) => (
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
          SECTION 8: CONFIDENTIAL BOARDROOM RETAINER DESK (CTA)
          ========================================================================= */}
      <section className="py-24 bg-[#0a1128] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <span className="heritage-badge-blue text-[10px]">Confidential Consultation</span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Commission A Bespoke Capability Mandate
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto font-light leading-relaxed">
            Our Senior Managing Partners collaborate directly with corporate boards to evaluate operational vectors, model capital impact, and deploy customized enterprise frameworks under mutual non-disclosure.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-heritage-blue px-8 py-4 text-xs uppercase tracking-wider font-semibold inline-flex items-center space-x-2">
              <span>Schedule Partner Briefing</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
            <Link href="/case-studies" className="btn-heritage-secondary border-slate-600 text-white hover:bg-slate-800 hover:text-white px-8 py-4 text-xs uppercase tracking-wider font-semibold">
              <span>View Audited Outcomes</span>
            </Link>
          </div>
          <div className="pt-4 text-[11px] font-mono text-slate-400">
            CONFIDENTIAL BRIEFINGS EXECUTED UNDER BILATERAL NDA &bull; DIRECT SENIOR MANAGING PARTNER CONTACT
          </div>
        </div>
      </section>

    </div>
  );
}
