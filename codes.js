// const body = document.querySelector("body");

// function createElement(
//   tagName,
//   className,
//   parentElement = document.body,
//   container = true,
//   linkUrl,
// ) {
//   const element = document.createElement(tagName);
//   element.className = className;
//   parentElement.appendChild(element);

//   if (container) {
//     element.classList.add("container");
//   }

//   if (className && className.trim() !== "") {
//     element.classList.add(className);
//   }

//   if (linkUrl) {
//     const linkElement = document.createElement("a");
//     linkElement.classList.add(className);
//     linkElement.href = linkUrl;
//     element.appendChild(linkElement);
//     return linkElement;
//   }

//   return element;
// }

// const wrapper = createElement("div", "wrapper", body, false);
// const header = createElement("header", "header", wrapper, false);
// const nav = createElement("nav", "navigation", header, false);
// const navLeft = createElement("div", "left", nav, false);
// const navCenter = createElement("div", "center", nav, false);
// const navRight = createElement("div", "right", nav, false);

// const link = createElement("a", "link", navLeft, false);
// link.href = "#";

// const logo = createElement("img", "logo", link, false);

// const navLocation = createElement("a", "location", navLeft, false);
// navLocation.href = "#";

// const navSpan = createElement("span", "nav__icon", navLocation, false);
// const navBox = createElement("div", "nav__box", navLocation, false);

// const navBoxSpan_1 = createElement("span", "box__1", navBox, false);
// const navBoxSpan_2 = createElement("span", "box__2", navBox, false);

// navBoxSpan_1.textContent = "Deliver to";
// navBoxSpan_2.textContent = "Ukraine";

// const allLinks = document.querySelectorAll("a");
// allLinks.forEach((a) => {
//   a.style.textDecoration = "none";
// });

// const body = document.querySelector("body");

// function createElement({
//   tagName,
//   className,
//   parentElement = document.body,
//   container = true,
//   linkUrl,
//   href,
// }) {
//   const element = document.createElement(tagName);
//   element.className = className;
//   parentElement.appendChild(element);

//   if (container) {
//     element.classList.add("container");
//   }

//   if (className && className.trim() !== "") {
//     element.classList.add(...className.split(" "));
//   }

//   if (linkUrl) {
//     const linkElement = document.createElement("a");
//     linkElement.classList.add(...className.split(" "));
//     linkElement.href = linkUrl;
//     element.appendChild(linkElement);
//     return linkElement;
//   }

//   return element;
// }

// const wrapper = createElement({
//   tagName: "div",
//   className: "wrapper",
//   parentElement: body,
//   container: false,
// });
// const header = createElement({
//   tagName: "header",
//   className: "header",
//   parentElement: wrapper,
//   container: false,
// });
// const nav = createElement({
//   tagName: "nav",
//   className: "navigation",
//   parentElement: header,
//   container: false,
// });
// const navLeft = createElement({
//   tagName: "div",
//   className: "left",
//   parentElement: nav,
//   container: false,
// });
// const navCenter = createElement({
//   tagName: "div",
//   className: "center",
//   parentElement: nav,
//   container: false,
// });
// const navRight = createElement({
//   tagName: "div",
//   className: "right",
//   parentElement: nav,
//   container: false,
// });

// const link = createElement({
//   tagName: "a",
//   className: "link",
//   parentElement: navLeft,
//   container: false,
//   href: "#",
// });

// const logo = createElement({
//   tagName: "img",
//   className: "logo",
//   parentElement: link,
//   container: false,
// });

// const navLocation = createElement({
//   tagName: "a",
//   className: "location",
//   parentElement: navLeft,
//   container: false,
//   href: "#",
// });

// const navSpan = createElement({
//   tagName: "span",
//   className: "nav__icon",
//   parentElement: navLocation,
//   container: false,
// });
// // navSpan.textContent = "Deliver to";

// const navBox = createElement({
//   tagName: "div",
//   className: "nav__box",
//   parentElement: navLocation,
//   container: false,
// });

// const navBoxSpan_1 = createElement({
//   tagName: "span",
//   className: "box__1",
//   parentElement: navBox,
//   container: false,
// });
// navBoxSpan_1.textContent = "Deliver to";

// const navBoxSpan_2 = createElement({
//   tagName: "span",
//   className: "box__2",
//   parentElement: navBox,
//   container: false,
// });
// navBoxSpan_2.textContent = "Ukraine";

// const headerForm = createElement({
//   tagName: "form",
//   className: "header__form",
//   parentElement: navCenter,
//   container: false,
// });

