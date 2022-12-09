const Job = require("../models/Email");
const { statusCodes, StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors");
const spamchecker = require("known-spam-emails");

const checkMail = async (req, res) => {

  const email = req.body.email;
  console.log(email)
  const result = spamchecker.isEmailClean(email);
  res.status(StatusCodes.OK).json({ result });
  console.log(result)
};

module.exports = {
  checkMail,
};
