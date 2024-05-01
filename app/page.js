import Hero from "../components/hero";
import Nav from "../components/navbar";
import Footer from "@/components/footer";
import Courses from "@/components/courses";
import Services from "@/components/services";
import ValueProps from "@/components/valueProps";
import SocialProof from "@/components/socialProof";
import SocialProof2 from "@/components/socialProof2";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <section className="">
      <Nav />
      <>
        <Hero />
        <SocialProof />
        {/* <ValueProps /> */}
        <Services />
        <Courses />
        <SocialProof2 />
        <Testimonials />
        <Footer />
      </>
    </section>
  );
}
