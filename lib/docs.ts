export type ContentSection = {
  heading: string;
  body: string[];
  bullets?: string[];
  code?: string;
  codeLabel?: string;
};

export type ContentPage = {
  slug: string;
  title: string;
  summary: string;
  sections: ContentSection[];
};

export type PagerLink = {
  href: string;
  title: string;
  summary: string;
};

export const tutorialDocs: ContentPage[] = [
  {
    slug: "install-and-verify",
    title: "Install and Verify",
    summary: "Prepare your environment and confirm the MIDORI CLI is operational.",
    sections: [
      {
        heading: "Required Tooling",
        body: [
          "MIDORI runs through a Python + LLVM-backed toolchain.",
          "Executable builds require a native linker available on PATH."
        ],
        bullets: [
          "Python 3.11 or newer",
          "llvmlite-compatible LLVM runtime",
          "gcc or clang linker"
        ]
      },
      {
        heading: "Verification Commands",
        body: ["Run the following commands in a clean shell after installation."],
        codeLabel: "Example terminal session",
        code: "midori --version\nmidori check examples/hello.mdr\nmidori run examples/hello.mdr\nmidori test"
      },
      {
        heading: "Expected Outcome",
        body: [
          "The check command should report diagnostics without linker activity.",
          "The run command should compile and execute a basic sample program.",
          "The test command should run repository test suites through the CLI harness."
        ]
      }
    ]
  },
  {
    slug: "first-program",
    title: "First Program",
    summary: "Create a minimal program and compile it to a native executable.",
    sections: [
      {
        heading: "Source Example",
        body: ["Create a new file named `main.mdr` with the following content."],
        codeLabel: "main.mdr",
        code: "fn main() -> Int {\n  print(\"hello from midori\")\n  0\n}"
      },
      {
        heading: "Build and Run",
        body: ["Use the CLI to run directly, then produce named output artifacts."],
        codeLabel: "Build commands",
        code: "midori run main.mdr\nmidori build main.mdr -o hello.exe\nmidori build main.mdr -o hello.exe --emit-llvm --emit-asm"
      },
      {
        heading: "Common Errors",
        body: ["Most first-run failures are environment related rather than language syntax issues."],
        bullets: [
          "Missing linker executable in PATH",
          "Outdated Python runtime below the required version",
          "LLVM runtime mismatch with installed llvmlite"
        ]
      }
    ]
  },
  {
    slug: "control-flow-and-patterns",
    title: "Control Flow and Patterns",
    summary: "Use expression-oriented control flow with readable branching logic.",
    sections: [
      {
        heading: "If Expressions",
        body: ["MIDORI allows `if` as an expression when both branches return compatible types."],
        codeLabel: "Grade computation",
        code: "let grade = if score > 90 { \"A\" } else { \"B\" }"
      },
      {
        heading: "Match Expressions",
        body: ["Use match to handle enum variants and literal patterns explicitly."],
        codeLabel: "Token dispatch",
        code: "match token {\n  Int(v) => print(v),\n  Ident(name) => print(name),\n  Plus => print(\"+\")\n}"
      },
      {
        heading: "Looping Guidance",
        body: [
          "Use `for` when iterating known sequences and `while` for condition-driven loops.",
          "Prefer explicit `break` and `continue` conditions to keep behavior predictable."
        ]
      }
    ]
  },
  {
    slug: "borrow-rules-and-moves",
    title: "Borrow Rules and Moves",
    summary: "Understand move semantics and borrow-check constraints before codegen.",
    sections: [
      {
        heading: "Move-Safe Example",
        body: ["This mirrors a valid pattern from the repository borrow examples."],
        codeLabel: "Move-safe flow",
        code: "fn ok_move() -> Int {\n  let x: Int = 1\n  let y := x\n  y\n}\n\nfn main() -> Int {\n  print(ok_move())\n  0\n}"
      },
      {
        heading: "Failure Patterns to Avoid",
        body: [
          "Use-after-move and moved-value borrowing are rejected before final artifact emission."
        ],
        bullets: [
          "Reading a value after ownership has moved to another binding",
          "Borrowing a value mutably after it moved on a branch",
          "Creating conflicting mutable/immutable borrow flows"
        ]
      },
      {
        heading: "Debugging Strategy",
        body: [
          "Run check first to isolate diagnostics quickly, then run/build after borrow issues are resolved."
        ],
        codeLabel: "Recommended sequence",
        code: "midori check examples/borrow_rules.mdr\nmidori run examples/borrow_rules.mdr"
      }
    ]
  },
  {
    slug: "result-and-custom-errors",
    title: "Result and Custom Errors",
    summary: "Model recoverable failures with Result flows and MIDORI error declarations.",
    sections: [
      {
        heading: "Declaring Error Kinds",
        body: ["Declare named errors before using them in raise statements."],
        codeLabel: "Error declarations",
        code: "error ValidationError\nerror TooBig"
      },
      {
        heading: "Result-Based Validation",
        body: ["This example returns `Result` and raises a typed error for invalid values."],
        codeLabel: "Validation example",
        code: "fn validate(n: Int) -> Result[Int, String] {\n  if n > 100 {\n    raise TooBig(\"value must be 100 or less\")\n  }\n  Ok(n)\n}"
      },
      {
        heading: "Propagation",
        body: ["Use ? to forward failures without repeating boilerplate error checks."],
        codeLabel: "Propagation pattern",
        code: "fn load_config(path: String) -> Result[String, String] {\n  let contents := read_file(path)?\n  Ok(contents)\n}"
      }
    ]
  },
  {
    slug: "modules-and-project-mode",
    title: "Modules and Project Mode",
    summary: "Organize larger programs across files and configure project entry points.",
    sections: [
      {
        heading: "File Imports",
        body: ["Imports are resolved relative to the current file path."],
        codeLabel: "Import statement",
        code: "import \"./math.mdr\""
      },
      {
        heading: "Project Manifest",
        body: ["Use `midori.toml` to define package metadata and the build entry file."],
        codeLabel: "midori.toml",
        code: "[package]\nname = \"demo\"\nversion = \"0.1.0\"\n\n[build]\nentry = \"src/main.mdr\""
      },
      {
        heading: "Deterministic State",
        body: ["Generate lock metadata to keep source state reproducible between runs."],
        codeLabel: "Lockfile command",
        code: "midori lock"
      }
    ]
  },
  {
    slug: "testing-and-quality-gates",
    title: "Testing and Quality Gates",
    summary: "Use the same lint/test flow as project CI before sharing language changes.",
    sections: [
      {
        heading: "Compiler and Python Checks",
        body: ["Run lint and tests from repository root before cutting changes."],
        codeLabel: "Core validation",
        code: "python -m ruff format .\npython -m ruff check .\npytest -q\nmidori test"
      },
      {
        heading: "PowerShell 5.1 Note",
        body: [
          "In Windows PowerShell 5.1, run each command on its own line because && is not a valid statement separator."
        ]
      },
      {
        heading: "Project Validation",
        body: [
          "When a midori.toml file exists, validate project mode behavior without explicit source arguments."
        ],
        codeLabel: "Project-mode validation",
        code: "midori check\nmidori run\nmidori lock"
      }
    ]
  },
  {
    slug: "vscode-intellisense-v022",
    title: "VS Code IntelliSense (v0.2.2)",
    summary: "Package and test the advanced suggestion-only IntelliSense stack locally.",
    sections: [
      {
        heading: "Build Local Extension",
        body: ["Package the extension from the vscode-extension folder."],
        codeLabel: "Local VSIX build",
        code: "cd vscode-extension\nnpm install\nnpm run lint\nnpx @vscode/vsce package -o dist/midori-language-local.vsix"
      },
      {
        heading: "Install and Smoke Test",
        body: [
          "Install the VSIX in VS Code and open a .mdr file to validate completions and diagnostics."
        ],
        bullets: [
          "Type retrun and confirm return appears as a suggestion",
          "Type im and confirm import / impl suggestions",
          "Hover on return, await, or unsafe for keyword definitions"
        ]
      },
      {
        heading: "Safety Model",
        body: [
          "Autocorrect is suggestion-only in v0.2.2. Source text changes only when you explicitly accept a completion item."
        ]
      }
    ]
  }
];

