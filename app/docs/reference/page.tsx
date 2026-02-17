import { redirect } from "next/navigation";
import { referenceDocs } from "@/lib/docs";

export default function ReferenceIndexPage() {
  const firstReference = referenceDocs[0];

  if (!firstReference) {
    redirect("/docs");
  }

  redirect(`/docs/reference/${firstReference.slug}`);
}
