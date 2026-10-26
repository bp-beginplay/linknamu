"use client";

import { useEffect, useState } from "react";
import LinkCard from "@/components/LinkCard";
import { links } from "@/lib/links";

export default function LinkList() {
  const [counts, setCounts] = useState<Record<string, number>>({});

  // 열릴 때 모든 링크의 클릭 수를 한 번에 가져옴 (받기 전에는 0회로 표시)
  useEffect(() => {
    fetch("/api/clicks")
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .then((data: Record<string, number>) => setCounts(data))
      .catch((error) => console.error("클릭 수 조회 실패:", error));
  }, []);

  function handleClick(id: string) {
    // 화면에 바로 반영하고, 서버 값으로 다시 맞춤
    setCounts((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));
    fetch(`/api/clicks/${id}`, { method: "POST", keepalive: true })
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .then((data: { count: number }) =>
        setCounts((prev) => ({ ...prev, [id]: data.count })),
      )
      .catch((error) => console.error("클릭 수 기록 실패:", error));
  }

  return (
    <ul className="mt-10 flex w-full flex-col gap-4">
      {links.map((link) => (
        <li key={link.id}>
          <LinkCard
            title={link.title}
            href={link.href}
            count={counts[link.id] ?? 0}
            onClick={() => handleClick(link.id)}
          />
        </li>
      ))}
    </ul>
  );
}