// const allLinks = document.querySelectorAll("a");
// allLinks.forEach((a) => {
//   a.style.textDecoration = "none";
// });

// const body = document.body;

// function createElement(
//   tagName,
//   className,
//   parentElement = document.body,
//   container = true,
//   linkUrl
// ) {
//   const element = document.createElement(tagName);
//   element.className = className;

//   if (parentElement && parentElement.appendChild) {
//     parentElement.appendChild(element);
//   }

//   if (container) {
//     element.classList.add("container");
//   }

//   if (className && className.trim() !== "") {
//     element.classList.add(className);
//   }

//   if (linkUrl) {
//     const linkElement = document.createElement("a");
//     linkElement.classList.add(className);
//     linkElement.href = linkUrl;
//     element.appendChild(linkElement);
//     return linkElement;
//   }

//   return element;
// }

// function createElements() {
//   const elements = [
//     {
//       tagName: "div",
//       className: "wrapper",
//       parentElement: body,
//       container: false,
//     },
//     {
//       tagName: "header",
//       className: "header",
//       parentElement: null,
//       container: false,
//     },
//     {
//       tagName: "nav",
//       className: "navigation",
//       parentElement: null,
//       container: false,
//     },
//     {
//       tagName: "div",
//       className: "left",
//       parentElement: null,
//       container: false,
//     },
//     {
//       tagName: "div",
//       className: "center",
//       parentElement: null,
//       container: false,
//     },
//     {
//       tagName: "div",
//       className: "right",
//       parentElement: null,
//       container: false,
//     },
//   ];

//   elements[1].appendChild(elements[1])
//   elements[1].appendChild(elements[2])
//   elements[2].appendChild(elements[3])
//   elements[2].appendChild(elements[4])
//   elements[2].appendChild(elements[5])

//   const createdElements = [];

//   for (let i = 0; i < elements.length; i++) {
//     const { tagName, className, parentElement, container } = elements[i];
//     const element = createElement(tagName, className, parentElement, container);
//     createdElements.push(element);

//     // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//     // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!  Вот тебе подсказка. Смотри текст в консоли
//     // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//     // console.log(element.parentElement);
//   }

//   const link = createElement("a", "link", createdElements[3]);
//   link.href = "#";

//   const allLinks = document.querySelectorAll("a");
//   allLinks.forEach(a => {
//     a.style.textDecoration = "none";
//   });
// }

// createElements();

// const body = document.querySelector("body");

// class ElementCreator {
//   constructor(
//     tagName,
//     className,
//     parentElement = document.body,
//     container = true,
//     linkUrl
//   ) {
//     this.element = document.createElement(tagName);
//     this.element.className = className;
//     parentElement.appendChild(this.element);

//     if (container) {
//       this.element.classList.add("container");
//     }

//     if (className && className.trim() !== "") {
//       this.element.classList.add(className);
//     }

//     if (linkUrl) {
//       const linkElement = new ElementCreator(
//         "a",
//         className,
//         this.element,
//         false
//       );
//       linkElement.element.href = linkUrl;
//       return linkElement;
//     }
//   }
// }

// const wrapper = new ElementCreator("div", "wrapper", body, false);
// const header = new ElementCreator("header", "header", wrapper.element, false);
// const nav = new ElementCreator("nav", "navigation", header.element, false);
// const navLeft = new ElementCreator("div", "left", nav.element, false);
// const navCenter = new ElementCreator("div", "center", nav.element, false);
// const navRight = new ElementCreator("div", "right", nav.element, false);

// const body = document.querySelector("body");

// const wrapper = document.createElement("div");
// wrapper.className = "wrapper";
// body.appendChild(wrapper);

// const header = document.createElement("header");
// header.className = "header";
// wrapper.appendChild(header);

// const main = document.createElement("main");
// main.className = "main";
// wrapper.appendChild(main);

// const footer = document.createElement("footer");
// footer.className = "footer";
// wrapper.appendChild(footer);
// const body = document.querySelector("body");

// const createElements = (tagName, className, parentElement = document.body) => {
//   const element = document.createElement(tagName);
//   element.className = className;
//   parentElement.appendChild(element);
//   return element;
// }

// const wrapper = createElements("div", "wrapper");
// const header = createElements("header", "header", wrapper);
// const main = createElements("main", "main", wrapper);
// const footer = createElements("footer", "footer", wrapper);

// const navigation = createElements("nav", "navigation", header);

