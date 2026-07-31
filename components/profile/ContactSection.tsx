import { Mail, MapPin, Phone, SquareArrowOutUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { SectionTitle } from "@/components/ui/section-title";

const contacts = [
  {
    label: "Địa chỉ",
    value: "KCN Trà Nóc, Quận Bình Thủy, TP. Cần Thơ",
    icon: MapPin,
  },
  {
    label: "Email",
    value: "doanthanhnien@theptaydo.vn",
    icon: Mail,
  },
  {
    label: "Điện thoại",
    value: "0292 3 888 999",
    icon: Phone,
  },
  {
    label: "Fanpage",
    value: "Đoàn Thanh Niên Thép Tây Đô",
    icon: SquareArrowOutUpRight,
  },
];

export function ContactSection() {
  return (
    <section className="bg-accent text-gray-900">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-16 md:grid-cols-12 md:px-10">
        <MotionReveal direction="left" className="md:col-span-5">
          <div>
            <SectionTitle
              eyebrow="Liên hệ"
              title="Kết nối với Đoàn Thanh Niên"
              description="Sẵn sàng hợp tác trong các hoạt động thanh niên, chương trình cộng đồng và sự kiện nội bộ doanh nghiệp."
            />
            <div className="mt-8 space-y-3">
              {contacts.map((item) => {
                const Icon = item.icon;
                return (
                  <article
                    key={item.label}
                    className="flex items-start gap-4 rounded-lg bg-white p-4 transition-all duration-200 hover:scale-[1.01]"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-muted">
                      <Icon className="h-5 w-5 text-primary" strokeWidth={2.4} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-wider text-gray-600">
                        {item.label}
                      </p>
                      <p className="mt-1 text-base font-bold tracking-tight text-foreground md:text-lg">
                        {item.value}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </MotionReveal>

        <MotionReveal direction="right" delayMs={120} className="md:col-span-7">
          <div>
            <form className="rounded-lg bg-white p-6 md:p-8" action="#" method="post">
              <h3 className="text-2xl font-extrabold tracking-tight text-foreground">
                Gửi yêu cầu hợp tác
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Vui lòng để lại thông tin, Ban chấp hành sẽ phản hồi trong thời gian sớm nhất.
              </p>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <label className="flex flex-col gap-2 text-sm font-semibold text-gray-700">
                  Họ và tên
                  <input
                    type="text"
                    name="name"
                    placeholder="Nguyễn Văn A"
                    className="h-12 rounded-md border-2 border-transparent bg-gray-100 px-4 text-foreground outline-none transition-all duration-200 placeholder:text-gray-400 focus:border-primary focus:bg-white focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  />
                </label>

                <label className="flex flex-col gap-2 text-sm font-semibold text-gray-700">
                  Số điện thoại
                  <input
                    type="tel"
                    name="phone"
                    placeholder="09xx xxx xxx"
                    className="h-12 rounded-md border-2 border-transparent bg-gray-100 px-4 text-foreground outline-none transition-all duration-200 placeholder:text-gray-400 focus:border-primary focus:bg-white focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  />
                </label>

                <label className="flex flex-col gap-2 text-sm font-semibold text-gray-700 md:col-span-2">
                  Email
                  <input
                    type="email"
                    name="email"
                    placeholder="tenban@congty.vn"
                    className="h-12 rounded-md border-2 border-transparent bg-gray-100 px-4 text-foreground outline-none transition-all duration-200 placeholder:text-gray-400 focus:border-primary focus:bg-white focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  />
                </label>

                <label className="flex flex-col gap-2 text-sm font-semibold text-gray-700 md:col-span-2">
                  Nội dung
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Mô tả nội dung cần phối hợp..."
                    className="rounded-md border-2 border-transparent bg-gray-100 px-4 py-3 text-foreground outline-none transition-all duration-200 placeholder:text-gray-400 focus:border-primary focus:bg-white focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  />
                </label>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Button type="submit" className="h-14 bg-primary text-white hover:bg-blue-600">
                  Gửi liên hệ
                </Button>
                <Button
                  type="reset"
                  variant="secondary"
                  className="h-14 bg-muted text-foreground hover:bg-gray-200"
                >
                  Xóa nội dung
                </Button>
              </div>
            </form>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
