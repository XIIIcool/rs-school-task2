class UnauthorizedError extends Error {

  constructor(message) {
    super();
    this.message = message;
    this.name = 'UnauthorizedError';
    this.status = 401;
  }

}

module.exports = UnauthorizedError;
