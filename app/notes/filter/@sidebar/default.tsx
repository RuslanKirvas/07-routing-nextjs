

'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import css from './Sidebar.module.css';

const TAGS = ['All notes', 'Todo', 'Work', 'Personal', 'Meeting', 'Shopping'];

export default function SidebarNotes() {
  const params = useParams();
  const slug = (params?.slug as string[]) || ['all'];
  const currentTag = slug[0] === 'all' ? 'All notes' : slug[0];

  const getTagUrl = (tag: string) => {
    if (tag === 'All notes') return '/notes/filter/all';
    return `/notes/filter/${tag}`;
  };

  return (
    <ul className={css.menuList}>
      {TAGS.map((tag) => (
        <li key={tag} className={css.menuItem}>
          <Link
            href={getTagUrl(tag)}
            className={`${css.menuLink} ${currentTag === tag ? css.active : ''}`}
          >
            {tag}
          </Link>
        </li>
      ))}
    </ul>
  );
}