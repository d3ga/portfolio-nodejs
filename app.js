const path = require("path");
const fs = require("fs");
const https = require("https");
const express = require("express");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const routes = require("./routes/web");
const helpers = require("./helpers");
const errorHandlers = require("./handlers/errorHandlers");

// import environmental variables
require("dotenv").config({ path: "variables.env" });

// define SSL/TLS options
let tlsEnabled = false;
let tlsOptions = {};

if (
  process.env.SSL === "on" &&
  process.env.SSL_CERT != undefined &&
  process.env.SSL_KEY != undefined &&
  process.env.SSL_CERT != "" &&
  process.env.SSL_KEY != ""
) {
  tlsEnabled = true;

  try {
    tlsOptions = {
      key: fs.readFileSync(process.env.SSL_KEY),
      cert: fs.readFileSync(process.env.SSL_CERT)
    };

    if (process.env.SSL_CHAIN != undefined && process.env.SSL_CHAIN != "") {
      tlsOptions.ca = fs.readFileSync(process.env.SSL_CHAIN);
    }

    if (process.env.SSL_DHPARAM != undefined && process.env.SSL_DHPARAM != "") {
      tlsOptions.dhparam = fs.readFileSync(process.env.SSL_DHPARAM);
    }
  } catch (e) {
    console.error(`\n!!! ${e.message}\n`);
    console.error("=> SSL could not be enabled. Using fallback.\n");
    tlsEnabled = false;
  }
}

// create the app
const app = express();

// advance security with Helmet
app.use(helmet());

// set the template engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// load helpers
app.use((request, response, next) => {
  response.locals.helpers = helpers;
  response.locals.currentPath = request.path;
  next();
});

// serves up static files from the public folder. Anything in public/ will just be served up as the file it is
app.use(express.static(path.join(__dirname, "public")));
app.use(
  "/.well-known",
  express.static(path.join(__dirname, ".well-known"), {})
);

// takes the raw requests and turns them into usable properties on req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// set route handling
app.use("/", routes);

// if above routes didnt work, we 404 them and forward to error handler
app.use(errorHandlers.notFound);

// one of our error handlers will see if these errors are just validation errors
app.use(errorHandlers.flashValidationErrors);

// otherwise this was a really bad error we didn't expect!
if (app.get("env") === "development") {
  /* Development Error Handler - Prints stack trace */
  app.use(errorHandlers.developmentErrors);
}

// production error handler
app.use(errorHandlers.productionErrors);

// start the app
app.set("port", process.env.PORT || 7777);

if (tlsEnabled === true) {
  const server = https
    .createServer(tlsOptions, app)
    .listen(app.get("port"), () => {
      console.log(`Express running with TLS → PORT ${server.address().port}`);
    });
} else {
  const server = app.listen(app.get("port"), () => {
    console.log(`Express is running → PORT ${server.address().port}`);
  });
}
