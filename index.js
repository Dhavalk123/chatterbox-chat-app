const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const fs = require("fs");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*", // Allow all origins (adjust if needed for production)
  },
});

app.use(cors());
app.use(express.json());

// ✅ Create users.json file if it doesn't exist
const usersFile = "users.json";
if (!fs.existsSync(usersFile)) {
  fs.writeFileSync(usersFile, "[]");
}

// ✅ Register API
app.post("/register", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: "Username and password are required" });
  }

  const users = JSON.parse(fs.readFileSync(usersFile, "utf8"));
  const userExists = users.find((u) => u.username === username);

  if (userExists) {
    return res.status(409).json({ error: "Username already taken" });
  }

  users.push({ username, password });
  fs.writeFileSync(usersFile, JSON.stringify(users, null, 2));

  return res.status(201).json({ message: "User registered successfully" });
});

// ✅ Login API
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: "Username and password are required" });
  }

  const users = JSON.parse(fs.readFileSync(usersFile, "utf8"));
  const user = users.find((u) => u.username === username && u.password === password);

  if (!user) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  return res.status(200).json({ message: "Login successful", username });
});

// ✅ Socket.IO for chat
io.on("connection", (socket) => {
  console.log("✅ A user connected:", socket.id);

  socket.on("message", ({ username, text }) => {
    if (!username || !text) return;

    console.log("📨", username, text);
    io.emit("message", { username, text }); // Send full object
  });

  socket.on("disconnect", () => {
    console.log("❌ A user disconnected:", socket.id);
  });
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
