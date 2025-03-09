const express = require("express");
const handlebars = require("express-handlebars");
const path = require("path");
const routes = require("./routes");
const db = require("./config/db");

const app = express();
const port = 3000;

//Connect to DB
db.connect();

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
// config static files
app.use(express.static(path.join(__dirname, "public")));

app.engine(".hbs", handlebars.engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
// app.set('views', './src/resouces/views');
app.set("views", path.join(__dirname, "resources", "views"));

routes(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
