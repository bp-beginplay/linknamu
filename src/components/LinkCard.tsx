type LinkCardProps = {
  title: string;
  href: string;
};

export default function LinkCard({ title, href }: LinkCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full rounded-3xl border border-[color:var(--glass-border)] bg-[color:var(--glass-bg)] px-6 py-[18px] text-center text-[15px] font-medium tracking-tight text-foreground shadow-[var(--glass-shadow)] backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:bg-white/70 dark:hover:bg-white/10"
    >
      {title}
    </a>
  );
}
