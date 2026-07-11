type StatusCardProps = {
  title: string;
  value: string;
};

export function StatusCard({ title, value }: StatusCardProps) {
  return (
    <section>
      <h2>{title}</h2>
      <strong>{value}</strong>
    </section>
  );
}
