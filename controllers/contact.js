module.exports = {
  index,
  submitMessage,
  thankYouMessage,
  show,
};

const Submissions = require("../models/contact");

function index(req, res) {
  res.render("contact/index");
}

function submitMessage(req, res) {
  const submission = new Submissions(req.body);
  submission.save(function (err) {
    if (err) return res.render("contact/index");
    res.redirect(`/contactus/${submission.id}/thankyou`);
  });
}

function thankYouMessage(req, res) {
  Submissions.findById(req.params.id, function (err, submission) {
    res.render("contact/thankyou", { submission });
  });
}

function show(req, res) {
  Submissions.find({}, function (err, submissions) {
    res.render("contact/show", { submissions });
  });
}
