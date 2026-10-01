import Image from "next/image"

export type Technology = {
  name: string
  image: string
  type?: string
}

export default function TechnologyCard({ name, image, type }: Technology) {
  return (
    <div className="group flex min-w-0 shrink-0 cursor-default items-center gap-3 border border-border p-2 transition-[background-color,border-color] duration-300 ease-out select-none md:gap-4 md:p-3 md:hover:border-transparent md:hover:bg-primary/5">
      <Image
        className="size-12 shrink-0 rounded-md border-2 p-1 transition-[transform,filter] duration-300 ease-out md:size-16 md:grayscale md:group-hover:scale-105 md:group-hover:grayscale-0"
        src={image}
        width={60}
        height={60}
        alt={`${name} logo - ${type}`}
      />

      <div className="min-w-0 font-mono">
        <p className="text-md font-semibold break-words max-md:text-sm">
          {name}
        </p>
      </div>

      {/* hover reveal is desktop-only: removed entirely on mobile so it leaves no dead gap */}
      <div className="hidden grid-cols-[0fr] opacity-0 transition-[grid-template-columns,opacity] duration-300 ease-out md:grid md:group-hover:grid-cols-[1fr] md:group-hover:opacity-100">
        <div className="overflow-hidden">
          <span className="block pr-1 font-mono text-sm whitespace-nowrap text-muted-foreground">
            {type}
          </span>
        </div>
      </div>
    </div>
  )
}
