export default function DocsPage() {
  return (
    <>
      <section className="box">
        <h1 className="hero-title">MIDORI Documentation</h1>
        <p className="lead">
          This is the full technical reference for MIDORI in its current experimental state. The
          focus is correctness, readability, and compiler architecture clarity.
        </p>
      </section>

      <section className="box">
        <h2 className="section-title">1) Language Direction</h2>
        <p>
          MIDORI is a safe-by-default, LLVM-backed programming language aimed at backend and
          systems-style development.
        </p>
        <ul className="list-tight">
          <li>Readable syntax and explicit control flow</li>
          <li>Result and Option centered error/data handling</li>
          <li>Ownership and borrowing-lite safety model</li>
          <li>Deterministic compiler tooling and diagnostics</li>
        </ul>
        <p className="muted">
          Current maturity: experimental and education-focused. Strong for learning compiler
          internals. Not yet a finalized production language.
        </p>
      </section>

      <section className="box">
        <h2 className="section-title">2) Toolchain and Setup</h2>
        <ul className="list-tight">
          <li>Python 3.11+ installed</li>
          <li>llvmlite-compatible LLVM runtime</li>
          <li>gcc or compatible linker on PATH</li>
        </ul>
        <pre className="code">{`python -m pip install -e .[dev]
midori --version
midori check examples/hello.mdr
midori run examples/hello.mdr`}</pre>
      </section>

      <section className="box">
        <h2 className="section-title">3) Minimal Program</h2>
        <pre className="code">{`fn main() -> Int {
  print("hello from midori")
  0
}`}</pre>
      </section>

      <section className="box">
        <h2 className="section-title">4) Core Syntax</h2>

        <h3 className="sub-title">4.1 Keywords</h3>
        <p>
          fn, let, var, struct, enum, trait, impl, pub, use, module, import, if, else, match,
          for, in, while, loop, break, continue, return, task, spawn, await, unsafe, extern,
          error, raise.
        </p>

        <h3 className="sub-title">4.2 Values and Operators</h3>
        <p>
          Integers, floats, booleans, strings, and chars are available. Operators include
          arithmetic, logical, comparison, and assignment families.
        </p>

        <h3 className="sub-title">4.3 Declarations</h3>
        <pre className="code">{`let score: Int = 90
var total := 0

struct Point { x: Int y: Int }

enum Token {
  Int(value: Int)
  Ident(name: String)
  Plus
}`}</pre>
      </section>

      <section className="box">
        <h2 className="section-title">5) Control Flow</h2>

        <h3 className="sub-title">5.1 If As Expression</h3>
        <pre className="code">{`let grade = if score > 90 { "A" } else { "B" }`}</pre>

        <h3 className="sub-title">5.2 Match</h3>
        <pre className="code">{`match token {
  Int(v) => print(v),
  Ident(name) => print(name),
  Plus => print("+")
}`}</pre>
        <p className="muted">
          Implemented patterns include integer literals, boolean literals, and enum variants.
          Non-exhaustive matches are compile errors.
        </p>

        <h3 className="sub-title">5.3 Result Propagation</h3>
        <pre className="code">{`fn load_value(path: String) -> Result[String, String] {
  let data := read_file(path)?
  Ok(data)
}`}</pre>
      </section>

      <section className="box">
        <h2 className="section-title">6) Custom Errors (MIDORI Style)</h2>
        <p>
          MIDORI supports declared error kinds and intentional raises in Result flows.
        </p>
        <pre className="code">{`error ValidationError
error TooBig

fn validate(n: Int) -> Result[Int, String] {
  if n > 100 {
    raise TooBig("value must be 100 or less")
  }
  Ok(n)
}`}</pre>
        <p>
          Raised errors are formatted in MIDORI-native multi-line style with location and caret
          pointer.
        </p>
      </section>

      <section className="box">
        <h2 className="section-title">7) Ownership and Borrowing-lite</h2>
        <ul className="list-tight">
          <li>Copy types: Int, Bool, Float, Char</li>
          <li>Move semantics for non-copy values</li>
          <li>&amp;T immutable borrows can be many</li>
          <li>&amp;mut T mutable borrow must be unique in scope</li>
          <li>Borrow checker catches use-after-move and aliasing conflicts</li>
        </ul>
      </section>

      <section className="box">
        <h2 className="section-title">8) Module and Project System</h2>

        <h3 className="sub-title">8.1 File Imports</h3>
        <pre className="code">{`import "./math.mdr"`}</pre>
        <p>Imports are resolved relative to the importing file. Import cycles are detected.</p>

        <h3 className="sub-title">8.2 Project Manifest</h3>
        <pre className="code">{`[package]
name = "demo"
version = "0.1.0"

[build]
entry = "src/main.mdr"`}</pre>

        <h3 className="sub-title">8.3 Lockfile</h3>
        <p>
          <code>midori lock</code> writes deterministic <code>midori.lock</code> with source file
          hashes for reproducible project state.
        </p>
      </section>

      <section className="box">
        <h2 className="section-title">9) Compiler Pipeline</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Stage</th>
              <th>Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Lexer</td>
              <td>Tokenize source with file/line/column span data.</td>
            </tr>
            <tr>
              <td>Parser</td>
              <td>Build AST for declarations, statements, and expressions.</td>
            </tr>
            <tr>
              <td>Resolver</td>
              <td>Resolve scopes, symbols, declarations, and duplicates.</td>
            </tr>
            <tr>
              <td>Type Checker</td>
              <td>Infer local types, verify operations, Result/Option flows, match checks.</td>
            </tr>
            <tr>
              <td>MIR Lowering</td>
              <td>Lower typed AST to explicit control-flow blocks and instructions.</td>
            </tr>
            <tr>
              <td>Borrow Check</td>
              <td>Enforce lexical borrowing and move rules.</td>
            </tr>
            <tr>
              <td>LLVM Codegen</td>
              <td>Emit verified LLVM IR, assembly, and linked native executable.</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="box">
        <h2 className="section-title">10) CLI Reference</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Command</th>
              <th>Function</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>midori check [source]</td>
              <td>Run front-end checks (no link step).</td>
            </tr>
            <tr>
              <td>midori run [source]</td>
              <td>Build then execute.</td>
            </tr>
            <tr>
              <td>midori build [source] -o out.exe</td>
              <td>Compile native executable.</td>
            </tr>
            <tr>
              <td>midori build --emit-llvm --emit-asm</td>
              <td>Also write .ll and .s outputs.</td>
            </tr>
            <tr>
              <td>midori lock [source]</td>
              <td>Write deterministic lockfile.</td>
            </tr>
            <tr>
              <td>midori new NAME</td>
              <td>Create starter project files.</td>
            </tr>
            <tr>
              <td>midori fmt FILE</td>
              <td>Apply deterministic formatting.</td>
            </tr>
            <tr>
              <td>midori test</td>
              <td>Run unit and integration tests.</td>
            </tr>
            <tr>
              <td>midori repl</td>
              <td>Minimal interactive evaluator path.</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="box">
        <h2 className="section-title">11) Standard Library / Runtime Status</h2>
        <ul className="list-tight">
          <li>print for primary scalar/string values</li>
          <li>Option[T], Result[T,E] value flows</li>
          <li>read_file(path: String) - available in runtime path</li>
          <li>Enum tagged union lowering in codegen</li>
        </ul>
        <p className="muted">
          Remaining planned areas include broader networking APIs, package registry tooling, deeper
          trait solving, and full async runtime semantics.
        </p>
      </section>

      <section className="box">
        <h2 className="section-title">12) Diagnostics Contract</h2>
        <p>Compiler diagnostics follow:</p>
        <pre className="code">{`file:line:col: error[MDxxxx]: message
file:line:col: warning[MDxxxx]: message`}</pre>
        <ul className="list-tight">
          <li>Phase-specific codes for automation and editor integration</li>
          <li>Location-rich output designed for task runners and LSP consumption</li>
          <li>Actionable short hints where possible</li>
        </ul>
      </section>

      <section className="box">
        <h2 className="section-title">13) Practical Roadmap</h2>
        <ol className="list-tight">
          <li>Strengthen module/package system and dependency resolution</li>
          <li>Expand backend runtime APIs (net/process/file) for service workloads</li>
          <li>Grow LSP beyond diagnostics (hover, symbols, go-to-definition)</li>
          <li>Harden ABI and cross-platform release artifacts</li>
          <li>Stabilize spec toward formal versioned releases</li>
        </ol>
      </section>
    </>
  );
}
