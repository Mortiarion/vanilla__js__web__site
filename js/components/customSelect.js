document.addEventListener("DOMContentLoaded", () => {

  const createElementsCustomSelect = () => {
    const customSelect = document.createElement("div");
    customSelect.classList.add("custom__select", "js__custom-select"); // створюєм основну коробку для кастомного селекта

    const headerNavigationFormLeft = document.querySelector(
      ".header__navigation-form-left"
    ); // отримали доступ до містя де буде селект
    headerNavigationFormLeft.appendChild(customSelect); // відправили його на місце 

    const customSelectTrigger = document.createElement("div");
    customSelectTrigger.classList.add("custom__select-trigger");
    customSelectTrigger.textContent = "All";
    customSelect.appendChild(customSelectTrigger); // створюєм елемент селекта яки буде першоначальним і не входитеме в список селектів. і поміщаєм в коробку селекта

    const customSelectOptions = document.createElement("div");
    customSelectOptions.classList.add("custom__select-options"); // створюєм коробку для всіх кастомних опшенів

    customSelect.appendChild(customSelectOptions); // поміщаєм куди нада

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
    ]; // масив де зерігаються всі елементи які потрібно буде помістити в кастомні опшени

    const uniqueOptions = [...new Set(options)];

    uniqueOptions.forEach((option, index) => {
      // тут ми перебераєм весь масив по індексу і по значенню що в ньому є
      const customSelectOption = document.createElement("option"); // створюєм всі кастомні опшени на кожній ітерації елементів. поки вони є в масиві
      customSelectOption.classList.add("custom__select-option"); // даєм їм клас
      customSelectOption.setAttribute("data-value", index); // даєм їм дата атрибут в який буде передаватись їх індекс з масиву
      customSelectOption.textContent = option; // а тут буде підтягуватись значення в залежності який індекс прописаний

      customSelectOptions.appendChild(customSelectOption); // ну тут по стандарту щоб все відобразилось тре кудись його засунути
    });

    const elementCustomSelect = document.querySelector(".js__custom-select"); // знаходим елемент
    const elementCustomSelectValue = document.querySelector(".custom__select-trigger"); // знаходим елемент
    const elementCustomSelectOptions = document.querySelectorAll(".custom__select-option"); // знаходим елемент

    
    const handleCustomSelectValueClick = () => {
      elementCustomSelectValue.addEventListener("click", () => {
        elementCustomSelect.classList.toggle("active"); // добавляєм клас щоб дропдавн відкрився
      });
    };

    const handleCustomSelectOptionClick = () => {
      elementCustomSelectOptions.forEach((elementOption) => { // знову проходимся по всіх опшенах
        elementOption.addEventListener("click", (e) => { // береться один опшен вішається прослуховувач подій клік
          elementCustomSelectValue.textContent = e.target.textContent; // тут ми міняєм перше значення на значення яке знаходиться в опшені
          elementCustomSelect.classList.remove("active"); // забераєм клас щоб при кліку дропдавн закрився
        });
      });
    };

    const handleDocumentClick = () => {
      document.addEventListener("click", (e) => {
        const ifClickOutside = !elementCustomSelect.contains(e.target);
        // тут ми провіряєм якщо ми не клікнули на селект то він має закритись
        if (ifClickOutside) {
          elementCustomSelect.classList.remove("active");
        }
      });
    }

    handleCustomSelectValueClick();
    handleCustomSelectOptionClick();
    handleDocumentClick();
  };

  createElementsCustomSelect(); // визиваєм функцію щоб селект запрацював і появився на сторінці
});
