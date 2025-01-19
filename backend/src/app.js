import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import "dotenv/config";
import userRouter from "./routes/user.route.js";
import productRouter from "./routes/product.route.js";

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
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "API is running...",
  });
});

// User API
app.use("/api/user", userRouter);

// Product API
app.use("/api/product", productRouter);

// 404 Middleware
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: "Resource not found",
  });
});

// Global Error Handler
app.use((err, req, res, next) => {
  const statusCode = err.status || 500;
  res.status(statusCode).json({
    success: false,
    message: err.message || "Internal Server Error",
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
});

export default app;
