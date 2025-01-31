const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello world");
});

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://mostakin:mostakin+820336@cluster0.ebhk8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function insertData() {
  await client.connect();
  const collection = client.db("Test").collection("users");

  app.post("/users", async (req, res) => {
    const data = req.body;
    const response = await collection.insertOne(data);
    res.send(response);
    collection.insertOne(data);
  });
}

insertData();

app.listen(3500, () => {
  console.log("server is running");
});

//extra code for js showing in github
//extra code for js showing in github

// const express = require("express");
// const app = express();
// const cors = require("cors");
// app.use(cors());
// app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("hello world");
// });

// const { MongoClient, ServerApiVersion } = require("mongodb");
// const uri =
//   "mongodb+srv://mostakin:mostakin+820336@cluster0.ebhk8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

// async function insertData() {
//   await client.connect();
//   const collection = client.db("Test").collection("users");

//   app.post("/users", async (req, res) => {
//     const data = req.body;
//     const response = await collection.insertOne(data);
//     res.send(response);
//     collection.insertOne(data);
//   });
// }

// insertData();

// app.listen(3500, () => {
//   console.log("server is running");
// });

// const express = require("express");
// const app = express();
// const cors = require("cors");
// app.use(cors());
// app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("hello world");
// });

// const { MongoClient, ServerApiVersion } = require("mongodb");
// const uri =
//   "mongodb+srv://mostakin:mostakin+820336@cluster0.ebhk8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

// async function insertData() {
//   await client.connect();
//   const collection = client.db("Test").collection("users");

//   app.post("/users", async (req, res) => {
//     const data = req.body;
//     const response = await collection.insertOne(data);
//     res.send(response);
//     collection.insertOne(data);
//   });
// }

// insertData();

// app.listen(3500, () => {
//   console.log("server is running");
// });
