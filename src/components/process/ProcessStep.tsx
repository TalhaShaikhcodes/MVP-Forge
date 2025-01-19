import { Card } from "@/components/ui/card";
import { BorderTrail } from "@/components/ui/border-trail";

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
}

export const ProcessStep = ({ number, title, description }: ProcessStepProps) => {
  return (
    <Card className="relative bg-black/50 border border-custom-cyan/20 hover:border-custom-cyan transition-all duration-300 group overflow-hidden min-h-[200px]">
      <BorderTrail
        className="bg-gradient-to-r from-custom-cyan via-custom-blue to-custom-indigo"
        size={120}
        style={{
          boxShadow: "0px 0px 30px 15px rgba(6, 182, 212, 0.3), 0 0 50px 30px rgba(59, 130, 246, 0.2), 0 0 70px 45px rgba(99, 102, 241, 0.1)",
        }}
      />
      <div className="p-8 relative z-10">
        <div className="flex items-start gap-4">
          <span className="text-4xl font-bold text-custom-cyan opacity-50 font-mono">
            {number}
          </span>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-glow">
              {title}
            </h3>
            <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
              {description}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};