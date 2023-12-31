const styleCustomSelect = `
    .custom__select {
        position: relative;
    }
    .custom__select-trigger {
        position: relative;
        border-radius: 4px 0 0 4px;
        background-color: var(--select);
        padding: 14px 21px 14px 9px;
        cursor: pointer;
        border-right: 1px solid var(--border-select);
        color: var(--medium);
        font-size: 12px;
        white-space: nowrap;
        font-weight: 600;
        transition: 0.5s;
    }
    .custom__select-trigger:hover {
        background-color: var(--bg-trigger);
        color: var(--black);
    }
    .custom__select-trigger::after {
        content: "";
        border-style: solid;
        border-width: 4px;
        border-color: transparent;
        border-top: 4px solid hsl(0, 0%, 40%);
        position: absolute;
        z-index: 1;
        pointer-events: none;
        transform: translate(97%, 52%);
    }

    .custom__select-options {
        position: absolute;
        left: 0;
        border: 1px solid #6f6f6f;
        background-color: #fff;
        z-index: 3;
        display: none;
        height: 400px;
        overflow: auto;
        border-radius: 4px;
    }
    .custom__select.active .custom__select-options,
    .custom__select.active {
        z-index: 1000;
        display: block;
    }
    .custom__select-option {
        position: relative;
        padding: 0.8rem;
        transition: 0.5s;
    }
    .custom__select-option:hover {
        background-color: var(--select);
        cursor: pointer;
    }

`;
export default styleCustomSelect;