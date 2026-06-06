import { createRootRouteWithContext, useRouter, Link, Outlet, HeadContent, Scripts, createFileRoute, lazyRouteComponent, createRouter } from "@tanstack/react-router";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
const appCss = "/portfolios/assets/styles-BtH2541L.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$1 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Lovable App" },
      { name: "description", content: "Lovable Generated Project" },
      { name: "author", content: "Lovable" },
      { property: "og:title", content: "Lovable App" },
      { property: "og:description", content: "Lovable Generated Project" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=VT323&family=Space+Mono:wght@400;700&family=Space+Grotesk:wght@300;400;500;700&display=swap"
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$1.useRouteContext();
  return /* @__PURE__ */ jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsx(Outlet, {}) });
}
const heroCity = "/portfolios/assets/hero-city-2J4rZi1e.jpg";
const portfolio = {
  name: "YOSAHANDI RIVERA",
  role: "UX / UI DESIGNER",
  tagline: "Cognitive Science x Machine Learning student at UCSD designing user-centered digital experiences.",
  location: "Los Angeles, CA // UCSD",
  heroBg: heroCity,
  socials: [
    { label: "GITHUB", href: "https://github.com/yosahandirivera8" },
    { label: "EMAIL", href: "mailto:yosahandirn0917@gmail.com" },
    { label: "RESUME", href: "src/assets/YosahandiRivera.pdf" }
  ],
  about: [
    "Cognitive Science (Machine Learning) student at the University of California, San Diego with a Computer Science minor and experience designing user-centered web applications.",
    "Skilled in UX/UI design, prototyping, front-end development, and user research. I thrive in fast-paced environments, collaborating on cross-functional teams to build responsive, accessible digital experiences that improve usability and engagement."
  ],
  stats: [
    { label: "STUDENTS TAUGHT", value: "40+" },
    { label: "ENGAGEMENT LIFT", value: "25%" },
    { label: "LANGUAGES SPOKEN", value: "02" },
    { label: "GRADUATION YEAR", value: "26" }
  ],
  skills: [
    "FIGMA/ FigmaMake",
    "PROTOTYPING",
    "USER RESEARCH",
    "USABILITY TESTING",
    "HTML / CSS / JS",
    "PYTHON",
    "C++ / C",
    "JAVA",
    "GIT",
    "MATLAB",
    "REACT",
    "Vite",
    "TypeScript",
    "JupyterNotebook",
    "BILINGUAL EN/ES"
  ],
  projects: [
    {
      id: "01",
      title: "INFORMATION SPACE // Student Platform",
      client: "UCSD — PRODUCT DESIGN",
      year: "2026",
      tags: ["UX RESEARCH", "PROTOTYPING", "FIGMA"],
      summary: "Centralized platform for college students. Conducted user interviews, synthesized insights into personas, and translated findings into wireframes and a high-fidelity prototype integrating class organization and peer interaction.",
      cover: "https://giffiles.alphacoders.com/171/171318.gif",
      imageAlt: "INFORMATION SPACE Student Platform Demo GIF",
      link: "https://www.figma.com/make/N0zUBe4OwceKpSABE6NcVx/Syllabus-and-Assignment-Organizer?fullscreen=1&t=agSiLpeCiRL48S10-1&code-node-id=0-9"
    },
    {
      id: "02",
      title: "CAFFEINE × COGNITION // Research Study",
      client: "UCSD RESEARCH",
      year: "2025",
      tags: ["DATA VIZ", "PYTHON", "RESEARCH"],
      summary: "Collected, cleaned, and analyzed survey + behavioral data from student participants using Python (Pandas, Seaborn). Built interactive dashboards visualizing correlations between caffeine intake and cognitive performance.",
      cover: "https://i.pinimg.com/736x/20/79/2a/20792a08b9eeaf1182c9cc5345c4ebf7.jpg",
      link: "https://github.com/yosahandirivera8/Caffeine_effects.git"
    },
    {
      id: "03",
      title: "STUDYBUDDY // Collaboration Webapp",
      client: "PERSONAL PROJECT",
      year: "2022",
      tags: ["HTML", "CSS", "JAVASCRIPT"],
      summary: "Dynamic web application for streamlined student collaboration and real-time schedule matching. Bootstrap-powered mobile-first design improved cross-device responsiveness by 50%.",
      cover: "https://i.pinimg.com/originals/91/81/55/918155387ad114a903cba1a13506e3be.gif",
      imageAlt: "STUDYBUDDY collaboration webapp screenshot",
      link: "https://yosahandirivera8.github.io/StudyBuddy/"
    }
  ],
  experience: [
    { period: "2026 — NOW", role: "AI Trainer (Fellowship)", company: "Handshake AI" },
    { period: "JUL — AUG 2025", role: "STEM Instructor (Intern)", company: "Lavner Education @ UCLA" },
    { period: "2026", role: "Product Design — Information Space", company: "UCSD" },
    { period: "2022 — 2026", role: "BS Cognitive Science · ML (Minor: CS)", company: "UC San Diego" }
  ],
  testimonials: [
    {
      quote: "Evaluating AI responses for clarity and usability — translating qualitative feedback into actionable improvements for real systems.",
      author: "Handshake AI · Fellowship"
    },
    {
      quote: "Structured user testing with 40+ students using Google Forms and live observation drove a 25% lift in engagement over four months.",
      author: "Lavner Education @ UCLA"
    }
  ]
};
const $$splitComponentImporter = () => import("./index-QOayjzY8.js");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: `${portfolio.name} // ${portfolio.role}`
    }, {
      name: "description",
      content: `${portfolio.name} — ${portfolio.role}. ${portfolio.tagline}`
    }, {
      property: "og:title",
      content: `${portfolio.name} // ${portfolio.role}`
    }, {
      property: "og:description",
      content: portfolio.tagline
    }, {
      property: "og:type",
      content: "website"
    }, {
      property: "og:image",
      content: portfolio.heroBg
    }, {
      name: "twitter:image",
      content: portfolio.heroBg
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$1
});
const rootRouteChildren = {
  IndexRoute
};
const routeTree = Route$1._addFileChildren(rootRouteChildren)._addFileTypes();
function getRouter() {
  const queryClient = new QueryClient();
  return createRouter({
    routeTree,
    defaultPreload: "intent",
    context: {
      queryClient
    }
  });
}
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  portfolio as p,
  router as r
};
