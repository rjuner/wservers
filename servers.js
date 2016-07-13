//Lets require/import the HTTP module
var http = require('http'); 

//Lets define a port we want to listen to 
var PORT = 7000; 

//we need a function that handles requests and send requests
function handleRequest(request, response){
	response.end('You are beautiful! Path Hit: ' + request.url); 
}

//create server
var server = http.createServer(handleRequest); 

server.listen(PORT, function(){
	console.log("Server listening on: http:// localhost:%s", PORT);
});

//+++++++++++++++++++++++++++++++++++++

var PORT2 = 7500; 

function handleSecond(request, reponse){
	reponse.end('Wow bad hair day...' + request.url); 
}

var serverTwo = http.createServer(handleSecond);

serverTwo.listen(PORT2, function (){
	console.log("Server listening on: http:// localhost:%s", PORT2);
}); 