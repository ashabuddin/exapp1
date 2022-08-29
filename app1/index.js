const { MongoClient } = require("mongodb");

// const url = 'mongodb://localhost:27017';
const client = new MongoClient("mongodb://localhost:27017", {
  useNewUrlParser: true,
});


const insertStudent = async (db, document) => {
  const collection = db.collection("students");
  const result = await collection.insertOne(document);
  console.log(result);
};

const searchStudent = async (db, document) => {
    const collection = db.collection("students");
    const result = await collection.findOne(document);
    console.log(result);
  };


const student = {
  name: "Ashab",
  age: 39,
};
const main = async () =>{
    try {
        await client.connect()
        console.log("Connected to Mongodb");
        const db = client.db("schooldb");
        // const result = insertStudent(db, student});
        // const result = searchStudent(db, {age:{$gt:30}});
        const result =await db.collection("students").countDocuments();
        console.log(result);

    } catch (error) {
        
    }
}


main()