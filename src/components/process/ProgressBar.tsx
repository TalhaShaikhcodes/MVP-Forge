interface ProgressBarProps {
  progress: number;
}

export const ProgressBar = ({ progress }: ProgressBarProps) => {
  return (
    <div className="hidden lg:block sticky top-1/3 h-fit w-6">
      <div className="h-[400px] w-6 bg-black/50 border border-custom-cyan/20 rounded-full overflow-hidden">
        <div 
          className="w-full bg-gradient-to-b from-custom-cyan via-custom-blue to-custom-indigo transition-all duration-300 rounded-full animate-glow-pulse"
          style={{ 
            height: `${progress}%`,
            boxShadow: "0 0 40px 10px theme('colors.custom.cyan'), 0 0 60px 20px theme('colors.custom.blue'), 0 0 80px 30px theme('colors.custom.indigo')",
          }}
        />
      </div>
    </div>
  );
};