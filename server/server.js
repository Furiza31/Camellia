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

    // routes
    app.get("/", (req, res) => {
        res.render("index", { where: "index" });
    });

    app.get("/cours", (req, res) => {
        cours.init();
        res.render("cours", { data: cours.readFile(), where: "cours" })
    });

    app.get("/cours/anne/:name", (req, res) => {
        let pfPath = path.join(__dirname, "../cours", req.params.name);
        cours.createFile(pfPath);
        res.redirect("/cours");
    });

    // listen
    app.listen(settings.port, () => {
        console.log(`Server on: http://localhost:${settings.port}`);
    });
}

exports.start = start;