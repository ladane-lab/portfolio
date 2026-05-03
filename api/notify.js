export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const { name, email, subject, message } = req.body;

    // ── Basic validation ───────────────────────────────────
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return res.status(400).json({ success: false, message: 'Missing required fields.' });
    }

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
      console.warn('[Telegram] Credentials missing in environment variables.');
      // Return 200 because we don't want to break the frontend if only Telegram is unconfigured
      return res.status(200).json({ success: true, warning: 'Telegram not configured' });
    }

    // ── Format the message ─────────────────────────────────
    const telegramMessage = `🔔 *New Portfolio Message*
  
👤 *Name:* ${name.trim()}
✉️ *Email:* ${email.trim()}
📝 *Subject:* ${subject?.trim() || '(no subject)'}

💬 *Message:*
${message.trim()}`;

    // ── Send Telegram notification ────────────────────────
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: telegramMessage,
        parse_mode: 'Markdown',
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('[Telegram] Failed to send notification:', errorData);
      // Still return 200 to frontend to keep it non-blocking
      return res.status(200).json({ success: true, warning: 'Telegram delivery failed' });
    }

    console.log('[Telegram] Notification sent successfully');
    return res.status(200).json({ success: true });

  } catch (err) {
    console.error('[API Notify] Unexpected error:', err.message);
    return res.status(500).json({ success: false, message: 'Internal server error.' });
  }
}
