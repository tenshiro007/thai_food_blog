const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized: Bearer token is missing.",
    });
  }

  const token = authHeader.split(" ")[1];
  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(403).json({
        success: false,
        message: "Forbidden: Invalid or expired token.",
      });
    }
    console.log(decoded);
    if (!decoded.userId && !decoded.username) {
      return res.status(403).json({
        success: false,
        message: "Forbidden: Invalid token",
      });
    }
    req.user = decoded;
    next();
  });
};

module.exports = {
  authMiddleware,
};
