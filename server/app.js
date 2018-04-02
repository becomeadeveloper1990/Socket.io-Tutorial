
// console.log(__dirname + '/../public');
// console.log(publicPath);

const express = require('express');
const path = require('path');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = new express();

app.use(express.static(publicPath));

app.listen(port, () => {
  console.log("The server has started!");
})
