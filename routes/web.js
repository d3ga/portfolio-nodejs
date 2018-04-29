const express = require("express");
const router = express.Router();
const { catchErrors } = require("../handlers/errorHandlers");
const ContactFormController = require("../controllers/ContactFormController");

// The main route
router.get("/", (request, response) => {
  response.render("home", {
    title: "d3ga",
    description:
      "Hello I am Kostas a junior full-stack web developer based in Berlin."
  });
});

router.post(
  "/contact",
  ContactFormController.validationRules,
  ContactFormController.errorHandling,
  catchErrors(ContactFormController.submitForm)
);
module.exports = router;
