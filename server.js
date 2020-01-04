const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const routes = require("./routes");
const mongoose = require("mongoose");
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
// const usersController = require("./controllers/usersController");
// app.use(usersController);

app.use(routes); //student
// app.use("/student", routes);
// app.use("/user", user);
// app.use("/api", routes);

// Connect to the Mongo DB and creates DB which will not show data until data is created
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/classroom", { useNewUrlParser: true , useUnifiedTopology: true });

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
