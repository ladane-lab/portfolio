const express = require('express');
const router  = express.Router();
const { handleNotify } = require('../controllers/contactController');

// POST /api/notify  — triggers WhatsApp notification via CallMeBot
router.post('/notify', handleNotify);

module.exports = router;
