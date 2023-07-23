const express = require("express");
const dotenv = require("dotenv").config();
const userRouter=require('./routes/user')

const app = express();

app.use(express.json());
app.use('/user',userRouter)

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server run at port ${port}`);
});
