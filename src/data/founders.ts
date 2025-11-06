export interface FounderData {
  image: string;
  name: string;
  position: string;
  description: string;
  email: string;
  linkedin: string;
}

export interface FoundersData {
  CH: FounderData[];
  US: FounderData[];
  IL: FounderData[];
}

export const foundersData: FoundersData = {
  CH: [
    {
      image: "figma:asset/91f0865d322b601ece4b8e907c5b04462763af93.png",
      name: "Oleksii Vinogradov",
      position: "Co-Founder & CEO",
      description: "AI Leader with proven ability to deliver advanced AI systems from concept to production. Built UnitAI from scratch in 3 months—a full AI agent suite for Unity developers. Deep Learning Specialization certified with expertise in LLMs, RAG, agentic memory, and full-stack AI product development.",
      email: "alex@unitai.net",
      linkedin: "https://www.linkedin.com/in/oleksiivinogradov"
    },
    {
      image: "figma:asset/6cbdec076f590118f004f7997bb7d945d6fceb69.png",
      name: "Valeriia Zaraniants",
      position: "Co-Founder & Chief Business Officer",
      description: "Seasoned business leader with 15+ years of executive experience. CEO of IXC Global Inc. since 2012, driving international business development and strategic partnerships. Expert in scaling operations, sales management, and building high-performance teams across global markets.",
      email: "valeriia.zaraniants@gmx.ch",
      linkedin: "https://www.linkedin.com/in/valeriiazaraniants/"
    }
  ],
  US: [
    {
      image: "figma:asset/91f0865d322b601ece4b8e907c5b04462763af93.png",
      name: "Oleksii Vinogradov",
      position: "Co-Founder & CEO",
      description: "AI Leader with proven ability to deliver advanced AI systems from concept to production. Built UnitAI from scratch in 3 months—a full AI agent suite for Unity developers. Deep Learning Specialization certified with expertise in LLMs, RAG, agentic memory, and full-stack AI product development.",
      email: "alex@unitai.net",
      linkedin: "https://www.linkedin.com/in/oleksiivinogradov"
    },
    {
      image: "figma:asset/5dd864a86266c5641e5cefc46aab9022ead7c043.png",
      name: "Eugene Luzgin",
      position: "Chief Technology Officer",
      description: "Chief technology officer with track record in software industry roles ranging from contributor to a startup founder.",
      email: "eluzgin@gmail.com",
      linkedin: "https://www.linkedin.com/in/luzgin/"
    }
  ],
  IL: [
    {
      image: "figma:asset/e84071a295e8a8f52cae68f10399653867e24b6c.png",
      name: "Victoria Lindenbaum",
      position: "VP BD",
      description: "More than 20 years in telecom, project and business developement management experience.",
      email: "victoria@integralyst.ai",
      linkedin: "https://www.linkedin.com/in/victoria-lindenbaum-6bb4981/"
    },
    {
      image: "figma:asset/91f0865d322b601ece4b8e907c5b04462763af93.png",
      name: "Oleksii Vinogradov",
      position: "Co-Founder & CEO",
      description: "AI Leader with proven ability to deliver advanced AI systems from concept to production. Built UnitAI from scratch in 3 months—a full AI agent suite for Unity developers. Deep Learning Specialization certified with expertise in LLMs, RAG, agentic memory, and full-stack AI product development.",
      email: "alex@unitai.net",
      linkedin: "https://www.linkedin.com/in/oleksiivinogradov"
    }
  ]
};