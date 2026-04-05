"use client";

import NotesFilterClient from "@/components/NoteList/Notes.client";

export default function NotesClient({ initialTag }: { initialTag?: string }) {
  return <NotesFilterClient initialTag={initialTag} />;
}