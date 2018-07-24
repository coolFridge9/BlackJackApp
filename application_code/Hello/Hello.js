function helloHandler(request, response) {
    response.send("Hello BlackJack");
};

module.exports = {
    helloHandler: helloHandler
};