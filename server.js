var express = require("express");
var app = express();
var cors = require("cors");
app.use(cors());

app.post("/", function(request, response){
    var x = request.query.name;
    response.send("Hello, " + x);
    console.log("Привет");

});
app.listen(3000, function(){
    console.log("Listen 3000");
});
