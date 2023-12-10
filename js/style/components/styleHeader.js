const headerStyle = `
    .header__top {
        background-color: var(--background-header);
        display: flex;
        align-items: center;
        padding: 5px 10px;
    }
    .header__navigation-logo {
        width: 113px;
        height: 50px;
        display: inline-block;
        margin: 0 10px 0 0;
    }
    .logo {
        background-image: url("./img/nav-sprite-global-1x-reorg.png");
        background-repeat: no-repeat;
        width: 100%;
        height: 100%;
        display: inline-block;
        background-position: 95.5% 53.5%;
    }
    .header__top-center {
        width: 100%;
    }
    .header__navigation-location {
        display: flex;
        align-items: center;
        padding: 0 12px;
        margin: 0 10px 0 0;
    }
    .header__navigation-location-icon {
        background-image: url("./img/nav-sprite-global-1x-reorg.png");
        width: 20px;
        height: 18px;
        display: inline-block;
        background-repeat: no-repeat;
        background-position: 21.2% 87.5%;
        margin: 9px 3px 0 0;
    }
    .header__navigation-wrapper {
        display: flex;
        flex-direction: column;
        width: 100%;
    }
    .header__navigation-deliver {
        font-size: 12px;
        color: var(--text-color);
    }
    .header__navigation-country {
        font-size: 14px;
        font-weight: 700;
        color: var(--white);
    }
    .header__top-left {
        display: flex;
    }
    .header__navigation-form {
        display: flex;
        height: 40px;
    }
    .header__navigation-form:hover {
        box-shadow: 0 2px 6px 0 #000;
    }
    .header__navigation-form-fill {
        width: 100%;
    }
    .header__navigation-search-field {
        width: 100%;
        height: 100%;
        padding-left: 15px;
    }

    .header__navigation-search-btn {
        width: 45px;
        height: 40px;
        display: inline-block;
        background-color: var(--btn);
        border-radius: 0 4px 4px 0;
        border-left: 1px solid var(--border-select);
        cursor: pointer;
    }
    .header__navigation-search-btn:hover {
        background-color: #ffcabd;
    }
    .header__navigation-search-image {
        background-image: url("./img/nav-sprite-global-2x-reorg.png");
        background-repeat: no-repeat;
        width: 100%;
        height: 100%;
        display: inline-block;
        background-position: -1% 68.3%;
        background-size: 350px;
        pointer-events: none;
    }


    .header__top-right {
        display: flex;
    }
    .header__navigation-right-flag {
        background-image: url("./img/nav-sprite-global-country.png")
    }
`;

export default headerStyle;