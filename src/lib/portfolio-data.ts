import heroCity from "@/assets/hero-city.jpg";
import avatar from "@/assets/avatar.jpg";
import computer from "@/assets/computer.jpg";


// EDIT YOUR PORTFOLIO HERE ↓↓↓
export const portfolio = {
  name: "YOSAHANDI RIVERA",
  handle: "@yosahandi",
  role: "UX / UI DESIGNER",
  tagline:
    "Cognitive Science x Machine Learning student at UCSD designing user-centered digital experiences.",
  location: "Los Angeles, CA // UCSD",
  yearsExp: 3,
  avatar,
  heroBg: heroCity,
  email: "yosahandirn0917@gmail.com",
  socials: [
    { label: "GITHUB", href: "https://github.com/yosahandirivera8" },
    { label: "EMAIL", href: "mailto:yosahandirn0917@gmail.com" },
  ],
  about: [
    "Cognitive Science (Machine Learning) student at the University of California, San Diego with a Computer Science minor and experience designing user-centered web applications.",
    "Skilled in UX/UI design, prototyping, front-end development, and user research. I thrive in fast-paced environments, collaborating on cross-functional teams to build responsive, accessible digital experiences that improve usability and engagement.",
  ],
  stats: [
    { label: "STUDENTS TAUGHT", value: "40+" },
    { label: "ENGAGEMENT LIFT", value: "25%" },
    { label: "LANGUAGES SPOKEN", value: "02" },
    { label: "GRADUATION YEAR", value: "26" },
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
    "BILINGUAL EN/ES",
  ],
  projects: [
    {
      id: "01",
      title: "INFORMATION SPACE // Student Platform",
      client: "UCSD — PRODUCT DESIGN",
      year: "2026",
      tags: ["UX RESEARCH", "PROTOTYPING", "FIGMA"],
      summary:
        "Centralized platform for college students. Conducted user interviews, synthesized insights into personas, and translated findings into wireframes and a high-fidelity prototype integrating class organization and peer interaction.",
      cover: "https://giffiles.alphacoders.com/171/171318.gif",
      imageAlt: "INFORMATION SPACE Student Platform Demo GIF",
      link: "https://www.figma.com/make/N0zUBe4OwceKpSABE6NcVx/Syllabus-and-Assignment-Organizer?fullscreen=1&t=agSiLpeCiRL48S10-1&code-node-id=0-9",
    },

    {
      id: "02",
      title: "CAFFEINE × COGNITION // Research Study",
      client: "UCSD RESEARCH",
      year: "2025",
      tags: ["DATA VIZ", "PYTHON", "RESEARCH"],
      summary:
        "Collected, cleaned, and analyzed survey + behavioral data from student participants using Python (Pandas, Seaborn). Built interactive dashboards visualizing correlations between caffeine intake and cognitive performance.",
      cover: "https://i.pinimg.com/736x/20/79/2a/20792a08b9eeaf1182c9cc5345c4ebf7.jpg",
      link: "https://github.com/yosahandirivera8/Caffeine_effects.git",
    },
    {
      id: "03",
      title: "STUDYBUDDY // Collaboration Webapp",
      client: "PERSONAL PROJECT",
      year: "2022",
      tags: ["HTML", "CSS", "JAVASCRIPT"],
      summary:
        "Dynamic web application for streamlined student collaboration and real-time schedule matching. Bootstrap-powered mobile-first design improved cross-device responsiveness by 50%.",
      cover: "https://i.pinimg.com/originals/91/81/55/918155387ad114a903cba1a13506e3be.gif",
      imageAlt: "STUDYBUDDY collaboration webapp screenshot",
      link : "https://yosahandirivera8.github.io/StudyBuddy/",
    },
    
  ],
  experience: [
    { period: "2026 — NOW", role: "AI Trainer (Fellowship)", company: "Handshake AI" },
    { period: "JUL — AUG 2025", role: "STEM Instructor (Intern)", company: "Lavner Education @ UCLA" },
    { period: "2026", role: "Product Design — Information Space", company: "UCSD" },
    { period: "2022 — 2026", role: "BS Cognitive Science · ML (Minor: CS)", company: "UC San Diego" },
  ],
  testimonials: [
    {
      quote:
        "Evaluating AI responses for clarity and usability — translating qualitative feedback into actionable improvements for real systems.",
      author: "Handshake AI · Fellowship",
    },
    {
      quote:
        "Structured user testing with 40+ students using Google Forms and live observation drove a 25% lift in engagement over four months.",
      author: "Lavner Education @ UCLA",
    },
  ],
} as const;
