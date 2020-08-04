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

//Register Code-------------------------------------------------||
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

    // await User.create(
    //     {
    //         name: name,
    //         email: email,
    //         password: hashedPassword
    //     }
    // )
    // res.send("User registered");

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
})
//Register Code---------------------------------------------------||


//Login Code------------------------------------------------------||
    // app.post('/login', async (req,res) => {

        //     const email = req.body.userEmail;
        //     const password = req.body.userPassword;
        
        //     const user = await User.find({ email: email });
        //     console.log( user );
            
        //     if( user.length > 0) {
        //         const isMatch = await bcrypt.compare(password, user[0].password)
        //         console.log( isMatch );
            
        //         if (isMatch) {
        
        //             const token = jwt.sign( {id: user[0]._id}, process.env.JWT_SECRET, {
        //                 expiresIn: process.env.JWT_EXPIRES_IN
        //             });
        
        //             console.log(token);
        
        //             const cookieOptions = {
        //                 expires: new Date(
        //                     Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000
        //                 ),
        //                 httpOnly: true
        //             }
        
        //             res.cookie('jwt', token, cookieOptions)
        
        //             res.send('Login successful');
        //         } else {
        //             res.send('Incorrect login details');
        //         }
        //     } else {
        //         res.send("Email address not registered");
        //     }
        // })
//Login Code------------------------------------------------------||

app.listen( 5000, () => {
    console.log("Server is running on port 5000");
});