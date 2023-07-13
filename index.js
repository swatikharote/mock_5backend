const express = require("express");
const { userRouter } = require("./routes/userRouter")
const { connection } = require("./db");
const { empRouter } = require("./routes/empRoutes");
const cors = require("cors")


require("dotenv").config()


const app = express();
app.use(cors())
app.use(express.json());


app.use("/users", userRouter)
app.use("/employees", empRouter)


// app.get("/", (req, res) => {
//     res.json({ msg: "ok" })
// })

app.listen(process.env.port, async () => {
    try {
        await connection
        console.log("connected to db")

    } catch (error) {
        console.log("something went wrong")
    }
})