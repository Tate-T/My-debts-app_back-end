const express = require("express");

const {
    currentDebtsControl,
} = require("../../controllers/debts");
// const { schemas } = require("../../db/debtsModel");

const router = express.Router();

router.get("/");

module.exports = router;