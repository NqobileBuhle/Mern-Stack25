import express from "express";
import dotenv from "dotenv";
import path from "path";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/products.routes.js";
import userRoutes from "./routes/userRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

// Connect to MongoDB first
connectDB();

// Middleware to parse JSON & URL Encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Routes
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

// Not Found & Error Handling Middleware
app.use(notFound);
app.use(errorHandler);

// Deployment Settings
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"))
  );
}

// Simple Test Route
app.get("/", (req, res) => res.send("Server is ready"));

// Start Server
app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
