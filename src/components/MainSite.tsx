import { Helmet } from 'react-helmet-async';
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

const countryMetadata = {
  US: {
    name: 'United States',
    title: 'Integralyst US - AI Integration & Consulting Services',
    description: 'Integralyst US - Expert AI integration and consulting services in the United States. Transform your business with our AI solutions.',
    url: 'https://integralyst.com/us'
  },
  IL: {
    name: 'Israel',
    title: 'Integralyst Israel - AI Integration & Consulting Services',
    description: 'Integralyst Israel - Expert AI integration and consulting services in Israel. Transform your business with our AI solutions.',
    url: 'https://integralyst.com/il'
  },
  CH: {
    name: 'Switzerland',
    title: 'Integralyst Switzerland - AI Integration & Consulting Services',
    description: 'Integralyst Switzerland - Expert AI integration and consulting services in Switzerland. Transform your business with our AI solutions.',
    url: 'https://integralyst.com/ch'
  }
};

export function MainSite({ countryCode }: MainSiteProps) {
  const metadata = countryMetadata[countryCode];
  
  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="canonical" href={metadata.url} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:url" content={metadata.url} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
      </Helmet>
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
    </>
  );
}