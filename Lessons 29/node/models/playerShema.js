var mongoose = require('mongoose');

var player = mongoose.Schema({
    firstCard: String,
    secondCart: String,
    room: String,
    moneyPlayer: String,
    flagChek: Boolean
});