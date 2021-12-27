const express = require("express");
const date = require(__dirname + "/modules/date.js");

const app = express();

//Middleware Set-up
app.use(express.urlencoded({extended: "true"})); //Reading in POST requests through urlencoded type
app.use(express.json()); // Read in JSON content-type through requests
app.use(express.static("public")); //Serve static files from 'public' directory
app.use("*/js", express.static("public/js"));

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

// '/remove' routes
app.delete("/remove", function(req, res){

    const itemToDelete = req.body.checkbox;

    for (let i = 0; i < items.length; i++){

        if (items[i] === itemToDelete){
            items.splice(i, 1);
        }
    }
    
    res.sendStatus(200); // 200: OK
    console.log(res.headersSent);
});

app.listen("3000", function(req, res){
    console.log("Server live: listening on :3000");
});