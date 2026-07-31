import { committee } from "@/components/profile/data";
import Link from "next/link";
import { SectionTitle } from "@/components/ui/section-title";

export function CommitteeSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-10">
        <SectionTitle
          eyebrow="Nhân sự"
          title="Ban chấp hành"
          description="Đội ngũ điều hành giữ vai trò kết nối đoàn viên, điều phối chương trình và đảm bảo triển khai mục tiêu đúng tiến độ."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {committee.map((member) => (
            <article
              key={member.name}
              className="rounded-lg bg-muted p-5 transition-all duration-200 hover:scale-[1.02] hover:bg-gray-200"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-600">{member.role}</p>
              <p className="mt-2 text-xl font-extrabold tracking-tight text-foreground">{member.name}</p>
            </article>
          ))}
        </div>
        <div className="mt-8">
          <Link
            href="/can-bo-cong-tac"
            className="inline-flex h-14 items-center justify-center rounded-md border-4 border-primary px-6 text-sm font-semibold uppercase tracking-wider text-primary transition-all duration-200 hover:scale-105 hover:bg-primary hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            Xem toàn bộ gương mặt ưu tú
          </Link>
        </div>
      </div>
    </section>
  );
}
