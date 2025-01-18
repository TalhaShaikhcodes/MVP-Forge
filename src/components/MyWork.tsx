import { motion } from "framer-motion";
import { GridBackground } from "@/components/ui/glowing-card";

const MyWork = () => {
  const projects = [
    {
      title: "WallofPeers",
      description: "A responsive full stack webapp, which contains a wall featuring students of a classroom and also their class memories and other relevant stuff.",
      tags: ["React vite", "Supabase Auth & Database", "Typescript", "Tailwind CSS"],
      imageUrl: "/lovable-uploads/ba0e1e02-d809-4abc-a23c-e4085efeb08f.png",
      imageAlt: "WallofPeers project preview",
    },
    {
      title: "CineTrack",
      description: "A responsive full stack webapp, which is basically Goodreads but for movies & shows, where users can track what they are watching and also have social connection, TMDB API is integrated into webapp which fetches & displays all movies and socials content.",
      tags: ["React vite", "Supabase Auth & Database", "Typescript", "Tailwind CSS", "TMDB API"],
      imageUrl: "/lovable-uploads/f1113da6-bf08-4b5a-8c27-b5f00eec7b98.png",
      imageAlt: "CineTrack project preview",
    },
  ];

  return (
    <section id="work" className="py-20 px-4 md:px-8">
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
              className="h-full"
            >
              <GridBackground
                title={project.title}
                description={project.description}
                showAvailability={false}
                className="group transform hover:scale-105 transition-all duration-300 h-full flex flex-col"
              >
                <div className="relative h-64 mb-4 rounded-lg overflow-hidden">
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