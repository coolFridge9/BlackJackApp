const hello = require("../../Hello/Hello");

test("Correct text",() => {

    const request = {},
        response = {};

    response.send = jest.fn((message) => {
    });

    hello.helloHandler(request, response);
    expect(response.send).toHaveBeenCalledTimes(1);
    expect(response.send).toHaveBeenCalledWith("Hello BlackJack");

});