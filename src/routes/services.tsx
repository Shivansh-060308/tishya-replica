import { createFileRoute } from "@tanstack/react-router";
import { MessageSquare, FileCheck, GraduationCap, School, type LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services — Tishya Consultancy Pvt. Ltd." },
      { name: "description", content: "Counselling, visa processing, test preparation and university selection — a full suite of immigration and education consultancy services." },
      { property: "og:title", content: "Our Services — Tishya Consultancy Pvt. Ltd." },
      { property: "og:description", content: "A comprehensive suite of immigration and education consultancy services." },
    ],
  }),
  component: Services,
});

const BANNER =
  "https://static.wixstatic.com/media/11062b_9b52a0adb0ac4756a04a9e7aeaa7ce3d~mv2.jpeg/v1/fill/w_1905,h_279,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_9b52a0adb0ac4756a04a9e7aeaa7ce3d~mv2.jpeg";

const services: { title: string; Icon: LucideIcon; text: string }[] = [
  { title: "Counselling", Icon: MessageSquare, text: "Personalized one-on-one counselling to understand your goals and chart the right path for your journey abroad." },
  { title: "Visa Processing", Icon: FileCheck, text: "End-to-end visa documentation and processing support to make the paperwork stress-free." },
  { title: "Test Preparation", Icon: GraduationCap, text: "Focused preparation for IELTS, PTE, TOEFL and other exams required for study abroad." },
  { title: "University Selection", Icon: School, text: "Guidance on choosing the right university and program aligned with your profile and career goals." },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 260, damping: 22 },
  },
};

function Services() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 1.03 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="overflow-hidden"
      >
        <img src={BANNER} alt="" className="w-full h-48 md:h-64 object-cover" />
      </motion.div>
      <section className="max-w-6xl mx-auto px-4 py-14">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold text-navy">Our Services</h1>
          <p className="mt-4 text-center max-w-2xl mx-auto italic text-muted-foreground">
            "At Tishya Consultancy pvt.ltd, we offer a comprehensive suite of services encompassing immigration and education consultancy."
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mt-12 grid gap-8 md:grid-cols-2"
        >
          {services.map((s) => (
            <motion.div
              key={s.title}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring" as const, stiffness: 300, damping: 20 }}
              className="flex gap-5 p-6 border rounded-lg bg-background shadow-sm hover:shadow-xl transition-shadow cursor-pointer group"
            >
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                className="h-16 w-16 shrink-0 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300"
              >
                <s.Icon size={32} strokeWidth={1.5} className="text-primary group-hover:text-white transition-colors duration-300" />
              </motion.div>
              <div>
                <h3 className="text-xl font-semibold text-navy group-hover:text-primary transition-colors duration-300">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.text}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  );
}
