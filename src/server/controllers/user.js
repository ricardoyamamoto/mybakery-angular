const Controller = require('../lib/controller');
const userFacade = require('../facades/user');

class UserController extends Controller {}

module.exports = new UserController(userFacade);
