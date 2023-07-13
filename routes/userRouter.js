const express = require("express");
const { UserModel } = require("../model/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt")

const userRouter = express.Router();


userRouter.post("/signup", async (req, res) => {
    const { email, pass } = req.body
    console.log(req.body);

    try {
        bcrypt.hash(pass, 5, async (err, hash) => {

            if (err) {
                res.json({ msg: err.massage })
            }
            else {
                const user = new UserModel({ email, pass: hash })
                await user.save();
                res.json({ msg: "successfully resister" })
            }

        })


    } catch (error) {
        res.json({ msg: "something went wrong" })
    }

})



userRouter.post("/login", async (req, res) => {
    const { email, pass } = req.body
    try {
        const user = await UserModel.findOne({ email });
        if (user) {
            bcrypt.compare(pass, user.pass, (err, result) => {
                if (result) {
                    let token = jwt.sign({ userId: user._id }, "masai")
                    res.json({ msg: "login sunccessfull", token })
                }
                else {
                    res.json({ msg: "user does not exist" })
                }

            })
        }

    } catch (error) {
        res.json({ msg: error.massage })
    }

})

module.exports = ({ userRouter })