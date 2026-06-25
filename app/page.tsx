import Image from "next/image";
import { Reveal } from "./components/Reveal";
import { SiteHeader } from "./components/SiteHeader";

const CONTACT_EMAIL = "maryiddowu@gmail.com";
const LINKEDIN_URL = "https://www.linkedin.com/in/mary-idowu/";

// Shared horizontal container so every block lines up to the same inline margin.
const WRAP = "mx-auto w-full max-w-7xl px-6 sm:px-10";

const expertise = [
  { label: "Executive support", color: "#2563eb" },
  { label: "Inbox & calendar", color: "#ea580c" },
  { label: "CRM", color: "#a855f7" },
  { label: "Customer support", color: "#ef4444" },
  { label: "Real estate", color: "#16a34a" },
  { label: "Social media", color: "#0ea5e9" },
];

const work = [
  {
    src: "/gmail-labels.png",
    title: "Inbox & label organization",
    caption: "Structured Gmail labels and filters for zero-clutter inboxes",
  },
  {
    src: "/project-management.png",
    title: "Project & task management",
    caption: "Tracking deliverables, owners and deadlines in one board",
  },
  {
    src: "/slack-workspace.png",
    title: "Team workspace setup",
    caption: "Channels, automations and onboarding in Slack",
  },
  {
    src: "/activecampaign-contacts.png",
    title: "CRM & contact management",
    caption: "Segmented contacts and pipelines in ActiveCampaign",
  },
  {
    src: "/event-scheduling.jpg",
    title: "Meeting & event scheduling",
    caption: "Coordinating calendars across timezones and teams",
  },
  {
    src: "/travel-itinerary.jpg",
    title: "Travel itineraries",
    caption: "Door-to-door itineraries with every detail confirmed",
  },
  {
    src: "/travel-plan-hotels.jpg",
    title: "Travel & accommodation planning",
    caption: "Flights, hotels and ground transport, fully arranged",
  },
];

const services = [
  {
    title: "Calendar & inbox management",
    body: "Triaged inboxes, protected focus time and a calendar that always reflects reality.",
  },
  {
    title: "Administrative & customer support",
    body: "Day-to-day admin and warm customer communication that keep operations moving.",
  },
  {
    title: "CRM management",
    body: "Clean contact data and organized pipelines in HubSpot, ActiveCampaign and similar tools.",
  },
  {
    title: "Project & meeting coordination",
    body: "Plans, owners and deadlines kept on track, plus agendas and follow-ups handled.",
  },
  {
    title: "Travel planning & research",
    body: "End-to-end itineraries and thorough internet research, documented and ready to go.",
  },
  {
    title: "Real estate & social media",
    body: "Listing management, client follow-ups, property research, lead tracking and social media assistance.",
  },
];

const strengths = [
  "Organized",
  "Proactive",
  "Detail-oriented",
  "Easy to work with",
  "Reliable",
  "Efficient",
  "Tech-savvy",
];

