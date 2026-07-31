import Image from "next/image";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { excellentMembers } from "@/components/profile/data";

function MemberNode({
  slug,
  name,
  role,
  unit,
  image,
  achievement,
}: {
  slug: string;
  name: string;
  role: string;
  unit: string;
  image: string;
  achievement: string;
}) {
  return (
    <Link
      href={`/can-bo-cong-tac/${slug}`}
      className="block w-full rounded-lg bg-white p-4 text-left transition-all duration-200 hover:scale-[1.01] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
    >
      <div className="flex items-start gap-4">
        <Image
          src={image}
          alt={name}
          width={140}
          height={180}
          className="h-28 w-22 shrink-0 rounded-md object-cover"
        />
        <div className="min-w-0 flex-1">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-600">{role}</p>
          <h3 className="mt-1 text-lg font-extrabold tracking-tight text-foreground md:text-xl">{name}</h3>
          <p className="mt-2 text-sm font-semibold text-secondary">{unit}</p>
          <p className="mt-1 text-sm text-gray-700">{achievement}</p>
          <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-primary">
            Xem chi tiết hồ sơ
          </p>
        </div>
      </div>
    </Link>
  );
}

export default function StaffPage() {
  const leader = excellentMembers.find((member) => member.role === "Bí thư Đoàn");
  const deputy = excellentMembers.find((member) => member.role === "Phó Bí thư");
  const committee = excellentMembers.filter((member) => member.role.includes("Ủy viên BCH"));
  const officers = excellentMembers.filter((member) => member.role.includes("Cán bộ công tác"));

  return (
    <main className="bg-background text-foreground">
      <section className="bg-secondary text-white">
        <div className="mx-auto w-full max-w-7xl px-6 py-10 md:px-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-semibold text-secondary transition-all duration-200 hover:scale-105 hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-secondary"
          >
            <ChevronLeft className="h-4 w-4" strokeWidth={2.5} />
            Về trang chủ
          </Link>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight md:text-6xl">
            Trang cán bộ công tác
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-emerald-50">
            Danh sách toàn bộ gương mặt ưu tú đang trực tiếp tham gia công tác Đoàn.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-12 md:px-10">
        <div className="rounded-lg bg-muted p-5 md:p-8">
          <h2 className="text-center text-2xl font-extrabold tracking-tight md:text-3xl">
            Sơ đồ tổ chức cán bộ công tác Đoàn
          </h2>

          <div className="mt-8 flex flex-col items-center">
            {leader ? (
              <div className="w-full max-w-md">
                <MemberNode
                  slug={leader.slug}
                  name={leader.name}
                  role={leader.role}
                  unit={leader.unit}
                  image={leader.image}
                  achievement={leader.achievement}
                />
              </div>
            ) : null}

            <div className="h-8 w-0.5 bg-primary" />

            {deputy ? (
              <div className="w-full max-w-md">
                <MemberNode
                  slug={deputy.slug}
                  name={deputy.name}
                  role={deputy.role}
                  unit={deputy.unit}
                  image={deputy.image}
                  achievement={deputy.achievement}
                />
              </div>
            ) : null}

            <div className="h-8 w-0.5 bg-primary" />

            <div className="w-full max-w-5xl">
              <div className="mx-auto hidden h-0.5 w-[90%] bg-primary lg:block" />
              <div className="grid gap-4 lg:grid-cols-3">
                {committee.map((member) => (
                  <div key={member.name} className="flex flex-col items-center">
                    <div className="mb-4 hidden h-6 w-0.5 bg-primary lg:block" />
                    <MemberNode
                      slug={member.slug}
                      name={member.name}
                      role={member.role}
                      unit={member.unit}
                      image={member.image}
                      achievement={member.achievement}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="h-8 w-0.5 bg-primary" />

            <div className="w-full max-w-5xl">
              <div className="mx-auto hidden h-0.5 w-[90%] bg-primary lg:block" />
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {officers.map((member) => (
                  <div key={member.name} className="flex flex-col items-center">
                    <div className="mb-4 hidden h-6 w-0.5 bg-primary lg:block" />
                    <MemberNode
                      slug={member.slug}
                      name={member.name}
                      role={member.role}
                      unit={member.unit}
                      image={member.image}
                      achievement={member.achievement}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
