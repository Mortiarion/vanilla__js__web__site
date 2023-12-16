const styleOverlay = `
    .overlay {
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0);
        z-index: -1; /* Початково ховаємо оверлей за екраном */
        transition: background-color 0.5s ease, opacity 0.5s ease; 
    }

    .overlay.active {
        background-color: rgba(0, 0, 0, 0.7); 
        z-index: 999;
        opacity: 1;
        transition: background-color 0.5s ease, opacity 0.5s ease; 
    }

`;

export default styleOverlay;