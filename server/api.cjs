const express = require("express");
const cors = require("cors");
const mongoClient = require("mongodb").MongoClient;

const app = express();

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/get-categories", (req, res) => {
  mongoClient.connect("mongodb://localhost:27017").then((clientObj) => {
    var database = clientObj.db("Travel-Everywhere");
    database
      .collection("tblcategories")
      .find({})
      .toArray()
      .then((documents) => {
        res.send(documents);
        res.end();
      });
  });
});

app.get("/get-users", (req, res) => {
  mongoClient.connect("mongodb://localhost:27017").then((clientObj) => {
    var database = clientObj.db("Travel-Everywhere");
    database
      .collection("tblusers")
      .find({})
      .toArray()
      .then((documents) => {
        res.send(documents);
        res.end();
      });
  });
});

app.get("/get-admin", (req, res)=>{

      mongoClient.connect("mongodb://localhost:27017")
      .then(clientObj=>{
            var database = clientObj.db("Travel-Everywhere");
            database.collection("tbladmin").find({}).toArray().then(documents=>{
                  res.send(documents);
                  res.end();
            });
      });
});

app.post("/register-user", (req, res) => {
  var user = {
    user_id: req.body.user_id,
    user_name: req.body.user_name,
    password: req.body.password,
    mobile: req.body.mobile,
    email: req.body.email,
  };

  mongoClient.connect("mongodb://localhost:27017").then((clientObj) => {
    var database = clientObj.db("Travel-Everywhere");

    database
      .collection("tblusers")
      .insertOne(user)
      .then(() => {
        console.log("User Registered..");
        res.end();
      });
  });
});

app.listen(5050, ()=>{
  console.log(`API Started http://127.0.0.1:5050`);
});
