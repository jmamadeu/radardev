const { Router } = require("express");

const routes = Router();

const DevController = require("./controllers/DevController");
const SeachController = require("./controllers/SeachController");

routes.get("/devs", DevController.index);
routes.post("/devs", DevController.store);

routes.get("/search", SeachController.index);

module.exports = routes;
