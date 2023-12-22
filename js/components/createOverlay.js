document.addEventListener("DOMContentLoaded", () => {
    const createdOverlay = () => {
        const overlay = document.createElement("div");
        overlay.className = "overlay";

        const body = document.body;

        body.appendChild(overlay);
        return overlay;
    };

    createdOverlay();

    const overlay = document.querySelector(".overlay");
    const customSelectTrigger = document.querySelector(".custom__select-trigger");
    const headerNavigationRightLanguage = document.querySelector(".header__navigation-right-language");
    const headerNavigationSearchField = document.querySelector(".header__navigation-search-field");

    const openOverlay = () => {
        overlay.classList.add("active");
    };

    const closeOverlay = () => {
        overlay.classList.remove("active");
    };

    const handleOverlayInteraction = (e) => {
        const isCustomSelectTrigger = e.target === customSelectTrigger;
        const isHeaderNavigationRightLanguage = e.target === headerNavigationRightLanguage;
        const isHeaderNavigationSearchField = e.target === headerNavigationSearchField;
        const overlayIsActive = overlay.classList.contains("active");

        if ((isCustomSelectTrigger || isHeaderNavigationRightLanguage || isHeaderNavigationSearchField) && !overlay.classList.contains("active")) {
            openOverlay();
        } else if (isCustomSelectTrigger && overlayIsActive) {
            closeOverlay();
        } else if (isCustomSelectTrigger && !overlayIsActive) {
            openOverlay();
        } else {
            closeOverlay();
        }
    };

    document.addEventListener("click", handleOverlayInteraction);
});
