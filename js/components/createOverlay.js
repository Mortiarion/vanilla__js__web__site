document.addEventListener("DOMContentLoaded", () => {
    const createOverlay = document.createElement("div");
    createOverlay.className = "overlay";
    const body = document.body;
    body.appendChild(createOverlay);

    const overlay = document.querySelector(".overlay");

    const overlayCustomTrigger = document.querySelector(
        ".custom__select-trigger"
    );
    const customSelectOptions = document.querySelectorAll(".custom__select-option");

    const handleOverlayInteraction = (event) => {
        const isOverlayCustomTrigger = event.target === overlayCustomTrigger;
        const isEscapeKey = event.key === "Escape";
        const isOverlay = event.target.classList.contains("overlay");
        const isCustomSelectOption = Array.from(customSelectOptions).includes(event.target);

        if (
            isOverlayCustomTrigger ||
            isEscapeKey ||
            isOverlay ||
            isCustomSelectOption
        ) {
            openCloseOverlay(isOverlayCustomTrigger, isEscapeKey);
        }
    };

    const openCloseOverlay = () => {
        const isActive = overlay.classList.contains("active");
        overlay.classList.toggle("active");

        if (!isActive) {
            const firstFocusableElement = overlay.querySelector(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex=" - 1"])'
            );
            if (firstFocusableElement) {
            firstFocusableElement.focus();
            }
        }
    };

    document.addEventListener("click", handleOverlayInteraction);
    document.addEventListener("keydown", handleOverlayInteraction);
});
