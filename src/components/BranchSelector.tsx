import React from "react";
import { Helmet } from 'react-helmet-async';
import { Card, CardHeader, CardTitle } from "./ui/card";
import { Logo } from "./Logo";
import { ArrowRight, Sparkles, Lightbulb, BarChart, Code, Zap } from "lucide-react";

export function BranchSelector() {
  const branches = [
    {
      code: "IL",
      name: "Israel",
      flag: "🇮🇱",
      path: "/il"
    },
    {
      code: "US",
      name: "United States",
      flag: "🇺🇸",
      path: "/us"
    },
    {
      code: "CH",
      name: "Switzerland",
      flag: "🇨🇭",
      path: "/ch"
    }
  ];

  const services = [
    {
      icon: Lightbulb,
      title: "Ideation & Strategy",
    },
    {
      icon: BarChart,
      title: "Analysis & Planning",
    },
    {
      icon: Code,
      title: "Development & Coding",
    },
    {
      icon: Zap,
      title: "Integration & Deployment",
    }
  ];

  return (
    <>
      <Helmet>
        <title>Integralyst - AI Integration and AI Consulting</title>
        <meta name="description" content="Integralyst provides expert AI integration and AI consulting services to transform your business. We help you leverage artificial intelligence for growth and innovation." />
        <link rel="canonical" href="https://integralyst.com/" />
        <meta property="og:title" content="Integralyst - AI Integration and AI Consulting" />
        <meta property="og:description" content="Integralyst provides expert AI integration and AI consulting services to transform your business." />
        <meta property="og:url" content="https://integralyst.com/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Integralyst - AI Integration and AI Consulting" />
        <meta name="twitter:description" content="Integralyst provides expert AI integration and AI consulting services to transform your business." />
      </Helmet>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Logo size="large" />
          </div>
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-4">
            <span className="text-sm">AI Integration - freemium model possible!</span>
          </div>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
            Choose your region to get started
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {branches.map((branch) => (
            <a 
              key={branch.code}
              href={branch.path}
              className="block transform transition-all hover:scale-105"
            >
              <Card className="text-center hover:shadow-2xl transition-all cursor-pointer border-2 hover:border-blue-300 h-full">
                <CardHeader className="space-y-4 py-12">
                  <div className="text-8xl mb-4">{branch.flag}</div>
                  <CardTitle className="text-2xl">{branch.name}</CardTitle>
                  <div className="text-sm text-gray-500 uppercase tracking-wider">
                    {branch.code}
                  </div>
                </CardHeader>
              </Card>
            </a>
          ))}
        </div>

        <Card className="w-full p-8 border-2">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-sm">AI-Powered Business Transformation</span>
                </div>
                
                <h2 className="text-4xl mb-4">Transform Your Business with AI</h2>
                
                <p className="text-lg text-gray-600 mb-6">
                  From idea to integration, we deliver end-to-end AI solutions that revolutionize your workflows and drive real results. We guide you through every step of your AI transformation journey, from initial concept to successful deployment.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {services.map((service) => {
                  const Icon = service.icon;
                  return (
                    <div key={service.title} className="bg-gray-50 p-4 rounded-lg flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shadow-sm">
                        <Icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <span className="font-medium text-gray-700">{service.title}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </Card>

        <div className="text-center mt-12">
          <h2 className="text-2xl mb-4">Want to Open Your Own Integralyst Branch?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join our network of regional partners and bring innovative AI consulting to your market. 
            Contact us at{" "}
            <a
              href="mailto:alex@integralyst.com"
              className="text-blue-600 hover:underline"
            >
              alex@integralyst.com
            </a>
            .
          </p>
        </div>
        </div>
      </div>
    </>
  );
}