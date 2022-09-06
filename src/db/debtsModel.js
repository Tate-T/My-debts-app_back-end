const { Schema, model } = require("mongoose");

const debtsSchema = new Schema({
    borrowerName: {
        type: String,
        required: [true, "Name is required"],
    },
    borrowerPhone: {
        type: String,
        required: [true, "Phone is required"],
        default: null,
    },
    debtName: {
        type: String,
        required: [true, "Debt name is required"],
    },
    outstandingAmount: {
        type: Number,
        required: [true, "Amount is required"],
    },
    rate: {
        type: Number,
        required: [true, "Rate is required"],
        default: 0,
    },
    minimalPayment: {
        type: Number,
        required: [true, "Payment is required"],
        default: 0,
    },
    // extraAmount: {
    //     type: Number,
    //     required: [true, "Amount is required"],
    // },
});

const Debts = model("debts", debtsSchema);

module.exports = {
    Debts,
};