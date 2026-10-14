
import { getFirebaseAdminAuth } from "../firebaseAdmin.js";

export default async function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({
      error: "Access denied. Firebase token required.",
    });
  }

  const token = authHeader.slice("Bearer ".length);

  try {
    const decoded = await getFirebaseAdminAuth().verifyIdToken(token);

    req.user = {
      id: decoded.uid,
      uid: decoded.uid,
      email: decoded.email,
      name: decoded.name || decoded.email?.split("@")[0] || "Student",
    };

    next();
  } catch (error) {
    console.error("Firebase token verification failed:", error.message);

    return res.status(401).json({
      error: "Invalid or expired Firebase token.",
    });
  }
}