const { Schema, model } = require("mongoose");

const debtsSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
    },
    amount: {
        type: Number,
        required: [true, "Amount is required"],
        unique: true,
    },
    payment: {
        type: Number,
        default: 0,
    },
    rate: {
        type: Number,
        default: 0,
    },
    phone: {
        type: String,
        default: null,
    },
});

const Debts = model("debts", debtsSchema);

module.exports = {
    Debts,
};