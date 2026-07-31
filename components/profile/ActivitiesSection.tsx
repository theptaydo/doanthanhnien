import { activities } from "@/components/profile/data";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { SectionTitle } from "@/components/ui/section-title";

export function ActivitiesSection() {
  return (
    <section className="bg-secondary text-white">
      <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-10">
        <SectionTitle
          eyebrow="Phong trào"
          title="Hoạt động tiêu biểu"
          description="Các chương trình được tổ chức theo hướng thiết thực, bám sát công việc chuyên môn và trách nhiệm với cộng đồng."
          invert
        />
        <ul className="mt-10 grid gap-4 md:grid-cols-2">
          {activities.map((activity, index) => (
            <MotionReveal key={activity} direction="up" delayMs={120 + index * 90}>
              <li className="rounded-lg bg-white px-5 py-4 text-gray-900 transition-all duration-200 hover:scale-[1.02]">
                {activity}
              </li>
            </MotionReveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
