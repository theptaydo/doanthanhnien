import { coreValues } from "@/components/profile/data";
import { Card } from "@/components/ui/card";
import { SectionTitle } from "@/components/ui/section-title";

export function CoreValuesSection() {
  return (
    <section className="bg-muted">
      <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-10">
        <SectionTitle
          eyebrow="Định hướng"
          title="Sứ mệnh, tầm nhìn và giá trị cốt lõi"
          description="Hệ giá trị được triển khai nhất quán trong đào tạo, phong trào và các chương trình hành động của tổ chức Đoàn."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {coreValues.map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.title} tone={item.tone}>
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white">
                  <Icon className="h-7 w-7 text-primary transition-transform duration-200 group-hover:scale-110" strokeWidth={2.4} />
                </div>
                <h3 className="text-2xl font-extrabold tracking-tight">{item.title}</h3>
                <p className="mt-3 leading-7 text-gray-700">{item.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
