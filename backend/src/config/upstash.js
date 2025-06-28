import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import dotenv from "dotenv";

dotenv.config(); // Loads .env variables

// Create a rate limiter (100 requests per minute)
const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(), // Uses UPSTASH_REDIS_REST_URL & UPSTASH_REDIS_REST_TOKEN
  limiter: Ratelimit.slidingWindow(10, "10 s"),
});

export default ratelimit;