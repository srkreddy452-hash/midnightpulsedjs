import { useMemo, useState } from "react";
import {
  ArrowUpRight,
  Building2,
  CalendarCheck,
  Headphones,
  Home,
  Mail,
  MapPin,
  MessageCircle,
  Mic2,
  PartyPopper,
  Phone,
  Trees,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import weddingDanceFloor from "@/assets/modern-indian-wedding-dance-floor.png";
import setupBanquet from "@/assets/setup-banquet-real.png";
import setupBanquetExtra from "@/assets/setup-banquet-extra-real.png";
import setupHouse from "@/assets/setup-house-real.png";
import setupOutdoor from "@/assets/setup-outdoor-real.png";

const WHATSAPP_NUMBER = "14702920984";
const WHATSAPP_DISPLAY = "+1 (470) 292-0984";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
const EMAIL = "info@midnightpulsedjs.com";
const INSTAGRAM_URL =
  "https://www.instagram.com/beatsby_djkick?igsh=MWZ1Y2N4endpcWh6eg%3D%3D&utm_source=qr";
const FACEBOOK_URL = "https://www.facebook.com/share/1BFzRgDYXr/?mibextid=wwXIfr";

const HERO_VIDEO_URL = "";
const HERO_IMAGE_URL = weddingDanceFloor;
const ABOUT_VIDEO_URL = "/videos/dj1.mp4";
const SERVICES_VIDEO_URL = "/videos/dj.mp4";

const navItems = ["Home", "About", "Services", "Testimonials", "Contact"];

const venues = [
  {
    id: "house",
    label: "House",
    icon: Home,
    description: "Living room, basement, backyard patio, or private home party.",
  },
  {
    id: "banquet",
    label: "Banquet Hall",
    icon: Building2,
    description: "Wedding halls, hotel ballrooms, sangeet rooms, and reception venues.",
  },
  {
    id: "outdoor",
    label: "Outdoor",
    icon: Trees,
    description: "Covered patios, open-air parties, and outdoor private events.",
  },
] as const;

const guestOptions = [
  { value: 120, label: "80-120 guests", note: "Included with the default DBR15 speaker setup" },
  { value: 140, label: "+20-40 guests", note: "Adds two small support speakers" },
  { value: 160, label: "+50-100 guests", note: "Adds a table soundbar support option" },
] as const;

const setupImages = {
  house: setupHouse,
  banquet: setupBanquet,
  outdoor: setupOutdoor,
};

const setupExtraImages = {
  house: setupHouse,
  banquet: setupBanquetExtra,
  outdoor: setupOutdoor,
};

const services = [
  {
    title: "Weddings",
    icon: PartyPopper,
    description:
      "Baraat, sangeet, ceremony, cocktail hour, reception, and after-party energy for South Asian weddings.",
  },
  {
    title: "DJ + MC + Lighting",
    icon: Mic2,
    description:
      "Clean emceeing, smooth transitions, coordinated lighting packages, and crowd-first music programming.",
  },
  {
    title: "House, Private & Corporate",
    icon: Headphones,
    description:
      "House parties, club nights, brand functions, birthdays, private events, and polished corporate celebrations.",
  },
];

const testimonials = [
  {
    quote:
      "They kept our wedding reception moving all night and mixed Bollywood with American hits perfectly.",
    name: "Wedding client",
  },
  {
    quote:
      "The MC flow, entrances, and lighting cues made our event feel organized and high-energy.",
    name: "Event host",
  },
  {
    quote:
      "Super responsive on WhatsApp and easy to work with from the first message to the final song.",
    name: "Private client",
  },
];

const eventTypes = [
  "House Party",
  "Wedding Reception",
  "Sangeet",
  "Garba",
  "Mehndi",
  "Birthday",
  "Corporate Event",
  "Private Party",
];

const serviceOptions = [
  "DJ only",
  "DJ + MC",
  "DJ + Lighting",
  "DJ + MC + Lighting",
  "Baraat sound",
  "Ceremony sound",
];

const musicOptions = [
  "House",
  "Bollywood",
  "Punjabi",
  "Garba",
  "Hip-Hop",
  "Top 40",
  "Latin",
  "EDM",
];

function PartyScene() {
  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 1600 900"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label="Festival DJ dance floor scene"
    >
      <defs>
        <linearGradient id="night" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#090621" />
          <stop offset="42%" stopColor="#12124b" />
          <stop offset="100%" stopColor="#060814" />
        </linearGradient>
        <radialGradient id="washMagenta" cx="28%" cy="18%" r="65%">
          <stop offset="0%" stopColor="#ff2fb2" stopOpacity="0.72" />
          <stop offset="100%" stopColor="#ff2fb2" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="washBlue" cx="76%" cy="12%" r="70%">
          <stop offset="0%" stopColor="#2367ff" stopOpacity="0.75" />
          <stop offset="100%" stopColor="#2367ff" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="beamGold" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#ffb000" stopOpacity="0.62" />
          <stop offset="100%" stopColor="#ffb000" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="beamPink" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#ff2fb2" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#ff2fb2" stopOpacity="0" />
        </linearGradient>
      </defs>

      <rect width="1600" height="900" fill="url(#night)" />
      <rect width="1600" height="900" fill="url(#washMagenta)" />
      <rect width="1600" height="900" fill="url(#washBlue)" />

      <path d="M280 60 L680 900 L450 900 L170 60 Z" fill="url(#beamPink)" />
      <path d="M820 40 L640 900 L900 900 L940 40 Z" fill="url(#beamGold)" />
      <path d="M1240 55 L960 900 L1230 900 L1370 55 Z" fill="url(#beamPink)" />

      <g opacity="0.88">
        <rect x="340" y="170" width="920" height="18" rx="9" fill="#11152f" />
        <circle cx="430" cy="190" r="22" fill="#ffb000" />
        <circle cx="620" cy="190" r="22" fill="#ff2fb2" />
        <circle cx="800" cy="190" r="26" fill="#2367ff" />
        <circle cx="980" cy="190" r="22" fill="#ff2fb2" />
        <circle cx="1170" cy="190" r="22" fill="#ffb000" />
      </g>

      <g opacity="0.42">
        {Array.from({ length: 42 }).map((_, index) => (
          <circle
            key={index}
            cx={80 + ((index * 137) % 1440)}
            cy={90 + ((index * 71) % 360)}
            r={2 + (index % 4)}
            fill={index % 3 === 0 ? "#ffb000" : index % 3 === 1 ? "#ff2fb2" : "#43c7ff"}
          />
        ))}
      </g>

      <g fill="#050510">
        <path d="M0 695 C220 620 380 705 560 650 C820 570 990 690 1190 630 C1360 580 1480 625 1600 595 L1600 900 L0 900 Z" />
        {Array.from({ length: 24 }).map((_, index) => {
          const x = 35 + index * 68;
          const h = 82 + ((index * 19) % 95);
          return (
            <g key={index} transform={`translate(${x} ${760 - h})`}>
              <circle cx="0" cy="0" r="18" />
              <rect x="-13" y="16" width="26" height={h} rx="13" />
              <path
                d={index % 2 === 0 ? "M-8 34 L-52 -26" : "M8 34 L54 -22"}
                stroke="#050510"
                strokeWidth="18"
                strokeLinecap="round"
              />
              <path
                d={index % 3 === 0 ? "M10 38 L58 6" : "M-10 38 L-58 2"}
                stroke="#050510"
                strokeWidth="16"
                strokeLinecap="round"
              />
            </g>
          );
        })}
      </g>

      <path
        d="M0 730 C250 680 450 735 680 700 C920 665 1130 735 1600 680 L1600 900 L0 900 Z"
        fill="#ffffff"
        opacity="0.06"
      />
    </svg>
  );
}

