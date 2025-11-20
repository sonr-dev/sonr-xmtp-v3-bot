import { startBot } from "../src/index.js";

export default async function handler(req, res) {
  try {
    const key = process.env.BOT_PRIVATE_KEY;

    if (!key) {
      return res.status(500).json({ ok: false, error: "BOT_PRIVATE_KEY fehlt" });
    }

    startBot(key);

    res.status(200).json({ ok: true, message: "SONR V3 Bot started" });
  } catch (err) {
    res.status(500).json({ ok: false, error: err.message });
  }
}
