import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import contactRouter from "./routes/contact.js";


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// CORS: allow multiple origins via comma-separated env, and handle preflight
const whitelist = (process.env.CORS_ORIGIN || "").split(",").map(s => s.trim()).filter(Boolean);
const corsOptions = {
  origin: (origin, callback) => {
    // Allow server-to-server and tools with no origin
    if (!origin) return callback(null, true);
    if (whitelist.length === 0) return callback(null, true);
    if (whitelist.includes(origin)) return callback(null, true);
    return callback(new Error(`Not allowed by CORS: ${origin}`));
  },
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"],
};
app.use(cors(corsOptions));
app.options("*", cors(corsOptions));

// Defensive CORS headers (helps on some serverless hosts)
app.use((req, res, next) => {
  const origin = req.headers.origin;
  const allow = !origin || whitelist.length === 0 || whitelist.includes(origin);
  if (allow) {
    res.header("Access-Control-Allow-Origin", origin || "*");
    res.header("Vary", "Origin");
    res.header("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type");
  }
  if (req.method === "OPTIONS") {
    return res.sendStatus(204);
  }
  next();
});

// MongoDB connect

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });

// Routes
app.use("/api/contact", contactRouter);

// Health
app.get("/health", (req, res) => res.json({ ok: true }));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
