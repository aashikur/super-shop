import clientPromise from "@/dbConfig/dbConfig";

export async function POST(request){
    try{
        const client = await clientPromise;
        const db = client.db("super-shop");
        const productsCollections = db.collection("products");

        const products = await request.json();
        const result = await productsCollections.insertOne(products);

        return Response.json(result);

    } catch(e){
        console.log("post request api/add-product error", e);
        
    }
}
