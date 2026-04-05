export default function FilterLayout({
  sidebar,
  notes,
}: {
  sidebar: React.ReactNode;
  notes: React.ReactNode;
}) {
  return (
    <div style={{ display: "flex", gap: "24px", padding: "20px" }}>
      {sidebar}
      {notes}
    </div>
  );
}