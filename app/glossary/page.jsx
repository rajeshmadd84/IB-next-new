import Header2 from "@/components/headers/Header2";
import Footer2 from "@/components/footers/Footer2";
import GlossaryList from "@/components/glossary/GlossaryList";
import ScrollTop from "@/components/common/ScrollTop";
import { glossaryTerms } from "@/data/glossary";

export const metadata = {
  title: "Glossary | IntelliByld",
  description: "Learn the terminology behind autonomous construction supply chains, Agentic AI, and Digital Twins.",
};

export default function GlossaryPage() {
  const glossarySchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    "@id": "https://intellibyld.com/glossary",
    name: "IntelliByld Construction Technology Glossary",
    description: "A glossary of terms related to construction supply chains, Agentic AI, and Digital Twins.",
    hasDefinedTerm: glossaryTerms.map((item) => ({
      "@type": "DefinedTerm",
      name: item.term,
      description: item.definition,
      inDefinedTermSet: "https://intellibyld.com/glossary",
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(glossarySchema) }}
      />
      <div className="page-green">
        <div id="wrapper">
          <div id="page" className="home">
            <Header2 />
            <GlossaryList />
            <Footer2 />
          </div>
        </div>
        <ScrollTop />
      </div>
    </>
  );
}