// const headerTop = createElements("div", "top", navigation);
// const hTopLeft = createElements("div", "left", headerTop);
// const hTopCenter = createElements("div", "center", headerTop);
// const hTopRight = createElements("div", "right", headerTop);

// const headerBottom = createElements("div", "bottom", navigation);

// const createLink = (tagName, className, href, parentElement) => {
//   const element = document.createElement(tagName);
//   element.className = className;
//   element.href = href;
//   parentElement.appendChild(element);
//   return element;
// }

// const linkLogo = createLink("a", "logo__link", "#", hTopLeft);
// const linkLocation = createLink("a", "location__link", "#", hTopLeft);

// const createElements = (tagName, className, parentElement = document.body) => {
//   const element = document.createElement(tagName);
//   element.className = className;
//   parentElement.appendChild(element);
//   return element;
// };

// const createLink = (tagName, className, href, parentElement) => {
//   const element = document.createElement(tagName);
//   element.className = className;
//   element.href = href;
//   parentElement.appendChild(element);
//   return element;
// };

// const createWrapper = () => {
//   const wrapper = createElements("div", "wrapper");
//   const header = createElements("header", "header", wrapper);
//   const main = createElements("main", "main", wrapper);
//   const footer = createElements("footer", "footer", wrapper);

//   const navigation = createElements("nav", "navigation", header);

//   const headerTop = createElements("div", "top", navigation);
//   const hTopLeft = createElements("div", "left", headerTop);
//   const hTopCenter = createElements("div", "center", headerTop);
//   const hTopRight = createElements("div", "right", headerTop);

//   const headerBottom = createElements("div", "bottom", navigation);

//   const linkLogo = createLink("a", "logo__link", "#", hTopLeft);
//   const linkLocation = createLink("a", "location__link", "#", hTopLeft);

//   return wrapper;
// };

// const wrapper = createWrapper();

// const createElements = (tagName, className, parentElement = document.body) => {
//   const elements = [];
//   for (let i = 0; i < tagName.length; i++) {
//     const element = document.createElement(tagName[i]);
//     element.className = className[i];
//     parentElement.appendChild(element);
//     elements.push(element);
//   }
//   return elements;
// };

// const createWrapper = () => {
//   const wrapper = createElements(
//     ["div", "header", "main", "footer"],
//     ["wrapper", "header", "main", "footer"]
//   );

//   const navigation = createElements(["nav"], ["navigation"], wrapper[1]);

//   const headerTop = createElements(
//     ["div", "div", "div"],
//     ["top", "left", "center"],
//     navigation[0]
//   );
//   const hTopRight = createElements(["div"], ["right"], headerTop[0]);

//   const headerBottom = createElements(["div"], ["bottom"], navigation[0]);

//   const linkLogo = createLink("a", "logo__link", "#", hTopLeft);
//   const linkLocation = createLink("a", "location__link", "#", hTopLeft);

//   return wrapper[0];
// };

// const wrapper = createWrapper();














// const myStyle = [
//   {
//     color: "#ccc",
//     fontSize: "12px",
//   },
  // {
  //   color: "red",
  //   fontSize: "14px",
  //   fontWeight: "700",
  // },
  // {
  //   backgroundColor: "green",
  //   width: "500px",
  //   color: "white",
  // }
// ];

// Object.assign(box__1.style, myStyle[0]);
// Object.assign(box__2.style, myStyle[1]);
// Object.assign(locationBox.style, myStyle[2]);
// Функція для створення елемента зі стилями







// // Функція для створення елемента з класами стилів
// const createStyledElementWithClass = (elementTag, styles) => {
//   const styleTag = document.createElement('style');
//   styleTag.type = 'text/css';

//   // Додавання стилів до новоствореного тегу стилю
//   styleTag.appendChild(document.createTextNode(styles.join('\n')));

//   // Додавання тегу стилю до голови документа
//   document.head.appendChild(styleTag);

//   return (strings, ...values) => {
//     const element = document.createElement(elementTag);
//     element.classList.add('styledElementClass'); // Додатковий клас для стилізації

//     // Використання шаблонних рядків для вставки контенту
//     element.innerHTML = strings.reduce((acc, str, index) => {
//       return acc + str + (values[index] || '');
//     }, '');

//     return element;
//   };
// };

// // Приклад використання
// const styledDivWithClass = createStyledElementWithClass('div', [
//   '.styledElementClass {',
//   '  background-color: lightblue;',
//   '  color: white;',
//   '  padding: 10px;',
//   '  font-size: 16px;',
//   '}'
// ]);


