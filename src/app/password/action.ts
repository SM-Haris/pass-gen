"use server";

import { encryptionSchema, passwordSchema } from "@/lib/schemas";
import { decryptText, generatePasswordUtil } from "@/lib/utils/passwordUtils";
import { createServerAction } from "zsa";

export const generatePasswordAction = createServerAction()
  .input(passwordSchema)
  .handler(async ({ input }) => {
    const password: string = generatePasswordUtil(input);

    if (!password) {
      throw new Error("Something went wrong password could not be generated");
    }

    return password;
  });
