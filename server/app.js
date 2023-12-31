const express = require("express");
const app = express();

app.use(express.static("build"));
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/build/index.html");
});

app.listen(8080, () => console.log(`http://localhost:8080`));
