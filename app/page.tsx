import { AboutSection } from "@/components/profile/AboutSection";
import { ActivitiesSection } from "@/components/profile/ActivitiesSection";
import { CommitteeSection } from "@/components/profile/CommitteeSection";
import { ContactSection } from "@/components/profile/ContactSection";
import { CoreValuesSection } from "@/components/profile/CoreValuesSection";
import { GallerySection } from "@/components/profile/GallerySection";
import { HeroSection } from "@/components/profile/HeroSection";

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      <HeroSection />

      <div id="gioi-thieu">
        <AboutSection />
      </div>

      <div id="gia-tri">
        <CoreValuesSection />
      </div>

      <ActivitiesSection />

      <CommitteeSection />

      <GallerySection />

      <div id="lien-he">
        <ContactSection />
      </div>

      <footer className="bg-gray-900 py-8 text-center text-sm text-gray-100">
        <p className="mx-auto max-w-7xl px-6 md:px-10">
          © 2026 Đoàn Thanh Niên Công ty TNHH Thép Tây Đô. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
