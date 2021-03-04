let express = require("express");
let router = express.Router();

let contactCtrl = require("../controllers/contact");

router.get("/", contactCtrl.index);
router.post("/", contactCtrl.submitMessage);
router.get("/thankyou", contactCtrl.thankYouMessage);

module.exports = router;
