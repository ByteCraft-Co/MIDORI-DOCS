import Link from "next/link";
import { legalDocs } from "@/lib/legal";

export default function LegalPage() {
  return (
    <>
      <section className="box">
        <h1 className="hero-title">Legal and Policy Documents</h1>
        <p className="lead">
          Legal content is intentionally separated from technical documentation. Each policy is
          available on its own dedicated page.
        </p>
      </section>

      <section className="box">
        <h2 className="section-title">Document Index</h2>
        <ul className="list-tight">
          {legalDocs.map((doc) => (
            <li key={doc.slug}>
              <Link href={`/legal/${doc.slug}`}>{doc.title}</Link> - {doc.summary}
            </li>
          ))}
        </ul>
      </section>

      <section className="box">
        <h2 className="section-title">Navigation</h2>
        <p>
          Open any policy above, use the legal sidebar to move between legal documents, and use
          the Back and Next buttons at the bottom for sequential reading.
        </p>
      </section>
    </>
  );
}
