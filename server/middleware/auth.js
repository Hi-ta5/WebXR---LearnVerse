import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'learnverse-cosmic-secret-key-9988';

export default function authMiddleware(req, res, next) {
  // Read Authorization header
  const authHeader = req.headers.authorization;
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Access denied. No token provided.' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded; // Attach user data { id, email } to request
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Invalid or expired token.' });
  }
}
