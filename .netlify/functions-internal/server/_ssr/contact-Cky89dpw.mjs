import { o as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as AnimatePresence, t as motion } from "../_libs/framer-motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-Cky89dpw.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var BANNER = "https://static.wixstatic.com/media/fa0718dd1ddb4fc7a84cfd64cd424fc1.jpg/v1/fill/w_1905,h_261,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/fa0718dd1ddb4fc7a84cfd64cd424fc1.jpg";
var FORMSUBMIT_URL = "https://formsubmit.co/ajax/info@tishyaconsultancy.com";
function Contact() {
	const [submitted, setSubmitted] = (0, import_react.useState)(false);
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [subscribed, setSubscribed] = (0, import_react.useState)(false);
	const handleSubmit = async (e) => {
		e.preventDefault();
		setSubmitting(true);
		setError("");
		const form = e.currentTarget;
		const formData = new FormData(form);
		try {
			if ((await fetch(FORMSUBMIT_URL, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json"
				},
				body: JSON.stringify({
					_subject: "New Contact Form Submission — Tishya Consultancy",
					_cc: "socializeme11@gmail.com",
					_template: "table",
					firstName: formData.get("firstName"),
					lastName: formData.get("lastName"),
					email: formData.get("email"),
					message: formData.get("message")
				})
			})).ok) {
				setSubmitted(true);
				form.reset();
			} else setError("Something went wrong. Please try again.");
		} catch {
			setError("Network error. Please check your connection and try again.");
		} finally {
			setSubmitting(false);
		}
	};
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
			alt: "",
			className: "w-full h-48 md:h-64 object-cover"
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "max-w-6xl mx-auto px-4 py-14 grid md:grid-cols-2 gap-12",
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
				delay: .1
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-4xl font-bold text-navy",
				children: "CONTACT"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 space-y-6 text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-semibold text-lg text-navy",
						children: "Corporate Office"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground mt-1",
						children: "C-157, Industrial Area, Phase 7, Mohali, Chandigarh"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-semibold text-lg text-navy",
							children: "Branch Offices (India)"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground mt-1",
							children: "Opp. New Bus Stand, DD colony, Kurukshetra"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground mt-1",
							children: "SCO 1, First Floor, Huda Complex, DC Colony, Jind"
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-semibold text-lg text-navy",
							children: "Dubai Branch (Ttishya Consultancy FZE)"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground mt-1",
							children: "Business Centre, Sharjah Publishing City Free Zone, Sharjah, United Arab Emirates"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-muted-foreground mt-1",
							children: ["Contact: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "tel:+971525253366",
								className: "text-primary font-semibold hover:underline",
								children: "+971-525253366"
							})]
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "tel:+919992000536",
						className: "text-primary font-semibold hover:underline",
						children: "+91 9992000536"
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "mailto:info@tishyaconsultancy.com",
						className: "text-primary font-semibold hover:underline",
						children: "info@tishyaconsultancy.com"
					}) })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.a, {
							whileHover: { scale: 1.08 },
							href: "https://www.facebook.com/tishyaconsultancy",
							className: "hover:text-primary transition-colors inline-block",
							children: "Facebook"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.a, {
							whileHover: { scale: 1.08 },
							href: "https://www.instagram.com/tishyaconsultancy/",
							className: "hover:text-primary transition-colors inline-block",
							children: "Instagram"
						})]
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: {
				opacity: 0,
				x: 30
			},
			animate: {
				opacity: 1,
				x: 0
			},
			transition: {
				duration: .6,
				delay: .2
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
				mode: "wait",
				children: submitted ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						scale: .95
					},
					animate: {
						opacity: 1,
						scale: 1
					},
					exit: {
						opacity: 0,
						scale: .95
					},
					className: "border rounded-lg p-8 bg-muted text-center shadow-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-4xl mb-4",
							children: "✅"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-2xl font-bold text-navy",
							children: "Thank You!"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-muted-foreground",
							children: "Your message has been sent successfully. We'll get back to you soon."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.button, {
							whileHover: { scale: 1.05 },
							whileTap: { scale: .95 },
							onClick: () => setSubmitted(false),
							className: "mt-6 bg-primary text-primary-foreground px-6 py-2 rounded font-semibold hover:shadow-lg transition-shadow",
							children: "Send Another Message"
						})
					]
				}, "thank-you") : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.form, {
					initial: { opacity: 0 },
					animate: { opacity: 1 },
					onSubmit: handleSubmit,
					className: "space-y-4 border rounded-lg p-6 bg-muted shadow-sm hover:shadow-md transition-shadow",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								name: "firstName",
								required: true,
								placeholder: "First Name",
								className: "w-full px-3 py-2 rounded border bg-background focus:ring-2 focus:ring-primary focus:outline-none transition-all"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								name: "lastName",
								required: true,
								placeholder: "Last Name",
								className: "w-full px-3 py-2 rounded border bg-background focus:ring-2 focus:ring-primary focus:outline-none transition-all"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							name: "email",
							required: true,
							type: "email",
							placeholder: "Email",
							className: "w-full px-3 py-2 rounded border bg-background focus:ring-2 focus:ring-primary focus:outline-none transition-all"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							name: "message",
							required: true,
							placeholder: "Message",
							rows: 5,
							className: "w-full px-3 py-2 rounded border bg-background focus:ring-2 focus:ring-primary focus:outline-none transition-all"
						}),
						error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-red-600 font-medium",
							children: error
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.button, {
							whileHover: { scale: 1.03 },
							whileTap: { scale: .97 },
							type: "submit",
							disabled: submitting,
							className: "bg-primary text-primary-foreground px-6 py-2 rounded font-semibold shadow hover:shadow-md transition-shadow disabled:opacity-50 disabled:cursor-not-allowed",
							children: submitting ? "Sending..." : "Send"
						})
					]
				}, "contact-form")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				whileHover: { y: -4 },
				transition: {
					type: "spring",
					stiffness: 300,
					damping: 20
				},
				className: "mt-8 border rounded-lg p-6 bg-background shadow-sm hover:shadow-md transition-shadow",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xl font-bold text-navy",
						children: "JOIN THE MAILING LIST"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: (e) => {
							e.preventDefault();
							setSubscribed(true);
						},
						className: "mt-4 flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							required: true,
							type: "email",
							value: email,
							onChange: (e) => setEmail(e.target.value),
							placeholder: "Enter your email here",
							className: "flex-1 px-3 py-2 rounded border bg-background focus:ring-2 focus:ring-primary focus:outline-none transition-all"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.button, {
							whileHover: { scale: 1.05 },
							whileTap: { scale: .95 },
							className: "bg-navy text-navy-foreground px-5 py-2 rounded font-semibold hover:opacity-95",
							children: "Subscribe"
						})]
					}),
					subscribed && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-primary font-medium",
						children: "Thanks for subscribing!"
					})
				]
			})]
		})]
	})] });
}
//#endregion
export { Contact as component };