function Background() {
  if (HERO_VIDEO_URL) {
    return (
      <video
        className="absolute inset-0 z-0 h-full w-full object-cover"
        src={HERO_VIDEO_URL}
        poster={HERO_IMAGE_URL}
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      />
    );
  }

  if (HERO_IMAGE_URL) {
    return (
      <>
        <img
          className="hero-motion-bg absolute inset-0 z-0 h-full w-full object-cover"
          src={HERO_IMAGE_URL}
          alt=""
          aria-hidden="true"
        />
        <div className="hero-motion-light absolute inset-0 z-0" aria-hidden="true" />
      </>
    );
  }

  return <PartyScene />;
}

function SetupVisualizer() {
  const [venue, setVenue] = useState<(typeof venues)[number]["id"]>("banquet");
  const [guests, setGuests] = useState<(typeof guestOptions)[number]["value"]>(120);

  const venueDetails = venues.find((item) => item.id === venue) ?? venues[1];

  const setup = useMemo(
    () => ({
      showSmallSpeakers: guests >= 140,
      showSoundbar: guests >= 160,
      capacity:
        guests >= 160
          ? "Base 80-120 guests + support for +50-100 guests"
          : guests >= 140
            ? "Base 80-120 guests + support for +20-40 guests"
            : "Best for 80-120 guests",
    }),
    [guests],
  );

  return (
    <section id="setup" className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.28em] text-[#ffb000]">
            Setup Preview
          </p>
          <h2
            className="text-4xl font-normal leading-tight text-white sm:text-6xl"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            See how the DJ setup fits your party.
          </h2>
            <p className="mt-5 text-base leading-relaxed text-white/64 sm:text-lg">
              Our core package uses two Yamaha DBR15 speakers on stands, a black DJ
            table with controller, mixer, and laptop, plus a DJ bar light. This
            setup is enough for 80-120 guests, with small speaker or soundbar
            support available when you need extra coverage.
            </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.4fr]">
          <div className="space-y-5">
            <div className="liquid-glass rounded-[8px] p-5">
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-white/58">
                Venue
              </p>
              <div className="grid gap-3">
                {venues.map((item) => {
                  const Icon = item.icon;
                  const isActive = venue === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setVenue(item.id)}
                      className={`flex items-center gap-3 rounded-[8px] border px-4 py-3 text-left transition ${
                        isActive
                          ? "border-[#ffb000]/70 bg-[#ffb000]/16 text-white"
                          : "border-white/10 bg-white/[0.03] text-white/68 hover:border-white/25 hover:text-white"
                      }`}
                    >
                      <Icon className="h-5 w-5 shrink-0" aria-hidden="true" />
                      <span>
                        <span className="block text-sm font-medium">{item.label}</span>
                        <span className="block text-xs text-white/48">{item.description}</span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="liquid-glass rounded-[8px] p-5">
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-white/58">
                Guest Coverage
              </p>
              <div className="grid gap-3">
                {guestOptions.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => setGuests(option.value)}
                    className={`rounded-[8px] border px-4 py-3 text-left transition ${
                      guests === option.value
                        ? "border-[#ff2fb2]/70 bg-[#ff2fb2]/16 text-white"
                        : "border-white/10 bg-white/[0.03] text-white/68 hover:border-white/25 hover:text-white"
                    }`}
                  >
                    <span className="block text-sm font-medium">{option.label}</span>
                    <span className="block text-xs text-white/48">{option.note}</span>
                  </button>
                ))}
              </div>
            </div>

          </div>

          <div className="liquid-glass overflow-hidden rounded-[8px] p-4">
            <div className="relative overflow-hidden rounded-[8px] border border-white/10">
              <img
                src={setup.showSoundbar ? setupExtraImages[venue] : setupImages[venue]}
                alt={`Realistic ${venueDetails.label.toLowerCase()} DJ setup preview`}
                className="aspect-[16/10] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/82 via-black/12 to-black/10" />
              <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-black/38 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#ffb000] backdrop-blur-md">
                {venueDetails.label}
              </div>
              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/64">
                  Real setup preview
                </p>
                <h3 className="mt-2 text-2xl font-medium text-white">
                  {setup.capacity}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-white/12 px-3 py-1 text-xs text-white/78">
                    2 Yamaha DBR15 speakers on stands
                  </span>
                  <span className="rounded-full bg-white/12 px-3 py-1 text-xs text-white/78">
                    Black table + controller + mixer + laptop
                  </span>
                  <span className="rounded-full bg-[#ff2fb2]/22 px-3 py-1 text-xs text-white">
                    DJ bar light included
                  </span>
                  {setup.showSmallSpeakers && (
                    <span className="rounded-full bg-white/14 px-3 py-1 text-xs text-white">
                      2 small support speakers for +20-40 guests
                    </span>
                  )}
                  {setup.showSoundbar && (
                    <span className="rounded-full bg-[#ffb000]/24 px-3 py-1 text-xs text-white">
                      Table soundbar support for +50-100 guests
                    </span>
                  )}
                  <span className="rounded-full bg-[#2367ff]/24 px-3 py-1 text-xs text-white">
                    Room uplighting shown in preview
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatsAppButton({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Button asChild className={`liquid-glass rounded-full text-foreground ${className}`}>
      <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
        {children}
      </a>
    </Button>
  );
}

