import { links } from "@/lib/links";
import { getClicksCollection } from "@/lib/mongodb";

// 모든 링크의 클릭 수를 { [id]: count } 형태로 반환
export async function GET() {
  try {
    const collection = await getClicksCollection();
    const docs = await collection.find().toArray();
    const counts: Record<string, number> = Object.fromEntries(
      links.map((link) => [link.id, 0]),
    );
    for (const doc of docs) {
      if (doc._id in counts) counts[doc._id] = doc.count;
    }
    return Response.json(counts);
  } catch (error) {
    console.error("클릭 수 조회 실패:", error);
    return Response.json({ error: "클릭 수를 가져오지 못했습니다." }, { status: 500 });
  }
}
