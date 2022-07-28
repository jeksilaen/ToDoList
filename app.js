const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + "/date.js")

const port = 3000;

const app = express();

app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static("static"));

app.set("view engine", "ejs");

const items = ["Buy Food", "Cook Food", "Eat Food"];
const workItems = [];


app.get("/", (req, res) => {

    const today = date.getDate();

    res.render("list", {listTitle:today, newItems:items});

});

app.post("/", (req, res) => {

    const item = req.body.newItem;

    console.log(req.body.list);

    if (req.body.list === "Work") {
        workItems.push(item);
        res.redirect("/work")
    } else {
        items.push(item);
        res.redirect("/");
    }

});

app.get("/work", (req, res) => {

    res.render("list", {listTitle:"Work List", newItems:workItems});

});



app.listen(port, () => {
    console.log("Server is listening on port " + port);
});