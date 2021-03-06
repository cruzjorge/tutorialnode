var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/fotos");

var userSchemaJSON = {
    email:String,
    password:String
};

var user_schema = new mongoose.Schema(userSchemaJSON);

var User = mongoose.model("User", user_schema);

app.use("/public", express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({exteded: true}));

app.set("view engine", "jade");

app.get("/", function(req, res) {
    res.render("index");
});

app.get("/login", function(req, res) {
    User.find(function(err,doc) {
        console.log(doc);
        res.render("login");
    });

});

app.post("/users", function(req, res) {
    var user = new User ({email: req.body.email, password: req.body.password});

    user.save(function (err,doc) {
        res.send("Guardamos tus datos");
    });
});

app.listen(8080);
