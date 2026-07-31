import type { Metadata } from "next";
import "@fontsource/be-vietnam-pro/400.css";
import "@fontsource/be-vietnam-pro/500.css";
import "@fontsource/be-vietnam-pro/600.css";
import "@fontsource/be-vietnam-pro/700.css";
import "@fontsource/be-vietnam-pro/800.css";
import { BasicChatbot } from "@/components/profile/BasicChatbot";
import { ScrollFloatingMenu } from "@/components/profile/ScrollFloatingMenu";
import { ScrollToTopButton } from "@/components/profile/ScrollToTopButton";
import "./globals.css";

export const metadata: Metadata = {
  title: "Đoàn Thanh Niên - Công ty TNHH Thép Tây Đô",
  description:
    "Website profile Đoàn Thanh Niên Công ty TNHH Thép Tây Đô theo phong cách Flat Design hiện đại, tập trung vào giới thiệu, hoạt động và kết nối.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="h-full scroll-smooth antialiased">
      <body className="min-h-full flex flex-col">
        <ScrollFloatingMenu />
        {children}
        <ScrollToTopButton />
        <BasicChatbot />
      </body>
    </html>
  );
}
