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
    let annee = fs.readdirSync(dataPath, { encoding: "utf-8" }),
        cours, cpt;

    for (let i = 0; i < annee.length; i++) {
        cours = fs.readdirSync(path.join(dataPath, annee[i]), { encoding: "utf-8" });
        res.push({
            annee: annee[i],
            cours: []
        });
        for (let j = 0; j < cours.length; j++) {
            cpt = fs.readdirSync(path.join(dataPath, annee[i], cours[j]), { encoding: "utf-8" });
            res[res.length - 1].cours.push({
                name: cours[j],
                cpt: cpt
            });
        }
    }

    return res;
}

const createFile = (pfPath) => {
    if (!fs.existsSync(pfPath)) {
        fs.mkdirSync(pfPath);
    }
}

exports.createFile = createFile;
exports.init = init;
exports.readFile = readFile;