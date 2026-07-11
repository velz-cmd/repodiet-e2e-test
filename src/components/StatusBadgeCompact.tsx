type Props = { text: string };

export function StatusBadgeCompact({ text }: Props) {
  return <small data-kind="badge-compact">{text}</small>;
}
