const http = require("http");

test("end to end test", () => {
    http.get("http://localhost:3000",(response) => {
        let data = "";
        response.on('data',(chunk) => {
            data += chunk;
            expect(data).toBe("Hello BlackJack");
        })
    })

})



