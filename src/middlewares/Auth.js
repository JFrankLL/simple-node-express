const TokenVerifyier = require("../utils/TokenVerifier");

module.exports = (req, res, next) => {
  const {
    headers: { authorization }
  } = req;

  try {
    const bearerToken = new TokenVerifyier(authorization);

    if (!bearerToken.isValid()) {
      return res.status(403).end("Expired token");
    }

    res.locals.auth = {
      authenticated: true,
      bearer: bearerToken.getPayload()
    };
    next();
  } catch (error) {
    return res.status(403).end(error.message);
  }
};