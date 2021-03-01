console.log("Hello");
const express = require ("express");
const resolver = require("./helloistan");

const app = express ();

app.get("/", resolver);

app.post("/post", (req, res) => {
    res.send("hello browser");
})

app.listen(3566, () => console.log("Hello Server"));

app.get("/s", (req, res) => {
    res.send("hello browser");
});
