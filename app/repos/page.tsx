export default function ReposPage() {
  return (
    <>
      <section className="box">
        <h1 className="hero-title">MIDORI Repositories</h1>
        <p className="lead">
          Primary source repositories for language implementation and documentation website.
        </p>
      </section>

      <section className="box">
        <h2 className="section-title">Official Links</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Repository</th>
              <th>Purpose</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>MIDORI</td>
              <td>Compiler, runtime, CLI, installer, tests, language examples</td>
              <td>
                <a href="https://github.com/ByteCraft-Co/MIDORI" target="_blank" rel="noreferrer">
                  github.com/ByteCraft-Co/MIDORI
                </a>
              </td>
            </tr>
            <tr>
              <td>MIDORI-DOCS</td>
              <td>Website source and documentation frontend</td>
              <td>
                <a
                  href="https://github.com/ByteCraft-Co/MIDORI-DOCS"
                  target="_blank"
                  rel="noreferrer"
                >
                  github.com/ByteCraft-Co/MIDORI-DOCS
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="box">
        <h2 className="section-title">Contribution Direction</h2>
        <ul className="list-tight">
          <li>Core language/compiler work goes to MIDORI repository.</li>
          <li>Website presentation/content work goes to MIDORI-DOCS repository.</li>
          <li>Keep release notes and documentation versioned with compiler releases.</li>
        </ul>
      </section>
    </>
  );
}
