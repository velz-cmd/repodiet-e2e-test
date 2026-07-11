type Props = { text: string };

export function StatusBadge({ text }: Props) {
  return <span data-kind="badge">{text}</span>;
}
