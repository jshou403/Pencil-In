const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const routes = require("./routes");
const user = require("./routes/users")
// const mongoose = require("mongoose");
const bodyParser = require('body-parser')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const passport = require('./routes/passport');
const dbConnection = require('./client/dbconnection') 
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(morgan('dev'))
app.use(
	bodyParser.urlencoded({
		extended: false
	})
)
app.use(bodyParser.json())
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Sessions
app.use(
  session({
  secret: 'fraggle-rock', //pick a random string to make the hash that is generated secure
  store: new MongoStore({ mongooseConnection: dbConnection }),
  resave: false, //required
  saveUninitialized: false //required
  })
)

// Passport
app.use(passport.initialize())
app.use(passport.session()) // calls serializeUser and deserializeUser

// Define API routes here
app.use("/user", user);
// app.use("/api", routes);
app.use(routes);

// Connect to the Mongo DB and creates DB which will not show data until data is created
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/classroom", { useNewUrlParser: true , useUnifiedTopology: true });

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
