import type {NextApiRequest, NextApiResponse} from "next";
import clientPromise from "../../misc/Database";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    let query = req.query["query"] as string;
    const page = parseInt(req.query["page"] as string) || 1;
    const itemsPerPage = 10;

    const client = await clientPromise;
    const db = client.db("jyut")

    const cursor = db.collection("moedict").aggregate([
        {
            $search: {
                index: "default",
                text: {
                    query,
                    path: ["title", "forms"]
                }
            }
        },
        {
            $facet: {
                "data": [
                    {$skip: (page - 1) * itemsPerPage},
                    {$limit: itemsPerPage}
                ],
                "meta": [
                    {$count: "count"}
                ]
            }
        }
    ]);

    const docs = await cursor.toArray();
    await cursor.close();
    const count = docs[0]["data"].length == 0 ? 0 : docs[0]["meta"][0]["count"];
    res.json({
        query,
        results: docs[0]["data"],
        count,
        pages: Math.floor(count / itemsPerPage) + 1,
        page
    });
}
