import express from "express";
import authRouter from "./routes/auth.route.js";
import dotenv from "dotenv";
import { ConnectDB } from "./libs/db.js";
import cookieParser from "cookie-parser";
import messageRouter from "./routes/message.route.js";
import cors from "cors";
import { app, server } from "./libs/socket.js";
import path from "path";

dotenv.config();

app.use(express.json());

ConnectDB();
const __dirname = path.resolve();

app.use(cookieParser());
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/auth", authRouter);
app.use("/api/messages", messageRouter);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));
}
const PORT = process.env.PORT;

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
