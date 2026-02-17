import Link from "next/link";

type SidebarItem = {
  slug: string;
  title: string;
  summary: string;
};

type SectionSidebarProps = {
  sectionTitle: string;
  sectionDescription: string;
  basePath: string;
  currentSlug: string;
  items: SidebarItem[];
};

export function SectionSidebar({
  sectionTitle,
  sectionDescription,
  basePath,
  currentSlug,
  items
}: SectionSidebarProps) {
  const normalizedBasePath = basePath.endsWith("/") ? basePath.slice(0, -1) : basePath;

  return (
    <aside className="section-sidebar">
      <h2 className="sidebar-title">{sectionTitle}</h2>
      <p className="sidebar-description">{sectionDescription}</p>

      <nav aria-label={`${sectionTitle} navigation`}>
        <ul className="sidebar-list">
          {items.map((item) => {
            const isActive = item.slug === currentSlug;

            return (
              <li key={item.slug}>
                <Link
                  href={`${normalizedBasePath}/${item.slug}`}
                  className={`sidebar-link${isActive ? " is-active" : ""}`}
                  aria-current={isActive ? "page" : undefined}
                >
                  <span className="sidebar-link-title">{item.title}</span>
                  <span className="sidebar-link-summary">{item.summary}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
