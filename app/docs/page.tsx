import Link from "next/link";
import { referenceDocs, tutorialDocs } from "@/lib/docs";

export default function DocsPage() {
  const tutorialsStart = tutorialDocs[0]
    ? `/docs/tutorials/${tutorialDocs[0].slug}`
    : "/docs/tutorials";
  const referenceStart = referenceDocs[0]
    ? `/docs/reference/${referenceDocs[0].slug}`
    : "/docs/reference";

  return (
    <>
      <section className="box">
        <h1 className="hero-title">MIDORI Documentation</h1>
        <p className="lead">
          Technical documentation is organized into dedicated sections so tutorials, reference
          material, and legal policy are not mixed together.
        </p>
      </section>

      <section className="grid-2">
        <article className="box">
          <h2 className="section-title">Tutorials</h2>
          <p>Guided walkthroughs with code blocks and practical examples.</p>
          <p className="muted">Topics available: {tutorialDocs.map((doc) => doc.title).join(" | ")}</p>
          <p>
            <Link href={tutorialsStart}>Open Tutorial Section</Link>
          </p>
        </article>

        <article className="box">
          <h2 className="section-title">Reference</h2>
          <p>Language behavior, CLI commands, diagnostics, and implementation notes.</p>
          <p className="muted">Topics available: {referenceDocs.map((doc) => doc.title).join(" | ")}</p>
          <p>
            <Link href={referenceStart}>Open Reference Section</Link>
          </p>
        </article>
      </section>

      <section className="box">
        <h2 className="section-title">Navigation Guide</h2>
        <ol className="list-tight">
          <li>Select a section from this page.</li>
          <li>Use the section-specific sidebar to switch between pages in that section.</li>
          <li>Use the formal Back and Next buttons at the bottom of each page for linear reading.</li>
          <li>
            Legal and policy content is maintained separately under <Link href="/legal">/legal</Link>.
          </li>
        </ol>
      </section>
    </>
  );
}
