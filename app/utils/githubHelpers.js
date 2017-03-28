var axios = require('axios');

var id = "client_id";
var secret = "secret_id";
var param = "?client_id=" + id + "&client_secret=" + secret;


function getUserInfo(username) {
    return axios.get('https://api.github.com/users/' + username + param)
}

var helpers = {
    getPlayersInfo: function() {}
};

module.export = helpers
