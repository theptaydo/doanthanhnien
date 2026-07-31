import { ArrowRight, CalendarDays } from "lucide-react";
import Link from "next/link";
import { SectionTitle } from "@/components/ui/section-title";
import { CountUpNumber } from "@/components/ui/count-up-number";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { stats } from "@/components/profile/data";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-primary text-white">
      <div className="absolute -left-14 top-8 h-40 w-40 rounded-full bg-white/10" />
      <div className="absolute right-12 top-14 h-24 w-24 rotate-12 bg-accent/30" />
      <div className="absolute bottom-8 right-1/3 h-20 w-20 bg-white/10" />
      <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-white/20" />

      <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-18 md:grid-cols-12 md:px-10">
        <MotionReveal direction="left" className="md:col-span-7">
          <div>
            <SectionTitle
              eyebrow="Tuổi trẻ thép tây đô"
              title="Hồ sơ Đoàn Thanh Niên Công ty TNHH Thép Tây Đô"
              description="Tổ chức Đoàn là lực lượng xung kích trong nâng cao văn hóa an toàn, sáng kiến kỹ thuật và các hoạt động vì cộng đồng tại TP. Cần Thơ."
              invert
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/hoat-dong"
                className="inline-flex h-14 items-center justify-center rounded-md bg-white px-6 text-sm font-semibold uppercase tracking-wider text-primary transition-all duration-200 hover:scale-105 hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
              >
                Xem hoạt động
                <ArrowRight className="ml-2 h-4 w-4" strokeWidth={2.5} />
              </Link>
              <Link
                href="/can-bo-cong-tac"
                className="inline-flex h-14 items-center justify-center rounded-md border-4 border-white bg-transparent px-6 text-sm font-semibold uppercase tracking-wider text-white transition-all duration-200 hover:scale-105 hover:bg-white hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
              >
                <CalendarDays className="mr-2 h-4 w-4" strokeWidth={2.5} />
                Cán bộ công tác
              </Link>
            </div>
          </div>
        </MotionReveal>

        <MotionReveal direction="right" delayMs={120} className="grid gap-3 md:col-span-5 md:grid-cols-2">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const { numeric, suffix } = parseStatValue(stat.value);
            return (
              <MotionReveal
                key={stat.label}
                direction={index % 2 === 0 ? "up" : "down"}
                delayMs={180 + index * 80}
              >
                <article className="rounded-lg bg-white p-5 text-foreground transition-all duration-200 hover:scale-[1.02]">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                    <Icon className="h-6 w-6 text-primary transition-transform duration-200 group-hover:scale-110" strokeWidth={2.4} />
                  </div>
                  <p className="text-sm font-medium uppercase tracking-wider text-gray-600">{stat.label}</p>
                  <p className={["mt-2 text-4xl font-extrabold tracking-tight", stat.color].join(" ")}>
                    <CountUpNumber to={numeric} suffix={suffix} />
                  </p>
                </article>
              </MotionReveal>
            );
          })}
        </MotionReveal>
      </div>
    </section>
  );
}

function parseStatValue(raw: string) {
  const numeric = Number(raw.replace(/[^\d]/g, "")) || 0;
  const suffix = raw.replace(/[\d]/g, "");
  return { numeric, suffix };
}
