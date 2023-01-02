import { MongoClient } from "mongodb";

export async function connectToDatabase(CONNECT_TO_DB) {
    const client = await MongoClient.connect();

    return client;
}
