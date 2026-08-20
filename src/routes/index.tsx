import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageSquare, FileCheck, GraduationCap, School, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { HeroSlider } from "@/components/HeroSlider";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Home — Tishya Consultancy Pvt. Ltd." },
      { name: "description", content: "Immigration and education consultancy — turning dreams into realities. Study in USA, UK, Canada, Australia, Germany and New Zealand." },
      { property: "og:title", content: "Home — Tishya Consultancy Pvt. Ltd." },
      { property: "og:description", content: "Immigration and education consultancy — turning dreams into realities." },
    ],
  }),
  component: Home,
});

const HERO_BG =
  "https://static.wixstatic.com/media/3941bc_8f7ab41c49134b46849bc53f2498ed11~mv2.jpg/v1/fit/w_1920,h_1080,q_90,enc_avif,quality_auto/3941bc_8f7ab41c49134b46849bc53f2498ed11~mv2.jpg";
const ABOUT_IMG =
  "https://static.wixstatic.com/media/3941bc_9909f0b84552468c89e2c91047f67625~mv2.png/v1/fill/w_363,h_561,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG-20240607-WA0002-removebg-preview_edited.png";
const COUNTRIES_BG =
  "https://static.wixstatic.com/media/4bb9d15d3cae49d4a983a471e5ad6266.jpg/v1/fill/w_1920,h_1080,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/4bb9d15d3cae49d4a983a471e5ad6266.jpg";

const steps = [
  { n: "01", title: "Apply Online", text: "Seamless access to opportunity awaits with just a click. Apply online today and let your aspirations take flight." },
  { n: "02", title: "Submit Documents", text: "Effortlessly submit your documents, paving the way for your journey to new horizons." },
  { n: "03", title: "Receive Visa", text: "Embark on your adventure as we handle the details - receive your visa with ease and anticipation." },
];

const countries = [
  { name: "USA", flag: "https://flagcdn.com/w80/us.png" },
  { name: "United Kingdom", flag: "https://flagcdn.com/w80/gb.png" },
  { name: "Germany", flag: "https://flagcdn.com/w80/de.png" },
  { name: "Australia", flag: "https://flagcdn.com/w80/au.png" },
  { name: "Canada", flag: "https://flagcdn.com/w80/ca.png" },
  { name: "New Zealand", flag: "https://flagcdn.com/w80/nz.png" },
];

const services = [
  { title: "Counselling", Icon: MessageSquare },
  { title: "Visa Processing", Icon: FileCheck },
  { title: "Test Preparation", Icon: GraduationCap },
  { title: "University Selection", Icon: School },
];

