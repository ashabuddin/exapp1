const { MongoClient } = require("mongodb");

//create connect
let _db = null;
const connect = async () => {
  const client = new MongoClient("mongodb://localhost:27017", {
    useNewUrlParser: true,
  });
  console.log("connecting to MongoDB");
  await client.connect();
  _db = client.db("schooldb");
};

//create a getDb
const getDb =  () => {
  // if (!_db) {
  //   await connect();
  // }
  return _db;
};

const getCollections =() =>{
  return {
    Student: _db.collection("students"),
    Teacher: _db.collection("teachers"),
  }
} 

module.exports = {
  connect,
  getDb,
  getCollections
};
