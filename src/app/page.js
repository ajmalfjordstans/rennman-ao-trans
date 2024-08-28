import Hero from "@/components/home/hero";
import HomeAbout from "@/components/home/home-about";
import HomeServices from "@/components/home/home-services";
import WhyChooseUs from "@/components/home/why-choose-us";

export default function Home() {
  return (
    <div>
      <Hero />
      <HomeAbout />
      <HomeServices />
      <WhyChooseUs />
      {/* <Mission />
      <Services /> */}
    </div>
  );
}
