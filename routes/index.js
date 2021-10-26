var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('sign-in', { title: 'Express'});
});

/* sign-up */
router.get('/sign-up', function(req, res, next) {
  res.render('sign-up', { title: 'Express'});
});

/* dashboard */
router.post('/admin-dashboard', (req, res, next) => {
  const { username, password } = req.body;
  if((username == 'admin') && (password == '1234')){
    res.render('admin-dashboard', { title: 'Express' });
  }
  else{
    res.render('sign-in', { title: 'Express'});
  }
})

module.exports = router;
