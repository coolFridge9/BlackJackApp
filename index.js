const express = require("express");
const blackJackApp = express();

blackJackApp.get("/",(request,response) => response.send("Hello BlackJack"));
blackJackApp.listen(3000,() => console.log("listening on port 3000"));