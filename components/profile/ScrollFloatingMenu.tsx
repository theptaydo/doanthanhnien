"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Giới thiệu", href: "/#gioi-thieu" },
  { label: "Giá trị", href: "/#gia-tri" },
  { label: "Hoạt động", href: "/hoat-dong" },
  { label: "Cán bộ", href: "/can-bo-cong-tac" },
  { label: "Thư viện", href: "/#thu-vien" },
  { label: "Liên hệ", href: "/#lien-he" },
];

export function ScrollFloatingMenu() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hash, setHash] = useState("");
  const visible = scrolled;

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 90);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const syncHash = () => {
      setHash(window.location.hash);
    };

    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, [pathname]);

  const isItemActive = (href: string) => {
    if (href === "/hoat-dong") {
      return pathname === "/hoat-dong" || pathname.startsWith("/bai-viet/");
    }

    if (href === "/can-bo-cong-tac") {
      return pathname.startsWith("/can-bo-cong-tac");
    }

    if (href.startsWith("/#")) {
      return pathname === "/" && hash === href.replace("/", "");
    }

    return pathname === href;
  };

  return (
    <div
      className={[
        "fixed inset-x-0 top-0 z-50 transition-all duration-200",
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none -translate-y-full opacity-0",
      ].join(" ")}
    >
      <nav
        className={[
          "flex w-full items-center justify-center border-b-2 border-primary bg-white px-3 py-2 text-foreground transition-all duration-200 md:px-10",
        ].join(" ")}
      >
        <ul className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={[
                  "inline-flex h-9 items-center justify-center rounded-md border-2 border-transparent px-3 text-[11px] font-semibold uppercase tracking-wider transition-all duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:px-4 sm:text-xs",
                  isItemActive(item.href)
                    ? "bg-primary text-white hover:bg-blue-600"
                    : "bg-muted text-foreground hover:bg-primary hover:text-white",
                ].join(" ")}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
