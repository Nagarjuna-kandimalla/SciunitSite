"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrackSelector from "@/components/TrackSelector";
import SciunitTabs from "@/components/SciunitTabs";
import FlincHero from "@/components/FlincHero";
import FlincTabs from "@/components/FlincTabs";
import SciunitHero from "@/components/SciunitHero";
import TryItNowButton from "@/components/TryItNow";

export default function Home() {
  // 🔸 lifted up state
  const [activeTrack, setActiveTrack] = useState<"flinc" | "sciunit">("sciunit");

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main role="main" className="flex-grow">
        {/* Track selector now receives props */}
        <TrackSelector active={activeTrack} setActive={setActiveTrack} />

        {/* Conditional rendering for each track */}
        {activeTrack === "sciunit" ? (
          <>
            <SciunitHero />
            <SciunitTabs />
            <TryItNowButton label="Try Sciunit CLI Now"
            href="https://trovi.chameleoncloud.org/dashboard/artifacts/e039b284-c22a-4e42-b45a-eac2b443cdb3" />
          </>
        ) : (
          <>
            <FlincHero />
            <FlincTabs />
            <TryItNowButton label="Try NB Kernels Now"
            href="https://trovi.chameleoncloud.org/dashboard/artifacts/bc4b91f6-dd1b-47c3-ae32-56f10c7ffb3f" />
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}
