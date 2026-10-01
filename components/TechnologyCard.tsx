import { Technology } from "@/app/types"
import Image from "next/image"
import { cn } from "@/lib/utils"

type Props = Technology & {
  active?: boolean
  onActivate?: () => void
}

export default function TechnologyCard({
  name,
  image,
  type,
  active = false,
  onActivate,
}: Props) {
  return (
    <div
      onMouseEnter={onActivate}
      onFocus={onActivate}
      tabIndex={0}
      data-active={active}
      className="group flex min-w-0 shrink-0 cursor-default items-center gap-3 border border-border p-2 transition-[background-color,border-color] duration-300 ease-out outline-none select-none md:gap-4 md:p-3 md:data-[active=true]:border-transparent md:data-[active=true]:bg-primary/5"
    >
      <Image
        className="size-12 shrink-0 rounded-md border-2 p-1 transition-[transform,filter] duration-300 ease-out md:size-16 md:grayscale md:group-data-[active=true]:scale-105 md:group-data-[active=true]:grayscale-0"
        src={image}
        width={60}
        height={60}
        alt={`${name} logo - ${type}`}
      />

      <div className="min-w-0 font-mono">
        <p className="text-md wrap-break-words font-semibold max-md:text-sm">
          {name}
        </p>
      </div>

      {/* desktop-only reveal */}
      <div
        className={cn(
          "hidden grid-cols-[0fr] opacity-0 transition-[grid-template-columns,opacity] duration-300 ease-out md:grid",
          "md:group-data-[active=true]:grid-cols-[1fr] md:group-data-[active=true]:opacity-100"
        )}
      >
        <div className="overflow-hidden">
          <span className="block pr-1 font-mono text-sm whitespace-nowrap text-muted-foreground">
            {type}
          </span>
        </div>
      </div>
    </div>
  )
}
