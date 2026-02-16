import Link from "next/link";

export function Header() {
  return (
    <header className="topbar">
      <div className="topbar-inner">
        <Link href="/" className="brand" aria-label="MIDORI home">
          <img src="/assets/midori-logo.png" alt="MIDORI logo" />
          <div>
            <strong>MIDORI</strong>
            <div className="brand-sub">Language Docs</div>
          </div>
        </Link>

        <nav className="nav" aria-label="Main navigation">
          <Link href="/">Home</Link>
          <Link href="/docs">Documentation</Link>
          <Link href="/legal">Legal</Link>
          <Link href="/downloads">Downloads</Link>
          <Link href="/repos">Repos</Link>
        </nav>
      </div>
    </header>
  );
}
