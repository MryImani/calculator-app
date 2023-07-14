import "./App.css";
import ToggleTheme from "../components/ui/toggle-theme";
import { useState } from "react";
import ThemeContext from "../store/theme-context";
import { useContext } from "react";
import NumberKey from "../components/ui/number-key";
import DelKey from "../components/ui/del-key";
import RestKey from "../components/ui/rest-key";
import EqualKey from "../components/ui/equal-key";
var Parser = require("expr-eval").Parser;

export default function AppView() {
  const themeCtx = useContext(ThemeContext);
  const [state, setState] = useState({
    fullText: "0",
    result: "",
    operator: null,
    number1: null,
    number2: null,
  });
  const parseCalculate = (fullText) => {
    let finalResult = 0;
    finalResult = Parser.evaluate(fullText);
    return finalResult;
  };

  function digitClick(e) {
    let { fullText } = state;

    // If fullText is 0, then clear it
    if (fullText === "0.") {
      // fullText = "";
    } else if (parseFloat(fullText) === 0) {
      fullText = "";
    }

    fullText = fullText + e.toString();
    setState({ fullText });
  }

  function operationClick(e) {
    let { fullText } = state;
    fullText = fullText + e;
    setState({ fullText });
  }

  function restClick() {
    setState({ fullText : '0' });
  }
  function delClick() {
    let { fullText } = state;

    const length = fullText.length ; 
    if (length > 1) {
      fullText = fullText.substring(0, length - 1);
      setState({ fullText });
    }
    else{
      setState({ fullText : "0" });
    }
  }
  function equalClick() {
    try {
      let finalResult = parseCalculate(state.fullText);
      setState({
        fullText: finalResult.toString(),
      });
    } catch (error) {
      console.log("error", error);
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
                {state.result ? state.result : state.fullText}
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
                    clicked={digitClick}
                  />
                  <NumberKey
                    theme={themeCtx.theme}
                    value="8"
                    clicked={digitClick}
                  />
                  <NumberKey
                    theme={themeCtx.theme}
                    value="9"
                    clicked={digitClick}
                  />
                  <DelKey
                    theme={themeCtx.theme}
                    value="DEL"
                    clicked={delClick}
                  />
                </div>
              </div>
              <div className="row my-4 ">
                <div className="col d-flex justify-content-around  ">
                  <NumberKey
                    theme={themeCtx.theme}
                    value="4"
                    clicked={digitClick}
                  />
                  <NumberKey
                    theme={themeCtx.theme}
                    value="5"
                    clicked={digitClick}
                  />
                  <NumberKey
                    theme={themeCtx.theme}
                    value="6"
                    clicked={digitClick}
                  />
                  <NumberKey
                    theme={themeCtx.theme}
                    value="+"
                    clicked={operationClick}
                  />
                </div>
              </div>
              <div className="row my-4">
                <div className="col d-flex justify-content-around  ">
                  <NumberKey
                    theme={themeCtx.theme}
                    value="1"
                    clicked={digitClick}
                  />
                  <NumberKey
                    theme={themeCtx.theme}
                    value="2"
                    clicked={digitClick}
                  />
                  <NumberKey
                    theme={themeCtx.theme}
                    value="3"
                    clicked={digitClick}
                  />
                  <NumberKey
                    theme={themeCtx.theme}
                    value="-"
                    clicked={operationClick}
                  />
                </div>
              </div>
              <div className="row my-4">
                <div className="col d-flex justify-content-around  ">
                  <NumberKey
                    theme={themeCtx.theme}
                    value="."
                    clicked={digitClick}
                  />
                  <NumberKey
                    theme={themeCtx.theme}
                    value="0"
                    clicked={digitClick}
                  />
                  <NumberKey
                    theme={themeCtx.theme}
                    value="/"
                    clicked={operationClick}
                  />
                  <NumberKey
                    theme={themeCtx.theme}
                    value="*"
                    clicked={operationClick}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col d-flex justify-content-around  ">
                  <RestKey
                    theme={themeCtx.theme}
                    value="REST"
                    clicked={restClick}
                  />
                  <EqualKey
                    theme={themeCtx.theme}
                    value="="
                    clicked={equalClick}
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
