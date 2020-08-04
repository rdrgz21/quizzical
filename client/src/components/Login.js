import React, { Component } from 'react';
// express = require('express')
// router = express.Router();


export default class Login extends Component {
    state = {
        test: "Bananas"
    }

    // router.route('/login').post((req, res, next) => {
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


    render() {
        return (
            <div>
                <h1>Login</h1>
                <form>
                    <input type="string" placeholder="Username..." name="userName"/><br />
                    <input type="email" placeholder="Email..." name="userEmail" /><br />
                    <input type="password" placeholder="Password..." name="userPassword"/><br />
                    <button type="submit">Login</button>

                </form>
        </div>
    )
}
}