import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft } from "lucide-react";
import { posts } from "@/data/posts";

export default function ActivitiesPage() {
  const sortedPosts = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <main className="bg-background text-foreground">
      <section className="bg-primary text-white">
        <div className="mx-auto w-full max-w-7xl px-6 py-10 md:px-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-semibold text-primary transition-all duration-200 hover:scale-105 hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
          >
            <ChevronLeft className="h-4 w-4" strokeWidth={2.5} />
            Về trang chủ
          </Link>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight md:text-6xl">
            Trang hoạt động
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-blue-100">
            Tổng hợp toàn bộ bài viết hoạt động của Đoàn Thanh Niên Thép Tây Đô.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-12 md:px-10">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {sortedPosts.map((post) => (
            <article key={post.slug} className="overflow-hidden rounded-lg bg-white transition-all duration-200 hover:scale-[1.01]">
              <Image
                src={post.thumbnail}
                alt={post.title}
                width={800}
                height={420}
                className="h-48 w-full object-cover"
              />
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-600">
                  {new Date(post.date).toLocaleDateString("vi-VN")}
                </p>
                <h2 className="mt-2 line-clamp-2 text-2xl font-extrabold tracking-tight text-foreground">
                  {post.title}
                </h2>
                <p className="mt-3 line-clamp-3 text-gray-700">{post.excerpt}</p>
                <Link
                  href={`/bai-viet/${post.slug}`}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all duration-200 hover:scale-105"
                >
                  Xem chi tiết
                  <ArrowRight className="h-4 w-4" strokeWidth={2.4} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
