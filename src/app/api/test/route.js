// Testing Started after connected with mongodb 

import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("super-shop"); // 🟢 your DB name
    const collections = await db.listCollections().toArray();

    return Response.json({
      message: "Vala vaiya parcho!!! 😄",
      database: db.databaseName,
      collections: collections.map((c) => c.name),
    });
  } catch (e) {
    return Response.json({ error: e.message }, { status: 500 });
  }
}
