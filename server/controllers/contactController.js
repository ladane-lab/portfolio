const TelegramService = require('../services/telegramService');

/**
 * POST /api/notify
 * Receives form data from the frontend and sends a Telegram notification
 */
const handleNotify = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // ── Basic validation ───────────────────────────────────
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return res.status(400).json({ success: false, message: 'Missing required fields.' });
    }

    // ── Send Telegram notification (non-fatal if it fails) ─
    try {
      await TelegramService.sendTelegramNotification({
        name:    name.trim(),
        email:   email.trim(),
        subject: subject?.trim() || '(no subject)',
        message: message.trim(),
      });
    } catch (waErr) {
      // Log but do NOT fail the request — email via EmailJS already succeeded
      console.error('[handleNotify] Telegram notification failed:', waErr.message);
    }

    return res.status(200).json({ success: true });

  } catch (err) {
    console.error('[handleNotify] Unexpected error:', err.message);
    return res.status(500).json({ success: false, message: 'Internal server error.' });
  }
};

module.exports = { handleNotify };
