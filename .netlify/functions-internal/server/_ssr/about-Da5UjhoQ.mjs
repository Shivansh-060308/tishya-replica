import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as motion } from "../_libs/framer-motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-Da5UjhoQ.js
var import_jsx_runtime = require_jsx_runtime();
var BANNER = "https://static.wixstatic.com/media/11062b_9b52a0adb0ac4756a04a9e7aeaa7ce3d~mv2.jpeg/v1/fill/w_1905,h_279,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_9b52a0adb0ac4756a04a9e7aeaa7ce3d~mv2.jpeg";
var PORTRAIT = "https://static.wixstatic.com/media/3941bc_9909f0b84552468c89e2c91047f67625~mv2.png/v1/fill/w_415,h_631,al_c,lg_1,q_85,enc_avif,quality_auto/IMG-20240607-WA0002-removebg-preview_edited.png";
var cards = [
	{
		img: "https://static.wixstatic.com/media/3941bc_c6bf3a898ebc4147abb49944ca81c4cd~mv2.png/v1/fill/w_293,h_229,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Screenshot%202024-04-04%20130832.png",
		text: "Tailoring personalized guidance and meticulous attention to detail to ensure each client's unique journey is set for success."
	},
	{
		img: "https://static.wixstatic.com/media/3941bc_1899a2b902fd46f98938382cafbcbc88~mv2.png/v1/fill/w_293,h_229,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Screenshot%202024-04-04%20130929.png",
		text: "Empowering individuals to explore new horizons through expert education consultancy, for personal and professional growth."
	},
	{
		img: "https://static.wixstatic.com/media/3941bc_f3149ca253b14cb2bee5fea144a39a06~mv2.png/v1/fill/w_293,h_229,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Screenshot%202024-04-04%20131006.png",
		text: "With unwavering dedication, we've facilitated countless successful transitions, aspirations into tangible achievements on the global stage."
	}
];
var containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { staggerChildren: .15 }
	}
};
var cardVariants = {
	hidden: {
		opacity: 0,
		y: 25
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			type: "spring",
			stiffness: 260,
			damping: 20
		}
	}
};
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: {
			opacity: 0,
			scale: 1.02
		},
		animate: {
			opacity: 1,
			scale: 1
		},
		transition: { duration: .6 },
		className: "overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: BANNER,
			alt: "About banner",
			className: "w-full h-48 md:h-64 object-cover"
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "max-w-5xl mx-auto px-4 py-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: -20
				},
				animate: {
					opacity: 1,
					y: 0
				},
				transition: { duration: .5 },
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-4xl font-bold text-navy",
					children: "About Us"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl font-semibold text-primary mt-3",
					children: "Over 10 years of experience"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid md:grid-cols-2 gap-10 mt-8 items-start",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						x: -30
					},
					animate: {
						opacity: 1,
						x: 0
					},
					transition: {
						duration: .6,
						delay: .15
					},
					className: "space-y-4 text-muted-foreground leading-relaxed",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "At Tishya Consultancy Pvt.Ltd, we believe that every individual deserves the chance to explore new horizons and unlock their full potential. Founded on the principles of integrity, expertise, and personalized service, we strive to be the trusted partner for those embarking on journeys of immigration and education." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "With a team of seasoned professionals well-versed in the intricacies of international regulations and academic landscapes, we offer a comprehensive suite of services tailored to meet the diverse needs of our clients. Whether you're seeking to pursue higher education abroad or looking to immigrate for professional or personal reasons, we're here to guide you every step of the way." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Our approach is centered around understanding your unique aspirations and crafting bespoke solutions to help you achieve them. From initial consultations to the finalization of paperwork, we provide unwavering support and guidance, ensuring a smooth and seamless experience throughout the process." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "At Tishya Consultancy Pvt.Ltd, we pride ourselves on our commitment to excellence, transparency, and client satisfaction. With our proven track record of success and dedication to exceeding expectations, you can trust us to navigate the complexities of immigration and education with confidence." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Join us in shaping futures and unlocking new possibilities. Let Tishya Consultancy be your partner on the journey to realizing your dreams." })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						opacity: 0,
						scale: .9
					},
					animate: {
						opacity: 1,
						scale: 1
					},
					transition: {
						duration: .6,
						delay: .25
					},
					className: "flex justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
						whileHover: { scale: 1.04 },
						transition: {
							type: "spring",
							stiffness: 300,
							damping: 20
						},
						src: PORTRAIT,
						alt: "Founder",
						className: "max-h-[550px] object-contain drop-shadow"
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				variants: containerVariants,
				initial: "hidden",
				whileInView: "visible",
				viewport: { once: true },
				className: "grid md:grid-cols-3 gap-6 mt-16",
				children: cards.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					variants: cardVariants,
					whileHover: {
						y: -8,
						scale: 1.02
					},
					transition: {
						type: "spring",
						stiffness: 300,
						damping: 20
					},
					className: "border rounded-lg overflow-hidden shadow-sm bg-muted cursor-pointer hover:shadow-lg transition-shadow",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
							whileHover: { scale: 1.08 },
							transition: { duration: .4 },
							src: c.img,
							alt: "",
							className: "w-full h-48 object-cover"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "p-5 text-sm text-muted-foreground leading-relaxed",
						children: c.text
					})]
				}, i))
			})
		]
	})] });
}
//#endregion
export { About as component };
