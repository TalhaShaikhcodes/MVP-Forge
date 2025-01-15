import Hero from "@/components/Hero";
import WhySection from "@/components/Why";
import Process from "@/components/Process";
import MyWork from "@/components/MyWork";

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