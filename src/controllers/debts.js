const {
    debtList,
    addDebt
} = require("../services/debts");


const currentDebtsControl = async (req, res, next) => {
    const debts = await debtList();
    console.log(debts)
    res.status(201).json({
        contentType: "application/json",
        ResponseBody: debts,
    });
}

const addDebtControl = async (req, res, next) => {
    const newDebts = await addDebt(req.body);
    res.status(201).json({
        contentType: "application/json",
        ResponseBody: newDebts
    });
}

module.exports = {
    currentDebtsControl, addDebtControl,
};