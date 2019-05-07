class Controller {
  static get(req, res) {
    res.send({ message: 'Got a GET request at /', body: res.locals.auth });
  }

  static post(req, res) {
    res.send('Got a POST request at /');
  }

  static put(req, res) {
    res.send('Got a PUT request at /');
  }

  static delete(req, res) {
    res.send('Got a DELETE request at /');
  }
}

module.exports = Controller;
