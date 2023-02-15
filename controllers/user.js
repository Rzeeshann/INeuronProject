const user = require('../models/user')

const jwt = require("jsonwebtoken")

const token = require("jsonwebtoken")

// exports.postDetails = (req,res) => {
//     const {Name,Email,Number} = req.body
//     const userId = req.body.userId;
//     user.create({name:Name, emailid: Email, number: Number})
//     .then(result => {
//         userid.create({
//             userId:user.id,
//         })
       
//     })
//     res.status(201).json({success:true, message: "User Successfully Registered"}) 
//     .catch(error => {
//         res.status(500).json({success:false, message:error})
//     })
// }

exports.postDetails = (req, res, next) => {
    const {Name,Email,Number} = req.body
    user.create({name: Name, emailid: Email, number: Number})
    .then(result => {
      res.status(201).json({success: true, message: 'user susccesfully created'})// 201 - Data Creation
  })
  .catch(error => {
      console.log(error);
      res.status(500).json({success: false, message: error})
  })
  }

exports.getDetails = (req,res) => {
    user.findAll()
    .then(users => {
        res.status(200).json({data:users})
    })
    .catch(error => {
        res.status(500).json({success:false, message: error})
    })
}

exports.deleteUser = (req,res) => {
    const email = req.params.email
    user.findAll({where:{emailid:email}})
    .then(user => {
        if(!user){
            res.status(400).json({message:"user not found"})
        }else {
            user[0].destroy()
            ,then(response => {
                res.status(200).json({message:"successfully deleted"})
            })
        }
    })
    .catch(error => {
        res.status(500).json({success:false, message: error})
    })
}