// // Створення елемента з класами стилів
// // const myStyledDivWithClass = styledDivWithClass`Це стилізований div`;

// // Додавання стилізованого елемента до DOM
// // document.body.appendChild(myStyledDivWithClass);

// // Отримання існуючого елемента за його ID
// const styleBody = document.getElementById('body');

// // Додавання класу стилів до існуючого елемента
// styleBody.classList.add('styledElementClass');























// function addStylesToElement(element, styles) {
//   element.style.cssText += styles;
// }

// // Приклад використання
// const myElement = document.getElementById("body"); // Отримання елемента, якому потрібно додати стилі

// const additionalStyles = `
//   background-color: lightblue;
//   color: white;
//   padding: 10px;
//   font-size: 16px;
// `;

// // Додавання стилів до елемента за допомогою функції
// addStylesToElement(myElement, additionalStyles);







// var styles = {
//   backgroundColor: "lightblue",
//   color: "white",
//   padding: "20px",
//   fontSize: "18px",
// };

// Object.assign(box__2.style, styles);


// const tree = {
//   type: "div",
//   classNames: ["wrapper"],
//   children: [
//     {
//       type: "header",
//       classNames: ["header"],
//       children: [
//         {
//           type: "nav",
//           classNames: ["navigation"],
//           children: [
//             {
//               type: "div",
//               classNames: ["top"],
//               children: [
//                 {
//                   type: "div",
//                   classNames: ["left"],
//                 },
//                 {
//                   type: "div",
//                   classNames: ["center"],
//                 },
//                 {
//                   type: "div",
//                   classNames: ["right"],
//                 },
//               ],
//             },
//             {
//               type: "div",
//               classNames: ["bottom"],
//             },
//           ],
//         },
//       ],
//     },
//     {
//       type: "main",
//       classNames: ["main"],
//     },
//     {
//       type: "footer",
//       classNames: ["footer"],
//     },
//   ],
// };

// function createElement(tree) {
//   const element = document.createElement(tree.type);
//   element.classList.add(...tree.classNames);

//   if (tree.children) {
//     tree.children.forEach((child) => {
//       const childElement = createElement(child);
//       element.appendChild(childElement);
//     });
//   }

//   return element;
// }

// const wrapper = createElement(tree);
// document.body.appendChild(wrapper);



















// const createElement = (
//   tagName,
//   className,
//   attributes = {},
//   parentElement = document.body
// ) => {
//   const element = document.createElement(tagName);
//   element.className = className;

//   for (const attribute in attributes) {
//     element.setAttribute(attribute, attributes[attribute]);
//   }

//   parentElement.appendChild(element);
//   return element;
// };

// const body = document.body;

// const wrapper = createElement("div", "wrapper");
// const header = createElement("header", "header", {}, wrapper);
// const main = createElement("main", "main", {}, wrapper);
// const footer = createElement("footer", "footer", {}, wrapper);

// const navigation = createElement("nav", "navigation", {}, header);

// const headerTop = createElement("div", "top", {}, navigation);
// const hTopLeft = createElement("div", "left", {}, headerTop);
// const hTopCenter = createElement("div", "center", {}, headerTop);
// const hTopRight = createElement("div", "right", {}, headerTop);

// const headerBottom = createElement("div", "bottom", {}, navigation);

// const linkLogo = createElement("a", "logo__link", { href: "#" }, hTopLeft);
// const logoImg = createElement("span", "logo", {}, linkLogo);
// const linkLocation = createElement(
//   "a",
//   "location__link",
//   { href: "#" },
//   hTopLeft
// );
// const lLocationIcon = createElement("span", "location__icon", {}, linkLocation);
// const locationWrapper = createElement(
//   "div",
//   "location__wrapper",
//   {},
//   linkLocation
// );
// // locationBox.textContent = "Location";
// const locationWrapperDeliver = createElement(
//   "span",
//   "location__wrapper-deliver",
//   {},
//   locationWrapper
// );
// locationWrapperDeliver.textContent = "Deliver to";
// const locationWrapperCountry = createElement(
//   "span",
//   "location__wrapper-country",
//   {},
//   locationWrapper
// );
// locationWrapperCountry.textContent = "Ukraine";



























// export const myVariable = "hello world";
// export { box__1, box__2, locationBox };
// export { body, linkLocation, linkLogo, logoImg };

// const createdElements = (
//   tagName,
//   className,
//   parentElement = document.body,
//   attributes = {},
//   textContent = ""
// ) => {
//   const element = document.createdElements(tagName);
//   element.className = className;

