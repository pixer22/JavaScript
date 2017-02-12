var mongoose = require('mongoose');

var UserChat = mongoose.Schema({
    user: String,
    status: Boolean
});

module.exports = mongoose.model('UserChat', UserChat);