"use client";

import { useState } from "react";
import Link from "next/link";
import LatestInsightsSection from "@/components/LatestInsightsSection";
import { ArrowRight, Mail, MapPin, Phone, ShieldCheck, CheckCircle2, Globe, Lock } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white text-slate-900 min-h-screen pt-20 lg:pt-24">
      
      {/* SECTION 1: STATELY CONTACT HERO */}
      <section className="relative py-20 border-b border-slate-200 bg-[#fdfdfd]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-center">
          <span className="heritage-badge text-[10px]">Confidential Executive Engagement</span>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-[#0a1128] tracking-tight leading-[1.08]">
            Engage With A <br />
            <span className="italic font-serif text-[#1e60b5] font-normal">Senior Managing Partner.</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed">
            Schedule a confidential strategic briefing, request a fiduciary transformation audit, or commission sovereign AI control planes tailored to your enterprise.
          </p>
        </div>
      </section>

      {/* SECTION 2: ADVISORY FORM & GLOBAL HUBS */}
      <section className="py-24 border-b border-slate-200 bg-[#f8fafc]">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Advisory Form (7 Cols) */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-xs p-8 lg:p-12 border border-slate-200 shadow-sm">
                <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-8">
                  <div>
                    <h2 className="text-2xl font-serif font-bold text-[#0a1128]">
                      Request Executive Consultation
                    </h2>
                    <p className="text-xs text-slate-500 font-mono mt-1">
                      All communications are strictly protected under mutual NDA.
                    </p>
                  </div>
                  <span className="heritage-badge text-[10px] py-1 px-2.5">
                    C-SUITE DIRECT DESK
                  </span>
                </div>

                {submitted ? (
                  <div className="bg-[#fafaf9] border border-slate-300 rounded-xs p-10 text-center space-y-4 shadow-xs">
                    <CheckCircle2 className="w-12 h-12 text-[#1e60b5] mx-auto" />
                    <h3 className="text-2xl font-serif font-bold text-[#0a1128]">Briefing Request Received</h3>
                    <p className="text-sm text-slate-600 font-light max-w-md mx-auto leading-relaxed">
                      An Improx Integents Senior Managing Partner will contact your executive office within 4 business hours to confirm your consultation schedule.
                    </p>
                    <div className="pt-4 text-xs font-mono text-slate-400">
                      REF CODE: II-BRIEF-{Math.floor(100000 + Math.random() * 900000)}
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[11px] font-mono uppercase tracking-widest text-slate-700 mb-2 font-semibold">
                          Full Name *
                        </label>
                        <input 
                          required
                          type="text" 
                          placeholder="e.g. Sarah Jenkins"
                          className="w-full bg-slate-50 border border-slate-300 rounded-xs px-4 py-3 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#1e60b5]"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-mono uppercase tracking-widest text-slate-700 mb-2 font-semibold">
                          Corporate Email *
                        </label>
                        <input 
                          required
                          type="email" 
                          placeholder="s.jenkins@enterprise.com"
                          className="w-full bg-slate-50 border border-slate-300 rounded-xs px-4 py-3 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#1e60b5]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[11px] font-mono uppercase tracking-widest text-slate-700 mb-2 font-semibold">
                          Enterprise / Organization *
                        </label>
                        <input 
                          required
                          type="text" 
                          placeholder="Global Fortune 500 Corp"
                          className="w-full bg-slate-50 border border-slate-300 rounded-xs px-4 py-3 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#1e60b5]"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-mono uppercase tracking-widest text-slate-700 mb-2 font-semibold">
                          Executive Role / Title *
                        </label>
                        <input 
                          required
                          type="text" 
                          placeholder="e.g. CEO / CTO / CFO / Chief Transformation Officer"
                          className="w-full bg-slate-50 border border-slate-300 rounded-xs px-4 py-3 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#1e60b5]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-widest text-slate-700 mb-2 font-semibold">
                        Primary Area of Strategic Interest
                      </label>
                      <select className="w-full bg-slate-50 border border-slate-300 rounded-xs px-4 py-3 text-xs text-slate-900 focus:outline-none focus:border-[#1e60b5]">
                        <option>Data & AI Systems (Enterprise GenAI & Sovereign Control Planes)</option>
                        <option>Strategy & Transformation (Corporate Strategy, M&A, CFO Advisory)</option>
                        <option>Enterprise Operations (Supply Chain, Procurement, Finance Automation)</option>
                        <option>Digital Modernization (Hybrid Cloud, Cybersecurity, Architecture)</option>
                        <option>Industry X & Automation (Smart Manufacturing, Digital Twins)</option>
                        <option>Custom Boardroom Transformation Audit</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-widest text-slate-700 mb-2 font-semibold">
                        Strategic Objective & Operational Context
                      </label>
                      <textarea 
                        rows={4}
                        placeholder="Briefly describe your transformation goals, key challenges, and desired engagement timeline..."
                        className="w-full bg-slate-50 border border-slate-300 rounded-xs p-4 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#1e60b5]"
                      ></textarea>
                    </div>

                    <div className="pt-2">
                      <button 
                        type="submit"
                        className="btn-heritage-primary w-full py-4 text-xs uppercase tracking-wider font-semibold flex items-center justify-center space-x-2"
                      >
                        <span>Submit Confidential Briefing Request</span>
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </button>
                    </div>

                    <div className="flex items-center justify-center space-x-6 text-[10px] font-mono text-slate-500 pt-2">
                      <span className="flex items-center"><ShieldCheck className="w-3.5 h-3.5 mr-1 text-emerald-600" /> Mutual NDA Governed</span>
                      <span className="flex items-center"><Lock className="w-3.5 h-3.5 mr-1 text-[#1e60b5]" /> End-to-End Encrypted</span>
                      <span className="flex items-center"><CheckCircle2 className="w-3.5 h-3.5 mr-1 text-slate-700" /> Direct Partner Routing</span>
                    </div>
                  </form>
                )}

              </div>
            </div>

            {/* Right Practice Hubs & Details (5 Cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Direct Partner Desk */}
              <div className="bg-white rounded-xs p-8 border border-slate-200 space-y-4 shadow-xs">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#1e60b5] font-bold">
                  DIRECT EXECUTIVE DESK
                </span>
                <h3 className="text-xl font-serif font-bold text-[#0a1128]">
                  Corporate Advisory Office
                </h3>
                <p className="text-xs text-slate-600 font-light leading-relaxed">
                  For urgent board inquiries, M&A integration schedules, or direct managing partner contact:
                </p>
                <div className="space-y-2 text-xs font-mono text-slate-700 pt-2">
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 mr-2 text-[#1e60b5]" />
                    <span className="font-semibold">partner@integents.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 mr-2 text-[#1e60b5]" />
                    <span className="font-semibold">+1 (212) 890-4200 (Executive Line)</span>
                  </div>
                </div>
              </div>

              {/* Global Office Directory */}
              <div className="bg-white rounded-xs p-8 border border-slate-200 space-y-6 shadow-xs">
                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 font-bold">
                  GLOBAL PRACTICE HUBS
                </span>
                
                <div className="space-y-4">
                  <div className="p-3.5 bg-slate-50 rounded-xs border border-slate-200">
                    <div className="flex justify-between items-center text-xs font-mono">
                      <span className="text-slate-900 font-bold">New York (Americas Hub)</span>
                      <span className="text-slate-500">EST (UTC-5)</span>
                    </div>
                    <p className="text-[11px] text-slate-600 mt-1">745 Fifth Avenue, 28th Floor, New York, NY 10151</p>
                  </div>

                  <div className="p-3.5 bg-slate-50 rounded-xs border border-slate-200">
                    <div className="flex justify-between items-center text-xs font-mono">
                      <span className="text-slate-900 font-bold">London (EMEA Hub)</span>
                      <span className="text-slate-500">GMT (UTC+0)</span>
                    </div>
                    <p className="text-[11px] text-slate-600 mt-1">1 Canada Square, Canary Wharf, London E14 5AA</p>
                  </div>

                  <div className="p-3.5 bg-slate-50 rounded-xs border border-slate-200">
                    <div className="flex justify-between items-center text-xs font-mono">
                      <span className="text-slate-900 font-bold">Singapore (APAC Hub)</span>
                      <span className="text-slate-500">SGT (UTC+8)</span>
                    </div>
                    <p className="text-[11px] text-slate-600 mt-1">Marina Bay Financial Centre, Tower 2, Singapore 018983</p>
                  </div>

                  <div className="p-3.5 bg-slate-50 rounded-xs border border-slate-200">
                    <div className="flex justify-between items-center text-xs font-mono">
                      <span className="text-slate-900 font-bold">Pune (Systems Engineering Lab)</span>
                      <span className="text-slate-500">IST (UTC+5:30)</span>
                    </div>
                    <p className="text-[11px] text-slate-600 mt-1">Improx Innovation Hub, World Trade Center, Pune 411014</p>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Latest Insights Section */}
      <LatestInsightsSection 
        title="Executive Insights & Practice Briefings"
        subtitle="Review our recent monographs and regulatory frameworks before scheduling your confidential partner consultation."
        badge="Strategic Intelligence • The Integents Review"
        limit={3}
      />

    </div>
  );
}
