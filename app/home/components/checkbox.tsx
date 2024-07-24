"use client";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../stores";
import {
  PasswordOptions,
  updatePasswordOptions,
} from "../../stores/passwordSlice";
import { getCheckboxLabel } from "../../utils/reactUtils";

export interface CheckboxParams {
  option: keyof Omit<PasswordOptions, "length">;
}

const OptionCheckbox: React.FC<CheckboxParams> = ({ option }) => {
  const { passwordOptions } = useSelector((state: RootState) => state.password);
  const dispatch = useDispatch<AppDispatch>();

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      updatePasswordOptions({ type: option, value: event.target.checked })
    );
  };

  return (
    <label className="flex items-center">
      <input
        type="checkbox"
        name="includeUppercase"
        checked={passwordOptions[option]}
        onChange={handleCheckboxChange}
        className="mr-2"
      />
      {getCheckboxLabel(option)}
    </label>
  );
};

export default OptionCheckbox;