//   for (const attribute in attributes) {
//     element.setAttribute(attribute, attributes[attribute]);
//   }

//   if (textContent) {
//     element.textContent = textContent;
//   }

//   parentElement.appendChild(element);
//   return element;
// };

// const createNestedElements = (parent, elements) => {
//   elements.forEach(
//     ({ tagName, className, attributes = {}, textContent = "" }) => {
//       createdElements(tagName, className, parent, attributes, textContent);
//     }
//   );
// };

// const wrapper = createdElements("div", "wrapper");
// const header = createdElements("div", "header", wrapper);
// const main = createdElements("div", "main", wrapper);
// const footer = createdElements("div", "footer", wrapper);

// const navigation = createdElements("nav", "navigation", header);

// const headerTop = createdElements("div", "header__top", navigation);

// createNestedElements(headerTop, [
//   { tagName: "div", className: "left" },
//   { tagName: "div", className: "center" },
//   { tagName: "div", className: "right" },
// ]);

// const headerBottom = createdElements("div", "header__bottom", navigation);

// const linkLogo = createdElements("a", "logo__link", headerTop, { href: "#" });




































const createdElements = (
  tagName,
  className,
  parentElement = document.body,
  attributes = {},
  textContent = "",
) => {
  const element = document.createElement(tagName);
  element.className = className;

  for (const attribute in attributes) {
    element.setAttribute(attribute, attributes[attribute]);
  }

  element.textContent = textContent;

  parentElement.appendChild(element);
  return element;
};


const wrapper = createdElements("div", "wrapper");
const header = createdElements("header", "header", wrapper);
const main = createdElements("main", "main", wrapper);
const footer = createdElements("footer", "footer", wrapper);

const navigation = createdElements("nav", "navigation", header);

const headerTop = createdElements("div", "top", navigation);
const hTopLeft = createdElements("div", "left", headerTop);
const hTopCenter = createdElements("div", "center", headerTop);
const hTopRight = createdElements("div", "right", headerTop);

const headerBottom = createdElements("div", "bottom", navigation);

const linkLogo = createdElements("a", "logo__link", hTopLeft, { href: "#" });
const logoImg = createdElements("span", "logo", linkLogo);
const linkLocation = createdElements("a", "location__link", hTopLeft, { href: "#" });
const lLocationIcon = createdElements("span", "location__icon", linkLocation);
const locationWrapper = createdElements("div", "location__wrapper", linkLocation);
const locationWrapperDeliver = createdElements("span", "location__wrapper-deliver", locationWrapper, {}, "Deliver to");
const locationWrapperCountry = createdElements("span", "location__wrapper-country", locationWrapper, {}, "Ukraine");





























const createElementsCustomSelect = () => {
  const customSelect = `
    <div class="select">
      <span class="selectLabel">Main job role</span>
      <div class="selectWrapper">
        <div class="selectCustom js-selectCustom">
          <div class="selectCustom-trigger">Select role...</div>
          <div class="selectCustom-options">
            <div class="selectCustom-option" data-value="ds">UI/UX Designer</div>
            <div class="selectCustom-option" data-value="fe">Frontend Engineer</div>
            <div class="selectCustom-option" data-value="be">Backend Engineer</div>
            <div class="selectCustom-option" data-value="qa">QA Engineer</div>
            <div class="selectCustom-option" data-value="un">Unicorn</div>
          </div>
        </div>
      </div>
    </div>
  `;

  // Вставка створеного HTML-коду в документ
  document.body.innerHTML = wrapper;
};

// Виклик функції для створення DOM-елементів з використанням шаблонних рядків
createElementsWithTemplateStrings();
























// Функція для створення DOM-елементів за допомогою шаблонних рядків
const createElementsWithTemplateStrings = () => {
  const wrapper = `
    <div class="wrapper">
      <div class="header">
        <div class="header__top">
          <div class="header__top-left"></div>
          <div class="header__top-center"></div>
          <div class="header__top-right"></div>
        </div>
        <div class="header__bottom"></div>
      </div>
      <div class="main"></div>
      <div class="footer"></div>
    </div>
  `;

  // Вставка створеного HTML-коду в документ
  document.body.innerHTML = wrapper;
};

// Виклик функції для створення DOM-елементів з використанням шаблонних рядків
createElementsWithTemplateStrings();
// Ось деякі переваги та недоліки обох методів створення DOM-структур за допомогою JavaScript, 
// щоб вам було легше визначити, який підхід краще підходить для вашого конкретного проекту:

// Використання функцій створення DOM:

