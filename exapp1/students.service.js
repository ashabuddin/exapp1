const { ObjectId } = require("mongodb");
const {  getCollections } = require("./mongo");
const { Student } = require("./student.model");

const insert = async (document) => {
  const result = await Student.insertOne(document);
  return result;
};

const search = async (document) => {
  const result = await Student.find(document).toArray();
  return result;
};

const getById = async (id) => {
  const student = await Student.findOne({
    _id: new ObjectId(id),
  });
  return student;
};
const update = async (id, document) => {
  const updateDoc = await Student.updateOne(
    { _id: new ObjectId(id) },
    { $set: { ...document } }
  );
  return updateDoc;
};

const deleteById = async (id) => {
  const deleted = await Student.deleteOne({
    _id: new ObjectId(id),
  });

  return deleted;
};

module.exports = {
  insert,
  search,
  getById,
  update,
  deleteById,
};
