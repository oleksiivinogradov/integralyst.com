import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Linkedin, Mail } from "lucide-react";
import { foundersData } from "../data/founders";

// Import images for dynamic use
import oleksiiPhoto from "figma:asset/91f0865d322b601ece4b8e907c5b04462763af93.png";
import valeriiPhoto from "figma:asset/6cbdec076f590118f004f7997bb7d945d6fceb69.png";
import victoriaPhoto from "figma:asset/e84071a295e8a8f52cae68f10399653867e24b6c.png";
import eugenePhoto from "figma:asset/5dd864a86266c5641e5cefc46aab9022ead7c043.png";

// Map image paths to actual imports
const imageMap: Record<string, string> = {
  "figma:asset/91f0865d322b601ece4b8e907c5b04462763af93.png": oleksiiPhoto,
  "figma:asset/6cbdec076f590118f004f7997bb7d945d6fceb69.png": valeriiPhoto,
  "figma:asset/e84071a295e8a8f52cae68f10399653867e24b6c.png": victoriaPhoto,
  "figma:asset/5dd864a86266c5641e5cefc46aab9022ead7c043.png": eugenePhoto
};

interface TeamProps {
  countryCode: "CH" | "US" | "IL";
}

export function Team({ countryCode }: TeamProps) {
  const foundersRaw = foundersData[countryCode] || [];
  
  const founders = foundersRaw.map((founder) => ({
    name: founder.name,
    role: founder.position,
    bio: founder.description,
    image: imageMap[founder.image] || founder.image,
    linkedin: founder.linkedin,
    email: founder.email
  }));

  return (
    <section id="team" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6">Meet Our Founders</h2>
          <p className="text-xl text-gray-600">
            A team of experienced AI practitioners dedicated to transforming businesses through intelligent automation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {founders.map((founder, index) => (
            <Card key={index} className="text-center hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
                  <ImageWithFallback 
                    src={founder.image} 
                    alt={founder.name}
                    className="w-full h-full object-cover scale-150"
                    style={{ objectPosition: 'center 30%' }}
                  />
                </div>
                <CardTitle>{founder.name}</CardTitle>
                <CardDescription className="text-blue-600">{founder.role}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">{founder.bio}</p>
                <div className="flex justify-center gap-4">
                  <a 
                    href={`mailto:${founder.email}`}
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                    aria-label="Email"
                  >
                    <Mail className="w-5 h-5 text-gray-600" />
                  </a>
                  <a 
                    href={founder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5 text-gray-600" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
