var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index_smart_cut', { title: 'Express' , current_plate: null}); //
});


module.exports = router;
