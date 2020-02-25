const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const http = require("http");

const routes = require("./routes");
const { setupWebsocket } = require("./websocket");

const app = express();
const server = http.Server(app);
setupWebsocket(server);

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

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);
