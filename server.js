const express = require("express");
const fs = require('fs');
const compression = require("compression")



const app = express();
const PORT = process.env.PORT || 3000;

app.use(compression());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

require("./routes/apiroutes")(app);
require("./routes/htmlroutes")(app);

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});


