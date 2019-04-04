const express = require("express");
const helm = require("helmet");
const morg = require("morgan");
const registerRouter = require("./routes/registerRouter.js");
const loginRouter = require("./routes/loginRouter.js");
const teachersRouter = require("./routes/teachersRouter.js");

const server = express();
const json = express.json;

server.use(helm(), json(), morg("dev"));
server.use("/api/register", registerRouter);
server.use("/api/login", loginRouter);
server.use("/api/teachers", teachersRouter);

server.get("/", (req, res) => {
  res.send("API HOMEPAGE");
});

module.exports = server;
