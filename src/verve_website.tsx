import React, { useState } from 'react'; 
import { motion } from "framer-motion";
import {
  Send,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  ArrowRight,
  Building2,
  Users,
  CalendarDays,
} from "lucide-react";


import verveLogo from "./assets/photos/verve_photography_logo_2_circle.png";


import eventphoto1 from "./assets/photos/events/eventphoto1.jpg"
import eventphoto2 from "./assets/photos/events/eventphoto2.jpg"
import eventphoto3 from "./assets/photos/events/eventphoto3.jpg"
import eventphoto4 from "./assets/photos/events/eventphoto4.jpg"
import eventphoto5 from "./assets/photos/events/eventphoto5.jpg"
import eventphoto6 from "./assets/photos/events/eventphoto6.jpg"
import potrait1 from "./assets/photos/potraits/potrait1.jpg"
import potrait2 from "./assets/photos/potraits/potrait2.jpg"
import potrait3 from "./assets/photos/potraits/potrait3.jpg"
import potrait4 from "./assets/photos/potraits/potrait4.jpg"
import potrait5 from "./assets/photos/potraits/potrait5.jpg"
import realestate1 from "./assets/photos/realestate/realestate1.jpeg"
import realestate2 from "./assets/photos/realestate/realestate2.jpeg"
import realestate3 from "./assets/photos/realestate/realestate3.jpeg"
import realestate4 from "./assets/photos/realestate/realestate4.jpeg"
import realestate5 from "./assets/photos/realestate/realestate5.jpeg"

import hero1 from "./assets/photos/hero/Hero_Image_1.jpeg"
import hero2 from "./assets/photos/hero/Hero_Image_2.jpeg"
import hero3 from "./assets/photos/hero/Hero_Image_3.jpeg"
import hero4 from "./assets/photos/hero/Hero_Image_4.jpeg"




// ===================== VERVE – BRAND CONFIG ===================== //
const BRAND = {
  name: "Verve Digital Studios",
  short: "Verve",
  tagline: "Energy in Every Frame",
  email: "apreshd@gmail.com",
  phone: "(201) 561‑2306",
  locations: "Short Hills, NJ · NYC Tri‑State · Travel Worldwide",
  social: {
    instagram: "https://www.instagram.com/verve.photography_njny",
    facebook: "https://www.facebook.com/profile.php?id=61581579122102"
  },
};

// Navigation
const nav = [
  { label: "Events", href: "#events" },
  { label: "Portraits", href: "#portraits" },
  { label: "Real Estate", href: "#realestate" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

// Hero mosaic (replace with your shots)
const heroImages = [
  hero1, hero2, hero4, hero3 // poistion of the image is important
];

// --- START: NEW FAQ CODE/INTEGRATION (Interface) ---
interface FAQItemProps {
  question: string;
  answer: string;
  index: number;
  openIndex: number | null;
  setOpenIndex: React.Dispatch<React.SetStateAction<number | null>>;
}
// --- END: NEW FAQ CODE/INTEGRATION (Interface) ---

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
  note,
  features,
  highlight = false,
}: {
  title: string;
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
  events: {
    albumUrl: "https://photos.app.goo.gl/BvxYBgHBQ7eTZmHr6",
    images: [
      eventphoto1,
      eventphoto2,
      eventphoto3,
      eventphoto4,
      eventphoto5,
      eventphoto6
    ],
  },
  portraits: {
    albumUrl: "https://photos.app.goo.gl/phSRs5TttbYhDHqA7",
    images: [
      potrait1,
      potrait2,
      potrait3,
      potrait4,
      potrait5
    ],
  },
  realestate: {
    albumUrl: "https://photos.app.goo.gl/kEAFyEqZKBW6r5Qe7", // Your example link
    images: [
      realestate1,
      realestate2,
      realestate3,
      realestate4,
      realestate5
    ],
  }
};

// ===================== NEW: SHUFFLE & GRID LOGIC ===================== //
const shuffleArray = (array: string[]): string[] => { // MODIFIED: Added types
  let shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const Grid = ({ images }: { images: string[] }) => {
  const randomImages = React.useMemo(() => shuffleArray(images).slice(0, 4), [images]);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
      {randomImages.map((src, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: i * 0.05 }}
          className="relative overflow-hidden rounded-2xl ring-1 ring-white/10"
        >
          <img
            src={src} // This `src` now holds the imported image URL (e.g., '/assets/EventPhotos/A7409005.jpg')
            alt="Gallery"
            // Remove srcSet and sizes attributes as they were for external image services
            className="h-40 md:h-56 w-full object-cover hover:scale-105 transition duration-700"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </motion.div>
      ))}
    </div>
  );
};

