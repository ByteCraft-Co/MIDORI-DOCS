export type DocSection = {
  heading: string;
  body: string[];
  bullets?: string[];
  code?: string;
};

export type DocEntry = {
  slug: string;
  title: string;
  summary: string;
  icon: string;
  sections: DocSection[];
};

export const docs: DocEntry[] = [
  {
    slug: "getting-started",
    title: "Getting Started",
    summary: "Install, validate toolchain, and run your first MIDORI program.",
    icon: "rocket_launch",
    sections: [
      {
        heading: "Requirements",
        body: [
          "MIDORI currently targets a Python + LLVM toolchain workflow.",
          "For native builds, install a C toolchain linker on your target system."
        ],
        bullets: ["Python 3.11+", "llvmlite-compatible LLVM runtime", "gcc/clang linker"]
      },
      {
        heading: "Quick Start",
        body: ["Use the compiler CLI to check, run, and build programs."],
        code: "midori check examples/hello.mdr\nmidori run examples/hello.mdr\nmidori build examples/hello.mdr -o hello.exe"
      }
    ]
  },
  {
    slug: "language-tour",
    title: "Language Tour",
    summary: "Core syntax, error handling, ownership-lite, and control flow.",
    icon: "menu_book",
    sections: [
      {
        heading: "Core Concepts",
        body: [
          "MIDORI is explicit, safe-by-default, and result-driven.",
          "Primary patterns include Result propagation and intentional ownership boundaries."
        ],
        bullets: ["if/match as expressions", "Option/Result constructors", "raise + custom error kinds"]
      },
      {
        heading: "Example",
        body: ["The snippet below demonstrates custom errors and Result flow."],
        code: "error TooBig\n\nfn validate(n: Int) -> Result[Int, String] {\n  if n > 100 {\n    raise TooBig(\"value must be 100 or less\")\n  }\n  Ok(n)\n}"
      }
    ]
  },
  {
    slug: "compiler-architecture",
    title: "Compiler Architecture",
    summary: "Pipeline phases from source to LLVM IR and executable output.",
    icon: "account_tree",
    sections: [
      {
        heading: "Pipeline",
        body: ["Lexing and parsing produce a span-aware AST.", "Resolver/typechecker annotate semantic correctness.", "MIR lowering and borrow checks precede LLVM emission."]
      },
      {
        heading: "Operational Notes",
        body: ["Diagnostics include stage-specific codes and file:line:col locations.", "The backend validates emitted LLVM before linking."]
      }
    ]
  },
  {
    slug: "cli-reference",
    title: "CLI Reference",
    summary: "Commands, flags, lockfile workflow, and project mode.",
    icon: "terminal",
    sections: [
      {
        heading: "Common Commands",
        body: ["Use these commands in CI and local development."],
        code: "midori --version\nmidori check\nmidori run\nmidori build --emit-llvm --emit-asm\nmidori lock"
      },
      {
        heading: "Project Resolution",
        body: ["When midori.toml exists, source arguments become optional.", "Entry resolution uses [build].entry."]
      }
    ]
  },
  {
    slug: "module-system",
    title: "Module and Lock System",
    summary: "Top-level import behavior, cycle detection, and deterministic lock output.",
    icon: "hub",
    sections: [
      {
        heading: "Imports",
        body: ["Use top-level import statements for multi-file projects.", "Relative imports resolve from the importing file location."],
        code: "import \"./math.mdr\""
      },
      {
        heading: "Lockfile",
        body: ["midori.lock captures entry + source checksums for deterministic builds."]
      }
    ]
  },
  {
    slug: "errors-diagnostics",
    title: "Errors and Diagnostics",
    summary: "Compiler diagnostics and runtime raise formatting style.",
    icon: "rule",
    sections: [
      {
        heading: "Compiler Diagnostics",
        body: [
          "All primary errors include filename, line, and column.",
          "Error families include phase-specific codes for automation and editor tooling."
        ]
      },
      {
        heading: "Runtime Raise Style",
        body: ["Raised custom errors render with kind, function, location, source excerpt, and caret arrow."]
      }
    ]
  },
  {
    slug: "standard-library",
    title: "Standard Library Status",
    summary: "Current available primitives and known limits.",
    icon: "inventory_2",
    sections: [
      {
        heading: "Available",
        body: ["Core scalar operations, string output paths, Option/Result declarations, and selected runtime hooks."],
        bullets: ["print", "Option[T]", "Result[T,E]", "read_file(path)"]
      },
      {
        heading: "Limitations",
        body: ["Networking and package registry APIs are planned but not finalized."]
      }
    ]
  },
  {
    slug: "release-policy",
    title: "Release Policy",
    summary: "Versioning, branch model, and release checklist expectations.",
    icon: "event_available",
    sections: [
      {
        heading: "Versioning",
        body: ["Compiler and language specs are versioned together for clarity.", "Breaking behavior changes require explicit notes and migration guidance."]
      },
      {
        heading: "Pre-release Checks",
        body: ["Formatting/lint/tests must be green before release tagging."],
        bullets: ["ruff format --check", "ruff check", "pytest -q", "CLI smoke tests"]
      }
    ]
  },
  {
    slug: "security-and-privacy",
    title: "Security and Privacy",
    summary: "Security posture, telemetry defaults, and Sentry integration points.",
    icon: "security",
    sections: [
      {
        heading: "Default Posture",
        body: ["No built-in telemetry is assumed unless configured.", "Sentry client DSN can be injected at deploy time via env vars."]
      },
      {
        heading: "Environment Variables",
        body: ["Use NEXT_PUBLIC_SENTRY_DSN and related values at deploy-time; do not commit secrets."]
      }
    ]
  },
  {
    slug: "contribution-guide",
    title: "Contribution Guide",
    summary: "How to propose language/runtime/tooling changes safely.",
    icon: "groups",
    sections: [
      {
        heading: "Workflow",
        body: ["Use feature branches, keep changes scoped, and include tests for behavior updates.", "Diagnostics should remain actionable and deterministic."]
      },
      {
        heading: "Quality Gate",
        body: ["Run quality checks before merge or release."],
        code: "python -m ruff format .\npython -m ruff check .\npytest -q"
      }
    ]
  }
];

export function getDoc(slug: string): DocEntry | undefined {
  return docs.find((d) => d.slug === slug);
}

