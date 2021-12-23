const express = require("express");
const date = require(__dirname + "/modules/date.js");



const app = express();

//Middleware Set-up
app.use(express.urlencoded({extended: "true"})); //Reading in POST requests
app.use(express.static("public")); //Serve static files from 'public' directory

//Setting EJS as view engine
app.set("view engine", "ejs"); 

app.get("/", function(req, res){
    res.render("list", {pageTitle: "Title"});
});

app.listen("3000", function(req, res){
    console.log("Server live: listening on :3000");
});