const fs = require("fs");
const path = require("path");
const data = path.join(__dirname, "../../cours");

const init = () => {
    if (!fs.existsSync(data)) {
        fs.mkdirSync(data);
    }
}

exports.init = init;