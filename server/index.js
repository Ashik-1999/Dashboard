const express = require('express')
const mongoose = require('mongoose')
const userRoute = require('./routes/userRouter')
const cors = require('cors')

const app = express()
app.use(express.json())

app.use(cors({
	origin:["http://localhost:3000"],
	method:["GET","POST"],
	credentials:true
  }))

mongoose.connect('mongodb://127.0.0.1:27017/goToDashboard')
.then(() => console.log("Database connected"))

app.use('/api/user', userRoute)

app.listen(8080, () => console.log("Server is running on port 8080")) 	