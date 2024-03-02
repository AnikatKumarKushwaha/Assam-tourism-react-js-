const express = require("express");
require("./DB/config");
const Place = require("./DB/Place");
const Experience = require("./DB/Experiences");
const User = require("./DB/User");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

//////////////////////////////////////////authentication//////////////
app.post("/register", async (req, res) => {
  let user = new User(req.body);
  let result = await user.save();
  result = result.toObject();
  delete result.password;
  res.send(result);
});

app.post("/login", async (req, res) => {
  if (req.body.password && req.body.email) {
    const user = await User.findOne(req.body).select("-password");
    if (user) {
      res.send(user);
    } else {
      res.send({ message: "No user found" });
    }
  } else {
    res.send({ message: "enter the credential" });
  }
});

/////////////////////////////////////////places api//////////////////////////////////////////

app.get("/places", async (req, res) => {
  let places = await Place.find();

  if (places.length > 0) {
    res.send(places);
  } else {
    res.send({ message: "no result found" });
  }
});

app.delete("/places/delete/:_id", async (req, res) => {
  const data = await Place.findById(req.params._id);
  let result = await Place.deleteOne({ _id: req.params._id });

  res.send({ result: result, data: data });
});

app.post("/places/new", async (req, res) => {
  let places = new Place(req.body);
  let result = await places.save();
  res.send(result);
});

app.put("/places/update/:id", async (req, res) => {
  let result = await Place.updateOne(
    { _id: req.params.id },
    {
      $set: req.body,
    }
  );
  if (result.acknowledged) {
    res.send({ result: result, data: req.body });
  } else {
    res.send({ message: "cannot be updated something went wrong" });
  }
});

app.get("/place/:_id", async (req, res) => {
  let result = await Place.findById({ _id: req.params._id });
  if (result) {
    res.send(result);
  } else {
    res.send({ result: "no record found" });
  }
});
app.get("/search/:key", async (req, res) => {
  let result = await Place.find({
    $or: [{ name: { $regex: req.params.key } }],
  });
  res.send(result);
});

///////////////////////////////////////////////experiences api/////////////////////////////////////

app.get("/experiences", async (req, res) => {
  let experiences = await Experience.find();

  if (experiences.length > 0) {
    res.send(experiences);
  } else {
    res.send({ message: "no result found" });
  }
});

app.delete("/experience/delete/:_id", async (req, res) => {
  const data = await Experience.findById(req.params._id);
  let result = await Experience.deleteOne({ _id: req.params._id });

  res.send({ result: result, data: data });
});

app.post("/experience/new", async (req, res) => {
  let experience = new Experience(req.body);
  let result = await experience.save();
  res.send(result);
});

app.put("/experience/update/:id", async (req, res) => {
  let result = await Experience.updateOne(
    { _id: req.params.id },
    {
      $set: req.body,
    }
  );
  if (result.acknowledged) {
    res.send({ result: result, data: req.body });
  } else {
    res.send({ message: "cannot be updated something went wrong" });
  }
});

app.get("/experience/:_id", async (req, res) => {
  let result = await Experience.findById({ _id: req.params._id });
  if (result) {
    res.send(result);
  } else {
    res.send({ result: "no record found" });
  }
});

app.listen(4000);
