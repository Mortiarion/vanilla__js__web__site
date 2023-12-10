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
    --second-fonts: "Raleway", sans-serif;
    --triangle: hsl(0, 0%, 40%);
    --btn: #ffdfd7;
    --select: #e6e6e6;
    --border-select: #cdcdcd;
    --bg-trigger: #d4d4d4;
    --triangle-header-right: #a7acb2;
    --cart-zero: #ffdfd7;
    --search: #ffcabd;
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
  .wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  .main {
    flex: 1 1 auto;
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
  .header__navigation-logo,
  .header__navigation-location,
  .header__navigation-right-language,
  .header__navigation-right-sign,
  .header__navigation-right-order,
  .header__navigation-right-cart {
    border: 1px solid transparent;
    transition: border 0.5s ease;
    border-radius: 4px;
  }
  .header__navigation-logo:hover,
  .header__navigation-location:hover,
  .header__navigation-right-language:hover,
  .header__navigation-right-sign:hover,
  .header__navigation-right-order:hover,
  .header__navigation-right-cart:hover {
    border: 1px solid var(--white);
    border-radius: 4px;
    transition: border 0.5s ease;
  }

`;

function addStylesToPage(styles) {
  const styleElement = document.createElement("style");
  styleElement.type = "text/css";
  styleElement.appendChild(document.createTextNode(styles));
  document.head.appendChild(styleElement);

}

addStylesToPage(styles + styleCustomSelect + headerStyle + customScrollBar);
