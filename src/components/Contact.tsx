import { Card, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Mail, Calendar, Send } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6">Let's Build Something Amazing</h2>
          <p className="text-xl text-gray-600">
            Ready to transform your business with AI? Get in touch and let's discuss your project.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <a href="mailto:alex@integralyst.com" className="block">
            <Card className="text-center hover:shadow-xl transition-all cursor-pointer h-full">
              <CardHeader>
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>Email Us</CardTitle>
                <CardDescription>alex@integralyst.com</CardDescription>
              </CardHeader>
            </Card>
          </a>

          <a href="https://t.me/alex12alex" target="_blank" rel="noopener noreferrer" className="block">
            <Card className="text-center hover:shadow-xl transition-all cursor-pointer h-full">
              <CardHeader>
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center">
                  <Send className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>Telegram</CardTitle>
                <CardDescription>Chat with us directly</CardDescription>
              </CardHeader>
            </Card>
          </a>

          <a href="https://calendly.com/oleksiivinogradov/30min" target="_blank" rel="noopener noreferrer" className="block">
            <Card className="text-center hover:shadow-xl transition-all cursor-pointer h-full">
              <CardHeader>
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-purple-100 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle>Schedule Call</CardTitle>
                <CardDescription>Book a free consultation</CardDescription>
              </CardHeader>
            </Card>
          </a>
        </div>
      </div>
    </section>
  );
}
