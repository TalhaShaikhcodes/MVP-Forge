import { Card, CardContent } from "@/components/ui/card";
import { GridBackground } from "@/components/ui/glowing-card";
import { motion } from "framer-motion";

const MyWork = () => {
  const projects = [
    {
      title: "Modern Web Application",
      description:
        "A full-stack web application built with React and Node.js. Features include real-time updates, user authentication, and responsive design.",
      tags: ["React", "Node.js", "TypeScript", "Tailwind CSS"],
      imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80",
      imageAlt: "Modern web application interface on laptop",
    },
    {
      title: "E-commerce Platform",
      description:
        "A scalable e-commerce solution with advanced features like cart management, payment integration, and inventory tracking.",
      tags: ["Next.js", "MongoDB", "Stripe", "Redux"],
      imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80",
      imageAlt: "E-commerce platform dashboard",
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
          className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text"
        >
          My Work
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <GridBackground
                title={project.title}
                description={project.description}
                showAvailability={false}
                className="group transform hover:scale-105 transition-all duration-300"
              >
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tagIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: tagIndex * 0.1 }}
                      className="px-2 py-1 text-sm rounded-full bg-custom-cyan/10 text-custom-cyan border border-custom-cyan/20"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </GridBackground>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyWork;