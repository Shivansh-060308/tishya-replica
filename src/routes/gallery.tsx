import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Tishya Consultancy Pvt. Ltd." },
      { name: "description", content: "A gallery of moments from Tishya Consultancy — clients, events, and success milestones." },
      { property: "og:title", content: "Gallery — Tishya Consultancy Pvt. Ltd." },
      { property: "og:description", content: "Moments from Tishya Consultancy." },
    ],
  }),
  component: Gallery,
});

const BANNER =
  "https://static.wixstatic.com/media/11062b_9b52a0adb0ac4756a04a9e7aeaa7ce3d~mv2.jpeg/v1/fill/w_1905,h_279,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_9b52a0adb0ac4756a04a9e7aeaa7ce3d~mv2.jpeg";

const images = [
  "https://static.wixstatic.com/media/3941bc_de9c5a1760d74f82b4985cae6330db9c~mv2.jpg/v1/fill/w_480,h_480,fp_0.47_0.33,q_90,enc_avif,quality_auto/3941bc_de9c5a1760d74f82b4985cae6330db9c~mv2.jpg",
  "https://static.wixstatic.com/media/3941bc_38f7aa5c61484559b8c4639490836717~mv2.jpg/v1/fill/w_480,h_479,fp_0.53_0.39,q_90,enc_avif,quality_auto/3941bc_38f7aa5c61484559b8c4639490836717~mv2.jpg",
  "https://static.wixstatic.com/media/3941bc_04f634e9df53462aa02117b9416c0ebd~mv2.jpg/v1/fill/w_480,h_480,fp_0.64_0.42,q_90,enc_avif,quality_auto/3941bc_04f634e9df53462aa02117b9416c0ebd~mv2.jpg",
  "https://static.wixstatic.com/media/3941bc_4780f868dd0a44ac9c21bb3a84de7ea6~mv2.jpg/v1/fill/w_480,h_479,fp_0.34_0.35,q_90,enc_avif,quality_auto/3941bc_4780f868dd0a44ac9c21bb3a84de7ea6~mv2.jpg",
  "https://static.wixstatic.com/media/3941bc_c9dd2cf0bb2a4550b176244177bed276~mv2.jpg/v1/fill/w_480,h_480,fp_0.53_0.39,q_90,enc_avif,quality_auto/3941bc_c9dd2cf0bb2a4550b176244177bed276~mv2.jpg",
  "https://static.wixstatic.com/media/3941bc_9d673127363f480eb5e187695e4eece2~mv2.jpg/v1/fill/w_480,h_480,fp_0.56_0.36,q_90,enc_avif,quality_auto/3941bc_9d673127363f480eb5e187695e4eece2~mv2.jpg",
  "https://static.wixstatic.com/media/3941bc_4ac9bb0124794b4fb666c008c715a2e7~mv2.png/v1/fill/w_480,h_479,fp_0.39_0.37,q_90,enc_avif,quality_auto/3941bc_4ac9bb0124794b4fb666c008c715a2e7~mv2.png",
  "https://static.wixstatic.com/media/3941bc_6cd4e6b7d4354f09a590af5581c8e3b7~mv2.png/v1/fill/w_480,h_480,fp_0.6_0.62,q_90,enc_avif,quality_auto/3941bc_6cd4e6b7d4354f09a590af5581c8e3b7~mv2.png",
  "https://static.wixstatic.com/media/3941bc_89892a029e4d465d823db234153cb4c2~mv2.png/v1/fill/w_480,h_479,fp_0.81_0.73,q_90,enc_avif,quality_auto/3941bc_89892a029e4d465d823db234153cb4c2~mv2.png",
  "https://static.wixstatic.com/media/3941bc_e4e1146e0b28409c864b59842ba62310~mv2.png/v1/fill/w_480,h_480,fp_0.84_0.6,q_90,enc_avif,quality_auto/3941bc_e4e1146e0b28409c864b59842ba62310~mv2.png",
  "https://static.wixstatic.com/media/3941bc_963c6aa321c043309d4b6115bf783de6~mv2.png/v1/fill/w_480,h_480,fp_0.5_0.54,q_90,enc_avif,quality_auto/3941bc_963c6aa321c043309d4b6115bf783de6~mv2.png",
  "https://static.wixstatic.com/media/3941bc_b9ad0c4b8063491bbeb3c780d15431d1~mv2.png/v1/fill/w_480,h_479,fp_0.42_0.6,q_90,enc_avif,quality_auto/3941bc_b9ad0c4b8063491bbeb3c780d15431d1~mv2.png",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 15 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 240, damping: 20 },
  },
};

function Gallery() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 1.02 }}
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
          <h1 className="text-4xl font-bold text-navy">Gallery</h1>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {images.map((src, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -6, scale: 1.04 }}
              transition={{ type: "spring" as const, stiffness: 300, damping: 20 }}
              className="overflow-hidden rounded-lg shadow-sm hover:shadow-xl transition-shadow bg-muted cursor-pointer"
            >
              <motion.img
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.4 }}
                src={src}
                alt={`Gallery ${i + 1}`}
                className="w-full aspect-square object-cover"
                loading="lazy"
              />
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  );
}
