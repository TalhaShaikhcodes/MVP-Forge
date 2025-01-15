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
    <section className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-black/50 border border-custom-cyan/20 hover:border-custom-cyan transition-all duration-300 transform hover:scale-105 hover:glow group relative before:absolute before:inset-0 before:-z-10 before:p-[2px] before:bg-gradient-to-r before:from-custom-cyan before:via-custom-blue before:to-custom-indigo before:rounded-lg before:animate-border-glow before:opacity-0 hover:before:opacity-100"
            >
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-3 rounded-full border border-custom-cyan/20 group-hover:border-custom-cyan transition-colors">
                    <feature.icon
                      className="w-8 h-8 text-custom-cyan group-hover:text-white transition-colors"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-glow">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
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