const express = require('express');
const router = express.Router();
const { User , StudySession } = require('../database/models');

router.get('/', function(req, res, next) {
  User.findAll({include: [StudySession]})
    .then(user => res.json(user))
    .catch(err => console.log(err))
});

// Export our router, so that it can be imported to construct our apiRouter;
module.exports = router;
