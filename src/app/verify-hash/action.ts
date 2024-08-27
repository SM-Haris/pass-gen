"use server";

import { hashVerifySchema } from "@/lib/schemas";
import { getHash } from "@/lib/utils/hashUtils";
import { createServerAction } from "zsa";

export const verifyHash = createServerAction()
  .input(hashVerifySchema)
  .handler(({ input }) => {
    if (input.hashType.startsWith("HMAC") && !input.secretKey) {
      throw new Error("This Hash Type requires a secret key");
    }

    const computedHash = getHash(input.hashType, input.text, input.secretKey);

    if (!computedHash) {
      throw new Error("Something went wrong Hash could not be generated");
    }

    if (computedHash !== input.storedHash) {
      return "Hash does not match";
    }

    return "Hash Matches"
  });
