import { ServiceHero, SectionHeader, FeatureCardDark, FeatureCardLight, RelatedProjects } from "@/components/services/ServiceComponents";
import Footer from "@/components/Footer";

export default function EcommercePage() {
  return (
    <main className="bg-white">
      <ServiceHero 
        badge="E-commerce"
        title={<>Stores That Sell. <br /> Experiences That <span className="gradient-text">Stick.</span></>}
        subtitle="Conversion-first commerce. We build shopping experiences that don't just look pretty—they turn visitors into loyal customers."
        stats={[
          { value: "57%", label: "Conversion Lift" },
          { value: "3x", label: "Faster Checkout" },
          { value: "50%", label: "Higher Avg Order Value" },
          { value: "45%", label: "Lower Bounce Rate" }
        ]}
      />

      <section className="py-32 bg-white">
        <SectionHeader 
          title="Know What Your Customer Actually Wants." 
          desc="We combine data-driven insights with intuitive design to remove friction from the buying journey." 
        />
        <div className="max-w-7xl mx-auto px-20 grid grid-cols-1 md:grid-cols-2 gap-6">
          <FeatureCardLight icon="🔍" title="User Behavior Tracking" desc="Deep analysis of how users move through your store to identify and fix conversion bottlenecks." />
          <FeatureCardLight icon="🧪" title="A/B Testing" desc="Constantly iterating on layouts, copy, and CTAs to ensure your store is always performing at its peak." />
        </div>
      </section>

      <section className="py-32 bg-[#fafaf5]">
        <SectionHeader 
          title="Design That Feels Human... and AI-driven." 
          desc="Blending high-end aesthetics with smart automation for a truly personal shopping experience." 
        />
        <div className="max-w-7xl mx-auto px-20 grid grid-cols-1 md:grid-cols-2 gap-6">
          <FeatureCardDark icon="🧠" title="Personalised Content" desc="Showing the right products to the right people at the right time using smart recommendation engines." />
          <FeatureCardDark icon="🎨" title="Premium Visuals" desc="High-end product presentation that builds trust and elevates your brand's perceived value." />
          <FeatureCardDark icon="⚡" title="Lightning Speed" desc="Optimised assets and code ensuring your store loads in a blink, even on slow mobile connections." />
          <FeatureCardDark icon="📱" title="Mobile-First Commerce" desc="Shopping experiences designed specifically for the thumb, making mobile checkout effortless." />
        </div>
      </section>

      <section className="py-32 bg-white border-y border-black/5">
        <SectionHeader 
          title="Eliminate Every Reason Not to Buy." 
          desc="Removing barriers to purchase through transparency, trust signals, and seamless interactions." 
        />
        <div className="max-w-7xl mx-auto px-20 grid grid-cols-1 md:grid-cols-2 gap-6">
          <FeatureCardLight icon="💳" title="One-Tap Checkout" desc="Integrating Apple Pay, Google Pay, and modern wallets to make buying as easy as a single click." />
          <FeatureCardLight icon="📦" title="Shipping & Returns" desc="Clear, automated shipping updates and easy return portals that build long-term customer trust." />
        </div>
      </section>

      <RelatedProjects 
        projects={[
          { title: "Luxe Apparel", desc: "A high-end fashion storefront with integrated AR try-on features.", img: "👗" },
          { title: "Glow SkinCare", desc: "A subscription-based beauty store with personalised routine builders.", img: "✨" }
        ]}
      />
      <Footer />
    </main>
  );
}
