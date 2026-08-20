import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as motion } from "../_libs/framer-motion.mjs";
import { c as MessageSquare, f as GraduationCap, i as School, p as FileCheck } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services-vtyIyNgU.js
var import_jsx_runtime = require_jsx_runtime();
var BANNER = "https://static.wixstatic.com/media/11062b_9b52a0adb0ac4756a04a9e7aeaa7ce3d~mv2.jpeg/v1/fill/w_1905,h_279,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_9b52a0adb0ac4756a04a9e7aeaa7ce3d~mv2.jpeg";
var services = [
	{
		title: "Counselling",
		Icon: MessageSquare,
		text: "Personalized one-on-one counselling to understand your goals and chart the right path for your journey abroad."
	},
	{
		title: "Visa Processing",
		Icon: FileCheck,
		text: "End-to-end visa documentation and processing support to make the paperwork stress-free."
	},
	{
		title: "Test Preparation",
		Icon: GraduationCap,
		text: "Focused preparation for IELTS, PTE, TOEFL and other exams required for study abroad."
	},
	{
		title: "University Selection",
		Icon: School,
		text: "Guidance on choosing the right university and program aligned with your profile and career goals."
	}
];
var containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { staggerChildren: .12 }
	}
};
var cardVariants = {
	hidden: {
		opacity: 0,
		y: 30
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			type: "spring",
			stiffness: 260,
			damping: 22
		}
	}
};
function Services() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: {
			opacity: 0,
			scale: 1.03
		},
		animate: {
			opacity: 1,
			scale: 1
		},
		transition: { duration: .6 },
		className: "overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: BANNER,
			alt: "",
			className: "w-full h-48 md:h-64 object-cover"
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "max-w-6xl mx-auto px-4 py-14",
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
			className: "text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-4xl font-bold text-navy",
				children: "Our Services"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-center max-w-2xl mx-auto italic text-muted-foreground",
				children: "\"At Tishya Consultancy pvt.ltd, we offer a comprehensive suite of services encompassing immigration and education consultancy.\""
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			variants: containerVariants,
			initial: "hidden",
			animate: "visible",
			className: "mt-12 grid gap-8 md:grid-cols-2",
			children: services.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
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
				className: "flex gap-5 p-6 border rounded-lg bg-background shadow-sm hover:shadow-xl transition-shadow cursor-pointer group",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					whileHover: {
						rotate: 10,
						scale: 1.1
					},
					className: "h-16 w-16 shrink-0 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.Icon, {
						size: 32,
						strokeWidth: 1.5,
						className: "text-primary group-hover:text-white transition-colors duration-300"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-xl font-semibold text-navy group-hover:text-primary transition-colors duration-300",
					children: s.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground leading-relaxed",
					children: s.text
				})] })]
			}, s.title))
		})]
	})] });
}
//#endregion
export { Services as component };