function VideoReel({
  label,
  title,
  src,
  variant = "wide",
}: {
  label: string;
  title: string;
  src: string;
  variant?: "wide" | "portrait";
}) {
  return (
    <div
      className={`liquid-glass relative overflow-hidden rounded-[8px] ${
        variant === "portrait" ? "aspect-[4/5]" : "aspect-video"
      }`}
      aria-label={title}
    >
      <video
        className="video-reel-media absolute inset-0 h-full w-full object-cover"
        src={src}
        poster={weddingDanceFloor}
        autoPlay
        loop
        muted
        playsInline
        controls
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/62 via-black/18 to-transparent" />
      <div className="pointer-events-none absolute left-5 top-5 rounded-full border border-white/14 bg-black/34 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/82 backdrop-blur-md">
        {label}
      </div>
      <div className="pointer-events-none absolute bottom-5 left-5 right-5">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#ffb000]">
          Real Event Footage
        </p>
        <h3 className="hero-copy-shadow mt-2 text-2xl font-medium text-white sm:text-3xl">
          {title}
        </h3>
      </div>
    </div>
  );
}

function QuoteSection() {
  const [quote, setQuote] = useState({
    name: "",
    phone: "",
    eventType: "House Party",
    eventDate: "",
    city: "",
    venueType: "Banquet Hall",
    guestCoverage: "80-120 guests",
    services: "DJ + MC + Lighting",
    music: "House, Bollywood, Punjabi",
    notes: "",
  });

  const quoteMessage = useMemo(() => {
    const lines = [
      "Hi Midnight Pulse DJs, I would like a custom quote.",
      "",
      `Name: ${quote.name || "-"}`,
      `Phone: ${quote.phone || "-"}`,
      `Event type: ${quote.eventType}`,
      `Event date: ${quote.eventDate || "-"}`,
      `City / area: ${quote.city || "-"}`,
      `Venue type: ${quote.venueType}`,
      `Guest coverage: ${quote.guestCoverage}`,
      `Services needed: ${quote.services}`,
      `Music styles: ${quote.music || "-"}`,
      `Notes: ${quote.notes || "-"}`,
      "",
      "Please share availability and package options. No public pricing needed.",
    ];

    return `${WHATSAPP_URL}?text=${encodeURIComponent(lines.join("\n"))}`;
  }, [quote]);

  const updateQuote = (key: keyof typeof quote, value: string) => {
    setQuote((current) => ({ ...current, [key]: value }));
  };

  return (
    <section id="quote" className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.28em] text-[#ffb000]">
            Custom Quote
          </p>
          <h2
            className="text-4xl font-normal leading-tight text-white sm:text-6xl"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Tell us the party details. We will quote privately.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/64 sm:text-lg">
            No public pricing is shown. Send your event details on WhatsApp and
            we will recommend the right DJ, MC, lighting, and sound coverage.
          </p>
        </div>

        <div className="liquid-glass grid gap-5 rounded-[8px] p-5 sm:p-7 lg:grid-cols-2">
          <label className="grid gap-2 text-sm font-medium text-white/74">
            Name
            <input
              value={quote.name}
              onChange={(event) => updateQuote("name", event.target.value)}
              className="rounded-[8px] border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none transition focus:border-[#ffb000]/70"
              placeholder="Your name"
            />
          </label>

          <label className="grid gap-2 text-sm font-medium text-white/74">
            Phone
            <input
              value={quote.phone}
              onChange={(event) => updateQuote("phone", event.target.value)}
              className="rounded-[8px] border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none transition focus:border-[#ffb000]/70"
              placeholder="Best number to reach you"
            />
          </label>

          <label className="grid gap-2 text-sm font-medium text-white/74">
            Event Type
            <select
              value={quote.eventType}
              onChange={(event) => updateQuote("eventType", event.target.value)}
              className="rounded-[8px] border border-white/10 bg-[#0b0c16] px-4 py-3 text-white outline-none transition focus:border-[#ffb000]/70"
            >
              {eventTypes.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </label>

          <label className="grid gap-2 text-sm font-medium text-white/74">
            Event Date
            <input
              type="date"
              value={quote.eventDate}
              onChange={(event) => updateQuote("eventDate", event.target.value)}
              className="rounded-[8px] border border-white/10 bg-[#0b0c16] px-4 py-3 text-white outline-none transition focus:border-[#ffb000]/70"
            />
          </label>

          <label className="grid gap-2 text-sm font-medium text-white/74">
            City / Area
            <input
              value={quote.city}
              onChange={(event) => updateQuote("city", event.target.value)}
              className="rounded-[8px] border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none transition focus:border-[#ffb000]/70"
              placeholder="Atlanta, Alpharetta, Cumming..."
            />
          </label>

          <label className="grid gap-2 text-sm font-medium text-white/74">
            Venue Type
            <select
              value={quote.venueType}
              onChange={(event) => updateQuote("venueType", event.target.value)}
              className="rounded-[8px] border border-white/10 bg-[#0b0c16] px-4 py-3 text-white outline-none transition focus:border-[#ffb000]/70"
            >
              {venues.map((item) => (
                <option key={item.id}>{item.label}</option>
              ))}
            </select>
          </label>

          <label className="grid gap-2 text-sm font-medium text-white/74">
            Guest Coverage
            <select
              value={quote.guestCoverage}
              onChange={(event) => updateQuote("guestCoverage", event.target.value)}
              className="rounded-[8px] border border-white/10 bg-[#0b0c16] px-4 py-3 text-white outline-none transition focus:border-[#ffb000]/70"
            >
              {guestOptions.map((item) => (
                <option key={item.value}>{item.label}</option>
              ))}
            </select>
          </label>

          <label className="grid gap-2 text-sm font-medium text-white/74">
            Services Needed
            <select
              value={quote.services}
              onChange={(event) => updateQuote("services", event.target.value)}
              className="rounded-[8px] border border-white/10 bg-[#0b0c16] px-4 py-3 text-white outline-none transition focus:border-[#ffb000]/70"
            >
              {serviceOptions.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </label>

          <label className="grid gap-2 text-sm font-medium text-white/74 lg:col-span-2">
            Music Styles
            <input
              value={quote.music}
              onChange={(event) => updateQuote("music", event.target.value)}
              className="rounded-[8px] border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none transition focus:border-[#ffb000]/70"
              placeholder={musicOptions.join(", ")}
            />
          </label>

          <label className="grid gap-2 text-sm font-medium text-white/74 lg:col-span-2">
            Notes
            <textarea
              value={quote.notes}
              onChange={(event) => updateQuote("notes", event.target.value)}
              className="min-h-32 rounded-[8px] border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none transition focus:border-[#ffb000]/70"
              placeholder="Venue name, timing, family entrances, baraat needs, announcements, special songs, lighting requests..."
            />
          </label>

          <div className="flex flex-col gap-4 lg:col-span-2 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xl text-sm leading-relaxed text-white/54">
              This sends your selected details to WhatsApp so we can respond
              with availability and a private package recommendation.
            </p>
            <Button asChild className="liquid-glass rounded-full px-8 py-5 text-base text-white">
              <a href={quoteMessage} target="_blank" rel="noreferrer">
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                Send Quote Request
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function App() {
  return (
    <main className="min-h-screen bg-[#060814] text-foreground">
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#060814]/60 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <a
            href="#home"
            className="flex max-w-[12rem] items-center gap-2 text-white sm:max-w-none sm:gap-3"
            aria-label="Midnight Pulse DJs home"
          >
            <img
              src="/midnight-pulse-logo.svg"
              alt=""
              className="h-9 w-9 shrink-0 rounded-[10px] shadow-[0_0_28px_rgba(255,47,178,0.28)] sm:h-11 sm:w-11 sm:rounded-[12px]"
              aria-hidden="true"
            />
            <span className="font-display text-lg leading-none tracking-tight sm:text-3xl">
              Midnight Pulse DJs
            </span>
          </a>
          <div className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-white/66 transition-colors hover:text-white"
              >
                {item}
              </a>
            ))}
          </div>
          <WhatsAppButton className="px-5 py-2.5 text-sm transition-transform hover:scale-[1.03]">
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Book Now
          </WhatsAppButton>
        </div>
      </nav>

      <section
        id="home"
        className="relative flex min-h-screen overflow-hidden px-5 pt-28 sm:px-8"
      >
        <Background />
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/20 via-[#060814]/30 to-[#060814]" />

        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center justify-center pb-20 text-center">
          <p className="animate-fade-rise mb-5 text-sm font-medium uppercase tracking-[0.32em] text-[#ffb000]">
            South Asian weddings. Festival energy. Atlanta based.
          </p>
          <h1
            className="hero-copy-shadow animate-fade-rise max-w-6xl text-4xl font-normal leading-[0.94] tracking-[-1.2px] text-white sm:text-7xl sm:leading-[0.9] sm:tracking-[-2.46px] md:text-8xl"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Midnight Pulse DJs
          </h1>
          <p className="hero-copy-shadow animate-fade-rise-delay mt-8 max-w-2xl text-base leading-relaxed text-white/72 sm:text-lg">
            Atlanta's best house DJs for Indian weddings, house parties, sangeet,
            garba, mehndi, receptions, private events, and corporate celebrations.
          </p>
          <div className="animate-fade-rise-delay-2 mt-12 flex flex-col gap-4 sm:flex-row">
            <WhatsAppButton className="px-10 py-5 text-base transition-transform hover:scale-[1.03]">
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Message on WhatsApp
            </WhatsAppButton>
            <WhatsAppButton className="px-10 py-5 text-base transition-transform hover:scale-[1.03]">
              Start Booking
              <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
            </WhatsAppButton>
          </div>
        </div>
      </section>

      <SetupVisualizer />

      <section id="about" className="px-5 py-24 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.28em] text-[#ff2fb2]">
              About
            </p>
            <h2
              className="max-w-3xl text-4xl font-normal leading-tight text-white sm:text-6xl"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              South Asian event entertainment built for packed dance floors.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/64 sm:text-lg">
              Midnight Pulse DJs is built for Atlanta house-party energy and
              South Asian celebrations. We specialize in weddings, sangeet,
              garba, mehndi, private parties, and corporate events where
              Bollywood, Punjabi, Garba, Hip-Hop, Top 40, Latin, and club
              sounds need to move together without killing the moment.
            </p>
          </div>
          <div className="space-y-5">
            <div className="liquid-glass rounded-[8px] p-6">
              <div className="mb-4 flex items-center gap-3">
                <Zap className="h-5 w-5 text-[#ffb000]" aria-hidden="true" />
                <h3 className="text-xl font-medium text-white">
                  Why We Are Different
                </h3>
              </div>
              <p className="leading-relaxed text-white/64">
                We combine South Asian wedding experience, DJ + MC + lighting
                coordination, reliable execution, and fast WhatsApp booking so
                your family, planner, and guests stay in rhythm all night.
              </p>
            </div>
            <VideoReel
              label="About Reel"
              title="Gender reveal celebration with DJ lights."
              src={ABOUT_VIDEO_URL}
              variant="portrait"
            />
          </div>
        </div>
      </section>

      <section id="services" className="px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.28em] text-[#ffb000]">
                Services
              </p>
              <h2
                className="max-w-3xl text-4xl font-normal leading-tight text-white sm:text-6xl"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                Music, MC flow, and lighting for every celebration.
              </h2>
            </div>
            <WhatsAppButton className="w-fit px-8 py-4 text-sm">
              Check Availability
              <CalendarCheck className="h-4 w-4" aria-hidden="true" />
            </WhatsAppButton>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article key={service.title} className="liquid-glass rounded-[8px] p-6">
                  <Icon className="mb-8 h-7 w-7 text-[#ff2fb2]" aria-hidden="true" />
                  <h3 className="mb-3 text-2xl font-medium text-white">
                    {service.title}
                  </h3>
                  <p className="leading-relaxed text-white/62">
                    {service.description}
                  </p>
                </article>
              );
            })}
          </div>

          <div className="mt-8">
            <VideoReel
              label="Services Reel"
              title="House parties, weddings, sangeet, garba, and private events."
              src={SERVICES_VIDEO_URL}
            />
          </div>
        </div>
      </section>

      <section id="testimonials" className="px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.28em] text-[#ff2fb2]">
            Testimonials
          </p>
          <h2
            className="max-w-3xl text-4xl font-normal leading-tight text-white sm:text-6xl"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Placeholder reviews until your real client quotes are ready.
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <figure key={testimonial.name} className="liquid-glass rounded-[8px] p-6">
                <blockquote className="text-lg leading-relaxed text-white/76">
                  "{testimonial.quote}"
                </blockquote>
                <figcaption className="mt-6 text-sm font-medium uppercase tracking-[0.2em] text-[#ffb000]">
                  {testimonial.name}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <QuoteSection />

      <section id="contact" className="bg-black px-5 py-24 text-white sm:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="max-w-5xl text-4xl font-black uppercase leading-[0.96] tracking-normal sm:text-6xl lg:text-7xl">
            Get in touch and we will work our magic
          </h2>

          <div className="mt-12 grid max-w-2xl gap-7">
            <a
              href={`tel:${WHATSAPP_NUMBER}`}
              className="group flex items-center gap-6 text-base font-semibold text-white transition-colors hover:text-[#ffb000]"
            >
              <Phone className="h-8 w-8 shrink-0" aria-hidden="true" />
              <span>{WHATSAPP_DISPLAY}</span>
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="group flex items-center gap-6 text-base font-semibold text-white transition-colors hover:text-[#ffb000]"
            >
              <Mail className="h-8 w-8 shrink-0" aria-hidden="true" />
              <span>{EMAIL}</span>
            </a>
            <div className="flex items-center gap-6 text-base font-semibold text-white">
              <MapPin className="h-9 w-9 shrink-0" aria-hidden="true" />
              <span>Based in Atlanta</span>
            </div>
          </div>

          <div className="mt-28 grid gap-12 lg:grid-cols-[1.1fr_0.8fr_1fr] lg:items-end">
            <div>
              <a
                href="#home"
                className="flex max-w-sm items-center gap-5 text-[#ffb000]"
                aria-label="Midnight Pulse DJs home"
              >
                <img
                  src="/midnight-pulse-logo.svg"
                  alt=""
                  className="h-20 w-20 shrink-0 rounded-[20px] shadow-[0_0_42px_rgba(255,47,178,0.32)]"
                  aria-hidden="true"
                />
                <span
                  className="text-5xl font-normal leading-[0.95] sm:text-6xl"
                  style={{ fontFamily: "'Instrument Serif', serif" }}
                >
                  Midnight
                  <br />
                  Pulse DJs
                </span>
              </a>
              <p className="mt-5 max-w-xs text-xs font-semibold uppercase tracking-[0.42em] text-white/46">
                Music and Entertainment
              </p>
            </div>

            <div>
              <h3 className="mb-4 text-2xl font-black uppercase text-white">Explore</h3>
              <nav className="grid gap-2 text-sm font-semibold uppercase tracking-[0.08em]">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="w-fit text-white transition-colors hover:text-[#ffb000]"
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </div>

            <div>
              <h3 className="mb-4 text-2xl font-black uppercase text-white">
                We are where you are
              </h3>
              <div className="grid gap-3 text-sm text-white">
                <a className="w-fit hover:text-[#ffb000]" href={`tel:${WHATSAPP_NUMBER}`}>
                  {WHATSAPP_DISPLAY}
                </a>
                <a className="w-fit hover:text-[#ffb000]" href={`mailto:${EMAIL}`}>
                  {EMAIL}
                </a>
                <p>Atlanta Based</p>
              </div>
              <div className="mt-5 flex items-center gap-4">
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-sm font-black text-white transition-colors hover:border-[#ffb000] hover:text-[#ffb000]"
                  aria-label="Midnight Pulse DJs on Facebook"
                >
                  f
                </a>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-[10px] font-black uppercase tracking-tight text-white transition-colors hover:border-[#ff2fb2] hover:text-[#ff2fb2]"
                  aria-label="Midnight Pulse DJs on Instagram"
                >
                  IG
                </a>
              </div>
            </div>
          </div>

          <footer className="mt-20 border-t border-white/18 pt-8 text-center text-sm text-white/46">
            © 2026 Midnight Pulse DJs LLC. All rights reserved.
          </footer>
        </div>
      </section>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_18px_55px_rgba(37,211,102,0.35)] transition-transform hover:scale-105"
        aria-label="Message Midnight Pulse DJs on WhatsApp"
      >
        <MessageCircle className="h-7 w-7" aria-hidden="true" />
      </a>
    </main>
  );
}

export default App;
