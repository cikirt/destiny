'use strict'
module.exports = function(app) {
  var user = require('../controllers/user_controller')
  app
    .route('/user')
    .get(user.list_all_users)
    .post(user.create_a_user)

  app
    .route('/user/:_id')
    .get(user.read_a_user)
    .put(user.update_a_user)
    .delete(user.delete_a_user)
}

