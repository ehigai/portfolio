import Link from "next/link"
import { POSTS } from "@/lib/data"

export default async function PostView({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const post = POSTS.find((p) => p.id === id)

  if (!post) {
    return (
      <div className="mx-auto max-w-2xl px-6 pt-40 font-mono opacity-40">
        Spell failed: post not found.
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-2xl px-6 pt-40 pb-20">
      <Link
        href="/blog"
        className="mb-8 flex items-center space-x-2 font-mono text-xs opacity-40 transition-opacity hover:opacity-100"
      >
        <span>←</span>
        <span>back to thoughts</span>
      </Link>
      <h1 className="mb-4 text-4xl font-bold tracking-tight">{post.title}</h1>
      <div className="mb-12 font-mono text-xs opacity-40">{post.date}</div>
      <div className="prose space-y-6 text-lg leading-relaxed opacity-80">
        <p>
          This is where the ancient wisdom is recorded. Every line of code is a
          scroll, every function a ritual. In the pursuit of web sorcery, we
          must remember that the fastest code is the code that is never written,
          and the most secure system is the one that exists only in the void.
        </p>
        <p>
          The excerpt for this thought was:{" "}
          <span className="italic">&ldquo;{post.excerpt}&rdquo;</span>
        </p>
        <p>
          As we delve deeper into the system internals, we find that the
          boundary between software and magic is thinner than a single CPU
          cycle. We are not just engineers; we are the weavers of reality in a
          digital dimension.
        </p>
      </div>
    </div>
  )
}
