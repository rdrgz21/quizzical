const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bcrypt = require('bcrypt');
const User = require('./models/user');

dotenv.config( { path: './.env' } );

const app = express();

app.use(express.urlencoded());
app.use(express.json());

mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})
.then(() => console.log("MongoDB is connected"));

app.get("/", (req, res) => {
    res.send("Hello from Nodejs");
    // res.render("http://localhost:3000/")
});

app.post("/register", async (req, res) => {
    console.log("Attempting to register");
    console.log(req.body);



    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    const hashedPassword = await bcrypt.hash(password, 8);

    // Add function to check if email already in use
    const otherUser = await User.find({ email: email});
    console.log(otherUser);

    if (otherUser.length > 0) {
        res.send("Sorry, that email is already in use");
    } else {
        await User.create(
            {
                name: name,
                email: email,
                password: hashedPassword
            }
        )
        res.send("User successfully registered");
    }
});

app.post("/results", async (req, res) => {
    console.log("Attempting to submit score and time");
    console.log(req.body);

    // Will need to update ID to refelect logged in user
    await User.findByIdAndUpdate("5f292b379a5c425ad4feafc8", req.body);

    res.send("Score and time submitted");

})

app.get("/leaderboard", async (req, res) => {
    console.log("Retrieving leaderboard data");

    // const allUsers = await User.find({ "score": { "$exists": true } }).sort({'score': 1});
    const allUsers = await User.find();
    res.send(allUsers);
})

app.listen( 5000, () => {
    console.log("Server is running on port 5000");
});