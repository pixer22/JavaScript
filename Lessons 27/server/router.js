var User = require('../models/user');
var UserChat = require('../models/chatOnline');
var Game = require('../models/game');

function router(app, express, passport,io,session) {
    //связываем express vs ejs
    app.set('view engine', 'ejs');
    app.use(express.static(__dirname + '/../public'));
    app.get('/', function (req, res) {
        res.render('template',
            { page: "main",
              title: "Главная"}
        )
    });

    app.get('/index', function (req, res) {
        res.render('pages/index');
    });

    app.get('/tournaments', function (req, res) {
        res.render('pages/tournaments');
    });

    app.get('/statistics', function (req, res) {
        res.render('pages/statistics');
    });

    app.get('/rivers', function (req, res) {
        res.render('pages/rivers');
    });



        app.get('/game', isLoggedIn,  function (req, res) {
            var resetInforUser = req.user.local.nick,
                resetUserId = req.user._id,
                listUser;

            if(resetInforUser === undefined || resetInforUser === '') {
                res.cookie('personId', 'User not Logo');
                res.cookie('personId', encodeURIComponent(resetUserId));
            } else {
                // res.cookie('personId', decodeURIComponent(resetUserId));
                res.cookie('personId', encodeURIComponent(resetUserId));
                res.cookie('personInfo', encodeURIComponent(resetInforUser));
            }


            //Юзер который зашел на игру - становиться активым в чате и записываем в схемму
            var newStatusUser = new UserChat({
                user: resetInforUser,
                status: true
            });
            UserChat.findOne({user:resetInforUser}, function (err, users) {
                if(users !== null) {
                    return;
                } else {
                    newStatusUser.save(function (err) {

                    });
                }
            });


            // GameList.find({}, function (err, gameListID) {
            //     var gameMap = {};
            //     gameListID.forEach(function (gameListID) {
            //         if (gameListID.socketCreateID == disconnentId) {
            //             GameList.remove({"socketCreateID": disconnentId}, function (err, users) {
            //             });
            //         } else {
            //             gameMap[gameListID._id] = gameListID.gameListID;
            //         }
            //     });
            //     io.emit('disconnectServer', gameMap);
            // });
            //
            // Game.remove({}, function (err) {});



            //UserChat.find(function (err,users) {
                //socket.on('list user active chat emit',function () {

                res.render('template', {
                    page: "game",
                    title: "game",
                    //list: users
                });
                //});
            //});



        });
    var usernamesAll = {};
    var rooms = ['room1','room2','room3'];
// var
    //var roomno = 1;
        io.on('connection', function(socket){




//added user -----------------------------------------------------------------------------------------------------------|
            socket.on('adduser', function(username){
                var nameUser;
                User.findOne({_id:username},function (err, users) {
                    if(users.local.nick === null || users.local.nick === undefined) {
                        nameUser = 'Not name user ';
                        socket.username = nameUser;
                    } else {
                        nameUser = users.local.nick;
                        socket.username = nameUser;
                        usernamesAll[username] = users.local.nick;
                    }
                    socket.room = 'room1';
                    // add the client's username to the global list


                    // send client to room 1
                    socket.join('room1');
                    // echo to client they've connected
                    //io.emit('updatechat users', nameUser);
                    // echo to room 1 that a person has connected to their room
                    // socket.broadcast.to('room1').emit('updatechat users', 'SERVER', socket.username + ' has connected to this room');
                    socket.emit('updaterooms', rooms, 'room1');
                    //userStatus(socket.username);
                });


            });

            socket.on('sendchat', function (data) {
                // we tell the client to execute 'updatechat' with 2 parameters
                io.sockets.in(socket.room).emit('updatechat',data, socket.username);
            });
//----------------------------------------------------------------------------------------------------------------------|


//User list ------------------------------------------------------------------------------------------------------------|
            socket.on('list users', function () {
                io.emit('list users added', usernamesAll);
            });
//             socket.on('all user list', function () {
//                 io.sockets.in(socket.room).emit('all user list added',usernames);
//             });
//----------------------------------------------------------------------------------------------------------------------|

//Получаем юзера для игры
            socket.on('obt user info', function (nick) {
                var cards = randomCards();
                User.findOne({_id:nick}, function (err, users) {
                    socket.emit('obt server info',users,cards);
                    console.log(cards)
                })
            });




// Game.remove({}, function (err) {});
            //СТАРТ ИГРЫ
            socket.on('star game',function (resetUserId) {
                Game.find(function (err, listGame) {
                    if(listGame.length < 1) {
                        var gameCreate = new Game({
                            contGame: listGame.length + 1,
                            cards: cardsArr = [
                                ['cardsT1',
                                    ['0 0']
                                ],
                                ['cardsT2',
                                    ['-46px 0']
                                ],
                                ['cardsT3',
                                    ['-92px 0']
                                ],
                                ['cardsT4',
                                    ['-138px 0']
                                ],
                                ['cardsT5',
                                    ['-184px 0']
                                ],
                                ['cardsT6',
                                    ['-230px 0']
                                ],
                                ['cardsT7',
                                    ['-276px 0']
                                ],
                                ['cardsT8',
                                    ['-322px 0']
                                ],
                                ['cardsT9',
                                    ['-370px 0']
                                ],
                                ['cardsT10',
                                    ['-416px 0']
                                ],
                                ['cardsT11',
                                    ['-462px 0']
                                ],
                                ['cardsT12',
                                    ['-508px 0']
                                ],
                                ['cardsT13',
                                    ['-554px 0']
                                ],
                                ['cardsB1',
                                    ['0 -67px']
                                ],
                                ['cardsB2',
                                    ['-46px -67px']
                                ],
                                ['cardsB3',
                                    ['-92px -67px']
                                ],
                                ['cardsB4',
                                    ['-138px -67px']
                                ],
                                ['cardsB5',
                                    ['-184px -67px']
                                ],
                                ['cardsB6',
                                    ['-230px -67px']
                                ],
                                ['cardsB7',
                                    ['-276px -67px']
                                ],
                                ['cardsB8',
                                    ['-322px -67px']
                                ],
                                ['cardsB9',
                                    ['-370px -67px']
                                ],
                                ['cardsB10',
                                    ['-416px -67px']
                                ],
                                ['cardsB11',
                                    ['-462px -67px']
                                ],
                                ['cardsB12',
                                    ['-508px -67px']
                                ],
                                ['cardsB13',
                                    ['-554px -67px']
                                ],
                                ['cardsC1',
                                    ['0 -134px']
                                ],
                                ['cardsC2',
                                    ['-46px -134px']
                                ],
                                ['cardsC3',
                                    ['-92px -134px']
                                ],
                                ['cardsC4',
                                    ['-138px -134px']
                                ],
                                ['cardsC5',
                                    ['-184px -134px']
                                ],
                                ['cardsC6',
                                    ['-230px -134px']
                                ],
                                ['cardsC7',
                                    ['-276px -134px']
                                ],
                                ['cardsC8',
                                    ['-322px -134px']
                                ],
                                ['cardsC9',
                                    ['-370px -134px']
                                ],
                                ['cardsC10',
                                    ['-416px -134px']
                                ],
                                ['cardsC11',
                                    ['-462px -134px']
                                ],
                                ['cardsC12',
                                    ['-508px -134px']
                                ],
                                ['cardsC13',
                                    ['-554px -134px']
                                ],
                                ['cardsP1',
                                    ['0 -200px']
                                ],
                                ['cardsP2',
                                    ['-46px -200px']
                                ],
                                ['cardsP3',
                                    ['-92px -200px']
                                ],
                                ['cardsP4',
                                    ['-138px -200px']
                                ],
                                ['cardsP5',
                                    ['-184px -200px']
                                ],
                                ['cardsP6',
                                    ['-230px -200px']
                                ],
                                ['cardsP7',
                                    ['-276px -200px']
                                ],
                                ['cardsP8',
                                    ['-322px -200px']
                                ],
                                ['cardsP9',
                                    ['-370px -200px']
                                ],
                                ['cardsP10',
                                    ['-416px -200px']
                                ],
                                ['cardsP11',
                                    ['-462px -200px']
                                ],
                                ['cardsP12',
                                    ['-508px -200px']
                                ],
                                ['cardsP13',
                                    ['-554px -200px']
                                ]
                            ],
                            cardsToTable: [],
                            players: {
                                player1: {
                                    id: resetUserId,
                                    firstCards: [],
                                    secondCards: [],
                                    button: false,
                                    minBl: false,
                                    bigBl: false,
                                    hod: false
                                },
                                player2: {
                                    id: '',
                                    firstCards: [],
                                    secondCards: [],
                                    button: false,
                                    minBl: false,
                                    bigBl: false,
                                    hod: false
                                },
                                player3: {
                                    id: '',
                                    firstCards: [],
                                    secondCards: [],
                                    button: false,
                                    minBl: false,
                                    bigBl: false,
                                    hod: false
                                },
                                player4: {
                                    id: '',
                                    firstCards: [],
                                    secondCards: [],
                                    button: false,
                                    minBl: false,
                                    bigBl: false,
                                    hod: false
                                }
                            },
                            bankToTable: 0
                        });
                        gameCreate.save(function (err) {
                            if(!err) {
                                io.emit('create game', gameCreate);
                            }
                        });
                    }
                });
            });

            //Посадка игрока за стол
            socket.on('sit-at-the-table', function (userId) {
                var cccounter = 0;

                Game.findOne(function (err, listGame) {
                    var objFit = listGame.players;
                    if(userId === objFit.player1.id || userId === objFit.player2.id || userId === objFit.player3.id || userId === objFit.player4.id ) {
                        return false;
                    }
                    if(objFit.player1.id !== '' && objFit.player2.id !== '' && objFit.player3.id !== '' && objFit.player4.id !== '') {
                        socket.emit('all-table');
                    }
                    if(objFit.player2.id === '') {
                        objFit.player1.id = userId;
                        savedRetGameOne(objFit.player1);
                    } else {
                        if(objFit.player2.id === '' ) {
                            objFit.player2.id = userId;
                            savedRet(objFit.player2);
                            // socket.emit('user-sid-tab2', objFit.player2);
                        } else if(objFit.player3.id === '') {
                            objFit.player3.id = userId;
                            savedRet(objFit.player3);
                            // socket.emit('user-sid-tab3', objFit.player3);
                        } else if(objFit.player4.id === '') {
                            objFit.player4.id = userId;
                            savedRet(objFit.player4);
                            // socket.emit('user-sid-tab4', objFit.player4);
                        }
                    }

                    function savedRetGameOne(createrUser) {
                        objFit.save(function (err) {
                            if(!err) {
                                socket.emit('user-sid-tab1', createrUser);
                            }
                        });
                    }
                    function savedRet(userInfo) {
                        objFit.save(function (err) {
                            if(!err) {
                                socket.emit('user-sid-tab2', userInfo);
                            }
                        });
                    }

                    // objFit.remove();
                    // objFit.save(function (err) {
                    //     if(!err) {
                    //
                    //         // io.emit('create game', gameCreate);
                    //     }
                    // });
                    // for(var key in objFit) {
                    //
                    //     if(key === 'player1') {
                    //         console.log(objFit['player1'])
                    //     }
                    //     // console.log(objFit)
                    // }

                    // console.log(objFit.players)
                    // for(var key in listGame.players) {
                    //     console.log(listGame.players[key]);
                    //     if(listGame.players[key] == 'player1') {
                    //         //objFit[key].id = userId;
                    //         console.log(objFit[key]);
                    //
                    //     }
                    // }
                    //console.log(listGame[0].players.player2.id = userId)
                    // console.log(listGame[0].players);
                });

                 // io.emit()
            });

            socket.on('baza-test', function () {
                // console.log('ok')
                Game.find(function (err, test) {
                    console.log(test);
                })
            });

            socket.on('baza-exit', function (idExit) {
                console.log(idExit)
                Game.findOne(function (err, list) {
                    if(list.players.player1.id === idExit) {
                        list.players.player1.id = '';
                    }
                    if(list.players.player2.id === idExit) {
                        list.players.player2.id = '';
                    }
                    if(list.players.player3.id === idExit) {
                        list.players.player3.id = '';
                    }
                    if(list.players.player4.id === idExit) {
                        list.players.player4.id = '';
                    }
                    list.save();
                })
            });
            // socket.on('chat message', function (msg, idUser) {
            //     //Ищем по айдишнику юзера в базе
            //     var nameUser;
            //     User.findOne({_id:idUser},function (err, users) {
            //         if(users.local.nick === null || users.local.nick === undefined) {
            //             nameUser = 'Not name user ';
            //         } else {
            //             nameUser = users.local.nick;
            //         }
            //         // Отправляем смс всем юзерам
            //         io.emit('chat messages',msg, nameUser);
            //     });
            // });
            socket.on('chat message change', function (flag, nameUserMess) {
                socket.broadcast.emit('typing user', socket.username);
            });
            socket.on('disconnect', function(){
                for (var key in usernamesAll) {
                    if(usernamesAll[key] === socket.username) {
                        delete usernamesAll[key];
                    }
                }
                //delete usernamesAll[socket.username];
                // io.sockets.emit('updateusers', usernames);
                io.sockets.emit('living users',socket.username );
                // echo globally that this client has left
                //socket.broadcast.in(socket.room).emit('updatechat users disc', socket.username);
                //socket.broadcast.in(socket.room).emit('all user list added',usernames);
                socket.leave(socket.room);
            });

        });



    function obtainedUser(req, res) {

        User.findOne({_id:req.user._id}, function(err, user) {
            var thisUser;
            if (err) {
                res.send("error");
                return;
            }
            if(user.local.nick == null || user.local.nick == undefined) {
                thisUser = 'Anonimus user'
            } else {
                thisUser = user.local.nick;
            }
            return thisUser;
        });

    }

// =====================================
    // LOGIN ===============================
    // =====================================
    // show the login form
    app.get('/logined', function(req, res) {

        // render the page and pass in any flash data if it exists
        res.render('partials/logined.ejs', { message: req.flash('loginMessage') });
    });

    app.post('/logined', passport.authenticate('local-login', {
        successRedirect : '/profile', // redirect to the secure profile section
        failureRedirect : '/logined', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));

    // =====================================
    // SIGNUP ==============================
    // =====================================
    // show the signup form
    app.get('/signUp', function(req, res) {

        // render the page and pass in any flash data if it exists
        res.render('partials/signUp.ejs', { message: req.flash('signupMessage') });
    });

    // process the login form
    app.post('/signUp', isValid, passport.authenticate('local-signup', {
        successRedirect : '/profile', // redirect to the secure profile section
        failureRedirect : '/signUp', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));

    // =====================================
    // PROFILE SECTION =====================
    // =====================================
    // we will want this protected so you have to be logged in to visit
    // we will use route middleware to verify this (the isLoggedIn function)
    app.get('/profile', isLoggedIn, function(req, res) {
        User.findOne({_id:req.user._id},function (err, usersThis) {
            res.render('template', {
                user : usersThis, // get the user out of session and pass to template
                page: "profile",
                title: "Личный кабинет"
            });
        });
    });

    // app.post('/formProfile', function (req, res) {
    //     User.find(req.user._id,function (err, usersThis) {
    //         usersThis[0].local.nick = req.body.nick;
    //         usersThis[0].save();
    //     });
    //     // res.redirect('/profile')
    // });

    // app.post('/profile', function (req, res) {
    //     console.log(req.body);
    //     User.find(req.user._id,function (err, usersThis) {
    //     usersThis[0].local.tel = req.body.tel;
    //     usersThis[0].local.password = req.body.tel;
    //         usersThis[0].save(function (err) {
    //             if (!err) {
    //                 res.send('ok');
    //             }
    //         });
    //     });
    // });

    app.post('/formProfile', isLoggedIn, function(req, res) {
        User.findOne({_id:req.user._id}, function(err, user){
            if (err) {
                res.send("error");
                return;
            }
            user.local.email = req.body.email;
            // user.local.password = user.generateHash(req.body.password);
            user.local.nick = req.body.nick;
            user.local.tel = req.body.tel;
            user.local.fio = req.body.fio;
            user.save(function(err){
                if(!err){
                    res.send(user);
                    return;
                }
                res.send('error');
            });
        })
    });
    // User.find(function (err, userAll) {
    //     console.log(userAll)
    // })
        // User.find(req.user._id,function (err, usersThis) {
        //     // console.log(usersThis[0])
        //
        //     usersThis[0].local.tel = req.body.tel;
        //     usersThis[0].save(function (err) {
        //         if (!err) {
        //             res.render('template', {
        //                 user : usersThis[0], // get the user out of session and pass to template
        //                 page: "profile",
        //                 title: "Личный кабинет"
        //             });
        //         }
        //     });
        // });
    // });


    // app.get('/aboutNavs', isLoggedIn, function(req, res) {
    //     res.render('pages/aboutNavs', {
    //         user : req.user, // get the user out of session and pass to template
    //         page: "aboutNavs",
    //         title: "Личный кабинет"
    //     });
    // });

    // =====================================
    // LOGOUT ==============================
    // =====================================
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

    //game




}
var validator = require("../lib/validator.js");

function isValid(req, res, next){
    if (validator(req,res)) {
        return next();
        res.redirect('/profile');
    } else {
        res.redirect('/signUp');
    }


    // if they aren't redirect them to the home page



}


// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/logined');
}


var cardsArr = [
        ['cardsT1',
            ['0 0']
        ],
        ['cardsT2',
            ['-46px 0']
        ],
        ['cardsT3',
            ['-92px 0']
        ],
        ['cardsT4',
            ['-138px 0']
        ],
        ['cardsT5',
            ['-184px 0']
        ],
        ['cardsT6',
            ['-230px 0']
        ],
        ['cardsT7',
            ['-276px 0']
        ],
        ['cardsT8',
            ['-322px 0']
        ],
        ['cardsT9',
            ['-370px 0']
        ],
        ['cardsT10',
            ['-416px 0']
        ],
        ['cardsT11',
            ['-462px 0']
        ],
        ['cardsT12',
            ['-508px 0']
        ],
        ['cardsT13',
            ['-554px 0']
        ],
        ['cardsB1',
            ['0 -67px']
        ],
        ['cardsB2',
            ['-46px -67px']
        ],
        ['cardsB3',
            ['-92px -67px']
        ],
        ['cardsB4',
            ['-138px -67px']
        ],
        ['cardsB5',
            ['-184px -67px']
        ],
        ['cardsB6',
            ['-230px -67px']
        ],
        ['cardsB7',
            ['-276px -67px']
        ],
        ['cardsB8',
            ['-322px -67px']
        ],
        ['cardsB9',
            ['-370px -67px']
        ],
        ['cardsB10',
            ['-416px -67px']
        ],
        ['cardsB11',
            ['-462px -67px']
        ],
        ['cardsB12',
            ['-508px -67px']
        ],
        ['cardsB13',
            ['-554px -67px']
        ],
        ['cardsC1',
            ['0 -134px']
        ],
        ['cardsC2',
            ['-46px -134px']
        ],
        ['cardsC3',
            ['-92px -134px']
        ],
        ['cardsC4',
            ['-138px -134px']
        ],
        ['cardsC5',
            ['-184px -134px']
        ],
        ['cardsC6',
            ['-230px -134px']
        ],
        ['cardsC7',
            ['-276px -134px']
        ],
        ['cardsC8',
            ['-322px -134px']
        ],
        ['cardsC9',
            ['-370px -134px']
        ],
        ['cardsC10',
            ['-416px -134px']
        ],
        ['cardsC11',
            ['-462px -134px']
        ],
        ['cardsC12',
            ['-508px -134px']
        ],
        ['cardsC13',
            ['-554px -134px']
        ],
        ['cardsP1',
            ['0 -200px']
        ],
        ['cardsP2',
            ['-46px -200px']
        ],
        ['cardsP3',
            ['-92px -200px']
        ],
        ['cardsP4',
            ['-138px -200px']
        ],
        ['cardsP5',
            ['-184px -200px']
        ],
        ['cardsP6',
            ['-230px -200px']
        ],
        ['cardsP7',
            ['-276px -200px']
        ],
        ['cardsP8',
            ['-322px -200px']
        ],
        ['cardsP9',
            ['-370px -200px']
        ],
        ['cardsP10',
            ['-416px -200px']
        ],
        ['cardsP11',
            ['-462px -200px']
        ],
        ['cardsP12',
            ['-508px -200px']
        ],
        ['cardsP13',
            ['-554px -200px']
        ]
    ];

// Obtaining random cards
function randomCards() {
    var randomNumber = getRandomInt(0,cardsArr.length-1),
        randomCard;
    randomCard = cardsArr.splice(randomNumber,1);
    return randomCard;
};

// Obtaining random numbers
function getRandomInt(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
};

module.exports = router;