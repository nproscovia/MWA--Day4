const mongoose = require("mongoose");
const Game = mongoose.model("Game");

//const

module.exports.getallgames = function(req,res){

    console.log("getall games");
let count =3;
let offset = 0;

if(require.query && require.query.count){
    count = parseInt(req.query.count, 10);

}

if(req.query && req.query.offset){
    offset = parseInt(req.query.offset, 10);
}

Game.find().skip(offset).limit(count).exec(function(err, games){
    console.log("found games", games.length);
    res.status(200).json(games);

});



 }

module.exports.getOnegame = function(req,res){
    console.log("get one game");
    const gameId = req.params.gameId;
    Game.findById(gameId).exec(function(err, game){
        res.status(200).json(game);
    })
}

