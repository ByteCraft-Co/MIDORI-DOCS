import { notFound } from "next/navigation";
import { PagePager } from "@/components/PagePager";
import { SectionSidebar } from "@/components/SectionSidebar";
import { getPagerLinks, getPageBySlug, referenceDocs } from "@/lib/docs";

type ReferencePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return referenceDocs.map((doc) => ({ slug: doc.slug }));
}

export default async function ReferenceDocPage({ params }: ReferencePageProps) {
  const { slug } = await params;
  const doc = getPageBySlug(referenceDocs, slug);

  if (!doc) {
    notFound();
  }

  const pagerLinks = getPagerLinks(referenceDocs, slug, "/docs/reference");

  return (
    <div className="section-layout">
      <SectionSidebar
        sectionTitle="Reference"
        sectionDescription="Formal language and toolchain specifications."
        basePath="/docs/reference"
        currentSlug={slug}
        items={referenceDocs}
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

            {section.bullets ? (
              <ul className="list-tight">
                {section.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}

            {section.code ? (
              <>
                {section.codeLabel ? <p className="code-label">{section.codeLabel}</p> : null}
                <pre className="code">{section.code}</pre>
              </>
            ) : null}
          </section>
        ))}

        <PagePager previous={pagerLinks.previous} next={pagerLinks.next} />
      </div>
    </div>
  );
}
