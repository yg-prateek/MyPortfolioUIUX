import { Hero } from "@/components/sections/Hero";
import { AboutStory } from "@/components/sections/AboutStory";
import { Expertise } from "@/components/sections/Expertise";
import { CurrentFocus } from "@/components/sections/CurrentFocus";
import { ProjectGallery } from "@/components/sections/ProjectGallery";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { InfiniteGallery } from "@/components/sections/InfiniteGallery";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black overflow-hidden selection:bg-primary selection:text-black">
      <Hero />
      <div id="about">
        <AboutStory />
      </div>
      <div id="expertise">
        <Expertise />
      </div>
      <CurrentFocus />
      <div id="work">
        <ProjectGallery />
      </div>
      <InfiniteGallery />
      <div id="contact">
        <ContactCTA />
      </div>
    </main>
  );
}
