import { redirect } from "next/navigation";
import { tutorialDocs } from "@/lib/docs";

export default function TutorialsIndexPage() {
  const firstTutorial = tutorialDocs[0];

  if (!firstTutorial) {
    redirect("/docs");
  }

  redirect(`/docs/tutorials/${firstTutorial.slug}`);
}
