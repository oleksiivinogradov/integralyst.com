import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { CheckCircle2, TrendingUp, Rocket, Users } from "lucide-react";

export function BusinessModel() {
  const steps = [
    {
      number: "01",
      title: "Evaluate & Discover",
      description: "We analyze your business to identify high-impact AI opportunities.",
      icon: CheckCircle2
    },
    {
      number: "02",
      title: "Build SaaS Product",
      description: "Create a custom AI-powered SaaS solution tailored to your needs.",
      icon: Rocket
    },
    {
      number: "03",
      title: "Test & Deploy",
      description: "Rigorous testing and production deployment at no upfront cost to you.",
      icon: TrendingUp
    },
    {
      number: "04",
      title: "Joint Venture",
      description: "Form a partnership to bring the product to market together.",
      icon: Users
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-purple-50 via-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge className="mb-4 bg-purple-600">Innovative Business Model</Badge>
          <h2 className="text-4xl md:text-5xl mb-6">Zero Upfront Investment</h2>
          <p className="text-xl text-gray-600 mb-6">
            Transform your business with AI without any development costs. We build, you profit.
          </p>
        </div>

        <div className="max-w-5xl mx-auto mb-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card key={index} className="relative overflow-hidden border-2 hover:border-purple-200 transition-all hover:shadow-lg">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-purple-100 to-blue-100 opacity-50 rounded-bl-full"></div>
                  <CardHeader>
                    <div className="flex items-start justify-between mb-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-3xl text-purple-200">{step.number}</span>
                    </div>
                    <CardTitle className="text-lg">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{step.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        <Card className="max-w-4xl mx-auto bg-gradient-to-br from-purple-600 to-blue-600 text-white border-none">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl text-center text-white">The Result: A Win-Win Partnership</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  You Get
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-200 flex-shrink-0">✓</span>
                    <span>Custom AI solution at zero upfront cost</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-200 flex-shrink-0">✓</span>
                    <span>Production-ready product for your business</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-200 flex-shrink-0">✓</span>
                    <span>Regular pricing paid after product launch</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-200 flex-shrink-0">✓</span>
                    <span>Ongoing profit share from product sales</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  We Get
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-200 flex-shrink-0">✓</span>
                    <span>Strategic partnership in proven solution</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-200 flex-shrink-0">✓</span>
                    <span>Market validation from real use case</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-200 flex-shrink-0">✓</span>
                    <span>Long-term revenue sharing model</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-200 flex-shrink-0">✓</span>
                    <span>Mutual growth and success</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
