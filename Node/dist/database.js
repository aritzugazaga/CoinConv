"use strict";

var _require = require('mongodb'),
    MongoClient = _require.MongoClient;

var uri = "mongodb+srv://admin:admin@cluster0.2vdsi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
var client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

exports.connect = function () {
  return new Promise(function (resolve, reject) {
    MongoClient.connect(uri, function (err, db) {
      if (err) throw err;
      var currencies = db.db("currencies");
      currencies.collection("currencies").find({}).toArray(function (err, result) {
        if (result) {
          return resolve(result);
        } else {
          return resolve();
        }
      });
    });
  });
};