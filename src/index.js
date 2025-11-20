import { createXMTPClient } from "./xmtp.js";

export async function startBot(privateKey) {
  const client = await createXMTPClient(privateKey);

  console.log("🚀 SONR Bot running (listening for messages)…");

  // XMTP V3: Alle eingehenden Nachrichten streamen
  for await (const msg of client.streamAllMessages()) {
    console.log("📩 Nachricht erhalten:", msg.content);

    // Eigene Nachrichten ignorieren
    if (msg.senderAddress === client.address) continue;

    // Testantwort – später ersetzen wir das durch SONR-Flow
    await msg.reply(
      "👋 Hallo! Ich bin der SONR Barsch-Bot (V3). Der Forecast-Flow kommt gleich!"
    );
  }
}
