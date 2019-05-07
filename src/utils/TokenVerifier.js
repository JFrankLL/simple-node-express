const jwt = require("jsonwebtoken");

class TokenVerifyier {
  constructor(token) {
    if(!token || token.length === 0) {
      throw new Error('Token is missing in request headers');
    } else if (typeof token !== 'string') {
      throw new Error('Invalid token value');
    }
    this.token = token.split(' ').pop();
  }

  isValid() {
    const { iat, exp, nbf } = this.getPayload();
    const expiresIn = iat || exp || nbf;

    const expiryTime = new Date(expiresIn).getTime();
    const currentDateTime = new Date(Date.now()).getTime();

    // Expirated
    if (currentDateTime >= expiryTime) {
      return false;
    }
    // Valid
    return true;
  }

  getPayload() {
    return jwt.decode(this.token);
  }
}

module.exports = TokenVerifyier;
