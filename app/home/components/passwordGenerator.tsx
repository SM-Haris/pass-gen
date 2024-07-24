"use client";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../stores";
import { generatePassword } from "../../stores/passwordSlice";

const PasswordGenerator: React.FC = () => {
  const { generatedPassword } = useSelector(
    (state: RootState) => state.password
  );
  const dispatch = useDispatch<AppDispatch>();

  const handlePasswordCopy = () => {
    navigator.clipboard.writeText(generatedPassword);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => dispatch(generatePassword())}
        className="bg-indigo-500 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 hover:bg-indigo-700 transition duration-300 ease-in-out"
      >
        Generate Password
      </button>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          readOnly
          value={generatedPassword}
          className="px-4 py-2 border text-black border-gray-300 rounded-md w-full focus:outline-none"
        />
        <button
          type="button"
          onClick={handlePasswordCopy}
          className="bg-blue-500 text-white px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 hover:bg-blue-700 transition duration-300 ease-in-out"
        >
          Copy
        </button>
        <button
          type="button"
          onClick={() => dispatch(generatePassword())}
          className="bg-green-500 text-white px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-700 hover:bg-green-700 transition duration-300 ease-in-out"
        >
          Regenerate
        </button>
      </div>
    </>
  );
};

export default PasswordGenerator;
