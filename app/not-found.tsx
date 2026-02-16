import Link from "next/link";

export default function NotFoundPage() {
  return (
    <section className="box">
      <h1 className="section-title">404 - Page Not Found</h1>
      <p className="lead">The requested page does not exist in this MIDORI docs build.</p>
      <p>
        Return to <Link href="/">Home</Link> or go directly to <Link href="/docs">Documentation</Link>.
      </p>
    </section>
  );
}
