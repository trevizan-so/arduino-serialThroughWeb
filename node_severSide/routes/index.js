var express = require('express');
var router = express.Router();

var localState = [];

router.route('/')
  .get((res, req, next) => {
    req.statusCode = 200;
    req.setHeader("Content-Type", "application/json");
    console.log(localState);
    req.json(localState)
  })
  .post((req, res, next) => {
    localState.push(Number(req.body.value));
    req.statusCode = 200;
    res.end();
    console.log(localState);
  })

module.exports = router;
