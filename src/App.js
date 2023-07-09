import "./App.css";
import ToggleTheme from "./components/ui/toggle-theme";
import { useState } from "react";
import ThemeContext from "./store/theme-context";
import { useContext } from "react";
import NumberKey from "./components/ui/number-key";
import DelKey from "./components/ui/del-key";
import RestKey from "./components/ui/rest-key";
import EqualKey from "./components/ui/equal-key";
function App() {
  const themeCtx = useContext(ThemeContext);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operator, setOperator] = useState(null);
  const [result, setResult] = useState(0);
  function handleClicked(value)
  {
    if (value === "DEL") {
    } else if (value === "REST") {
      setResult(0);
    } else if (value === "=") {
      setNum2(parseInt(result));
      switch (operator) {
        case "+":
          setResult(parseInt(num1) + parseInt(num2));
          break;

        case "-":
          setResult(parseInt(num1) - parseInt(num2));
          break;
        case "x":
          setResult(parseInt(num1) * parseInt(num2));
          break;
        case "/":
          setResult(parseInt(num1) / parseInt(num2));
          break;
        default:
          break;
      }
    } else if (value === "+") {
      setNum1(parseInt(result));
      setResult(0);
      setOperator("+")
    } else if (value === "-") {
      setNum1(parseInt(result));
      setResult(0);
      setOperator("-");
    } else if (value === "x") {
      setNum1(parseInt(result));
      setResult(0);
      setOperator("x");
    } else if (value === "/") {
      setNum1(parseInt(result));
      setResult(0);
      setOperator("/");
    }
    else{
 let tempResult = parseFloat(result);
 tempResult += value;
 setResult(tempResult);
    }
   
  }
  return (
    <div
      className={
        themeCtx.theme === 1
          ? "app bg-main-theme1"
          : themeCtx.theme === 2
          ? "app bg-main-theme2"
          : themeCtx.theme === 3
          ? "app bg-main-theme3"
          : "app"
      }
    >
      <div className=" container-md px-4  pt-5 ">
        <div className="content">
          <div className="row align-center pt-5 ">
            <div className="col-6">
              <h1
                className={
                  themeCtx.theme === 1
                    ? "fw-bold white"
                    : themeCtx.theme === 2
                    ? "fw-bold dark-grayish-yellow"
                    : themeCtx.theme === 3
                    ? "fw-bold light-yellow"
                    : "fw-bold"
                }
              >
                calc
              </h1>
            </div>
            <div className="col-6 d-flex justify-content-end ">
              <ToggleTheme theme={themeCtx.theme} />
            </div>
          </div>
          <div className="row mt-4 mb-2 ">
            <div
              className={
                themeCtx.theme === 1
                  ? "col rounded-3 text-end p-4 bg-screen-theme1"
                  : themeCtx.theme === 2
                  ? "col rounded-3 text-end p-4 bg-screen-theme2"
                  : themeCtx.theme === 3
                  ? "col rounded-3 text-end p-4 bg-screen-theme3"
                  : "col rounded-3 text-end p-4"
              }
            >
              <h1
                className={
                  themeCtx.theme === 1
                    ? "display-4 fw-bolder white"
                    : themeCtx.theme === 2
                    ? "display-4 fw-bolder dark-grayish-yellow"
                    : themeCtx.theme === 3
                    ? "display-4 fw-bolder light-yellow"
                    : "display-4 fw-bolder"
                }
              >
                {result}
              </h1>
            </div>
          </div>
          <div className="row mt-4">
            <div
              className={
                themeCtx.theme === 1
                  ? "col rounded-3 text-end p-4 bg-keypad-theme1 "
                  : themeCtx.theme === 2
                  ? "col rounded-3 text-end p-4 bg-keypad-theme2"
                  : themeCtx.theme === 3
                  ? "col rounded-3 text-end p-4 bg-keypad-theme3"
                  : "col rounded-3 text-end p-4"
              }
            >
              <div className="row">
                <div className="col d-flex justify-content-around  ">
                  <NumberKey
                    theme={themeCtx.theme}
                    value="7"
                    clicked={handleClicked}
                  />
                  <NumberKey
                    theme={themeCtx.theme}
                    value="8"
                    clicked={handleClicked}
                  />
                  <NumberKey
                    theme={themeCtx.theme}
                    value="9"
                    clicked={handleClicked}
                  />
                  <DelKey
                    theme={themeCtx.theme}
                    value="DEL"
                    clicked={handleClicked}
                  />
                </div>
              </div>
              <div className="row my-4 ">
                <div className="col d-flex justify-content-around  ">
                  <NumberKey
                    theme={themeCtx.theme}
                    value="4"
                    clicked={handleClicked}
                  />
                  <NumberKey
                    theme={themeCtx.theme}
                    value="5"
                    clicked={handleClicked}
                  />
                  <NumberKey
                    theme={themeCtx.theme}
                    value="6"
                    clicked={handleClicked}
                  />
                  <NumberKey
                    theme={themeCtx.theme}
                    value="+"
                    clicked={handleClicked}
                  />
                </div>
              </div>
              <div className="row my-4">
                <div className="col d-flex justify-content-around  ">
                  <NumberKey
                    theme={themeCtx.theme}
                    value="1"
                    clicked={handleClicked}
                  />
                  <NumberKey
                    theme={themeCtx.theme}
                    value="2"
                    clicked={handleClicked}
                  />
                  <NumberKey
                    theme={themeCtx.theme}
                    value="3"
                    clicked={handleClicked}
                  />
                  <NumberKey
                    theme={themeCtx.theme}
                    value="-"
                    clicked={handleClicked}
                  />
                </div>
              </div>
              <div className="row my-4">
                <div className="col d-flex justify-content-around  ">
                  <NumberKey
                    theme={themeCtx.theme}
                    value="."
                    clicked={handleClicked}
                  />
                  <NumberKey
                    theme={themeCtx.theme}
                    value="0"
                    clicked={handleClicked}
                  />
                  <NumberKey
                    theme={themeCtx.theme}
                    value="/"
                    clicked={handleClicked}
                  />
                  <NumberKey
                    theme={themeCtx.theme}
                    value="x"
                    clicked={handleClicked}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col d-flex justify-content-around  ">
                  <RestKey
                    theme={themeCtx.theme}
                    value="REST"
                    clicked={handleClicked}
                  />
                  <EqualKey
                    theme={themeCtx.theme}
                    value="="
                    clicked={handleClicked}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
