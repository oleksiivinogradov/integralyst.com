import { Mail, Calendar, Send } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Logo />
            </div>
            <p className="text-gray-400">
              Transforming businesses through intelligent AI solutions.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-center">Connect</h3>
            <div className="flex gap-4">
              <a 
                href="mailto:alex@integralyst.com" 
                className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href="https://t.me/alex12alex" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                aria-label="Telegram"
              >
                <Send className="w-5 h-5" />
              </a>
              <a 
                href="https://calendly.com/oleksiivinogradov/30min" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                aria-label="Schedule a call"
              >
                <Calendar className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400">
          <p>&copy; 2025 Integralyst. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
