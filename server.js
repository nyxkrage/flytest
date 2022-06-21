const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hello From Node on Fly!</h1>");
});

app.listen(port, () => console.log(`app listening on port ${port}!`));
