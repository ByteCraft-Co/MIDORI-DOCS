const installers = [
  {
    version: "v0.2.2",
    status: "Experimental",
    focus: "Advanced IntelliSense release (keywords/symbols/fuzzy suggestions)",
    file: "midori-setup-v0.2.2.exe"
  },
  {
    version: "v0.2.1",
    status: "Experimental",
    focus: "Stability and deterministic installer cleanup release",
    file: "midori-setup-v0.2.1.exe"
  },
  {
    version: "v0.2.0",
    status: "Experimental",
    focus: "Installer and project workflow expansion",
    file: "midori-setup-v0.2.0.exe"
  },
  {
    version: "v0.1.0",
    status: "Experimental",
    focus: "Baseline compiler + CLI + installer channel",
    file: "midori-setup-v0.1.0.exe"
  }
];

export default function DownloadsPage() {
  return (
    <>
      <section className="box">
        <h1 className="hero-title">MIDORI Downloads</h1>
        <p className="lead">
          MIDORI is currently in the v0.x channel, so every listed build is experimental and
          intended for testing/evaluation workflows.
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
              <th>Release Focus</th>
              <th>Download</th>
            </tr>
          </thead>
          <tbody>
            {installers.map((installer) => (
              <tr key={installer.version}>
                <td>MIDORI Setup</td>
                <td>{installer.version}</td>
                <td>{installer.status}</td>
                <td>{installer.focus}</td>
                <td>
                  <a href={`/downloads/${installer.file}`}>{installer.file}</a>
                </td>
              </tr>
            ))}
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
          <li>v0.x releases are experimental by policy and should not be treated as stable API contracts.</li>
          <li>Always keep project source backed up before testing new language builds.</li>
          <li>For reproducibility, use lockfiles and pinned toolchain versions when validating builds.</li>
        </ul>
      </section>
    </>
  );
}
