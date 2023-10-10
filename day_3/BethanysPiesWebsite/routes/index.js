var express = require('express');
var router = express.Router();
const apiHelper = require('../helpers/apiHelper')

/* GET home page. */
router.get('/', function(req, res, next) {
  
  apiHelper.callApi('http://localhost:5000/api/')
  
  // the data from callApi() function is stored in 'response'
  .then(response => {
    console.log(response);
    res.render('index', { title: "Bethany's Pie Shop", data: response.data})
  })

  .catch(error => {
    res.send(error)
  })

});

module.exports = router;

// localhost is 3000 because that is the port that the generator started on