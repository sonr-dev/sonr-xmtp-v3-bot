import { Client } from "@xmtp/node-sdk";
import { Wallet } from "ethers";

export async function createXMTPClient(privateKey) {
  // Wallet erzeugen
  const wallet = new Wallet(privateKey);

  // XMTP V3 Client erzeugen
  const client = await Client.create(wallet, {
    env: "production",
    dbEncryptionKey: Client.randomBytes(32)
  });

  console.log("🔥 XMTP V3 connected:", client.address);

  return client;
}
