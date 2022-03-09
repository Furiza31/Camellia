const fs = require("fs");
const path = require("path");
const dataPath = path.join(__dirname, "../../cours");

const init = () => {
    if (!fs.existsSync(dataPath)) {
        fs.mkdirSync(dataPath);
    }
}

const readFile = () => {
    let res = [];
    let data = fs.readdirSync(dataPath);

    for (let i = 0; i < data.length; i++) {
        res.push([data[i], fs.readdirSync(path.join(dataPath, data[i]))])
    }

    return res;
}

exports.init = init;
exports.readFile = readFile;