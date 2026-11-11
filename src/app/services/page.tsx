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
  Sparkles
} from "lucide-react";

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
      ideal: "Chief Executive Officers, Board Audit Committees, Private Equity Sponsors",
      deliverable: "Dynamic Capital Allocation Models, Quarterly M&A Portfolio Stress Tests, C-Suite Decision Theaters",
      desc: "Confidential advisory for high-stakes capital allocation, operating model restructuring, and AI governance. Senior managing partners engage directly with executive committees to evaluate strategic optionality without junior leverage."
    },
    {
      code: "ENG-02",
      name: "Sovereign Engineering Sprints",
      duration: "90-Day Rapid Production Mandate",
      ideal: "Chief Technology Officers, Chief Information Officers, Heads of AI",
      deliverable: "Production-grade multi-agent control planes, deterministic guardrail layers, private cloud VPC deployment",
      desc: "High-velocity systems engineering squad led by principal architects. We transition from algorithmic design to working production software in isolated security sandboxes within 90 days."
    },
    {
      code: "ENG-03",
      name: "Enterprise Turnkey Modernization",
      duration: "6 - 12 Month Transformation Program",
      ideal: "Chief Operating Officers, Chief Financial Officers, Business Unit Presidents",
      deliverable: "Complete legacy decoupling, unified semantic memory mesh, near-autonomous supply chain robotics",
      desc: "End-to-end structural transformation of core operational infrastructure. Re-engineers legacy monoliths, unifies disparate enterprise ledgers, and transfers 100% intellectual property to internal teams."
    },
    {
      code: "ENG-04",
      name: "Algorithmic Risk & Audit Verification",
      duration: "4 - 6 Week Specialized Diligence",
      ideal: "Chief Risk Officers, General Counsel, Compliance Directors",
      deliverable: "Deterministic hallucination stress audit, cryptographic ledger logging, regulatory compliance certification",
      desc: "Independent technical diligence auditing automated decision systems against SEC, FINRA, HIPAA, and EU AI Act (2024) mandates. Establishes immutable audit meshes across mission-critical workflows."
    }
  ];

  const MATURITY_LEVELS = [
    {
      level: "01",
      title: "Fragmented Ad-Hoc Scripts",
      state: "Legacy Status Quo",
      desc: "Siloed RPA scripts, uncoordinated department pilots, and unmanaged cloud SaaS spend with high security exposure."
    },
    {
      level: "02",
      title: "Centralized Lakehouse & APIs",
      state: "Modern Data Foundation",
      desc: "Unified cloud data lakehouse, microservices architectures, and automated CI/CD deployment pipelines."
    },
    {
      level: "03",
      title: "Predictive Intelligence Engines",
      state: "Applied ML Operations",
      desc: "Automated demand sensing, real-time fraud detection, and predictive maintenance models running in production."
    },
    {
      level: "04",
      title: "Deterministic Multi-Agent Mesh",
      state: "Cognitive Automation",
      desc: "Autonomous software agents executing cross-department transactions within strict compliance guardrails."
    },
    {
      level: "05",
      title: "Sovereign Cognitive Enterprise",
      state: "Market Dominance (Improx Integents Standard)",
      desc: "Self-healing supply networks, dynamic capital allocation engines, and 100% proprietary intellectual property compounding."
    }
  ];

  return (
    <div className="bg-white text-slate-900 min-h-screen pt-16 sm:pt-20">
      
      {/* =========================================================================
          SECTION 1: STATELY PRACTICE CATALOG HERO
          ========================================================================= */}
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

          <div className="pt-10 mt-10 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl">
            <div>
              <div className="text-2xl font-serif font-bold text-[#0a1128]">$14.2B+</div>
              <div className="text-[11px] font-mono text-slate-500 uppercase mt-0.5">Capital Value Unlocked</div>
            </div>
            <div>
              <div className="text-2xl font-serif font-bold text-[#1e60b5]">5 Practices</div>
              <div className="text-[11px] font-mono text-slate-500 uppercase mt-0.5">25 Specialized Capabilities</div>
            </div>
            <div>
              <div className="text-2xl font-serif font-bold text-[#0a1128]">100%</div>
              <div className="text-[11px] font-mono text-slate-500 uppercase mt-0.5">Client IP Transfer</div>
            </div>
            <div>
              <div className="text-2xl font-serif font-bold text-slate-800">500+</div>
              <div className="text-[11px] font-mono text-slate-500 uppercase mt-0.5">Production Deployments</div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: 5 PILLARS COMPREHENSIVE ARCHITECTURAL DIRECTORY
          ========================================================================= */}
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

      {/* =========================================================================
          NEW SECTION 3: 4 ENTERPRISE ENGAGEMENT COMMERCIAL MODELS
          ========================================================================= */}
      <section className="py-24 border-b border-slate-200 bg-white">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-16 space-y-4">
            <span className="heritage-badge text-[10px]">Commercial Structures</span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#0a1128] tracking-tight">
              Flexible Boardroom Engagement Frameworks
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
              We structure our advisory and engineering mandates around verifiable milestone outcomes rather than open-ended billing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ENGAGEMENT_MODELS.map((model) => (
              <div 
                key={model.code}
                className="bg-[#fafaf9] rounded-xs border border-slate-200 p-7 flex flex-col justify-between hover:border-slate-400 transition-colors"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                    <span className="font-mono text-xs font-bold text-[#1e60b5]">{model.code}</span>
                    <span className="text-[10px] font-mono text-slate-500">{model.duration}</span>
                  </div>

                  <h3 className="text-lg font-serif font-bold text-[#0a1128]">
                    {model.name}
                  </h3>

                  <p className="text-xs text-slate-600 font-light leading-relaxed">
                    {model.desc}
                  </p>

                  <div className="p-3 bg-white rounded-xs border border-slate-200 space-y-2 text-[11px] font-mono">
                    <div>
                      <strong className="text-slate-800 block">Target Audience:</strong>
                      <span className="text-slate-500 font-sans text-xs">{model.ideal}</span>
                    </div>
                    <div>
                      <strong className="text-slate-800 block">Core Deliverable:</strong>
                      <span className="text-slate-500 font-sans text-xs">{model.deliverable}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 mt-6 border-t border-slate-200">
                  <Link 
                    href="/contact"
                    className="text-xs font-mono uppercase tracking-wider text-[#1e60b5] hover:underline flex items-center font-semibold"
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
          NEW SECTION 4: CAPABILITY MATURITY BENCHMARK (CMM-5)
          ========================================================================= */}
      <section className="py-24 border-b border-slate-200 bg-[#f8fafc]">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="heritage-badge text-[10px]">Cognitive Maturity Model</span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#0a1128] tracking-tight">
              Enterprise Transformation Maturity Curve
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
              Where does your enterprise sit on the cognitive transformation curve? Benchmark your operating model against verified Fortune 500 milestones.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {MATURITY_LEVELS.map((level) => (
              <div 
                key={level.level}
                className="bg-white rounded-xs border border-slate-200 p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow"
              >
                <div className="space-y-3">
                  <div className="text-3xl font-serif font-bold text-[#1e60b5]">
                    {level.level}
                  </div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                    {level.state}
                  </div>
                  <h3 className="text-base font-serif font-bold text-[#0a1128]">
                    {level.title}
                  </h3>
                  <p className="text-xs text-slate-600 font-light leading-relaxed">
                    {level.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 text-[10px] font-mono text-slate-400">
                  STAGE {level.level} MATURITY
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          NEW SECTION 5: STATELY PARTNER CTA
          ========================================================================= */}
      <section className="py-24 bg-[#0a1128] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <span className="heritage-badge-blue text-[10px]">Confidential Consultation</span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Commission A Bespoke Capability Mandate
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto font-light leading-relaxed">
            Our Senior Managing Partners collaborate directly with corporate boards to evaluate operational vectors, model capital impact, and deploy customized enterprise frameworks.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-heritage-blue px-8 py-4 text-xs uppercase tracking-wider font-semibold inline-flex items-center space-x-2">
              <span>Schedule Partner Briefing</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
            <Link href="/case-studies" className="btn-heritage-secondary border-slate-600 text-white hover:bg-slate-800 hover:text-white px-8 py-4 text-xs uppercase tracking-wider font-semibold">
              <span>View Audited Outcomes</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
