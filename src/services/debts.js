const { Debts } = require("../db/debtsModel");
// const bcryptjs = require("bcryptjs");
// const jwt = require("jsonwebtoken");
const fs = require("fs").promises;
const uuid = require("uuid");

require("dotenv").config();

const debtList = async name => {

  let debt = await Debts.find({ name });
  return debt;
};

module.exports = {
  debtList
};
