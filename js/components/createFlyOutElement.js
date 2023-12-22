document.addEventListener("DOMContentLoaded", () => {
    const flyOutElementApendHtml = () => {
        const flyOutElementApendMain = `

            <div class="triangles"></div>
            <div id="nav-flyout-icp" class="nav-flyout">
                
                <div class="nav-template nav-flyout-content">
                <span class="nav-item">
                    <span class="nav-text">Change language</span>
                    <a href="#" class="learn-more">Learn more</a>
                </span>

                <a href="#" class="nav-item">
                    <i class="icp-radio icp-radio-active"></i>
                    <span class="nav-text">English - EN</span>
                    
                </a>

                <div class="nav-divider"></div>

                <a href="#" class="nav-link nav-item">
                    <span class="nav-text">
                    <i class="icp-radio"></i>
                    español - ES
                    </span>
                </a>

                <a href="#" class="nav-link nav-item">
                    <span class="nav-text">
                    <i class="icp-radio"></i>
                    العربية - AR
                    </span>
                </a>

                <a href="#" class="nav-link nav-item">
                    <span class="nav-text">
                    <i class="icp-radio"></i>
                    Deutsch - DE
                    </span>
                </a>

                <a href="#" class="nav-link nav-item">
                    <span class="nav-text">
                    <i class="icp-radio"></i>
                    עברית - HE
                    </span>
                </a>

                <a href="#" class="nav-link nav-item">
                    <span class="nav-text">
                    <i class="icp-radio"></i>
                    한국어 - KO
                    </span>
                </a>

                <a href="#" class="nav-link nav-item">
                    <span class="nav-text">
                    <i class="icp-radio"></i>
                    português - PT
                    </span>
                </a>

                <a href="#" class="nav-link nav-item">
                    <span class="nav-text">
                    <i class="icp-radio"></i>
                    中文 (简体) -ZH
                    </span>
                </a>

                <a href="#" class="nav-link nav-item">
                    <span class="nav-text">
                    <i class="icp-radio"></i>
                    中文 (繁體) - ZH
                    </span>
                </a>

                <div class="nav-divider"></div>

                <span class="nav-item">
                    <span class="nav-text">
                    Change currency
                    <a href="#" class="learn-more">Learn more</a>
                    </span>
                </span>

                <span class="nav-item">
                    <span class="nav-text">
                    <span>$ - USD - US Dollar</span>
                    <a href="#" class="icp-flyout-change">Change</a>
                    </span>
                </span>

                <div class="nav-divider"></div>

                <span class="nav-item">
                    <span class="nav-text">
                    <i class="flag-us header__navbar-right-flag"></i>
                    <span>You are shopping on</span>
                    <span>Amazon.com</span>
                    </span>
                </span>

                <a href="#" class="nav-item">
                    <span class="nav-text">
                    <div class="change-link">Change country / region.</div>
                    </span>
                </a>
                </div>
            </div>

    `;

        const creatHoverElement = document.createElement('div');
        creatHoverElement.className = "hover__element";
        const languageBarApend = document.querySelector(
            ".header__navigation-right-language"
        );
        languageBarApend.appendChild(creatHoverElement);
        creatHoverElement.innerHTML = flyOutElementApendMain;
    };

    flyOutElementApendHtml();

    const languageMenuClick = document.querySelector(".header__navigation-right-language");
    const hoverElement = document.querySelector(".hover__element ");

    const openLanguageBar = () => {
        hoverElement.classList.add("is__active-hover-element");
        languageMenuClick.classList.add("hover__element-active");
    }
    const closeLanguageBar = () => {
        hoverElement.classList.remove("is__active-hover-element");
        languageMenuClick.classList.remove("hover__element-active");
    }

    const interactiveFlyOut = (e) => {
        const isLanguageMenuClick = e.target === languageMenuClick;
        const isHoverElement = e.target === hoverElement;

        if (isLanguageMenuClick || isHoverElement) {
            if (!hoverElement.classList.contains("is__active-hover-element")) {
                openLanguageBar();
            } else {
                closeLanguageBar();
            }
        } else {
            closeLanguageBar();
        }
        
    }

    document.addEventListener("click", interactiveFlyOut);

});
