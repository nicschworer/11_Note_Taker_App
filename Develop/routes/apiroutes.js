const fs = require("fs");
const data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));

let id = 0;

module.exports = function(app) {
  
    app.get("/api/notes", function(req, res) {
        res.json(data);
    });

    app.get("/api/notes/:id", function(req, res) {
        res.json(data[data.findIndex(object => object.id == req.params.id)]);

    })

    app.post("/api/notes", function(req, res) {
        let newNote = {
            title: req.body.title,
            text: req.body.text,
            id: ++id
        };
        data.push(newNote);
        fs.writeFile("./db/db.json", JSON.stringify(data), (e) => {console.log(e)});
        res.json(data);
    })

    app.delete("/api/notes/:id", function (req, res) {
        data.splice(Number(data.findIndex(object => object.id == req.params.id)), 1);
        fs.writeFile("./db/db.json", JSON.stringify(data), (e) => {console.log(e)});
        res.json(data);
    })

};
