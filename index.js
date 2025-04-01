const express = require("express");
const app = express();
const path = require("path");

const port = 8080;

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", join(__dirname, "/views"));

app.get("/", (req, res) => {
    res.render("home.ejs");
})

app.get("/ig/:username", (req, res) => {
    let { username } = req.params;
    const instaData = require("./data.json");
    const data = instaData[username];
    console.log(data);
    if (data) {
        res.render("instagram.ejs", { data });
    } else {
        res.render("error.ejs");
    }
});

app.get("/home", (req, res) => {
    res.send("You are in Home");
})

app.get("/dice", (req, res) => {
    let diceVal = Math.floor(Math.random() * 6) + 1;
    res.render("dice.ejs", { diceVal });
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});