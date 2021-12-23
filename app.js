const express = require("express");
const date = require(__dirname + "/modules/date.js");

const app = express();

//Middleware Set-up
app.use(express.urlencoded({extended: "true"})); //Reading in POST requests
app.use(express.static("public")); //Serve static files from 'public' directory

//Setting EJS as view engine
app.set("view engine", "ejs"); 


const items = []; //Array to hold ToDo items


// '/' routes
app.get("/", function(req, res){
   
    res.render("list", {
        pageTitle: "Title", 
        day:date.getDate(),
        items:items
    });

});

app.post("/", function (req, res){

    items.push(req.body.newItem);
    res.redirect("/");

});

app.listen("3000", function(req, res){
    console.log("Server live: listening on :3000");
});