// Переваги:

// Читабельність коду: Функції дозволяють організувати структуру вашої 
// сторінки, роблячи код більш зрозумілим та підтримуваним.
// Гнучкість: Функції можна легко змінити для додавання додаткових атрибутів, 
// обробників подій та інших налаштувань для кожного елементу.
// Недоліки:

// Більше коду: Порівняно з короткими шаблонними рядками, функції 
// створення DOM можуть виглядати дещо об'ємною структурою коду.
// Використання шаблонних рядків:

// Переваги:

// Короткий та зрозумілий код: Шаблонні рядки можуть бути коротшими та легше 
// зрозумілими, особливо для простих структур.
// Швидке створення: Цей метод може бути швидким для створення простих структур 
// або шаблонів.
// Недоліки:

// Обмежена гнучкість: Важче додавати додаткові атрибути, обробники подій та інші 
// налаштування кожному елементу.
// Важко змінювати: У разі потреби внесення змін до структури, може бути складно 
// змінювати або оновлювати код, особливо якщо структура велика чи складна.
// Обидва підходи мають свої власні використовуючи сильні сторони, і вибір між 
// ними може залежати від конкретних потреб вашого проекту, його розміру, потрібної 
// гнучкості та ваших власних вподобань у структуруванні коду.
























document.addEventListener("DOMContentLoaded", () => {
  const createElementsCustomSelect = () => {
    const selectCustom = document.createElement("div");
    selectCustom.classList.add("selectCustom", "js-selectCustom");

    const selectCustomTrigger = document.createElement("div");
    selectCustomTrigger.classList.add("selectCustom-trigger");
    selectCustomTrigger.textContent = "All";
    selectCustom.appendChild(selectCustomTrigger);

    const selectCustomOptions = document.createElement("div");
    selectCustomOptions.classList.add("selectCustom-options");

    const options = [
      "All Departments",
      "Automotive",
      "Arts Crafts",
      "Baby",
      "Beauty Personal Care",
      "Books",
      "Boys' Fashion",
      "Computers",
      "Deals",
      "Digital Music",
      "Electronics",
      "Girls' Fashion",
      "Health Household",
      "Home Kitchen",
      "Industrial Scientific",
      "Kindle Store",
      "Luggage",
      "Men's Fashion",
      "Movies TV",
      "Music, CDs Vinyl",
      "Pet Supplies",
      "Prime Video",
      "Software",
      "Sports Outdoors",
      "Tools Home Improvement",
      "Toys Games",
      "Video Games",
      "Women's Fashion",
    ];

    options.forEach((option, index) => {
      const selectCustomOption = document.createElement("div");
      selectCustomOption.classList.add("selectCustom-option");
      selectCustomOption.setAttribute("data-value", index);
      selectCustomOption.textContent = option;
      selectCustomOptions.appendChild(selectCustomOption);
    });

    selectCustom.appendChild(selectCustomOptions);
    const headerNavigationFormFill = document.querySelector(
      ".header__navigation-form-fill"
    );

    // Вставляємо selectCustom в якості дочірнього елемента до headerNavigationFormFill
    headerNavigationFormFill.appendChild(selectCustom);

    const elSelectCustom = document.querySelector(".js-selectCustom");
    const elSelectCustomValue = elSelectCustom.querySelector(
      ".selectCustom-trigger"
    );
    const elSelectCustomOptions = elSelectCustom.querySelectorAll(
      ".selectCustom-option"
    );
    const defaultLabel = elSelectCustomValue.getAttribute("data-value");

    console.log(elSelectCustomOptions);
    // Listen for each custom option click
    elSelectCustomOptions.forEach((elOption) => {
      elOption.addEventListener("click", (e) => {
        // Update custom select text too
        elSelectCustomValue.textContent = e.target.textContent;
        // Close select
        elSelectCustom.classList.remove("isActive");
      });
    });

    // Toggle select on label click
    elSelectCustomValue.addEventListener("click", () => {
      elSelectCustom.classList.toggle("isActive");
    });

    // Close the custom select when clicking outside
    document.addEventListener("click", (e) => {
      const didClickedOutside = !elSelectCustom.contains(e.target);
      if (didClickedOutside) {
        elSelectCustom.classList.remove("isActive");
      }
    });
  };

  createElementsCustomSelect();
});








