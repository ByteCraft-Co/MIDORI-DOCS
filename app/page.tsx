import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <section className="box">
        <h1 className="hero-title">MIDORI Programming Language</h1>
        <p className="lead">
          Official MIDORI documentation site. This website is intentionally simple, lightweight,
          and text-first for readability.
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
              <Link href="/docs">Read the full MIDORI language and compiler documentation</Link>
            </li>
            <li>
              <Link href="/downloads">Download installer and command setup notes</Link>
            </li>
            <li>
              <Link href="/legal">Read on-site legal, terms, privacy, and trademark policy</Link>
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
        <h2 className="section-title">Official Repositories</h2>
        <p className="muted">
          Compiler and language source: <Link href="/repos">Repository links page</Link>
        </p>
      </section>
    </>
  );
}
