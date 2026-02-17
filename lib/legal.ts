import type { ContentPage } from "./docs";

export const legalDocs: ContentPage[] = [
  {
    slug: "license",
    title: "License",
    summary: "MIT license scope, permissions, and warranty limitations.",
    sections: [
      {
        heading: "License Scope",
        body: [
          "MIDORI source code is distributed under the MIT License.",
          "You may use, copy, modify, merge, publish, sublicense, and distribute the software when the notice is preserved."
        ]
      },
      {
        heading: "Warranty Disclaimer",
        body: [
          "The software is provided on an `as is` basis without warranties of merchantability or fitness for a particular purpose.",
          "Use in production environments requires your own validation and risk review."
        ]
      }
    ]
  },
  {
    slug: "terms-of-use",
    title: "Terms of Use",
    summary: "Operational responsibilities and usage conditions for project consumers.",
    sections: [
      {
        heading: "Usage Conditions",
        body: [
          "MIDORI is experimental and behavior may change between releases.",
          "Users are responsible for validating compatibility and legal compliance in their own environments."
        ]
      },
      {
        heading: "Liability Boundaries",
        body: [
          "Contributors and maintainers are not liable for damages arising from project use, subject to applicable law.",
          "Any third-party service integrations are governed by those services' own terms."
        ]
      }
    ]
  },
  {
    slug: "privacy",
    title: "Privacy",
    summary: "Default privacy posture and handling expectations for telemetry and artifacts.",
    sections: [
      {
        heading: "Default Posture",
        body: [
          "The core compiler and CLI do not require built-in telemetry by default.",
          "Source processing is local unless you intentionally upload logs or build artifacts."
        ]
      },
      {
        heading: "Third-Party Services",
        body: [
          "When using hosting, CI, repository, or observability providers, their privacy policies apply.",
          "Do not commit secrets to repository history or static documentation pages."
        ]
      }
    ]
  },
  {
    slug: "trademark-policy",
    title: "Trademark Policy",
    summary: "Rules for using MIDORI names and branding in derivative work.",
    sections: [
      {
        heading: "Permitted References",
        body: [
          "You may describe factual compatibility statements such as `built with MIDORI`.",
          "Such references must not imply official endorsement or affiliation without authorization."
        ]
      },
      {
        heading: "Restricted Branding",
        body: [
          "Do not represent forks, services, or packages as official MIDORI products without explicit approval.",
          "Official logos and marks identify official project distributions."
        ]
      }
    ]
  }
];

export function getLegalDoc(slug: string): ContentPage | undefined {
  return legalDocs.find((page) => page.slug === slug);
}
