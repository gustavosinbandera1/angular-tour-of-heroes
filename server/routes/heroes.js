var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://gustavosinbandera1:nicolas901028@ds157509.mlab.com:57509/mytasklist_gustavo', ['heroes']);


//get  all heroes
router.get('/heroes', function (req, res, next) {
  db.heroes.find(function(err, heroes){
    if(err) {
      res.send(err);
    }
    res.json(heroes);
  })
});

//get single heroe
router.get('/heroes/:id',  (req, res, next) => {
  db.heroes.find({_id: mongojs.ObjectID(req.params.id)},function(err, heroe){
    if(err) {
      res.send(err);
    }
    res.json(heroe);
  })
});

//save heroe
router.post('/heroes', (req,res,next) => {
  var heroe = req.body;
  if(!heroe.firstName || !heroe.lastName || !heroe.city){
    res.status(400);
    res.json({
      "error":"Bad data"
    })
  }else {
    db.heroes.save(heroe, (err, heroe) => {
      if(err) {
        res.send(err);
      }
      res.json(heroe);
    })
  }
});

//delete heroe
router.delete('/heroes/:id', (req, res, next) => {
  db.heroes.remove({_id: mongojs.ObjectID(req.params.id)},function(err, heroe){
    if(err) {
      res.send(err);
    }
    res.json(heroe);
  })
});

//update

router.put('/heroes/:id', (req, res, next) => {
  var heroe = req.body;
  var updHeroe = {};

  if(heroe.firstName){
    updHeroe.firstName = heroe.firstName;
  }
  if(heroe.lastName){
    updHeroe.lastName = heroe.lastName;
  }
  if(heroe.city){
    updHeroe.city = heroe.city;
  }
  if(!updHeroe){
    res.status(400);
    res.json({
      "error": "Bad data"
    });
  }else {
    db.heroes.update({_id: mongojs.ObjectID(req.params.id)},updHeroe, {} ,function(err, heroe){
        if(err) {
          res.send(err);
        }
        res.json(heroe);
      })
    }
});
module.exports = router;
