const express = require("express");

const { catchErrors } = require("../../middlewares/catchErrors");

const {
    currentDebtsControl,
    addDebtControl
} = require("../../controllers/debts");
const { schemas } = require("../../db/debtsModel");

const router = express.Router();

router.get("/", catchErrors(currentDebtsControl));
router.post("/add", catchErrors(addDebtControl));

module.exports = router;