var express = require("express");
var bodyParser = require("body-parser");
var hbs = require("hbs");
var session = require("express-session");

var app = express();

app.set("view engine", "hbs");
app.use(bodyParser.urlencoded({extended: false}));
app.use(session({
    secret: "alkdjfalks weqryqwery",
    cookie: {
        maxAge: 1000 * 30,
        path: "/",
        httpOnly: true
    }
}));

var books = [
    {
        "title": "ReactJS",
        "language": "english",
        "country": "Nigeria",
        "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
        "pages": 209,
        "year": 1958
    },
    {
        "title": "lord of the rings",
        "language": "english",
        "country": "Nigeria",
        "link": "https://en.wikipedia.org/wiki/Epic_of_Gilgamesh\n",
        "pages": 160,
        "year": 1700


    },
    {
        "title": "Harry potter",
        "language": "hindi",
        "country": "Nigeria",
        "link": "https://en.wikipedia.org/wiki/Epic_of_Gilgamesh\n",
        "pages": 160,
        "year": 1700
    },
    {
        "title": "let us C",
        "language": "telugu",
        "country": "Nigeria",
        "link": "https://en.wikipedia.org/wiki/Epic_of_Gilgamesh\n",
        "pages": 160,
        "year": 1700
    },
    {
       "title":" A Tale of Two Cities",
       "language":"english",
       "country": "Nigeria",
       "link": "https://en.wikipedia.org/wiki/Epic_of_Gilgamesh\n",
        "pages": 160,
        "year": 1700
    },
    {
        "title":" The Little Prince ",
        "language":"english",
        "country": "Nigeria",
        "link": "https://en.wikipedia.org/wiki/Epic_of_Gilgamesh\n",
        "pages": 160,
        "year": 1700
     },
     {
        "title":" The Lord of the Rings",
        "language":"english",
        "country": "Nigeria",
        "link": "https://en.wikipedia.org/wiki/Epic_of_Gilgamesh\n",
        "pages": 160,
        "year": 1700
     },
     {
        "title":"Dream of the Red Chamber",
        "language":"english",
        "country": "Nigeria",
        "link": "https://en.wikipedia.org/wiki/Epic_of_Gilgamesh\n",
        "pages": 160,
        "year": 1700
     }
];

var filteredResults = books;

// app.post("/login", function(req, res){
//     // validate the user 
//     req.session.user = {
//         name: "Gopi",
//         email: "gopi@gmail.com"
//     }
//     res.send("Hey, your session is set");
// })

// app.use(function(req, res, next){
//     if(req.session.user){
//         next();
//     }
//     else{
//         res.send("Hey, you are not authenticated");
//     }
// });

app.post("/search", function(req, res){
    console.log("serch: ", req.body);
    // res.send("Hey, you are authenticated for search");
    var language = req.body.language.toLowerCase();
    filteredResults =   books.filter(function(obj){
                                return obj.language === language;
                            });
    res.redirect("/");
});

// app.get("/logout", function(req, res){
//     req.session.destroy();
//     res.send("Hey, you are logged out");
// })

app.get("/", function(req, res){
    res.render("index", {
        books: filteredResults
    });
})

app.listen(3000); 