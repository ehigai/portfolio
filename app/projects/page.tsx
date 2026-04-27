import { PROJECTS } from "@/lib/data"

export default function Projects() {
  return (
    <div className="mx-auto max-w-2xl px-6 pt-40">
      <h1 className="mb-16 text-3xl font-bold tracking-tight">Artifacts</h1>

      <div className="space-y-20">
        {PROJECTS.map((section) => (
          <div key={section.category}>
            <h2 className="mb-8 font-mono text-xs tracking-widest uppercase opacity-40">
              {section.category}
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {section.items.map((project) => (
                <a
                  key={project.name}
                  href={project.link}
                  className="group rounded-xl border border-transparent p-6 transition-all hover:border-black/5 hover:bg-black/20 dark:hover:border-white/5 dark:hover:bg-white/2"
                >
                  <div className="mb-3 flex items-center space-x-3 opacity-80 transition-opacity group-hover:opacity-100">
                    {project.icon}
                    <span className="font-medium">{project.name}</span>
                  </div>
                  <p className="text-xs leading-relaxed opacity-50 transition-opacity group-hover:opacity-70">
                    {project.description}
                  </p>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
