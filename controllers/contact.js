module.exports = {
  index,
  submitMessage,
  thankYouMessage,
};

const SubmittedForms = require("../models/contact");

function index(req, res) {
  res.render("contact/index");
}

function submitMessage(req, res) {
  SubmittedForms.addSubmission(req.body.name, req.body.email, req.body.message);
  res.redirect("/contactus/thankyou");
}

function thankYouMessage(req, res) {
  res.render("contact/thankyou", {
    response: SubmittedForms.getSubmittedForms(),
  });
}
