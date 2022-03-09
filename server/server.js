const start = () => {
    const settings = require("./settings.json");
    const express = require('express');
    const app = express();
    const path = require("path");
    const cours = require("./imports/cours");

    // static files
    app.use(express.static(path.join(__dirname, "public")));
    app.set("views", path.join(__dirname, "views"));

    // set the view engine to ejs
    app.set('view engine', 'ejs');

    app.get("/", (req, res) => {
        res.render("index.ejs");
    });

    app.get("/cours", (req, res) => {
        cours.init();
    });

    app.listen(settings.port, () => {
        console.log(`Server on: http://localhost:${settings.port}`);
    });
}

exports.start = start;