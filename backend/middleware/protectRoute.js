import jwt from "jsonwebtoken";

export const privateRoute = (req, res, next) => {
  const headersInfo = req?.headers?.authorization?.split(" ");
  const bearerToken = headersInfo?.[1];

  try {
    if (headersInfo?.[0] === "Bearer" && bearerToken) {
      const isVerifiedToken = jwt.verify(bearerToken, process.env.JWT_SECRET);

      if (isVerifiedToken) {
        next();
      }
    } else {
      res.status(401).json({
        message: "UnAuthenticated user",
      });
    }
  } catch (error) {
    res.status(401).json({ message: error?.message });
  }
};
