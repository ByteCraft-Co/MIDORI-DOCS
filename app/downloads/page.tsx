export default function DownloadsPage() {
  return (
    <>
      <section className="box">
        <h1 className="hero-title">MIDORI Downloads</h1>
        <p className="lead">
          Official binaries are still evolving. Current installer is experimental and intended for
          learning/testing workflows.
        </p>
      </section>

      <section className="box">
        <h2 className="section-title">Windows Installer</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Artifact</th>
              <th>Version</th>
              <th>Status</th>
              <th>Download</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>MIDORI Setup</td>
              <td>v0.1.0</td>
              <td>Experimental</td>
              <td>
                <a href="/downloads/MIDORI-Setup-v0.1.0.exe">MIDORI-Setup-v0.1.0.exe</a>
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="box">
        <h2 className="section-title">Recommended Post-Install Check</h2>
        <pre className="code">{`midori --version
midori check examples/hello.mdr
midori run examples/hello.mdr`}</pre>
      </section>

      <section className="box">
        <h2 className="section-title">Important Notes</h2>
        <ul className="list-tight">
          <li>This installer is not a final production-grade stable channel yet.</li>
          <li>Always keep project source backed up before testing new language builds.</li>
          <li>For reproducibility, use lockfiles and pinned toolchain versions.</li>
        </ul>
      </section>
    </>
  );
}
