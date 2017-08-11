var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/raceTracking";


const getObj = () => {
	return {
		name    : "Company Inc",
		address : "Highway 37",
		d       : new Date().getTime()
	};
}

MongoClient.connect(url, function(err, db) {
  if (err) throw err;


  setInterval(() => {
  	let obj = getObj();
	  db.collection("raceAcrossBrazil")
	  .insertOne(obj, (err, res) => {
	    if (err) throw err;
	    console.log("New Obj:", obj);
	  });
  }, 5500);

  //db.close();
});
