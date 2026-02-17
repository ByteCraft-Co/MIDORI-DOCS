import Link from "next/link";
import { referenceDocs, tutorialDocs } from "@/lib/docs";
import { legalDocs } from "@/lib/legal";

export default function HomePage() {
  const tutorialsStart = tutorialDocs[0] ? `/docs/tutorials/${tutorialDocs[0].slug}` : "/docs";
  const referenceStart = referenceDocs[0] ? `/docs/reference/${referenceDocs[0].slug}` : "/docs";
  const legalStart = legalDocs[0] ? `/legal/${legalDocs[0].slug}` : "/legal";

  return (
    <>
      <section className="box">
        <h1 className="hero-title">MIDORI Programming Language</h1>
        <p className="lead">
          Official MIDORI documentation portal with separate technical and legal navigation paths.
        </p>
        <div className="notice">
          <strong>Project Status:</strong> Experimental language implementation. Great for
          education, compiler learning, and language engineering workflows. Not yet finalized for
          full production dependency.
        </div>
      </section>

      <section className="grid-2">
        <article className="box">
          <h2 className="section-title">Start Here</h2>
          <ul className="list-tight">
            <li>
              <Link href={tutorialsStart}>Open tutorials with step-by-step code examples</Link>
            </li>
            <li>
              <Link href={referenceStart}>Open technical reference documentation</Link>
            </li>
            <li>
              <Link href={legalStart}>Open legal policies in dedicated standalone pages</Link>
            </li>
            <li>
              <Link href="/downloads">Download installer and command setup notes</Link>
            </li>
          </ul>
        </article>

        <article className="box">
          <h2 className="section-title">Current Scope</h2>
          <ul className="list-tight">
            <li>Lexer, parser, resolver, type checker, MIR, borrow-checker MVP</li>
            <li>LLVM-backed code generation and native executable output</li>
            <li>CLI commands: build, run, check, test, fmt, repl, lock, new</li>
            <li>Custom errors with <code>error</code> and <code>raise</code></li>
            <li>Project mode via <code>midori.toml</code> and deterministic lock files</li>
          </ul>
        </article>
      </section>

      <section className="box">
        <h2 className="section-title">Quick Commands</h2>
        <pre className="code">{`midori --version
midori check examples/hello.mdr
midori run examples/hello.mdr
midori build examples/hello.mdr -o hello.exe --emit-llvm --emit-asm
midori lock examples/hello.mdr`}</pre>
      </section>

      <section className="box">
        <h2 className="section-title">Where to Navigate</h2>
        <ul className="list-tight">
          <li>
            <Link href="/docs">/docs</Link> is the section hub for tutorials and reference.
          </li>
          <li>
            Tutorial pages use a tutorial-only sidebar and Back/Next navigation buttons.
          </li>
          <li>
            Legal policies are isolated under <Link href="/legal">/legal</Link> with a legal-only
            sidebar.
          </li>
        </ul>
      </section>

      <section className="box">
        <h2 className="section-title">Official Repositories</h2>
        <p className="muted">
          Compiler and language source: <Link href="/repos">Repository links page</Link>
        </p>
      </section>
    </>
  );
}
