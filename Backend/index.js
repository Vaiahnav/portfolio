const { Certificate } = require("crypto");
const express = require("express");
const app = express();
const port = 2005;
const path = require("path");


app.use(express.static(path.join(__dirname, "public")));
// set view engine

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// route

 app.get("/home" ,( req, res) =>{
 res.render("home");
 })
app.get("/about", function (req, res) {

     res.render("about");   // no need to write .ejs
});

app.get("/certifications", (req, res) => {
     res.render("certifications");
})


app.get("/education", (req, res) => {
     res.render("education");
})

app.get("/skills", (req, res) => {
     res.render("skills");
})

// start server
app.listen(port, () => {
     console.log(`Listening on port ${port}`);
});
