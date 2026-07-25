import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

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

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <>
      <img src={BANNER} alt="" className="w-full h-48 md:h-64 object-cover" />
      <section className="max-w-6xl mx-auto px-4 py-14 grid md:grid-cols-2 gap-12">
        <div>
          <h1 className="text-4xl font-bold text-navy">CONTACT</h1>
          <div className="mt-8 space-y-6 text-sm">
            <div>
              <h3 className="font-semibold text-lg text-navy">Corporate Office</h3>
              <p className="text-muted-foreground mt-1">C-157, Industrial Area, Phase 7, Mohali, Chandigarh</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-navy">Branch Office</h3>
              <p className="text-muted-foreground mt-1">Opp. New Bus Stand, DD colony, Kurukshetra</p>
              <p className="text-muted-foreground mt-1">SHOP NO 1, First Floor, Huda Market, DC Colony, Jind</p>
            </div>
            <div>
              <p><a href="tel:+919992000536" className="text-primary font-semibold hover:underline">+91 9992000536</a></p>
              <p><a href="mailto:info@tishyaconsultancy.com" className="text-primary font-semibold hover:underline">info@tishyaconsultancy.com</a></p>
            </div>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/tishyaconsultancy" className="hover:text-primary">Facebook</a>
              <a href="https://www.instagram.com/tishyaconsultancy/" className="hover:text-primary">Instagram</a>
            </div>
          </div>
        </div>

        <div>
          <form
            onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
            className="space-y-4 border rounded-lg p-6 bg-muted"
          >
            <div className="grid grid-cols-2 gap-4">
              <input required placeholder="First Name" className="w-full px-3 py-2 rounded border bg-background" />
              <input required placeholder="Last Name" className="w-full px-3 py-2 rounded border bg-background" />
            </div>
            <input required type="email" placeholder="Email" className="w-full px-3 py-2 rounded border bg-background" />
            <textarea required placeholder="Message" rows={5} className="w-full px-3 py-2 rounded border bg-background" />
            {submitted && <p className="text-sm text-primary font-medium">Thanks for submitting!</p>}
            <button type="submit" className="bg-primary text-primary-foreground px-6 py-2 rounded font-semibold hover:opacity-90">Send</button>
          </form>

          <div className="mt-8 border rounded-lg p-6">
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
                className="flex-1 px-3 py-2 rounded border bg-background"
              />
              <button className="bg-navy text-navy-foreground px-5 py-2 rounded font-semibold hover:opacity-90">Subscribe</button>
            </form>
            {subscribed && <p className="mt-3 text-sm text-primary font-medium">Thanks for submitting!</p>}
          </div>
        </div>
      </section>
    </>
  );
}
