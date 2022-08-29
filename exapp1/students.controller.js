const {
  insert,
  search,
  getById,
  deleteById,
  update,
} = require("./students.service");

const setupRoutes = (app) => {
  app.get("/api/students/detail/:id", async (req, res) => {
    const student = await getById(req.params.id);
    res.send(student);
  });
  app.post("/api/students/create", async (req, res) => {
    const result = await insert(req.body);
    res.send(result);
  });

  app.post("/api/students/search", async (req, res) => {
    const result = await search(req.body);
    res.send(result);
  });

  app.put("/api/students/update/:id", async (req, res) => {
    const updateDoc = await update(req.params.id, req.body);
    res.send(updateDoc);
  });

  app.delete("/api/students/delete/:id", async (req, res) => {
    const deleteStudent = await deleteById(req.params.id);
    res.send(deleteStudent);
  });

  
};

module.exports = { setupRoutes };
