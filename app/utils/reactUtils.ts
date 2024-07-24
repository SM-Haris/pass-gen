export const getCheckboxLabel = (value: string) => {
  switch (value) {
    case "includeUppercase":
      return "Include Uppercase Letters";
    case "includeLowercase":
      return "Include Lowercase Letters";
    case "includeNumbers":
      return "Include Numbers";
    case "includeSymbols":
      return "Include Symbols";
  }
};
