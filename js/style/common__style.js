import styleCustomSelect from "./components/styleCustomSelect.js";
import headerStyle from "./../style/components/styleHeader.js";

const styles = `
  :root {
    --background-header: #00453e;
    --text-color: #cccccc;
    --white: #ffffff;
    --main-font: "Montserrat", sans-serif;
    --second-fons: "Raleway", sans-serif;
  }
  body {
    background-color: #ddd;
    color: black;
    padding: 0;
    margin: 0;
    font-size: 16px;
    box-sizing: border-box;
    line-height: 1;
    letter-spacing: 0px;
    font-family: var(--main-font);
  }
  a {
    color: black;
    text-decoration: none;
  }
  .triangle {
    border-style: solid;
    border-width: 4px;
    border-color: transparent;
    border-top: 4px solid hsl(0, 0%, 40%);
    position: absolute;
    z-index: 1;
    pointer-events: none;
  }
`;

function addStylesToPage(styles, styleCustomSelect) {
  const styleElement = document.createElement("style", "styleCustomSelect");
  styleElement.type = "text/css";
  styleElement.appendChild(document.createTextNode(styles, styleCustomSelect));
  document.head.appendChild(styleElement, styleCustomSelect);

}

addStylesToPage(styles + styleCustomSelect + headerStyle);
