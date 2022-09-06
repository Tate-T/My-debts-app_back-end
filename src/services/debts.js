const { Debts } = require("../db/debtsModel");
// const bcryptjs = require("bcryptjs");
// const jwt = require("jsonwebtoken");
const fs = require("fs").promises;
const uuid = require("uuid");

require("dotenv").config();

const debtList = async () => {

  const debts = await Debts.find({});
  console.log(debts)
  return debts;
};

const addDebt = async ({ borrowerName, borrowerPhone, debtName, outstandingAmount, rate, minimalPayment }) => {

  let newDebt = { borrowerName, borrowerPhone, debtName, outstandingAmount, rate, minimalPayment };
  try {
    const newDebts = await new Debts(newDebt);
    await newDebts.save();
    return newDebts;
  } catch (err) {
    console.error(err);
  }
  return newDebt;
};

module.exports = {
  debtList, addDebt
};
