const headerStyle = `
    .header__top {
        background-color: var(--background-header);
        height: 60px;
        display: flex;
        align-items: center;
        padding: 0 10px;
        justify-content: space-between;
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
    .header__navigation-location {
        display: flex;
        align-items: center;
        padding: 0 12px;
    }
    .header__navigation-location-icon {
        background-image: url("./img/nav-sprite-global-1x-reorg.png");
        width: 15px;
        height: 18px;
        display: inline-block;
        background-repeat: no-repeat;
        background-position: 21.2% 87.5%;
        margin: 9px 3px 0 0;
    }
    .header__navigation-wrapper {
        display: flex;
        flex-direction: column;
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
    }

    .header__navigation-search-btn {
        width: 50px;
        height: 50px;
        display: inline-block;
    }
    .header__navigation-search-image {
        background-image: url("./img/nav-sprite-global-1x-reorg.png");
        background-repeat: no-repeat;
        width: 100%;
        height: 100%;
        display: inline-block;
        background-position: 0% 66%;
    }
`;

export default headerStyle;