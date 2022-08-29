const app = require("./app");
const { connect } = require("./mongo");

const PORT = 4000;

const setup = () => {
  const { setupRoutes } = require("./students.controller");
  setupRoutes(app);
};

app.listen(PORT, async () => {
  console.log(`listening on port ${PORT}`);
  await connect();

  setup();
  //Which request handler
  app.use("/", (req, res) => {
    console.log(`request received at ${new Date()}`);
    console.log("req", req.body);
    res.send(`request received at ${new Date()}`);
  });
});
