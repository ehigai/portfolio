import Link from "next/link"
import { Rss } from "lucide-react"
import { POSTS } from "@/lib/data"

export default function Blog() {
  return (
    <div className="mx-auto max-w-2xl px-6 pt-40">
      <div className="mb-16 flex items-center space-x-4">
        <h1 className="text-3xl font-bold tracking-tight">Thoughts</h1>
        <Rss className="h-5 w-5 cursor-pointer opacity-40 transition-opacity hover:opacity-100" />
      </div>

      <div className="space-y-12">
        {POSTS.map((post, i) => (
          <div
            key={post.id}
            className="group"
            style={{ animation: `fade-in-up 0.4s ease-out ${i * 0.1}s both` }}
          >
            <Link href={`/blog/${post.id}`} className="block">
              <div className="flex flex-col md:flex-row md:items-baseline md:space-x-4">
                <span className="mb-1 min-w-[100px] font-mono text-xs tabular-nums opacity-40 md:mb-0">
                  {post.date}
                </span>
                <div>
                  <h2 className="text-xl font-medium decoration-1 underline-offset-4 group-hover:underline">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-sm opacity-60">{post.excerpt}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
