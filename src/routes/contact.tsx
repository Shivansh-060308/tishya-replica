import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Tishya Consultancy Pvt. Ltd." },
      { name: "description", content: "Get in touch with Tishya Consultancy Pvt. Ltd. — offices in Mohali, Kurukshetra and Jind. Call +91 9992000536." },
      { property: "og:title", content: "Contact — Tishya Consultancy Pvt. Ltd." },
      { property: "og:description", content: "Get in touch — offices in Mohali, Kurukshetra and Jind." },
    ],
  }),
  component: Contact,
});

const BANNER =
  "https://static.wixstatic.com/media/fa0718dd1ddb4fc7a84cfd64cd424fc1.jpg/v1/fill/w_1905,h_261,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/fa0718dd1ddb4fc7a84cfd64cd424fc1.jpg";

// FormSubmit.co endpoint — submissions go to info@tishyaconsultancy.com
const FORMSUBMIT_URL = "https://formsubmit.co/ajax/info@tishyaconsultancy.com";

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch(FORMSUBMIT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: "New Contact Form Submission — Tishya Consultancy",
          _cc: "socializeme11@gmail.com",
          _template: "table",
          firstName: formData.get("firstName"),
          lastName: formData.get("lastName"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });

      if (res.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  };

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
      <section className="max-w-6xl mx-auto px-4 py-14 grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h1 className="text-4xl font-bold text-navy">CONTACT</h1>
          <div className="mt-8 space-y-6 text-sm">
            <div>
              <h3 className="font-semibold text-lg text-navy">Corporate Office</h3>
              <p className="text-muted-foreground mt-1">C-157, Industrial Area, Phase 7, Mohali, Chandigarh</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-navy">Branch Offices (India)</h3>
              <p className="text-muted-foreground mt-1">Opp. New Bus Stand, DD colony, Kurukshetra</p>
              <p className="text-muted-foreground mt-1">SCO 1, First Floor, Huda Complex, DC Colony, Jind</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-navy">Dubai Branch (Ttishya Consultancy FZE)</h3>
              <p className="text-muted-foreground mt-1">Business Centre, Sharjah Publishing City Free Zone, Sharjah, United Arab Emirates</p>
              <p className="text-muted-foreground mt-1">Contact: <a href="tel:+971525253366" className="text-primary font-semibold hover:underline">+971-525253366</a></p>
            </div>
            <div>
              <p><a href="tel:+919992000536" className="text-primary font-semibold hover:underline">+91 9992000536</a></p>
              <p><a href="mailto:info@tishyaconsultancy.com" className="text-primary font-semibold hover:underline">info@tishyaconsultancy.com</a></p>
            </div>
            <div className="flex gap-4">
              <motion.a whileHover={{ scale: 1.08 }} href="https://www.facebook.com/tishyaconsultancy" className="hover:text-primary transition-colors inline-block">Facebook</motion.a>
              <motion.a whileHover={{ scale: 1.08 }} href="https://www.instagram.com/tishyaconsultancy/" className="hover:text-primary transition-colors inline-block">Instagram</motion.a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="thank-you"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="border rounded-lg p-8 bg-muted text-center shadow-sm"
              >
                <div className="text-4xl mb-4">✅</div>
                <h2 className="text-2xl font-bold text-navy">Thank You!</h2>
                <p className="mt-2 text-muted-foreground">Your message has been sent successfully. We'll get back to you soon.</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSubmitted(false)}
                  className="mt-6 bg-primary text-primary-foreground px-6 py-2 rounded font-semibold hover:shadow-lg transition-shadow"
                >
                  Send Another Message
                </motion.button>
              </motion.div>
            ) : (
              <motion.form
                key="contact-form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onSubmit={handleSubmit}
                className="space-y-4 border rounded-lg p-6 bg-muted shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="grid grid-cols-2 gap-4">
                  <input name="firstName" required placeholder="First Name" className="w-full px-3 py-2 rounded border bg-background focus:ring-2 focus:ring-primary focus:outline-none transition-all" />
                  <input name="lastName" required placeholder="Last Name" className="w-full px-3 py-2 rounded border bg-background focus:ring-2 focus:ring-primary focus:outline-none transition-all" />
                </div>
                <input name="email" required type="email" placeholder="Email" className="w-full px-3 py-2 rounded border bg-background focus:ring-2 focus:ring-primary focus:outline-none transition-all" />
                <textarea name="message" required placeholder="Message" rows={5} className="w-full px-3 py-2 rounded border bg-background focus:ring-2 focus:ring-primary focus:outline-none transition-all" />
                {error && <p className="text-sm text-red-600 font-medium">{error}</p>}
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  disabled={submitting}
                  className="bg-primary text-primary-foreground px-6 py-2 rounded font-semibold shadow hover:shadow-md transition-shadow disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitting ? "Sending..." : "Send"}
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>

          <motion.div
            whileHover={{ y: -4 }}
            transition={{ type: "spring" as const, stiffness: 300, damping: 20 }}
            className="mt-8 border rounded-lg p-6 bg-background shadow-sm hover:shadow-md transition-shadow"
          >
            <h2 className="text-xl font-bold text-navy">JOIN THE MAILING LIST</h2>
            <form
              onSubmit={(e) => { e.preventDefault(); setSubscribed(true); }}
              className="mt-4 flex gap-2"
            >
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email here"
                className="flex-1 px-3 py-2 rounded border bg-background focus:ring-2 focus:ring-primary focus:outline-none transition-all"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-navy text-navy-foreground px-5 py-2 rounded font-semibold hover:opacity-95"
              >
                Subscribe
              </motion.button>
            </form>
            {subscribed && <p className="mt-3 text-sm text-primary font-medium">Thanks for subscribing!</p>}
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
