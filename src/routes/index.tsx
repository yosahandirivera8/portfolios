import { createFileRoute } from "@tanstack/react-router";
import { portfolio } from "@/lib/portfolio-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${portfolio.name} // ${portfolio.role}` },
      {
        name: "description",
        content: `${portfolio.name} — ${portfolio.role}. ${portfolio.tagline}`,
      },
      { property: "og:title", content: `${portfolio.name} // ${portfolio.role}` },
      { property: "og:description", content: portfolio.tagline },
      { property: "og:type", content: "website" },
      { property: "og:image", content: portfolio.heroBg },
      { name: "twitter:image", content: portfolio.heroBg },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  return (
    <main className="min-h-screen bg-background text-foreground grain overflow-x-hidden">
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}

/* ---------- NAV ---------- */
function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#top" className="font-display text-2xl text-neon-cyan text-glow-cyan tracking-widest">
          YOSAHANDI RIVERA<span className="text-neon-magenta animate-blink">_</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-widest">
          {["work", "about", "skills", "contact"].map((l) => (
            <a key={l} href={`#${l}`} className="glitch-hover text-muted-foreground hover:text-foreground">
              ▸ {l}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="font-mono text-xs uppercase tracking-widest px-4 py-2 border border-neon-magenta text-neon-magenta hover:bg-neon-magenta hover:text-primary-foreground transition-colors"
        >
          [ HIRE ME ]
        </a>
      </div>
    </header>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  return (
    <section id="top" className="relative min-h-[92vh] flex items-center overflow-hidden border-b border-border">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(${portfolio.heroBg})` }}
        aria-hidden
      />
      <div className="absolute inset-0 grid-bg opacity-50" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background" aria-hidden />
      <div className="absolute inset-0 scanlines pointer-events-none" aria-hidden />

      {/* Floating scan line */}
      <div className="absolute left-0 right-0 h-px bg-neon-cyan/40 animate-scan pointer-events-none" aria-hidden />

      <div className="relative max-w-7xl mx-auto px-6 py-24 w-full">
        <div className="flex items-center gap-3 font-mono text-xs text-neon-cyan mb-8 animate-flicker">
          <span className="w-2 h-2 bg-neon-cyan rounded-full glow-cyan" />
          SYSTEM ONLINE // CH.1 // {portfolio.location}
        </div>

        <p className="font-mono text-sm text-neon-magenta mb-4 tracking-widest">
          ◢◤ {portfolio.role} ◥◣
        </p>

        <h1 className="font-display text-7xl sm:text-8xl md:text-[10rem] leading-[0.85] text-foreground">
          <span className="block text-glow-cyan text-neon-cyan">{portfolio.name.split(" ")[0]}</span>
          <span className="block text-glow-magenta text-neon-magenta">
            {portfolio.name.split(" ").slice(1).join(" ")}
          </span>
        </h1>

        <p className="mt-8 max-w-xl text-lg text-muted-foreground font-mono leading-relaxed">
          &gt; {portfolio.tagline}
          <span className="animate-blink text-neon-magenta">█</span>
        </p>

        <div className="mt-12 flex flex-wrap gap-4">
          <a
            href="#work"
            className="group font-mono text-sm uppercase tracking-widest px-6 py-3 bg-neon-magenta text-primary-foreground glow-magenta hover:translate-y-[-2px] transition-transform"
          >
            ► VIEW WORK
          </a>
          <a
            href="#contact"
            className="font-mono text-sm uppercase tracking-widest px-6 py-3 border border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-primary-foreground transition-colors"
          >
            ◉ TRANSMIT MESSAGE
          </a>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-border border border-border max-w-3xl">
          {portfolio.stats.map((s) => (
            <div key={s.label} className="bg-surface/80 backdrop-blur p-4">
              <div className="font-display text-4xl text-neon-cyan text-glow-cyan">{s.value}</div>
              <div className="font-mono text-[10px] text-muted-foreground mt-1 tracking-widest">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Corner brackets */}
      <CornerBrackets />
    </section>
  );
}

function CornerBrackets() {
  const cls = "absolute w-8 h-8 border-neon-magenta pointer-events-none";
  return (
    <>
      <div className={`${cls} top-20 left-4 border-t-2 border-l-2`} />
      <div className={`${cls} top-20 right-4 border-t-2 border-r-2`} />
      <div className={`${cls} bottom-4 left-4 border-b-2 border-l-2`} />
      <div className={`${cls} bottom-4 right-4 border-b-2 border-r-2`} />
    </>
  );
}

/* ---------- ABOUT ---------- */
function About() {
  return (
    <section id="about" className="relative border-b border-border py-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionLabel num="02" label="ABOUT_THE_OPERATOR" />
        <h2 className="font-display text-5xl md:text-7xl text-foreground mt-4 leading-none">
          DESIGNER. <span className="text-neon-magenta text-glow-magenta">INNOVATIVE.</span>{" "}
          <span className="text-neon-cyan text-glow-cyan">DETAIL ORIENTED.</span>
        </h2>
        <div className="mt-8 space-y-5 text-lg text-muted-foreground max-w-3xl leading-relaxed">
          {portfolio.about.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-2 font-mono text-xs">
          {portfolio.socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              className="px-3 py-1.5 border border-border hover:border-neon-cyan hover:text-neon-cyan transition-colors"
            >
              → {s.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- PROJECTS ---------- */
function Projects() {
  return (
    <section id="work" className="border-b border-border py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-16">
          <div>
            <SectionLabel num="03" label="SELECTED_WORK" />
            <h2 className="font-display text-5xl md:text-7xl mt-4">
              <span className="text-neon-cyan text-glow-cyan">CASE</span>{" "}
              <span className="text-neon-magenta text-glow-magenta">FILES</span>
            </h2>
          </div>
          <p className="font-mono text-xs text-muted-foreground max-w-xs">
            // {portfolio.projects.length} entries logged. Scroll down ▼
          </p>
        </div>

        <div className="space-y-px bg-border border border-border">
          {portfolio.projects.map((p, i) => (
            <ProjectRow key={p.id} project={p} reverse={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectRow({
  project,
  reverse,
}: {
  project: (typeof portfolio.projects)[number];
  reverse: boolean;
}) {
  return (
    <article
      className={`group bg-background grid md:grid-cols-12 gap-0 ${
        reverse ? "md:[direction:rtl]" : ""
      }`}
    >
      <div className="md:col-span-7 relative overflow-hidden [direction:ltr] border-b md:border-b-0 md:border-r border-border">
        <div className="aspect-[16/10] overflow-hidden bg-surface">
          <img
            src={project.cover}
            alt={project.title}
            loading="lazy"
            width={1024}
            height={768}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale-[15%] group-hover:grayscale-0"
          />
        </div>
        <div className="absolute top-3 left-3 font-mono text-xs text-neon-cyan bg-background/80 px-2 py-1 border border-neon-cyan/50">
          CASE_{project.id}
        </div>
        <div className="absolute bottom-3 right-3 font-mono text-[10px] text-neon-magenta bg-background/80 px-2 py-1">
          {project.year}
        </div>
        <div className="absolute inset-0 scanlines opacity-50 pointer-events-none" />
      </div>

      <div className="md:col-span-5 [direction:ltr] p-8 md:p-10 flex flex-col justify-between">
        <div>
          <p className="font-mono text-xs text-neon-magenta tracking-widest mb-3">
            ◆ CLIENT // {project.client}
          </p>
          <h3 className="font-display text-4xl md:text-5xl text-foreground leading-none group-hover:text-neon-cyan group-hover:text-glow-cyan transition-colors">
            {project.title}
          </h3>
          <p className="mt-5 text-muted-foreground leading-relaxed">{project.summary}</p>
        </div>

        <div className="mt-8">
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((t) => (
              <span
                key={t}
                className="font-mono text-[10px] px-2 py-1 border border-border text-muted-foreground"
              >
                #{t}
              </span>
            ))}
          </div>
          {project.link && (
           <a
            href={project.link}
            target = "_blank"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-neon-cyan hover:text-neon-magenta transition-colors"
          >
            OPEN CASE FILE <span aria-hidden>→</span>
          </a>
           )}
        </div>
      </div>
    </article>
  );
}

/* ---------- SKILLS ---------- */
function Skills() {
  return (
    <section id="skills" className="border-b border-border py-32 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative">
        <SectionLabel num="04" label="CAPABILITIES_MATRIX" />
        <h2 className="font-display text-5xl md:text-7xl mt-4 mb-16">
          <span className="text-neon-magenta text-glow-magenta">LOADED</span>{" "}
          <span className="text-neon-cyan text-glow-cyan">MODULES</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-border border border-border">
          {portfolio.skills.map((s, i) => (
            <div
              key={s}
              className="bg-surface p-6 hover:bg-neon-magenta hover:text-primary-foreground transition-colors group"
            >
              <div className="font-mono text-[10px] text-neon-cyan group-hover:text-primary-foreground mb-2">
                MOD_{String(i + 1).padStart(2, "0")}
              </div>
              <div className="font-display text-xl">{s}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- EXPERIENCE ---------- */
function Experience() {
  return (
    <section className="border-b border-border py-32">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <SectionLabel num="05" label="LOG_HISTORY" />
          <h2 className="font-display text-5xl md:text-6xl mt-4 leading-none">
            <span className="text-neon-cyan text-glow-cyan">MISSION</span>
            <br />
            <span className="text-neon-magenta text-glow-magenta">LOG</span>
          </h2>
        </div>
        <ol className="md:col-span-8 relative border-l-2 border-border pl-8 space-y-10">
          {portfolio.experience.map((e) => (
            <li key={e.period} className="relative">
              <span className="absolute -left-[41px] top-1 w-4 h-4 bg-background border-2 border-neon-magenta rotate-45" />
              <p className="font-mono text-xs text-neon-cyan mb-1">{e.period}</p>
              <p className="font-display text-3xl">{e.role}</p>
              <p className="font-mono text-muted-foreground">@ {e.company}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------- TESTIMONIALS ---------- */
function Testimonials() {
  return (
    <section className="border-b border-border py-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionLabel num="06" label="INTERCEPTED_TRANSMISSIONS" />
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {portfolio.testimonials.map((t, i) => (
            <figure
              key={i}
              className="relative bg-surface border border-border p-8 hover:border-neon-magenta transition-colors"
            >
              <div className="absolute top-3 right-3 font-mono text-[10px] text-neon-cyan animate-flicker">
                ▶ PLAYBACK
              </div>
              <blockquote className="font-display text-2xl md:text-3xl text-foreground leading-tight">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 font-mono text-xs text-neon-magenta">
                — {t.author}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- CONTACT ---------- */
function Contact() {
  return (
    <section id="contact" className="border-b border-border py-32 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-magenta/20 blur-[120px] rounded-full" />
      <div className="max-w-4xl mx-auto px-6 relative text-center">
        <SectionLabel num="07" label="ESTABLISH_CONNECTION" center />
        <h2 className="font-display text-6xl md:text-8xl mt-6 leading-none">
          <span className="text-neon-cyan text-glow-cyan">LET'S</span>{" "}
          <span className="text-neon-magenta text-glow-magenta">BUILD</span>
          <br />
          SOMETHING{" "}
          <span className="text-neon-magenta text-glow-magenta">DANGEROUS</span>.
        </h2>
        <p className="mt-8 font-mono text-muted-foreground max-w-md mx-auto">
          &gt; Open a channel. Tell me about your product, your weird idea, your impossible deadline.
        </p>
        <div className="mt-10 flex justify-center gap-3 flex-wrap font-mono text-xs">
          {portfolio.socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              className="px-4 py-2 border border-border hover:border-neon-magenta hover:text-neon-magenta transition-colors"
            >
              {s.label} ↗
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FOOTER ---------- */
function Footer() {
  return (
    <footer className="py-8 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-muted-foreground">
        <p>© 2026 {portfolio.name} // ALL FRAMES RESERVED</p>
        <p className="text-neon-magenta animate-flicker">CH.1 — END OF TRANSMISSION</p>
      </div>
    </footer>
  );
}

/* ---------- SHARED ---------- */
function SectionLabel({
  num,
  label,
  center = false,
}: {
  num: string;
  label: string;
  center?: boolean;
}) {
  return (
    <div
      className={`font-mono text-xs text-neon-magenta tracking-widest flex items-center gap-3 ${
        center ? "justify-center" : ""
      }`}
    >
      <span className="text-neon-cyan">[{num}]</span>
      <span className="h-px w-8 bg-neon-magenta" />
      {label}
    </div>
  );
}
