const express = require('express'); // importing the express module and assigning it to the express variable
const bodyParser = require('body-parser'); // importing the body-parser module and assigning it to the bodyParser variable
require('dotenv').config(); // importing the dotenv module and calling the config method on it to load the environment variables from the .env file
const app = express(); // creating an express application and assigning it to the app variable
app.use(bodyParser.json()); // telling the app to use the json method of the body-parser module to parse the request body as JSON data

app.get('/get-blogs', async (req, res, next) => { // defining a route handler for the GET / route that sends a JSON response with a message property set
    try { // using a try block to catch any errors that occur when the code inside the block is executed and handle them in the catch block
        //ek bar hi to hai res.json here ????
        res.json({ 
            status:true,
            data:[{
                "id":1,
                "title":"first blog heading",
                "body":"blog description here"
                }],
            message: "success" }); // sending a JSON response with a message property set to "wow its working" when the route handler is called by a client request using the res.json method
    } catch (error) { // catching any errors that occur when the code inside the try block is executed
        next(error); // passing the error to the next middleware function in the request-response cycle using the next function to handle the error in the error-handling middleware function 
    }
});



app.post('/save-blog', async (req, res, next) => { // defining a route handler for the POST / route that sends a JSON response with a message property set
    try { // using a try block to catch any errors that occur when the code inside the block is executed and handle them in the catch block

        res.json({ data: req.body.title }); // sending a JSON response with a message property set to "wow its working" when the route handler is called by a client request using the res.json method
    } catch (error) { // catching any errors that occur when the code inside the try block is executed
        next(error); // passing the error to the next middleware function in the request-response cycle using the next function to handle the error in the error-handling middleware function
    }
});



const port = process.env.PORT || 8080; // defining the port number to be used by the server and assigning it to the port variable using the PORT environment variable or 8080 as the default value if the PORT environment variable is not set

app.listen(port, () => { // telling the app to listen on the port number defined by the port variable
    console.log(`Server Listening on port ${port}`); // logging a message to the console when the server starts listening on the port number defined by the port variable
});