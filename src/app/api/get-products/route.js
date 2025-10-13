import clientPromise from "@/dbConfig/dbConfig";

export async function GET(request){
    const client = await clientPromise;
    const db = client.db("super-shop");
    const productsCollections =db.collectons("products");
    const products = await productsCollections.find({}).toArray();
    return Response.json(products);
}