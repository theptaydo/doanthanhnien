import Image from "next/image";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { SectionTitle } from "@/components/ui/section-title";

export function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute -left-10 top-10 h-24 w-24 rounded-full bg-primary/10" />
      <div className="absolute bottom-8 right-0 h-28 w-28 bg-accent/20" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-12 md:px-10">
        <MotionReveal direction="left" className="md:col-span-5">
          <div>
            <div className="overflow-hidden rounded-lg bg-muted">
              <Image
                src="https://github.com/theptaydo/doanthanhnien/blob/main/public/posts/1.jpg?raw=true"
                alt="Đoàn viên thanh niên Thép Tây Đô trong hoạt động tập thể"
                width={900}
                height={700}
                className="h-[320px] w-full object-cover"
              />
            </div>

            <div className="mt-4 grid grid-cols-3 gap-3">
              <div className="rounded-md bg-primary p-3 text-center text-white">
                <p className="text-2xl font-extrabold tracking-tight">145+</p>
                <p className="text-[11px] uppercase tracking-wider">Đoàn viên</p>
              </div>
              <div className="rounded-md bg-secondary p-3 text-center text-white">
                <p className="text-2xl font-extrabold tracking-tight">22</p>
                <p className="text-[11px] uppercase tracking-wider">Hoạt động</p>
              </div>
              <div className="rounded-md bg-accent p-3 text-center text-gray-900">
                <p className="text-2xl font-extrabold tracking-tight">6</p>
                <p className="text-[11px] uppercase tracking-wider">Chi đoàn</p>
              </div>
            </div>
          </div>
        </MotionReveal>

        <MotionReveal direction="right" delayMs={120} className="md:col-span-7">
          <div>
            <SectionTitle
              eyebrow="Giới thiệu"
              title="Một tổ chức Đoàn gắn chặt với hiện trường sản xuất và nhịp sống cộng đồng"
              description="Đoàn Thanh Niên Công ty TNHH Thép Tây Đô trực thuộc Đoàn Khối Doanh nghiệp TP. Cần Thơ, quy tụ lực lượng lao động trẻ kỷ luật, năng động và giàu trách nhiệm."
            />

            <div className="mt-6 rounded-lg bg-primary p-6 text-white">
              <p className="text-base leading-8 md:text-lg">
                Trọng tâm hoạt động của Đoàn là nâng cao năng suất, lan tỏa văn
                hóa an toàn, đồng thời kết nối chương trình an sinh xã hội tại
                địa phương. Mỗi phong trào đều hướng đến một mục tiêu chung: xây
                dựng tập thể trẻ bản lĩnh, nhân văn và sẵn sàng cống hiến.
              </p>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <p className="rounded-md bg-muted px-4 py-3 text-sm font-semibold text-gray-700">
                Tập trung đào tạo kỹ năng thực tiễn cho đoàn viên tại phân xưởng.
              </p>
              <p className="rounded-md bg-muted px-4 py-3 text-sm font-semibold text-gray-700">
                Tổ chức hoạt động theo nguyên tắc kỷ luật, trách nhiệm, hiệu quả.
              </p>
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