// .header__navbar-left-link {
//   align-items: center;
// }
// .header__navbar-center {
//   width: 100%;
//   margin-left: 10px;
// }
// .header__navbar-left {
//   display: flex;
//   align-items: center;
// }
// .header__navbar-logo {
//   width: 97px;
//   height: 30px;
//   background-image: url("../images/nav-sprite-global.png");
//   background-position: 4% -95%;
// }
// .header__navbar-location {
//   display: flex;
//   align-items: center;
// }
// .header__navbar-icon {
//   width: 22px;
//   height: 22px;
//   background-image: url("../images/nav-sprite-global.png");
//   background-position: 21% -17.9%;
//   padding: 5px;
// }
// .header__navbar-box {
//   display: flex;
//   flex-wrap: wrap;
// }
// .header__navbar-box .box-1 {
//   color: #ccc;
//   font-size: 12px;
// }
// .header__navbar-box .box-2 {
//   color: #fff;
//   font-size: 14px;
//   font-weight: 700;
// }
// .header__navbar-form {
//   display: flex;
//   height: 40px;
// }
// .header__navbar-form-left {
//   position: relative;
// }
// .header__navbar-form-position-block {
//   width: 52px;
//   height: 40px;
// }
// .header__navbar-form-search {
//   position: absolute;
// }
// .header__navbar-form-search-label {
//   color: black;
//   background-color: white;
//   padding: 15px;
//   cursor: pointer;
//   position: absolute;
//   width: 52px;
//   height: 40px;
//   border-top-left-radius: 4px;
//   border-bottom-left-radius: 4px;
//   border-right: 1px solid #666666;
//   font-size: 12px;
//   z-index: 1;
//   pointer-events: all;
// }
// .header__navbar-form-triangle {
//   top: 18px;
//   left: 35px;
//   border-style: solid;
//   border-width: 4px;
//   border-color: transparent;
//   border-top: 4px solid #666666;
//   position: absolute;
//   z-index: 1;
//   pointer-events: none;
// }
// .header__navbar-form-search-dropdown {
//   position: absolute;
//   max-width: 52px;
//   opacity: 1;
//   height: 40px;
//   cursor: pointer;
//   border-top-left-radius: 4px;
//   border-bottom-left-radius: 4px;
//   border-right: 1px solid #666666;
//   display: flex;
//   opacity: 0;
//   z-index: 1;
// }
// .header__navbar-search-fill {
//   width: 100%;
// }
// .header__navbar-input {
//   width: 100%;
//   height: 40px;
//   padding-left: 15px;
// }
// .header__navbar-search-submit-button {
//   background-image: url("../images/nav-sprite-global.png");
//   width: 45px;
//   height: 40px;
//   border-top-right-radius: 4px;
//   border-bottom-right-radius: 4px;
//   cursor: pointer;
//   background-position: -1% 68%;
//   background-color: #febd67;
// }
// .header__navbar-search-submit-button:hover {
//   background-color: #f3a949;
// }
// .header__navbar-right {
//   display: flex;
//   margin-left: 5px;
//   min-width: fit-content;
// }
// .header__navbar-right a,
// .header__navbar-right span {
//   color: white;
// }
// .header__navbar-right-triangle.triangle {
//   top: 28px;
//   left: 62px;
// }
// .header__navbar-right-language {
//   display: flex;
//   position: relative;
//   align-items: center;
// }
// .header__navbar-right-language span {
//   font-size: 14px;
//   font-weight: 700;
//   margin: 0 2px;
//   height: 10px;
// }
// .header__navbar-right-flag {
//   background-image: url("../images/nav-sprite-global-country.png");
//   width: 22px;
//   height: 16px;
//   background-position: 0% 47%;
// }
// .header__navbar-right-sign {
//   position: relative;
//   display: flex;
//   flex-direction: column;
// }
// .header__navbar-right-sign .line-1 {
//   font-size: 12px;
//   font-weight: 400;
// }
// .header__navbar-right-sign .line-2 {
//   font-size: 14px;
//   font-weight: 700;
// }
// .header__navbar-right-sign-account.triangle {
//   top: 28px;
//   left: 115px;
// }
// .header__navbar-right-order {
//   display: flex;
//   flex-direction: column;
// }
// .header__navbar-right-order .line-1 {
//   font-size: 12px;
// }
// .header__navbar-right-order .line-2 {
//   font-weight: 700;
//   font-size: 14px;
// }
// .header__navbar-right-cart {
//   display: flex;
//   align-items: flex-end;
//   align-items: center;
// }
// .header__navbar-right-cart-img {
//   background-image: url("../images/nav-sprite-global.png");
//   width: 38px;
//   height: 26px;
//   background-position: 3% 80.2%;
//   position: relative;
// }
// .header__navbar-right-cart-img .line-1 {
//   top: 0;
//   right: 11px;
//   position: absolute;
//   color: #febd67;
// }
// .header__navbar-right-cart-img .line-2 {
//   font-weight: 700;
//   font-size: 14px;
// }
// .header .hover__element {
//   display: none;
//   top: 5%;
//   right: 9.7%;
//   position: absolute;
//   width: 240px;
//   background-color: #fff;
//   z-index: 999;
//   border: 1px solid #bbb;
//   border-radius: 3px;
//   padding: 15px;
// }
// .header .hover__element .triangle {
//   top: -19px;
//   left: 99px;
//   border-style: solid;
//   border-width: 10px;
//   border-color: transparent;
//   border-bottom: 10px solid white;
//   position: absolute;
//   z-index: 1;
//   pointer-events: none;
// }
// .header .hover__element span,
// .header .hover__element a {
//   color: #000000;
//   font-size: 13px;
// }
// .header .hover__element .nav-item {
//   display: block;
//   margin-bottom: 10px;
// }
// .header .hover__element .nav-divider {
//   position: relative;
//   display: block;
//   line-height: 1px;
//   height: 1px;
//   overflow: hidden;
//   background: #eee;
//   margin: 0 0 9px;
// }
// .header .hover__element .icp-radio {
//   margin: 0 0.5em 0 0;
//   position: relative;
//   top: 3px;
//   display: inline-block;
//   width: 18px;
//   height: 18px;
//   background: url("../images/nav-sprite-global-country.png");
//   background-position: -75px -2px;
// }
// .header .hover__element a:hover .icp-radio {
//   background-position: -123px -2px;
// }
// .header .hover__element .icp-radio-active {
//   background-position: -99px -2px;
// }
// .header .hover__element .nav-link.nav-item:hover .nav-text:hover {
//   color: #e47911;
//   text-decoration: underline;
// }
// .header .hover__element .learn-more,
// .header .hover__element .icp-flyout-change {
//   color: #007185;
//   font-size: 11px;
//   margin-left: 15px;
// }
// .header .hover__element .learn-more:hover,
// .header .hover__element .icp-flyout-change:hover {
//   text-decoration: underline;
//   color: #e47911;
// }
// .header .hover__element .flag-us.header__navbar-right-flag {
//   display: inline-block;
//   position: absolute;
//   border-radius: 3px;
// }
// .header .hover__element .change-link {
//   color: #0066c0;
//   margin: 0 auto;
//   text-align: center;
//   font-size: 13px;
// }
// .header .hover__element .change-link:hover {
//   text-decoration: underline;
// }

