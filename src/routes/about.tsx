import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Tishya Consultancy Pvt. Ltd." },
      { name: "description", content: "Over 10 years of experience helping individuals immigrate and study abroad. Learn about Tishya Consultancy's mission and approach." },
      { property: "og:title", content: "About Us — Tishya Consultancy Pvt. Ltd." },
      { property: "og:description", content: "Over 10 years of experience in immigration and education consultancy." },
    ],
  }),
  component: About,
});

const BANNER =
  "https://static.wixstatic.com/media/11062b_9b52a0adb0ac4756a04a9e7aeaa7ce3d~mv2.jpeg/v1/fill/w_1905,h_279,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_9b52a0adb0ac4756a04a9e7aeaa7ce3d~mv2.jpeg";
const PORTRAIT =
  "https://static.wixstatic.com/media/3941bc_9909f0b84552468c89e2c91047f67625~mv2.png/v1/fill/w_415,h_631,al_c,lg_1,q_85,enc_avif,quality_auto/IMG-20240607-WA0002-removebg-preview_edited.png";

const cards = [
  {
    img: "https://static.wixstatic.com/media/3941bc_c6bf3a898ebc4147abb49944ca81c4cd~mv2.png/v1/fill/w_293,h_229,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Screenshot%202024-04-04%20130832.png",
    text: "Tailoring personalized guidance and meticulous attention to detail to ensure each client's unique journey is set for success.",
  },
  {
    img: "https://static.wixstatic.com/media/3941bc_1899a2b902fd46f98938382cafbcbc88~mv2.png/v1/fill/w_293,h_229,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Screenshot%202024-04-04%20130929.png",
    text: "Empowering individuals to explore new horizons through expert education consultancy, for personal and professional growth.",
  },
  {
    img: "https://static.wixstatic.com/media/3941bc_f3149ca253b14cb2bee5fea144a39a06~mv2.png/v1/fill/w_293,h_229,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Screenshot%202024-04-04%20131006.png",
    text: "With unwavering dedication, we've facilitated countless successful transitions, aspirations into tangible achievements on the global stage.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 260, damping: 20 },
  },
};

function About() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 1.02 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="overflow-hidden"
      >
        <img src={BANNER} alt="About banner" className="w-full h-48 md:h-64 object-cover" />
      </motion.div>
      <section className="max-w-5xl mx-auto px-4 py-14">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-navy">About Us</h1>
          <h2 className="text-2xl font-semibold text-primary mt-3">Over 10 years of experience</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 mt-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-4 text-muted-foreground leading-relaxed"
          >
            <p>At Tishya Consultancy Pvt.Ltd, we believe that every individual deserves the chance to explore new horizons and unlock their full potential. Founded on the principles of integrity, expertise, and personalized service, we strive to be the trusted partner for those embarking on journeys of immigration and education.</p>
            <p>With a team of seasoned professionals well-versed in the intricacies of international regulations and academic landscapes, we offer a comprehensive suite of services tailored to meet the diverse needs of our clients. Whether you're seeking to pursue higher education abroad or looking to immigrate for professional or personal reasons, we're here to guide you every step of the way.</p>
            <p>Our approach is centered around understanding your unique aspirations and crafting bespoke solutions to help you achieve them. From initial consultations to the finalization of paperwork, we provide unwavering support and guidance, ensuring a smooth and seamless experience throughout the process.</p>
            <p>At Tishya Consultancy Pvt.Ltd, we pride ourselves on our commitment to excellence, transparency, and client satisfaction. With our proven track record of success and dedication to exceeding expectations, you can trust us to navigate the complexities of immigration and education with confidence.</p>
            <p>Join us in shaping futures and unlocking new possibilities. Let Tishya Consultancy be your partner on the journey to realizing your dreams.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex justify-center"
          >
            <motion.img
              whileHover={{ scale: 1.04 }}
              transition={{ type: "spring" as const, stiffness: 300, damping: 20 }}
              src={PORTRAIT}
              alt="Founder"
              className="max-h-[550px] object-contain drop-shadow"
            />
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mt-16"
        >
          {cards.map((c, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring" as const, stiffness: 300, damping: 20 }}
              className="border rounded-lg overflow-hidden shadow-sm bg-muted cursor-pointer hover:shadow-lg transition-shadow"
            >
              <div className="overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.4 }}
                  src={c.img}
                  alt=""
                  className="w-full h-48 object-cover"
                />
              </div>
              <p className="p-5 text-sm text-muted-foreground leading-relaxed">{c.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  );
}
