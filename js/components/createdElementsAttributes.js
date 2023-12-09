const createdElementsAttributes = (
    tagName,
    className,
    attributes = {},
    parentElement = document.body
) => {
    const element = document.createElement(tagName);
    element.className = className;

    for (const attribute in attributes) {
        element.setAttribute(attribute, attributes[attribute]);
    }

    parentElement.appendChild(element);
    return element;
};

export default createdElementsAttributes;