import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ExternalLink } from "lucide-react";

export function CaseStudies() {
  const cases = [
    {
      title: "UnitAI.net - AI-Powered Game Development",
      description: "Revolutionary AI integration for game development workflows, automating asset generation, NPC behavior, and procedural content creation.",
      image: "https://images.unsplash.com/photo-1614179924047-e1ab49a0a0cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBzZXR1cHxlbnwxfHx8fDE3NjIyMTQ0Njd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Game Dev", "AI Integration", "Automation"],
      link: "https://unitai.net",
      results: ["50% faster asset creation", "Dynamic NPC systems", "Procedural content at scale"]
    },
    {
      title: "Retreat Company Support Bot",
      description: "Intelligent AI chatbot serving 10,000+ users, providing instant support, booking assistance, and personalized recommendations for retreat experiences.",
      image: "https://images.unsplash.com/photo-1709715357479-591f9971fb05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMHN1cHBvcnR8ZW58MXx8fHwxNzYyMjQ3OTYyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Customer Support", "Chatbot", "Scale"],
      results: ["10,000+ active users", "95% satisfaction rate", "70% reduction in response time"]
    },
    {
      title: "AI Sales CRM Platform",
      description: "Complete AI-driven CRM solution that automates lead scoring, predicts customer behavior, and optimizes sales workflows for maximum conversion.",
      image: "https://images.unsplash.com/photo-1583147986942-2249ecc53aa8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWxlcyUyMENSTXxlbnwxfHx8fDE3NjIyNjIwMTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["CRM", "Sales", "Automation"],
      results: ["40% increase in conversions", "Automated lead scoring", "Predictive analytics"]
    },
    {
      title: "Competitor Intelligence System",
      description: "Advanced AI system for competitive analysis that extracts pricing, features, and updates from email and messenger conversations where traditional data sources are unavailable.",
      image: "https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHlzaXN8ZW58MXx8fHwxNzYyMjQ5OTc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Market Intelligence", "NLP", "Data Extraction"],
      results: ["Real-time competitor tracking", "Automated data extraction", "Strategic insights"]
    }
  ];

  return (
    <section id="cases" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6">Success Stories</h2>
          <p className="text-xl text-gray-600">
            Real results from real clients. See how we've transformed businesses across industries with custom AI solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {cases.map((caseStudy, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-video overflow-hidden bg-gray-200">
                <ImageWithFallback 
                  src={caseStudy.image} 
                  alt={caseStudy.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex flex-wrap gap-2 mb-3">
                  {caseStudy.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary">{tag}</Badge>
                  ))}
                </div>
                <CardTitle className="flex items-start justify-between gap-2">
                  {caseStudy.title}
                  {caseStudy.link && (
                    <a 
                      href={caseStudy.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 flex-shrink-0"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </CardTitle>
                <CardDescription>{caseStudy.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="text-sm">Key Results:</div>
                  <ul className="space-y-1">
                    {caseStudy.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="text-sm text-gray-600 flex items-start gap-2">
                        <span className="text-green-500 flex-shrink-0">✓</span>
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
