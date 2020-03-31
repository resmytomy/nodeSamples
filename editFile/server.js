var express = require('express');
var fs = require("fs");
const bodyParser = require('body-parser')
var app = express();


var path = require('path');

var filename = path.join('C','Program Files','nodejs','node_modules','npm','npmrc');
var file = path.resolve(filename);
console.log(filename)
app.get('/', function (req, res) {
   res.send('Hello World');
})
app.route('/view').get((req, res) => {
   console.log("data.toString()")
   var resp;
   fs.readFile('npmrc', (err, data) => {
      if(err) {
         res.send(resp)
          throw err;
 
      }
      console.log(data.toString())
      resp=data.toString();
      console.log(resp)
      res.send(resp)
      
  })

  
 })
 app.route('/edit').get((req, res) => {
   fs.writeFile('npmrc', req.body, function (err) {
      if (err) throw err;
      console.log('Replaced!');
    });

  res.send(201, req.body)
})
  


var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})