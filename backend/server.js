import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import contactRouter from "./routes/contact.js";


dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
// CORS: allow multiple origins via comma-separated env, and handle preflight
const whitelist = (process.env.CORS_ORIGIN || "").split(",").map(s => s.trim()).filter(Boolean);
const corsOptions = {
  origin: (origin, callback) => {
    // Allow server-to-server and tools with no origin
    if (!origin || whitelist.length === 0 || whitelist.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error(`Not allowed by CORS: ${origin}`));
    }
  },
  methods: ["GET", "POST", "OPTIONS"],
  credentials: true,
  allowedHeaders: ["Content-Type"],
};
app.use(cors(corsOptions));
app.options("*", cors(corsOptions)); // Pre-flight

// MongoDB connect

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });

// Routes
app.use("/contact", contactRouter);

// Health
// app.get("/health", (req, res) => res.json({ ok: true }));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
