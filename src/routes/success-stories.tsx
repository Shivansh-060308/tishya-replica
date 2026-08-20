import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, ZoomIn, CheckCircle2, Award } from "lucide-react";

export const Route = createFileRoute("/success-stories")({
  head: () => ({
    meta: [
      { title: "Success Stories — Tishya Consultancy Pvt. Ltd." },
      { name: "description", content: "Real success stories of students and professionals we've helped move, study and thrive abroad." },
      { property: "og:title", content: "Success Stories — Tishya Consultancy Pvt. Ltd." },
      { property: "og:description", content: "Real success stories from Tishya Consultancy clients." },
    ],
  }),
  component: SuccessStories,
});

interface SuccessStory {
  src: string;
  name: string;
  visa: string;
  alt: string;
}

const stories: SuccessStory[] = [
  { src: "/success-prince.jpg", name: "Prince", visa: "UK Visa Approved", alt: "Prince - UK Visa Approved" },
  { src: "/success-sohit-sharma.jpg", name: "Sohit Sharma", visa: "UK Visa Approved", alt: "Sohit Sharma - UK Visa Approved" },
  { src: "/success-sumit.jpg", name: "Sumit", visa: "UK Visa Approved", alt: "Sumit - UK Visa Approved" },
  { src: "/success-aarzoo.jpg", name: "Aarzoo", visa: "UK Visa Approved", alt: "Aarzoo - UK Visa Approved" },
  { src: "/success-pooja.jpg", name: "Pooja", visa: "UK Study Visa Approved", alt: "Pooja (Badsikri, Kaithal) - UK Study Visa Approved" },
  { src: "/success-anshul-dubai.jpg", name: "Anshul", visa: "Dubai Freelance Visa Approved", alt: "Anshul (Rohtak) - Dubai Freelance Visa Approved" },
  { src: "/success-ajay-kumar.jpg", name: "Ajay Kumar", visa: "UK Visa Approved (BPP University)", alt: "Ajay Kumar - UK Visa Approved (BPP University)" },
  { src: "/success-khushi-sharma.jpg", name: "Khushi Sharma", visa: "UK Visa Approved (BPP University)", alt: "Khushi Sharma - UK Visa Approved (BPP University)" },
  { src: "/success-manju.jpg", name: "Manju", visa: "UK Study Visa Approved", alt: "Manju - UK Study Visa Approved" },
  { src: "https://static.wixstatic.com/media/3941bc_bdbb5a9c403445aca0dca83f5cfb497b~mv2.jpg/v1/fill/w_400,h_700,fp_0.57_0.18,q_89,enc_avif,quality_auto/3941bc_bdbb5a9c403445aca0dca83f5cfb497b~mv2.jpg", name: "Diksha", visa: "PTE Score: 65", alt: "Diksha - PTE Score 65" },
  { src: "https://static.wixstatic.com/media/3941bc_8a10446f05314304880048aa2892d973~mv2.jpg/v1/fill/w_400,h_700,fp_0.49_0.18,q_89,enc_avif,quality_auto/3941bc_8a10446f05314304880048aa2892d973~mv2.jpg", name: "Khushdeep Kaur", visa: "IELTS Score: 6.5", alt: "Khushdeep Kaur - IELTS Score 6.5" },
  { src: "https://static.wixstatic.com/media/3941bc_254e493ad7314b4f8f94eb95c4fd2d99~mv2.jpg/v1/fill/w_400,h_700,fp_0.54_0.18,q_89,enc_avif,quality_auto/3941bc_254e493ad7314b4f8f94eb95c4fd2d99~mv2.jpg", name: "Nancy Rana", visa: "Canada Study Visa Approved", alt: "Nancy Rana - Canada Study Visa Approved" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 240, damping: 20 },
  },
};

function SuccessStories() {
  const [selectedStory, setSelectedStory] = useState<SuccessStory | null>(null);

  return (
    <>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm font-semibold tracking-wide uppercase mb-3">
            <Award className="w-4 h-4 text-primary" />
            Verified Milestones
          </div>
          <h1 className="text-4xl font-extrabold text-navy tracking-tight">Success Stories</h1>
          <p className="mt-3 text-muted-foreground text-base sm:text-lg">
            Celebrating our clients and students who successfully achieved their visa approvals and career dreams.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {stories.map((item, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: "spring" as const, stiffness: 300, damping: 20 }}
              className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all bg-slate-900 border border-slate-800 flex flex-col cursor-pointer"
              onClick={() => setSelectedStory(item)}
            >
              {/* Image Aspect Container */}
              <div className="relative w-full aspect-[4/5] overflow-hidden bg-slate-950">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />

                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                {/* Hover Zoom Icon */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                  <span className="p-2 rounded-full bg-slate-950/80 text-amber-400 border border-white/20 backdrop-blur-md inline-flex items-center justify-center shadow-lg">
                    <ZoomIn className="w-4 h-4" />
                  </span>
                </div>
              </div>

              {/* Card Bottom Content (Name & Visa Name) */}
              <div className="p-4 bg-slate-900 border-t border-white/10 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    {item.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-amber-400 mt-0.5">
                    {item.visa}
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Tishya Consultancy</span>
                  <span className="text-primary font-semibold group-hover:underline inline-flex items-center gap-1">
                    View Photo →
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {selectedStory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedStory(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-4xl max-h-[90vh] w-full flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedStory(null)}
                className="absolute -top-12 right-0 p-2 text-white/80 hover:text-white bg-white/10 rounded-full backdrop-blur-sm transition-colors cursor-pointer"
                aria-label="Close Preview"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Modal Image */}
              <img
                src={selectedStory.src}
                alt={selectedStory.alt}
                className="max-h-[75vh] w-auto object-contain rounded-xl shadow-2xl border border-white/20"
              />

              {/* Modal Caption Box */}
              <div className="mt-4 bg-slate-900/90 border border-white/15 px-6 py-3 rounded-xl text-center backdrop-blur-md max-w-md w-full shadow-xl">
                <h3 className="text-xl font-extrabold text-white">{selectedStory.name}</h3>
                <p className="text-sm font-semibold text-amber-400 mt-0.5">{selectedStory.visa}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
