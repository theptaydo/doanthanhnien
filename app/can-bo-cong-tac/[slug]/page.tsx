import Image from "next/image";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { notFound } from "next/navigation";
import {
  excellentMembers,
  getExcellentMemberBySlug,
} from "@/components/profile/data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

type TimelineItem = {
  date: string;
  category: string;
  content: string;
};

function toTimeline(items: string[], category: string, fallbackYear: number): TimelineItem[] {
  return items.map((content, index) => {
    const yearMatch = content.match(/20\d{2}/);
    const year = yearMatch ? Number(yearMatch[0]) : fallbackYear + index;
    const month = String(Math.min(12, 2 + index * 3)).padStart(2, "0");

    return {
      date: `${year}-${month}-15`,
      category,
      content,
    };
  });
}

export function generateStaticParams() {
  return excellentMembers.map((member) => ({ slug: member.slug }));
}

export default async function StaffDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const member = getExcellentMemberBySlug(slug);

  if (!member) {
    notFound();
  }

  const timelineItems: TimelineItem[] = [
    ...toTimeline(member.participation, "Quá trình tham gia", 2019),
    ...toTimeline(member.professionalAchievements, "Thành tích chuyên môn", 2023),
    ...toTimeline(member.companyWork, "Công tác tại công ty", 2024),
  ].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  return (
    <main className="bg-background text-foreground">
      <section className="bg-secondary text-white">
        <div className="mx-auto w-full max-w-7xl px-6 py-10 md:px-10">
          <Link
            href="/can-bo-cong-tac"
            className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-semibold text-secondary transition-all duration-200 hover:scale-105 hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-secondary"
          >
            <ChevronLeft className="h-4 w-4" strokeWidth={2.5} />
            Quay lại sơ đồ tổ chức
          </Link>

          <div className="mt-6 grid gap-6 md:grid-cols-[220px_1fr] md:items-center">
            <Image
              src={member.image}
              alt={member.name}
              width={320}
              height={320}
              className="h-48 w-48 rounded-lg object-cover"
            />
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-emerald-100">
                {member.role}
              </p>
              <h1 className="mt-2 text-4xl font-extrabold tracking-tight md:text-5xl">
                {member.name}
              </h1>
              <p className="mt-3 text-lg text-emerald-50">Đơn vị công tác: {member.unit}</p>
              <p className="mt-2 text-emerald-100">{member.achievement}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-12 md:px-10">
        <div className="rounded-lg bg-muted p-5 md:p-8">
          <h2 className="text-center text-2xl font-extrabold tracking-tight text-foreground md:text-3xl">
            Timeline hoạt động công tác
          </h2>

          <div className="relative mx-auto mt-8 w-full max-w-5xl pl-4 md:pl-8">
            <div className="absolute left-0 top-0 h-full w-0.5 bg-primary/50" />
            <ol className="space-y-4">
              {timelineItems.map((item) => (
                <li key={`${item.date}-${item.content}`} className="relative pl-6 md:pl-8">
                  <span className="absolute left-[-5px] top-3 h-3 w-3 rounded-full bg-primary" />
                  <article className="rounded-lg bg-white p-4 md:p-5">
                    <div className="grid gap-2 md:grid-cols-[150px_1fr] md:items-start">
                      <time className="text-sm font-bold uppercase tracking-wider text-primary">
                        {new Date(item.date).toLocaleDateString("vi-VN")}
                      </time>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-gray-600">
                          {item.category}
                        </p>
                        <p className="mt-1 text-sm leading-7 text-gray-800 md:text-base">
                          {item.content}
                        </p>
                      </div>
                    </div>
                  </article>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </main>
  );
}
