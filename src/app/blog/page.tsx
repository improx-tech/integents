"use client";

import { useState } from "react";
import { FEATURED_INSIGHTS } from "@/lib/data";
import Link from "next/link";
import { 
  ArrowRight, 
  Calendar, 
  Clock, 
  Search, 
  Filter, 
  BookOpen, 
  FileText, 
  Sparkles, 
  ChevronRight, 
  User, 
  Download,
  ShieldCheck,
  TrendingUp,
  Tag
} from "lucide-react";

export default function BlogHub() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    "All",
    "Sovereign AI & Architecture",
    "Corporate Strategy & Finance",
    "Supply Chain & Operations",
    "Cloud & Cybersecurity",
    "Financial Services & Banking",
    "Healthcare & Life Sciences",
    "Smart Manufacturing & Automotive",
    "Boardroom Governance & Risk"
  ];

  const filteredArticles = FEATURED_INSIGHTS.filter((article) => {
    const matchesCategory = selectedCategory === "All" || article.category === selectedCategory;
    const matchesSearch = searchQuery === "" || 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (article.tags && article.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())));
    return matchesCategory && matchesSearch;
  });

  const featuredLead = FEATURED_INSIGHTS[0];
  const gridArticles = filteredArticles.filter(a => a.slug !== featuredLead.slug || selectedCategory !== "All" || searchQuery !== "");

  return (
    <div className="bg-white text-slate-900 min-h-screen pt-16 sm:pt-20">
      
      {/* =========================================================================
          SECTION 1: STATELY EDITORIAL JOURNAL HERO
          ========================================================================= */}
      <section className="relative py-20 lg:py-28 border-b border-slate-200 bg-[#fdfdfd]">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-4xl space-y-4">
            <div className="flex items-center space-x-3">
              <span className="heritage-badge text-[10px]">THE INTEGENTS JOURNAL &bull; ESTABLISHED 1976</span>
              <span className="text-xs font-mono text-slate-500 hidden sm:inline">&bull; STRATEGIC RESEARCH & EDITORIAL MONOGRAPHS</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-[#0a1128] tracking-tight leading-[1.06]">
              Executive Insights, <br />
              <span className="italic font-serif text-[#1e60b5] font-normal">Monographs & Strategic Research.</span>
            </h1>

            <p className="text-base sm:text-xl text-slate-600 font-light leading-relaxed max-w-3xl pt-2">
              Peer-reviewed frameworks, sovereign agentic AI reference blueprints, and boardroom capital benchmarks authored by Senior Managing Partners and Practice Fellows at Improx Integents.
            </p>
          </div>

          {/* Research Telemetry Row */}
          <div className="pt-12 mt-12 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            <div>
              <div className="text-3xl font-serif font-bold text-[#0a1128]">8 Lead</div>
              <div className="text-[11px] font-mono text-slate-500 uppercase mt-0.5">Research Monographs</div>
            </div>
            <div>
              <div className="text-3xl font-serif font-bold text-[#1e60b5]">Quarterly</div>
              <div className="text-[11px] font-mono text-slate-500 uppercase mt-0.5">Monograph Cadence</div>
            </div>
            <div>
              <div className="text-3xl font-serif font-bold text-[#0a1128]">350+ Global</div>
              <div className="text-[11px] font-mono text-slate-500 uppercase mt-0.5">C-Suite Subscribers</div>
            </div>
            <div>
              <div className="text-3xl font-serif font-bold text-slate-800">100%</div>
              <div className="text-[11px] font-mono text-slate-500 uppercase mt-0.5">Peer-Reviewed Standard</div>
            </div>
            <div>
              <div className="text-3xl font-serif font-bold text-[#1e60b5]">6 Regulated</div>
              <div className="text-[11px] font-mono text-slate-500 uppercase mt-0.5">Sectors Covered</div>
            </div>
            <div>
              <div className="text-3xl font-serif font-bold text-[#0a1128]">Open Access</div>
              <div className="text-[11px] font-mono text-slate-500 uppercase mt-0.5">Executive Fiduciary IP</div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 2: FEATURED LEAD MONOGRAPH (EDITORIAL SPOTLIGHT)
          ========================================================================= */}
      {selectedCategory === "All" && searchQuery === "" && (
        <section className="py-16 border-b border-slate-200 bg-white">
          <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="p-8 lg:p-12 rounded-xs bg-[#fafaf9] border border-slate-200 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                
                {/* Left: Lead Image Frame (6 cols) */}
                <div className="lg:col-span-6">
                  <div className="editorial-photo-frame aspect-[16/10] rounded-xs relative overflow-hidden shadow-md">
                    <img 
                      src={featuredLead.image} 
                      alt={featuredLead.title} 
                      className="w-full h-full object-cover" 
                    />
                    <div className="absolute top-4 left-4">
                      <span className="heritage-badge text-[10px] bg-white/95 text-[#0a1128] font-bold">
                        LEAD EDITORIAL MONOGRAPH &bull; 2026
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right: Lead Article Meta & Description (6 cols) */}
                <div className="lg:col-span-6 space-y-5">
                  <div className="flex items-center space-x-3 text-xs font-mono text-slate-500">
                    <span className="text-[#1e60b5] font-semibold">{featuredLead.category}</span>
                    <span>&bull;</span>
                    <span className="flex items-center"><Calendar className="w-3.5 h-3.5 mr-1 text-slate-400" /> {featuredLead.date}</span>
                    <span>&bull;</span>
                    <span className="flex items-center"><Clock className="w-3.5 h-3.5 mr-1 text-slate-400" /> {featuredLead.readTime}</span>
                  </div>

                  <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#0a1128] leading-tight hover:text-[#1e60b5] transition-colors">
                    <Link href={`/blog/${featuredLead.slug}`}>
                      {featuredLead.title}
                    </Link>
                  </h2>

                  <p className="text-sm text-slate-600 font-light leading-relaxed">
                    {featuredLead.summary}
                  </p>

                  {/* Key Takeaways */}
                  {featuredLead.keyTakeaways && (
                    <div className="p-4 rounded-xs bg-white border border-slate-200 space-y-2 text-xs">
                      <strong className="text-[10px] font-mono uppercase tracking-wider text-[#1e60b5] block font-bold">
                        Executive Key Findings:
                      </strong>
                      <ul className="space-y-1 text-slate-600 font-light">
                        {featuredLead.keyTakeaways.slice(0, 2).map((takeaway, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-[#1e60b5] mr-2 font-bold">&bull;</span>
                            <span>{takeaway}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="pt-2 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-9 h-9 rounded-full bg-slate-200 overflow-hidden">
                        <img src={featuredLead.authorAvatar || "/practice-ai.jpg"} alt={featuredLead.author} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <div className="text-xs font-serif font-bold text-[#0a1128]">{featuredLead.author}</div>
                        <div className="text-[10px] font-mono text-slate-400">{featuredLead.authorRole}</div>
                      </div>
                    </div>

                    <Link 
                      href={`/blog/${featuredLead.slug}`}
                      className="btn-heritage-primary py-2.5 px-6 text-xs uppercase tracking-wider font-semibold inline-flex items-center space-x-2"
                    >
                      <span>Read Full Monograph</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </Link>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>
      )}

      {/* =========================================================================
          SECTION 3: SEARCH, CATEGORY FILTER & COMPLETE ARTICLE GRID
          ========================================================================= */}
      <section className="py-20 border-b border-slate-200 bg-[#f8fafc]">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Controls Bar: Category Pills + Search */}
          <div className="space-y-6">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-200">
              
              {/* Category Pills */}
              <div className="flex flex-wrap items-center gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider rounded-xs transition-colors ${
                      selectedCategory === cat
                        ? "bg-[#0a1128] text-white font-bold"
                        : "bg-white text-slate-600 border border-slate-200 hover:border-slate-400 hover:text-slate-900"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Search Bar */}
              <div className="relative w-full lg:w-72">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search insights, authors, tags..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xs text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#1e60b5]"
                />
              </div>

            </div>

            <div className="flex items-center justify-between text-xs font-mono text-slate-500">
              <span>Showing {gridArticles.length + (selectedCategory === "All" && searchQuery === "" ? 1 : 0)} Executive Monographs</span>
              <span>Peer-Reviewed Institutional Standard</span>
            </div>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gridArticles.map((article) => (
              <article 
                key={article.slug}
                className="bg-white rounded-xs border border-slate-200 overflow-hidden flex flex-col justify-between hover:border-slate-400 hover:shadow-lg transition-all duration-200 group"
              >
                <div>
                  {/* Photo Frame */}
                  <div className="editorial-photo-frame aspect-[16/10] relative overflow-hidden bg-slate-100">
                    <img 
                      src={article.image} 
                      alt={article.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute top-3 left-3">
                      <span className="heritage-badge text-[9px] bg-white/95 text-[#0a1128] border-none shadow-xs font-semibold">
                        {article.category}
                      </span>
                    </div>
                    <div className="absolute bottom-3 right-3">
                      <span className="text-[10px] font-mono text-white bg-slate-900/80 backdrop-blur-xs px-2 py-0.5 rounded-xs">
                        {article.readTime}
                      </span>
                    </div>
                  </div>

                  {/* Article Content */}
                  <div className="p-7 space-y-3">
                    <div className="flex items-center space-x-3 text-[11px] font-mono text-slate-400 pb-2 border-b border-slate-100">
                      <span className="flex items-center text-slate-500">
                        <Calendar className="w-3 h-3 mr-1 text-[#1e60b5]" />
                        {article.date}
                      </span>
                      <span>&bull;</span>
                      <span className="text-emerald-700 font-semibold">PEER-REVIEWED</span>
                    </div>

                    <h3 className="text-xl font-serif font-bold text-[#0a1128] group-hover:text-[#1e60b5] transition-colors leading-snug">
                      <Link href={`/blog/${article.slug}`}>
                        {article.title}
                      </Link>
                    </h3>

                    <p className="text-xs text-slate-600 font-light leading-relaxed line-clamp-3">
                      {article.summary}
                    </p>

                    {/* Tag list */}
                    {article.tags && (
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {article.tags.slice(0, 3).map((t) => (
                          <span key={t} className="text-[10px] font-mono bg-slate-50 text-slate-500 px-2 py-0.5 rounded-xs border border-slate-100">
                            #{t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Author & Read Footer */}
                <div className="p-7 pt-4 border-t border-slate-100 mt-2 flex items-center justify-between">
                  <div className="flex items-center space-x-2.5">
                    <div className="w-7 h-7 rounded-full bg-slate-100 border border-slate-200 overflow-hidden flex items-center justify-center shrink-0">
                      {article.authorAvatar ? (
                        <img src={article.authorAvatar} alt={article.author} className="w-full h-full object-cover" />
                      ) : (
                        <User className="w-3.5 h-3.5 text-slate-400" />
                      )}
                    </div>
                    <div>
                      <div className="text-xs font-serif font-bold text-[#0a1128] leading-none">{article.author}</div>
                      <div className="text-[10px] font-mono text-slate-400 leading-tight mt-0.5">{article.authorRole}</div>
                    </div>
                  </div>

                  <Link
                    href={`/blog/${article.slug}`}
                    className="text-xs font-mono uppercase tracking-wider text-[#1e60b5] group-hover:underline flex items-center font-semibold"
                  >
                    <span>Read Monograph</span>
                    <ChevronRight className="w-3.5 h-3.5 ml-0.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-20 bg-white rounded-xs border border-slate-200 space-y-3">
              <h3 className="text-lg font-serif font-bold text-[#0a1128]">No monographs match your query</h3>
              <p className="text-xs text-slate-500 font-light">Try selecting &quot;All&quot; or clearing your search term.</p>
              <button 
                onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }}
                className="btn-heritage-primary py-2 px-5 text-xs uppercase tracking-wider font-semibold"
              >
                Reset Filter
              </button>
            </div>
          )}

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: EXECUTIVE MONOGRAPH SUBSCRIPTION DISPATCH
          ========================================================================= */}
      <section className="py-24 bg-[#0a1128] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <span className="heritage-badge-blue text-[10px]">The Integents Review Dispatch</span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Subscribe to the Quarterly Monograph Series
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto font-light leading-relaxed">
            Directly receive quarterly strategic research, autonomous control plane reference blueprints, and boardroom fiduciary briefings authored by Senior Managing Partners.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter corporate email..." 
              className="px-4 py-3 bg-white/10 border border-white/20 rounded-xs text-xs text-white placeholder:text-slate-400 focus:outline-none focus:border-blue-400 w-full"
            />
            <button className="btn-heritage-blue px-6 py-3 text-xs uppercase tracking-wider font-semibold w-full sm:w-auto whitespace-nowrap">
              Subscribe
            </button>
          </div>
          <div className="pt-2 text-[10px] font-mono text-slate-400">
            STRICTLY NO COMMERCIAL ADVERTISING &bull; CONFIDENTIAL EXECUTIVE DISTRIBUTION LIST
          </div>
        </div>
      </section>

    </div>
  );
}
