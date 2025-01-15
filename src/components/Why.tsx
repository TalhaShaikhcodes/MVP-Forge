import { Rocket, DollarSign, Target, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const WhySection = () => {
  const features = [
    {
      icon: Rocket,
      title: "Speed Without Sacrificing Quality",
      description:
        "Using cutting-edge AI tools and streamlined workflows, we create MVPs that aren't just fast but also impactful.",
    },
    {
      icon: DollarSign,
      title: "Affordable Innovation",
      description:
        "Launching an idea shouldn't cost a fortune. By leveraging AI and no-code technologies, we make top-tier MVPs accessible to entrepreneurs and businesses, saving you time, money, and effort.",
    },
    {
      icon: Target,
      title: "Tailored Solutions",
      description:
        "No cookie-cutter products here. Every MVP we create is crafted to fit your unique goals and target audience. Whether you're testing a disruptive idea or enhancing an existing concept, we adapt to meet your needs.",
    },
    {
      icon: Eye,
      title: "Transparent Process",
      description:
        "We don't just build for you—we build with you. From initial brainstorming to final delivery, you'll have clear insights into every step of the process. No guesswork, no surprises—just results.",
    },
  ];

  return (
    <section className="relative py-20 px-4 md:px-8 overflow-hidden">
      {/* Floating gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-custom-cyan/20 rounded-full filter blur-[128px] animate-float mix-blend-screen"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-custom-blue/20 rounded-full filter blur-[128px] animate-float animation-delay-2000 mix-blend-screen"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-custom-indigo/20 rounded-full filter blur-[128px] animate-float animation-delay-4000 mix-blend-screen"></div>
      </div>

      <div className="relative max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text animate-pulse-soft">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="relative bg-black/30 backdrop-blur-xl border-0 transition-all duration-500 group hover:transform hover:scale-105"
            >
              {/* Gradient border with glow */}
              <div className="absolute inset-0 rounded-lg p-[1px] bg-gradient-to-r from-custom-cyan via-custom-blue to-custom-indigo opacity-50 group-hover:opacity-100 transition-opacity"></div>
              
              {/* Inner glow */}
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity bg-gradient-radial from-white/20 via-transparent to-transparent"></div>

              <CardContent className="relative p-6 rounded-lg backdrop-blur-sm">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-3 rounded-full bg-gradient-to-r from-custom-cyan/10 via-custom-blue/10 to-custom-indigo/10 border border-white/10 group-hover:border-white/20 transition-all duration-300">
                    <feature.icon
                      className="w-8 h-8 text-custom-cyan group-hover:text-white transition-colors duration-300"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-glow transition-all duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;