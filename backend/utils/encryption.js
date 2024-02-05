import crypto from "crypto";
import dotenv from "dotenv";
dotenv.config();

const algorithm = process.env.ENC_ALGO;
const key = process.env.ENC_KEY;
const iv = crypto.randomBytes(16);

export const encrypt = (text) => {
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  let encrypted = cipher.update(text, "utf8", "hex");
  encrypted += cipher.final("hex");
  const combined = iv.toString("hex") + ":" + encrypted;
  return combined;
};

export const decrypt = (encryptedData) => {
  const [ivHex, encryptedHex] = encryptedData.split(":");
  const iv = Buffer.from(ivHex, "hex");
  const encryptedText = Buffer.from(encryptedHex, "hex");
  const decipher = crypto.createDecipheriv(algorithm, key, iv);
  let decrypted = decipher.update(encryptedText, "hex", "utf8");
  decrypted += decipher.final("utf8");
  return decrypted;
};
