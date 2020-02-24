const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")

const routes = require("./routes");

const app = express();

mongoose
  .connect(
    "mongodb://ghostdev:ghostdev@cluster0-shard-00-00-aa5rx.mongodb.net:27017,cluster0-shard-00-01-aa5rx.mongodb.net:27017,cluster0-shard-00-02-aa5rx.mongodb.net:27017/radardev?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    }
  )
  .catch(e => console.log(e));

app.use(cors())
app.use(express.json());
app.use(routes);

app.listen(3333);
