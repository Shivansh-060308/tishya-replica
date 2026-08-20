import { o as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as AnimatePresence, t as motion } from "../_libs/framer-motion.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as ChevronLeft, a as Play, c as MessageSquare, f as GraduationCap, g as ChevronRight, i as School, p as FileCheck, s as Pause, x as ArrowRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DxL5XT9y.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var DEFAULT_SLIDES = [{
	id: "admissions-2026",
	image: "/admissions-poster.jpg",
	alt: "Tishya Consultancy Admissions Open Poster 2026-27",
	badge: "Limited Seats!",
	badgeBg: "bg-red-600 text-white"
}, {
	id: "dubai-expansion",
	image: "/dubai-poster.jpg",
	alt: "Tishya Consultancy Now In Dubai - Global Success",
	badge: "Now in Dubai! 🇦🇪",
	badgeBg: "bg-amber-500 text-slate-950 font-extrabold"
}];
function HeroSlider({ slides = DEFAULT_SLIDES, autoSlideInterval = 3500 }) {
	const [currentIndex, setCurrentIndex] = (0, import_react.useState)(0);
	const [direction, setDirection] = (0, import_react.useState)(1);
	const [isPaused, setIsPaused] = (0, import_react.useState)(false);
	const nextSlide = (0, import_react.useCallback)(() => {
		setDirection(1);
		setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
	}, [slides.length]);
	const prevSlide = (0, import_react.useCallback)(() => {
		setDirection(-1);
		setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
	}, [slides.length]);
	const goToSlide = (index) => {
		setDirection(index > currentIndex ? 1 : -1);
		setCurrentIndex(index);
	};
	(0, import_react.useEffect)(() => {
		if (isPaused || slides.length <= 1) return;
		const timer = setInterval(() => {
			nextSlide();
		}, autoSlideInterval);
		return () => clearInterval(timer);
	}, [
		isPaused,
		nextSlide,
		autoSlideInterval,
		slides.length
	]);
	const slideVariants = {
		enter: (dir) => ({
			x: dir > 0 ? "100%" : "-100%",
			opacity: 0,
			scale: .96
		}),
		center: {
			x: 0,
			opacity: 1,
			scale: 1,
			transition: {
				x: {
					type: "spring",
					stiffness: 280,
					damping: 28
				},
				opacity: { duration: .35 },
				scale: { duration: .35 }
			}
		},
		exit: (dir) => ({
			x: dir < 0 ? "100%" : "-100%",
			opacity: 0,
			scale: .96,
			transition: {
				x: {
					type: "spring",
					stiffness: 280,
					damping: 28
				},
				opacity: { duration: .35 },
				scale: { duration: .35 }
			}
		})
	};
	const currentSlide = slides[currentIndex];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative group max-w-md sm:max-w-lg lg:max-w-full w-full select-none",
		onMouseEnter: () => setIsPaused(true),
		onMouseLeave: () => setIsPaused(false),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-1 bg-gradient-to-r from-primary via-amber-500 to-orange-600 rounded-2xl blur-lg opacity-40 group-hover:opacity-75 transition duration-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative bg-slate-900 border border-white/20 rounded-2xl overflow-hidden shadow-2xl transition-transform duration-300",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative w-full overflow-hidden min-h-[380px] sm:min-h-[480px] lg:min-h-[540px] flex items-center justify-center bg-slate-950",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
						initial: false,
						custom: direction,
						mode: "popLayout",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							custom: direction,
							variants: slideVariants,
							initial: "enter",
							animate: "center",
							exit: "exit",
							className: "w-full h-full flex items-center justify-center p-1 sm:p-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: currentSlide.image,
								alt: currentSlide.alt,
								className: "w-full h-auto object-contain max-h-[540px] rounded-xl mx-auto block drop-shadow-md"
							})
						}, currentSlide.id)
					}),
					currentSlide.badge && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `absolute top-4 right-4 z-20 text-xs font-extrabold px-3 py-1 rounded-full shadow-lg uppercase tracking-wider animate-bounce ${currentSlide.badgeBg || "bg-red-600 text-white"}`,
						children: currentSlide.badge
					}),
					slides.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: prevSlide,
						"aria-label": "Previous Slide",
						className: "absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-slate-950/70 hover:bg-primary text-white hover:text-slate-950 border border-white/20 backdrop-blur-md transition-all opacity-90 sm:opacity-0 group-hover:opacity-100 focus:opacity-100 hover:scale-110 active:scale-95 shadow-md cursor-pointer",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "w-5 h-5 sm:w-6 sm:h-6" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: nextSlide,
						"aria-label": "Next Slide",
						className: "absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-slate-950/70 hover:bg-primary text-white hover:text-slate-950 border border-white/20 backdrop-blur-md transition-all opacity-90 sm:opacity-0 group-hover:opacity-100 focus:opacity-100 hover:scale-110 active:scale-95 shadow-md cursor-pointer",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "w-5 h-5 sm:w-6 sm:h-6" })
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute bottom-3 inset-x-0 z-20 flex items-center justify-center gap-2 px-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 bg-slate-950/75 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 shadow-lg",
							children: [slides.map((s, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => goToSlide(idx),
								"aria-label": `Go to slide ${idx + 1}`,
								className: `h-2.5 rounded-full transition-all duration-300 cursor-pointer ${idx === currentIndex ? "w-7 bg-primary shadow-sm" : "w-2.5 bg-white/40 hover:bg-white/70"}`
							}, s.id)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "ml-1 pl-1.5 border-l border-white/20 text-white/70 flex items-center",
								title: isPaused ? "Paused on hover" : "Auto sliding",
								children: isPaused ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, { className: "w-3 h-3 text-amber-400" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "w-3 h-3 text-emerald-400 animate-pulse" })
							})]
						})
					})
				]
			})
		})]
	});
}
var HERO_BG = "https://static.wixstatic.com/media/3941bc_8f7ab41c49134b46849bc53f2498ed11~mv2.jpg/v1/fit/w_1920,h_1080,q_90,enc_avif,quality_auto/3941bc_8f7ab41c49134b46849bc53f2498ed11~mv2.jpg";
var ABOUT_IMG = "https://static.wixstatic.com/media/3941bc_9909f0b84552468c89e2c91047f67625~mv2.png/v1/fill/w_363,h_561,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG-20240607-WA0002-removebg-preview_edited.png";
var COUNTRIES_BG = "https://static.wixstatic.com/media/4bb9d15d3cae49d4a983a471e5ad6266.jpg/v1/fill/w_1920,h_1080,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/4bb9d15d3cae49d4a983a471e5ad6266.jpg";
var steps = [
	{
		n: "01",
		title: "Apply Online",
		text: "Seamless access to opportunity awaits with just a click. Apply online today and let your aspirations take flight."
	},
	{
		n: "02",
		title: "Submit Documents",
		text: "Effortlessly submit your documents, paving the way for your journey to new horizons."
	},
	{
		n: "03",
		title: "Receive Visa",
		text: "Embark on your adventure as we handle the details - receive your visa with ease and anticipation."
	}
];
var countries = [
	{
		name: "USA",
		flag: "https://flagcdn.com/w80/us.png"
	},
	{
		name: "United Kingdom",
		flag: "https://flagcdn.com/w80/gb.png"
	},
	{
		name: "Germany",
		flag: "https://flagcdn.com/w80/de.png"
	},
	{
		name: "Australia",
		flag: "https://flagcdn.com/w80/au.png"
	},
	{
		name: "Canada",
		flag: "https://flagcdn.com/w80/ca.png"
	},
	{
		name: "New Zealand",
		flag: "https://flagcdn.com/w80/nz.png"
	}
];
var services = [
	{
		title: "Counselling",
		Icon: MessageSquare
	},
	{
		title: "Visa Processing",
		Icon: FileCheck
	},
	{
		title: "Test Preparation",
		Icon: GraduationCap
	},
	{
		title: "University Selection",
		Icon: School
	}
];
var containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: .15,
			delayChildren: .1
		}
	}
};
var itemVariants = {
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
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative min-h-[85vh] flex items-center overflow-hidden bg-navy",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 bg-cover bg-center opacity-25 mix-blend-overlay pointer-events-none",
					style: { backgroundImage: `url(${HERO_BG})` }
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900/80 pointer-events-none" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 w-full",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								x: -40
							},
							animate: {
								opacity: 1,
								x: 0
							},
							transition: {
								duration: .8,
								ease: [
									.16,
									1,
									.3,
									1
								]
							},
							className: "lg:col-span-6 text-white text-center lg:text-left flex flex-col items-center lg:items-start",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/20 border border-primary/40 text-primary text-xs sm:text-sm font-semibold tracking-wide uppercase mb-4 animate-pulse",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-2 h-2 rounded-full bg-primary animate-ping" }), "Admissions Open 2026-27"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
									className: "text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight drop-shadow-md text-white",
									children: ["TISHYA CONSULTANCY ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-primary block sm:inline lg:block",
										children: "PVT. LTD."
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-base sm:text-lg lg:text-xl text-slate-200 italic font-light max-w-xl",
									children: "\"Success is not just about crossing borders; it's about crafting a journey that transforms dreams into realities.\""
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-6 flex flex-wrap gap-2.5 justify-center lg:justify-start text-xs sm:text-sm text-slate-200",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "bg-white/10 px-3 py-1.5 rounded-full backdrop-blur-sm border border-white/15",
											children: "🎓 D.Ed & B.Ed Admissions"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "bg-white/10 px-3 py-1.5 rounded-full backdrop-blur-sm border border-white/15",
											children: "✈️ Overseas Education"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "bg-white/10 px-3 py-1.5 rounded-full backdrop-blur-sm border border-white/15",
											children: "🔒 Visa Counseling"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
										whileHover: { scale: 1.05 },
										whileTap: { scale: .95 },
										className: "w-full sm:w-auto",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/contact",
											className: "w-full sm:w-auto text-center bg-primary text-primary-foreground font-semibold px-8 py-3.5 rounded-md shadow-lg hover:shadow-orange-500/30 transition-all block",
											children: "CONTACT US"
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
										whileHover: { scale: 1.05 },
										whileTap: { scale: .95 },
										className: "w-full sm:w-auto",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "tel:+919991112246",
											className: "w-full sm:w-auto text-center bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3.5 rounded-md backdrop-blur-sm border border-white/20 transition-all flex items-center justify-center gap-2",
											children: "📞 +91 99911 12246"
										})
									})]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							initial: {
								opacity: 0,
								x: 40,
								scale: .95
							},
							animate: {
								opacity: 1,
								x: 0,
								scale: 1
							},
							transition: {
								duration: .8,
								delay: .15,
								ease: [
									.16,
									1,
									.3,
									1
								]
							},
							className: "lg:col-span-6 flex justify-center lg:justify-end w-full",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroSlider, { autoSlideInterval: 3500 })
						})]
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-20 bg-background",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				variants: containerVariants,
				initial: "hidden",
				whileInView: "visible",
				viewport: {
					once: true,
					margin: "-50px"
				},
				className: "max-w-6xl mx-auto px-4 grid gap-6 md:grid-cols-3",
				children: steps.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					variants: itemVariants,
					whileHover: {
						y: -8,
						transition: { duration: .2 }
					},
					className: "border rounded-lg overflow-hidden shadow-sm bg-background hover:shadow-md transition-shadow",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-primary text-primary-foreground px-6 py-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-xs tracking-widest opacity-80 font-bold",
							children: ["STEP ", s.n]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-2xl font-bold",
							children: s.title
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-6 bg-muted text-muted-foreground italic leading-relaxed",
						children: [
							"\"",
							s.text,
							"\""
						]
					})]
				}, s.n))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-20 bg-muted overflow-hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						x: -40
					},
					whileInView: {
						opacity: 1,
						x: 0
					},
					viewport: { once: true },
					transition: {
						duration: .7,
						ease: [
							.16,
							1,
							.3,
							1
						]
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-3xl md:text-4xl font-bold text-navy",
							children: "About Us"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-muted-foreground leading-relaxed",
							children: "\"At Tishya Consultancy pvt.ltd, we are dedicated to facilitating seamless transitions for individuals seeking to explore new horizons through immigration and education opportunities. With our expert guidance and personalized support, we empower dreams to take flight, transforming aspirations into tangible achievements. Trust us to navigate the complexities, and embark on your journey towards a brighter tomorrow with confidence.\""
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							whileHover: { x: 6 },
							className: "inline-block mt-6",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/about",
								className: "text-primary font-semibold hover:underline inline-flex items-center gap-1.5 text-base",
								children: "Read More →"
							})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						opacity: 0,
						scale: .9
					},
					whileInView: {
						opacity: 1,
						scale: 1
					},
					viewport: { once: true },
					transition: {
						duration: .7,
						ease: [
							.16,
							1,
							.3,
							1
						]
					},
					className: "flex justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
						whileHover: { scale: 1.03 },
						transition: {
							type: "spring",
							stiffness: 300,
							damping: 20
						},
						src: ABOUT_IMG,
						alt: "About Tishya Consultancy",
						className: "max-h-[500px] object-contain drop-shadow-md"
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-24 bg-cover bg-center relative overflow-hidden",
			style: { backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${COUNTRIES_BG})` },
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-6xl mx-auto px-4 text-center text-white",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h2, {
					initial: {
						opacity: 0,
						y: -20
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					transition: { duration: .5 },
					className: "text-3xl md:text-4xl font-bold",
					children: "Choose Your Country !"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					variants: containerVariants,
					initial: "hidden",
					whileInView: "visible",
					viewport: { once: true },
					className: "mt-10 grid grid-cols-2 md:grid-cols-3 gap-6",
					children: countries.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						variants: itemVariants,
						whileHover: {
							scale: 1.06,
							backgroundColor: "var(--primary)"
						},
						whileTap: { scale: .97 },
						className: "border border-white/40 rounded-lg py-6 px-4 backdrop-blur-sm bg-white/10 transition-colors flex flex-col items-center gap-3 cursor-pointer group shadow-lg",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
							whileHover: {
								rotate: 3,
								scale: 1.1
							},
							src: c.flag,
							alt: `${c.name} flag`,
							className: "w-14 h-9 object-contain drop-shadow"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-semibold text-lg",
							children: c.name
						})]
					}, c.name))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "grid md:grid-cols-2 overflow-hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					x: -30
				},
				whileInView: {
					opacity: 1,
					x: 0
				},
				viewport: { once: true },
				transition: { duration: .7 },
				className: "bg-primary text-primary-foreground p-10 md:p-16 flex flex-col justify-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-4xl md:text-5xl font-extrabold",
						children: "Our Services"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-1 w-24 bg-primary-foreground/70 mt-3" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-8 italic leading-relaxed max-w-md",
						children: "\"At Tishya Consultancy pvt.ltd, we offer a comprehensive suite of services encompassing immigration and education consultancy.\""
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						whileHover: { scale: 1.04 },
						whileTap: { scale: .96 },
						className: "mt-8 w-fit",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/services",
							className: "inline-flex items-center gap-2 bg-navy text-navy-foreground font-semibold px-6 py-3 rounded shadow hover:shadow-xl transition-shadow",
							children: ["Read More ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 18 })]
						})
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				variants: containerVariants,
				initial: "hidden",
				whileInView: "visible",
				viewport: { once: true },
				className: "bg-navy text-navy-foreground p-10 md:p-16 grid grid-cols-2 gap-x-8 gap-y-10",
				children: services.map(({ title, Icon }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					variants: itemVariants,
					whileHover: {
						x: 6,
						scale: 1.03
					},
					className: "flex items-center gap-4 cursor-pointer group",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						whileHover: {
							rotate: 10,
							scale: 1.15
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
							size: 56,
							strokeWidth: 1.25,
							className: "shrink-0 text-primary transition-colors group-hover:text-white"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-xl md:text-2xl font-bold leading-tight",
						children: title
					})]
				}, title))
			})]
		})
	] });
}
//#endregion
export { Home as component };
