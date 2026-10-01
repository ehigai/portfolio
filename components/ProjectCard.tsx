import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { Project } from "@/app/types"

export default function ProjectCard(props: Project) {
  const { description, image, name, technologies, githubUrl, liveUrl } = props

  return (
    <article className="group flex h-full min-w-0 cursor-default flex-col gap-4 border border-border p-3 transition-[background-color,border-color] duration-300 ease-out md:p-4 md:hover:border-transparent md:hover:bg-primary/5">
      {/* Preview */}
      <div className="relative aspect-video w-full overflow-hidden rounded-md border-2">
        <Image
          className="object-cover transition-[transform,filter] duration-300 ease-out md:grayscale md:group-hover:scale-105 md:group-hover:grayscale-0"
          src={image}
          alt={`${name} preview`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-2 font-mono">
        <h3 className="text-md wrap-break-words font-semibold md:text-lg">
          {name}
        </h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>

      {/* Tech tags */}
      <ul className="flex flex-wrap gap-2 font-mono">
        {technologies.map((tech) => (
          <li
            key={tech.name}
            className="border px-2 py-0.5 text-xs text-muted-foreground transition-colors duration-300 md:group-hover:text-foreground"
          >
            {tech.name}
          </li>
        ))}
      </ul>

      {/* Links */}
      {(githubUrl || liveUrl) && (
        <div className="flex items-center gap-4 border-t pt-3 font-mono text-sm">
          {githubUrl && (
            <Link
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
            >
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
              Code
            </Link>
          )}
          {liveUrl && (
            <Link
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
            >
              <ExternalLink className="size-4" />
              Live
            </Link>
          )}
        </div>
      )}
    </article>
  )
}
