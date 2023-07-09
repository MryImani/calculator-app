import { createContext, useState } from "react";

const ThemeContext = createContext({
 theme : null,
  setTheme: () => {},
});

export function ThemeContextProvider(props) {
  const [theme, setThemeActive] = useState(1);


  function activeTheme(number) {
    setThemeActive(number);
  }

  const context = {
    theme: theme,
    setTheme: activeTheme,
  };
  return (
    <ThemeContext.Provider value={context}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
