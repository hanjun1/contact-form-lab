const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const submissionsSchema = new Schema(
  {
    name: String,
    email: String,
    message: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Submissions", submissionsSchema);

// module.exports = {
//   getSubmittedForms,
//   addSubmission,
// };

// let submittedForms = [];

// function getSubmittedForms() {
//   return submittedForms;
// }

// function addSubmission(name, email, message) {
//   let id = submittedForms.length + 1;
//   let submission = {
//     id,
//     name,
//     email,
//     message,
//   };
//   submittedForms.push(submission);
// }
