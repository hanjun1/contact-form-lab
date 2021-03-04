module.exports = {
  getSubmittedForms,
  addSubmission,
};

let submittedForms = [];

function getSubmittedForms() {
  return submittedForms;
}

function addSubmission(name, email, message) {
  let id = submittedForms.length + 1;
  let submission = {
    id,
    name,
    email,
    message,
  };
  submittedForms.push(submission);
}
