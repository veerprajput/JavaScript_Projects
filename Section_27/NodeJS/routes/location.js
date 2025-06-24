/* eslint-disable no-unused-vars */
/* eslint-disable new-cap */
const express = require('express');
const mongodb = require('mongodb');
const MongoClient = require('mongodb').MongoClient;

const router = express.Router();

const url = 'mongodb+srv://admin-wishto:learn123@cluster0.9i7n0kj.mongodb.net/locations?retryWrites=true&w=majority';
const client = new MongoClient(url);

const locationStorage = {
  locations: [],
};

router.post('/add-location', (req, res, next) => {
  // const id = Math.random();
  client.connect(function(err, client) {
    const db = client.db('locations');
    db.collection('user-locations').insertOne({
      address: req.body.address,
      coords: {lat: req.body.lat, lng: req.body.lng},
    }, function(err, r) {
      console.log(r);
      res.json({message: 'Stored location!', locId: r.insertedId});
    });
  });

  // locationStorage.locations.push({
  //   id: id,
  //   address: req.body.address,
  //   coords: {lat: req.body.lat, lng: req.body.lng},
  // });
});

router.get('/location/:lid', (req, res, next) => {
  const locationId = req.params.lid;
  client.connect(function(err, client) {
    const db = client.db('locations');
    db.collection('user-locations').findOne({
      _id: new mongodb.ObjectId(locationId),
    }, function(err, doc) {
      res.json({address: doc.address, coordinates: doc.coords});
    });
  });
  // const location = locationStorage.locations.find((loc) => {
  //   return loc.id === locationId;
  // });
  // if (!location) {
  //   return res.status(404).json({message: 'Not found!'});
  // }
});

module.exports = router;
