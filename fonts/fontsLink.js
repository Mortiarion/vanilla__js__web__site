const addGoogleFontsLinks = () => {
    const head = document.head;

    const preconnect1 = document.createElement("link");
    preconnect1.rel = "preconnect";
    preconnect1.href = "https://fonts.googleapis.com";
    head.appendChild(preconnect1);

    const preconnect2 = document.createElement("link");
    preconnect2.rel = "preconnect";
    preconnect2.href = "https://fonts.gstatic.com";
    preconnect2.setAttribute("crossorigin", "");
    head.appendChild(preconnect2);

    const fontLink = document.createElement("link");
    fontLink.href =
        "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;1,600&family=Raleway:wght@400;500;600;700&display=swap";
    fontLink.rel = "stylesheet";
    head.appendChild(fontLink);
};

addGoogleFontsLinks();