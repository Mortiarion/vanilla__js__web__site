const createdElementsTextContent = (
    tagName,
    className,
    textContent = "",
    parentElement = document.body
) => {
    const element = document.createElement(tagName);
    element.className = className;

    element.textContent = textContent;

    parentElement.appendChild(element);
    return element;
};

export default createdElementsTextContent;