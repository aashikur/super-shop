import clientPromise from "@/dbConfig/dbConfig";

export async function POST(request){
    try{
        const client = await clientPromise;
        const db = client.db("super-shop");
        const usersCollections = db.collection("users");

        const user = await request.json();
        const result = await usersCollections.insertOne(user);

        return Response.json(result);

    } catch(e){
        console.log("post request api/users error", e);
        
    }
}


// Case Study - Success 