const Review = require("../models/IP");
const { statusCodes, StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors");
const portscanner = require("portscanner");

const createIP = async (req, res) => {
  portscanner.checkPortStatus(
    req.body.port,
    req.body.ipaddress,
    function (error, status) {
      console.log(error);
      res.status(StatusCodes.OK).json({ status });
    }
  );
};

module.exports = {
  createIP,
};
