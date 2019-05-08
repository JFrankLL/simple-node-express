const TokenVerifyier = require('../utils/TokenVerifier');

module.exports = (req, res, next) => {
  const {
    headers: { authorization },
  } = req;

  try {
    const bearerToken = new TokenVerifyier(authorization);

    if (!bearerToken.isValid()) {
      return res.status(401).end('Expired token');
    }

    res.locals.auth = {
      authenticated: true,
      bearer: bearerToken.getPayload(),
    };
    return next();
  } catch (error) {
    return res.status(401).end(error.message);
  }
};