// ===================== NEW: FAQ CONTENT AND COMPONENTS ===================== //

const faqs = [
    {
        question: "Do you offer luxury photography services specifically in Short Hills and Millburn, NJ?",
        answer: "Yes! We specialize in premium **event, portrait, and luxury real estate photography** right here in **Millburn Township**, including **Short Hills, New Jersey**. This is our home base, and we have deep expertise serving clients across **Essex County, NJ**. We are your local, high-end, preferred **photographers** for the area.",
    },
    {
        question: "What is your service area beyond Short Hills, and do you travel to other states?",
        answer: "Our primary service area covers the entire **Northern New Jersey** region, including towns like **Summit, Maplewood, Livingston, Morristown, and Westfield**. We also frequently serve clients in the **New York Metropolitan Area**, including all five boroughs of **New York City (NYC)**. For major events and commercial projects, we are available to travel to surrounding states, including **Pennsylvania, Delaware, Connecticut, and Southern New York**.",
    },
    {
        question: "What kind of final output can I expect from my photography session, and what is your style?",
        answer: "You will receive a curated collection of **fully-edited, high-resolution digital files** (JPEGs) via a private, secure online gallery. We specialize in a **vibrant, true-to-life color grading** and a **fine-art storytelling approach**. We focus on creating **professional, print-ready images** that capture the moment authentically. We do not provide **unedited RAW files**, as the final, artistic edit is part of the service you are hiring us for.",
    },
    {
        question: "What is the typical turnaround time for receiving the final edited photos?",
        answer: "Our commitment is to deliver high-quality results efficiently. The typical turnaround is **7 to 10 business days for portrait and real estate sessions**. For larger events, such as a **corporate retreat or wedding photography**, please allow **3 to 4 weeks** for the full post-production and editing process. We'll provide a firm delivery date in your contract.",
    },
    {
        question: "What is required from me before the photoshoot begins?",
        answer: "To ensure a seamless shoot, we need two things: 1) A clear **shot list or creative brief** that outlines your essential needs (e.g., specific branding, key people, or angles). 2) For commercial and real estate projects, we need access confirmation and any relevant **brand guidelines**. We prefer to hold a brief **video-call consultation** beforehand to discuss poses and lighting and answer any final questions.",
    },
    {
        question: "Do I receive the full usage rights for the professional photos, especially for business use?",
        answer: "You will receive a **Commercial Use License** giving you broad permission to use the images for marketing, websites, social media, and print materials. While the **original copyright** remains with the photographer (standard industry practice), you have full, unlimited rights to use the **high-quality photos** to promote your business. Details on licensing are clearly outlined in the final contract.",
    },
];

