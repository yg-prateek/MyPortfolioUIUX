"use client";
import { Hero } from "@/components/sections/Hero";
import { Expertise } from "@/components/sections/Expertise";
import { InfiniteGallery } from "@/components/sections/InfiniteGallery";
import { AboutStory } from "@/components/sections/AboutStory";

// ... (existing imports)

// ... (inside Home component)
<div id="work" className="py-20">
  {/* Header content kept or adjusted? InfiniteGallery has its own header.
            The user said "create something similar to it", implying we might just want the gallery part.
            However, InfiniteGallery.tsx includes a header.
            Let's replace the whole block or just the component?
            Looking at InfiniteGallery.tsx, it has a full section wrapper with py-32 etc.
            The current page.tsx wrapper has py-20.
            It's cleaner to replace the container with InfiniteGallery if it handles its own section.
        */}
  <InfiniteGallery />
</div>
import { ContactCTA } from "@/components/sections/ContactCTA";
import { motion } from "framer-motion";

function Ticker() {
  return (
    <div className="bg-black text-white py-6 overflow-hidden border-y-4 border-black -rotate-1 my-12 relative z-20">
      <div className="flex whitespace-nowrap gap-12 font-black text-2xl md:text-4xl uppercase tracking-tighter">
        <motion.div
          animate={{ x: "-50%" }}
          transition={{
            repeat: Infinity,
            duration: 40,
            ease: "linear"
          }}
          className="flex gap-16 items-center"
        >
          {/* 1st copy */}
          <div className="flex items-center gap-16">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="flex items-center gap-16">
                UI/UX DESIGN <span className="text-primary">✦</span> PRODUCT DESIGN <span className="text-secondary">✦</span> FRONTEND CRAFT
              </span>
            ))}
          </div>
          {/* 2nd copy (Duplicate for seamless loop) */}
          <div className="flex items-center gap-16">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="flex items-center gap-16">
                UI/UX DESIGN <span className="text-primary">✦</span> PRODUCT DESIGN <span className="text-secondary">✦</span> FRONTEND CRAFT
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-pop-surface text-pop-text overflow-x-hidden selection:bg-pop-primary selection:text-black">
      <Hero />

      <Ticker />

      <AboutStory />

      <div id="work">
        <InfiniteGallery />
      </div>

      <div id="expertise" className="py-20 bg-white border-y-[3px] border-black">
        <Expertise />
      </div>

      <div id="contact">
        <ContactCTA />
      </div>
    </main>
  );
}
