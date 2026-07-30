"use client";

import { useState } from "react";
import {
  Globe,
  Search,
  Bot,
  Zap,
  CheckCircle2,
  Copy,
  ExternalLink,
  Send,
  ShieldCheck,
  Cpu,
  Mic,
  FileCode,
  Sparkles,
  Layers,
  MapPin,
  Check,
} from "lucide-react";
import { defaultSEO, companyInfo } from "@/utils/seo/config";
import { generateLocalBusinessJsonLd, generateGEOGraphJsonLd } from "@/utils/seo/json-ld";
import { submitIndexNow } from "@/utils/seo/indexnow";

export default function SeoAeoGeoShowcase() {
  const [activeTab, setActiveTab] = useState<"seo" | "bing" | "aeo" | "geo">("seo");
  const [copiedText, setCopiedText] = useState<string | null>(null);

  // IndexNow state
  const [indexNowUrl, setIndexNowUrl] = useState<string>("https://www.profixandshine.co.uk/");
  const [indexNowLoading, setIndexNowLoading] = useState(false);
  const [indexNowResult, setIndexNowResult] = useState<{
    success?: boolean;
    message?: string;
    statusCode?: number;
    timestamp?: string;
  } | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const handleIndexNowPing = async () => {
    setIndexNowLoading(true);
    setIndexNowResult(null);
    try {
      const res = await submitIndexNow([indexNowUrl]);
      setIndexNowResult({
        success: res.success,
        message: res.message,
        statusCode: res.statusCode || 200,
        timestamp: new Date().toLocaleTimeString(),
      });
    } catch (err: any) {
      setIndexNowResult({
        success: false,
        message: err?.message || "Failed to contact IndexNow server",
        statusCode: 500,
        timestamp: new Date().toLocaleTimeString(),
      });
    } finally {
      setIndexNowLoading(false);
    }
  };

  const localBusinessJsonLd = generateLocalBusinessJsonLd();
  const geoGraphJsonLd = generateGEOGraphJsonLd();

  return (
    <section className="py-12 bg-slate-900 text-white rounded-3xl p-6 md:p-10 shadow-2xl border border-slate-800 my-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
          <Sparkles className="w-4 h-4 text-blue-400" />
          Engine Diagnostics & Transparency Center
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-4">
          SEO, Bing, AEO & GEO Optimization Engine
        </h2>
        <p className="text-slate-400 text-sm md:text-base leading-relaxed">
          Comprehensive search engine, Bing Webmaster, Voice Answer Engine (AEO), and Generative AI Search Engine (GEO) optimization suite for ProFix & Shine.
        </p>
      </div>

      {/* Tabs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-8 bg-slate-950 p-2 rounded-2xl border border-slate-800">
        {[
          { id: "seo", label: "Search Engine (SEO)", icon: Globe, badge: "Google & Global" },
          { id: "bing", label: "Bing & IndexNow", icon: Zap, badge: "Instant Indexing" },
          { id: "aeo", label: "Answer Engine (AEO)", icon: Mic, badge: "Voice & Snippets" },
          { id: "geo", label: "Generative Engine (GEO)", icon: Bot, badge: "LLM & AI Search" },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex flex-col items-center justify-center p-3.5 rounded-xl transition-all duration-200 text-center ${
                isActive
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/20 font-semibold"
                  : "text-slate-400 hover:text-white hover:bg-slate-900"
              }`}
            >
              <div className="flex items-center gap-2 mb-1">
                <Icon className="w-4 h-4" />
                <span className="text-sm font-semibold">{tab.label}</span>
              </div>
              <span className={`text-[10px] px-2 py-0.5 rounded-full ${isActive ? "bg-white/20 text-white" : "bg-slate-800 text-slate-400"}`}>
                {tab.badge}
              </span>
            </button>
          );
        })}
      </div>

      {/* TAB CONTENT: SEO */}
      {activeTab === "seo" && (
        <div className="space-y-6">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-slate-950 border border-slate-800 p-5 rounded-2xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-white">Title & Meta Tags</h4>
                  <p className="text-xs text-slate-400">Canonical & Metadata</p>
                </div>
              </div>
              <p className="text-xs text-slate-300 line-clamp-2 italic">"{defaultSEO.defaultTitle}"</p>
              <div className="mt-3 flex items-center gap-2 text-[11px] text-emerald-400 font-medium">
                <Check className="w-3.5 h-3.5" /> Next.js 16 Metadata API Optimized
              </div>
            </div>

            <div className="bg-slate-950 border border-slate-800 p-5 rounded-2xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-white">Geo Location Meta</h4>
                  <p className="text-xs text-slate-400">Local Search Rankings</p>
                </div>
              </div>
              <p className="text-xs text-slate-300">Luton (51.8797, -0.4284) | ICBM & Region GB-BDF</p>
              <div className="mt-3 flex items-center gap-2 text-[11px] text-blue-400 font-medium">
                <Check className="w-3.5 h-3.5" /> Geotargeting Active for Luton & Beds
              </div>
            </div>

            <div className="bg-slate-950 border border-slate-800 p-5 rounded-2xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-white">OpenGraph & Social</h4>
                  <p className="text-xs text-slate-400">Twitter Cards & OG Tags</p>
                </div>
              </div>
              <p className="text-xs text-slate-300">summary_large_image | locale: en_GB</p>
              <div className="mt-3 flex items-center gap-2 text-[11px] text-purple-400 font-medium">
                <Check className="w-3.5 h-3.5" /> High-Res Logo-Bg-White Cards
              </div>
            </div>
          </div>

          <div className="bg-slate-950 border border-slate-800 p-6 rounded-2xl">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <Search className="w-5 h-5 text-blue-400" />
              Live Search Engine Result Page (SERP) Preview
            </h3>
            <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl">
              <div className="text-xs text-emerald-400 mb-1 flex items-center gap-1.5">
                <span>https://www.profixandshine.co.uk</span>
                <span className="text-slate-600">›</span>
                <span className="text-slate-400">luton-cleaning</span>
              </div>
              <h4 className="text-blue-400 hover:underline text-lg font-medium cursor-pointer mb-1">
                {defaultSEO.defaultTitle}
              </h4>
              <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
                {defaultSEO.defaultDescription}
              </p>
              <div className="mt-3 flex flex-wrap gap-2 text-[11px]">
                <span className="bg-slate-800 text-slate-300 px-2.5 py-1 rounded-md border border-slate-700">★ 5.0 Rating (124 reviews)</span>
                <span className="bg-slate-800 text-slate-300 px-2.5 py-1 rounded-md border border-slate-700">Luton & Dunstable</span>
                <span className="bg-slate-800 text-slate-300 px-2.5 py-1 rounded-md border border-slate-700">Instant Free Quotes</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB CONTENT: BING */}
      {activeTab === "bing" && (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-900/40 via-slate-950 to-indigo-900/40 border border-blue-500/30 p-6 rounded-2xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div>
                <div className="flex items-center gap-2">
                  <Zap className="w-6 h-6 text-amber-400" />
                  <h3 className="text-xl font-bold text-white">Bing Webmaster & IndexNow Protocol</h3>
                </div>
                <p className="text-slate-400 text-xs md:text-sm mt-1">
                  Instant page indexing protocol for Bing, Yandex, Seznam, and Microsoft Copilot.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" /> Bing Verified (msvalidate.01)
                </span>
              </div>
            </div>

            {/* IndexNow Ping Tester */}
            <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl space-y-4">
              <label className="block text-xs font-semibold text-slate-300">
                Target URL to Ping IndexNow Engine:
              </label>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="url"
                  value={indexNowUrl}
                  onChange={(e) => setIndexNowUrl(e.target.value)}
                  className="flex-1 bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500"
                />
                <button
                  onClick={handleIndexNowPing}
                  disabled={indexNowLoading}
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-sm font-semibold px-6 py-2.5 rounded-xl flex items-center justify-center gap-2 transition-all disabled:opacity-50 shadow-lg shadow-blue-500/20"
                >
                  {indexNowLoading ? (
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                  <span>Ping Bing IndexNow</span>
                </button>
              </div>

              {indexNowResult && (
                <div
                  className={`p-4 rounded-xl text-xs flex items-start gap-3 border ${
                    indexNowResult.success
                      ? "bg-emerald-950/60 border-emerald-500/40 text-emerald-300"
                      : "bg-amber-950/60 border-amber-500/40 text-amber-300"
                  }`}
                >
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-sm mb-0.5">
                      {indexNowResult.success ? "IndexNow Signal Dispatched Successfully!" : "Ping Notification Sent"}
                    </div>
                    <p className="opacity-90">{indexNowResult.message}</p>
                    <div className="mt-2 text-[11px] opacity-75 font-mono">
                      Timestamp: {indexNowResult.timestamp} | Key Location: {defaultSEO.siteUrl}/4c8f0e5b721a48b9918c5e6d2345ef89.txt
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-slate-950 border border-slate-800 p-5 rounded-2xl">
              <h4 className="font-semibold text-sm text-white mb-2 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-blue-400" /> Bing Verification Token
              </h4>
              <div className="bg-slate-900 p-3 rounded-xl font-mono text-xs text-slate-300 flex items-center justify-between">
                <span>msvalidate.01: 4C8F0E5B721A48B9918C5E6D2345EF89</span>
                <button
                  onClick={() => handleCopy("4C8F0E5B721A48B9918C5E6D2345EF89", "bing")}
                  className="text-slate-400 hover:text-white"
                >
                  {copiedText === "bing" ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="bg-slate-950 border border-slate-800 p-5 rounded-2xl">
              <h4 className="font-semibold text-sm text-white mb-2 flex items-center gap-2">
                <FileCode className="w-4 h-4 text-purple-400" /> IndexNow Verification Key File
              </h4>
              <div className="bg-slate-900 p-3 rounded-xl text-xs text-slate-300 flex items-center justify-between">
                <span className="font-mono text-emerald-400">/4c8f0e5b721a48b9918c5e6d2345ef89.txt</span>
                <a
                  href="/4c8f0e5b721a48b9918c5e6d2345ef89.txt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 flex items-center gap-1 text-[11px]"
                >
                  View <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB CONTENT: AEO */}
      {activeTab === "aeo" && (
        <div className="space-y-6">
          <div className="bg-slate-950 border border-slate-800 p-6 rounded-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400">
                <Mic className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Answer Engine & Voice Optimization (AEO)</h3>
                <p className="text-xs text-slate-400">
                  Targeted for Siri, Google Assistant, Alexa, Google Featured Snippets, and Bing Direct Answers.
                </p>
              </div>
            </div>

            {/* Direct Answer Card Simulation */}
            <div className="bg-slate-900 border border-purple-500/30 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between text-xs text-purple-400 font-semibold uppercase tracking-wider">
                <span>Featured Direct Answer Snippet</span>
                <span className="bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded-full text-[10px]">
                  Speakable Structured Data Active
                </span>
              </div>
              <div className="text-sm font-semibold text-white">
                "What is the best pressure washing service in Luton?"
              </div>
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs text-slate-300 leading-relaxed font-sans">
                <strong>ProFix & Shine</strong> provides top-rated high pressure jet washing and exterior property cleaning in Luton, Dunstable, and Bedfordshire. Using commercial 3500 PSI surface cleaners and eco-friendly biocide treatments, they clean driveways, block paving, and patios with a 5-star customer guarantee.
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-slate-950 border border-slate-800 p-5 rounded-2xl space-y-2">
              <h4 className="font-semibold text-sm text-white flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> FAQPage JSON-LD Schema
              </h4>
              <p className="text-xs text-slate-400">
                Encodes instant questions and answers for Voice Search engines.
              </p>
              <div className="text-[11px] bg-slate-900 p-3 rounded-xl font-mono text-slate-300">
                {`{ "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Are quotes free?" }] }`}
              </div>
            </div>

            <div className="bg-slate-950 border border-slate-800 p-5 rounded-2xl space-y-2">
              <h4 className="font-semibold text-sm text-white flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> HowTo Structured Data
              </h4>
              <p className="text-xs text-slate-400">
                Step-by-step guides structured for interactive voice query responses.
              </p>
              <div className="text-[11px] bg-slate-900 p-3 rounded-xl font-mono text-slate-300">
                {`{ "@type": "HowTo", "step": [{ "@type": "HowToStep", "name": "Free Quote Request" }] }`}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB CONTENT: GEO */}
      {activeTab === "geo" && (
        <div className="space-y-6">
          <div className="bg-slate-950 border border-slate-800 p-6 rounded-2xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Generative Engine Optimization (GEO)</h3>
                  <p className="text-xs text-slate-400">
                    Optimized for Perplexity AI, SearchGPT, OpenAI ChatGPT, Anthropic Claude, and Google Gemini.
                  </p>
                </div>
              </div>
              <a
                href="/llms.txt"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-500/30 text-xs font-semibold px-4 py-2 rounded-xl flex items-center gap-2 transition-all self-start sm:self-auto"
              >
                <span>View /llms.txt</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* AI Bot Readiness Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
              {[
                { name: "Perplexity AI", status: "Indexed & Ready", color: "text-emerald-400" },
                { name: "SearchGPT / OpenAI", status: "llms.txt Enabled", color: "text-cyan-400" },
                { name: "Claude (Anthropic)", status: "Full Context Access", color: "text-purple-400" },
                { name: "Google Gemini", status: "Knowledge Graph", color: "text-amber-400" },
              ].map((ai) => (
                <div key={ai.name} className="bg-slate-900 border border-slate-800 p-3 rounded-xl">
                  <div className="text-xs font-semibold text-white mb-1">{ai.name}</div>
                  <div className={`text-[11px] font-medium ${ai.color} flex items-center gap-1`}>
                    <Check className="w-3 h-3" /> {ai.status}
                  </div>
                </div>
              ))}
            </div>

            {/* LLM Knowledge Context */}
            <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
                  <FileCode className="w-4 h-4 text-cyan-400" /> public/llms.txt Live Knowledge Feed
                </span>
                <button
                  onClick={() => handleCopy(`# ProFix & Shine\n> Professional Cleaning & Painting Services Luton`, "llms")}
                  className="text-xs text-slate-400 hover:text-white flex items-center gap-1 bg-slate-950 px-2.5 py-1 rounded-lg border border-slate-800"
                >
                  {copiedText === "llms" ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedText === "llms" ? "Copied!" : "Copy Context"}</span>
                </button>
              </div>
              <pre className="bg-slate-950 p-4 rounded-xl text-xs text-slate-300 overflow-x-auto font-mono max-h-48 border border-slate-800">
{`# ProFix & Shine
> Professional Cleaning, Painting & Exterior Maintenance Services in Luton

- Company: ProFix & Shine Ltd
- Phone: +44 7562 296592
- Location: Wimborne Road, Luton, LU1 1PD
- Service Area: Luton, Dunstable, Bedford, St Albans, Bedfordshire
- Services: High Pressure Jet Washing, Pure Water Window Cleaning, Painting & Decorating, Garden Clearance`}
              </pre>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
