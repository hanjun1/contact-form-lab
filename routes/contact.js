let express = require("express");
let router = express.Router();

let contactCtrl = require("../controllers/contact");

router.get("/", contactCtrl.index);
router.post("/", contactCtrl.submitMessage);
router.get("/showall", contactCtrl.show);
router.get("/:id/thankyou", contactCtrl.thankYouMessage);

module.exports = router;
