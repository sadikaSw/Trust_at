const Job = require("../models/Hash");
const { statusCodes, StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors");
const MalwareHashRegistry = require("malware-hash-registry");

const createHash = async (req, res) => {
  const mhrClient = new MalwareHashRegistry();

  const digests = [req.body.hash];

  mhrClient.query(digests, function (err, results) {
    if (err) {
      console.error(err);
      return;
    }
    // console.log(results)
    res.status(StatusCodes.OK).json({ results });
  });
};

module.exports = {
  createHash,
};
