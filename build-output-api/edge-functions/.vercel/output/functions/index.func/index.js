const { Redis } = require("@upstash/redis");

module.exports = async (req, res) => {
  /**
   * Redis.fromEnv() will read the following from environment variables:
   * - UPSTASH_REDIS_REST_URL
   * - UPSTASH_REDIS_REST_TOKEN
   */
  const redis = Redis.fromEnv();
  await redis.set("foo", "bar");
  const bar = await redis.get("foo");

  res.json({
    body: `foo: ${bar}`,
  });
};