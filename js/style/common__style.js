import styleCustomSelect from "./components/styleCustomSelect.js";
import headerStyle from "./../style/components/styleHeader.js";
import customScrollBar from "./components/styleCustomScrollBar.js";

const styles = `
  :root {
    --background-header: #00453e;
    --text-color: #cccccc;
    --white: #ffffff;
    --black: #000000;
    --medium: #555555;
    --main-font: "Montserrat", sans-serif;
    --second-fons: "Raleway", sans-serif;
    --triangle: hsl(0, 0%, 40%);
    --btn: #ffdfd7;
    --select: #e6e6e6;
    --border-select: #cdcdcd;
    --bg-trigger: #d4d4d4;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 16px;
    box-sizing: border-box;
    line-height: 1;
    letter-spacing: 0px;
    font-family: var(--main-font);
  }
  a {
    color: var(--black);
    text-decoration: none;
  }
  input {
    margin: 0;
    padding: 0;
    padding-block: 0px;
    padding-inline: 0px;
    border: 0;
  }
  :focus-visible {
    outline: none;
  }
  .triangle {
    border-style: solid;
    border-width: 4px;
    border-color: transparent;
    border-top: 4px solid var(--triangle);
    position: absolute;
    z-index: 1;
    pointer-events: none;
  }
`;

function addStylesToPage(styles, styleCustomSelect) {
  const styleElement = document.createElement("style");
  styleElement.type = "text/css";
  styleElement.appendChild(document.createTextNode(styles, styleCustomSelect));
  document.head.appendChild(styleElement, styleCustomSelect);

}

addStylesToPage(styles + styleCustomSelect + headerStyle + customScrollBar);
