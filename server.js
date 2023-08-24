const express = require("express");

require("dotenv").config();
const { dbConnection } = require("./config/db.js");
const userRouter = require("./routers/userRouter.js");

const PORT = process.env.PORT || 3000;

const app = express();

dbConnection(process.env.MONGODB_URL);

//Middlewares
app.use(express.json());

//Test Route
app.get("/test", (req, res) => {
  res.status(200).json({ msg: "successful!" });
});

//User Route
app.use("/api/v1/users", userRouter);

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`server is running on http://localhost:${PORT}`);
});
