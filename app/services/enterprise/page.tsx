import { ServiceHero, SectionHeader, FeatureCardDark, FeatureCardLight, RelatedProjects } from "@/components/services/ServiceComponents";
import Footer from "@/components/Footer";

export default function EnterprisePage() {
  return (
    <main className="bg-white">
      <ServiceHero 
        badge="Enterprise"
        title={<>Composable Without <br /> the <span className="gradient-text">Chaos.</span></>}
        subtitle="Architecture that scales. We build resilient, headless, and API-first ecosystems that handle enterprise loads without breaking a sweat."
        stats={[
          { value: "50%", label: "Faster Deployments" },
          { value: "99.9%", label: "Uptime Guaranteed" },
          { value: "30%", label: "Lower Server Costs" },
          { value: "2x", label: "Faster Scaling" }
        ]}
      />

      <section className="py-32 bg-white">
        <SectionHeader 
          title="Architecture With Intent." 
          desc="We don't just write code, we engineer systems designed to last and scale with your business." 
        />
        <div className="max-w-7xl mx-auto px-10 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCardDark icon="⚛️" title="React Ecosystem" desc="State of the art frontend architecture using React, Next.js, and server components for unmatched speed." />
          <FeatureCardDark icon="⚙️" title="Headless APIs" desc="Decoupled backend logic allowing your marketing site, web app, and mobile app to run on one brain." />
          <FeatureCardDark icon="☁️" title="Cloud Native" desc="Deployed on modern serverless edge infrastructure ensuring global availability and auto-scaling." />
        </div>
      </section>

      <section className="py-32 bg-[#fdfdfd] border-y border-black/5">
        <SectionHeader 
          title="Architecture That Fits Together." 
          desc="Say goodbye to monolithic spaghetti code. We use modular, composable pieces." 
        />
        <div className="max-w-7xl mx-auto px-10 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCardLight icon="🧩" title="Microservices" desc="Independent services that can be scaled, updated, or replaced without affecting the rest of the system." />
          <FeatureCardLight icon="🔄" title="CI/CD Pipelines" desc="Automated testing and deployment workflows that ensure code quality and rapid feature releases." />
          <FeatureCardLight icon="🛡️" title="Enterprise Security" desc="Bank-grade security protocols, OAuth integrations, and strict role-based access control." />
        </div>
      </section>

      <section className="py-32 bg-[#fafaf5]">
        <SectionHeader 
          title="Scale Without the Sprawl." 
          desc="Maintain clean codebases and predictable performance even as your user base multiplies." 
        />
        <div className="max-w-7xl mx-auto px-10 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCardDark icon="📊" title="Data Lakes" desc="Centralised repositories that allow you to store all your structured and unstructured data at any scale." />
          <FeatureCardDark icon="⚡" title="Edge Caching" desc="Distributing your content globally to ensure your users experience sub-100ms load times anywhere." />
          <FeatureCardDark icon="🔍" title="Observability" desc="Deep tracing and logging to instantly identify bottlenecks and preemptively resolve issues." />
        </div>
      </section>

      <RelatedProjects 
        projects={[
          { title: "Global FinApp", desc: "A headless banking dashboard handling millions of requests daily.", img: "🏦" },
          { title: "EduTech Portal", desc: "A composable learning management system for a major university.", img: "🎓" }
        ]}
      />
      <Footer />
    </main>
  );
}
