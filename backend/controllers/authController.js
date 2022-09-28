import expressAsyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import { Auth } from "../model/Auth.js";
import { compareHash, generateHashPassword } from "../utils/hash.js";
import { generateAccessToken, generateRefreshToken } from "../utils/token.js";

let refreshTokens = [];

export const refreshToken = (req, res) => {
  const { refreshToken } = req.body;
  console.log({ refreshTokens, refreshToken });

  if (!refreshToken) {
    res.status(401).json({
      message: "You are not Authenticated",
    });
  } else if (!refreshTokens.includes(refreshToken)) {
    res.status(403).json({
      message: "Refresh token is not valid",
    });
  } else {
    const decoded = jwt.verify(refreshToken, process.env.JWT_SECRET);
    if (decoded) {
      refreshTokens = refreshTokens.filter((token) => token !== refreshToken);

      const payload = {
        email: decoded?.email,
        role: decoded?.role,
      };

      const newAccessToken = generateAccessToken(payload);
      const newRefreshToken = generateRefreshToken(payload);

      refreshTokens.push(newRefreshToken);

      res.json({
        email: decoded?.email,
        accessToken: newAccessToken,
        refreshToken: newRefreshToken,
      });
    }
  }
};

export const loginController = expressAsyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (email && password) {
    const response = await Auth.findOne({ email });
    if (response) {
      // TODO: Check Password Matching
      const matchPassword = compareHash(password, response.password);
      if (matchPassword) {
        const payload = {
          role: response?.role,
          email: response?.email,
        };

        const accessToken = generateAccessToken(payload);
        const refreshToken = generateRefreshToken(payload);

        //TODO: Push Refresh token to an array
        refreshTokens.push(refreshToken);

        res.json({
          email: response?.email,
          accessToken,
          refreshToken,
        });
      } else {
        res.status(400).json({
          message: "Inavlid Credentials",
        });
      }
      //   TODO: End Password matching
    } else {
      res.status(404).json({
        message: "Invalid Credentials",
      });
    }
  } else {
    res.status(400).json({
      message: "Invalid payload",
    });
  }
});

export const registerController = expressAsyncHandler(async (req, res) => {
  const { name, email, password } = req.body || {};

  if (email && password) {
    const response = await Auth.create({
      name,
      email,
      password: generateHashPassword(password),
    });

    if (response) {
      const payload = {
        email,
        role: response?.role,
      };

      res.json({
        email,
        accessToken: generateAccessToken(payload),
      });
    } else {
      res.status(400).json({
        message: "Something went wrong",
      });
    }
  } else {
    res.status(400).json({
      message: "Invalid payload",
    });
  }
});
