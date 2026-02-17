import Link from "next/link";
import type { PagerLink } from "@/lib/docs";

type PagePagerProps = {
  previous?: PagerLink;
  next?: PagerLink;
};

function PagerCard({ direction, link }: { direction: "Back" | "Next"; link: PagerLink }) {
  return (
    <Link href={link.href} className="pager-link">
      <span className="pager-direction">{direction}</span>
      <span className="pager-title">{link.title}</span>
      <span className="pager-summary">{link.summary}</span>
    </Link>
  );
}

export function PagePager({ previous, next }: PagePagerProps) {
  return (
    <nav className="page-pager" aria-label="Page navigation">
      {previous ? <PagerCard direction="Back" link={previous} /> : <div className="pager-placeholder" />}
      {next ? <PagerCard direction="Next" link={next} /> : <div className="pager-placeholder" />}
    </nav>
  );
}
