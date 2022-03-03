const exp = require("constants");
const express = require("express");
const ejs = require("ejs");
var formidable = require("formidable");
const app = express();
app.use(express.static("public"));
var fs = require("fs");

app.set("view engine", "ejs");


app.get("/", (req, res) => {
  res.render("home");
});


app.post("/fileupload", (req, res) => {
  var form = new formidable.IncomingForm();
  form.parse(req, function (err, fields, files) {
    var oldpath = files.filetoupload.filepath;
    var newpath = __dirname + "/public/images/" + files.filetoupload.originalFilename;
    fs.rename(oldpath, newpath, function (err) {
      if (err) throw err;
      res.write("File uploaded and moved!");
      res.end();
    });
  });
});
app.listen(3000 || process.env.PORT);
