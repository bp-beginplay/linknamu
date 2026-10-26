import Image from "next/image";
import LinkCard from "@/components/LinkCard";

// 더미 데이터: 실제 내용은 나중에 교체
const profile = {
  name: "김동호",
  bio: "풀스택 개발자 | 요즘에는 AI 개발에 관심이 많아요",
};

const links = [
  { title: "깃허브", href: "https://github.com/bp-beginplay" },
  { title: "LinkedIn", href: "https://www.linkedin.com" },
  { title: "Blog", href: "https://example.com" },
];

export default function Home() {
  return (
    <div className="relative flex flex-1 items-start justify-center overflow-hidden px-6 py-16 sm:py-24">
      {/* 글래스 카드 뒤에서 번지는 은은한 빛 */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-[color:var(--blob-a)] opacity-60 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-96 h-72 w-72 rounded-full bg-[color:var(--blob-b)] opacity-60 blur-3xl"
      />
      <main className="relative flex w-full max-w-sm flex-col items-center">
        <Image
          src="/반명함.jpg"
          alt="프로필 사진"
          width={390}
          height={508}
          priority
          className="h-[132px] w-[132px] rounded-full object-cover object-[50%_20%] ring-4 ring-white/80 shadow-[0_12px_32px_rgba(190,110,60,0.30),0_2px_6px_rgba(190,110,60,0.20)] dark:ring-white/20"
        />
        <h1 className="mt-7 text-2xl font-bold tracking-tight">
          {profile.name}
        </h1>
        <p className="mt-2 text-balance text-center text-[15px] leading-relaxed text-muted">
          {profile.bio}
        </p>
        <ul className="mt-10 flex w-full flex-col gap-4">
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
