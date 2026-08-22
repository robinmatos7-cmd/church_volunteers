const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const routes = require("./controllers");
const helpers = require("./utils/helpers");
const sequelize = require("./config/connection");
const seedDatabase = require("./seeds/seed");

const app = express();
app.use(
  session({
    secret: "volunteer-app-secret",
    resave: false,
    saveUninitialized: false,
  })
);
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({ helpers });

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

sequelize.sync({ force: false }).then(async () => {
  await seedDatabase();

  app.listen(PORT, () =>
    console.log(`🌐 Server listening on http://localhost:${PORT}`),
  );
});
