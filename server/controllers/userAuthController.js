const User = require('../models/userSchema')
const bcrypt = require('bcrypt')

const userRegister = async(req, res) => {
    
    try {
        const {fullname, email, password} = req.body
        const userData = await User.findOne({email: email})
        if(userData) throw {mssg: "EmailID already exists"}
        else {
            const salt = await bcrypt.genSalt(10)
            const hashedPassword = await bcrypt.hash(password, salt)
            const newUser = new User({
                fullname: fullname,
                email: email,
                password: hashedPassword
            })
            const user = await newUser.save()
            res.status(200).json(user)
        }
    } catch (error) {
        let status = 500
        if(error.mssg) status = 400
        res.status(status).json(error.mssg)
    }
     
}

const userLogin = async(req,res)=>{
    const {email, password} = req.body

    try{
        
        const user = await User.findOne({email:email})
       
        if(!user) throw {mssg: "Email not found"}
       
        const validPassword = await bcrypt.compare(req.body.password,user.password);
        if(!validPassword) throw {mssg: "Incorrect password"}

        
        res.status(200).json({login:true})

    } catch(err){
        let status = 500
        if(err.mssg) status = 400
        res.status(status).json(err)
         
    } 
}

const checkEmail = async (req, res) => {
    const {email} = req.body
    console.log(email)
    try {
        const user = await User.findOne({email:email})
       if(!user) throw {mssg: "User not found"}
       res.status(200).json(user)
    } catch (error) {
        let status = 500
        if(error.mssg) status = 400
        res.status(status).json(error)
    }
}

const submitNewPassword = async(req, res) => {
   try {
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)
    const user = await User.updateOne({email:req.body.email}, {
        $set: {password: hashedPassword} 
    })
    res.status(200).json({mssg: "Password Updated Successfully"})
   } catch (error) {
        let status = 500
        res.status(status).json(error)
   }
}

module.exports = {
    userRegister,
    userLogin,
    checkEmail,
    submitNewPassword
}