export const referenceDocs: ContentPage[] = [
  {
    slug: "language-syntax",
    title: "Language Syntax",
    summary: "Keywords, declarations, and expression patterns used in current releases.",
    sections: [
      {
        heading: "Core Keywords",
        body: [
          "The canonical lexer keyword set is used by both the compiler and IntelliSense dictionary."
        ],
        bullets: [
          "Declarations: fn, let, var, struct, enum, trait, impl, pub, use, module, import, extern",
          "Control flow: if, else, match, for, in, while, loop, break, continue, return",
          "Concurrency and safety tokens: task, spawn, await, unsafe",
          "Error and literals: error, raise, true, false"
        ]
      },
      {
        heading: "Declarations",
        body: ["Use explicit types when clarity matters; inference is available in scoped contexts."],
        codeLabel: "Declaration examples",
        code: "let score: Int = 90\nvar total := 0\n\nstruct Point { x: Int y: Int }\n\nenum Result[T, E] { Ok(T) Err(E) }"
      }
    ]
  },
  {
    slug: "cli-reference",
    title: "CLI Reference",
    summary: "Command set for checking, running, building, formatting, and locking.",
    sections: [
      {
        heading: "Primary Commands",
        body: ["The following commands represent the standard local workflow."],
        codeLabel: "Command summary",
        code: "midori check [source]\nmidori run [source]\nmidori build [source] -o app.exe\nmidori build [source] -o app.exe --emit-llvm --emit-asm\nmidori fmt FILE\nmidori lock [source]\nmidori test\nmidori new NAME\nmidori repl"
      },
      {
        heading: "Project Mode",
        body: [
          "When midori.toml exists, source path arguments become optional for check/run/build/lock.",
          "Entry resolution follows `[build].entry` in the manifest."
        ]
      }
    ]
  },
  {
    slug: "compiler-pipeline",
    title: "Compiler Pipeline",
    summary: "Stages from source tokenization through LLVM emission and linking.",
    sections: [
      {
        heading: "Pipeline Order",
        body: [
          "MIDORI follows a deterministic sequence to preserve diagnostics and build behavior."
        ],
        bullets: [
          "Lexer -> Parser -> Name Resolution",
          "Type Checker -> MIR Lowering -> Borrow Check v2",
          "LLVM IR Generation -> Assembly -> Native Link"
        ]
      },
      {
        heading: "Operational Notes",
        body: [
          "Each phase tracks source spans for stable diagnostics output.",
          "Import cycle detection and match exhaustiveness checks run before backend artifact creation."
        ]
      }
    ]
  },
  {
    slug: "diagnostics-contract",
    title: "Diagnostics Contract",
    summary: "Error format and behavior guarantees expected by tools and editors.",
    sections: [
      {
        heading: "Output Format",
        body: ["Compiler diagnostics use machine-friendly location and MIDORI code prefixes."],
        codeLabel: "Diagnostic format",
        code: "file:line:col: error[MDxxxx]: message\nfile:line:col: warning[MDxxxx]: message"
      },
      {
        heading: "Behavior Rules",
        body: ["Diagnostics are designed for deterministic automation and human readability."],
        bullets: [
          "Phase-specific codes remain stable per release",
          "Errors include source location and concise guidance",
          "Non-exhaustive matches are treated as compile errors",
          "VS Code diagnostics in the extension are parsed from this stable shape"
        ]
      }
    ]
  },
  {
    slug: "borrow-safety-rules",
    title: "Borrow and Move Safety",
    summary: "Borrow checker v2 enforces ownership and branch-aware move constraints.",
    sections: [
      {
        heading: "What Is Checked",
        body: ["Borrow validation happens after MIR lowering and before native code emission."],
        bullets: [
          "Use-after-move detection",
          "Conflicting borrow mode detection",
          "Branch merge validation for moved values"
        ]
      },
      {
        heading: "Practical Guidance",
        body: [
          "Prefer short-lived bindings and clear move boundaries.",
          "Use check mode frequently while iterating on ownership-sensitive code."
        ],
        codeLabel: "Fast feedback loop",
        code: "midori check examples/borrow_rules.mdr"
      }
    ]
  },
  {
    slug: "vscode-intellisense-reference",
    title: "VS Code IntelliSense Reference",
    summary: "v0.2.2 adds deeper suggestion, symbol, and definition behavior for MIDORI files.",
    sections: [
      {
        heading: "Core IntelliSense Features",
        body: ["The extension language server supports non-destructive editor assistance."],
        bullets: [
          "Canonical keyword completion synchronized with compiler lexer keywords",
          "Suggestion-only fuzzy typo assistance for keywords",
          "Expanded symbols/definitions for structs, fields, traits, and methods",
          "Hover, references, rename, document symbols, and workspace symbols"
        ]
      },
      {
        heading: "Key Settings",
        body: ["Use these settings to tune diagnostics and IntelliSense behavior."],
        codeLabel: "settings.json example",
        code: "{\n  \"midori.diagnostics.runOnType\": true,\n  \"midori.diagnostics.debounceMs\": 250,\n  \"midori.intellisense.fuzzyKeywordSuggestions\": true,\n  \"midori.intellisense.fuzzyMaxEditDistance\": 2,\n  \"midori.intellisense.allowExternalImports\": false\n}"
      },
      {
        heading: "Safety Constraint",
        body: [
          "No auto-rewrite is performed. Typos are surfaced as completion candidates and applied only on explicit user selection."
        ]
      }
    ]
  },
  {
    slug: "standard-library-status",
    title: "Standard Library Status",
    summary: "Current runtime capabilities and areas not yet finalized.",
    sections: [
      {
        heading: "Available Today",
        body: ["Current builds include a narrow but reliable runtime surface."],
        bullets: [
          "print for scalar and string output",
          "Option[T] and Result[T, E] value flows",
          "read_file(path: String) runtime hook"
        ]
      },
      {
        heading: "Planned Expansion",
        body: [
          "Networking, package registry tooling, and deeper async semantics are planned.",
          "These areas are still experimental and should not be treated as stable contracts."
        ]
      }
    ]
  },
  {
    slug: "release-channels-and-installers",
    title: "Release Channels and Installers",
    summary: "Installer channels map directly to release tags and remain experimental until v1.",
    sections: [
      {
        heading: "Channel Policy",
        body: [
          "MIDORI versions below v1 are experimental channels. Validate behavior in your own environment before adoption."
        ]
      },
      {
        heading: "Installer Artifacts",
        body: ["Current Windows installers listed on /downloads are:"],
        bullets: [
          "midori-setup-v0.1.0.exe",
          "midori-setup-v0.2.0.exe",
          "midori-setup-v0.2.1.exe",
          "midori-setup-v0.2.2.exe"
        ]
      },
      {
        heading: "Release Mapping",
        body: [
          "v0.2.2 is the latest and includes the advanced IntelliSense stack.",
          "v0.2.1 is a stability-focused cleanup release for release operations and installer determinism."
        ]
      }
    ]
  }
];

export function getPageBySlug<T extends { slug: string }>(
  pages: T[],
  slug: string
): T | undefined {
  return pages.find((page) => page.slug === slug);
}

export function getPagerLinks<T extends { slug: string; title: string; summary: string }>(
  pages: T[],
  slug: string,
  basePath: string
): { previous?: PagerLink; next?: PagerLink } {
  const index = pages.findIndex((page) => page.slug === slug);

  if (index === -1) {
    return {};
  }

  const normalizedBasePath = basePath.endsWith("/") ? basePath.slice(0, -1) : basePath;
  const previousPage = index > 0 ? pages[index - 1] : undefined;
  const nextPage = index < pages.length - 1 ? pages[index + 1] : undefined;

  return {
    previous: previousPage
      ? {
          href: `${normalizedBasePath}/${previousPage.slug}`,
          title: previousPage.title,
          summary: previousPage.summary
        }
      : undefined,
    next: nextPage
      ? {
          href: `${normalizedBasePath}/${nextPage.slug}`,
          title: nextPage.title,
          summary: nextPage.summary
        }
      : undefined
  };
}

