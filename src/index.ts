import HTTP from "http";
const cartoonsServer = HTTP.createServer((req, res) => {
    //createServer() - creates a server and issue HTTP requests and responses.
    res.write("Hello World!")
    //res.write specifies the message the server should execute
    res.end()
    //res.end ends the incoming request
});

//Starts the server on port 3000
cartoonsServer.listen(3000, () => {
    console.log('Cartoons Server running....')
})

//ends the connection
cartoonsServer.close()