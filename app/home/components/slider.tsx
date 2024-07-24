"use client";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../stores";
import { updatePasswordOptions } from "../../stores/passwordSlice";

const Slider: React.FC = () => {
  const { passwordOptions } = useSelector((state: RootState) => state.password);
  const dispatch = useDispatch<AppDispatch>();

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      updatePasswordOptions({ type: "length", value: Number(event.target.value) })
    );
  };

  return (
    <div className="flex items-center space-x-4">
      <label
        htmlFor="passwordLength"
        className="block text-sm font-medium mr-2"
      >
        Password Length
      </label>
      <input
        type="range"
        id="passwordLength"
        min={6}
        max={25}
        step={1}
        value={passwordOptions.length}
        onChange={handleSliderChange}
        className="w-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      />
      <span className="text-sm font-medium">{passwordOptions.length}</span>
    </div>
  );
};

export default Slider;
