import { NextApiRequest, NextApiResponse } from "next";
import { decryptText } from "@/app/utils/passwordUtils";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { encryptedText, secretKey, encryptionType } = req.query;

  if (!encryptedText || !secretKey || !encryptionType) {
    return res
      .status(400)
      .json({
        error: "Missing encryptedText, secretKey, or encryptionType parameter",
      });
  }

  const decryptedText: string = decryptText(
    encryptionType,
    encryptedText,
    secretKey
  );

  if (!decryptedText) {
    return res.status(400).json({ error: "Failed to decrypt text" });
  }

  return res.status(200).json({ decryptedText });
}
