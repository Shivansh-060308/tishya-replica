import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageSquare, FileCheck, GraduationCap, School, ArrowRight } from "lucide-react";

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
  { name: "USA", flag: "🇺🇸" },
  { name: "United Kingdom", flag: "🇬🇧" },
  { name: "Germany", flag: "🇩🇪" },
  { name: "Australia", flag: "🇦🇺" },
  { name: "Canada", flag: "🇨🇦" },
  { name: "New Zealand", flag: "🇳🇿" },
];

const services = [
  { title: "Counselling", Icon: MessageSquare },
  { title: "Visa Processing", Icon: FileCheck },
  { title: "Test Preparation", Icon: GraduationCap },
  { title: "University Selection", Icon: School },
];


function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative">
        <div
          className="min-h-[70vh] bg-cover bg-center flex items-center"
          style={{ backgroundImage: `linear-gradient(rgba(20,25,60,0.6), rgba(20,25,60,0.6)), url(${HERO_BG})` }}
        >
          <div className="max-w-4xl mx-auto text-center text-white px-6 py-24">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">TISHYA CONSULTANCY PVT.LTD</h1>
            <p className="mt-6 text-lg md:text-xl italic">
              "Success is not just about crossing borders; it's about crafting a journey that transforms dreams into realities."
            </p>
            <Link
              to="/contact"
              className="inline-block mt-8 bg-primary text-primary-foreground font-semibold px-8 py-3 rounded-md hover:opacity-90"
            >
              CONTACT US
            </Link>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4 grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="border rounded-lg overflow-hidden shadow-sm">
              <div className="bg-primary text-primary-foreground px-6 py-5">
                <div className="text-xs tracking-widest opacity-80">STEP {s.n}</div>
                <div className="text-2xl font-bold">{s.title}</div>
              </div>
              <div className="p-6 bg-muted text-muted-foreground italic">"{s.text}"</div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="py-16 bg-muted">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy">About Us</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              "At Tishya Consultancy pvt.ltd, we are dedicated to facilitating seamless transitions for individuals seeking to explore new horizons through immigration and education opportunities. With our expert guidance and personalized support, we empower dreams to take flight, transforming aspirations into tangible achievements. Trust us to navigate the complexities, and embark on your journey towards a brighter tomorrow with confidence."
            </p>
            <Link to="/about" className="inline-block mt-6 text-primary font-semibold hover:underline">
              Read More →
            </Link>
          </div>
          <div className="flex justify-center">
            <img src={ABOUT_IMG} alt="About Tishya Consultancy" className="max-h-[500px] object-contain" />
          </div>
        </div>
      </section>

      {/* Countries */}
      <section
        className="py-20 bg-cover bg-center relative"
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${COUNTRIES_BG})` }}
      >
        <div className="max-w-6xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold">Choose Your Country !</h2>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-6">
            {countries.map((c) => (
              <div key={c.name} className="border border-white/40 rounded-lg py-6 px-4 backdrop-blur-sm bg-white/10 hover:bg-primary hover:border-primary transition flex flex-col items-center gap-2">
                <span className="text-4xl" aria-hidden>{c.flag}</span>
                <span className="font-semibold text-lg">{c.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services — orange/navy split */}
      <section className="grid md:grid-cols-2">
        <div className="bg-primary text-primary-foreground p-10 md:p-16 flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl font-extrabold">Our Services</h2>
          <div className="h-1 w-24 bg-primary-foreground/70 mt-3" />
          <p className="mt-8 italic leading-relaxed max-w-md">
            "At Tishya Consultancy pvt.ltd, we offer a comprehensive suite of services encompassing immigration and education consultancy."
          </p>
          <Link
            to="/services"
            className="mt-8 inline-flex items-center gap-2 bg-navy text-navy-foreground font-semibold px-6 py-3 rounded w-fit hover:opacity-90"
          >
            Read More <ArrowRight size={18} />
          </Link>
        </div>
        <div className="bg-navy text-navy-foreground p-10 md:p-16 grid grid-cols-2 gap-x-8 gap-y-10">
          {services.map(({ title, Icon }) => (
            <div key={title} className="flex items-center gap-4">
              <Icon size={56} strokeWidth={1.25} className="shrink-0" />
              <h3 className="text-xl md:text-2xl font-bold leading-tight">{title}</h3>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

