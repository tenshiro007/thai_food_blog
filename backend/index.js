const express = require("express");
const dotenv = require("dotenv").config();
const userRouter=require('./routes/user')
const categoryRouter=require('./routes/category')
const tagRouter=require('./routes/tag')
const postRouter=require('./routes/post')
const post_category=require('./routes/post_category')
const post_tag=require('./routes/post_tag')
const post_comment=require('./routes/post_comment')
const moregan=require('morgan')
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const {authMiddleware} = require('./middlewares/auth');
const app = express();

app.use(express.json());
app.use(moregan())

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Blog Api',
      version: '1.0.0',
      description: 'A sample Blog API',
    },
  },
  apis: ['./routes/*.js'],
};

const specs = swaggerJsdoc(options);
// console.log(JSON.stringify(specs, null, 2));
// Serve Swagger UI at /api-docs
app.use('/api', swaggerUi.serve, swaggerUi.setup(specs));

app.use('/user',userRouter)
app.use('/category',authMiddleware,categoryRouter)
app.use('/tag',authMiddleware,tagRouter)
app.use('/post',postRouter)
app.use('/post_comment',authMiddleware,post_comment)
app.use('/post_tag',authMiddleware,post_tag)
app.use('/post_category',authMiddleware,post_category)

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server run at port ${port}`);
});
