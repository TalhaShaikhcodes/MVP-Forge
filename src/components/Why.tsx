import { Rocket, DollarSign, Target, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { BorderTrail } from "@/components/ui/border-trail";
import { motion } from "framer-motion";

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
        "Launching an idea shouldn't cost a fortune. By leveraging AI and no-code technologies, we make top-tier MVPs accessible to entrepreneurs and businesses.",
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
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
        >
          Why <span className="bg-gradient-to-r from-[#8B5CF6] via-[#D946EF] to-[#F97316] bg-clip-text text-transparent">MVP Forge</span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="h-full"
            >
              <Card
                className="relative bg-black/50 border border-custom-cyan/20 hover:border-custom-cyan transition-all duration-300 transform hover:scale-105 group h-full flex flex-col"
              >
                <BorderTrail
                  className="bg-gradient-to-r from-custom-cyan via-custom-blue to-custom-indigo"
                  size={120}
                  style={{
                    boxShadow:
                      "0px 0px 30px 15px rgba(6, 182, 212, 0.3), 0 0 50px 30px rgba(59, 130, 246, 0.2), 0 0 70px 45px rgba(99, 102, 241, 0.1)",
                  }}
                />
                <CardContent className="p-6 flex flex-col flex-grow">
                  <div className="flex flex-col items-center text-center h-full">
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;