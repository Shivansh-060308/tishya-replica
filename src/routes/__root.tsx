import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useLocation,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Facebook, Instagram, Phone } from "lucide-react";
import { AdmissionsScroller } from "../components/AdmissionsScroller";

const LOGO_URL = "/tishya-logo.png";


const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/dubai-branch", label: "Dubai Branch" },
  { to: "/success-stories", label: "Success Stories" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

function TopBar() {
  return (
    <div className="w-full bg-navy text-navy-foreground text-sm">
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
        <span className="flex items-center gap-2">
          <Phone size={14} />
          Call us at :{" "}
          <a href="tel:+919992000536" className="underline hover:text-primary">
            +91 9992000536
          </a>
        </span>
        <div className="flex gap-3 items-center">
          <a href="https://www.facebook.com/tishyaconsultancy" aria-label="Facebook" className="hover:text-primary"><Facebook size={16} /></a>
          <a href="https://www.instagram.com/tishyaconsultancy/" aria-label="Instagram" className="hover:text-primary"><Instagram size={16} /></a>
        </div>
      </div>
    </div>
  );
}


function Header() {
  return (
    <header className="w-full bg-background border-b sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4 flex-wrap">
        <Link to="/" className="flex items-center gap-3">
          <img src={LOGO_URL} alt="Tishya Consultancy" className="h-14 w-auto" />
          <div className="leading-tight">
            <div className="font-bold text-lg tracking-tight">TISHYA CONSULTANCY PVT.LTD</div>
            <div className="text-xs text-muted-foreground">Education Consultants</div>
          </div>
        </Link>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium">
          {navItems.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="hover:text-primary transition-colors"
              activeProps={{ className: "text-primary font-semibold" }}
              activeOptions={{ exact: true }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-navy text-navy-foreground mt-16">
      <div className="max-w-7xl mx-auto px-4 py-10 grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="text-primary text-lg font-bold mb-3">Contact</h3>
          <p className="text-sm mb-2">
            <strong>Corporate Office:</strong><br />
            C-157, Industrial Area, Phase 7, Mohali, Chandigarh
          </p>
          <p className="text-sm mb-2">
            <strong>Branch Offices:</strong><br />
            Opp. New Bus Stand, DD colony, Kurukshetra<br />
            SCO 1, First Floor, Huda Complex, DC Colony, Jind
          </p>
          <p className="text-sm mb-2">
            <strong>Dubai Branch (Ttishya Consultancy FZE):</strong><br />
            Business Centre, Sharjah Publishing City Free Zone, Sharjah, UAE<br />
            Contact: +971-525253366
          </p>
        </div>
        <div>
          <h3 className="text-primary text-lg font-bold mb-3">Reach Us</h3>
          <p className="text-sm"><a href="tel:+919992000536" className="hover:text-primary">+91 9992000536</a></p>
          <p className="text-sm"><a href="mailto:info@tishyaconsultancy.com" className="hover:text-primary">info@tishyaconsultancy.com</a></p>
          <div className="flex gap-4 mt-3">
            <a href="https://www.facebook.com/tishyaconsultancy" className="hover:text-primary">Facebook</a>
            <a href="https://www.instagram.com/tishyaconsultancy/" className="hover:text-primary">Instagram</a>
          </div>
        </div>
        <div>
          <h3 className="text-primary text-lg font-bold mb-3">Quick Links</h3>
          <ul className="text-sm space-y-1">
            {navItems.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="hover:text-primary">{n.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs">
        © {new Date().getFullYear()} Tishya Consultancy Pvt. Ltd. All rights reserved.
      </div>
    </footer>
  );
}

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <div className="mt-6">
          <Link to="/" className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90">
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">This page didn't load</h1>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
          >Try again</button>
          <a href="/" className="rounded-md border px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground">Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Tishya Consultancy Pvt. Ltd. — Immigration & Education Consultants" },
      { name: "description", content: "Tishya Consultancy Pvt. Ltd. helps individuals achieve their immigration and study-abroad goals with expert counselling, visa processing, and university selection." },
      { property: "og:title", content: "Tishya Consultancy Pvt. Ltd." },
      { property: "og:description", content: "Immigration and education consultancy — turning dreams into realities." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const location = useLocation();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col overflow-x-hidden">
        <TopBar />
        <Header />
        <AdmissionsScroller />
        <AnimatePresence mode="wait">
          <motion.main
            key={location.pathname}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1"
          >
            <Outlet />
          </motion.main>
        </AnimatePresence>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
