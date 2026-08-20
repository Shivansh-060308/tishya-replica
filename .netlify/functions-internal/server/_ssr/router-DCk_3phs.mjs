import { o as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { n as AnimatePresence, t as motion } from "../_libs/framer-motion.mjs";
import { _ as useRouter, c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, l as useLocation, m as createFileRoute, p as lazyRouteComponent, s as Scripts } from "../_libs/@tanstack/react-router+[...].mjs";
import { f as GraduationCap, m as Facebook, o as Phone, r as Sparkles, u as Instagram, x as ArrowRight } from "../_libs/lucide-react.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-DCk_3phs.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-Ccv5G6QK.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	window.__lovableReportRuntimeError?.({
		message,
		stack: error instanceof Error ? error.stack : void 0,
		filename: window.location.pathname
	});
}
function AdmissionsScroller() {
	const scrollerItems = [
		{
			text: "D.Ed , B.Ed Admissions Open",
			badge: "Session 2026-27"
		},
		{
			text: "Direct Admission Guidance Available",
			badge: "Top Colleges"
		},
		{
			text: "D.Ed , B.Ed Admissions Open",
			badge: "Apply Now"
		},
		{
			text: "Call for Inquiry: +91 9992000536",
			badge: "Contact Us"
		}
	];
	const tickerList = [
		...scrollerItems,
		...scrollerItems,
		...scrollerItems,
		...scrollerItems
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "w-full bg-yellow-400 text-navy border-y border-yellow-500/40 py-2.5 overflow-hidden shadow-sm relative group select-none z-30",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-amber-300/30 via-yellow-200/20 to-amber-300/30 pointer-events-none" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hidden sm:flex items-center gap-1.5 px-3.5 py-1 bg-navy text-yellow-300 text-xs font-extrabold tracking-wider uppercase rounded-r-full shrink-0 z-10 shadow-md",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "relative flex h-2 w-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex rounded-full h-2 w-2 bg-yellow-400" })]
					}), "LATEST ANNOUNCEMENT"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden w-full flex",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "animate-marquee flex items-center shrink-0 gap-8 whitespace-nowrap",
						children: tickerList.map((item, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 text-xs sm:text-sm md:text-base font-bold",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-1.5 text-navy font-extrabold tracking-wide",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, { className: "w-4 h-4 text-navy shrink-0" }), item.text]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "bg-navy/15 text-navy border border-navy/20 px-2 py-0.5 rounded text-[10px] sm:text-xs font-extrabold uppercase tracking-wider",
									children: item.badge
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-3.5 h-3.5 text-amber-800 shrink-0 ml-2" })
							]
						}, idx))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/contact",
					className: "hidden md:flex items-center gap-1.5 px-4 py-1.5 bg-navy hover:bg-slate-800 text-yellow-300 text-xs font-bold uppercase tracking-wider rounded-l-full shrink-0 z-10 shadow-md transition-colors ml-auto group/cta",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Apply" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "w-3.5 h-3.5 group-hover/cta:translate-x-0.5 transition-transform" })]
				})
			]
		})]
	});
}
var LOGO_URL = "/tishya-logo.png";
var navItems = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/about",
		label: "About"
	},
	{
		to: "/dubai-branch",
		label: "Dubai Branch"
	},
	{
		to: "/success-stories",
		label: "Success Stories"
	},
	{
		to: "/services",
		label: "Services"
	},
	{
		to: "/gallery",
		label: "Gallery"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
function TopBar() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "w-full bg-navy text-navy-foreground text-sm",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto px-4 py-2 flex justify-between items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "flex items-center gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { size: 14 }),
					"Call us at :",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "tel:+919992000536",
						className: "underline hover:text-primary",
						children: "+91 9992000536"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-3 items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "https://www.facebook.com/tishyaconsultancy",
					"aria-label": "Facebook",
					className: "hover:text-primary",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Facebook, { size: 16 })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "https://www.instagram.com/tishyaconsultancy/",
					"aria-label": "Instagram",
					className: "hover:text-primary",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { size: 16 })
				})]
			})]
		})
	});
}
function Header() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "w-full bg-background border-b sticky top-0 z-40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4 flex-wrap",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/",
				className: "flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: LOGO_URL,
					alt: "Tishya Consultancy",
					className: "h-14 w-auto"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "leading-tight",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-bold text-lg tracking-tight",
						children: "TISHYA CONSULTANCY PVT.LTD"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs text-muted-foreground",
						children: "Education Consultants"
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium",
				children: navItems.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: n.to,
					className: "hover:text-primary transition-colors",
					activeProps: { className: "text-primary font-semibold" },
					activeOptions: { exact: true },
					children: n.label
				}, n.to))
			})]
		})
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "bg-navy text-navy-foreground mt-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto px-4 py-10 grid gap-8 md:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-primary text-lg font-bold mb-3",
						children: "Contact"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm mb-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Corporate Office:" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"C-157, Industrial Area, Phase 7, Mohali, Chandigarh"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm mb-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Branch Offices:" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Opp. New Bus Stand, DD colony, Kurukshetra",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"SCO 1, First Floor, Huda Complex, DC Colony, Jind"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm mb-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Dubai Branch (Ttishya Consultancy FZE):" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Business Centre, Sharjah Publishing City Free Zone, Sharjah, UAE",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Contact: +971-525253366"
						]
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-primary text-lg font-bold mb-3",
						children: "Reach Us"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "tel:+919992000536",
							className: "hover:text-primary",
							children: "+91 9992000536"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "mailto:info@tishyaconsultancy.com",
							className: "hover:text-primary",
							children: "info@tishyaconsultancy.com"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-4 mt-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "https://www.facebook.com/tishyaconsultancy",
							className: "hover:text-primary",
							children: "Facebook"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "https://www.instagram.com/tishyaconsultancy/",
							className: "hover:text-primary",
							children: "Instagram"
						})]
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-primary text-lg font-bold mb-3",
					children: "Quick Links"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "text-sm space-y-1",
					children: navItems.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: n.to,
						className: "hover:text-primary",
						children: n.label
					}) }, n.to))
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "border-t border-white/10 py-4 text-center text-xs",
			children: [
				"© ",
				(/* @__PURE__ */ new Date()).getFullYear(),
				" Tishya Consultancy Pvt. Ltd. All rights reserved."
			]
		})]
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-xl font-semibold",
				children: "This page didn't load"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex flex-wrap justify-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => {
						router.invalidate();
						reset();
					},
					className: "rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90",
					children: "Try again"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "/",
					className: "rounded-md border px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
					children: "Go home"
				})]
			})]
		})
	});
}
var Route$7 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Tishya Consultancy Pvt. Ltd. — Immigration & Education Consultants" },
			{
				name: "description",
				content: "Tishya Consultancy Pvt. Ltd. helps individuals achieve their immigration and study-abroad goals with expert counselling, visa processing, and university selection."
			},
			{
				property: "og:title",
				content: "Tishya Consultancy Pvt. Ltd."
			},
			{
				property: "og:description",
				content: "Immigration and education consultancy — turning dreams into realities."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: ""
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$7.useRouteContext();
	const location = useLocation();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-h-screen flex flex-col overflow-x-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopBar, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdmissionsScroller, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
					mode: "wait",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.main, {
						initial: {
							opacity: 0,
							y: 12
						},
						animate: {
							opacity: 1,
							y: 0
						},
						exit: {
							opacity: 0,
							y: -12
						},
						transition: {
							duration: .35,
							ease: [
								.22,
								1,
								.36,
								1
							]
						},
						className: "flex-1",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
					}, location.pathname)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
			]
		})
	});
}
var $$splitComponentImporter$6 = () => import("./routes-DxL5XT9y.mjs");
var Route$6 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Home — Tishya Consultancy Pvt. Ltd." },
		{
			name: "description",
			content: "Immigration and education consultancy — turning dreams into realities. Study in USA, UK, Canada, Australia, Germany and New Zealand."
		},
		{
			property: "og:title",
			content: "Home — Tishya Consultancy Pvt. Ltd."
		},
		{
			property: "og:description",
			content: "Immigration and education consultancy — turning dreams into realities."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./about-Da5UjhoQ.mjs");
var Route$5 = createFileRoute("/about")({
	head: () => ({ meta: [
		{ title: "About Us — Tishya Consultancy Pvt. Ltd." },
		{
			name: "description",
			content: "Over 10 years of experience helping individuals immigrate and study abroad. Learn about Tishya Consultancy's mission and approach."
		},
		{
			property: "og:title",
			content: "About Us — Tishya Consultancy Pvt. Ltd."
		},
		{
			property: "og:description",
			content: "Over 10 years of experience in immigration and education consultancy."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./contact-Cky89dpw.mjs");
var Route$4 = createFileRoute("/contact")({
	head: () => ({ meta: [
		{ title: "Contact — Tishya Consultancy Pvt. Ltd." },
		{
			name: "description",
			content: "Get in touch with Tishya Consultancy Pvt. Ltd. — offices in Mohali, Kurukshetra and Jind. Call +91 9992000536."
		},
		{
			property: "og:title",
			content: "Contact — Tishya Consultancy Pvt. Ltd."
		},
		{
			property: "og:description",
			content: "Get in touch — offices in Mohali, Kurukshetra and Jind."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./dubai-branch-TltYEVVc.mjs");
var Route$3 = createFileRoute("/dubai-branch")({
	head: () => ({ meta: [
		{ title: "Dubai Branch — Ttishya Consultancy FZE" },
		{
			name: "description",
			content: "Ttishya Consultancy FZE - Dubai Branch. Global talent placement, study visa, and overseas career guidance in UAE."
		},
		{
			property: "og:title",
			content: "Dubai Branch — Ttishya Consultancy FZE"
		},
		{
			property: "og:description",
			content: "Ttishya Consultancy FZE - Dubai Branch. Global talent placement and career guidance."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./gallery-DCrZ5zZC.mjs");
var Route$2 = createFileRoute("/gallery")({
	head: () => ({ meta: [
		{ title: "Gallery — Tishya Consultancy Pvt. Ltd." },
		{
			name: "description",
			content: "A gallery of moments from Tishya Consultancy — clients, events, and success milestones."
		},
		{
			property: "og:title",
			content: "Gallery — Tishya Consultancy Pvt. Ltd."
		},
		{
			property: "og:description",
			content: "Moments from Tishya Consultancy."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./services-vtyIyNgU.mjs");
var Route$1 = createFileRoute("/services")({
	head: () => ({ meta: [
		{ title: "Our Services — Tishya Consultancy Pvt. Ltd." },
		{
			name: "description",
			content: "Counselling, visa processing, test preparation and university selection — a full suite of immigration and education consultancy services."
		},
		{
			property: "og:title",
			content: "Our Services — Tishya Consultancy Pvt. Ltd."
		},
		{
			property: "og:description",
			content: "A comprehensive suite of immigration and education consultancy services."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./success-stories-DA3oZFhx.mjs");
var Route = createFileRoute("/success-stories")({
	head: () => ({ meta: [
		{ title: "Success Stories — Tishya Consultancy Pvt. Ltd." },
		{
			name: "description",
			content: "Real success stories of students and professionals we've helped move, study and thrive abroad."
		},
		{
			property: "og:title",
			content: "Success Stories — Tishya Consultancy Pvt. Ltd."
		},
		{
			property: "og:description",
			content: "Real success stories from Tishya Consultancy clients."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$6.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$7
	}),
	AboutRoute: Route$5.update({
		id: "/about",
		path: "/about",
		getParentRoute: () => Route$7
	}),
	ContactRoute: Route$4.update({
		id: "/contact",
		path: "/contact",
		getParentRoute: () => Route$7
	}),
	DubaiBranchRoute: Route$3.update({
		id: "/dubai-branch",
		path: "/dubai-branch",
		getParentRoute: () => Route$7
	}),
	GalleryRoute: Route$2.update({
		id: "/gallery",
		path: "/gallery",
		getParentRoute: () => Route$7
	}),
	ServicesRoute: Route$1.update({
		id: "/services",
		path: "/services",
		getParentRoute: () => Route$7
	}),
	SuccessStoriesRoute: Route.update({
		id: "/success-stories",
		path: "/success-stories",
		getParentRoute: () => Route$7
	})
};
var routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
