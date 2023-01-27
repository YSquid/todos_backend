const express = require('express');
const serverless = require('serverless-http')
require('dotenv').config();
// import routes
const todoRoutes = require('./routes/todo');
const cors = require('cors')

// Running express server
const app = express();
const port = process.env.PORT || 8000;
app.use(cors())

// route middlewares
app.get('/', (req, res) => {
  res.send("Home route for the app")
})
app.use('/api', todoRoutes);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening at http://localhost:${port}`);
});

module.exports.handler = serverless(app);