// Corrected component with TypeScript interface
const FAQItem = ({ question, answer, index, openIndex, setOpenIndex }: FAQItemProps) => {
    // Check if this specific item is open
    const isOpen = openIndex === index;

    // Function to toggle the state (open/close)
    const toggleFAQ = () => {
        // If it's already open, close it (set to null). Otherwise, open this item's index.
        setOpenIndex(isOpen ? null : index);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="faq-item rounded-2xl bg-white/5 ring-1 ring-white/10 mb-3 overflow-hidden"
        >
            <button
                className="w-full flex justify-between items-center text-left p-4 md:p-5 font-semibold text-white hover:bg-white/10 transition"
                onClick={toggleFAQ}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
            >
                <span dangerouslySetInnerHTML={{ __html: question }} />
                <span className={`text-xl transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
                    {isOpen ? '✕' : '+'}
                </span>
            </button>

            {/* The collapsing content container */}
            <div
                id={`faq-answer-${index}`}
                className={`transition-[max-height,padding] duration-500 ease-in-out ${isOpen ? 'max-h-[500px] p-4 md:p-5 pt-0' : 'max-h-0'}`}
            >
                <div
                    className="text-zinc-300/90 leading-relaxed border-t border-white/10 pt-4"
                    dangerouslySetInnerHTML={{ __html: answer }}
                />
            </div>
        </motion.div>
    );
};

const FAQSection = () => {
    // State to manage which FAQ item is currently open. Start with 'null' so all are collapsed.
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="py-16 md:py-24">
            <div className="mx-auto max-w-7xl px-4">
                <SectionHeader
                    kicker="Information"
                    title="Frequently Asked Questions"
                    subtitle="Find quick answers about our photography services, coverage areas, and deliverables."
                />
                <div className="mt-10 max-w-4xl mx-auto">
                    {faqs.map((faq, index) => (
                        <FAQItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            index={index}
                            openIndex={openIndex}
                            setOpenIndex={setOpenIndex}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

// --- END: NEW FAQ CODE/INTEGRATION (Content and Components) ---


export default function VerveSite() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Events',
    message: '',
  });

  const [status, setStatus] = useState('');

  const appScriptUrl = 'https://hook.us1.make.com/jrb2irtlqy7a4ihemtmure2msyq83l9k';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setStatus('Sending...');

  try {
    // Create a FormData object from the form fields
    const formDataObject = new FormData();
    formDataObject.append('name', formData.name);
    formDataObject.append('email', formData.email);
    formDataObject.append('service', formData.service);
    formDataObject.append('message', formData.message);

    const response = await fetch(appScriptUrl, {
      method: 'POST',
      // The browser will automatically set the correct 'Content-Type' header
      // for FormData, which prevents the CORS preflight issue.
      body: formDataObject,
    });

    //const result = await response.json();

    if (response.ok) { // Check if the status is 200-299
      setStatus('Message sent successfully! ✅');
      setFormData({ name: '', email: '', service: 'Events', message: '' });
    } else {
      // Use response.status for the error code (e.g., 410, 404, 500)
      setStatus(`Error: Webhook failed with status ${response.status}. Please check your Make.com scenario.`);
    }
  } catch (error) {
    setStatus('Failed to send message.');
  }
};
  
  return (
    <div className="min-h-screen bg-black/75 text-zinc-100 selection:bg-white selection:text-black">
      {/* Background energy gradient */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_10%,rgba(255,255,255,0.08),rgba(0,0,0,0)_60%)]" />
        <div className="absolute inset-x-0 top-[-20%] h-[40rem] blur-3xl opacity-60 bg-gradient-to-r from-fuchsia-600/30 via-violet-600/20 to-sky-600/30" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/30 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            {/* START OF HEADER LOGO CHANGE */}
            <div className="h-10 w-10 overflow-hidden rounded-full grid place-items-center shadow-lg">
              <img 
                src={verveLogo} 
                alt={`${BRAND.short} Logo`} 
                className="w-full h-full object-cover" 
              />
            </div>
            {/* END OF HEADER LOGO CHANGE */}
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
                {BRAND.short} is a virtual studio blending passion and precision across events, portraits and real estate photography. We craft bold visuals that move audiences.
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
                    //srcSet={
                    //  `${src.replace('w=1600', 'w=400')} 400w, ` +
                    //  `${src.replace('w=1600', 'w=800')} 800w, ` +
                    //  `${src.replace('w=1600', 'w=1600')} 1600w`
                    //}
                    //sizes="(max-width: 600px) 400px, (max-width: 900px) 800px, 1600px"
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
            title="Timeless Visuals with Verve"
            subtitle="From intimate portraits to community events, we deliver refined visuals with palpable energy."
          />
          <div className="mt-10 grid md:grid-cols-3 gap-4 md:gap-6">
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
          </div>
        </div>
      </section>

       {/* ===================== MODIFIED PORTFOLIO SECTIONS ===================== */}
      
      {/* Events */}
      <section id="events" className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 space-y-10">
          <SectionHeader kicker="Portfolio" title="Events" subtitle="Electric atmospheres, authentic moments, and editorial polish." />
          <Grid images={gallery.events.images} />
          <div className="text-center">
            <a href={gallery.events.albumUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl ring-1 ring-white/20 px-5 py-3 hover:bg-white/10 transition text-sm font-medium">
              View Full Album <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Portraits */}
      <section id="portraits" className="py-16 md:py-24 bg-gradient-to-b from-white/[0.02] to-transparent">
        <div className="mx-auto max-w-7xl px-4 space-y-10">
          <SectionHeader kicker="Portfolio" title="Portraits" subtitle="Confident, luminous, and unmistakably you." />
          <Grid images={gallery.portraits.images} />
          <div className="text-center">
            <a href={gallery.portraits.albumUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl ring-1 ring-white/20 px-5 py-3 hover:bg-white/10 transition text-sm font-medium">
              View Full Album <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Real Estate */}
      <section id="realestate" className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 space-y-10">
          <SectionHeader kicker="Portfolio" title="Real Estate" subtitle="Architecture and interiors, distilled into desire." />
          <Grid images={gallery.realestate.images} />
          <div className="text-center">
            <a href={gallery.realestate.albumUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl ring-1 ring-white/20 px-5 py-3 hover:bg-white/10 transition text-sm font-medium">
              View Full Album <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeader
            kicker="Packages"
            title="Simple & Easy Pricing"
            subtitle="Custom quotes available for events, brand campaigns, and travel."
          />
          <div className="mt-10 grid md:grid-cols-3 gap-4 md:gap-6">
            <PriceCard
              title="Events"
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
              note="Residential • Commercial"
              features={[
                "Interior + exterior coverage",
                "HDR + perspective correction",
                "Next‑day delivery",
                "Optional floor plans & drone (add‑on)",
              ]}
            />
          </div>
          <p className="mt-6 text-center text-sm text-zinc-400">
            All packages include basic color grading and a private gallery. Travel fees may apply.
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
            <form onSubmit={handleSubmit} className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="text-sm text-zinc-300">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="mt-1 w-full rounded-xl bg-black/40 border border-white/10 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-white/30"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm text-zinc-300">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="mt-1 w-full rounded-xl bg-black/40 border border-white/10 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-white/30"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="service" className="text-sm text-zinc-300">Service</label>
                  <select
                    id="service"
                    name="service"
                    className="mt-1 w-full rounded-xl bg-black/40 border border-white/10 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-white/30"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option>Events</option>
                    <option>Portraits</option>
                    <option>Real Estate</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="message" className="text-sm text-zinc-300">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="mt-1 w-full rounded-xl bg-black/40 border border-white/10 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-white/30"
                    placeholder="Tell us about your shoot…"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <button type="submit" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white text-black px-5 py-3 font-medium hover:opacity-90 transition">
                Send Inquiry <Send className="h-4 w-4" />
              </button>
              <p className="mt-4 text-sm text-center text-zinc-400">{status}</p>
            </form>

            <div className="rounded-2xl bg-gradient-to-b from-zinc-900/80 to-zinc-950/90 ring-1 ring-white/10 p-6 md:p-8">
              <h4 className="text-xl font-semibold text-white">Coverage</h4>
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
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4 text-xs">
                <div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4">
                  <p className="text-zinc-400">Turnaround</p>
                  <p className="text-white mt-1 font-medium">3-4 days previews</p>
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

      {/* ===================== NEW: FAQ SECTION ===================== */}
      <FAQSection />

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-10 md:py-12 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {/* START OF HEADER LOGO CHANGE */}
            <div className="h-10 w-10 overflow-hidden rounded-full grid place-items-center shadow-lg">
              <img 
                src={verveLogo} 
                alt={`${BRAND.short} Logo`} 
                className="w-full h-full object-cover" 
              />
            </div>
            {/* END OF HEADER LOGO CHANGE */}
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
            <span className="text-xs text-zinc-400">© {new Date().getFullYear()} {BRAND.short} · {BRAND.tagline}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
