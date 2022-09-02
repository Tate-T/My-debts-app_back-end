const express = require("express");

const {
    currentDebtsControl,
} = require("../../controllers/debts");
const { schemas } = require("../../db/questionsModel");

const router = express.Router();

router.get("/current", catchErrors(currentDebtsControl));

module.exports = router;