const exp = require( 'constants' );
const express= require('express');
const { append } = require( 'express/lib/response' );
var formidable = require("formidable");
var fs = require("fs");
var url= __dirname+"/images/profile.jpg"
const app=express();
app.get('/',(req, res) =>{
    
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(`<img src=${url} />`)
      res.write(
        '<form action="fileupload" method="post" enctype="multipart/form-data">'
      );
      res.write('<input type="file" name="filetoupload"><br>');
      res.write('<input type="submit">');

      res.write(
        '<img src="C:UsersMudasirDesktopwebdev%uploadingpdfsserverimagesprofile.jpg" />'
      );
      res.write("</form>");
      return res.end();

  })

  app.post('/fileupload',(req,res)=>{
       var form = new formidable.IncomingForm();
       form.parse(req, function (err, fields, files) {
         var oldpath = files.filetoupload.filepath;
         var newpath =
           __dirname + "/images/" + files.filetoupload.originalFilename;
         fs.rename(oldpath, newpath, function (err) {
           if (err) throw err;
           res.write("File uploaded and moved!");
           res.end();
         });
       });
  })
  app.listen(3000|| process.env.PORT);
