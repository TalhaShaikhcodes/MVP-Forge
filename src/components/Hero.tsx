import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

const Hero = () => {
  return (
    <div id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-radial from-custom-cyan/20 via-transparent to-transparent animate-glow-pulse" />
      <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-custom-blue/20 rounded-full blur-3xl animate-glow-pulse" />
      
      {/* MVP Forge Branding */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="absolute top-8 left-8 flex items-center gap-3 text-3xl font-bold"
      >
        <img 
          src="/lovable-uploads/960ca759-05d8-41bb-9f5d-b302b2c04c2c.png" 
          alt="MVP Forge Icon" 
          className="w-12 h-12"
        />
        <span className="gradient-text">MVP Forge</span>
      </motion.div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 gradient-text"
          >
            First Version of Your
            <span className="block text-glow">Dream In 2 weeks</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            While others are still planning, your fully functional MVP will be live and gathering real user feedback. From wireframes to working product in just 2 weeks.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col items-center gap-3"
          >
            <Button 
              className="bg-gradient-to-r from-custom-cyan via-custom-blue to-custom-indigo hover:opacity-90 transition-all duration-300 text-white px-8 py-6 rounded-lg text-lg font-semibold glow hover:scale-105 hover:shadow-lg flex items-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              Book a Call
            </Button>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-sm text-gray-400"
            >
              No commitment required. Let's explore your idea together.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;