// .triangle {
//   top: 17px;
//   left: 99px;
//   border-style: solid;
//   border-width: 4px;
//   border-color: transparent;
//   border-top: 4px solid #616161;
//   position: absolute;
//   z-index: 1;
//   pointer-events: none;
// }

// .header__navbar-right-language,
// .header__navbar-right-sign,
// .header__navbar-right-order,
// .header__navbar-right-cart,
// .header__navbar-left-link,
// .header__navbar-location {
//   display: flex;
//   padding: 0 15px;
//   border: 1px solid transparent;
//   height: 50px;
//   justify-content: center;
// }
// .header__navbar-right-language:hover,
// .header__navbar-right-sign:hover,
// .header__navbar-right-order:hover,
// .header__navbar-right-cart:hover,
// .header__navbar-left-link:hover,
// .header__navbar-location:hover {
//   border: 1px solid #fff;
//   border-radius: 4px;
// }

// .header__navbar-right-language:hover + .hover__element {
//   display: block;
// }

// .header__navbar-right-cart {
//   padding: 0 5px;
// }









function addGoogleFontsLinks() {
  const head = document.head;

  const preconnect1 = document.createElement("link");
  preconnect1.rel = "preconnect";
  preconnect1.href = "https://fonts.googleapis.com";
  head.appendChild(preconnect1);

  const preconnect2 = document.createElement("link");
  preconnect2.rel = "preconnect";
  preconnect2.href = "https://fonts.gstatic.com";
  preconnect2.setAttribute("crossorigin", "");
  head.appendChild(preconnect2);

  const fontLink = document.createElement("link");
  fontLink.href =
    "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;1,600&family=Raleway:wght@400;500;600;700&display=swap";
  fontLink.rel = "stylesheet";
  head.appendChild(fontLink);
}

// Виклик функції для додавання посилань в <head>
addGoogleFontsLinks();