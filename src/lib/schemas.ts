import * as z from "zod";
import { ENCRYPTION_TYPES } from "./constants/encryption";

export const hashEncryptSchema = z.object({
  text: z.string({ required_error: "Text is required" }),
  hashType: z.string({ required_error: "Hash Type is required" }),
  secretKey: z.string({ required_error: "Secret Key is required" }),
});

export const hashVerifySchema = hashEncryptSchema.merge(
  z.object({
    storedHash: z.string({ required_error: "Stored Hash is required" }),
  })
);

export const passwordSchema = z.object({
  includeUppercase: z.boolean(),
  includeLowercase: z.boolean(),
  includeNumbers: z.boolean(),
  includeSymbols: z.boolean(),
  length: z
    .number()
    .min(6, "Password length must be at least 6 characters")
    .max(25, "Password length must not exceed 25 characters"),
});

export const encryptionSchema = z.object({
  text: z.string().min(1, { message: "Text is required" }),
  encryptionType: z.enum(
    ["AES", "DES", "TripleDES", "Rabbit", "RC4", "RC4Drop"],
    { required_error: "Select an encryption type" }
  ),
  secretKey: z.string().min(1, { message: "Secret key is required" }),
});

