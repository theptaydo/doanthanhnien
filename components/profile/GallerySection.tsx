import Link from "next/link";
import Image from "next/image";
import { posts } from "@/data/posts";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { SectionTitle } from "@/components/ui/section-title";

export function GallerySection() {
  return (
    <section id="thu-vien" className="relative overflow-hidden bg-muted">
      <div className="absolute -right-16 -top-16 h-44 w-44 rotate-12 bg-white/60" />
      <div className="absolute -left-12 bottom-12 h-32 w-32 rounded-full bg-white/60" />

      <div className="relative mx-auto w-full max-w-7xl px-6 py-16 md:px-10">
        <SectionTitle
          eyebrow="Thư viện"
          title="Khoảnh khắc hoạt động"
          description="Dùng 4 bài viết tiêu biểu làm khoảnh khắc hoạt động. Chạm vào từng thẻ để xem bài viết chi tiết."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {posts.map((post, index) => (
            <MotionReveal key={post.slug} direction="up" delayMs={140 + index * 100}>
              <Link
                href={`/bai-viet/${post.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-lg bg-white transition-all duration-200 hover:scale-[1.02] hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                <div className="relative">
                  <Image
                    src={post.thumbnail}
                    alt={post.title}
                    width={800}
                    height={360}
                    className="h-36 w-full object-cover"
                  />
                </div>
                <article className="flex flex-1 flex-col justify-between p-4">
                  <p className="line-clamp-2 text-lg font-bold tracking-tight text-foreground">
                    {post.title}
                  </p>
                  <p className="mt-3 line-clamp-2 text-sm text-gray-600">{post.excerpt}</p>
                </article>
              </Link>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
