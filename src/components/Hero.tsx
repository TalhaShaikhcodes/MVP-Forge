import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { useEffect } from "react";

// Extend Window interface to include Cal
declare global {
  interface Window {
    Cal?: any;
  }
}

const Hero = () => {
  useEffect(() => {
    // Initialize Cal.com
    (function (C: any, A: string, L: string) {
      let p = function (a: any, ar: any) {
        a.q.push(ar);
      };
      let d = C.document;
      C.Cal =
        C.Cal ||
        function () {
          let cal = C.Cal;
          let ar = arguments;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            d.head.appendChild(d.createElement("script")).src = A;
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api = function () {
              p(api, arguments);
            };
            const namespace = ar[1];
            api.q = api.q || [];
            if (typeof namespace === "string") {
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else p(cal, ar);
            return;
          }
          p(cal, ar);
        };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    // Initialize with your configuration
    window.Cal?.("init", "30min", { origin: "https://cal.com" });
    window.Cal?.ns["30min"]("ui", {
      theme: "light",
      cssVarsPerTheme: {
        light: { "cal-brand": "#3B82F6" },
        dark: { "cal-brand": "#3B82F6" },
      },
      hideEventTypeDetails: false,
      layout: "month_view",
    });
  }, []);

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
      </div>
    </div>
  );
};

export default Hero;