$(document).on('ready', function () {
    function User(llogin, lpasswd, lemail) {
        this.llogin = llogin;
        this.lpasswd = lpasswd;
        this.lemail = lemail;
        this.showInfo = function () {
            return "<h2>" + this.llogin + "</h2>" + "<h2>" + this.lpasswd+ "</h2>" + "<h2>" + this.lemail+ "</h2>";
        }
    }
    var elemCont = $('#container');
    var users = [];
    _.getUserInfo("#getUserInfo", function (info_my) {
        users.push(new User(info_my['login'], info_my['pass'], info_my['mail']));
        console.log( users);
    });
    $('#show').on('click', function () {
        elemCont.children('h2').remove();
        for (var j = 0; j < users.length; j++) {
            elemCont.append(users[j].showInfo());
        }
    });


});

