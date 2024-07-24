import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  generatePasswordUtil,
} from "../utils/passwordUtils";

export interface PasswordOptions {
  includeUppercase: boolean;
  includeLowercase: boolean;
  includeNumbers: boolean;
  includeSymbols: boolean;
  length: number;
}

interface PasswordState {
  passwordOptions: PasswordOptions;
  generatedPassword: string;
  loading: boolean;
  error: string | null;
}

const initialPasswordState: PasswordOptions = {
  includeUppercase: true,
  includeLowercase: true,
  includeNumbers: true,
  includeSymbols: false,
  length: 8,
};

const initialState: PasswordState = {
  passwordOptions: initialPasswordState,
  generatedPassword: "",
  loading: false,
  error: null,
};

const passwordSlice = createSlice({
  name: "password",
  initialState,
  reducers: {
    updatePasswordOptions(
      state: PasswordState,
      action: PayloadAction<{
        type: keyof PasswordOptions;
        value: boolean | number;
      }>
    ) {
      const { type, value } = action.payload;
      switch (type) {
        case "includeUppercase":
        case "includeLowercase":
        case "includeNumbers":
        case "includeSymbols":
          state.passwordOptions[type] = value as boolean; // Cast to boolean for these options
          break;
        case "length":
          state.passwordOptions.length = Number(value); // Cast to number for length option
          console.log("here inside", state.passwordOptions.length);
          break;
        default: // Handle unexpected type (optional)
          console.error("Unexpected update type:", type);
      }
    },
    generatePassword(state: PasswordState) {
      state.loading = true; // Set loading to true
      state.error = null; // Clear any existing error

      try {
        state.generatedPassword = generatePasswordUtil(state.passwordOptions);
        state.loading = false; // Set loading to false after successful generation
      } catch (error) {
        console.error("Error generating password:", error);
        state.error = "An error occurred while generating password."; // Set error message
        state.loading = false; // Set loading to false even on error
      }
    },
  },
});

// Export the actions and reducer
export const { updatePasswordOptions, generatePassword } =
  passwordSlice.actions;
export default passwordSlice.reducer;
