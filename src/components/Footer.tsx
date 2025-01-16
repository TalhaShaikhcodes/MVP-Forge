import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Boxes } from "@/components/ui/background-boxes";

const Footer = () => {
  return (
    <footer className="relative py-20 px-6 bg-slate-900 border-t border-gray-800 overflow-hidden">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      
      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-30">
        <h2 className="text-4xl md:text-5xl font-bold gradient-text animate-glow-pulse">
          Ready to Build Your Dream MVP?
        </h2>
        
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          Bring your idea to life in record time with our expert MVP development process. Let's create, launch, and validate your vision—faster, smarter, and more affordably.
        </p>
        
        <Button 
          className="mt-8 bg-gradient-to-r from-custom-cyan via-custom-blue to-custom-indigo hover:opacity-90 text-white px-8 py-6 h-auto text-lg group"
        >
          Get Started
          <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </footer>
  );
};

export default Footer;