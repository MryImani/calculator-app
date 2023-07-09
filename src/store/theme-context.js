import { createContext, useState } from "react";

const ThemeContext = createContext({
 theme : 1,
  setTheme: () => {},
});

export function ThemeContextProvider(props) {
  const [theme, setThemeActive] = useState();


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
