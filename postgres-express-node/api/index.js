const express = require("express");
const router = express.Router();

const hello = require("./routes/hello");
const hello = require("./routes/login");
const user = require("./routes/user");

module.exports = () => {
  hello(router);
  user(router);

  return router;
};
