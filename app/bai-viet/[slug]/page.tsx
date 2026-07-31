import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CalendarDays, ChevronLeft, UserRound } from "lucide-react";
import { getPostBySlug, posts } from "@/data/posts";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function PostDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="bg-background text-foreground">
      <section className="bg-primary text-white">
        <div className="mx-auto w-full max-w-7xl px-6 py-10 md:px-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-semibold text-primary transition-all duration-200 hover:scale-105 hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
          >
            <ChevronLeft className="h-4 w-4" strokeWidth={2.5} />
            Quay lại trang chủ
          </Link>

          <h1 className="mt-6 max-w-4xl text-balance text-4xl font-extrabold tracking-tight md:text-6xl">
            {post.title}
          </h1>

          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <p className="inline-flex items-center gap-2 rounded-md bg-white/15 px-3 py-2">
              <CalendarDays className="h-4 w-4" strokeWidth={2.3} />
              {new Date(post.date).toLocaleDateString("vi-VN")}
            </p>
            <p className="inline-flex items-center gap-2 rounded-md bg-white/15 px-3 py-2">
              <UserRound className="h-4 w-4" strokeWidth={2.3} />
              {post.author}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-12 md:px-10">
        <div className="overflow-hidden rounded-lg bg-muted">
          <Image
            src={post.coverImage}
            alt={post.title}
            width={1200}
            height={720}
            className="h-[260px] w-full object-cover md:h-[420px]"
          />
        </div>

        <article className="mt-8 rounded-lg bg-white p-6 md:p-10">
          <p className="text-lg font-medium leading-8 text-gray-700">{post.excerpt}</p>

          <div className="mt-8 space-y-6 text-lg leading-8 text-gray-800">
            {post.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </article>
      </section>
    </main>
  );
}
