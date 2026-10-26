type LinkCardProps = {
  title: string;
  href: string;
  count: number;
  onClick?: () => void;
};

export default function LinkCard({ title, href, count, onClick }: LinkCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className="relative block w-full rounded-3xl border border-[color:var(--glass-border)] bg-[color:var(--glass-bg)] px-14 py-[18px] text-center text-[15px] font-medium tracking-tight text-foreground shadow-[var(--glass-shadow)] backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:bg-white/70 dark:hover:bg-white/10"
    >
      {title}
      <span className="absolute right-5 top-1/2 -translate-y-1/2 text-xs font-normal tabular-nums text-muted">
        {count}회
      </span>
    </a>
  );
}
