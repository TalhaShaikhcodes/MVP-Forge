
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

export const HeroContent = () => {
  return (
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
        Idea To MVP
        <span className="block text-glow">In 4 days</span>
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
      >
        While others are still planning, your fully functional MVP will be live and gathering real user feedback. From wireframes to working product in just 4 days.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="flex flex-col items-center gap-3"
      >
        <Button 
          data-cal-link="talha-shaikh/30min"
          data-cal-namespace="30min"
          data-cal-config='{"layout":"month_view","theme":"light"}'
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
  );
};
