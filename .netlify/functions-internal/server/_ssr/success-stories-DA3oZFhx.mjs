import { o as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as AnimatePresence, t as motion } from "../_libs/framer-motion.mjs";
import { b as Award, h as CircleCheck, n as X, t as ZoomIn } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/success-stories-DA3oZFhx.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var stories = [
	{
		src: "/success-prince.jpg",
		name: "Prince",
		visa: "UK Visa Approved",
		alt: "Prince - UK Visa Approved"
	},
	{
		src: "/success-sohit-sharma.jpg",
		name: "Sohit Sharma",
		visa: "UK Visa Approved",
		alt: "Sohit Sharma - UK Visa Approved"
	},
	{
		src: "/success-sumit.jpg",
		name: "Sumit",
		visa: "UK Visa Approved",
		alt: "Sumit - UK Visa Approved"
	},
	{
		src: "/success-aarzoo.jpg",
		name: "Aarzoo",
		visa: "UK Visa Approved",
		alt: "Aarzoo - UK Visa Approved"
	},
	{
		src: "/success-pooja.jpg",
		name: "Pooja",
		visa: "UK Study Visa Approved",
		alt: "Pooja (Badsikri, Kaithal) - UK Study Visa Approved"
	},
	{
		src: "/success-anshul-dubai.jpg",
		name: "Anshul",
		visa: "Dubai Freelance Visa Approved",
		alt: "Anshul (Rohtak) - Dubai Freelance Visa Approved"
	},
	{
		src: "/success-ajay-kumar.jpg",
		name: "Ajay Kumar",
		visa: "UK Visa Approved (BPP University)",
		alt: "Ajay Kumar - UK Visa Approved (BPP University)"
	},
	{
		src: "/success-khushi-sharma.jpg",
		name: "Khushi Sharma",
		visa: "UK Visa Approved (BPP University)",
		alt: "Khushi Sharma - UK Visa Approved (BPP University)"
	},
	{
		src: "/success-manju.jpg",
		name: "Manju",
		visa: "UK Study Visa Approved",
		alt: "Manju - UK Study Visa Approved"
	},
	{
		src: "https://static.wixstatic.com/media/3941bc_bdbb5a9c403445aca0dca83f5cfb497b~mv2.jpg/v1/fill/w_400,h_700,fp_0.57_0.18,q_89,enc_avif,quality_auto/3941bc_bdbb5a9c403445aca0dca83f5cfb497b~mv2.jpg",
		name: "Diksha",
		visa: "PTE Score: 65",
		alt: "Diksha - PTE Score 65"
	},
	{
		src: "https://static.wixstatic.com/media/3941bc_8a10446f05314304880048aa2892d973~mv2.jpg/v1/fill/w_400,h_700,fp_0.49_0.18,q_89,enc_avif,quality_auto/3941bc_8a10446f05314304880048aa2892d973~mv2.jpg",
		name: "Khushdeep Kaur",
		visa: "IELTS Score: 6.5",
		alt: "Khushdeep Kaur - IELTS Score 6.5"
	},
	{
		src: "https://static.wixstatic.com/media/3941bc_254e493ad7314b4f8f94eb95c4fd2d99~mv2.jpg/v1/fill/w_400,h_700,fp_0.54_0.18,q_89,enc_avif,quality_auto/3941bc_254e493ad7314b4f8f94eb95c4fd2d99~mv2.jpg",
		name: "Nancy Rana",
		visa: "Canada Study Visa Approved",
		alt: "Nancy Rana - Canada Study Visa Approved"
	}
];
var containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: .07,
			delayChildren: .05
		}
	}
};
var itemVariants = {
	hidden: {
		opacity: 0,
		scale: .9,
		y: 20
	},
	visible: {
		opacity: 1,
		scale: 1,
		y: 0,
		transition: {
			type: "spring",
			stiffness: 240,
			damping: 20
		}
	}
};
function SuccessStories() {
	const [selectedStory, setSelectedStory] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: {
				opacity: 0,
				y: -20
			},
			animate: {
				opacity: 1,
				y: 0
			},
			transition: { duration: .5 },
			className: "text-center max-w-3xl mx-auto",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm font-semibold tracking-wide uppercase mb-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "w-4 h-4 text-primary" }), "Verified Milestones"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-4xl font-extrabold text-navy tracking-tight",
					children: "Success Stories"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-muted-foreground text-base sm:text-lg",
					children: "Celebrating our clients and students who successfully achieved their visa approvals and career dreams."
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			variants: containerVariants,
			initial: "hidden",
			animate: "visible",
			className: "mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6",
			children: stories.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				variants: itemVariants,
				whileHover: {
					y: -6,
					scale: 1.02
				},
				transition: {
					type: "spring",
					stiffness: 300,
					damping: 20
				},
				className: "group relative overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all bg-slate-900 border border-slate-800 flex flex-col cursor-pointer",
				onClick: () => setSelectedStory(item),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative w-full aspect-[4/5] overflow-hidden bg-slate-950",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
							whileHover: { scale: 1.05 },
							transition: { duration: .4 },
							src: item.src,
							alt: item.alt,
							className: "w-full h-full object-cover",
							loading: "lazy"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity z-10",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "p-2 rounded-full bg-slate-950/80 text-amber-400 border border-white/20 backdrop-blur-md inline-flex items-center justify-center shadow-lg",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ZoomIn, { className: "w-4 h-4" })
							})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-4 bg-slate-900 border-t border-white/10 flex flex-col justify-between flex-grow",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
						className: "text-lg font-bold text-white group-hover:text-primary transition-colors flex items-center gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "w-4 h-4 text-emerald-400 shrink-0" }), item.name]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs sm:text-sm font-medium text-amber-400 mt-0.5",
						children: item.visa
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 pt-2 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Tishya Consultancy" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-primary font-semibold group-hover:underline inline-flex items-center gap-1",
							children: "View Photo →"
						})]
					})]
				})]
			}, i))
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: selectedStory && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		className: "fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6",
		onClick: () => setSelectedStory(null),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: {
				scale: .9,
				opacity: 0
			},
			animate: {
				scale: 1,
				opacity: 1
			},
			exit: {
				scale: .9,
				opacity: 0
			},
			transition: {
				type: "spring",
				damping: 25,
				stiffness: 300
			},
			className: "relative max-w-4xl max-h-[90vh] w-full flex flex-col items-center justify-center",
			onClick: (e) => e.stopPropagation(),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setSelectedStory(null),
					className: "absolute -top-12 right-0 p-2 text-white/80 hover:text-white bg-white/10 rounded-full backdrop-blur-sm transition-colors cursor-pointer",
					"aria-label": "Close Preview",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "w-6 h-6" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: selectedStory.src,
					alt: selectedStory.alt,
					className: "max-h-[75vh] w-auto object-contain rounded-xl shadow-2xl border border-white/20"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 bg-slate-900/90 border border-white/15 px-6 py-3 rounded-xl text-center backdrop-blur-md max-w-md w-full shadow-xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-xl font-extrabold text-white",
						children: selectedStory.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold text-amber-400 mt-0.5",
						children: selectedStory.visa
					})]
				})
			]
		})
	}) })] });
}
//#endregion
export { SuccessStories as component };
