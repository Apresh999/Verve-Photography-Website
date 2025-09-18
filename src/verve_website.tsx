
import { motion } from "framer-motion";
import {
  Aperture,
  Send,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Linkedin,
  ArrowRight,
  Building2,
  Boxes,
  Users,
  CalendarDays,
} from "lucide-react";

// ===================== VERVE – BRAND CONFIG ===================== //
const BRAND = {
  name: "Verve Digital Studios",
  short: "Verve",
  tagline: "Energy in Every Frame",
  email: "hello@vervestudios.com",
  phone: "(201) 555‑0199",
  locations: "Short Hills, NJ · NYC Tri‑State · Travel Worldwide",
  social: {
    instagram: "https://instagram.com/your.verve",
    facebook: "https://facebook.com/your.verve",
    linkedin: "https://linkedin.com/company/your-verve",
  },
};

// Navigation
const nav = [
  { label: "Events", href: "#events" },
  { label: "Portraits", href: "#portraits" },
  { label: "Real Estate", href: "#realestate" },
  { label: "Products", href: "#products" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

// Hero mosaic (replace with your shots)
const heroImages = [
  "https://images.unsplash.com/photo-1508898578281-774ac4893bd0?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1600&auto=format&fit=crop",
];

const SectionHeader = ({
  kicker,
  title,
  subtitle,
}: {
  kicker: string;
  title: string;
  subtitle?: string;
}) => (
  <div className="mx-auto max-w-4xl text-center">
    <p className="uppercase tracking-[0.28em] text-xs text-zinc-400 mb-2">{kicker}</p>
    <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white">{title}</h2>
    {subtitle && (
      <p className="text-zinc-300/90 mt-4 leading-relaxed">{subtitle}</p>
    )}
  </div>
);

const ServiceCard = ({
  icon: Icon,
  title,
  desc,
  href,
}: {
  icon: any;
  title: string;
  desc: string;
  href: string;
}) => (
  <motion.a
    whileHover={{ y: -4 }}
    href={href}
    className="group relative rounded-2xl p-6 bg-gradient-to-b from-zinc-900/80 to-zinc-950/90 ring-1 ring-white/10 hover:ring-white/20 transition shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)]"
  >
    <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-white/5 p-3 ring-1 ring-white/10 group-hover:bg-white/10 transition">
      <Icon className="h-6 w-6 text-white" />
    </div>
    <h3 className="text-xl font-semibold text-white">{title}</h3>
    <p className="mt-2 text-sm text-zinc-300/90 leading-relaxed">{desc}</p>
    <div className="mt-4 inline-flex items-center text-sm font-medium text-white/90 group-hover:text-white">
      Explore <ArrowRight className="ml-2 h-4 w-4" />
    </div>
    <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/5 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition" />
  </motion.a>
);

const PriceCard = ({
  title,
  price,
  note,
  features,
  highlight = false,
}: {
  title: string;
  price: string;
  note?: string;
  features: string[];
  highlight?: boolean;
}) => (
  <motion.div
    whileHover={{ y: -4 }}
    className={`relative rounded-2xl p-6 ring-1 transition ${
      highlight
        ? "bg-gradient-to-b from-white/10 to-white/[0.06] ring-white/25"
        : "bg-gradient-to-b from-zinc-900/80 to-zinc-950/90 ring-white/10"
    }`}
  >
    <div className="flex items-baseline justify-between">
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <div className="text-2xl font-semibold text-white">{price}</div>
    </div>
    {note && <p className="mt-1 text-xs text-zinc-400">{note}</p>}
    <ul className="mt-4 space-y-2 text-sm text-zinc-300/90 list-disc list-inside">
      {features.map((f, i) => (
        <li key={i}>{f}</li>
      ))}
    </ul>
    <a
      href="#contact"
      className="mt-5 inline-flex items-center gap-2 rounded-xl bg-white text-black px-4 py-2 text-sm font-medium hover:opacity-90 transition"
    >
      Book {title}
    </a>
  </motion.div>
);

const gallery = {
  events: [
    "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1521316730702-829a8e30dfd8?q=80&w=1600&auto=format&fit=crop",
  ],
  portraits: [
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1512314889357-e157c22f938d?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1600&auto=format&fit=crop",
  ],
  realestate: [
    "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1472224371017-08207f84aaae?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1499914485622-a88fac536970?q=80&w=1600&auto=format&fit=crop",
  ],
  products: [
    "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?q=80&w=1600&auto=format&fit=crop",
  ],
};

const Grid = ({ images }: { images: string[] }) => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
    {images.map((src, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, delay: i * 0.05 }}
        className="relative overflow-hidden rounded-2xl ring-1 ring-white/10"
      >
        <img
          src={src}
          alt="Gallery"
          className="h-40 md:h-56 w-full object-cover hover:scale-105 transition duration-700"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </motion.div>
    ))}
  </div>
);

