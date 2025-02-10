
import { useEffect, useRef, useState } from "react";
import { ProcessStep } from "./process/ProcessStep";
import { ProgressBar } from "./process/ProgressBar";

const Process = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const calculateProgress = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      const scrolledDistance = viewportHeight - sectionTop;
      
      let progress = (scrolledDistance / (sectionHeight - viewportHeight/2)) * 100;
      progress = Math.max(0, Math.min(100, progress));
      
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", calculateProgress);
    calculateProgress();

    return () => window.removeEventListener("scroll", calculateProgress);
  }, []);

  const steps = [
    {
      title: "Idea Discovery",
      description: "Kick things off with a personalized consultation with our founder. We'll unpack your vision, dive into your idea, and clarify your goals to set the foundation for your MVP's success.",
      number: "01"
    },
    {
      title: "Strategic MVP Blueprint",
      description: "We craft a detailed action plan, including a technical roadmap and a Product Requirements Document (PRD), so you're clear on every step of the process before development begins.",
      number: "02"
    },
    {
      title: "Rapid Build Sprint",
      description: "Once aligned, we jump into execution. Development starts immediately, and within just 4 days, your MVP takes shape—delivered with regular progress updates to keep you in control.",
      number: "03"
    },
    {
      title: "Seamless MVP Launch",
      description: "Your completed MVP is delivered, ready for real-world testing, feedback, and user acquisition—giving you a robust product designed for impact.",
      number: "04"
    },
    {
      title: "Ongoing Support & Optimization",
      description: "Post-launch, we provide one month of proactive maintenance to handle fixes, optimize performance, and ensure your MVP is primed for success as you scale.",
      number: "05"
    }
  ];

  return (
    <section id="process" ref={sectionRef} className="py-20 px-4 md:px-8 relative min-h-[200vh]">
      <div className="max-w-3xl mx-auto relative">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text">
          Our Process
        </h2>
        
        <div className="flex gap-8">
          <div className="flex-1 space-y-6">
            {steps.map((step, index) => (
              <ProcessStep key={index} {...step} />
            ))}
          </div>
          <ProgressBar progress={scrollProgress} />
        </div>
      </div>
    </section>
  );
};

export default Process;
