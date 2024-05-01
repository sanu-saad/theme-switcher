import { createContext } from "react";

const ThemeContext = createContext({
  theme: {},
  toggleThemeMode: () => {},
  setCustomColor: (property, color) => {},
});

export default ThemeContext;
