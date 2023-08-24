const { default: mongoose } = require("mongoose");

async function dbConnection(url) {
  mongoose
    .connect(url)
    .then(() => {
      console.log(`Mongodb Connected!`);
    })
    .catch((err) => {
      console.log(` Error in mongodb : ${err}`);
    });
}

module.exports = {
  dbConnection,
};
