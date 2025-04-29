import express from "express";
import authRouter from "../routes/auth.route.js";
import dotenv from "dotenv";
import { ConnectDB } from "../libs/db.js";
import cookieParser from "cookie-parser"
import messageRouter from "../routes/message.route.js";
import cors from "cors";
import { app, server } from "../libs/socket.js";
import path from "path";

dotenv.config()

ConnectDB();
const __dirname = path.resolve();

app.use(cookieParser());
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}))

app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/messages", messageRouter);

if(process.env.NODE_ENV === "production"){
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  
  // app.get("*", (req,res) => {
  //   res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
  // })
}
const PORT = process.env.PORT;

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});