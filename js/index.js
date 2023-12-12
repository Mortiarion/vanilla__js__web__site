import createdElementsAttributes from "./components/createdElementsAttributes.js";
import createdElementsTextContent from "./components/createdElementsTextContent.js";
import createdElements from "./components/createdElements.js";
import "./style/common__style.js";
import "./components/customSelect.js";
import "./../fonts/fontsLink.js";
import "./components/createAutoCompleteInput.js"

const wrapper = createdElements("div", "wrapper");

const header = createdElements("div", "header", wrapper);
const main = createdElements("div", "main", wrapper);
const footer = createdElements("div", "footer", wrapper);

const headerTop = createdElements("div", "header__top", header);
const headerBottom = createdElements("div", "header__bottom", header);

const headerTopLeft = createdElements("div", "header__top-left", headerTop);
const headerTopCenter = createdElements("div", "header__top-center", headerTop);
const headerTopRight = createdElements("div", "header__top-right", headerTop);

const headerNavigationLogo = createdElementsAttributes(
  "a",
  "header__navigation-logo",
  { href: "#", title: "AMAZON(а муз лон)" },
  headerTopLeft
);
const logo = createdElements("span", "logo", headerNavigationLogo);

const headerNavigationLocation = createdElementsAttributes(
  "a",
  "header__navigation-location",
  { href: "#", title: "select your region/country" },
  headerTopLeft
);
const headerNavigationLocationIcon = createdElements(
  "span",
  "header__navigation-location-icon",
  headerNavigationLocation
);
const headerNavigationWrapper = createdElements(
  "div",
  "header__navigation-wrapper",
  headerNavigationLocation
);
const headerNavigationDeliver = createdElementsTextContent(
  "span",
  "header__navigation-deliver",
  "Deliver to",
  headerNavigationWrapper
);
const headerNavigationCountry = createdElementsTextContent(
  "span",
  "header__navigation-country",
  "Ukraine",
  headerNavigationWrapper
);

const headerNavigationForm = createdElements(
  "form",
  "header__navigation-form",
  headerTopCenter
);
const headerNavigationFormLeft = createdElements(
  "div",
  "header__navigation-form-left",
  headerNavigationForm
);
const headerNavigationFormFill = createdElements(
  "div",
  "header__navigation-form-fill",
  headerNavigationForm
);
const headerNavigationFormRight = createdElements(
  "div",
  "header__navigation-form-right",
  headerNavigationForm
);

const headerNavigationSearchField = createdElementsAttributes(
  "input",
  "header__navigation-search-field",
  { type: "text", title: "Search...", placeholder: "Search on Amazon" },
  headerNavigationFormFill
);

const headerNavigationSearchBtnSubmit = createdElementsAttributes(
  "buttom",
  "header__navigation-search-btn",
  { type: "submit", title: "Go..." },
  headerNavigationFormRight
);
const headerNavigationSearchImage = createdElements(
  "span",
  "header__navigation-search-image",
  headerNavigationSearchBtnSubmit
);

const headerNavigationRightLanguage = createdElementsAttributes(
  "a",
  "header__navigation-right-language",
  { href: "#", title: "Select language" },
  headerTopRight
);
const headerNavigationRightFlag = createdElements(
  "div",
  "header__navigation-right-flag",
  headerNavigationRightLanguage
);
const language = createdElementsTextContent(
  "span",
  "language",
  "EN",
  headerNavigationRightLanguage
);
const headerNavigationRightTriangle = createdElements(
  "span",
  "triangle",
  headerNavigationRightLanguage
);

const headerNavigationRightSign = createdElementsAttributes(
  "a",
  "header__navigation-right-sign",
  { href: "#", title: "Log in" },
  headerTopRight
);
const headerSignOne = createdElementsTextContent(
  "span",
  "sign__one",
  "Hello, sign in",
  headerNavigationRightSign
);
const headerSignTwo = createdElementsTextContent(
  "span",
  "sign__two",
  "Account & Lists",
  headerNavigationRightSign
);
const headerNavigationRightTriangleSign = createdElements(
  "span",
  "triangle",
  headerSignTwo
);

const headerNavigationRightOrder = createdElementsAttributes(
  "a",
  "header__navigation-right-order",
  { href: "#", title: "Log in" },
  headerTopRight
);
const orderOne = createdElementsTextContent(
  "span",
  "order__one",
  "Returns",
  headerNavigationRightOrder
);
const orderTwo = createdElementsTextContent(
  "span",
  "order__two",
  "& Orders",
  headerNavigationRightOrder
);

const headerNavigationRightCart = createdElementsAttributes(
  "a",
  "header__navigation-right-cart",
  { href: "#", title: "Cart" },
  headerTopRight
);
const headerNavigationRightCartImage = createdElements(
  "span",
  "header__navigation-right-image",
  headerNavigationRightCart
);
const cartOne = createdElementsTextContent(
  "span",
  "cart__one",
  "0",
  headerNavigationRightCartImage
);
const cartTwo = createdElementsTextContent(
  "span",
  "cart__two",
  "Cart",
  headerNavigationRightCart
);



const autoComplete = createdElements(
  "div",
  "autocomplete__list",
  headerNavigationFormFill
);
const autoCompleteMessage = createdElements(
  "div",
  "autocomplete__message",
  headerNavigationFormFill
);
