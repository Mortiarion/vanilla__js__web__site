const styleCustomSelect = `
    .custom__select {
        position: relative;
        width: 100%;
        height: 50px;
    }
    .custom__select-trigger {
        // font-size: 1.6rem;
        background-color: #fff;
        border: 1px solid #6f6f6f;
        border-radius: 0.4rem;
        cursor: pointer;
    }
    .custom__select-trigger {
        position: relative;
        // width: 100%;
        // height: 100%;
        background-color: #fff;
        padding: 0.7rem 0.8rem;
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
    }
    .custom__select-trigger:hover {
        border-color: #8c00ff;
    }
    .custom__select-options {
        position: absolute;
        left: 0;
        border: 1px solid #6f6f6f;
        border-radius: 0.4rem;
        background-color: #fff;
        box-shadow: 0 0 4px #e9e1f8;
        z-index: 1;
        display: none;
    }
    .custom__select.is__active .custom__select-options {
        display: block;
    }
    .custom__select-option {
        position: relative;
        padding: 0.8rem;
        border-radius: 0.4rem;
        // width: 100%;
    }
    .custom__select-option:hover {
        background-color: #f7ecff;
    }
`;
export default styleCustomSelect;