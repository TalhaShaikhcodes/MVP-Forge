import { Card } from "@/components/ui/card";
import { BorderTrail } from "@/components/ui/border-trail";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Process = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentDay, setCurrentDay] = useState(1);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const calculateProgress = () => {
      if (!sectionRef.current) return;

      const sectionTop = sectionRef.current.offsetTop;
      const sectionHeight = sectionRef.current.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollPosition = window.scrollY;

      const scrollIntoSection = scrollPosition - sectionTop + windowHeight;
      const progress = Math.min(
        Math.max(scrollIntoSection / sectionHeight, 0),
        1
      ) * 100;

      setScrollProgress(progress);
      
      // Calculate current day based on scroll progress (1-14)
      const day = Math.min(Math.max(Math.ceil((progress / 100) * 14), 1), 14);
      setCurrentDay(day);
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
      description: "Once aligned, we jump into execution. Development starts immediately, and within just 14 days, your MVP takes shape—delivered with regular progress updates to keep you in control.",
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
    <section ref={sectionRef} className="py-20 px-4 md:px-8 relative">
      <div className="max-w-3xl mx-auto relative">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text">
          Our Process
        </h2>
        
        <div className="flex gap-8">
          <div className="flex-1 space-y-6">
            {steps.map((step, index) => (
              <Card
                key={index}
                className="relative bg-black/50 border border-custom-cyan/20 hover:border-custom-cyan transition-all duration-300 group overflow-hidden min-h-[200px]"
              >
                <BorderTrail
                  className="bg-gradient-to-r from-custom-cyan via-custom-blue to-custom-indigo"
                  size={120}
                  style={{
                    boxShadow: "0px 0px 30px 15px rgba(6, 182, 212, 0.3), 0 0 50px 30px rgba(59, 130, 246, 0.2), 0 0 70px 45px rgba(99, 102, 241, 0.1)",
                  }}
                />
                <div className="p-8 relative z-10">
                  <div className="flex items-start gap-4">
                    <span className="text-4xl font-bold text-custom-cyan opacity-50 font-mono">
                      {step.number}
                    </span>
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-glow">
                        {step.title}
                      </h3>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Calendar Display */}
          <div className="hidden lg:block sticky top-1/2 -translate-y-1/2 h-fit w-32">
            <div className="bg-black/50 border border-custom-cyan/20 rounded-lg overflow-hidden p-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentDay}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -50, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-full flex flex-col items-center justify-center"
                >
                  <div className="text-center">
                    <div className="text-sm text-custom-cyan/50 mb-2">DAY</div>
                    <div className="text-5xl font-bold text-custom-cyan">{currentDay}</div>
                    <div className="text-sm text-custom-cyan/50 mt-2">of 14</div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;