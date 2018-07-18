const express = require("express");
const blackJackApp = express();
const hello = require("./Hello/Hello");

blackJackApp.get("/",hello.helloHandler);

blackJackApp.listen(3000,() => console.log("listening on port 3000"));

