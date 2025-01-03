const path = require("node:path");
const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;
const HOST_NAME = "localhost";

// Enable EJS as the view engine, will look for templates in /views dir
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

const homeRoute = require('./routes/home');
app.use("/", homeRoute);

const newRoute = require('./routes/new');
app.use("/new", newRoute);

app.listen(PORT, () => {
    console.log(`Listening on port http://${HOST_NAME}:${PORT}`);
});