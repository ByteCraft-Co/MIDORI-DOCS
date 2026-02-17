import { notFound } from "next/navigation";
import { PagePager } from "@/components/PagePager";
import { SectionSidebar } from "@/components/SectionSidebar";
import { getPagerLinks } from "@/lib/docs";
import { getLegalDoc, legalDocs } from "@/lib/legal";

type LegalPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return legalDocs.map((doc) => ({ slug: doc.slug }));
}

export default async function LegalDocPage({ params }: LegalPageProps) {
  const { slug } = await params;
  const doc = getLegalDoc(slug);

  if (!doc) {
    notFound();
  }

  const pagerLinks = getPagerLinks(legalDocs, slug, "/legal");

  return (
    <div className="section-layout">
      <SectionSidebar
        sectionTitle="Legal"
        sectionDescription="Policy, licensing, and governance material."
        basePath="/legal"
        currentSlug={slug}
        items={legalDocs}
      />

      <div className="section-main">
        <section className="box">
          <h1 className="hero-title">{doc.title}</h1>
          <p className="lead">{doc.summary}</p>
        </section>

        {doc.sections.map((section) => (
          <section key={section.heading} className="box content-block">
            <h2 className="section-title">{section.heading}</h2>
            {section.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>
        ))}

        <PagePager previous={pagerLinks.previous} next={pagerLinks.next} />
      </div>
    </div>
  );
}
