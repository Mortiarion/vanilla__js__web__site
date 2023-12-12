document.addEventListener("DOMContentLoaded", () => {
  const inputField = document.querySelector(".header__navigation-search-field");
  const listContainer = document.querySelector(".autocomplete__list");
  const autoCompleteMessage = document.querySelector(".autocomplete__message");

  /**
   * 1) тре щоб перевірялось поле інпут чи там щось є
   * 2) якщо там щось є тре щоб звірялось з переченем автозаповнення в масиві
   * 3) тре щоб виводило значення знизу інпута
   * 4) провіряєм на не співпадіння. якщо не співпало то виводим вікно не співпало.
   * -- якщо пусте вікно або переходим в співпадіння то вікно не співпало має пропасти
   * 5) робим плавну анімацію появи listContainer і його зникнення
   * 6) тре зробити теж саме для
   * -- listContainer.innerHTML = "<div>No matches found...</div>";
   */

  let selectedOptionIndex = -1;

  const options = [
    "Electronics",
    "Clothing",
    "Books",
    "Toys & Games",
    "Home & Kitchen",
    "Beauty & Personal Care",
    "Sports & Outdoors",
    "Health & Household",
    "Tools & Home Improvement",
    "Automotive",
    "Grocery & Gourmet Food",
    "Baby",
    "Movies & TV",
    "Pet Supplies",
    "Office Products",
    "Handmade",
    "Amazon Launchpad",
    "Industrial & Scientific",
    "Digital Music",
    "Arts, Crafts & Sewing",
    "Collectibles & Fine Art",
    "Gift Cards",
    "Electronics",
    "Computers",
    "Appliances",
    "Books",
    "Movies",
    "Music",
    "Clothing",
    "Footwear",
    "Accessories",
    "Jewelry",
    "Food",
    "Toys",
    "Games",
    "Home",
    "Kitchen",
    "Furniture",
    "Health",
    "Beauty",
    "Sports",
    "Outdoors",
    "Automotive",
    "Industrial",
    "Pet Supplies",
    "Tools",
    "Grocery",
    "Baby",
    "Kids",
    "Office",
    "School Supplies",
    "Electronics",
    "Clothing",
    "Books",
    "Toys & Games",
    "Home & Kitchen",
    "Beauty & Personal Care",
    "Sports & Outdoors",
    "Health & Household",
    "Tools & Home Improvement",
    "Automotive",
    "Grocery & Gourmet Food",
    "Baby",
    "Movies & TV",
    "Pet Supplies",
    "Office Products",
    "Handmade",
    "Amazon Launchpad",
    "Industrial & Scientific",
    "Digital Music",
    "Arts, Crafts & Sewing",
    "Collectibles & Fine Art",
    "Gift Cards",
    "Electronics",
    "Computers",
    "Appliances",
    "Books",
    "Movies",
    "Music",
    "Clothing",
    "Footwear",
    "Accessories",
    "Jewelry",
    "Food",
    "Toys",
    "Games",
    "Home",
    "Kitchen",
    "Furniture",
    "Health",
    "Beauty",
    "Sports",
    "Outdoors",
    "Automotive",
    "Industrial",
    "Pet Supplies",
    "Tools",
    "Grocery",
    "Baby",
    "Kids",
    "Office",
    "School Supplies",
    "Електроніка",
    "Одяг",
    "Книги",
    "Іграшки та ігри",
    "Дім та кухня",
    "Краса та особистий догляд",
    "Спорт та відпочинок на відкритому повітрі",
    "Здоров'я та побут",
    "Інструменти та вдосконалення дому",
    "Автомобільна продукція",
    "Продукти та вишукана їжа",
    "Дитина",
    "Фільми та телебачення",
    "Товари для домашніх тварин",
    "Офісні товари",
    "Ручна робота",
    "Amazon Launchpad",
    "Промисловість та наука",
    "Цифрова музика",
    "Мистецтво, ремесла та шиття",
    "Колекціонування та образотворче мистецтво",
    "Подарункові картки",
    "Електроніка",
    "Комп'ютери",
    "Прилади",
    "Книги",
    "Фільми",
    "Музика",
    "Одяг",
    "Взуття",
    "Аксесуари",
    "Ювелірні вироби",
    "Їжа",
    "Іграшки",
    "Ігри",
    "Дім",
    "Кухня",
    "Меблі",
    "Здоров'я",
    "Краса",
    "Спорт",
    "Відпочинок на відкритому повітрі",
    "Автомобіль",
    "Промисловість",
    "Товари для домашніх тварин",
    "Інструменти",
    "Продукти",
    "Малюки",
    "Офіс",
    "Шкільні приладдя",
  ];

  inputField.addEventListener("input", () => {
    const inputValue = inputField.value.toLowerCase();

    let matches = [];

    if (inputValue.length > 0) {
      matches = options.filter(
        // Співпадіння - matches
        (option) => option.toLowerCase().startsWith(inputValue)
        // берем пустий масив = присвоюєм йому отфільтрований масив option
        // тут ми провіряєм на співпадіння. якщо поле інпут пусте то нічого не відбудеться
        // далі ми берем масив опцій. приводим до нижнього регістру щоб пошук співпадіння велось в ньому
        // String.startsWith() - визначає чи починається рядок з символів другого рядка.
      );
    }
    displayMatches(matches);
  });

  const displayMatches = (matches) => {
    if (matches.length > 0) {
      const listItems = matches.map((match) => `<div>${match}</div>`).join("");
      listContainer.innerHTML = listItems;
      listContainer.classList.add("show");
      autoCompleteMessage.innerHTML = "";
      autoCompleteMessage.classList.remove("show");
      selectedOptionIndex = -1;
    } else {
      if (inputField.value.trim().length === 0) {
        // якщо строка пуста провірка
        listContainer.classList.remove("show");
        listContainer.innerHTML = "";
        autoCompleteMessage.classList.remove("show");
        autoCompleteMessage.innerHTML = "";
      } else {
        listContainer.classList.remove("show");
        listContainer.innerHTML = "";
        autoCompleteMessage.classList.add("show");
        autoCompleteMessage.innerHTML = "<div>No matches found...</div>";
      }
    }
  };

  listContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "DIV") {
      inputField.value = e.target.textContent;
      listContainer.innerHTML = "";
      inputField.focus();
    }
  });

  inputField.addEventListener("keydown", (e) => {
    const listItems = listContainer.querySelectorAll("div");
    if (e.key === "Enter" || e.key === "Tab") {
      if (selectedOptionIndex >= 0) {
        if (listItems.length > 0) {
          inputField.value = listItems[selectedOptionIndex].textContent;
          listContainer.innerHTML = "";
          inputField.focus();
        }
      }
    } else if (e.key == "ArrowUp" || e.key == "ArrowDown") {
      const listItems = listContainer.querySelectorAll("div");
      if (listItems.length > 0) {
        if (e.key === "ArrowUp" && selectedOptionIndex > 0) {
          selectedOptionIndex--;
        } else if (
          e.key === "ArrowDown" &&
          selectedOptionIndex < listItems.length - 1
        ) {
          selectedOptionIndex++;
        }
      }
    }

    listItems.forEach((item, index) => {
      if (index === selectedOptionIndex) {
        item.classList.add("selected");
        inputField.value = item.textContent;
      } else {
        item.classList.remove("selected");
      }
    });
  });
  
});
