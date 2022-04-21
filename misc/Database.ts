import {Db, MongoClient} from "mongodb";

let cached: MongoClient = null;

export async function useDB(): Promise<Db> {
    if (cached)
        return cached.db("jyut");
    cached = new MongoClient("mongodb+srv://admin:17nHGOrxvUcnEYRU@cluster0.mt9w0.mongodb.net");
    await cached.connect();
    return cached.db("jyut");
}
