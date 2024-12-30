const express = require("express");
const router = express.Router();
const { addClients, getClients } = require("../controllers/mainController");

router.post("/addClients", addClients);
router.get("/getClients", getClients);

module.exports = router;
