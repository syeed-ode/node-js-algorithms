const express = require("express");
//import db from './db/db';
const db = require("./db/db.js");

// // Set up the express app
// var express = require('express');
const app = express();
//
// // get all todos
app.get('/api/v1/todos', (req, res) => {
   res.status(200).send({
       success:'true',
       message:'todos retrieved successfully',
       todos: db
   })
});
//
const PORT = 5000;

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
});
console.log('Happy now');
