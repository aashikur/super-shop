import clientPromise from "@/dbConfig/dbConfig";

export async function GET(req){
    try{
        const client = await clientPromise;
        const db = client.db("super-shop");
        const usersCollection = db.collection("users");

        const users = await usersCollection.find({}).toArray();

        return Response.json(users, {status: 200});
    } catch (e) {

        console.log("get request api/users error", e);
    }
}