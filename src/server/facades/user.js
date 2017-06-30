const Facade = require('../lib/facade');
const userSchema = require('../models/user');

class UserFacade extends Facade {}

module.exports = new UserFacade(userSchema);
