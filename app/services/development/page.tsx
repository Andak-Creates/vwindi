import { ServiceHero, SectionHeader, FeatureCardDark, FeatureCardLight, RelatedProjects } from "@/components/services/ServiceComponents";
import Footer from "@/components/Footer";

export default function DevelopmentPage() {
  return (
    <main className="bg-white">
      <ServiceHero 
        badge="Web & Mobile Dev"
        title={<>Ship Fast. <br /> Build Things That <span className="gradient-text">Last.</span></>}
        subtitle="From MVP to IPO. We build robust web and native mobile applications that look gorgeous and perform flawlessly on any device."
        stats={[
          { value: "82%", label: "Faster Time to Market" },
          { value: "10x", label: "Better Performance" },
          { value: "80%", label: "Code Reusability" },
          { value: "50%", label: "Less Maintenance" }
        ]}
      />

      <section className="py-32 bg-[#fafaf5]">
        <SectionHeader 
          title="What's the Big Idea?" 
          desc="Turn your complex product requirements into simple, elegant digital experiences." 
        />
        <div className="max-w-7xl mx-auto px-10 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-6">
          <FeatureCardDark icon="📱" title="Native Mobile Apps" desc="iOS and Android applications built with React Native for maximum cross-platform code reuse and native feel." />
          <FeatureCardDark icon="🌐" title="Progressive Web Apps" desc="Lightning-fast web experiences that work perfectly offline and feel just like native applications." />
          <FeatureCardDark icon="🔌" title="API Integrations" desc="Seamlessly connecting your application with third-party services, payment gateways, and CRMs." />
          <FeatureCardDark icon="🔔" title="Real-time Features" desc="WebSockets, push notifications, and live sync ensuring your users always have the latest data." />
        </div>
      </section>

      <section className="py-32 bg-white border-y border-black/5">
        <SectionHeader 
          title="Tech That Scales With Your Ambition." 
          desc="We use the exact same technology stacks powering the world's most successful startups." 
        />
        <div className="max-w-7xl mx-auto px-10 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-6">
          <FeatureCardLight icon="🎨" title="Pixel-Perfect UI" desc="Translating Figma designs into pixel-perfect frontend code with precise animations and interactions." />
          <FeatureCardLight icon="📱" title="Responsive Design" desc="Fluid layouts that automatically adapt to provide the best experience on phones, tablets, and massive desktop monitors." />
          <FeatureCardLight icon="♿" title="A11y Compliant" desc="Ensuring your application is fully accessible to all users, adhering strictly to WCAG guidelines." />
          <FeatureCardLight icon="🌍" title="i18n Ready" desc="Built from day one to support multiple languages, currencies, and regional formatting." />
        </div>
      </section>

      <section className="py-32 bg-[#fafaf5]">
        <SectionHeader 
          title="Ready For Launch." 
          desc="Secure, authenticated, and fully tested. We don't ship until it's bulletproof." 
        />
        <div className="max-w-7xl mx-auto px-10 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-6">
          <FeatureCardDark icon="🔒" title="Secure Auth" desc="Implementing passwordless login, biometric authentication, and enterprise Single Sign-On (SSO)." />
          <FeatureCardDark icon="🧪" title="Automated Testing" desc="Comprehensive unit and end-to-end testing suites to catch regressions before they reach production." />
        </div>
      </section>

      <RelatedProjects 
        projects={[
          { title: "HealthTrack Pro", desc: "A cross-platform mobile app for tracking daily wellness metrics.", img: "❤️" },
          { title: "SaaS Dashboard UI", desc: "A comprehensive B2B analytics platform for a fast-growing startup.", img: "📈" }
        ]}
      />
      <Footer />
    </main>
  );
}
