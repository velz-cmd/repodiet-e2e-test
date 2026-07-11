type StatusCardCopyProps = {
  title: string;
  value: string;
};

export function StatusCardCopy({ title, value }: StatusCardCopyProps) {
  return (
    <section>
      <h2>{title}</h2>
      <strong>{value}</strong>
    </section>
  );
}
