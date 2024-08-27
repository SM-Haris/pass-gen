"use server";

import { encryptionSchema } from "@/lib/schemas";
import { decryptText } from "@/lib/utils/passwordUtils";
import { createServerAction } from "zsa";

export const decryptTextAction = createServerAction()
  .input(encryptionSchema)
  .handler(async ({ input }) => {
    const decryptedText: string = decryptText(
      input.encryptionType,
      input.text,
      input.secretKey
    );

    if (!decryptedText && typeof decryptedText === "string") {
      throw new Error("Something went wrong text could not be decrypted");
    }

    return decryptedText;
  });
