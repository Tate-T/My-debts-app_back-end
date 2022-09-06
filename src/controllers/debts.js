const {
    debtList,
} = require("../services/debts");


const currentDebtsControl = async (req, res, next) => {
    const debts = await debtList();
    res.status(200).send(debts);
}

// const addDebt = async (req, res, next) => {
//     const debts = await debtList();
//     if (debts.find(debt => debt.borrowerPhone === req.body.borrowerPhone)) {
//         res.status(200).send(debts);
//     }; else {
//         const newDebt = await addNewDebt(req.body);
//         res.status(201).send(debts);
//     }


module.exports = {
    currentDebtsControl
};