document.addEventListener("DOMContentLoaded", () => {
  // Код, який ми хочемо виконати, коли структура DOM завантажена і готова для маніпуляцій.
  const inputField = document.querySelector(".header__navigation-search-field");
  const listContainer = document.querySelector(".autocomplete__list");

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
  ];

  inputField.addEventListener("input", () => {
    const inputValue = inputField.value.toLowerCase();
    let matches = [];

    if (inputValue.length > 0) {
      matches = options.filter((option) =>
        option.toLowerCase().startsWith(inputValue)
      );
    }

    displayMatches(matches);
  });

  const displayMatches = (matches) => {
    if (matches.length > 0) {
      const listItems = matches.map((match) => `<div>${match}</div>`).join("");
      listContainer.innerHTML = listItems;
      selectedOptionIndex = -1;
    } else {
      listContainer.innerHTML = "";
    }
  };

  listContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "DIV") {
      inputField.value = e.target.textContent;
      listContainer.innerHTML = "";
      inputField.focus();
    }
  });

  inputField.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === "Tab") {
      const firstMatch = listContainer.querySelector("div");
      if (firstMatch) {
        inputField.value = firstMatch.textContent;
        listContainer.innerHTML = "";
        inputField.focus();
      }
    } else if (e.key === "ArrowUp" || e.key === "ArrowDown") {
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

        listItems.forEach((item, index) => {
          if (index === selectedOptionIndex) {
            item.classList.add("selected");
            inputField.value = item.textContent;
          } else {
            item.classList.remove("selected");
          }
        });
      }
    }
  });

  listContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "DIV") {
      inputField.value = e.target.textContent;
      listContainer.innerHTML = "";
      inputField.focus();
    }
  });
});
