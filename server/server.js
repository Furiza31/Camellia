const start = () => {
    const settings = require("./settings.json");
    const express = require('express');
    const app = express();
    const path = require("path");

    // static files
    app.use(express.static(path.join(__dirname, "public")));

    // set the view engine to ejs
    app.set('view engine', 'ejs');

    app.listen(settings.port, () => {
        console.log(`Server on: http://localhost:${settings.port}`);
    });
}

exports.start = start;