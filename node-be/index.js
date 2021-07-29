const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const passport = require('passport');
const cors = require("cors");

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger');
const swaggerJsdoc = require("swagger-jsdoc");


const PORT = process.env.PORT || 5000;


// Create Express Server
const app = express();

// Registering CORS
app.use( cors() );

// Configure body parser
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(bodyParser.json({ limit: '50mb', extended: true }));

// Initialize passport
app.use(passport.initialize());
app.use(passport.session());

// Configire morgan for logging
app.use(morgan("dev")); 

// define first route
app.get("/", (req, res) => {
  return res.status(200).json({
    ok: true,
    msg: 'Welcome to WebApp Service 01'
});
});

// Insert API documentation
const specs = swaggerJsdoc(swaggerDocument);
app.use( '/api-docs', swaggerUi.serve, swaggerUi.setup(specs));


app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`);
});


