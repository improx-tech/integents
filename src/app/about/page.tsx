import Link from "next/link";
import { ArrowRight, ShieldCheck, Building2, Globe, Users, TrendingUp, Award, Layers, MapPin, CheckCircle2, Lock } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-white text-slate-900 min-h-screen pt-20 lg:pt-24">
      
      {/* SECTION 1: STATELY MONOGRAPH HERO */}
      <section className="relative py-20 lg:py-28 border-b border-slate-200 bg-[#fdfdfd]">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-5">
            <span className="heritage-badge text-[10px]">The Firm &bull; Institutional Monograph</span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-[#0a1128] tracking-tight leading-[1.08]">
              Bridging Strategic Conviction <br />
              <span className="italic font-serif text-[#1e60b5] font-normal">& Sovereign Systems Engineering.</span>
            </h1>
            <p className="text-base sm:text-xl text-slate-600 font-light leading-relaxed max-w-2xl">
              Improx Integents was established in 1976 to eliminate the chronic failure mode of conventional management consulting: brilliant slide decks that stall in execution.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: 50-YEAR HERITAGE & FOUNDING PHILOSOPHY */}
      <section className="py-24 border-b border-slate-200 bg-white">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Story Column */}
            <div className="lg:col-span-6 space-y-6">
              <span className="heritage-badge text-[10px]">Fiduciary Pedigree</span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0a1128] tracking-tight">
                A Half-Century of Institutional Stewardship
              </h2>
              
              <p className="text-sm text-slate-700 leading-relaxed font-light dropcap">
                For fifty years, our firm has served as confidential counsel to the world&apos;s most consequential corporate enterprises, sovereign boards, and financial institutions. While legacy advisory conglomerates expanded their headcounts with thousands of junior generalists, we remained deliberate: an elite cadre of senior partners, distinguished systems architects, and sovereign AI researchers.
              </p>
              
              <p className="text-sm text-slate-600 leading-relaxed font-light">
                Today, as artificial intelligence reshapes the fundamental mechanics of market dominance, we combine boardroom-level strategy with battle-tested systems engineering. We don&apos;t just diagnose challenges; we architect and deploy autonomous enterprise control planes that safeguard and compound corporate capital.
              </p>
              
              <div className="pt-4 grid grid-cols-3 gap-4 border-t border-slate-200">
                <div className="p-4 rounded-xs bg-[#fafaf9] border border-slate-200">
                  <div className="text-2xl font-serif font-bold text-[#0a1128]">$14.2B+</div>
                  <div className="text-[10px] font-mono text-slate-500 uppercase mt-0.5">Value Unlocked</div>
                </div>
                <div className="p-4 rounded-xs bg-[#fafaf9] border border-slate-200">
                  <div className="text-2xl font-serif font-bold text-[#1e60b5]">50 Yrs</div>
                  <div className="text-[10px] font-mono text-slate-500 uppercase mt-0.5">Global Heritage</div>
                </div>
                <div className="p-4 rounded-xs bg-[#fafaf9] border border-slate-200">
                  <div className="text-2xl font-serif font-bold text-[#0a1128]">98.6%</div>
                  <div className="text-[10px] font-mono text-slate-500 uppercase mt-0.5">Client Retention</div>
                </div>
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

      {/* SECTION 3: THE IMPROX ECOSYSTEM ADVANTAGE & CLIENT IP CHARTER */}
      <section className="py-24 border-b border-slate-200 bg-[#f8fafc]">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-16 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-white px-3 py-1.5 rounded-xs border border-slate-200 shadow-xs inline-block">
                <img src="/improx-logo.png" alt="improX" className="h-6 w-auto object-contain" />
              </div>
              <span className="heritage-badge text-[10px]">Institutional Ecosystem</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0a1128] tracking-tight">
              The Improx Institutional Advantage
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
              Operating within the broader Improx global enterprise group provides our clients with unmatched technical depth, proprietary sovereign AI frameworks, and international deployment capability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xs p-8 border border-slate-200 space-y-4 shadow-xs">
              <div className="w-10 h-10 rounded-xs bg-slate-100 border border-slate-200 flex items-center justify-center text-[#1e60b5]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-serif font-bold text-[#0a1128]">
                Senior Partner-Led Squads
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-light">
                We strictly reject the pyramid staffing model where junior associates learn on client budgets. Every Integents mandate is steered directly by former C-suite officers and principal architects with over two decades of verified operating authority.
              </p>
            </div>

            <div className="bg-white rounded-xs p-8 border border-slate-200 space-y-4 shadow-xs">
              <div className="w-10 h-10 rounded-xs bg-slate-100 border border-slate-200 flex items-center justify-center text-[#1e60b5]">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-serif font-bold text-[#0a1128]">
                100% Client IP Ownership
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-light">
                Every custom algorithm, deterministic agentic control plane, and proprietary predictive model engineered during our engagement is transferred entirely to client ownership. Zero vendor lock-in, zero external code dependencies.
              </p>
            </div>

            <div className="bg-white rounded-xs p-8 border border-slate-200 space-y-4 shadow-xs">
              <div className="w-10 h-10 rounded-xs bg-slate-100 border border-slate-200 flex items-center justify-center text-[#1e60b5]">
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

      {/* SECTION 4: GLOBAL PRESENCE & HUBS */}
      <section className="py-24 border-b border-slate-200 bg-white">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="heritage-badge text-[10px]">Global Advisory Network</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0a1128] tracking-tight">
              International Delivery Centers
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-light">
              Continuous, follow-the-sun transformation advisory across North America, EMEA, and APAC.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-xs bg-[#fafaf9] border border-slate-200 space-y-2">
              <div className="text-xs font-mono text-[#1e60b5] font-bold">AMERICAS HUB</div>
              <h3 className="text-lg font-serif font-bold text-[#0a1128]">New York</h3>
              <p className="text-xs text-slate-600 font-light">Fifth Avenue. Corporate Strategy, Capital Advisory & Enterprise GenAI practice leadership.</p>
              <div className="text-[10px] font-mono text-slate-400 pt-2">745 Fifth Avenue, 28th Fl, NY 10151</div>
            </div>

            <div className="p-6 rounded-xs bg-[#fafaf9] border border-slate-200 space-y-2">
              <div className="text-xs font-mono text-[#1e60b5] font-bold">EMEA HUB</div>
              <h3 className="text-lg font-serif font-bold text-[#0a1128]">London</h3>
              <p className="text-xs text-slate-600 font-light">Canary Wharf. Capital Markets, Fiduciary ESG Governance & Banking Modernization practice.</p>
              <div className="text-[10px] font-mono text-slate-400 pt-2">1 Canada Square, London E14 5AA</div>
            </div>

            <div className="p-6 rounded-xs bg-[#fafaf9] border border-slate-200 space-y-2">
              <div className="text-xs font-mono text-[#1e60b5] font-bold">APAC HUB</div>
              <h3 className="text-lg font-serif font-bold text-[#0a1128]">Singapore</h3>
              <p className="text-xs text-slate-600 font-light">Marina Bay. Global Supply Chain Logistics, Cross-Border Trade & AI Centers of Excellence.</p>
              <div className="text-[10px] font-mono text-slate-400 pt-2">Marina Bay Financial Centre, Singapore</div>
            </div>

            <div className="p-6 rounded-xs bg-[#fafaf9] border border-slate-200 space-y-2">
              <div className="text-xs font-mono text-[#1e60b5] font-bold">SYSTEMS ENGINEERING</div>
              <h3 className="text-lg font-serif font-bold text-[#0a1128]">Pune</h3>
              <p className="text-xs text-slate-600 font-light">World Trade Center. High-Throughput Engineering Labs, AI Sandboxes & Cloud DevOps.</p>
              <div className="text-[10px] font-mono text-slate-400 pt-2">World Trade Center, Kharadi, Pune</div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 5: STATELY PARTNER CTA */}
      <section className="py-24 bg-[#0a1128] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <span className="heritage-badge-blue text-[10px]">Executive Inquiries</span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Engage An Improx Integents Senior Managing Partner
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto font-light leading-relaxed">
            Schedule a confidential discovery briefing to review your enterprise transformation vectors and benchmark high-impact value opportunities.
          </p>
          <div className="pt-2">
            <Link href="/contact" className="btn-heritage-blue px-8 py-4 text-xs uppercase tracking-wider font-semibold inline-flex items-center space-x-2">
              <span>Schedule Partner Consultation</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
