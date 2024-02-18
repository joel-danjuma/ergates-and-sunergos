import Hero from "../components/hero";
import Services from "@/components/services";
import ValueProps from "@/components/valueProps";
import SocialProof from "@/components/socialProof";
import SocialProof2 from "@/components/socialProof2";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <section className="">
      <Hero />
      <SocialProof />
      <ValueProps />
      <Services />
      <SocialProof2 />
      <Testimonials />
    </section>
  );
}
