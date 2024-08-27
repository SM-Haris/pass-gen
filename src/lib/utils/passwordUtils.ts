import CryptoJS from "crypto-js";
import { PasswordOptions } from "../types";

// Helper function to build character set based on options
export const buildCharacterSet = (options: PasswordOptions): string => {
  let charset = "";
  if (options.includeUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (options.includeLowercase) charset += "abcdefghijklmnopqrstuvwxyz";
  if (options.includeNumbers) charset += "0123456789";
  if (options.includeSymbols) charset += "!@#$%^&*()_+-=[]{}|;:'\",./<>?";
  return charset;
};

export const generatePasswordUtil = (options: PasswordOptions): string => {
  const charset = buildCharacterSet(options);
  const passwordLength = options.length;

  // Generate a random array of indices within the character set length
  const randomIndices = Array.from({ length: passwordLength }).map(() =>
    Math.floor(Math.random() * charset.length)
  );

  // Use the random indices to pick characters from the charset
  const generatedPassword = randomIndices
    .map((index) => charset[index])
    .join("");

  return generatedPassword;
};

export const decryptText = (
  encryptionType: string | string[],
  encryptedText: string | string[],
  secretKey: string | string[]
) => {
  let decryptedText: string;
  switch (encryptionType) {
    case "AES":
      const aesBytes = CryptoJS.AES.decrypt(
        encryptedText as string,
        secretKey as string
      );
      decryptedText = aesBytes.toString(CryptoJS.enc.Utf8);
      break;
    case "DES":
      const desBytes = CryptoJS.DES.decrypt(
        encryptedText as string,
        secretKey as string
      );
      decryptedText = desBytes.toString(CryptoJS.enc.Utf8);
      break;
    case "TripleDES":
      const tripleDesBytes = CryptoJS.TripleDES.decrypt(
        encryptedText as string,
        secretKey as string
      );
      decryptedText = tripleDesBytes.toString(CryptoJS.enc.Utf8);
      break;
    case "Rabbit":
      const rabbitBytes = CryptoJS.Rabbit.decrypt(
        encryptedText as string,
        secretKey as string
      );
      decryptedText = rabbitBytes.toString(CryptoJS.enc.Utf8);
      break;
    case "RC4":
      const rc4Bytes = CryptoJS.RC4.decrypt(
        encryptedText as string,
        secretKey as string
      );
      decryptedText = rc4Bytes.toString(CryptoJS.enc.Utf8);
      break;
    case "RC4Drop":
      const rc4DropBytes = CryptoJS.RC4Drop.decrypt(
        encryptedText as string,
        secretKey as string
      );
      decryptedText = rc4DropBytes.toString(CryptoJS.enc.Utf8);
      break;
    default:
      return "";
  }

  return decryptedText;
};

export const encryptText = (
  encryptionType: string | string[],
  text: string | string[],
  secretKey: string | string[]
) => {
  let encryptedText: string;
  switch (encryptionType) {
    case 'AES':
      encryptedText = CryptoJS.AES.encrypt(text as string, secretKey as string).toString();
      break;
    case 'DES':
      encryptedText = CryptoJS.DES.encrypt(text as string, secretKey as string).toString();
      break;
    case 'TripleDES':
      encryptedText = CryptoJS.TripleDES.encrypt(text as string, secretKey as string).toString();
      break;
    case 'Rabbit':
      encryptedText = CryptoJS.Rabbit.encrypt(text as string, secretKey as string).toString();
      break;
    case 'RC4':
      encryptedText = CryptoJS.RC4.encrypt(text as string, secretKey as string).toString();
      break;
    case 'RC4Drop':
      encryptedText = CryptoJS.RC4Drop.encrypt(text as string, secretKey as string).toString();
      break;
    default:
      return ""
  }

  return encryptedText
}


