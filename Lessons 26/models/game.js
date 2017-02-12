var mongoose = require('mongoose');

var Game = mongoose.Schema({
    contGame: String,
    cards: Array,
    cardsToTable: Array,
    players: {
        player1: {
            id: String,
            firstCards: Array,
            secondCards: Array,
            button: Boolean,
            minBl: Boolean,
            bigBl: Boolean,
            hod: Boolean
        },
        player2: {
            id: String,
            firstCards: Array,
            secondCards: Array,
            button: Boolean,
            minBl: Boolean,
            bigBl: Boolean,
            hod: Boolean
        },
        player3: {
            id: String,
            firstCards: Array,
            secondCards: Array,
            button: Boolean,
            minBl: Boolean,
            bigBl: Boolean,
            hod: Boolean
        },
        player4: {
            id: String,
            firstCards: Array,
            secondCards: Array,
            button: Boolean,
            minBl: Boolean,
            bigBl: Boolean,
            hod: Boolean
        }
    },
    bankToTable: Number
});

module.exports = mongoose.model('Game', Game);