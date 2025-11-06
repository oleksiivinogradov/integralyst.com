import { Button } from "./ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm">AI-Powered Business Transformation</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Transform Your Business with AI
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            From idea to integration. We deliver end-to-end AI solutions that revolutionize your workflows and drive real results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => scrollToSection("contact")} className="gap-2">
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollToSection("cases")}>
              View Case Studies
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto px-4">
            <div>
              <div className="text-3xl md:text-4xl text-blue-600 mb-2">10K+</div>
              <div className="text-sm md:text-base text-gray-600">Active Users</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl text-blue-600 mb-2">4+</div>
              <div className="text-sm md:text-base text-gray-600">Success Stories</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl text-blue-600 mb-2">100%</div>
              <div className="text-sm md:text-base text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}