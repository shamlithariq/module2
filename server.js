const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());
const module2Routes = () => {
  return (
    app.get("/module2/route1", function (req, res) {
      res.status(200).send({ data: "Module2 - route1 response" });
    }),
    app.get("/module2/route2", function (req, res) {
      res.status(200).send({ data: "Module2 - route2 response" });
    })
  );
};

module.exports = { module2Routes };

// module2Routes();
// const port = 4000;
// app.listen(port, () => {
//   console.log(`Server listening at http://localhost:${port}`);
// });
