"use server";

import { encryptionSchema } from "@/lib/schemas";
import { encryptText } from "@/lib/utils/passwordUtils";
import { createServerAction } from "zsa";

export const encryptTextAction = createServerAction()
  .input(encryptionSchema)
  .handler(async ({ input }) => {
    const encryptedText: string = encryptText(
      input.encryptionType,
      input.text,
      input.secretKey
    );

    if (!encryptedText && typeof encryptedText === "string") {
      throw new Error("Something went wrong text could not be encrypted");
    }

    return encryptedText;
  });
