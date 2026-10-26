import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
if (!uri) {
  throw new Error("MONGODB_URI 환경 변수가 설정되어 있지 않습니다.");
}

// dev 환경의 HMR에서 연결이 계속 늘어나지 않도록 전역에 보관
const globalForMongo = globalThis as unknown as {
  mongoClient?: Promise<MongoClient>;
};

const clientPromise = (globalForMongo.mongoClient ??= new MongoClient(
  uri,
).connect());

export async function getClicksCollection() {
  const client = await clientPromise;
  return client.db("linknamu").collection<{ _id: string; count: number }>(
    "clicks",
  );
}
