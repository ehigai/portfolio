import { Terminal, Wand2, Coffee } from "lucide-react"

export const PROJECTS = [
  {
    category: "Systems Sorcery",
    items: [
      {
        name: "AetherDB",
        description:
          "A distributed, distributed-only KV store written in pure memory.",
        icon: <Terminal className="h-4 w-4" />,
        link: "#",
      },
      {
        name: "WarpVite",
        description: "HMR so fast it predicts your next line of code.",
        icon: <Wand2 className="h-4 w-4" />,
        link: "#",
      },
    ],
  },
  {
    category: "Web Alchemy",
    items: [
      {
        name: "Philosophical CSS",
        description:
          "A framework where classes are defined by their existential dread.",
        icon: <Coffee className="h-4 w-4" />,
        link: "#",
      },
      {
        name: "CrystalReact",
        description:
          "Zero-runtime React components that compile to pure light.",
        icon: <Wand2 className="h-4 w-4" />,
        link: "#",
      },
    ],
  },
]

export const POSTS = [
  {
    id: "1",
    date: "2024-04-25",
    title: "The Ethics of Recursive Sorcery",
    excerpt:
      "When your code starts writing code that writes code, who is the real sorcerer?",
  },
  {
    id: "2",
    date: "2024-04-10",
    title: "Why I Use 1TB of RAM for My Linter",
    excerpt:
      "System performance is a matter of perspective and fanatical devotion.",
  },
  {
    id: "3",
    date: "2024-03-20",
    title: "Optimizing the Void",
    excerpt: "Deep dive into zero-allocation garbage collectors.",
  },
]
