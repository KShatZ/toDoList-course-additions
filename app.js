const express = require("express");
const app = express();

//Middleware Set-up
app.use(express.urlencoded({extended: "true"})); //Reading in POST requests

//Setting EJS as view engine
app.set("view engine", "ejs"); 

app.get("/", function(req, res){

    res.send("Hello World");

});

app.listen("3000", function(req, res){
    console.log("Server live: listening on :3000");
});