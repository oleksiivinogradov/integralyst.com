import { Lightbulb } from "lucide-react";

interface LogoProps {
  size?: "small" | "large";
}

export function Logo({ size = "small" }: LogoProps) {
  const isLarge = size === "large";
  
  return (
    <div className={`flex items-center gap-3 ${isLarge ? 'px-4' : ''}`}>
      <div className={`${isLarge ? 'w-16 h-16 min-w-16' : 'w-8 h-8 min-w-8'} flex-shrink-0 bg-gradient-to-br from-blue-600 to-purple-600 ${isLarge ? 'rounded-2xl' : 'rounded-lg'} flex items-center justify-center relative`}>
        <Lightbulb className={`${isLarge ? 'w-6 h-6' : 'w-3 h-3'} text-white/30 absolute ${isLarge ? 'top-2 right-2' : 'top-1 right-1'}`} />
        <span className={`text-white ${isLarge ? 'text-2xl' : 'text-xs'}`}>AI</span>
      </div>
      <span className={`${isLarge ? 'text-4xl sm:text-5xl md:text-6xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent pb-1' : 'text-xl'}`}>
        Integralyst
      </span>
    </div>
  );
}