export default function Home() {
  return (
    <div id="top" className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* ---------- About ---------- */}
        <section id="about" className="flex min-h-screen scroll-mt-20 items-center bg-cream py-24">
          <div className={`${WRAP} grid gap-12 lg:grid-cols-2 lg:items-center`}>
            <Reveal>
              <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden bg-cream">
                <Image
                  src="/mary.webp"
                  alt="Mary Idowu"
                  fill
                  sizes="(min-width: 1024px) 40vw, 90vw"
                  className="object-cover object-center"
                  priority
                />
              </div>
            </Reveal>

            <div>
              <Reveal>
                <h2 className="mt-4 text-3xl font-light leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
                  Hi, I&apos;m{" "}
                  <span className="font-semibold">Mary Idowu</span>, an executive
                  assistant &amp; customer support specialist
                </h2>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="mt-6 max-w-xl space-y-4 text-base leading-relaxed text-muted">
                  <p>
                    I support executives, startups and growing businesses with the
                    day-to-day operations that keep things organized, efficient and
                    running smoothly — from calendar and inbox management to customer
                    communication, project coordination, CRM, travel planning and
                    social media. I also support real estate businesses with listing
                    management, client follow-ups, property research and lead tracking.
                  </p>
                  <p>
                    I&apos;m skilled with tools like Google Workspace, Slack, HubSpot
                    and project management platforms, and my goal is to help businesses
                    save time, stay on top of operations, and create systems that make
                    daily work less stressful and more efficient.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <ul className="mt-8 flex flex-wrap gap-2.5">
                  {strengths.map((s) => (
                    <li
                      key={s}
                      className="rounded-full border border-line bg-paper px-4 py-2 text-sm text-ink"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ---------- Intro ---------- */}
        <section className="py-24">
          <div className={WRAP}>
            <Reveal>
              <h1 className="max-w-5xl text-4xl font-light leading-[1.08] tracking-tight text-ink sm:text-6xl md:text-7xl">
                Organization is my superpower.{" "}
                <span className="font-semibold">
                  I keep executives, teams and customers running smoothly
                </span>{" "}
                where chaos meets calm
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <p className="max-w-xl text-base text-muted sm:text-lg">
                  I&apos;m an executive administrative assistant and customer
                  support specialist turning busy operations into seamless
                  experiences.
                </p>
                <ul className="flex flex-wrap gap-2.5">
                  {expertise.map((item) => (
                    <li
                      key={item.label}
                      className="flex items-center gap-2 rounded-full bg-cream px-4 py-2 text-sm text-ink"
                    >
                      <span
                        className="h-2 w-2 rounded-full"
                        style={{ backgroundColor: item.color }}
                      />
                      {item.label}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ---------- Work ---------- */}
        <section id="work" className="scroll-mt-20 bg-cream py-24">
          <div className={WRAP}>
            <Reveal>
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted">
                Selected work
              </p>
              <h2 className="mt-4 max-w-3xl text-3xl font-light leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
                Systems and setups I&apos;ve built to keep teams in flow
              </h2>
            </Reveal>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {work.map((item, i) => (
                <Reveal key={item.src} delay={(i % 3) * 0.08} as="div">
                  <figure className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-paper">
                    <div className="relative aspect-[16/10] overflow-hidden bg-cream">
                      <Image
                        src={item.src}
                        alt={item.title}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                    <figcaption className="flex flex-1 flex-col gap-1 p-5">
                      <h3 className="text-base font-semibold text-ink">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted">{item.caption}</p>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Services ---------- */}
        <section id="services" className="scroll-mt-20 py-24">
          <div className={WRAP}>
            <Reveal>
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted">
                What I do
              </p>
              <h2 className="mt-4 max-w-3xl text-3xl font-light leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
                Skills &amp; services that take work off your plate
              </h2>
            </Reveal>

            <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service, i) => (
                <Reveal key={service.title} delay={(i % 3) * 0.08} as="div">
                  <article className="flex h-full flex-col gap-3 bg-paper p-8">
                    <span className="text-sm font-medium text-muted">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-lg font-semibold text-ink">
                      {service.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted">
                      {service.body}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Contact ---------- */}
        <section id="contact" className="scroll-mt-20 bg-cream pb-10 pt-24">
          <div className={WRAP}>
            <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-start">
              <Reveal>
                <p className="text-lg font-semibold text-ink">
                  Have a project in mind?
                </p>
                <h2 className="mt-4 text-[14vw] font-light leading-none tracking-tight text-ink/15 sm:text-7xl lg:text-8xl">
                  Let&apos;s Talk....
                </h2>
              </Reveal>

              <Reveal delay={0.1}>
                <ul className="flex flex-col gap-3 text-base text-ink/80 sm:text-right">
                  <li>
                    <a
                      className="transition-colors hover:text-ink"
                      href={LINKEDIN_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a
                      className="transition-colors hover:text-ink"
                      href={`mailto:${CONTACT_EMAIL}`}
                    >
                      Email
                    </a>
                  </li>
                </ul>
              </Reveal>
            </div>

            <Reveal delay={0.15}>
              <svg
                viewBox="0 0 1000 180"
                className="mt-12 w-full text-ink sm:mt-20"
                role="img"
                aria-label="Mary Idowu"
              >
                <text
                  x="0"
                  y="145"
                  textLength="1000"
                  lengthAdjust="spacingAndGlyphs"
                  fontSize="180"
                  fontWeight="700"
                  fill="currentColor"
                  style={{ fontFamily: "inherit" }}
                >
                  MARY IDOWU
                </text>
              </svg>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-line bg-cream py-6">
        <p className={`${WRAP} text-sm text-muted`}>
          © {new Date().getFullYear()} Mary Idowu. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
