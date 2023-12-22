const styleFlyOutElement = `
    .hover__element {
        display: none;
        top: 109%;
        right: -168.7%;
        position: absolute;
        width: 240px;
        background-color: #fff;
        z-index: 999;
        border: 1px solid #bbb;
        border-radius: 3px;
        padding: 15px;
    }
    .hover__element .triangles {
        top: -19px;
        left: 99px;
        border-style: solid;
        border-width: 10px;
        border-color: transparent;
        border-bottom: 10px solid hsl(0deg, 0%, 100%);
        position: absolute;
        z-index: 1;
        pointer-events: none;
    }
    .hover__element span,
    .hover__element a {
        color: #000000;
        font-size: 13px;
        }
    .hover__element .nav-item {
        display: block;
        margin-bottom: 10px;
    }
    .hover__element .nav-divider {
        position: relative;
        display: block;
        line-height: 1px;
        height: 1px;
        overflow: hidden;
        background: #eee;
        margin: 0 0 9px;
    }
    .hover__element .icp-radio {
        margin: 0 0.5em 0 0;
        position: relative;
        top: 3px;
        display: inline-block;
        width: 18px;
        height: 18px;
        background: url("../img/nav-sprite-global-country.png");
        background-position: -75px -2px;
    }
    .hover__element a:hover .icp-radio {
        background-position: -123px -2px;
    }
    .hover__element .icp-radio-active {
        background-position: -99px -2px;
    }
    .hover__element .nav-link.nav-item:hover .nav-text:hover {
        color: #e47911;
        text-decoration: underline;
    }
    .hover__element .learn-more,
    .hover__element .icp-flyout-change {
        color: #007185;
        font-size: 11px;
        margin-left: 15px;
    }
    .hover__element .learn-more:hover,
    .hover__element .icp-flyout-change:hover {
        text-decoration: underline;
        color: #e47911;
    }
    .hover__element .flag-us.header__navbar-right-flag {
        display: inline-block;
        position: absolute;
        border-radius: 3px;
    }
    .hover__element .change-link {
        color: #0066c0;
        margin: 0 auto;
        text-align: center;
        font-size: 13px;
    }
    .hover__element .change-link:hover {
        text-decoration: underline;
    }
    .is__active-hover-element {
        display: block;
        z-index: 1000;
    }
    .hover__element-active {
        z-index: 1000;
        background-color: #00544b;
    }
`;

export default styleFlyOutElement;
