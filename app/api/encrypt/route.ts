import { NextApiRequest, NextApiResponse } from "next";
import CryptoJS from "crypto-js";
import { encryptText } from "@/app/utils/passwordUtils";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { text, secretKey, encryptionType } = req.query;

  if (!text || !secretKey || !encryptionType) {
    return res
      .status(400)
      .json({ error: "Missing text, secretKey, or encryptionType parameter" });
  }

  let encryptedText: string = encryptText(encryptionType, text, secretKey);

  if (!encryptedText) {
    return res.status(400).json({ error: "Failed to encrypt text" });
  }

  return res.status(200).json({ encryptedText });
}
