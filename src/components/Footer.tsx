"use client";

import Link from "next/link";
import { ArrowRight, Globe, Mail, ShieldCheck, MapPin, Building2, CheckCircle2 } from "lucide-react";
import { ENTERPRISE_PILLARS, GLOBAL_INDUSTRIES } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-[#0a1128] text-slate-300 border-t border-slate-800 pt-20 pb-12 relative overflow-hidden">
      
      <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Executive Monograph Subscription Banner */}
        <div className="bg-[#0f1938] border border-slate-800 rounded-sm p-8 lg:p-12 mb-16 shadow-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-3">
              <span className="heritage-badge-blue text-[10px]">Quarterly Executive Monograph</span>
              <h3 className="text-2xl lg:text-3xl font-serif font-bold text-white tracking-tight">
                The Integents Review &bull; Global Strategy Journal
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 max-w-xl leading-relaxed">
                Audited macroeconomic benchmarks, autonomous AI control plane architectures, and fiduciary capital allocation models delivered quarterly to corporate boards and institutional leaders.
              </p>
            </div>
            
            <div className="lg:col-span-5">
              <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
                <div className="flex flex-col sm:flex-row gap-2">
                  <input 
                    type="email" 
                    placeholder="Enter corporate executive email" 
                    className="bg-[#080d1f] border border-slate-700 rounded-xs px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#1e60b5] flex-grow font-sans"
                  />
                  <button 
                    type="submit"
                    className="btn-heritage-blue text-xs py-3 px-6 uppercase tracking-wider font-semibold whitespace-nowrap flex items-center justify-center"
                  >
                    <span>Subscribe</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                  </button>
                </div>
                <p className="text-[10px] font-mono text-slate-400">
                  Institutional confidentiality guaranteed. No public syndication or marketing sharing.
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* 6-Column Main Directory */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 pb-16 border-b border-slate-800">
          
          {/* Brand & Heritage Column */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="flex items-center space-x-3.5 group">
              <div className="bg-white px-3 py-1.5 rounded-xs inline-flex items-center shadow-xs">
                <img 
                  src="/improx-logo.png" 
                  alt="improX" 
                  className="h-6 w-auto object-contain"
                />
              </div>
              <div className="border-l border-slate-700 pl-3">
                <div className="flex items-center space-x-1.5">
                  <span className="text-base font-bold tracking-[0.12em] text-white font-serif">
                    INTEGENTS
                  </span>
                  <span className="text-[9px] font-mono uppercase tracking-widest text-blue-300 bg-blue-900/40 px-1.5 py-0.5 rounded-xs border border-blue-700/50">
                    Est. 1976
                  </span>
                </div>
                <span className="text-[9px] font-mono tracking-widest text-slate-400 uppercase block mt-0.5">
                  Global Management & AI Advisory
                </span>
              </div>
            </Link>
            
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              For 50 years, Improx Integents has advised Fortune 100 chairpersons, sovereign wealth funds, and enterprise chief executives on resilient operating models, high-stakes M&A, and sovereign agentic AI control planes.
            </p>

            <div className="space-y-2 pt-2">
              <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400">Global Hubs</div>
              <div className="grid grid-cols-2 gap-2 text-xs text-slate-300 font-mono">
                <span className="flex items-center"><MapPin className="w-3 h-3 mr-1 text-[#1e60b5]" /> New York (Fifth Ave)</span>
                <span className="flex items-center"><MapPin className="w-3 h-3 mr-1 text-[#1e60b5]" /> London (Canary Wharf)</span>
                <span className="flex items-center"><MapPin className="w-3 h-3 mr-1 text-[#1e60b5]" /> Zurich (Bahnhofstrasse)</span>
                <span className="flex items-center"><MapPin className="w-3 h-3 mr-1 text-[#1e60b5]" /> Singapore (MBFC)</span>
              </div>
            </div>

            <div className="pt-2">
              <span className="inline-flex items-center px-3 py-1.5 rounded-xs text-[11px] font-mono bg-[#0f1938] border border-slate-700 text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 mr-2 text-emerald-400" /> ISO 27001 &bull; SOC 2 Type II Certified
              </span>
            </div>
          </div>

          {/* Strategy & AI Column */}
          <div>
            <div className="text-xs font-mono font-bold text-white uppercase tracking-widest mb-4 border-b border-slate-800 pb-2">
              Strategy & AI
            </div>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link href="/services/strategy-consulting/corporate-strategy" className="hover:text-white transition-colors">
                  Corporate Strategy
                </Link>
              </li>
              <li>
                <Link href="/services/strategy-consulting/mergers-acquisitions" className="hover:text-white transition-colors">
                  M&A & Restructuring
                </Link>
              </li>
              <li>
                <Link href="/services/strategy-consulting/cfo-enterprise-value" className="hover:text-white transition-colors">
                  CFO & Capital Advisory
                </Link>
              </li>
              <li>
                <Link href="/services/data-and-ai/artificial-intelligence" className="hover:text-white transition-colors text-slate-200 font-medium">
                  Enterprise Agentic AI
                </Link>
              </li>
              <li>
                <Link href="/services/data-and-ai/data-architecture" className="hover:text-white transition-colors">
                  Modern Data Architecture
                </Link>
              </li>
              <li>
                <Link href="/services/data-and-ai/ai-governance" className="hover:text-white transition-colors">
                  AI Governance & Ethics
                </Link>
              </li>
            </ul>
          </div>

          {/* Operations & Cloud Column */}
          <div>
            <div className="text-xs font-mono font-bold text-white uppercase tracking-widest mb-4 border-b border-slate-800 pb-2">
              Operations & Digital
            </div>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link href="/services/operations/supply-chain" className="hover:text-white transition-colors">
                  Intelligent Supply Chain
                </Link>
              </li>
              <li>
                <Link href="/services/operations/procurement" className="hover:text-white transition-colors">
                  Procurement Modernization
                </Link>
              </li>
              <li>
                <Link href="/services/operations/intelligent-finance" className="hover:text-white transition-colors">
                  Finance Automation
                </Link>
              </li>
              <li>
                <Link href="/services/digital-transformation/cloud-strategy" className="hover:text-white transition-colors">
                  Hybrid Cloud Strategy
                </Link>
              </li>
              <li>
                <Link href="/services/digital-transformation/cybersecurity" className="hover:text-white transition-colors">
                  Cybersecurity Defense
                </Link>
              </li>
              <li>
                <Link href="/services/industry-x/smart-manufacturing" className="hover:text-white transition-colors">
                  Industry 4.0 & Advanced Plants
                </Link>
              </li>
            </ul>
          </div>

          {/* Industry Sectors Column */}
          <div>
            <div className="text-xs font-mono font-bold text-white uppercase tracking-widest mb-4 border-b border-slate-800 pb-2">
              Industry Sectors
            </div>
            <ul className="space-y-2.5 text-xs text-slate-400">
              {GLOBAL_INDUSTRIES.map((ind) => (
                <li key={ind.slug}>
                  <Link href={`/industries/${ind.slug}`} className="hover:text-white transition-colors">
                    {ind.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Firm & Engagement Column */}
          <div>
            <div className="text-xs font-mono font-bold text-white uppercase tracking-widest mb-4 border-b border-slate-800 pb-2">
              The Firm
            </div>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  50-Year Heritage & Leadership
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Executive Blog & Journal
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:text-white transition-colors">
                  Audited Case Studies
                </Link>
              </li>
              <li>
                <Link href="/insights" className="hover:text-white transition-colors">
                  Research & Monographs
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Practice Directory
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors font-semibold text-blue-300">
                  Confidential Advisory Desk
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Metadata & Legal Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-[11px] font-mono text-slate-400 gap-4">
          <div>
            &copy; 1976 &ndash; 2026 Improx Integents. Part of the Improx Technology Ecosystem. All Rights Reserved.
          </div>
          <div className="flex items-center space-x-6">
            <span>Fiduciary Standards</span>
            <span>&bull;</span>
            <span>Client IP Ringfence Guarantee</span>
            <span>&bull;</span>
            <span>Mutual Non-Disclosure Governance</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
