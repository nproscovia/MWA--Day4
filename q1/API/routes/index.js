const express = require("express");
const controllerGames = require("../controllers/games.controllers");

console.log("here")
const router = express.Router();

router.route("/games")
     .get(controllerGames.getallgames );

     router.route("/games/:gameId")
           .get(controllerGames.getOnegame);

           
           
module.exports= router;
