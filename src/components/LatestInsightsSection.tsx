import { FEATURED_INSIGHTS } from "@/lib/data";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, BookOpen, FileText, Sparkles, ChevronRight, User } from "lucide-react";

interface LatestInsightsProps {
  title?: string;
  subtitle?: string;
  badge?: string;
  limit?: number;
  categoryFilter?: string;
  lightBg?: boolean;
}

export default function LatestInsightsSection({
  title = "Executive Insights, Monographs & Research",
  subtitle = "Peer-reviewed strategic frameworks, sovereign AI reference architectures, and macroeconomic benchmarks authored by senior practice leaders.",
  badge = "The Integents Review • Strategic Thought Leadership",
  limit = 3,
  categoryFilter,
  lightBg = true
}: LatestInsightsProps) {
  let articles = FEATURED_INSIGHTS;
  if (categoryFilter) {
    const filtered = articles.filter(a => a.category.toLowerCase().includes(categoryFilter.toLowerCase()));
    if (filtered.length >= 2) {
      articles = filtered;
    }
  }
  const displayArticles = articles.slice(0, limit);

  return (
    <section className={`py-24 border-b border-slate-200 ${lightBg ? "bg-[#f8fafc]" : "bg-white"}`}>
      <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-3xl space-y-3">
            <span className="heritage-badge text-[10px]">{badge}</span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#0a1128] tracking-tight">
              {title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
              {subtitle}
            </p>
          </div>

          <div className="shrink-0">
            <Link 
              href="/blog" 
              className="btn-heritage-secondary py-3 px-6 text-xs uppercase tracking-wider font-semibold inline-flex items-center space-x-2"
            >
              <span>Explore All Insights & Blog</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Link>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayArticles.map((article) => (
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
                  <span>Read</span>
                  <ChevronRight className="w-3.5 h-3.5 ml-0.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Monograph Subscription Bar */}
        <div className="mt-14 p-8 rounded-xs bg-[#0a1128] text-white flex flex-col lg:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-1.5 text-center lg:text-left">
            <span className="heritage-badge-blue text-[9px]">The Integents Review Dispatch</span>
            <h4 className="text-xl sm:text-2xl font-serif font-bold text-white">
              Subscribe to the Executive Monograph Series
            </h4>
            <p className="text-xs text-slate-300 font-light max-w-xl">
              Quarterly macro analysis, algorithmic control plane reference architectures, and boardroom fiduciary risk briefings delivered to your executive inbox.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
            <input 
              type="email" 
              placeholder="Enter corporate email address..." 
              className="px-4 py-3 bg-white/10 border border-white/20 rounded-xs text-xs text-white placeholder:text-slate-400 focus:outline-none focus:border-blue-400 w-full sm:w-72" 
            />
            <button className="btn-heritage-blue px-6 py-3 text-xs uppercase tracking-wider font-semibold w-full sm:w-auto whitespace-nowrap">
              Request Subscription
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
