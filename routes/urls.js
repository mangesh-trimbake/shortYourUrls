const express = require("express");
const router = express.Router();
const urls = require("../controllers/urls");

// GET / - Fetch All Urls
router.get("/", urls.getAll);

// GET / - Fetch Urls by name or email
router.get("/search", urls.search);

// GET /:id - Fetch Url by ID
router.get("/:id", urls.getById);

// POST / - Create new Url
router.post("/", urls.createNew);

// PUT /:id - Update a Url by ID
router.put("/:id", urls.updateById);

module.exports = router;
