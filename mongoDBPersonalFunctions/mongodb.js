var url = "mongodb://localhost:27017/test_database";

export default function create_mongodb_database(url){
    var MongoClient = require('mongodb').MongoClient;
    MongoClient.connect(url, (err, db)=> {
      if (err) throw err;
        console.log("Database created!");
    db.close();
});
}

export default function create_mongodb_collection(url){
    var MongoClient = require('mongodb').MongoClient;
    MongoClient.connect(url, (err, db)=> {
     if (err) throw err;
    var dbo = db.db("mydb");
    dbo.createCollection("customers", (err, res)=> {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});
}

export const data = { name: "Company Inc", address: "Highway 37" , location: "Budapest"}

export default function mongo_db_insert_one(url, collection_name, data_to_insert){
    var MongoClient = require('mongodb').MongoClient;
    MongoClient.connect(url, (err, db)=> {
    if (err) throw err;
    var dbo = db.db("mydb");

    dbo.collection(collection_name).insertOne(data_to_insert, (err, res)=> {
        if (err) throw err;
        console.log("1 document inserted");
        db.close();
    });
    });
}