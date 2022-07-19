var http = require("http");
var fs = require("fs");
var socket = require("socket.io");
var html = fs.readFileSync("index.html");

var i = 1;
var rozmowa = [];
var players = [];
var winner = undefined;
var points = 10;
var player_x = 0;
var player_y = 0;

var score_x = 0;
var score_y = 0;
var move_x = "";
var move_y = "";
var moves = 0;

//create a server object
var server = http.createServer(function (req, res) {
  // function to handle request
  res.write(html);
  res.end(); //end the response
});

var io = socket(server);

io.on("connection", function (socket) {
  // powstaje nowy socket przez który będziemy gadać z kolejnym klientem
  socket.id = i++;
  if (socket.id == 1) player_x = 1;
  if (socket.id == 2) player_y = 2;
  // wysyłamy wartość nadanego id
  socket.emit("id", socket.id);

  // wysyłamy dotychczasowy przebieg rozmowy
  for (let msg of rozmowa) socket.emit("chat message", msg);

  // ustawiamy sposób reakcji na otrzymywane wiadomości
  socket.on("chat message", function (msg) {
    rozmowa.push(msg); // zapamiętaj
    io.emit("chat message", msg); // i wyślij do wszystkich
  });

  socket.on("nick", function (nick) {
    socket.nick = nick;
    socket.emit("chat message", "Witaj " + nick + "!");
  });

  // ustawiamy sposób reakcji na ruchy
  socket.on("move", function (msg) {
    let x = JSON.parse(msg);
    let player = x.player;
    let what = x.what;
    moves++;

    if (winner == undefined) {
      if (!players.includes(socket))
        if (players[0] == undefined) players[0] = socket;
        else if (players[1] == undefined) players[1] = socket;
        else
          socket.emit(
            "chat message",
            "Niestety " +
              info(socket) +
              ". W tę grę grają " +
              info(players[0]) +
              " oraz " +
              info(players[1]) +
              ". Zaczekaj aż skończą."
          );

      if (players.includes(socket)) {
        if (player == player_x) move_x = what;
        else if (player == player_y) move_y = what;

        if (moves == 2) {
          var winer = win(move_x, move_y);
          if (winer == "x") {
            score_x++;
          } else if (winer == "y") {
            score_y++;
          }

          io.emit("status", JSON.stringify([score_x, score_y]));

          if (score_x == points) {
            io.emit("disable");
            io.emit(
              "chat message",
              "Wygrał gracz " +
                info(players[0]) +
                ". Naciśnij 'Nowa gra' by zagrać kolejną rundę."
            );
          } else if (score_y == points) {
            io.emit("disable");
            io.emit(
              "chat message",
              "Wygrał gracz " +
                info(players[1]) +
                ". Naciśnij 'Nowa gra' by zagrać kolejną rundę."
            );
          }

          moves = 0;
          move_x = "";
          move_y = "";
          if (score_x < points && score_y < points) io.emit("mov");
        }
      }
    } else {
      let msg = "Gra zakończona - naciśnij 'Nowa gra' by zagrać.";
      socket.emit("chat message", msg);
      rozmowa.push(msg);
    }
  });

  socket.on("reset", function (msg) {
    rozmowa = [];
    winner = undefined;
    players = [];
    score_x = 0;
    score_y = 0;
    move_x = "";
    move_y = "";
    moves = 0;
    io.emit("reset", msg); // do wszystkich
  });

  socket.on("disconnect", function (msg) {
    if (players.includes(socket)) {
      let [a, b] = players;
      winner = socket == a ? b : a;
      let msg =
        info(socket) +
        " się rozłączył. Gra przerwana. " +
        info(winner) +
        " wygrywa!";
      io.emit("chat message", msg);
      rozmowa.push(msg);
    }
  });
});

function win(x, y) {
  if (x == "kamien" && y == "nozyce") return "x";
  if (y == "kamien" && x == "nozyce") return "y";
  if (x == "papier" && y == "kamien") return "x";
  if (y == "papier" && x == "kamien") return "y";
  if (x == "nozyce" && y == "papier") return "x";
  if (y == "nozyce" && x == "papier") return "y";
  return "";
}

function info(player) {
  return player.nick + " (" + player.id + ")";
}

server.listen(8081);
