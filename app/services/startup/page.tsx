import { ServiceHero, SectionHeader, FeatureCardDark, FeatureCardLight, RelatedProjects } from "@/components/services/ServiceComponents";
import Footer from "@/components/Footer";

export default function StartupPage() {
  return (
    <main className="bg-white pt-20">
      <ServiceHero 
        badge="Startups"
        title={<>Build Fast. <br /> Pivot <span className="gradient-text">Faster.</span></>}
        subtitle="Zero to Hero. We help startups launch their MVPs in record time without sacrificing long-term scalability or design quality."
        stats={[
          { value: "4-6wks", label: "Avg MVP Launch" },
          { value: "90%", label: "Code Reusability" },
          { value: "Lean", label: "Infrastructure" },
          { value: "Seed", label: "Ready Builds" }
        ]}
      />

      <section className="py-32 bg-[#fafaf5]">
        <SectionHeader 
          title="The MVP Sprint." 
          desc="Focus on your core value proposition. We'll handle the entire technical stack from design to deployment." 
        />
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <FeatureCardDark icon="🏁" title="Rapid MVP Launch" desc="Getting your product into the hands of users in weeks, not months, to gather critical market feedback." />
          <FeatureCardDark icon="🛠️" title="Agile Development" desc="Iterative building cycles that allow you to pivot your features based on real-world usage data." />
        </div>
      </section>

      <section className="py-32 bg-white border-y border-black/5">
        <SectionHeader 
          title="Scale Ready From Day One." 
          desc="We build with future growth in mind, so you won't have to rewrite everything when you hit your first 10,000 users." 
        />
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <FeatureCardLight icon="🚀" title="Scalable Tech Stack" desc="Using modern, battle-tested technologies that can handle rapid growth without breaking." />
          <FeatureCardLight icon="📈" title="Analytics Integrated" desc="Full tracking from day one so you know exactly how users are interacting with your product." />
        </div>
      </section>

      <RelatedProjects 
        projects={[
          { title: "Spark Social", desc: "A niche community platform built and launched in just 5 weeks.", img: "✨" },
          { title: "Flow Workflow", desc: "An internal automation tool for a Series A logistics company.", img: "🌊" }
        ]}
      />
      <Footer />
    </main>
  );
}
