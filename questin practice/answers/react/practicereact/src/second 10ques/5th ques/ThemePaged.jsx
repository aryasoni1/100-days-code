import React from "react";
import { useTheme } from "./ThemeContext";

function ThemePaged() {
  const { theme, toggleTheme } = useTheme();
  const styles = {
    light: {
      backgroundColor: "#fff",
      color: "#000",
      padding: "20px",
    },
    dark: {
      backgroundColor: "#333",
      color: "#fff",
      padding: "20px",
    },
  };
  return (
    <div style={styles[theme]}>
      <h1>{theme.toUpperCase()} THEME</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}
export default ThemePaged;
