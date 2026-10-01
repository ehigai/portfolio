import tsIcon from "@/assets/technologies/typescript.svg"
import nodeIcon from "@/assets/technologies/nodejs.svg"
import prismaIcon from "@/assets/technologies/prisma.svg"
import goIcon from "@/assets/technologies/go.svg"
import postgresqlIcon from "@/assets/technologies/postgresql.svg"
import reactIcon from "@/assets/technologies/react.svg"
import { Project, Technology } from "./types"

export const technologies: Technology[] = [
  {
    name: "TypeScript",
    image: tsIcon,
    type: "Language",
  },
  {
    name: "Go",
    image: goIcon,
    type: "Language",
  },

  {
    name: "React.js",
    image: reactIcon,
    type: "Framework",
  },

  {
    name: "Node.js",
    image: nodeIcon,
    type: "Runtime",
  },
  {
    name: "Prisma",
    image: prismaIcon,
    type: "ORM",
  },

  {
    name: "PostgreSQL",
    image: postgresqlIcon,
    type: "Database",
  },
]

export const projects: Project[] = [
  {
    id: "devflow-dashboard",
    name: "DevFlow Dashboard",
    description:
      "Analytics dashboard for engineering teams with real-time metrics, filterable charts, and role-based access.",
    image: "/projects/devflow-dashboard.png",
    technologies: [
      { name: "Next.js", image: "/tech/nextjs.svg", type: "Framework" },
      { name: "TypeScript", image: "/tech/typescript.svg", type: "Language" },
      { name: "Tailwind CSS", image: "/tech/tailwind.svg", type: "Styling" },
      { name: "PostgreSQL", image: "/tech/postgresql.svg", type: "Database" },
    ],
    githubUrl: "https://github.com/username/devflow-dashboard",
    liveUrl: "https://devflow-dashboard.vercel.app",
  },
  {
    id: "taskly-app",
    name: "Taskly",
    description:
      "Minimal task manager with drag-and-drop boards, due-date reminders, and offline support.",
    image: "/projects/taskly.png",
    technologies: [
      { name: "React", image: "/tech/react.svg", type: "Library" },
      { name: "Zustand", image: "/tech/zustand.svg", type: "State" },
      { name: "Firebase", image: "/tech/firebase.svg", type: "Backend" },
    ],
    githubUrl: "https://github.com/username/taskly",
    liveUrl: "https://taskly-app.vercel.app",
  },
  {
    id: "shopwave-store",
    name: "ShopWave",
    description:
      "Full-stack e-commerce storefront with cart, Stripe checkout, order history, and an admin panel.",
    image: "/projects/shopwave.png",
    technologies: [
      { name: "Next.js", image: "/tech/nextjs.svg", type: "Framework" },
      { name: "Prisma", image: "/tech/prisma.svg", type: "ORM" },
      { name: "Stripe", image: "/tech/stripe.svg", type: "Payments" },
      { name: "Tailwind CSS", image: "/tech/tailwind.svg", type: "Styling" },
    ],
    githubUrl: "https://github.com/username/shopwave",
    liveUrl: "https://shopwave.vercel.app",
  },
  {
    id: "chatterbox",
    name: "Chatterbox",
    description:
      "Real-time chat app with rooms, typing indicators, and message reactions over WebSockets.",
    image: "/projects/chatterbox.png",
    technologies: [
      { name: "Node.js", image: "/tech/nodejs.svg", type: "Runtime" },
      { name: "Socket.IO", image: "/tech/socketio.svg", type: "Realtime" },
      { name: "MongoDB", image: "/tech/mongodb.svg", type: "Database" },
      { name: "React", image: "/tech/react.svg", type: "Library" },
    ],
    githubUrl: "https://github.com/username/chatterbox",
  },
  {
    id: "weathercast",
    name: "WeatherCast",
    description:
      "Clean weather app with a 7-day forecast, location search, and automatic light and dark themes.",
    image: "/projects/weathercast.png",
    technologies: [
      { name: "TypeScript", image: "/tech/typescript.svg", type: "Language" },
      { name: "React", image: "/tech/react.svg", type: "Library" },
      { name: "Tailwind CSS", image: "/tech/tailwind.svg", type: "Styling" },
    ],
    githubUrl: "https://github.com/username/weathercast",
    liveUrl: "https://weathercast-app.vercel.app",
  },
  {
    id: "portfolio-cli",
    name: "Folio CLI",
    description:
      "Command-line tool that scaffolds a developer portfolio from a single config file.",
    image: "/projects/folio-cli.png",
    technologies: [
      { name: "Node.js", image: "/tech/nodejs.svg", type: "Runtime" },
      { name: "TypeScript", image: "/tech/typescript.svg", type: "Language" },
    ],
    githubUrl: "https://github.com/username/folio-cli",
  },
]
