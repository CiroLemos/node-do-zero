import "dotenv/config";
import { TwitterApi } from "twitter-api-v2";

const { APP_KEY, APP_SECRET, ACCESS_TOKEN, ACCESS_SECRET, CLIENT_ID, CLIENT_SECRET, BEARER_TOKEN } = process.env;
const client = new TwitterApi({
    appKey: APP_KEY,
    appSecret: APP_SECRET,
    accessToken: ACCESS_TOKEN,
    accessSecret: ACCESS_SECRET
});

const clientV2 = new TwitterApi({
    appKey: APP_KEY,
    appSecret: APP_SECRET,
    clientId: CLIENT_ID,
    clientSecret: CLIENT_SECRET
})

export const rwClient = client.readWrite
export const rwClientV2 = clientV2.readOnly
