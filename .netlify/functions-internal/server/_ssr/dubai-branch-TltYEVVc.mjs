import { o as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as AnimatePresence, t as motion } from "../_libs/framer-motion.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as Image, l as MapPin, n as X, o as Phone, r as Sparkles, t as ZoomIn, v as Building2, x as ArrowRight, y as Briefcase } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dubai-branch-TltYEVVc.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var DUBAI_PHOTOS = [{
	id: "dubai-poster-1",
	src: "/dubai-poster.jpg",
	title: "Ttishya Consultancy FZE - Dubai Launch",
	subtitle: "From Local Talent to Global Success",
	category: "Official Announcement",
	date: "2026"
}];
var containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: .1,
			delayChildren: .1
		}
	}
};
var itemVariants = {
	hidden: {
		opacity: 0,
		y: 20,
		scale: .95
	},
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: {
			type: "spring",
			stiffness: 260,
			damping: 20
		}
	}
};
function DubaiBranch() {
	const [selectedPhoto, setSelectedPhoto] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative bg-navy py-16 lg:py-20 overflow-hidden text-white",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-slate-950 via-navy to-slate-900 opacity-90" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: -25
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: { duration: .7 },
						className: "text-center max-w-3xl mx-auto",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-4 h-4 text-amber-400" }), "International Presence"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight",
								children: ["DUBAI ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-primary",
									children: "BRANCH"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-lg sm:text-xl text-slate-200 font-medium",
								children: "Ttishya Consultancy FZE — From Local Talent to Global Success"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 flex flex-wrap justify-center gap-3 text-xs sm:text-sm text-slate-200",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-1.5 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/15 backdrop-blur-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, { className: "w-4 h-4 text-primary" }), "Sharjah Publishing City Free Zone, UAE"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-1.5 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/15 backdrop-blur-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "w-4 h-4 text-amber-400" }), "+971-525253366"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-1.5 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/15 backdrop-blur-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Briefcase, { className: "w-4 h-4 text-emerald-400" }), "Placements & Overseas Guidance"]
									})
								]
							})
						]
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-slate-900 border border-white/10 rounded-2xl p-6 sm:p-8 text-white shadow-xl mb-12 relative overflow-hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-12 -bottom-12 w-64 h-64 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid md:grid-cols-12 gap-6 items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "md:col-span-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-amber-400 text-xs font-bold uppercase tracking-wider",
									children: "Branch Details"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-2xl sm:text-3xl font-bold mt-1 text-white",
									children: "Ttishya Consultancy FZE"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-slate-300 mt-2 text-sm sm:text-base leading-relaxed",
									children: "Our Dubai branch expands our commitment to connecting local talent with global career and placement opportunities across the United Arab Emirates and worldwide."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 grid sm:grid-cols-2 gap-3 text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start gap-2.5 text-slate-200",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "w-5 h-5 text-primary shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-semibold text-white block",
											children: "Address"
										}), "Business Centre, Sharjah Publishing City Free Zone, Sharjah, United Arab Emirates"] })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start gap-2.5 text-slate-200",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "w-5 h-5 text-amber-400 shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-semibold text-white block",
											children: "Direct Contact"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "tel:+971525253366",
											className: "hover:text-amber-400 transition-colors font-medium",
											children: "+971-525253366"
										})] })]
									})]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "md:col-span-4 flex flex-col justify-center gap-3 border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/contact",
								className: "w-full text-center bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-5 py-3 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Inquire For Placements" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "w-4 h-4" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "tel:+971525253366",
								className: "w-full text-center bg-white/10 hover:bg-white/20 text-white font-semibold px-5 py-3 rounded-xl border border-white/15 backdrop-blur-sm transition-all flex items-center justify-center gap-2 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "w-4 h-4 text-amber-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Call Dubai Office" })]
							})]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between flex-wrap gap-4 mb-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl sm:text-3xl font-bold text-navy",
						children: "Dubai Branch Gallery"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground text-sm mt-1",
						children: "Highlights, announcements, and events from Ttishya Consultancy FZE."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs text-muted-foreground bg-muted px-3 py-1.5 rounded-full font-medium border border-border",
						children: "📸 More photos will be added soon"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					variants: containerVariants,
					initial: "hidden",
					animate: "visible",
					className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
					children: [DUBAI_PHOTOS.map((photo) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						variants: itemVariants,
						whileHover: { y: -6 },
						className: "group relative bg-slate-950 rounded-2xl overflow-hidden shadow-lg border border-slate-800 cursor-pointer",
						onClick: () => setSelectedPhoto(photo.src),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative aspect-[4/5] overflow-hidden bg-slate-900",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: photo.src,
									alt: photo.title,
									className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500",
									loading: "lazy"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute top-3 right-3 bg-amber-500 text-slate-950 text-xs font-extrabold px-3 py-1 rounded-full shadow-md uppercase tracking-wider",
									children: photo.category
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute bottom-0 inset-x-0 p-5 text-white",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-bold text-lg leading-snug group-hover:text-amber-400 transition-colors",
											children: photo.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-slate-300 mt-1",
											children: photo.subtitle
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-3 flex items-center justify-between text-xs text-amber-300 font-semibold pt-3 border-t border-white/10",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "inline-flex items-center gap-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ZoomIn, { className: "w-3.5 h-3.5" }), " Tap to view full poster"]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: photo.date })]
										})
									]
								})
							]
						})
					}, photo.id)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						variants: itemVariants,
						className: "border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-2xl p-8 flex flex-col items-center justify-center text-center bg-muted/30 min-h-[360px] group hover:border-primary transition-colors",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-3 group-hover:scale-110 transition-transform",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, { className: "w-7 h-7" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "font-semibold text-navy text-base",
								children: "More Photos Coming Soon"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground mt-1 max-w-xs",
								children: "Additional branch event photos, placement achievements, and team moments will be added here."
							})
						]
					})]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: selectedPhoto && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			initial: { opacity: 0 },
			animate: { opacity: 1 },
			exit: { opacity: 0 },
			className: "fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6",
			onClick: () => setSelectedPhoto(null),
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
				className: "relative max-w-4xl max-h-[90vh] w-full flex items-center justify-center",
				onClick: (e) => e.stopPropagation(),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setSelectedPhoto(null),
					className: "absolute -top-12 right-0 p-2 text-white/80 hover:text-white bg-white/10 rounded-full backdrop-blur-sm transition-colors cursor-pointer",
					"aria-label": "Close Preview",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "w-6 h-6" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: selectedPhoto,
					alt: "Dubai Poster Full Preview",
					className: "max-h-[85vh] w-auto object-contain rounded-xl shadow-2xl border border-white/20"
				})]
			})
		}) })
	] });
}
//#endregion
export { DubaiBranch as component };
