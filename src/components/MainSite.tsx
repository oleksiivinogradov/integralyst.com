import { Header } from "./Header";
import { Hero } from "./Hero";
import { Services } from "./Services";
import { BusinessModel } from "./BusinessModel";
import { CaseStudies } from "./CaseStudies";
import { Team } from "./Team";
import { Contact } from "./Contact";
import { OpenBranch } from "./OpenBranch";
import { Footer } from "./Footer";

interface MainSiteProps {
  countryCode: "CH" | "US" | "IL";
}

export function MainSite({ countryCode }: MainSiteProps) {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <BusinessModel />
        <CaseStudies />
        <Team countryCode={countryCode} />
        <Contact />
        <OpenBranch />
      </main>
      <Footer />
    </div>
  );
}