import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import "dotenv/config";
import errorHandler from "./utils/errorHandler.js";

const app = express();

// Middlewares
app.use(
  cors({
    origin: process.env.VITE_API_URL || "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// API Endpoints
app.get("/", (req, res, next) => {
  try {
    res.json({
      success: true,
      message: "API is running...",
    });
  } catch (error) {
    next(error);
  }
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

// 404 Middleware
app.use((req, res, next) => {
  const error = errorHandler(404, "Resource not found");
  next(error);
});

// Global Error Handler
app.use((err, req, res, next) => {
  const statusCode = err.status || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
});

export default app;
