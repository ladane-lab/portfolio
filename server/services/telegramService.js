const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

/**
 * Sends a notification message to the configured Telegram Chat
 */
const sendTelegramNotification = async (data) => {
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    console.log('[Telegram] Credentials missing, skipping notification.');
    return;
  }

  // Format the message
  const message = `🔔 *New Portfolio Message*
  
👤 *Name:* ${data.name}
✉️ *Email:* ${data.email}
📝 *Subject:* ${data.subject}

💬 *Message:*
${data.message}`;

  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: 'Markdown',
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('[Telegram] Failed to send notification:', errorData);
      throw new Error('Telegram API error');
    }

    console.log('[Telegram] Notification sent successfully');
  } catch (error) {
    console.error('[Telegram] Error sending notification:', error);
    // Don't throw, we want it to be non-fatal
  }
};

module.exports = {
  sendTelegramNotification,
};
