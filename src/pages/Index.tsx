import Hero from "@/components/Hero";
import WhySection from "@/components/Why";
import MyWork from "@/components/MyWork";
import Process from "@/components/Process";

const Index = () => {
  return (
    <main className="min-h-screen bg-custom-black">
      <Hero />
      <WhySection />
      <Process />
      <MyWork />
    </main>
  );
};

export default Index;