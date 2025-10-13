import clientPromise from "@/dbConfig/dbConfig";

export async function GET(request) {
  try {
    const client = await clientPromise;
    const db = client.db("super-shop");
    const productsCollection = db.collection("products"); // ✅ collection, not collectons
    const products = await productsCollection.find({}).toArray();

    return Response.json(products, { status: 200 });
  } catch (error) {
    console.error("Error fetching products:", error);
    return Response.json({ error: "Failed to fetch products" }, { status: 500 });
  }
}
