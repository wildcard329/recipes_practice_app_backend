const express = require('express');
const cors = require('cors');
const recipes = require('../routes/recipeRoutes.js');

const server = express();

server.use(express.json());
server.use('/api/recipes', recipes);
server.use(cors());

module.exports = server;
