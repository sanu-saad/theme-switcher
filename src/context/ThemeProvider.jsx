import React, { useState, useEffect, useCallback } from "react";
import ThemeContext from "./ThemeContext";

const defaultTheme = {
  mode: "light",
  backgroundColor: "white",
  textColor: "black",
  buttonColor: "#6200EE",
};

const ThemeProvider = ({ children }) => {
  const storedTheme = localStorage.getItem("user-theme");
  const initialTheme = storedTheme ? JSON.parse(storedTheme) : defaultTheme;

  const [theme, setTheme] = useState(initialTheme);

  const toggleThemeMode = useCallback(() => {
    const newMode = theme.mode === "light" ? "dark" : "light";
    const newTheme = { ...theme, mode: newMode };

    setTheme(newTheme);
    localStorage.setItem("user-theme", JSON.stringify(newTheme)); // Store in localStorage
  }, [theme]);

  // Function to set custom color for a CSS variable
  const setCustomColor = useCallback(
    (property, color) => {
      const newTheme = { ...theme, [property]: color };
      setTheme(newTheme);

      // Apply the custom color to the CSS variable
      document.documentElement.style.setProperty(property, color);

      // Store the updated theme in localStorage
      localStorage.setItem("user-theme", JSON.stringify(newTheme));
    },
    [theme]
  );

  // Apply the appropriate theme class to the document body based on the mode
  useEffect(() => {
    document.body.className = theme.mode === "dark" ? "dark-theme" : "";
  }, [theme.mode]);

  return (
    <ThemeContext.Provider value={{ theme, toggleThemeMode, setCustomColor }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
