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
          "MIDORI currently runs through a Python and LLVM-based toolchain.",
          "Install a native linker before running executable builds."
        ],
        bullets: ["Python 3.11 or newer", "llvmlite-compatible LLVM runtime", "gcc or clang linker"]
      },
      {
        heading: "Verification Commands",
        body: ["Run the following commands in a clean shell after installation."],
        codeLabel: "Example terminal session",
        code: "midori --version\nmidori check examples/hello.mdr\nmidori run examples/hello.mdr"
      },
      {
        heading: "Expected Outcome",
        body: [
          "The check command should report diagnostics without linker activity.",
          "The run command should compile and execute a basic sample program."
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
        body: ["Use the CLI to run directly, then produce a named executable."],
        codeLabel: "Build commands",
        code: "midori run main.mdr\nmidori build main.mdr -o hello.exe"
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
        body: ["Use `match` to handle enum variants and literal patterns explicitly."],
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
    slug: "result-and-custom-errors",
    title: "Result and Custom Errors",
    summary: "Model recoverable failures with Result flows and MIDORI error declarations.",
    sections: [
      {
        heading: "Declaring Error Kinds",
        body: ["Declare named errors before using them in `raise` statements."],
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
        body: ["Use `?` to forward failures without repeating boilerplate error checks."],
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
          "The language currently includes declarations, control-flow, and module keywords used in the compiler MVP."
        ],
        bullets: [
          "fn, let, var, struct, enum, trait, impl",
          "if, else, match, for, while, loop",
          "import, module, return, error, raise"
        ]
      },
      {
        heading: "Declarations",
        body: ["Use explicit types when clarity matters; inference is available in scoped contexts."],
        codeLabel: "Declaration examples",
        code: "let score: Int = 90\nvar total := 0\n\nstruct Point { x: Int y: Int }"
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
        code: "midori check [source]\nmidori run [source]\nmidori build [source] -o app.exe\nmidori build --emit-llvm --emit-asm\nmidori fmt FILE\nmidori lock [source]"
      },
      {
        heading: "Project Mode",
        body: [
          "When `midori.toml` exists, source path arguments become optional.",
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
          "Lexer -> Parser -> Resolver",
          "Type Checker -> MIR Lowering -> Borrow Check",
          "LLVM IR Generation -> Assembly -> Link"
        ]
      },
      {
        heading: "Operational Notes",
        body: [
          "Each phase tracks source spans for stable diagnostics.",
          "Backend emission is validated before native artifact creation."
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
        body: ["Compiler diagnostics use machine-friendly location and code prefixes."],
        codeLabel: "Diagnostic format",
        code: "file:line:col: error[MDxxxx]: message\nfile:line:col: warning[MDxxxx]: message"
      },
      {
        heading: "Behavior Rules",
        body: ["Diagnostics are designed for deterministic automation and human readability."],
        bullets: [
          "Phase-specific codes remain stable per release",
          "Errors include source location and concise guidance",
          "Non-exhaustive matches are treated as compile errors"
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
        bullets: ["print for scalar and string output", "Option[T] and Result[T, E] value flows", "read_file(path: String) runtime hook"]
      },
      {
        heading: "Planned Expansion",
        body: [
          "Networking, package registry tooling, and deeper async semantics are planned.",
          "These areas are still experimental and should not be treated as stable contracts."
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

