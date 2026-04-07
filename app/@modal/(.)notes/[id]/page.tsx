// "use client";

// import { use } from "react";
// import { useRouter } from "next/navigation";
// import { useQuery } from "@tanstack/react-query";
// import { fetchNoteById } from "@/lib/api";
// import Modal from "@/components/Modal/Modal";
// import css from "./noteDetails.module.css";

// export default function InterceptedNotePage({ params }: { params: Promise<{ id: string }> }) {
//   const router = useRouter();
//   const { id } = use(params);
  
//   const { data: note, isLoading } = useQuery({
//     queryKey: ["note", id],
//     queryFn: () => fetchNoteById(id),
//   });

//   const handleClose = () => {
//     router.back();
//   };

//   if (isLoading) {
//     return (
//       <Modal onClose={handleClose}>
//         <div>Loading...</div>
//       </Modal>
//     );
//   }

//   if (!note) return null;

//   return (
//     <Modal onClose={handleClose}>
//       <div className={css.container}>
//         <h2>{note.title}</h2>
//         <p className={css.tag}>{note.tag}</p>
//         <p className={css.content}>{note.content}</p>
//         <p className={css.date}>
//           Created: {new Date(note.createdAt).toLocaleDateString()}
//         </p>
//       </div>
//     </Modal>
//   );
// }


import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { fetchNoteById } from '@/lib/api';
import NotePreview from './NotePreview.client';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function InterceptedNotePage({ params }: PageProps) {
  const { id } = await params;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['note', id],
    queryFn: () => fetchNoteById(id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotePreview id={id} />
    </HydrationBoundary>
  );
}