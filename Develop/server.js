// import express
const express = require('express');

// import routes
//const routes = require('./routes');

//import fs
const fs = require('fs')

//import path
const path = require ('path')

// initializing/creating our app for use
const app = express();

// create a port number that is free
const PORT = 10101;

// get artifacts that will be used by the app 
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

