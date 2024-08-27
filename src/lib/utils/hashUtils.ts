import CryptoJS from "crypto-js";

export const getHash = (hashType:string | string[], text:string | string[], secretKey?:string | string[] | null) => {
    let hashedText

    switch (hashType) {
        case "MD5":
          hashedText = CryptoJS.MD5(text as string).toString();
          break;
        case "SHA1":
          hashedText = CryptoJS.SHA1(text as string).toString();
          break;
        case "SHA224":
          hashedText = CryptoJS.SHA224(text as string).toString();
          break;
        case "SHA256":
          hashedText = CryptoJS.SHA256(text as string).toString();
          break;
        case "SHA384":
          hashedText = CryptoJS.SHA384(text as string).toString();
          break;
        case "SHA512":
          hashedText = CryptoJS.SHA512(text as string).toString();
          break;
        case "SHA3":
          hashedText = CryptoJS.SHA3(text as string).toString();
          break;
        case "RIPEMD160":
          hashedText = CryptoJS.RIPEMD160(text as string).toString();
          break;
        case "HMACMD5":
          hashedText = CryptoJS.HmacMD5(
            text as string,
            secretKey as string
          ).toString();
          break;
        case "HMACSHA1":
          hashedText = CryptoJS.HmacSHA1(
            text as string,
            secretKey as string
          ).toString();
          break;
        case "HMACSHA224":
          hashedText = CryptoJS.HmacSHA224(
            text as string,
            secretKey as string
          ).toString();
          break;
        case "HMACSHA256":
          hashedText = CryptoJS.HmacSHA256(
            text as string,
            secretKey as string
          ).toString();
          break;
        case "HMACSHA384":
          hashedText = CryptoJS.HmacSHA384(
            text as string,
            secretKey as string
          ).toString();
          break;
        case "HMACSHA512":
          hashedText = CryptoJS.HmacSHA512(
            text as string,
            secretKey as string
          ).toString();
          break;
        case "HMACSHA3":
          hashedText = CryptoJS.HmacSHA3(
            text as string,
            secretKey as string
          ).toString();
          break;
        case "HMACRIPEMD160":
          hashedText = CryptoJS.HmacRIPEMD160(
            text as string,
            secretKey as string
          ).toString();
          break;
        default:
          return ""
      }

    return hashedText
}

