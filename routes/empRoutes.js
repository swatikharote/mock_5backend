const express = require("express");
const { EmpModel } = require("../model/empModel");
const empModel = require("../model/empModel");


const empRouter = express.Router();


empRouter.post("/addemp", async (req, res) => {
    const { first_name, last_name, email, salary, department } = req.body
    try {
        let emp = new EmpModel(req.body);
        await emp.save();
        res.json({ msg: "new emp has been added" })

    } catch (error) {
        res.json({ msg: error.massage })
    }


})



module.exports = { empRouter }