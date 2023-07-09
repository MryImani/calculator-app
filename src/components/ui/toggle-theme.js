
import { useContext, useEffect } from "react";
import ThemeContext from "../../store/theme-context";
export default function ToggleTheme(props) {
  const themeCtx = useContext(ThemeContext);
  function changeHandler(e) {
    const themeId = e.target.id;
    if(themeId === 'theme1')
    {
     themeCtx.setTheme(1);
    }
    if (themeId === "theme2") {
       themeCtx.setTheme(2);
    }
     if (themeId === "theme3") {
       themeCtx.setTheme(3);
     }
     
  }
  return (
    <div className="">
      <label
        htmlFor="toggleB"
        className="d-flex align-baseline  cursor-pointer position-relative "
      >
        <div className=" d-flex align-items-end ">
          <p
            className={
              themeCtx.theme === 1
                ? " fw-semibold m-0 white"
                : themeCtx.theme === 2
                ? " fw-semibold m-0 dark-grayish-yellow"
                : themeCtx.theme === 3
                ? " fw-semibold m-0 light-yellow"
                : " fw-semibold m-0 "
            }
          >
            THEME
          </p>
        </div>
        <div className="relative d-flex ms-3 ">
          <div
            className={
              themeCtx.theme === 1
                ? "d-flex flex-column ms-2 theme1 "
                : themeCtx.theme === 2
                ? "d-flex flex-column ms-2 theme2"
                : themeCtx.theme === 3
                ? "d-flex flex-column ms-2 theme3"
                : "d-flex flex-column ms-2"
            }
          >
            <label
              htmlFor="theme1"
              className={
                themeCtx.theme === 1
                  ? "white"
                  : themeCtx.theme === 2
                  ? " dark-grayish-yellow"
                  : themeCtx.theme === 3
                  ? "light-yellow"
                  : " "
              }
            >
              1
            </label>
            <input
              type="radio"
              id="theme1"
              name="theme"
              className="sr-only z-2  mt-1 "
              onChange={changeHandler}
            />
          </div>
          <div
            className={
              themeCtx.theme === 1
                ? "d-flex flex-column ms-2 theme1 "
                : themeCtx.theme === 2
                ? "d-flex flex-column ms-2 theme2"
                : themeCtx.theme === 3
                ? "d-flex flex-column ms-2 theme3"
                : "d-flex flex-column ms-2"
            }
          >
            <label
              htmlFor="theme2"
              className={
                themeCtx.theme === 1
                  ? "white"
                  : themeCtx.theme === 2
                  ? " dark-grayish-yellow"
                  : themeCtx.theme === 3
                  ? "light-yellow"
                  : " "
              }
            >
              2
            </label>
            <input
              type="radio"
              id="theme2"
              name="theme"
              className="sr-only z-2 mt-1 "
              onChange={changeHandler}
            />
          </div>
          <div className={
              themeCtx.theme === 1
                ? "d-flex flex-column ms-2 theme1 "
                : themeCtx.theme === 2
                ? "d-flex flex-column ms-2 theme2"
                : themeCtx.theme === 3
                ? "d-flex flex-column ms-2 theme3"
                : "d-flex flex-column ms-2"
            }>
            <label
              htmlFor="theme3"
              className={
                themeCtx.theme === 1
                  ? "white"
                  : themeCtx.theme === 2
                  ? " dark-grayish-yellow"
                  : themeCtx.theme === 3
                  ? "light-yellow"
                  : " "
              }
            >
              3
            </label>
            <input
              type="radio"
              id="theme3"
              name="theme"
              className="sr-only z-2  mt-1 "
              onChange={changeHandler}
            />
          </div>
          <div
            className={
              themeCtx.theme === 1
                ? "absolute-div bg-keypad-theme1"
                : themeCtx.theme === 2
                ? "absolute-div bg-keypad-theme2"
                : themeCtx.theme === 3
                ? "absolute-div bg-keypad-theme3"
                : "absolute-div "
            }
          ></div>
        </div>
      </label>
    </div>
  );
}
