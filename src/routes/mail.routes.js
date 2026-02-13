const express = require('express');
const { sendConfirmationMail } = require('../controllers/mail.controller');

const router = express.Router();

router.post('/send-confirmation', sendConfirmationMail);

module.exports = router;
