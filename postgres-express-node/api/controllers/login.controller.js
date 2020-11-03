const winston = require("winston");
//const { userServiceInstance } = require("../../services");

const Logger = winston.loggers.get("logger");



exports.Login = async (req, res) => {
  const { username, password } = req.body;
  try {
    //const user = await userServiceInstance.createUser({ username, password });
    res.json({ message: "Login successful" });
  } catch (err) {
    Logger.error(err);
    return res.status(400).json({ error: { message: err.message } });
  }
};