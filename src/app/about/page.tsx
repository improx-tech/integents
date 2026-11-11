import Link from "next/link";
import { 
  ArrowRight, 
  ShieldCheck, 
  Building2, 
  Globe, 
  Users, 
  TrendingUp, 
  Award, 
  Layers, 
  MapPin, 
  CheckCircle2, 
  Lock,
  Clock,
  Sparkles,
  FileCheck,
  Scale,
  BrainCircuit,
  Compass
} from "lucide-react";

export default function AboutPage() {
  const CHRONICLE_MILESTONES = [
    {
      decade: "1976",
      era: "Founding in London & Zurich",
      focus: "Industrial Re-Engineering & Capital Allocation",
      desc: "Founded as a private fiduciary advisory partnership serving British and European manufacturing conglomerates. Rejected speculative slide decks in favor of on-the-ground operational restructuring."
    },
    {
      decade: "1984",
      era: "New York Expansion & Wall Street Advisory",
      focus: "Cross-Border M&A & Post-Merger Integration",
      desc: "Established North American headquarters on Fifth Avenue. Partnered with tier-1 investment banks and multinational boards to execute complex multi-billion-dollar divestitures and integrations."
    },
    {
      decade: "1996",
      era: "Enterprise Systems Architecture",
      focus: "ERP Modernization & Supply Chain Networks",
      desc: "Pioneered the integration of management consulting with software systems architecture. Engineered global ERP backbones and supply chain logistics platforms for Fortune 100 leaders."
    },
    {
      decade: "2008",
      era: "Global Financial Crisis Advisory",
      focus: "Stress Testing, Capital Preservation & Risk Modeling",
      desc: "Advised central authorities and global financial institutions on systemic liquidity defense, algorithmic risk mitigation, and balance sheet deleveraging."
    },
    {
      decade: "2018",
      era: "Applied AI & Cloud Decoupling",
      focus: "Machine Learning Operations & Hybrid Cloud",
      desc: "Launched the Applied Intelligence practice. Replaced brittle monolithic architectures with event-driven cloud-native microservices and real-time streaming data lakes."
    },
    {
      decade: "2026",
      era: "The Cognitive Era & Sovereign AI",
      focus: "Autonomous Multi-Agent Control Planes",
      desc: "Pioneering deterministic multi-agent architectures that execute mission-critical enterprise workflows with zero data egress, 100% client IP transfer, and verified balance sheet compounding."
    }
  ];

  const MANAGING_PARTNERS = [
    {
      name: "Elena Rostova",
      role: "Global Managing Partner",
      practice: "Corporate Strategy & M&A",
      hub: "London / New York",
      tenure: "26 Years Advisory",
      focus: "Capital allocation, board governance, dynamic portfolio re-balancing.",
      image: "/practice-strategy.jpg"
    },
    {
      name: "Dr. Marcus Vance",
      role: "Senior Partner & Global Practice Head",
      practice: "Data & AI Systems",
      hub: "New York / Zurich",
      tenure: "22 Years Systems Research",
      focus: "Autonomous multi-agent control planes, deterministic guardrails, semantic memory.",
      image: "/practice-ai.jpg"
    },
    {
      name: "Arthur Sterling",
      role: "Senior Partner",
      practice: "Enterprise Operations & Supply Chain",
      hub: "Singapore / London",
      tenure: "24 Years Operating Authority",
      focus: "Near-autonomous logistics, cognitive procurement, working capital liberation.",
      image: "/practice-operations.jpg"
    },
    {
      name: "Claire Zhang",
      role: "Partner",
      practice: "Digital Modernization & Cloud",
      hub: "Singapore / New York",
      tenure: "18 Years Cloud Architecture",
      focus: "Decoupling legacy mainframes, zero-trust cybersecurity, multi-cloud resilience.",
      image: "/practice-cloud.jpg"
    },
    {
      name: "Henrik Lindqvist",
      role: "Partner",
      practice: "Industry X & Smart Automation",
      hub: "Zurich / London",
      tenure: "21 Years Industrial IoT",
      focus: "Digital twins, connected factory robotics, predictive asset longevity.",
      image: "/practice-industry.jpg"
    },
    {
      name: "Dr. Alistair Finch",
      role: "Senior Partner & Chief Economist",
      practice: "Macroeconomic Advisory & Risk",
      hub: "London / Zurich",
      tenure: "28 Years Central Banking",
      focus: "Sovereign fund allocation, interest rate volatility modeling, geopolitical realignment.",
      image: "/sector-banking.jpg"
    }
  ];

  const DECISION_THEATERS = [
    {
      city: "New York",
      address: "30 Hudson Yards, Suite 7400, New York, NY 10001",
      theater: "Americas Cognitive Decision Theater",
      focus: "Boardroom AI War Rooms, Algorithmic Risk Modeling, Sovereign Capital Advisory",
      lead: "Elena Rostova & Dr. Marcus Vance"
    },
    {
      city: "London",
      address: "1 Canada Square, Canary Wharf, London E14 5AA",
      theater: "EMEA Financial Systems Decision Center",
      focus: "Capital Markets Modernization, Fiduciary ESG Governance, Sovereign Banking Rails",
      lead: "Arthur Sterling & Dr. Alistair Finch"
    },
    {
      city: "Zurich",
      address: "Paradeplatz 8, 8001 Zürich, Switzerland",
      theater: "Sovereign Wealth & Private Capital Desk",
      focus: "Cross-Border Wealth Preservation, Zero-Trust Asset Rings, Industrial Robotics",
      lead: "Henrik Lindqvist"
    },
    {
      city: "Singapore",
      address: "Marina Bay Financial Centre, Tower 2, Singapore 018983",
      theater: "APAC Supply Network Orchestration Hub",
      focus: "Near-Autonomous Logistics, Cross-Border Trade Telemetry, Maritime AI",
      lead: "Claire Zhang"
    },
    {
      city: "Pune",
      address: "World Trade Center, Tower 4, Kharadi, Pune 411014",
      theater: "Global Systems Engineering Labs",
      focus: "High-Throughput MLOps, Compiler Engineering, Zero-Egress Cloud Deployments",
      lead: "Head of Engineering Practice"
    }
  ];

  return (
    <div className="bg-white text-slate-900 min-h-screen pt-16 sm:pt-20">
      
      {/* =========================================================================
          SECTION 1: STATELY MONOGRAPH HERO
          ========================================================================= */}
      <section className="relative py-20 lg:py-28 border-b border-slate-200 bg-[#fdfdfd]">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-5">
            <span className="heritage-badge text-[10px]">The Firm &bull; Institutional Monograph</span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-[#0a1128] tracking-tight leading-[1.08]">
              A Half-Century of Boardroom Stewardship. <br />
              <span className="italic font-serif text-[#1e60b5] font-normal">Engineered for Sovereign Performance.</span>
            </h1>
            <p className="text-base sm:text-xl text-slate-600 font-light leading-relaxed max-w-2xl">
              Improx Integents was established in 1976 to eliminate the chronic failure mode of conventional management consulting: brilliant slide decks that stall in execution.
            </p>
          </div>

          <div className="pt-10 mt-10 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl">
            <div>
              <div className="text-3xl font-serif font-bold text-[#0a1128]">$14.2B+</div>
              <div className="text-[11px] font-mono text-slate-500 uppercase mt-0.5">Capital Value Generated</div>
            </div>
            <div>
              <div className="text-3xl font-serif font-bold text-[#1e60b5]">50 Years</div>
              <div className="text-[11px] font-mono text-slate-500 uppercase mt-0.5">Continuous Stewardship</div>
            </div>
            <div>
              <div className="text-3xl font-serif font-bold text-[#0a1128]">98.6%</div>
              <div className="text-[11px] font-mono text-slate-500 uppercase mt-0.5">Client Retention</div>
            </div>
            <div>
              <div className="text-3xl font-serif font-bold text-slate-800">5 Global</div>
              <div className="text-[11px] font-mono text-slate-500 uppercase mt-0.5">Decision Theaters</div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: 50-YEAR HERITAGE & FOUNDING PHILOSOPHY
          ========================================================================= */}
      <section className="py-24 border-b border-slate-200 bg-white">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Story Column */}
            <div className="lg:col-span-6 space-y-6">
              <span className="heritage-badge text-[10px]">Fiduciary Pedigree</span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0a1128] tracking-tight">
                Fifty Years of Confidential Fiduciary Counsel
              </h2>
              
              <p className="text-sm text-slate-700 leading-relaxed font-light">
                For fifty years, our firm has served as confidential counsel to the world&apos;s most consequential corporate enterprises, sovereign boards, and financial institutions. While legacy advisory conglomerates expanded their headcounts with thousands of junior generalists, we remained deliberate: an elite cadre of senior partners, distinguished systems architects, and sovereign AI researchers.
              </p>
              
              <p className="text-sm text-slate-600 leading-relaxed font-light">
                Today, as artificial intelligence reshapes the fundamental mechanics of market dominance, we combine boardroom-level strategy with battle-tested systems engineering. We don&apos;t just diagnose challenges; we architect and deploy autonomous enterprise control planes that safeguard and compound corporate capital.
              </p>
              
              <div className="p-4 bg-slate-50 rounded-xs border border-slate-200 text-xs italic font-serif text-slate-700 leading-relaxed">
                &ldquo;Our institutional purpose is simple: to ensure our clients command the definitive competitive and technical high ground across their industries, with zero vendor dependency and 100% intellectual property sovereignty.&rdquo;
              </div>
            </div>

            {/* Right Editorial Image Frame */}
            <div className="lg:col-span-6">
              <div className="editorial-photo-frame rounded-xs shadow-md aspect-[4/3] relative">
                <img 
                  src="/practice-strategy.jpg" 
                  alt="Improx Integents Boardroom Advisory"
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1128]/75 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-white">
                  <span>EXECUTIVE ADVISORY SESSION &bull; LONDON EMBANKMENT</span>
                  <span className="text-emerald-300 font-semibold">SENIOR PARTNERS</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          NEW SECTION 3: DECADE-BY-DECADE CHRONICLE (1976 - 2026)
          ========================================================================= */}
      <section className="py-24 border-b border-slate-200 bg-[#f8fafc]">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-16 space-y-4">
            <span className="heritage-badge text-[10px]">Institutional Timeline</span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#0a1128] tracking-tight">
              Six Decades of Transformation Mastery
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
              How Improx Integents navigated macroeconomic shocks, technological inflections, and industrial revolutions to deliver enduring shareholder value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CHRONICLE_MILESTONES.map((m) => (
              <div 
                key={m.decade}
                className="bg-white rounded-xs p-8 border border-slate-200 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                    <span className="text-3xl font-serif font-bold text-[#1e60b5]">{m.decade}</span>
                    <span className="text-[10px] font-mono text-slate-400 uppercase">EPOCH {m.decade}</span>
                  </div>

                  <h3 className="text-lg font-serif font-bold text-[#0a1128]">
                    {m.era}
                  </h3>

                  <div className="text-xs font-mono text-[#1e60b5] font-semibold">
                    {m.focus}
                  </div>

                  <p className="text-xs text-slate-600 font-light leading-relaxed">
                    {m.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono text-slate-400">
                  <span>HISTORICAL AUDIT VERIFIED</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: THE IMPROX ECOSYSTEM ADVANTAGE & CLIENT IP CHARTER
          ========================================================================= */}
      <section className="py-24 border-b border-slate-200 bg-white">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-16 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-white px-3 py-1 rounded-xs border border-slate-200 shadow-xs inline-block">
                <img src="/improx-logo.png" alt="improX" className="h-6 w-auto object-contain" />
              </div>
              <span className="heritage-badge text-[10px]">Institutional Ecosystem</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#0a1128] tracking-tight">
              The Improx Institutional Advantage
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
              Operating within the broader Improx global enterprise group provides our clients with unmatched technical depth, proprietary sovereign AI frameworks, and international deployment capability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#fafaf9] rounded-xs p-8 border border-slate-200 space-y-4 shadow-xs">
              <div className="w-10 h-10 rounded-xs bg-white border border-slate-200 flex items-center justify-center text-[#1e60b5]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-serif font-bold text-[#0a1128]">
                Senior Partner-Led Squads
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-light">
                We strictly reject the pyramid staffing model where junior associates learn on client budgets. Every Integents mandate is steered directly by former C-suite officers and principal architects with over two decades of verified operating authority.
              </p>
            </div>

            <div className="bg-[#fafaf9] rounded-xs p-8 border border-slate-200 space-y-4 shadow-xs">
              <div className="w-10 h-10 rounded-xs bg-white border border-slate-200 flex items-center justify-center text-[#1e60b5]">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-serif font-bold text-[#0a1128]">
                100% Client IP Ownership
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-light">
                Every custom algorithm, deterministic agentic control plane, and proprietary predictive model engineered during our engagement is transferred entirely to client ownership. Zero vendor lock-in, zero external code dependencies.
              </p>
            </div>

            <div className="bg-[#fafaf9] rounded-xs p-8 border border-slate-200 space-y-4 shadow-xs">
              <div className="w-10 h-10 rounded-xs bg-white border border-slate-200 flex items-center justify-center text-[#1e60b5]">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-serif font-bold text-[#0a1128]">
                Fiduciary Outcome Indexing
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-light">
                We align our incentives with institutional stakeholders. Engagements are structured with clear stage gates and performance benchmarks tied directly to validated EBITDA accretion, capital release, and operational resilience.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          NEW SECTION 5: GLOBAL MANAGING PARTNER BOARD
          ========================================================================= */}
      <section className="py-24 border-b border-slate-200 bg-[#f8fafc]">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-slate-200 gap-6">
            <div>
              <span className="heritage-badge text-[10px] mb-3">Firm Stewardship</span>
              <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#0a1128] tracking-tight">
                Global Managing Partner Board
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md font-light leading-relaxed">
              Every mandate is staffed directly by senior partners with over two decades of boardroom and operating authority.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MANAGING_PARTNERS.map((partner) => (
              <div 
                key={partner.name}
                className="bg-white rounded-xs border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-[16/10] relative overflow-hidden">
                    <img 
                      src={partner.image} 
                      alt={partner.name} 
                      className="w-full h-full object-cover" 
                    />
                    <div className="absolute top-3 left-3">
                      <span className="text-[9px] font-mono font-bold bg-[#0a1128]/90 text-white px-2 py-0.5 rounded-xs">
                        {partner.tenure}
                      </span>
                    </div>
                    <div className="absolute bottom-3 right-3">
                      <span className="text-[10px] font-mono text-white bg-[#1e60b5]/90 px-2 py-0.5 rounded-xs">
                        {partner.hub}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-2">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-[#1e60b5] font-bold">
                      {partner.practice}
                    </div>
                    <h3 className="text-xl font-serif font-bold text-[#0a1128]">
                      {partner.name}
                    </h3>
                    <div className="text-xs font-serif italic text-slate-600">
                      {partner.role}
                    </div>
                    <p className="text-xs text-slate-600 font-light leading-relaxed pt-2 border-t border-slate-100">
                      {partner.focus}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link 
                    href="/contact"
                    className="text-xs font-mono uppercase tracking-wider text-[#1e60b5] hover:underline flex items-center justify-between font-semibold border-t border-slate-100 pt-3"
                  >
                    <span>Request Confidential Briefing</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 6: GLOBAL DECISION THEATERS & HUBS
          ========================================================================= */}
      <section className="py-24 border-b border-slate-200 bg-white">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="heritage-badge text-[10px]">Physical Facilities</span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#0a1128] tracking-tight">
              Sovereign Decision Theaters
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-light">
              Continuous, follow-the-sun transformation advisory across North America, EMEA, and APAC.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {DECISION_THEATERS.map((hub) => (
              <div key={hub.city} className="p-7 rounded-xs bg-[#fafaf9] border border-slate-200 space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-[#1e60b5]" />
                    <span className="text-base font-serif font-bold text-[#0a1128]">{hub.city} Hub</span>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                </div>
                <div>
                  <div className="text-xs font-serif font-bold text-[#0a1128]">{hub.theater}</div>
                  <p className="text-xs text-slate-600 font-light mt-1">{hub.focus}</p>
                </div>
                <div className="p-3 bg-white rounded-xs border border-slate-200 text-[11px] font-mono text-slate-500 space-y-1">
                  <div><strong className="text-slate-800">Address:</strong> {hub.address}</div>
                  <div><strong className="text-slate-800">Lead:</strong> {hub.lead}</div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 7: STATELY PARTNER CTA
          ========================================================================= */}
      <section className="py-24 bg-[#0a1128] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <span className="heritage-badge-blue text-[10px]">Executive Inquiries</span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Schedule a Confidential Partner Briefing
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto font-light leading-relaxed">
            Engage directly with our Senior Managing Partners to discuss corporate strategy, algorithmic risk rails, or turnkey cognitive systems modernization.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-heritage-blue px-8 py-4 text-xs uppercase tracking-wider font-semibold inline-flex items-center space-x-2">
              <span>Schedule Executive Consultation</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
            <Link href="/services" className="btn-heritage-secondary border-slate-600 text-white hover:bg-slate-800 hover:text-white px-8 py-4 text-xs uppercase tracking-wider font-semibold">
              <span>Review Practice Matrix</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
