"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";

interface HashFormValues {
  text: string;
  hashType: string;
  secretKey: string;
}

const HashEncryptForm: React.FC = () => {
  const [result, setResult] = useState("");
  const { register, handleSubmit } = useForm<HashFormValues>();
  const hashTypes = [
    "MD5",
    "SHA1",
    "SHA256",
    "SHA512",
    "MD5",
    "SHA1",
    "SHA224",
    "SHA256",
    "SHA384",
    "SHA512",
    "SHA3",
    "RIPEMD160",
    "HMACMD5",
    "HMACSHA1",
    "HMACSHA224",
    "HMACSHA256",
    "HMACSHA384",
    "HMACSHA512",
    "HMACSHA3",
    "HMACRIPEMD160",
  ];

  const handleHash = async (data: HashFormValues) => {
    const { text, hashType, secretKey } = data;

    const response = await fetch(
      `/api/hash?text=${text}&hashType=${hashType}&secretKey=${secretKey}`
    );
    console.log("helloo",response)

    const responseJson = await response.json();
    if (responseJson.error) {
      console.error(responseJson.error);
      setResult("Error hashing text");
      return;
    }

    setResult(responseJson.hashedText);
  };

  return (
    <>
      <form onSubmit={handleSubmit(handleHash)}>
        <div className="mb-4">
          <label htmlFor="text" className="block text-white font-bold mb-2">
            Text
          </label>
          <input
            type="text"
            id="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            {...register("text")}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="hashType" className="block text-white font-bold mb-2">
            Hash Type
          </label>
          <select
            id="hashType"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            {...register("hashType")}
          >
            {hashTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label
            htmlFor="secretKey"
            className="block text-white font-bold mb-2"
          >
            Secret Key
          </label>
          <input
            type="text"
            id="secretKey"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            {...register("secretKey")}
            defaultValue="your_secret_key"
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Hash
          </button>
        </div>
      </form>

      <div className="mt-4">
        <p className="text-white">Result:</p>
        <pre className="bg-gray-100 p-4 rounded text-black">{result as string}</pre>
      </div>
    </>
  );
};

export default HashEncryptForm;
