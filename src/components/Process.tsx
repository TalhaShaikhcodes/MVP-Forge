import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const processSteps = [
  {
    title: "Idea Discovery",
    description:
      "Kick things off with a personalized consultation with our founder. We'll unpack your vision, dive into your idea, and clarify your goals to set the foundation for your MVP's success.",
  },
  {
    title: "Strategic MVP Blueprint",
    description:
      "We craft a detailed action plan, including a technical roadmap and a Product Requirements Document (PRD), so you're clear on every step of the process before development begins.",
  },
  {
    title: "Rapid Build Sprint",
    description:
      "Once aligned, we jump into execution. Development starts immediately, and within just 14 days, your MVP takes shape—delivered with regular progress updates to keep you in control.",
  },
  {
    title: "Seamless MVP Launch",
    description:
      "Your completed MVP is delivered, ready for real-world testing, feedback, and user acquisition—giving you a robust product designed for impact.",
  },
  {
    title: "Ongoing Support & Optimization",
    description:
      "Post-launch, we provide one month of proactive maintenance to handle fixes, optimize performance, and ensure your MVP is primed for success as you scale.",
  },
];

const Process = () => {
  return (
    <section className="py-20 bg-custom-black relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center gradient-text">
          Our Process
        </h2>
        <div className="relative">
          {/* Progress Bar */}
          <div className="absolute right-0 top-0 bottom-0 w-1.5 bg-gray-800 mr-8">
            <div className="w-full h-full bg-gradient-to-b from-custom-cyan via-custom-blue to-custom-indigo animate-glow-pulse" />
          </div>
          
          {/* Process Cards */}
          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <div key={index} className="flex items-center justify-between">
                <Card className="w-[90%] border-none bg-opacity-10 bg-white backdrop-blur-sm hover:bg-opacity-20 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-2xl gradient-text">
                      {step.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">{step.description}</p>
                  </CardContent>
                </Card>
                {/* Glowing Node */}
                <div className="w-4 h-4 rounded-full bg-custom-cyan shadow-[0_0_10px_theme('colors.custom.cyan')] animate-glow-pulse mr-6" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;