/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "light") {
      document.body.style.backgroundColor = "hsl(0, 0%, 98%)";
    } else {
      document.body.style.backgroundColor = "hsl(207, 26%, 17%)";
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
