const express = require("express");
const cors = require("cors");
const logger = require("morgan");
//const postsRoutes = require("./routes/posts");
const db = require("./db/connection");
const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(express.json());
app.use(logger("dev"));
//app.use("/api", postsRoutes);
db.on("error", console.error.bind(console, "MongoDB connection error:"));
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
app.get("/", (req, res) => res.send("This is root!"));