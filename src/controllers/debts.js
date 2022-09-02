const {
    currentUser,
} = require("../services/debts");


const currentDebtsControl = async (req, res, next) => {
    const debt = await currentUser(req.debt);
    res.status(200).send(debt);
};


module.exports = {
    currentDebtsControl
};