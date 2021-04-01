
const mongoose = require("mongoose");
mongoose
  .connect("mongodb+srv://m001-student:m001-mongodb-basics@sandbox.nv4lx.mongodb.net/SYM?retryWrites=true&w=majority", {
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