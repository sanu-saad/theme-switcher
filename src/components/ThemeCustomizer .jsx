import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const ThemeCustomizer = () => {
  const { theme, toggleThemeMode, setCustomColor } = useContext(ThemeContext);
  const toggleButtonLabel = theme.mode === "light" ? "Dark Mode" : "Light Mode";
  return (
    <div className="nav">
      <div>
        <button onClick={toggleThemeMode}>{toggleButtonLabel}</button>
      </div>

      <div className="flex">
        <div>
          <p>Set Bg Color:</p>
          <input
            type="color"
            value={theme.backgroundColor}
            onChange={(e) =>
              setCustomColor("--background-color", e.target.value)
            }
          />
        </div>

        <div>
          <p>Set Text Color:</p>
          <input
            type="color"
            value={theme.textColor}
            onChange={(e) => setCustomColor("--text-color", e.target.value)}
          />
        </div>

        <div>
          <p>Set Button Color:</p>
          <input
            type="color"
            value={theme.buttonColor}
            onChange={(e) => setCustomColor("--button-color", e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default ThemeCustomizer;
