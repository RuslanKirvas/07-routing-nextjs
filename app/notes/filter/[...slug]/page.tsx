import NotesFilterClient from "@/components/NoteList/Notes.client";

export default async function FilterPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const tag = slug?.[0] === "all" ? undefined : slug?.[0];

  return <NotesFilterClient initialTag={tag} />;
}