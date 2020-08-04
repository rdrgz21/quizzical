const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
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
    // const password2 = req.body.userPassword2;
    // const hashedPassword = await bcrypt.hash(password, 8);

    // Add function to check if email already in use
    // const otherUser = await User.find({ email: email});
    // console.log(otherUser);

    await User.create(
        {
            name: name,
            email: email,
            password: password
        }
    )
    res.send("User registered");

    // if (otherUser.length > 0) {
    //     res.render("register", {
    //         message: "Sorry, that email is already in use"
    //     });
    // } else if (password == password2) {
    //     await User.create(
    //         {
    //             name: name,
    //             email: email,
    //             password: hashedPassword
    //         }
    //     )
    //     res.render("register", {
    //         message: "User successfully registered"
    //     })
    // } else {
    //     res.render("register", {
    //         message: "Please ensure both passwords entered match"
    //     });
    // }
})

app.listen( 5000, () => {
    console.log("Server is running on port 5000");
});