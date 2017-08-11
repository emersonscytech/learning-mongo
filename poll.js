var mongodb         = require('mongodb'),
    MongodbPolling  = require('mongodb-polling');

var mongodbPolling = new MongodbPolling();

// https://github.com/kelektiv/node-cron
mongodb.connect('mongodb://localhost:27017/raceTracking', function(err, db) {
    if(err) throw err;
    mongodbPolling.addListener('newTrackInfo', function(f) {
        db.collection('raceAcrossBrazil').find({}).toArray(f);
        console.log(new Date())
    }, "*/2 * * * * *");
});

mongodbPolling.on('newTrackInfo', function(results) {
    console.log(results);
});