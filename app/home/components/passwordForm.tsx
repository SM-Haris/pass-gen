import OptionCheckbox from "./checkbox";
import PasswordGenerator from "./passwordGenerator";
import Slider from "./slider";

const PasswordForm: React.FC = () => {
  const CheckboxOptions = [
    "includeUppercase",
    "includeLowercase",
    "includeNumbers",
    "includeSymbols",
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col space-y-4">
        <div className="border border-gray-300 rounded p-4">
          <h3 className="text-lg font-medium mb-2">Password Options</h3>
          <div className="flex flex-col space-y-2">
            {CheckboxOptions.map((option) => (
              <OptionCheckbox key={option} option={option as any} />
            ))}
            <Slider/>
          </div>
        </div>
        <PasswordGenerator />
      </div>
    </div>
  );
};

export default PasswordForm;
