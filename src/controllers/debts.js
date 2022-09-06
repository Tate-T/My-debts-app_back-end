const {
    debtList,
    addDebt
} = require("../services/debts");


const currentDebtsControl = async (req, res, next) => {
    const debts = await debtList();
    res.status(200).send(debts);
}

const addDebtControl = async (req, res, next) => {
    let debts = await debtList();
    if (debts.find(debt => debt.borrowerName === req.body.borrowerName)) {
        res.status(200).json({
            contentType: "application/json",
            status: false,
            response: null
        });
    } else {
        let newDebt = await addDebt(req.body);
        res.status(201).json({
            contentType: "application/json",
            status: true,
            response: newDebt,
            message: "Debt aded succesful"
        });
    }
}

module.exports = {
    currentDebtsControl, addDebtControl,
};