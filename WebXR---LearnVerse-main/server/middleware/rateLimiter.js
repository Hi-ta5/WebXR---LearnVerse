const rateLimitWindowMs = 15 * 60 * 1000; // 15 minutes
const maxRequestsPerWindow = 30;

const ipRequests = new Map();

// Periodic cleanup of expired rate limits to prevent memory leaks
setInterval(() => {
  const now = Date.now();
  for (const [ip, data] of ipRequests.entries()) {
    if (now > data.resetTime) {
      ipRequests.delete(ip);
    }
  }
}, 5 * 60 * 1000); // Clean every 5 minutes

export default function rateLimiter(req, res, next) {
  const ip = req.ip || req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  const now = Date.now();

  if (!ipRequests.has(ip)) {
    ipRequests.set(ip, {
      count: 1,
      resetTime: now + rateLimitWindowMs,
    });
    return next();
  }

  const data = ipRequests.get(ip);

  if (now > data.resetTime) {
    // Reset window
    data.count = 1;
    data.resetTime = now + rateLimitWindowMs;
    return next();
  }

  data.count += 1;

  if (data.count > maxRequestsPerWindow) {
    const remainingTimeMin = Math.ceil((data.resetTime - now) / 60000);
    return res.status(429).json({
      error: `Too many tutoring requests. Please wait ${remainingTimeMin} minute(s) before asking again.`,
    });
  }

  next();
}