export default function VerveSite() {
  return (
    <div className="min-h-screen text-zinc-100 selection:bg-white selection:text-black">
      {/* Background energy gradient */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_10%,rgba(255,255,255,0.08),rgba(0,0,0,0)_60%)]" />
        <div className="absolute inset-x-0 top-[-20%] h-[40rem] blur-3xl opacity-60 bg-gradient-to-r from-fuchsia-600/30 via-violet-600/20 to-sky-600/30" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/30 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-fuchsia-500 via-violet-500 to-sky-500 grid place-items-center shadow-lg">
              <Aperture className="h-5 w-5 text-white" />
            </div>
            <span className="font-bold tracking-tight text-white text-xl uppercase">{BRAND.short}</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="text-zinc-300 hover:text-white transition">
                {n.label}
              </a>
            ))}
            <a
              href="#contact"
              className="px-3 py-2 rounded-xl bg-white text-black font-medium hover:opacity-90 transition"
            >
              Book a Shoot
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative">
        <div className="mx-auto max-w-7xl px-4 pt-16 pb-12 md:pt-24 md:pb-20">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-4xl md:text-6xl font-semibold tracking-tight text-white"
              >
                {BRAND.tagline.split(" ")[0]} in Every <span className="inline-block bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">Frame</span>
              </motion.h1>
              <p className="mt-5 text-zinc-300/90 leading-relaxed max-w-xl">
                {BRAND.short} is a high‑end studio blending passion and precision across events, portraits, real estate and product photography. We craft bold visuals that move audiences and elevate brands.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-white text-black px-5 py-3 font-medium hover:opacity-90 transition"
                >
                  Book Now <Send className="h-4 w-4" />
                </a>
                <a
                  href="#events"
                  className="inline-flex items-center gap-2 rounded-xl ring-1 ring-white/20 px-5 py-3 hover:bg-white/10 transition"
                >
                  Explore Work <ArrowRight className="h-4 w-4" />
                </a>
              </div>
              <div className="mt-6 flex items-center gap-4 text-xs text-zinc-400">
                <div className="inline-flex items-center gap-2">Founded 2025</div>
                <div className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4" /> {BRAND.locations}
                </div>
              </div>
            </div>
            {/* Mosaic */}
            <div className="grid grid-cols-4 grid-rows-4 gap-3 md:gap-4 h-[28rem] md:h-[34rem]">
              {heroImages.map((src, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, delay: i * 0.1 }}
                  className={`relative overflow-hidden rounded-2xl col-span-2 ${
                    i === 1 ? "row-span-3" : "row-span-2"
                  } ring-1 ring-white/10`}
                >
                  <img
                    src={src}
                    alt="Hero"
                    className="w-full h-full object-cover hover:scale-105 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeader
            kicker="What We Do"
            title="High‑End Photography with Verve"
            subtitle="From intimate portraits to large‑scale brand productions, we deliver refined visuals with palpable energy."
          />
          <div className="mt-10 grid md:grid-cols-4 gap-4 md:gap-6">
            <ServiceCard
              icon={CalendarDays}
              title="Events"
              desc="Weddings, galas, corporate launches and concerts—captured with cinematic flair."
              href="#events"
            />
            <ServiceCard
              icon={Users}
              title="Portraits"
              desc="Editorial, lifestyle, family & headshots—crafted to feel effortless and iconic."
              href="#portraits"
            />
            <ServiceCard
              icon={Building2}
              title="Real Estate"
              desc="Architectural clarity and mood‑rich interiors that make spaces irresistible."
              href="#realestate"
            />
            <ServiceCard
              icon={Boxes}
              title="Products"
              desc="Crisp, brand‑ready imagery that elevates catalogs, ecommerce and campaigns."
              href="#products"
            />
          </div>
        </div>
      </section>

      {/* Events */}
      <section id="events" className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 space-y-10">
          <SectionHeader
            kicker="Portfolio"
            title="Events"
            subtitle="Electric atmospheres, authentic moments, and editorial polish."
          />
          <Grid images={gallery.events} />
        </div>
      </section>

      {/* Portraits */}
      <section id="portraits" className="py-16 md:py-24 bg-gradient-to-b from-white/[0.02] to-transparent">
        <div className="mx-auto max-w-7xl px-4 space-y-10">
          <SectionHeader
            kicker="Portfolio"
            title="Portraits"
            subtitle="Confident, luminous, and unmistakably you."
          />
          <Grid images={gallery.portraits} />
        </div>
      </section>

      {/* Real Estate */}
      <section id="realestate" className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 space-y-10">
          <SectionHeader
            kicker="Portfolio"
            title="Real Estate"
            subtitle="Architecture and interiors, distilled into desire."
          />
          <Grid images={gallery.realestate} />
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-16 md:py-24 bg-gradient-to-b from-white/[0.02] to-transparent">
        <div className="mx-auto max-w-7xl px-4 space-y-10">
          <SectionHeader
            kicker="Portfolio"
            title="Product Photography"
            subtitle="Precision, texture, and brand‑forward storytelling."
          />
          <Grid images={gallery.products} />
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeader
            kicker="Packages"
            title="Simple, Transparent Pricing"
            subtitle="Custom quotes available for multi‑day events, brand campaigns, and travel."
          />
          <div className="mt-10 grid md:grid-cols-4 gap-4 md:gap-6">
            <PriceCard
              title="Events"
              price="$1,499+"
              note="Weddings • Corporate • Galas"
              features={[
                "Up to 6 hours coverage",
                "Lead photographer",
                "Same‑day highlight (10–15 images)",
                "Private online gallery",
                "48–72h preview set",
              ]}
            />
            <PriceCard
              title="Portraits"
              price="$399+"
              note="Headshots • Lifestyle • Family"
              features={[
                "60–90 minute session",
                "1–2 locations",
                "Up to 3 looks",
                "Professionally retouched selects",
                "Usage rights for web/social",
              ]}
              highlight
            />
            <PriceCard
              title="Real Estate"
              price="$299+"
              note="Residential • Commercial"
              features={[
                "Interior + exterior coverage",
                "HDR + perspective correction",
                "Next‑day delivery",
                "Optional floor plans & drone (add‑on)",
              ]}
            />
            <PriceCard
              title="Products"
              price="$25/image+"
              note="E‑commerce • Catalog • Editorial"
              features={[
                "Studio lighting & styling",
                "Dust cleanup & color accuracy",
                "Multiple crops per image",
                "Bulk pricing available",
              ]}
            />
          </div>
          <p className="mt-6 text-center text-sm text-zinc-400">
            All packages include basic color grading and a private gallery. Travel fees may apply outside the NYC tri‑state area.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeader
            kicker="Bookings"
            title="Let’s Create Together"
            subtitle="Tell us about your event, brand, or project. We’ll tailor a package that fits your vision."
          />
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <form onSubmit={(e) => e.preventDefault()} className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-zinc-300">Name</label>
                  <input
                    className="mt-1 w-full rounded-xl bg-black/40 border border-white/10 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-white/30"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="text-sm text-zinc-300">Email</label>
                  <input
                    type="email"
                    className="mt-1 w-full rounded-xl bg-black/40 border border-white/10 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-white/30"
                    placeholder="you@example.com"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="text-sm text-zinc-300">Service</label>
                  <select className="mt-1 w-full rounded-xl bg-black/40 border border-white/10 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-white/30">
                    <option>Events</option>
                    <option>Portraits</option>
                    <option>Real Estate</option>
                    <option>Product</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="text-sm text-zinc-300">Message</label>
                  <textarea
                    rows={5}
                    className="mt-1 w-full rounded-xl bg-black/40 border border-white/10 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-white/30"
                    placeholder="Tell us about your shoot…"
                  />
                </div>
              </div>
              <button className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white text-black px-5 py-3 font-medium hover:opacity-90 transition">
                Send Inquiry <Send className="h-4 w-4" />
              </button>
            </form>

            <div className="rounded-2xl bg-gradient-to-b from-zinc-900/80 to-zinc-950/90 ring-1 ring-white/10 p-6 md:p-8">
              <h4 className="text-xl font-semibold text-white">Studios & Coverage</h4>
              <p className="mt-2 text-zinc-300/90">{BRAND.locations}</p>
              <div className="mt-6 space-y-4 text-sm">
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-white" /> <span>{BRAND.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-white" /> <span>{BRAND.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-white" /> <span>Short Hills, NJ · Manhattan</span>
                </div>
              </div>
              <div className="mt-6 flex items-center gap-4">
                <a
                  href={BRAND.social.instagram}
                  className="inline-flex items-center justify-center h-10 w-10 rounded-full ring-1 ring-white/15 hover:bg-white/10"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href={BRAND.social.facebook}
                  className="inline-flex items-center justify-center h-10 w-10 rounded-full ring-1 ring-white/15 hover:bg-white/10"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href={BRAND.social.linkedin}
                  className="inline-flex items-center justify-center h-10 w-10 rounded-full ring-1 ring-white/15 hover:bg-white/10"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4 text-xs">
                <div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4">
                  <p className="text-zinc-400">Turnaround</p>
                  <p className="text-white mt-1 font-medium">48–72h previews</p>
                </div>
                <div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4">
                  <p className="text-zinc-400">Delivery</p>
                  <p className="text-white mt-1 font-medium">Private gallery</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-10 md:py-12 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-fuchsia-500 via-violet-500 to-sky-500 grid place-items-center shadow-md">
              <Aperture className="h-4 w-4 text-white" />
            </div>
            <span className="text-sm text-zinc-300 font-semibold uppercase tracking-wide">{BRAND.name}</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={BRAND.social.instagram}
              className="inline-flex items-center justify-center h-9 w-9 rounded-full ring-1 ring-white/15 hover:bg-white/10"
            >
              <Instagram className="h-4 w-4 text-white" />
            </a>
            <a
              href={BRAND.social.facebook}
              className="inline-flex items-center justify-center h-9 w-9 rounded-full ring-1 ring-white/15 hover:bg-white/10"
            >
              <Facebook className="h-4 w-4 text-white" />
            </a>
            <a
              href={BRAND.social.linkedin}
              className="inline-flex items-center justify-center h-9 w-9 rounded-full ring-1 ring-white/15 hover:bg-white/10"
            >
              <Linkedin className="h-4 w-4 text-white" />
            </a>
            <span className="text-xs text-zinc-400">© {new Date().getFullYear()} {BRAND.short} · {BRAND.tagline}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
