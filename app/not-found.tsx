import { TextEffect } from '@/components/ui/text-effect'
import { TextLoop } from '@/components/ui/text-loop'
import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-2xl flex-col items-start justify-center px-6">
      {/* Accent blob */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-24 -z-10 mx-auto h-64 w-64 rounded-full bg-gradient-to-tr from-zinc-200/60 via-zinc-100/40 to-transparent blur-3xl dark:from-zinc-800/40 dark:via-zinc-900/30"
      />

      {/* Eyebrow */}
      <p className="mb-2 text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
        404 — Not Found
      </p>

      {/* Title (uses your TextEffect if available) */}
      <TextEffect
        as="h1"
        preset="fade"
        per="char"
        delay={0.2}
        className="mb-2 text-3xl font-semibold tracking-tight text-black dark:text-white"
      >
        This page drifted off course.
      </TextEffect>

      {/* Fallback if TextEffect isn't in your project:
      <h1 className="mb-2 text-3xl font-semibold tracking-tight text-black dark:text-white">
        This page drifted off course.
      </h1>
      */}

      <p className="mb-8 max-w-prose text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
        The link you followed doesn’t exist or has moved. Try heading back home,
        or jump to the blog and projects.
      </p>

      <div className="flex gap-3">
        <Link
          href="/"
          className="rounded-lg border border-zinc-200 bg-white px-3 py-1.5 text-sm font-medium text-zinc-900 shadow-sm transition hover:-translate-y-[1px] hover:shadow dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100"
        >
          ← Back to home
        </Link>
        <Link
          href="/#blog"
          className="rounded-lg border border-zinc-200 px-3 py-1.5 text-sm text-zinc-700 transition hover:-translate-y-[1px] hover:bg-zinc-50 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-900/60"
        >
          Read the blog
        </Link>
        <Link
          href="/#projects"
          className="rounded-lg border border-zinc-200 px-3 py-1.5 text-sm text-zinc-700 transition hover:-translate-y-[1px] hover:bg-zinc-50 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-900/60"
        >
          View projects
        </Link>
      </div>

      {/* Tiny status ticker like your footer TextLoop vibe */}
      <div className="mt-10 text-[11px] text-zinc-500 dark:text-zinc-400">
        <TextLoop className="inline-flex gap-4">
          <span>404</span>
          <span>Nothing to see here—yet</span>
          <span>Try the blog → /blog</span>
        </TextLoop>
      </div>
    </main>
  )
}
