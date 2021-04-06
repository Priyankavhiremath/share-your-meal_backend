
const mongoose = require("mongoose");
mongoose
  .connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connection established successfully");
  })
  .catch((e) => console.log(e.message));

const client = mongoose.connection;
client.on("error", (e) => {
  console.log(e.message);
});

module.exports = client;