import LinkCard from "@/components/LinkCard";

// 더미 데이터: 실제 내용은 나중에 교체
const profile = {
  name: "김동호",
  bio: "세계 최상 바이브 코더",
};

const links = [
  { title: "Github", href: "https://github.com" },
  { title: "LinkedIn", href: "https://www.linkedin.com" },
  { title: "Blog", href: "https://example.com" },
];

export default function Home() {
  return (
    <div className="flex flex-1 items-start justify-center bg-zinc-100 px-4 py-10 dark:bg-black">
      <main className="flex w-full max-w-md flex-col items-center gap-3 rounded-3xl bg-zinc-50 px-6 py-10 shadow-sm dark:bg-zinc-950">
        <div
          role="img"
          aria-label="프로필 사진"
          className="flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-emerald-300 to-sky-400 text-5xl font-semibold text-white"
        >
          {profile.name[0]}
        </div>
        <h1 className="mt-2 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
          {profile.name}
        </h1>
        <p className="text-base text-zinc-600 dark:text-zinc-400">
          {profile.bio}
        </p>
        <ul className="mt-6 flex w-full flex-col gap-4">
          {links.map((link) => (
            <li key={link.title}>
              <LinkCard {...link} />
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
