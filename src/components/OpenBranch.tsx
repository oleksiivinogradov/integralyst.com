import { Send } from "lucide-react";
import { Button } from "./ui/button";

export function OpenBranch() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-6">Want to Open Your Own Integralyst Branch?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our network of regional partners and bring innovative AI consulting to your market. 
            Contact Oleksii to discuss partnership opportunities and learn about our unique business model.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              asChild 
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
            >
              <a 
                href="https://t.me/alex12alex" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Send className="h-5 w-5" />
                Contact on Telegram
              </a>
            </Button>
            <Button 
              asChild 
              size="lg"
              variant="outline"
            >
              <a 
                href="mailto:alex@integralyst.com"
                className="flex items-center gap-2"
              >
                Send Email
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
