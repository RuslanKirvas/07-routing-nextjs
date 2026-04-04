"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

const TAGS = ["All notes", "Todo", "Work", "Personal", "Meeting", "Shopping"];

export default function SidebarNotes() {
  const params = useParams();
  const slug = (params?.slug as string[]) || ["all"];
  const currentTag = slug[0] === "all" ? "All notes" : slug[0];

  const getTagUrl = (tag: string) => {
    if (tag === "All notes") return "/notes/filter/all";
    return `/notes/filter/${tag}`;
  };

  return (
    <div>
      <h3>Filter by tag</h3>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {TAGS.map((tag) => (
          <li key={tag} style={{ marginBottom: "8px" }}>
            <Link
              href={getTagUrl(tag)}
              style={{
                display: "block",
                padding: "8px 12px",
                background: currentTag === tag ? "#0d6efd" : "transparent",
                color: currentTag === tag ? "white" : "#333",
                textDecoration: "none",
                borderRadius: "4px",
              }}
            >
              {tag}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
