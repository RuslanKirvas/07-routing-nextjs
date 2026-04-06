export default function FilterLayout({
  sidebar,
  notes,
  children,
}: {
  sidebar: React.ReactNode;
  notes: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: "flex", gap: "24px", padding: "24px" }}>
      <aside style={{ width: "250px", flexShrink: 0 }}>{sidebar}</aside>
      <main style={{ flex: 1 }}>
        {notes}
        {children}
      </main>
    </div>
  );
}