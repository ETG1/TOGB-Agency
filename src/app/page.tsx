import Hero from "@/components/Hero";
import Services from "@/components/Services";
import { Pricing } from "@/components/ui/pricing-cards";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Pricing />
    </div>
  );
}
