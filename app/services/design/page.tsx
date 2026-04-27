import { ServiceHero, SectionHeader, FeatureCardDark, FeatureCardLight, RelatedProjects } from "@/components/services/ServiceComponents";
import Footer from "@/components/Footer";

export default function DesignPage() {
  return (
    <main className="bg-white">
      <ServiceHero 
        badge="AI Design"
        title={<>Award-Winning Design <br /> Partners (Who Actually <span className="gradient-text">Listen</span>).</>}
        subtitle="Design as a service. We combine human creativity with AI-powered efficiency to build stunning brands and interfaces."
        stats={[
          { value: "100+", label: "Brands Launched" },
          { value: "50%", label: "Faster Cycles" },
          { value: "10/10", label: "Client Love" },
          { value: "100%", label: "Custom Crafted" }
        ]}
      />

      <section className="py-32 bg-white">
        <SectionHeader 
          title="Journeys That Make Sense." 
          desc="We map out every touchpoint to ensure your users never feel lost and always find what they need." 
        />
        <div className="max-w-7xl mx-auto px-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCardLight icon="🗺️" title="User Flow Mapping" desc="Strategic planning of every screen and interaction to ensure a logical, frictionless journey." />
          <FeatureCardLight icon="📱" title="Responsive UX" desc="Designing for the smallest screen first to ensure perfect usability on every single device." />
          <FeatureCardLight icon="✨" title="Micro-interactions" desc="Delightful animations and feedback loops that make your app feel alive and premium." />
        </div>
      </section>

      <section className="py-32 bg-[#fafaf5]">
        <SectionHeader 
          title="Design Systems That Scale." 
          desc="Consistency is key. We build robust design systems that allow your brand to grow without fragmenting." 
        />
        <div className="max-w-7xl mx-auto px-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCardDark icon="📚" title="Component Libraries" desc="A single source of truth for all your UI elements, ensuring total consistency across platforms." />
          <FeatureCardDark icon="🎨" title="Style Guides" desc="Defining your typography, colors, and spacing in a way that's easy for developers to implement." />
          <FeatureCardDark icon="💎" title="Asset Management" desc="Organised, high-quality iconography and imagery that scales perfectly across all resolutions." />
        </div>
      </section>

      <section className="py-32 bg-white border-y border-black/5">
        <SectionHeader 
          title="Prototype Fast. Build Faster." 
          desc="We use interactive prototypes to validate ideas and gather feedback before a single line of code is written." 
        />
        <div className="max-w-7xl mx-auto px-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCardLight icon="⚡" title="Rapid Prototyping" desc="High-fidelity interactive models that look and feel exactly like the final product." />
          <FeatureCardLight icon="👥" title="User Testing" desc="Validating designs with real users to ensure the interface is as intuitive as possible." />
          <FeatureCardLight icon="🏗️" title="Dev-Ready Handoff" desc="Clean, documented design files that make life easy for the engineering team." />
        </div>
      </section>

      <RelatedProjects 
        projects={[
          { title: "Vivid Brand Identity", desc: "A complete visual overhaul for a modern tech startup.", img: "🌈" },
          { title: "Quantum UI System", desc: "A comprehensive design system for a complex cloud platform.", img: "⚛️" }
        ]}
      />
      <Footer />
    </main>
  );
}
