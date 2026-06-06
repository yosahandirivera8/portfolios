import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { p as portfolio } from "./router-DXClO0qM.js";
import "@tanstack/react-router";
import "@tanstack/react-query";
import "react";
function Portfolio() {
  return /* @__PURE__ */ jsxs("main", { className: "min-h-screen bg-background text-foreground grain overflow-x-hidden", children: [
    /* @__PURE__ */ jsx(Nav, {}),
    /* @__PURE__ */ jsx(Hero, {}),
    /* @__PURE__ */ jsx(About, {}),
    /* @__PURE__ */ jsx(Projects, {}),
    /* @__PURE__ */ jsx(Skills, {}),
    /* @__PURE__ */ jsx(Experience, {}),
    /* @__PURE__ */ jsx(Testimonials, {}),
    /* @__PURE__ */ jsx(Contact, {}),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
function Nav() {
  return /* @__PURE__ */ jsx("header", { className: "sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6 py-4 flex items-center justify-between", children: [
    /* @__PURE__ */ jsxs("a", { href: "#top", className: "font-display text-2xl text-neon-cyan text-glow-cyan tracking-widest", children: [
      "YOSAHANDI RIVERA",
      /* @__PURE__ */ jsx("span", { className: "text-neon-magenta animate-blink", children: "_" })
    ] }),
    /* @__PURE__ */ jsx("nav", { className: "hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-widest", children: ["work", "about", "skills", "contact"].map((l) => /* @__PURE__ */ jsxs("a", { href: `#${l}`, className: "glitch-hover text-muted-foreground hover:text-foreground", children: [
      "▸ ",
      l
    ] }, l)) }),
    /* @__PURE__ */ jsx("a", { href: "#contact", className: "font-mono text-xs uppercase tracking-widest px-4 py-2 border border-neon-magenta text-neon-magenta hover:bg-neon-magenta hover:text-primary-foreground transition-colors", children: "[ HIRE ME ]" })
  ] }) });
}
function Hero() {
  return /* @__PURE__ */ jsxs("section", { id: "top", className: "relative min-h-[92vh] flex items-center overflow-hidden border-b border-border", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-cover bg-center opacity-40", style: {
      backgroundImage: `url(${portfolio.heroBg})`
    }, "aria-hidden": true }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-bg opacity-50", "aria-hidden": true }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background", "aria-hidden": true }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 scanlines pointer-events-none", "aria-hidden": true }),
    /* @__PURE__ */ jsx("div", { className: "absolute left-0 right-0 h-px bg-neon-cyan/40 animate-scan pointer-events-none", "aria-hidden": true }),
    /* @__PURE__ */ jsxs("div", { className: "relative max-w-7xl mx-auto px-6 py-24 w-full", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 font-mono text-xs text-neon-cyan mb-8 animate-flicker", children: [
        /* @__PURE__ */ jsx("span", { className: "w-2 h-2 bg-neon-cyan rounded-full glow-cyan" }),
        "SYSTEM ONLINE // CH.1 // ",
        portfolio.location
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "font-mono text-sm text-neon-magenta mb-4 tracking-widest", children: [
        "◢◤ ",
        portfolio.role,
        " ◥◣"
      ] }),
      /* @__PURE__ */ jsxs("h1", { className: "font-display text-7xl sm:text-8xl md:text-[10rem] leading-[0.85] text-foreground", children: [
        /* @__PURE__ */ jsx("span", { className: "block text-glow-cyan text-neon-cyan", children: portfolio.name.split(" ")[0] }),
        /* @__PURE__ */ jsx("span", { className: "block text-glow-magenta text-neon-magenta", children: portfolio.name.split(" ").slice(1).join(" ") })
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "mt-8 max-w-xl text-lg text-muted-foreground font-mono leading-relaxed", children: [
        "> ",
        portfolio.tagline,
        /* @__PURE__ */ jsx("span", { className: "animate-blink text-neon-magenta", children: "█" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-12 flex flex-wrap gap-4", children: [
        /* @__PURE__ */ jsx("a", { href: "#work", className: "group font-mono text-sm uppercase tracking-widest px-6 py-3 bg-neon-magenta text-primary-foreground glow-magenta hover:translate-y-[-2px] transition-transform", children: "► VIEW WORK" }),
        /* @__PURE__ */ jsx("a", { href: "#contact", className: "font-mono text-sm uppercase tracking-widest px-6 py-3 border border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-primary-foreground transition-colors", children: "◉ TRANSMIT MESSAGE" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-border border border-border max-w-3xl", children: portfolio.stats.map((s) => /* @__PURE__ */ jsxs("div", { className: "bg-surface/80 backdrop-blur p-4", children: [
        /* @__PURE__ */ jsx("div", { className: "font-display text-4xl text-neon-cyan text-glow-cyan", children: s.value }),
        /* @__PURE__ */ jsx("div", { className: "font-mono text-[10px] text-muted-foreground mt-1 tracking-widest", children: s.label })
      ] }, s.label)) })
    ] }),
    /* @__PURE__ */ jsx(CornerBrackets, {})
  ] });
}
function CornerBrackets() {
  const cls = "absolute w-8 h-8 border-neon-magenta pointer-events-none";
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { className: `${cls} top-20 left-4 border-t-2 border-l-2` }),
    /* @__PURE__ */ jsx("div", { className: `${cls} top-20 right-4 border-t-2 border-r-2` }),
    /* @__PURE__ */ jsx("div", { className: `${cls} bottom-4 left-4 border-b-2 border-l-2` }),
    /* @__PURE__ */ jsx("div", { className: `${cls} bottom-4 right-4 border-b-2 border-r-2` })
  ] });
}
function About() {
  return /* @__PURE__ */ jsx("section", { id: "about", className: "relative border-b border-border py-32", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6", children: [
    /* @__PURE__ */ jsx(SectionLabel, { num: "02", label: "ABOUT_THE_OPERATOR" }),
    /* @__PURE__ */ jsxs("h2", { className: "font-display text-5xl md:text-7xl text-foreground mt-4 leading-none", children: [
      "DESIGNER. ",
      /* @__PURE__ */ jsx("span", { className: "text-neon-magenta text-glow-magenta", children: "INNOVATIVE." }),
      " ",
      /* @__PURE__ */ jsx("span", { className: "text-neon-cyan text-glow-cyan", children: "DETAIL ORIENTED." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-8 space-y-5 text-lg text-muted-foreground max-w-3xl leading-relaxed", children: portfolio.about.map((p, i) => /* @__PURE__ */ jsx("p", { children: p }, i)) }),
    /* @__PURE__ */ jsx("div", { className: "mt-10 flex flex-wrap gap-2 font-mono text-xs", children: portfolio.socials.map((s) => /* @__PURE__ */ jsxs("a", { href: s.href, className: "px-3 py-1.5 border border-border hover:border-neon-cyan hover:text-neon-cyan transition-colors", children: [
      "→ ",
      s.label
    ] }, s.label)) })
  ] }) });
}
function Projects() {
  return /* @__PURE__ */ jsx("section", { id: "work", className: "border-b border-border py-32", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-end justify-between flex-wrap gap-4 mb-16", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(SectionLabel, { num: "03", label: "SELECTED_WORK" }),
        /* @__PURE__ */ jsxs("h2", { className: "font-display text-5xl md:text-7xl mt-4", children: [
          /* @__PURE__ */ jsx("span", { className: "text-neon-cyan text-glow-cyan", children: "CASE" }),
          " ",
          /* @__PURE__ */ jsx("span", { className: "text-neon-magenta text-glow-magenta", children: "FILES" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "font-mono text-xs text-muted-foreground max-w-xs", children: [
        "// ",
        portfolio.projects.length,
        " entries logged. Scroll down ▼"
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "space-y-px bg-border border border-border", children: portfolio.projects.map((p, i) => /* @__PURE__ */ jsx(ProjectRow, { project: p, reverse: i % 2 === 1 }, p.id)) })
  ] }) });
}
function ProjectRow({
  project,
  reverse
}) {
  return /* @__PURE__ */ jsxs("article", { className: `group bg-background grid md:grid-cols-12 gap-0 ${reverse ? "md:[direction:rtl]" : ""}`, children: [
    /* @__PURE__ */ jsxs("div", { className: "md:col-span-7 relative overflow-hidden [direction:ltr] border-b md:border-b-0 md:border-r border-border", children: [
      /* @__PURE__ */ jsx("div", { className: "aspect-[16/10] overflow-hidden bg-surface", children: /* @__PURE__ */ jsx("img", { src: project.cover, alt: project.title, loading: "lazy", width: 1024, height: 768, className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale-[15%] group-hover:grayscale-0" }) }),
      /* @__PURE__ */ jsxs("div", { className: "absolute top-3 left-3 font-mono text-xs text-neon-cyan bg-background/80 px-2 py-1 border border-neon-cyan/50", children: [
        "CASE_",
        project.id
      ] }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-3 right-3 font-mono text-[10px] text-neon-magenta bg-background/80 px-2 py-1", children: project.year }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 scanlines opacity-50 pointer-events-none" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "md:col-span-5 [direction:ltr] p-8 md:p-10 flex flex-col justify-between", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("p", { className: "font-mono text-xs text-neon-magenta tracking-widest mb-3", children: [
          "◆ CLIENT // ",
          project.client
        ] }),
        /* @__PURE__ */ jsx("h3", { className: "font-display text-4xl md:text-5xl text-foreground leading-none group-hover:text-neon-cyan group-hover:text-glow-cyan transition-colors", children: project.title }),
        /* @__PURE__ */ jsx("p", { className: "mt-5 text-muted-foreground leading-relaxed", children: project.summary })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-8", children: [
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2 mb-6", children: project.tags.map((t) => /* @__PURE__ */ jsxs("span", { className: "font-mono text-[10px] px-2 py-1 border border-border text-muted-foreground", children: [
          "#",
          t
        ] }, t)) }),
        project.link && /* @__PURE__ */ jsxs("a", { href: project.link, target: "_blank", className: "inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-neon-cyan hover:text-neon-magenta transition-colors", children: [
          "OPEN CASE FILE ",
          /* @__PURE__ */ jsx("span", { "aria-hidden": true, children: "→" })
        ] })
      ] })
    ] })
  ] });
}
function Skills() {
  return /* @__PURE__ */ jsxs("section", { id: "skills", className: "border-b border-border py-32 relative overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-bg opacity-30 pointer-events-none" }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6 relative", children: [
      /* @__PURE__ */ jsx(SectionLabel, { num: "04", label: "CAPABILITIES_MATRIX" }),
      /* @__PURE__ */ jsxs("h2", { className: "font-display text-5xl md:text-7xl mt-4 mb-16", children: [
        /* @__PURE__ */ jsx("span", { className: "text-neon-magenta text-glow-magenta", children: "LOADED" }),
        " ",
        /* @__PURE__ */ jsx("span", { className: "text-neon-cyan text-glow-cyan", children: "MODULES" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-5 gap-px bg-border border border-border", children: portfolio.skills.map((s, i) => /* @__PURE__ */ jsxs("div", { className: "bg-surface p-6 hover:bg-neon-magenta hover:text-primary-foreground transition-colors group", children: [
        /* @__PURE__ */ jsxs("div", { className: "font-mono text-[10px] text-neon-cyan group-hover:text-primary-foreground mb-2", children: [
          "MOD_",
          String(i + 1).padStart(2, "0")
        ] }),
        /* @__PURE__ */ jsx("div", { className: "font-display text-xl", children: s })
      ] }, s)) })
    ] })
  ] });
}
function Experience() {
  return /* @__PURE__ */ jsx("section", { className: "border-b border-border py-32", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12", children: [
    /* @__PURE__ */ jsxs("div", { className: "md:col-span-4", children: [
      /* @__PURE__ */ jsx(SectionLabel, { num: "05", label: "LOG_HISTORY" }),
      /* @__PURE__ */ jsxs("h2", { className: "font-display text-5xl md:text-6xl mt-4 leading-none", children: [
        /* @__PURE__ */ jsx("span", { className: "text-neon-cyan text-glow-cyan", children: "MISSION" }),
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("span", { className: "text-neon-magenta text-glow-magenta", children: "LOG" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("ol", { className: "md:col-span-8 relative border-l-2 border-border pl-8 space-y-10", children: portfolio.experience.map((e) => /* @__PURE__ */ jsxs("li", { className: "relative", children: [
      /* @__PURE__ */ jsx("span", { className: "absolute -left-[41px] top-1 w-4 h-4 bg-background border-2 border-neon-magenta rotate-45" }),
      /* @__PURE__ */ jsx("p", { className: "font-mono text-xs text-neon-cyan mb-1", children: e.period }),
      /* @__PURE__ */ jsx("p", { className: "font-display text-3xl", children: e.role }),
      /* @__PURE__ */ jsxs("p", { className: "font-mono text-muted-foreground", children: [
        "@ ",
        e.company
      ] })
    ] }, e.period)) })
  ] }) });
}
function Testimonials() {
  return /* @__PURE__ */ jsx("section", { className: "border-b border-border py-32", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6", children: [
    /* @__PURE__ */ jsx(SectionLabel, { num: "06", label: "INTERCEPTED_TRANSMISSIONS" }),
    /* @__PURE__ */ jsx("div", { className: "mt-12 grid md:grid-cols-2 gap-6", children: portfolio.testimonials.map((t, i) => /* @__PURE__ */ jsxs("figure", { className: "relative bg-surface border border-border p-8 hover:border-neon-magenta transition-colors", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-3 right-3 font-mono text-[10px] text-neon-cyan animate-flicker", children: "▶ PLAYBACK" }),
      /* @__PURE__ */ jsxs("blockquote", { className: "font-display text-2xl md:text-3xl text-foreground leading-tight", children: [
        '"',
        t.quote,
        '"'
      ] }),
      /* @__PURE__ */ jsxs("figcaption", { className: "mt-6 font-mono text-xs text-neon-magenta", children: [
        "— ",
        t.author
      ] })
    ] }, i)) })
  ] }) });
}
function Contact() {
  return /* @__PURE__ */ jsxs("section", { id: "contact", className: "border-b border-border py-32 relative overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-bg opacity-20" }),
    /* @__PURE__ */ jsx("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-magenta/20 blur-[120px] rounded-full" }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-6 relative text-center", children: [
      /* @__PURE__ */ jsx(SectionLabel, { num: "07", label: "ESTABLISH_CONNECTION", center: true }),
      /* @__PURE__ */ jsxs("h2", { className: "font-display text-6xl md:text-8xl mt-6 leading-none", children: [
        /* @__PURE__ */ jsx("span", { className: "text-neon-cyan text-glow-cyan", children: "LET'S" }),
        " ",
        /* @__PURE__ */ jsx("span", { className: "text-neon-magenta text-glow-magenta", children: "BUILD" }),
        /* @__PURE__ */ jsx("br", {}),
        "SOMETHING",
        " ",
        /* @__PURE__ */ jsx("span", { className: "text-neon-magenta text-glow-magenta", children: "DANGEROUS" }),
        "."
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-8 font-mono text-muted-foreground max-w-md mx-auto", children: "> Open a channel. Tell me about your product, your weird idea, your impossible deadline." }),
      /* @__PURE__ */ jsx("div", { className: "mt-10 flex justify-center gap-3 flex-wrap font-mono text-xs", children: portfolio.socials.map((s) => /* @__PURE__ */ jsxs("a", { href: s.href, className: "px-4 py-2 border border-border hover:border-neon-magenta hover:text-neon-magenta transition-colors", children: [
        s.label,
        " ↗"
      ] }, s.label)) })
    ] })
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsx("footer", { className: "py-8 border-t border-border", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-muted-foreground", children: [
    /* @__PURE__ */ jsxs("p", { children: [
      "© 2026 ",
      portfolio.name,
      " // ALL FRAMES RESERVED"
    ] }),
    /* @__PURE__ */ jsx("p", { className: "text-neon-magenta animate-flicker", children: "CH.1 — END OF TRANSMISSION" })
  ] }) });
}
function SectionLabel({
  num,
  label,
  center = false
}) {
  return /* @__PURE__ */ jsxs("div", { className: `font-mono text-xs text-neon-magenta tracking-widest flex items-center gap-3 ${center ? "justify-center" : ""}`, children: [
    /* @__PURE__ */ jsxs("span", { className: "text-neon-cyan", children: [
      "[",
      num,
      "]"
    ] }),
    /* @__PURE__ */ jsx("span", { className: "h-px w-8 bg-neon-magenta" }),
    label
  ] });
}
export {
  Portfolio as component
};
