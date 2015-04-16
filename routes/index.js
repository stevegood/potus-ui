var express = require('express');
var router = express.Router();
var api = require('../service/API');

/* GET home page. */
router.get('/', function(req, res, next) {
  api.presidents.list(function(e, presidents){
    if (e) return next(e);
    res.render('index', {
      title: 'Presidents of the United States',
      presidents: presidents
    });
  });
});

router.get('/president/:id', function(req, res, next){
  api.presidents.get(req.params.id, function(e, president){
    if (e) return next(e);
    res.render('president', {
      title: president.name,
      president: president
    });
  });
});

router.get('/search-by-year', function(req, res, next){
  res.render('search-by-year',{ title: 'Presidents by year' });
});

router.get('/search-by-year/:year', function(req, res, next){
  api.presidents.findByYear(parseInt(req.params.year), function(e, presidents){
    if (e) return next(e);
    res.send(presidents);
  });
});

router.get('/search-by-name', function(req, res, next){
  res.render('search-by-name', { title: 'Search for president by name' });
});

router.get('/search-by-name/:name', function(req, res, next){
  api.presidents.findByName(req.params.name, function(e, presidents){
    if (e) return next(e);
    res.send(presidents);
  });
});

router.get('/parties', function(req, res, next){
  res.render('parties', {title: 'Presidential Parties'});
});

router.get('/parties/json', function(req, res, next){
  api.presidents.getPartyCounts(function(e, counts){
    if (e) return next(e);
    for (var i=0; i < counts.length; i++) {
      counts[i].label = counts[i].name;
      counts[i].value = counts[i].count;
      counts[i].color = '#'+Math.floor(Math.random()*16777215).toString(16);
      delete counts[i].name;
      delete counts[i].count;
    }
    res.send(counts);
  });
});

module.exports = router;
