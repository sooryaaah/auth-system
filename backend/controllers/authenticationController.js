const users = require("../db/users")
const bcrypt = require('bcrypt')

exports.signUp = async (req,res) => {
    try {
       let body = req.body;
       let userName = body.username;
       if(!userName){
        return res.status(400).send({
            success: false,
            message: "Please enter your name"
        })
       }
       let email = body.email;
       if(!email){
        return res.status(400).send({
            success: false,
            message: "Please enter your email"
        })
       }
       let password = body.password;
       if(!password){
        return res.status(400).send({
            success: false,
            message: "Please enter your password"
        })
       }

       const userEmail = await users.findOne({
        email
       })

       if(userEmail){
        return res.status(400).send({
            success: false,
            message: "email already exists"
        })
       }

       const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);


        let newUser = {
            name:userName,
            email,
            password: hashedPassword
        }

        const addUser = await users.create(newUser);

        return res.status(400).send({
            success: true,
            message: "successfully signed up"
        })




        
    } catch (error) {
        console.log("error while signing up: ",error)
        return res.status(200).send({
            success: false,
            message: error.message || error
        })
    }
}

