import { Card, CardContent } from "@/components/ui/card";
import { BorderTrail } from "@/components/ui/border-trail";

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
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text">
          My Work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="relative bg-black/50 border border-custom-cyan/20 hover:border-custom-cyan transition-all duration-300 transform hover:scale-105 overflow-hidden group"
            >
              <BorderTrail
                className="bg-gradient-to-r from-custom-cyan via-custom-blue to-custom-indigo"
                size={120}
                style={{
                  boxShadow:
                    "0px 0px 30px 15px rgba(6, 182, 212, 0.3), 0 0 50px 30px rgba(59, 130, 246, 0.2), 0 0 70px 45px rgba(99, 102, 241, 0.1)",
                }}
              />
              <CardContent className="p-6">
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-glow">
                  {project.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 text-sm rounded-full bg-custom-cyan/10 text-custom-cyan border border-custom-cyan/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyWork;