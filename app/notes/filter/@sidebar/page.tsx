
"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import css from "./Sidebar.module.css";

const tags = ["all", "Work", "Personal", "Ideas", "Important"];

export default function Sidebar() {
  const params = useParams();
  const slug = params?.slug as string[] || [];
  const currentTag = slug[0] || "all";

  return (
    <aside className={css.sidebar}>
      <h3 className={css.title}>Filters</h3>
      <ul className={css.menuList}>
        {tags.map((tag) => (
          <li key={tag} className={css.menuItem}>
            <Link
              href={`/notes/filter/${tag === "all" ? "all" : tag}`}
              className={`${css.menuLink} ${currentTag === tag.toLowerCase() || (tag === "all" && currentTag === "all") ? css.active : ""}`}
            >
              {tag === "all" ? "All notes" : tag}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
