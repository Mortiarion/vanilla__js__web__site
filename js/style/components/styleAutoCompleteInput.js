const styleAutoCompleteInput = `
    .autocomplete__list {
        background-color: var(--white);
        border: 1px solid var(--border-select);
        border-bottom: none;
        border-top: none;
        transition: opacity 0.5s ease-in-out;
        opacity: 0;
    }
    .autocomplete__list div{
        padding: 10px 15px;
        cursor: pointer;
        border-bottom: 1px solid var(--border-select);
        z-index: 2;
        position: sticky;
        transition: 0.5s;
    }
    .autocomplete__list div:hover,
    .selected {
        background-color: var(--select);
    }
    .autocomplete__list div:first-child {
        border-top: 1px solid var(--border-select);
    }
    .header__navigation-search-field.show,
    .autocomplete__list.show,
    .autocomplete__message.show {
        opacity: 1;
        position: relative;
        z-index: 1000;
    }
    .autocomplete__message.show {
        opacity: 1;
    }
    .autocomplete__message {
        transition: opacity 0.5s ease-in-out;
        opacity: 0;
        font-style: italic;
        pointer-events: none;
        background-color: var(--white);
        border: 1px solid var(--border-select);
    }
    .autocomplete__message div{
        padding: 10px 15px;
    }
`;

export default styleAutoCompleteInput;