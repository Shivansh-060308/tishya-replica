import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { MapPin, Phone, Building2, Sparkles, Image as ImageIcon, X, ZoomIn, Briefcase, GraduationCap, Globe2, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/dubai-branch")({
  head: () => ({
    meta: [
      { title: "Dubai Branch — Ttishya Consultancy FZE" },
      { name: "description", content: "Ttishya Consultancy FZE - Dubai Branch. Global talent placement, study visa, and overseas career guidance in UAE." },
      { property: "og:title", content: "Dubai Branch — Ttishya Consultancy FZE" },
      { property: "og:description", content: "Ttishya Consultancy FZE - Dubai Branch. Global talent placement and career guidance." },
    ],
  }),
  component: DubaiBranch,
});

const DUBAI_PHOTOS = [
  {
    id: "dubai-poster-1",
    src: "/dubai-poster.jpg",
    title: "Ttishya Consultancy FZE - Dubai Launch",
    subtitle: "From Local Talent to Global Success",
    category: "Official Announcement",
    date: "2026",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 260, damping: 20 },
  },
};

function DubaiBranch() {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  return (
    <>
      {/* Hero Banner Section */}
      <section className="relative bg-navy py-16 lg:py-20 overflow-hidden text-white">
        {/* Background glow and gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-navy to-slate-900 opacity-90" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-4">
              <Sparkles className="w-4 h-4 text-amber-400" />
              International Presence
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              DUBAI <span className="text-primary">BRANCH</span>
            </h1>

            <p className="mt-4 text-lg sm:text-xl text-slate-200 font-medium">
              Ttishya Consultancy FZE — From Local Talent to Global Success
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-3 text-xs sm:text-sm text-slate-200">
              <span className="flex items-center gap-1.5 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/15 backdrop-blur-sm">
                <Building2 className="w-4 h-4 text-primary" />
                Sharjah Publishing City Free Zone, UAE
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/15 backdrop-blur-sm">
                <Phone className="w-4 h-4 text-amber-400" />
                +971-525253366
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/15 backdrop-blur-sm">
                <Briefcase className="w-4 h-4 text-emerald-400" />
                Placements & Overseas Guidance
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content & Branch Overview Card */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-slate-900 border border-white/10 rounded-2xl p-6 sm:p-8 text-white shadow-xl mb-12 relative overflow-hidden">
          <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />
          <div className="grid md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-8">
              <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">Branch Details</span>
              <h2 className="text-2xl sm:text-3xl font-bold mt-1 text-white">Ttishya Consultancy FZE</h2>
              <p className="text-slate-300 mt-2 text-sm sm:text-base leading-relaxed">
                Our Dubai branch expands our commitment to connecting local talent with global career and placement opportunities across the United Arab Emirates and worldwide.
              </p>
              
              <div className="mt-4 grid sm:grid-cols-2 gap-3 text-sm">
                <div className="flex items-start gap-2.5 text-slate-200">
                  <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Address</span>
                    Business Centre, Sharjah Publishing City Free Zone, Sharjah, United Arab Emirates
                  </div>
                </div>

                <div className="flex items-start gap-2.5 text-slate-200">
                  <Phone className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Direct Contact</span>
                    <a href="tel:+971525253366" className="hover:text-amber-400 transition-colors font-medium">
                      +971-525253366
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-4 flex flex-col justify-center gap-3 border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-6">
              <Link
                to="/contact"
                className="w-full text-center bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-5 py-3 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 text-sm"
              >
                <span>Inquire For Placements</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="tel:+971525253366"
                className="w-full text-center bg-white/10 hover:bg-white/20 text-white font-semibold px-5 py-3 rounded-xl border border-white/15 backdrop-blur-sm transition-all flex items-center justify-center gap-2 text-sm"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call Dubai Office</span>
              </a>
            </div>
          </div>
        </div>

        {/* Gallery Header */}
        <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy">Dubai Branch Gallery</h2>
            <p className="text-muted-foreground text-sm mt-1">
              Highlights, announcements, and events from Ttishya Consultancy FZE.
            </p>
          </div>
          <div className="text-xs text-muted-foreground bg-muted px-3 py-1.5 rounded-full font-medium border border-border">
            📸 More photos will be added soon
          </div>
        </div>

        {/* Gallery Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {DUBAI_PHOTOS.map((photo) => (
            <motion.div
              key={photo.id}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="group relative bg-slate-950 rounded-2xl overflow-hidden shadow-lg border border-slate-800 cursor-pointer"
              onClick={() => setSelectedPhoto(photo.src)}
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-slate-900">
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Top Badge */}
                <div className="absolute top-3 right-3 bg-amber-500 text-slate-950 text-xs font-extrabold px-3 py-1 rounded-full shadow-md uppercase tracking-wider">
                  {photo.category}
                </div>

                {/* Bottom Overlay Content */}
                <div className="absolute bottom-0 inset-x-0 p-5 text-white">
                  <h3 className="font-bold text-lg leading-snug group-hover:text-amber-400 transition-colors">
                    {photo.title}
                  </h3>
                  <p className="text-xs text-slate-300 mt-1">{photo.subtitle}</p>
                  
                  <div className="mt-3 flex items-center justify-between text-xs text-amber-300 font-semibold pt-3 border-t border-white/10">
                    <span className="inline-flex items-center gap-1">
                      <ZoomIn className="w-3.5 h-3.5" /> Tap to view full poster
                    </span>
                    <span>{photo.date}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Styled Placeholder Gallery Cards for future photos */}
          <motion.div
            variants={itemVariants}
            className="border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-2xl p-8 flex flex-col items-center justify-center text-center bg-muted/30 min-h-[360px] group hover:border-primary transition-colors"
          >
            <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <ImageIcon className="w-7 h-7" />
            </div>
            <h4 className="font-semibold text-navy text-base">More Photos Coming Soon</h4>
            <p className="text-xs text-muted-foreground mt-1 max-w-xs">
              Additional branch event photos, placement achievements, and team moments will be added here.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-4xl max-h-[90vh] w-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute -top-12 right-0 p-2 text-white/80 hover:text-white bg-white/10 rounded-full backdrop-blur-sm transition-colors cursor-pointer"
                aria-label="Close Preview"
              >
                <X className="w-6 h-6" />
              </button>

              <img
                src={selectedPhoto}
                alt="Dubai Poster Full Preview"
                className="max-h-[85vh] w-auto object-contain rounded-xl shadow-2xl border border-white/20"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
