import { Link } from "@tanstack/react-router";
import { GraduationCap, Sparkles, Phone, ArrowRight } from "lucide-react";

export function AdmissionsScroller() {
  const scrollerItems = [
    { text: "D.Ed , B.Ed Admissions Open", badge: "Session 2026-27" },
    { text: "Direct Admission Guidance Available", badge: "Top Colleges" },
    { text: "D.Ed , B.Ed Admissions Open", badge: "Apply Now" },
    { text: "Call for Inquiry: +91 9992000536", badge: "Contact Us" },
  ];

  // Quadruple items to guarantee endless smooth loop on wide screens
  const tickerList = [...scrollerItems, ...scrollerItems, ...scrollerItems, ...scrollerItems];

  return (
    <div className="w-full bg-yellow-400 text-navy border-y border-yellow-500/40 py-2.5 overflow-hidden shadow-sm relative group select-none z-30">
      {/* Subtle background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-amber-300/30 via-yellow-200/20 to-amber-300/30 pointer-events-none" />

      {/* Floating Badge Label for Mobile/Desktop */}
      <div className="flex items-center">
        {/* Left static label */}
        <div className="hidden sm:flex items-center gap-1.5 px-3.5 py-1 bg-navy text-yellow-300 text-xs font-extrabold tracking-wider uppercase rounded-r-full shrink-0 z-10 shadow-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-400"></span>
          </span>
          LATEST ANNOUNCEMENT
        </div>

        {/* Marquee Track */}
        <div className="overflow-hidden w-full flex">
          <div className="animate-marquee flex items-center shrink-0 gap-8 whitespace-nowrap">
            {tickerList.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm md:text-base font-bold">
                <span className="flex items-center gap-1.5 text-navy font-extrabold tracking-wide">
                  <GraduationCap className="w-4 h-4 text-navy shrink-0" />
                  {item.text}
                </span>

                <span className="bg-navy/15 text-navy border border-navy/20 px-2 py-0.5 rounded text-[10px] sm:text-xs font-extrabold uppercase tracking-wider">
                  {item.badge}
                </span>

                <Sparkles className="w-3.5 h-3.5 text-amber-800 shrink-0 ml-2" />
              </div>
            ))}
          </div>
        </div>

        {/* Right CTA Button */}
        <Link
          to="/contact"
          className="hidden md:flex items-center gap-1.5 px-4 py-1.5 bg-navy hover:bg-slate-800 text-yellow-300 text-xs font-bold uppercase tracking-wider rounded-l-full shrink-0 z-10 shadow-md transition-colors ml-auto group/cta"
        >
          <span>Apply</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover/cta:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
