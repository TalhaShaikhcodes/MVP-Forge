import { motion } from "framer-motion";
import { CalendarInitializer } from "./hero/CalendarInitializer";
import { HeroContent } from "./hero/HeroContent";

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
        <HeroContent />
      </div>

      <CalendarInitializer />
    </div>
  );
};

export default Hero;