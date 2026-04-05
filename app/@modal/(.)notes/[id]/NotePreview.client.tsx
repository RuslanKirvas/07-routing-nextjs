"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchNoteById } from "@/lib/api";
import css from "./noteDetails.module.css";

export default function NotePreviewClient({ id }: { id: string }) {
  const { data: note, isLoading } = useQuery({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id),
  });

  if (isLoading) return <div>Loading...</div>;
  if (!note) return null;

  return (
    <div className={css.container}>
      <h2>{note.title}</h2>
      <p className={css.tag}>{note.tag}</p>
      <p className={css.content}>{note.content}</p>
      <p className={css.date}>
        Created: {new Date(note.createdAt).toLocaleDateString()}
      </p>
    </div>
  );
}