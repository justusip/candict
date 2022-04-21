import {Db, MongoClient} from "mongodb";

let cached: MongoClient = null;

export async function useDB(): Promise<Db> {
    if (cached)
        return cached.db("jyut");
    cached = new MongoClient(process.env.MONGO_URI);
    await cached.connect();
    return cached.db("jyut");
}
