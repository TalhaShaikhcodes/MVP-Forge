import { Card } from "@/components/ui/card";
import { BorderTrail } from "@/components/ui/border-trail";

const Process = () => {
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
    <section className="py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text">
          Our Process
        </h2>
        <div className="space-y-6">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="relative bg-black/50 border border-custom-cyan/20 hover:border-custom-cyan transition-all duration-300 group overflow-hidden"
            >
              <BorderTrail
                className="bg-gradient-to-r from-custom-cyan via-custom-blue to-custom-indigo"
                size={120}
                style={{
                  boxShadow: "0px 0px 30px 15px rgba(6, 182, 212, 0.3), 0 0 50px 30px rgba(59, 130, 246, 0.2), 0 0 70px 45px rgba(99, 102, 241, 0.1)",
                }}
              />
              <div className="p-6 relative z-10">
                <div className="flex items-start gap-4">
                  <span className="text-4xl font-bold text-custom-cyan opacity-50 font-mono">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-glow">
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
      </div>
    </section>
  );
};

export default Process;