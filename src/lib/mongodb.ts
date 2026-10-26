import { MongoClient } from "mongodb";

// dev 환경의 HMR에서 연결이 계속 늘어나지 않도록 전역에 보관
const globalForMongo = globalThis as unknown as {
  mongoClient?: Promise<MongoClient>;
};

// 환경 변수 검사는 모듈 로드 시점이 아니라 실제 사용 시점에 한다.
// (빌드 중에는 환경 변수가 없어도 라우트를 불러올 수 있어야 함)
function getClient() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error("MONGODB_URI 환경 변수가 설정되어 있지 않습니다.");
  }
  return (globalForMongo.mongoClient ??= new MongoClient(uri).connect());
}

export async function getClicksCollection() {
  const client = await getClient();
  return client.db("linknamu").collection<{ _id: string; count: number }>(
    "clicks",
  );
}
