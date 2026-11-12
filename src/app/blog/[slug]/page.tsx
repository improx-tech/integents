import { FEATURED_INSIGHTS } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { 
  ChevronRight, 
  Calendar, 
  Clock, 
  Share2, 
  Globe, 
  MessageCircle, 
  ArrowRight, 
  ShieldCheck, 
  Download, 
  User, 
  Bookmark, 
  BookOpen,
  Tag
} from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const article = FEATURED_INSIGHTS.find(i => i.slug === slug);
  if (!article) return { title: "Monograph Not Found | Improx Integents" };
  return {
    title: `${article.title} | Improx Integents Journal`,
    description: article.summary
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const article = FEATURED_INSIGHTS.find(i => i.slug === slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = FEATURED_INSIGHTS.filter(a => a.slug !== article.slug).slice(0, 3);

  return (
    <div className="bg-white text-slate-900 min-h-screen pt-20 lg:pt-24">
      
      {/* =========================================================================
          SECTION 1: STATELY MONOGRAPH HEADER
          ========================================================================= */}
      <section className="relative py-20 border-b border-slate-200 bg-[#fdfdfd]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5 text-center">
          
          <Link 
            href="/blog" 
            className="text-xs font-mono uppercase tracking-wider text-[#1e60b5] hover:underline inline-flex items-center mb-1 font-semibold"
          >
            <ChevronRight className="w-3.5 h-3.5 mr-1 rotate-180" /> Back to Journal & Insights Directory
          </Link>
          
          <div className="heritage-badge block w-max mx-auto text-[10px]">
            {article.category}
          </div>
          
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#0a1128] tracking-tight leading-[1.12]">
            {article.title}
          </h1>
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-slate-500 pt-2">
            <span className="flex items-center">
              <Calendar className="w-3.5 h-3.5 mr-1 text-[#1e60b5]" /> 
              {article.date}
            </span>
            <span>&bull;</span>
            <span className="flex items-center">
              <Clock className="w-3.5 h-3.5 mr-1 text-[#1e60b5]" /> 
              {article.readTime}
            </span>
            <span>&bull;</span>
            <span className="text-emerald-700 font-semibold flex items-center">
              <ShieldCheck className="w-3.5 h-3.5 mr-1" /> Peer-Reviewed Monograph
            </span>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 2: ARTICLE BODY, AUTHOR DOSSIER & CITATION
          ========================================================================= */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Author Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between py-5 border-b border-slate-200 gap-4">
            <div className="flex items-center space-x-3.5">
              <div className="w-11 h-11 rounded-full bg-slate-100 border border-slate-200 overflow-hidden flex items-center justify-center shrink-0">
                {article.authorAvatar ? (
                  <img src={article.authorAvatar} alt={article.author} className="w-full h-full object-cover" />
                ) : (
                  <User className="w-5 h-5 text-slate-400" />
                )}
              </div>
              <div>
                <p className="font-serif font-bold text-[#0a1128] text-base leading-tight">{article.author}</p>
                <p className="text-xs font-mono text-[#1e60b5] mt-0.5">{article.authorRole}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 text-xs font-mono text-slate-500">
              <span className="px-3 py-1.5 rounded-xs bg-slate-50 border border-slate-200">
                CIT: INTEGENTS-{article.date.replace(" ", "-").toUpperCase()}
              </span>
            </div>
          </div>

          {/* Lead Editorial Photograph Frame */}
          <div className="editorial-photo-frame rounded-xs aspect-[16/9] shadow-md relative overflow-hidden">
            <img 
              src={article.image} 
              alt={article.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1128]/70 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-white">
              <span>IMPROX INTEGENTS MONOGRAPH SERIES</span>
              <span className="text-blue-300 font-semibold">{article.category}</span>
            </div>
          </div>

          {/* Executive Thesis Callout */}
          <div className="bg-[#fafaf9] rounded-xs p-8 border-l-4 border-l-[#1e60b5] border-t border-r border-b border-slate-200 space-y-2">
            <div className="text-[10px] font-mono uppercase tracking-widest text-[#1e60b5] font-bold">
              Executive Thesis & Core Finding
            </div>
            <p className="text-base sm:text-xl font-serif italic text-[#0a1128] leading-relaxed">
              &ldquo;{article.summary}&rdquo;
            </p>
          </div>

          {/* Key Executive Takeaways Box */}
          {article.keyTakeaways && (
            <div className="p-7 rounded-xs bg-blue-50/40 border border-blue-100 space-y-3">
              <strong className="text-xs font-mono uppercase tracking-wider text-[#1e60b5] block font-bold">
                Executive Takeaways for Board Committees:
              </strong>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700 font-light">
                {article.keyTakeaways.map((takeaway, i) => (
                  <li key={i} className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1e60b5] mr-2.5 mt-2 shrink-0"></span>
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Long Form Body Content */}
          <div className="text-base sm:text-lg text-slate-700 font-light leading-relaxed space-y-6 whitespace-pre-line dropcap">
            {article.fullContent}
          </div>

          {/* Tags */}
          {article.tags && (
            <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-slate-400 mr-2 flex items-center">
                <Tag className="w-3.5 h-3.5 mr-1" /> Filed under:
              </span>
              {article.tags.map((tag) => (
                <span 
                  key={tag}
                  className="px-3 py-1 rounded-xs bg-slate-100 border border-slate-200 text-xs font-mono text-slate-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* About Author Box */}
          <div className="p-8 rounded-xs bg-[#fafaf9] border border-slate-200 flex flex-col sm:flex-row items-start gap-6">
            <div className="w-16 h-16 rounded-full bg-slate-200 overflow-hidden shrink-0">
              {article.authorAvatar ? (
                <img src={article.authorAvatar} alt={article.author} className="w-full h-full object-cover" />
              ) : (
                <User className="w-8 h-8 text-slate-400" />
              )}
            </div>
            <div className="space-y-2">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider font-bold">About the Author</div>
              <h3 className="text-lg font-serif font-bold text-[#0a1128]">{article.author}</h3>
              <p className="text-xs font-mono text-[#1e60b5]">{article.authorRole}</p>
              <p className="text-xs text-slate-600 font-light leading-relaxed">
                Leads executive advisory engagements and quantitative systems research at Improx Integents, counseling Fortune 100 boards and sovereign investment committees globally.
              </p>
            </div>
          </div>

          {/* Bottom Footnote & Consultation CTA */}
          <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs font-mono text-slate-400">
              Published by Improx Integents Global Research &bull; All Rights Reserved.
            </div>
            <Link 
              href="/contact" 
              className="btn-heritage-primary px-6 py-3 text-xs uppercase tracking-wider font-semibold inline-flex items-center space-x-2"
            >
              <span>Consult with Practice Leadership</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Link>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3: RELATED EXECUTIVE MONOGRAPHS
          ========================================================================= */}
      <section className="py-20 bg-[#f8fafc] border-b border-slate-200">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <span className="heritage-badge text-[10px]">Continuing Research</span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0a1128]">
                Related Executive Monographs
              </h2>
            </div>
            <Link 
              href="/blog" 
              className="text-xs font-mono uppercase tracking-wider text-[#1e60b5] hover:underline flex items-center font-semibold"
            >
              <span>View All Monographs</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedArticles.map((rel) => (
              <article 
                key={rel.slug}
                className="bg-white rounded-xs border border-slate-200 overflow-hidden flex flex-col justify-between hover:border-slate-400 hover:shadow-md transition-all group"
              >
                <div>
                  <div className="editorial-photo-frame aspect-[16/10] relative overflow-hidden bg-slate-100">
                    <img 
                      src={rel.image} 
                      alt={rel.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute top-3 left-3">
                      <span className="heritage-badge text-[9px] bg-white/95 text-[#0a1128] font-semibold">
                        {rel.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-2.5">
                    <div className="text-[10px] font-mono text-slate-400">
                      {rel.date} &bull; {rel.readTime}
                    </div>

                    <h3 className="text-base font-serif font-bold text-[#0a1128] group-hover:text-[#1e60b5] transition-colors leading-snug">
                      <Link href={`/blog/${rel.slug}`}>
                        {rel.title}
                      </Link>
                    </h3>

                    <p className="text-xs text-slate-600 font-light leading-relaxed line-clamp-2">
                      {rel.summary}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-[#1e60b5] font-semibold">
                  <span>Read Monograph</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
