const headerStyle = `
    .header__top {
        background-color: var(--background-header);
        display: flex;
        align-items: center;
        padding: 4px 10px;
    }
    .header__navigation-logo {
        width: 113px;
        height: 50px;
        display: inline-block;
        padding: 0 9px 0 0;
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
        margin: 0 10px 0 0;
        transition: 0.5s;
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
        transition: 0.5s;
    }
    .header__navigation-search-btn:hover {
        background-color: var(--search);
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
        align-items: center;
    }
    .header__navigation-right-language {
        display: flex;
        padding: 17px 25px 17px 15px;
        margin: 0 0 0 0;
        position: relative;
        align-items: center;
        color: var(--white);
    }
    .header__navigation-right-flag {
        background-image: url("./img/nav-sprite-global-country.png");
        background-repeat: no-repeat;
        width: 22px;
        height: 16px;
        background-position: 0% 47%;
        margin: 0 5px 0 0;
    }
    .language {
        font-weight: 700;
        font-family: var(--second-fonts);
        font-size: 14px;
    }
    .header__navigation-right-language .triangle {
        right: 13px;
        top: 25px;
        border-top: 4px solid var(--triangle-header-right);
    }
    .header__navigation-right-sign {
        display: flex;
        flex-direction: column;
        padding: 12px 25px 12px 15px;
        position: relative;
        color: var(--white);
    }
    .sign__one,
    .sign__two  {
        font-size: 12px;
        white-space: nowrap;
    }
    .sign__two {
        font-size: 14px;
        font-weight: 700;
    }
    .header__navigation-right-sign .triangle {
        top: 26px;
        right: 13px;
        border-top: 4px solid var(--triangle-header-right);
    }

    .header__navigation-right-order {
        color: var(--white);
        display: flex;
        flex-direction: column;
        padding: 12px 15px;
    }
    .order__one {
        font-size: 12px;
    }
    .order__two {
        white-space: nowrap;
        font-size: 14px;
        font-weight: 700;
    }


    .header__navigation-right-cart {
        color: var(--white);
        display: flex;
        align-items: flex-end;
        padding: 12px 15px;
    }
    .header__navigation-right-image {
        background-image: url("./img/nav-sprite-global-2x-reorg.png");
        background-repeat: no-repeat;
        width: 38px;
        height: 26px;
        display: inline-block;
        background-position: 71% 80%;
        background-size: 308px;
        position: relative;

    }
    .cart__one {
        position: absolute;
        top: -3px;
        right: 12px;
        color: var(--cart-zero);
        font-weight: 700;
    }
    .cart__two {
        font-size: 14px;
        font-weight: 700;
    }

`;

export default headerStyle;
