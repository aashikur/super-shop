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
/*

1. grab data and sent via axios post request 
    ( const response = axios.post('/api/users', user);)
2. connect mongoDB in dbConfig.js 
3. create new route in api/users/route.js
4. sent data to db









*/