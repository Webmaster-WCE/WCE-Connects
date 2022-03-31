const express = require('express');
const router = express.Router();

const { signin, signup, forgotpassword, resetpassword, reset_password } = require("../controllers/userLogin");

router.post("/signin", signin);
router.post("/signup", signup);
router.post("/forgot-password", forgotpassword);
router.get("/reset-password/:id/:token", resetpassword);
router.post("/reset-password/:id/:token", reset_password);

module.exports = router;