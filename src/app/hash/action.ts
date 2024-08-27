"use server";

import { hashEncryptSchema } from "@/lib/schemas";
import { getHash } from "@/lib/utils/hashUtils";
import { createServerAction } from "zsa";

export const createHash = createServerAction()
  .input(hashEncryptSchema)
  .handler(async ({ input }) => {
    if (input.hashType.startsWith("HMAC") && !input.secretKey) {
      throw new Error("This Hash Type requires a secret key");
    }

    const hashedText = getHash(input.hashType, input.text, input.secretKey);

    if (!hashedText) {
      throw new Error("Something went wrong Hash could not be generated");
    }

    return hashedText;
  });
