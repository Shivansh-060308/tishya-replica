import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

export interface SlideItem {
  id: string;
  image: string;
  alt: string;
  badge?: string;
  badgeBg?: string;
}

const DEFAULT_SLIDES: SlideItem[] = [
  {
    id: "admissions-2026",
    image: "/admissions-poster.jpg",
    alt: "Tishya Consultancy Admissions Open Poster 2026-27",
    badge: "Limited Seats!",
    badgeBg: "bg-red-600 text-white",
  },
  {
    id: "dubai-expansion",
    image: "/dubai-poster.jpg",
    alt: "Tishya Consultancy Now In Dubai - Global Success",
    badge: "Now in Dubai! 🇦🇪",
    badgeBg: "bg-amber-500 text-slate-950 font-extrabold",
  },
];

interface HeroSliderProps {
  slides?: SlideItem[];
  autoSlideInterval?: number; // default 3500ms
}

export function HeroSlider({
  slides = DEFAULT_SLIDES,
  autoSlideInterval = 3500,
}: HeroSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<number>(1);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (isPaused || slides.length <= 1) return;

    const timer = setInterval(() => {
      nextSlide();
    }, autoSlideInterval);

    return () => clearInterval(timer);
  }, [isPaused, nextSlide, autoSlideInterval, slides.length]);

  const slideVariants: Variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.96,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring" as const, stiffness: 280, damping: 28 },
        opacity: { duration: 0.35 },
        scale: { duration: 0.35 },
      },
    },
    exit: (dir: number) => ({
      x: dir < 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.96,
      transition: {
        x: { type: "spring" as const, stiffness: 280, damping: 28 },
        opacity: { duration: 0.35 },
        scale: { duration: 0.35 },
      },
    }),
  };

  const currentSlide = slides[currentIndex];

  return (
    <div
      className="relative group max-w-md sm:max-w-lg lg:max-w-full w-full select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background ambient glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-primary via-amber-500 to-orange-600 rounded-2xl blur-lg opacity-40 group-hover:opacity-75 transition duration-500" />

      {/* Main Container */}
      <div className="relative bg-slate-900 border border-white/20 rounded-2xl overflow-hidden shadow-2xl transition-transform duration-300">
        {/* Aspect Container / Height adjustment */}
        <div className="relative w-full overflow-hidden min-h-[380px] sm:min-h-[480px] lg:min-h-[540px] flex items-center justify-center bg-slate-950">
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={currentSlide.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full h-full flex items-center justify-center p-1 sm:p-2"
            >
              <img
                src={currentSlide.image}
                alt={currentSlide.alt}
                className="w-full h-auto object-contain max-h-[540px] rounded-xl mx-auto block drop-shadow-md"
              />
            </motion.div>
          </AnimatePresence>

          {/* Badge Overlay */}
          {currentSlide.badge && (
            <div
              className={`absolute top-4 right-4 z-20 text-xs font-extrabold px-3 py-1 rounded-full shadow-lg uppercase tracking-wider animate-bounce ${
                currentSlide.badgeBg || "bg-red-600 text-white"
              }`}
            >
              {currentSlide.badge}
            </div>
          )}

          {/* Navigation Arrows */}
          {slides.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                aria-label="Previous Slide"
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-slate-950/70 hover:bg-primary text-white hover:text-slate-950 border border-white/20 backdrop-blur-md transition-all opacity-90 sm:opacity-0 group-hover:opacity-100 focus:opacity-100 hover:scale-110 active:scale-95 shadow-md cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              <button
                onClick={nextSlide}
                aria-label="Next Slide"
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-slate-950/70 hover:bg-primary text-white hover:text-slate-950 border border-white/20 backdrop-blur-md transition-all opacity-90 sm:opacity-0 group-hover:opacity-100 focus:opacity-100 hover:scale-110 active:scale-95 shadow-md cursor-pointer"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </>
          )}

          {/* Bottom Bar: Slide Indicators & Auto-play status */}
          <div className="absolute bottom-3 inset-x-0 z-20 flex items-center justify-center gap-2 px-4">
            <div className="flex items-center gap-2 bg-slate-950/75 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 shadow-lg">
              {slides.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => goToSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === currentIndex
                      ? "w-7 bg-primary shadow-sm"
                      : "w-2.5 bg-white/40 hover:bg-white/70"
                  }`}
                />
              ))}
              <div
                className="ml-1 pl-1.5 border-l border-white/20 text-white/70 flex items-center"
                title={isPaused ? "Paused on hover" : "Auto sliding"}
              >
                {isPaused ? (
                  <Pause className="w-3 h-3 text-amber-400" />
                ) : (
                  <Play className="w-3 h-3 text-emerald-400 animate-pulse" />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
