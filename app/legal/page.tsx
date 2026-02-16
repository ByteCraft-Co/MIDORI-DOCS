export default function LegalPage() {
  return (
    <>
      <section className="box">
        <h1 className="legal-copyright">
          Copyright (c) 2026 ByteCraft-Co and MIDORI Contributors
        </h1>
        <p className="lead">
          This legal page is intentionally written directly on the website so users can read core
          rights and responsibilities without opening repository files.
        </p>
      </section>

      <section className="box">
        <h2 className="section-title">License</h2>
        <p>
          MIDORI source code is provided under the MIT License. You are allowed to use, copy,
          modify, merge, publish, distribute, sublicense, and/or sell copies of the software, with
          the standard MIT notice inclusion requirements.
        </p>
        <p className="muted">
          Software is provided &quot;as is&quot;, without warranty of any kind.
        </p>
      </section>

      <section className="box">
        <h2 className="section-title">Terms of Use (Summary)</h2>
        <ul className="list-tight">
          <li>MIDORI is experimental and may change between releases.</li>
          <li>You are responsible for validating behavior in your own environment.</li>
          <li>Use must comply with applicable law and regulations.</li>
          <li>
            Contributors and maintainers are not liable for damages arising from project use, to the
            extent permitted by law.
          </li>
        </ul>
      </section>

      <section className="box">
        <h2 className="section-title">Privacy Posture</h2>
        <ul className="list-tight">
          <li>Core compiler/CLI does not include mandatory built-in telemetry by default.</li>
          <li>Source processing is local unless you explicitly upload logs/artifacts.</li>
          <li>Third-party services (GitHub, CI, hosting) apply their own privacy policies.</li>
        </ul>
      </section>

      <section className="box">
        <h2 className="section-title">Trademark and Brand Use</h2>
        <ul className="list-tight">
          <li>
            &quot;MIDORI&quot; and official MIDORI logos identify the official language project and official
            distributions.
          </li>
          <li>
            You may describe compatibility and usage, such as &quot;built with MIDORI&quot;, without implying
            official endorsement.
          </li>
          <li>
            Do not brand forks, products, packages, or services as official MIDORI unless explicitly
            authorized.
          </li>
        </ul>
      </section>

      <section className="box">
        <h2 className="section-title">Legal Contact</h2>
        <p>
          For legal, trademark, or branding requests, open an issue in the MIDORI GitHub
          organization repository and label it for maintainers.
        </p>
      </section>
    </>
  );
}
