const styleCustomScrollBar = `
    :root {
        --scrollbar-width: 6px;
        --scrollbar-thumb-color: #00453e;
        --scrollbar-thumb-hover-color: #006258;
        --scrollbar-color: #00453e transparent;
    }
    ::-webkit-scrollbar {
        width: var(--scrollbar-width);
    }
    ::-webkit-scrollbar-thumb {
        background-color: var(--scrollbar-thumb-color);
    }
    ::-webkit-scrollbar-thumb:hover {
        background-color: var(--scrollbar-thumb-hover-color);
    }

    * {
        scrollbar-width: thin;
        scrollbar-color: var(--scrollbar-color);
    }
    *::-moz-scrollbar-thumb {
        background-color: var(--scrollbar-thumb-color);
        border-radius: 5px;
    }
    *::-moz-scrollbar-thumb:hover {
        background-color: var(--scrollbar-thumb-hover-color);
    }
`;

export default styleCustomScrollBar;
