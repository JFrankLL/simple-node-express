const jwt = require('jsonwebtoken');

class TokenVerifyier {
  constructor(token) {
    if (!token || token.length === 0) {
      throw new Error('Token is missing in request headers');
    } else if (typeof token !== 'string') {
      throw new Error('Invalid token value');
    }
    const bearerToken = token.split(' ').pop();
    if (bearerToken.length === 0) {
      throw new Error('Invalid token value');
    }
    this.token = bearerToken;
  }

  isValid() {
    try {
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
    } catch (error) {
      throw new Error('Invalid token');
    }
  }

  getPayload() {
    try {
      const decodeOptions = { complete: true };
      const { payload } = jwt.decode(this.token, decodeOptions);
      return payload;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = TokenVerifyier;
