const express = require("express");
const router = express.Router();

const newsController = require("../app/controllers/NewsController");

router.get("/:slug", newsController.show);
// simple logger for this router's requests
// all requests to this router will first hit this middleware
router.get("/", newsController.index);

module.exports = router;
