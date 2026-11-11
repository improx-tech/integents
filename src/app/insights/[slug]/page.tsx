import { FEATURED_INSIGHTS } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight, Calendar, Clock, Share2, Globe, MessageCircle, ArrowRight, ShieldCheck } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function InsightPage({ params }: PageProps) {
  const { slug } = await params;
  const insight = FEATURED_INSIGHTS.find(i => i.slug === slug);

  if (!insight) {
    notFound();
  }

  return (
    <div className="bg-white text-slate-900 min-h-screen pt-20 lg:pt-24">
      
      {/* SECTION 1: STATELY MONOGRAPH HERO */}
      <section className="relative py-20 border-b border-slate-200 bg-[#fdfdfd]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-center">
          <Link 
            href="/insights" 
            className="text-xs font-mono uppercase tracking-wider text-[#1e60b5] hover:underline inline-flex items-center mb-2 font-semibold"
          >
            <ChevronRight className="w-3.5 h-3.5 mr-1 rotate-180" /> Back to Strategic Monographs
          </Link>
          
          <div className="heritage-badge block w-max mx-auto text-[10px]">{insight.category}</div>
          
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#0a1128] tracking-tight leading-[1.12]">
            {insight.title}
          </h1>
          
          <div className="flex items-center justify-center space-x-6 text-xs font-mono text-slate-500 pt-2">
            <span className="flex items-center"><Calendar className="w-3.5 h-3.5 mr-1 text-[#1e60b5]" /> {insight.date}</span>
            <span>&bull;</span>
            <span className="flex items-center"><Clock className="w-3.5 h-3.5 mr-1 text-[#1e60b5]" /> {insight.readTime}</span>
          </div>
        </div>
      </section>

      {/* SECTION 2: ARTICLE BODY */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* Author Header */}
          <div className="flex items-center justify-between py-4 border-b border-slate-200">
            <div>
              <p className="font-serif font-bold text-[#0a1128] text-base">{insight.author}</p>
              <p className="text-xs font-mono text-slate-500">Improx Integents Strategic Practice Research</p>
            </div>
            <div className="text-[11px] font-mono text-[#1e60b5] bg-slate-50 px-3 py-1 rounded-xs border border-slate-200 font-bold">
              PEER-REVIEWED MONOGRAPH
            </div>
          </div>

          {/* Lead Editorial Photograph Frame */}
          <div className="editorial-photo-frame rounded-xs aspect-[16/9] shadow-md relative">
            <img 
              src={insight.image} 
              alt={insight.title} 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Executive Pullquote */}
          <div className="bg-[#fafaf9] rounded-xs p-6 sm:p-8 border-l-4 border-l-[#1e60b5] border-t border-r border-b border-slate-200">
            <div className="text-[10px] font-mono uppercase tracking-widest text-[#1e60b5] mb-2 font-bold">Executive Thesis</div>
            <p className="text-base sm:text-lg font-serif italic text-[#0a1128] leading-relaxed">
              &ldquo;{insight.summary}&rdquo;
            </p>
          </div>

          {/* Long Form Body Content */}
          <div className="text-sm sm:text-base text-slate-700 font-light leading-relaxed space-y-6 whitespace-pre-line dropcap">
            {insight.fullContent}
          </div>

          {/* Bottom Footnote & Next Action */}
          <div className="pt-10 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs font-mono text-slate-500">
              Published by Improx Integents Global Research &bull; All Rights Reserved.
            </div>
            <Link 
              href="/contact" 
              className="btn-heritage-primary px-6 py-2.5 text-xs uppercase tracking-wider font-semibold inline-flex items-center space-x-2"
            >
              <span>Discuss with Practice Lead</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
