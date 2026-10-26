import { links } from "@/lib/links";
import { getClicksCollection } from "@/lib/mongodb";

// 해당 링크의 클릭 수를 1 증가시키고 증가된 값을 반환
export async function POST(
  _req: Request,
  ctx: RouteContext<"/api/clicks/[id]">,
) {
  const { id } = await ctx.params;
  if (!links.some((link) => link.id === id)) {
    return Response.json({ error: "알 수 없는 링크입니다." }, { status: 404 });
  }

  try {
    const collection = await getClicksCollection();
    const doc = await collection.findOneAndUpdate(
      { _id: id },
      { $inc: { count: 1 } },
      { upsert: true, returnDocument: "after" },
    );
    return Response.json({ id, count: doc?.count ?? 1 });
  } catch (error) {
    console.error("클릭 수 증가 실패:", error);
    return Response.json({ error: "클릭 수를 기록하지 못했습니다." }, { status: 500 });
  }
}
