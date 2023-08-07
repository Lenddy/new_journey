const express = require("express"); //importing express
const expressGraphQL = require("express-graphql").graphqlHTTP; //importing express-GraphQL

const app = express(); //initializing express using the app variable
const port = 5000; // givin a port

app.use(
	"/graphql",
	expressGraphQL({
		//telling the server were to run
		graphiql: true, //this give you a user interface so you dont need to use postman
	})
);

// app.listen is to show you that the server is running
// this is the en of the line dot put noting bellow this lines unless is a web socket
app.listen(port, () =>
	console.log("listen on port", port, "http://localhost:5000")
);
