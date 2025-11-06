import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Lightbulb, Code, Zap, BarChart } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: Lightbulb,
      title: "Ideation & Strategy",
      description: "We help you identify AI opportunities in your business and create a roadmap for implementation.",
      color: "text-yellow-600"
    },
    {
      icon: BarChart,
      title: "Analysis & Planning",
      description: "Deep dive into your workflows to design AI solutions that integrate seamlessly with your existing systems.",
      color: "text-green-600"
    },
    {
      icon: Code,
      title: "Development & Coding",
      description: "Our expert team builds custom AI solutions tailored to your specific business needs and requirements.",
      color: "text-blue-600"
    },
    {
      icon: Zap,
      title: "Integration & Deployment",
      description: "Seamless integration into your workflow with ongoing support and optimization for maximum impact.",
      color: "text-purple-600"
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6">Full-Cycle AI Consulting</h2>
          <p className="text-xl text-gray-600">
            We guide you through every step of your AI transformation journey, from initial concept to successful deployment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="border-2 hover:border-blue-200 transition-all hover:shadow-lg">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} bg-opacity-10 flex items-center justify-center mb-4`}>
                    <Icon className={`w-6 h-6 ${service.color}`} />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