// Framer Motion animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 260, damping: 20 },
  },
};

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-navy">
        {/* Background Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-overlay pointer-events-none"
          style={{ backgroundImage: `url(${HERO_BG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900/80 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 text-white text-center lg:text-left flex flex-col items-center lg:items-start"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/20 border border-primary/40 text-primary text-xs sm:text-sm font-semibold tracking-wide uppercase mb-4 animate-pulse">
                <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
                Admissions Open 2026-27
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight drop-shadow-md text-white">
                TISHYA CONSULTANCY <span className="text-primary block sm:inline lg:block">PVT. LTD.</span>
              </h1>
              
              <p className="mt-4 text-base sm:text-lg lg:text-xl text-slate-200 italic font-light max-w-xl">
                "Success is not just about crossing borders; it's about crafting a journey that transforms dreams into realities."
              </p>

              <div className="mt-6 flex flex-wrap gap-2.5 justify-center lg:justify-start text-xs sm:text-sm text-slate-200">
                <span className="bg-white/10 px-3 py-1.5 rounded-full backdrop-blur-sm border border-white/15">🎓 D.Ed & B.Ed Admissions</span>
                <span className="bg-white/10 px-3 py-1.5 rounded-full backdrop-blur-sm border border-white/15">✈️ Overseas Education</span>
                <span className="bg-white/10 px-3 py-1.5 rounded-full backdrop-blur-sm border border-white/15">🔒 Visa Counseling</span>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                  <Link
                    to="/contact"
                    className="w-full sm:w-auto text-center bg-primary text-primary-foreground font-semibold px-8 py-3.5 rounded-md shadow-lg hover:shadow-orange-500/30 transition-all block"
                  >
                    CONTACT US
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                  <a
                    href="tel:+919991112246"
                    className="w-full sm:w-auto text-center bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3.5 rounded-md backdrop-blur-sm border border-white/20 transition-all flex items-center justify-center gap-2"
                  >
                    📞 +91 99911 12246
                  </a>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Poster Hero Slider */}
            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 flex justify-center lg:justify-end w-full"
            >
              <HeroSlider autoSlideInterval={3500} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 bg-background">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-6xl mx-auto px-4 grid gap-6 md:grid-cols-3"
        >
          {steps.map((s) => (
            <motion.div
              key={s.n}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="border rounded-lg overflow-hidden shadow-sm bg-background hover:shadow-md transition-shadow"
            >
              <div className="bg-primary text-primary-foreground px-6 py-5">
                <div className="text-xs tracking-widest opacity-80 font-bold">STEP {s.n}</div>
                <div className="text-2xl font-bold">{s.title}</div>
              </div>
              <div className="p-6 bg-muted text-muted-foreground italic leading-relaxed">"{s.text}"</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* About */}
      <section className="py-20 bg-muted overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy">About Us</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              "At Tishya Consultancy pvt.ltd, we are dedicated to facilitating seamless transitions for individuals seeking to explore new horizons through immigration and education opportunities. With our expert guidance and personalized support, we empower dreams to take flight, transforming aspirations into tangible achievements. Trust us to navigate the complexities, and embark on your journey towards a brighter tomorrow with confidence."
            </p>
            <motion.div whileHover={{ x: 6 }} className="inline-block mt-6">
              <Link to="/about" className="text-primary font-semibold hover:underline inline-flex items-center gap-1.5 text-base">
                Read More →
              </Link>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center"
          >
            <motion.img
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring" as const, stiffness: 300, damping: 20 }}
              src={ABOUT_IMG}
              alt="About Tishya Consultancy"
              className="max-h-[500px] object-contain drop-shadow-md"
            />
          </motion.div>
        </div>
      </section>

      {/* Countries */}
      <section
        className="py-24 bg-cover bg-center relative overflow-hidden"
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${COUNTRIES_BG})` }}
      >
        <div className="max-w-6xl mx-auto px-4 text-center text-white">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold"
          >
            Choose Your Country !
          </motion.h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-6"
          >
            {countries.map((c) => (
              <motion.div
                key={c.name}
                variants={itemVariants}
                whileHover={{ scale: 1.06, backgroundColor: "var(--primary)" }}
                whileTap={{ scale: 0.97 }}
                className="border border-white/40 rounded-lg py-6 px-4 backdrop-blur-sm bg-white/10 transition-colors flex flex-col items-center gap-3 cursor-pointer group shadow-lg"
              >
                <motion.img
                  whileHover={{ rotate: 3, scale: 1.1 }}
                  src={c.flag}
                  alt={`${c.name} flag`}
                  className="w-14 h-9 object-contain drop-shadow"
                />
                <span className="font-semibold text-lg">{c.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services — orange/navy split */}
      <section className="grid md:grid-cols-2 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-primary text-primary-foreground p-10 md:p-16 flex flex-col justify-center"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold">Our Services</h2>
          <div className="h-1 w-24 bg-primary-foreground/70 mt-3" />
          <p className="mt-8 italic leading-relaxed max-w-md">
            "At Tishya Consultancy pvt.ltd, we offer a comprehensive suite of services encompassing immigration and education consultancy."
          </p>
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} className="mt-8 w-fit">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-navy text-navy-foreground font-semibold px-6 py-3 rounded shadow hover:shadow-xl transition-shadow"
            >
              Read More <ArrowRight size={18} />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-navy text-navy-foreground p-10 md:p-16 grid grid-cols-2 gap-x-8 gap-y-10"
        >
          {services.map(({ title, Icon }) => (
            <motion.div
              key={title}
              variants={itemVariants}
              whileHover={{ x: 6, scale: 1.03 }}
              className="flex items-center gap-4 cursor-pointer group"
            >
              <motion.div whileHover={{ rotate: 10, scale: 1.15 }}>
                <Icon size={56} strokeWidth={1.25} className="shrink-0 text-primary transition-colors group-hover:text-white" />
              </motion.div>
              <h3 className="text-xl md:text-2xl font-bold leading-tight">{title}</h3>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  );
}
