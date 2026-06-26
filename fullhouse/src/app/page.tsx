import Hero from "@/components/sections/hero";
import Services from "@/components/sections/services";
import WhyUs from "@/components/sections/why-us";
import Works from "@/components/sections/works";
import Flow from "@/components/sections/flow";
import Faq from "@/components/sections/faq";
import Company from "@/components/sections/company";
import Contact from "@/components/sections/contact";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "FULLHOUSE",
  description: "解体工事・庭撤去・遺品整理を手がける施工会社",
  telephone: "0000-00-0000",
  address: {
    "@type": "PostalAddress",
    addressCountry: "JP",
    addressRegion: "〇〇県",
    addressLocality: "〇〇市",
    streetAddress: "〇〇町0-0-0",
  },
  openingHours: "Mo-Su 09:00-18:00",
  priceRange: "¥¥",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Services />
      <WhyUs />
      <Works />
      <Flow />
      <Faq />
      <Company />
      <Contact />
    </>
  );
}
