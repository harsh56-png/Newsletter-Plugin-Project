const express = require('express');
const { createServer } = require("http");

// initialize express app
const app = express();

const userRouter = require('./routers/userRouter');
const subscriberRouter = require('./routers/subscriberRouter');
const newsletterRouter = require('./routers/newsletterRouter');
const cors = require('cors');

// this is a middleware function
app.use(express.json());
// allowing frontend to acces backend
app.use(cors({ origin: ['http://localhost:3000'] }));

app.use('/user', userRouter);
app.use('/newsubscriber', subscriberRouter);
app.use('/newslettercontent', newsletterRouter);

const port = 5000;

app.get('/', (req, res) => {
    res.send('Express Says Hello!');
})
app.get('/home', (req, res) => {
    res.send('Express Says Hello from Home!');
})

// to start server
app.listen(port, () => {console.log("server started  at port 5000");});